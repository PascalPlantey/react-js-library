export default ExtArray;
declare class ExtArray extends Array<any> {
    constructor(arrayLength?: number | undefined);
    constructor(arrayLength: number);
    constructor(...items: any[]);
    get first(): any;
    get last(): any;
    get [Symbol.toStringTag](): string;
}
//# sourceMappingURL=ExtArray.d.ts.map