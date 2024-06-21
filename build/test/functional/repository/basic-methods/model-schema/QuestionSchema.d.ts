declare const _default: {
    name: string;
    table: {
        name: string;
    };
    columns: {
        id: {
            type: NumberConstructor;
            primary: boolean;
            generated: boolean;
        };
        title: {
            type: StringConstructor;
            nullable: boolean;
        };
    };
    target: (this: any) => void;
};
export default _default;
