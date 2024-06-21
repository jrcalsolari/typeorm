import { Book } from "./Book";
export declare const BORROWED = "borrowed";
export declare class User {
    id: string;
    name: string;
    borrowed: Book[];
}
