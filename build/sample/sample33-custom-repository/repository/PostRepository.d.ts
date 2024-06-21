import { Post } from "../entity/Post";
export declare const PostRepository: import("../../../src").Repository<Post> & {
    findMyPost(): Promise<Post | null>;
};
