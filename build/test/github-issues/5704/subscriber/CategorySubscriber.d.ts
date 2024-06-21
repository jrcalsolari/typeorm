import { Category } from "../entity/Category";
import { EntitySubscriberInterface } from "../../../../src";
export declare class CategorySubscriber implements EntitySubscriberInterface<Category> {
    listenTo(): typeof Category;
    afterLoad(entity: Category): Promise<any>;
}
