export default buildTreeSelectOptions;
/**
 * Build the options array for a tree Select. The source is an array like [[parent1, [child1, child2]], ...]
 * @param {array} source Data source
 * @param {string} labelName Used for the label property name (text in a Table filter, title in a TreeSelect)
 * @param {boolean} [compoundChildren=true] If true the resulting children values will be compounds "parent|child"
 * @returns {array<array>} [{ text, value, children: [{ text, value }, ...]}, ...]
 * @memberof AntdUtils
 */
declare function buildTreeSelectOptions(source: array, labelName: string, compoundChildren?: boolean | undefined): array<array>;
//# sourceMappingURL=buildTreeSelectOptions.d.ts.map