export class Enum {
    constructor(name: any, values: any);
    #private;
}
export default createEnum;
/**
 * Create a pseudo enumeration
 * @param {string} name Name of enumeration
 * @param {object|Array} values Enumeration values (see examples)
 * @returns {object}
 * @example
 * const Directions = createEnum('Directions', ['up', 'down']);
 * console.log(Directions) // { up: 'up', down: 'down' }
 * @example
 * const KeyboardDirections = createEnum('Keyboard directions', [
 *   { key: 'up', value: 56 },
 *   ['down', 84],
 *   ['left', 55],
 *   ['right', 57]
 * ]);
 * switch(key) {
 *   case(KeyboardDirections.up)
 *     // code
 *     break;
 *   ...
 * }
 */
declare function createEnum(name: string, values: object | any[]): object;
//# sourceMappingURL=Enum.d.ts.map