export default buildTreeSelectOptions;
/**
 * Build the options array for a tree Select. The source is an array like [[parent1, [child1, child2]], ...]
 * @param {array} source Data source
 * @param {boolean} compoundChildren If true the resulting children values will be compounds "parent|child"
 * @returns {array<array>} [{ text, value, children: [{ text, value }, ...]}, ...]
 * @memberof AntdUtils
 */
declare function buildTreeSelectOptions(source: array, compoundChildren?: boolean): array<array>;
//# sourceMappingURL=buildTreeSelectOptions.d.ts.map