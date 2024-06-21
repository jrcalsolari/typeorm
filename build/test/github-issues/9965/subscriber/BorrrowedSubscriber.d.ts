import { EntitySubscriberInterface } from "../../../../src";
export declare class BorrowedSubscriber implements EntitySubscriberInterface {
    listenTo(): string | Function;
    afterInsert(): void | Promise<any>;
}
