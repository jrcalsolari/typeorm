/// <reference types="node" />
export declare class Gulpfile {
    /**
     * Cleans build folder.
     */
    clean(): Promise<string[]>;
    /**
     * Runs typescript files compilation.
     */
    compile(): NodeJS.ReadWriteStream;
    /**
     * Copies all source files into destination folder in a correct structure.
     */
    browserCopySources(): NodeJS.ReadWriteStream;
    /**
     * Copies templates for compilation
     */
    browserCopyTemplates(): NodeJS.ReadWriteStream;
    browserCompile(): NodeJS.ReadWriteStream[];
    browserClearPackageDirectory(): Promise<string[]>;
    /**
     * Publishes a package to npm from ./build/package directory.
     */
    packagePublish(): NodeJS.ReadWriteStream;
    /**
     * Packs a .tgz from ./build/package directory.
     */
    packagePack(): NodeJS.ReadWriteStream;
    /**
     * Publishes a package to npm from ./build/package directory with @next tag.
     */
    packagePublishNext(): NodeJS.ReadWriteStream;
    /**
     * Copies all sources to the package directory.
     */
    packageCompile(): NodeJS.ReadWriteStream[];
    /**
     * Moves all compiled files to the final package directory.
     */
    packageMoveCompiledFiles(): NodeJS.ReadWriteStream;
    /**
     * Create ESM index file in the final package directory.
     */
    packageCreateEsmIndex(): Promise<void>;
    /**
     * Removes /// <reference from compiled sources.
     */
    packageReplaceReferences(): NodeJS.ReadWriteStream;
    /**
     * Moves all compiled files to the final package directory.
     */
    packageClearPackageDirectory(): Promise<string[]>;
    /**
     * Change the "private" state of the packaged package.json file to public.
     */
    packagePreparePackageFile(): NodeJS.ReadWriteStream;
    /**
     * Copies README.md into the package.
     */
    packageCopyReadme(): NodeJS.ReadWriteStream;
    /**
     * Copies shims to use typeorm in different environment and conditions file into package.
     */
    packageCopyShims(): NodeJS.ReadWriteStream;
    /**
     * Creates a package that can be published to npm.
     */
    package(): (string | string[])[];
    /**
     * Creates a package .tgz
     */
    pack(): string[];
    /**
     * Creates a package and publishes it to npm.
     */
    publish(): string[];
    /**
     * Creates a package and publishes it to npm with @next tag.
     */
    publishNext(): string[];
}
