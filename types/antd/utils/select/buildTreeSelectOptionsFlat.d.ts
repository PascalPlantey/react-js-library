export default buildTreeSelectOptions;
/**
 * Build the options array for a tree Select. The source is an array like [[parent1, [child1, child2]], ...]
 * @param {array} source Data source
 * @param {*} compoundChildren If true the resulting children values will be compounds "parent|child"
 * @returns {array<array>} [{ text, value, children: [{ text, value }, ...]}, ...]
 */
declare function buildTreeSelectOptions(source: array, compoundChildren?: any): array<array>;
//# sourceMappingURL=buildTreeSelectOptionsFlat.d.ts.map