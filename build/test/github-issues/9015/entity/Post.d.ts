import { BaseEntity } from "../../../../src";
export declare class Post extends BaseEntity {
    id: number;
    title: string;
    description: string;
    updated_at: Date;
}
