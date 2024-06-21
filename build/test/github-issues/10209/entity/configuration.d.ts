import { AssetEntity } from "./asset";
import { LocationEntity } from "./location";
export declare enum ConfigurationStatus {
    deleted = -999,
    new = 0
}
export declare class ConfigurationEntity {
    id: string;
    name: string;
    status: ConfigurationStatus;
    location_id: string;
    location: LocationEntity;
    active: boolean;
    assets: AssetEntity[];
    created_at: Date;
    updated_at: Date;
}
