import { Compound } from "../../../js";

/**
 * Build the options array for a tree Select. The source is an array like [[parent1, [child1, child2]], ...]
 * @param {array} source Data source
 * @param {*} compoundChildren If true the resulting children values will be compounds "parent|child"
 * @returns {array<array>} [{ text, value, children: [{ text, value }, ...]}, ...]
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