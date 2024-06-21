import { Post } from "../entity/Post";
import { EntitySubscriberInterface } from "../../../../src";
import { AfterQueryEvent, BeforeQueryEvent } from "../../../../src/subscriber/event/QueryEvent";
export declare class PostSubscriber implements EntitySubscriberInterface<Post> {
    listenTo(): typeof Post;
    beforeQuery(event: BeforeQueryEvent<Post>): void | Promise<any>;
    afterQuery(event: AfterQueryEvent<Post>): void | Promise<any>;
}
