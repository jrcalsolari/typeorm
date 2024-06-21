"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gulpfile = void 0;
const tslib_1 = require("tslib");
const gulpclass_1 = require("gulpclass");
const fs_1 = tslib_1.__importDefault(require("fs"));
const gulp_1 = tslib_1.__importDefault(require("gulp"));
const del_1 = tslib_1.__importDefault(require("del"));
const gulp_shell_1 = tslib_1.__importDefault(require("gulp-shell"));
const gulp_replace_1 = tslib_1.__importDefault(require("gulp-replace"));
const gulp_rename_1 = tslib_1.__importDefault(require("gulp-rename"));
const gulp_sourcemaps_1 = tslib_1.__importDefault(require("gulp-sourcemaps"));
const gulp_typescript_1 = tslib_1.__importDefault(require("gulp-typescript"));
let Gulpfile = class Gulpfile {
    // -------------------------------------------------------------------------
    // General tasks
    // -------------------------------------------------------------------------
    /**
     * Cleans build folder.
     */
    async clean() {
        return (0, del_1.default)(["./build/**"]);
    }
    /**
     * Runs typescript files compilation.
     */
    compile() {
        return gulp_1.default.src("package.json", { read: false })
            .pipe((0, gulp_shell_1.default)(["npm run compile"]));
    }
    // -------------------------------------------------------------------------
    // Build and packaging for browser
    // -------------------------------------------------------------------------
    /**
     * Copies all source files into destination folder in a correct structure.
     */
    browserCopySources() {
        return gulp_1.default.src([
            "./src/**/*.ts",
            "!./src/commands/*.ts",
            "!./src/cli.ts",
            "!./src/typeorm.ts",
            "!./src/typeorm-model-shim.ts"
        ])
            .pipe(gulp_1.default.dest("./build/browser/src"));
    }
    /**
     * Copies templates for compilation
     */
    browserCopyTemplates() {
        return gulp_1.default.src("./src/platform/*.template")
            .pipe((0, gulp_rename_1.default)((p) => { p.extname = '.ts'; }))
            .pipe(gulp_1.default.dest("./build/browser/src/platform"));
    }
    browserCompile() {
        const tsProject = gulp_typescript_1.default.createProject("tsconfig.json", {
            module: "es2020",
            lib: ["es2021", "dom"],
            typescript: require("typescript")
        });
        const tsResult = gulp_1.default.src([
            "./build/browser/src/**/*.ts",
            "./node_modules/reflect-metadata/**/*.d.ts"
        ])
            .pipe(gulp_sourcemaps_1.default.init())
            .pipe(tsProject());
        return [
            tsResult.dts.pipe(gulp_1.default.dest("./build/package/browser")),
            tsResult.js
                .pipe(gulp_sourcemaps_1.default.write(".", { sourceRoot: "", includeContent: true }))
                .pipe(gulp_1.default.dest("./build/package/browser"))
        ];
    }
    async browserClearPackageDirectory() {
        return (0, del_1.default)([
            "./build/browser/**"
        ]);
    }
    // -------------------------------------------------------------------------
    // Main Packaging and Publishing tasks
    // -------------------------------------------------------------------------
    /**
     * Publishes a package to npm from ./build/package directory.
     */
    packagePublish() {
        return gulp_1.default.src("package.json", { read: false })
            .pipe((0, gulp_shell_1.default)([
            "cd ./build/package && npm publish"
        ]));
    }
    /**
     * Packs a .tgz from ./build/package directory.
     */
    packagePack() {
        return gulp_1.default.src("package.json", { read: false })
            .pipe((0, gulp_shell_1.default)([
            "cd ./build/package && npm pack && mv -f typeorm-*.tgz .."
        ]));
    }
    /**
     * Publishes a package to npm from ./build/package directory with @next tag.
     */
    packagePublishNext() {
        return gulp_1.default.src("package.json", { read: false })
            .pipe((0, gulp_shell_1.default)([
            "cd ./build/package && npm publish --tag next"
        ]));
    }
    /**
     * Copies all sources to the package directory.
     */
    packageCompile() {
        const tsProject = gulp_typescript_1.default.createProject("tsconfig.json", {
            typescript: require("typescript")
        });
        const tsResult = gulp_1.default.src([
            "./src/**/*.ts"
        ])
            .pipe(gulp_sourcemaps_1.default.init())
            .pipe(tsProject());
        return [
            tsResult.dts.pipe(gulp_1.default.dest("./build/package")),
            tsResult.js
                .pipe(gulp_sourcemaps_1.default.write(".", { sourceRoot: "", includeContent: true }))
                .pipe(gulp_1.default.dest("./build/package"))
        ];
    }
    /**
     * Moves all compiled files to the final package directory.
     */
    packageMoveCompiledFiles() {
        return gulp_1.default.src("./build/package/src/**/*")
            .pipe(gulp_1.default.dest("./build/package"));
    }
    /**
     * Create ESM index file in the final package directory.
     */
    async packageCreateEsmIndex() {
        const buildDir = "./build/package";
        const cjsIndex = require(`${buildDir}/index.js`);
        const cjsKeys = Object.keys(cjsIndex).filter(key => key !== "default" && !key.startsWith("__"));
        const indexMjsContent = 'import TypeORM from "./index.js";\n' +
            `const {\n    ${cjsKeys.join(",\n    ")}\n} = TypeORM;\n` +
            `export {\n    ${cjsKeys.join(",\n    ")}\n};\n` +
            'export default TypeORM;\n';
        fs_1.default.writeFileSync(`${buildDir}/index.mjs`, indexMjsContent, "utf8");
    }
    /**
     * Removes /// <reference from compiled sources.
     */
    packageReplaceReferences() {
        return gulp_1.default.src("./build/package/**/*.d.ts")
            .pipe((0, gulp_replace_1.default)(`/// <reference types="node" />`, ""))
            .pipe((0, gulp_replace_1.default)(`/// <reference types="chai" />`, ""))
            .pipe(gulp_1.default.dest("./build/package"));
    }
    /**
     * Moves all compiled files to the final package directory.
     */
    async packageClearPackageDirectory() {
        return (0, del_1.default)([
            "build/package/src/**"
        ]);
    }
    /**
     * Change the "private" state of the packaged package.json file to public.
     */
    packagePreparePackageFile() {
        return gulp_1.default.src("./package.json")
            .pipe((0, gulp_replace_1.default)("\"private\": true,", "\"private\": false,"))
            .pipe(gulp_1.default.dest("./build/package"));
    }
    /**
     * Copies README.md into the package.
     */
    packageCopyReadme() {
        return gulp_1.default.src("./README.md")
            .pipe((0, gulp_replace_1.default)(/```typescript([\s\S]*?)```/g, "```javascript$1```"))
            .pipe(gulp_1.default.dest("./build/package"));
    }
    /**
     * Copies shims to use typeorm in different environment and conditions file into package.
     */
    packageCopyShims() {
        return gulp_1.default.src(["./extra/typeorm-model-shim.js", "./extra/typeorm-class-transformer-shim.js"])
            .pipe(gulp_1.default.dest("./build/package"));
    }
    /**
     * Creates a package that can be published to npm.
     */
    package() {
        return [
            "clean",
            ["browserCopySources", "browserCopyTemplates"],
            ["packageCompile", "browserCompile"],
            "packageMoveCompiledFiles",
            "packageCreateEsmIndex",
            [
                "browserClearPackageDirectory",
                "packageClearPackageDirectory",
                "packageReplaceReferences",
                "packagePreparePackageFile",
                "packageCopyReadme",
                "packageCopyShims"
            ],
        ];
    }
    /**
     * Creates a package .tgz
     */
    pack() {
        return ["package", "packagePack"];
    }
    /**
     * Creates a package and publishes it to npm.
     */
    publish() {
        return ["package", "packagePublish"];
    }
    /**
     * Creates a package and publishes it to npm with @next tag.
     */
    publishNext() {
        return ["package", "packagePublishNext"];
    }
};
exports.Gulpfile = Gulpfile;
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Gulpfile.prototype, "clean", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "compile", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "browserCopySources", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "browserCopyTemplates", null);
tslib_1.__decorate([
    (0, gulpclass_1.MergedTask)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "browserCompile", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Gulpfile.prototype, "browserClearPackageDirectory", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packagePublish", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packagePack", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packagePublishNext", null);
tslib_1.__decorate([
    (0, gulpclass_1.MergedTask)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packageCompile", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packageMoveCompiledFiles", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Gulpfile.prototype, "packageCreateEsmIndex", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packageReplaceReferences", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Gulpfile.prototype, "packageClearPackageDirectory", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packagePreparePackageFile", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packageCopyReadme", null);
tslib_1.__decorate([
    (0, gulpclass_1.Task)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "packageCopyShims", null);
tslib_1.__decorate([
    (0, gulpclass_1.SequenceTask)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "package", null);
tslib_1.__decorate([
    (0, gulpclass_1.SequenceTask)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "pack", null);
tslib_1.__decorate([
    (0, gulpclass_1.SequenceTask)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "publish", null);
tslib_1.__decorate([
    (0, gulpclass_1.SequenceTask)("publish-next"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Gulpfile.prototype, "publishNext", null);
exports.Gulpfile = Gulpfile = tslib_1.__decorate([
    (0, gulpclass_1.Gulpclass)()
], Gulpfile);
//# sourceMappingURL=gulpfile.js.map