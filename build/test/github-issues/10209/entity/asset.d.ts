import { ConfigurationEntity } from "./configuration";
export declare enum AssetStatus {
    new = 0,
    deleted = -999
}
export declare class AssetEntity {
    id: string;
    name: string;
    configuration_id: string;
    status: AssetStatus;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    configuration: ConfigurationEntity;
}
