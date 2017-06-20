import {ConnectionOptionsReader} from "../connection/ConnectionOptionsReader";
import {CommandUtils} from "./CommandUtils";

/**
 * Generates a new entity.
 */
export class EntityCreateCommand {
    command = "entity:create";
    describe = "Generates a new entity.";

    builder(yargs: any) {
        return yargs
            .option("c", {
                alias: "connection",
                default: "default",
                describe: "Name of the connection on which to run a query"
            })
            .option("n", {
                alias: "name",
                describe: "Name of the entity class.",
                demand: true
            })
            .option("d", {
                alias: "dir",
                describe: "Directory where entity should be created."
            })
            .option("cf", {
                alias: "config",
                default: "ormconfig",
                describe: "Name of the file with connection configuration."
            });
    }

    async handler(argv: any) {
        const fileContent = EntityCreateCommand.getTemplate(argv.name);
        const filename = argv.name + ".ts";
        let directory = argv.dir;

        // if directory is not set then try to open tsconfig and find default path there
        if (!directory) {
            try {
                const connectionOptionsReader = new ConnectionOptionsReader({ root: process.cwd(), configName: argv.config });
                const connectionOptions = await connectionOptionsReader.get(argv.connection);
                directory = connectionOptions.cli ? connectionOptions.cli.entitiesDir : undefined;
            } catch (err) { }
        }

        const path = process.cwd() + "/" + (directory ? (directory + "/") : "") + filename;
        await CommandUtils.createFile(path, fileContent);
        console.log(`Entity "${path}" has been created successfully.`);
    }

    // -------------------------------------------------------------------------
    // Protected Static Methods
    // -------------------------------------------------------------------------

    /**
     * Gets contents of the entity file.
     */
    protected static getTemplate(name: string): string {
        return `import {Entity} from "typeorm";

@Entity()
export class ${name} {

}
`;
    }

}