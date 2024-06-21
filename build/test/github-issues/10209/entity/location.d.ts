import { ConfigurationEntity } from "./configuration";
export declare class LocationEntity {
    id: string;
    name: string;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    configurations: ConfigurationEntity[];
}
