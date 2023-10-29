export default ExtArray;
declare class ExtArray extends Array<any> {
    constructor(arrayLength?: number | undefined);
    constructor(arrayLength: number);
    constructor(...items: any[]);
    get first(): any;
    get last(): any;
}
//# sourceMappingURL=ExtArray.d.ts.map