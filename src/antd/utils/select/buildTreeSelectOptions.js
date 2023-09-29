import { Compound } from "../../../js";

/**
 * Build the options array for a tree Select. The source is an array like [[parent1, [child1, child2]], ...]
 * @param {array} source Data source
 * @param {boolean} compoundChildren If true the resulting children values will be compounds "parent|child"
 * @returns {array<array>} [{ text, value, children: [{ text, value }, ...]}, ...]
 * @memberof AntdUtils
 */
const buildTreeSelectOptions = (source, compoundChildren = true) => 
  source.map(([parent, children]) => ({
    text: parent,
    value: parent,
    children: children.map(child => ({
      text: child,
      value: compoundChildren ? Compound.structure(parent, child) : child
    }))
  }));

export default buildTreeSelectOptions;