import { useMemo } from "react";

import { buildTreeSelectOptions } from "../../utils";

/**
 * Wrapper for buildTreeSelectOptions
 * @param {Array} source Data source
 * @param {boolean} compoundChildren If true the resulting children values will be compounds "parent|child"
 * @returns {Array<Array>} [{ text, value, children: [{ text, value }, ...]}, ...]
 * @memberof AntdHooks
 */
const useTreeSelectOptions = (source, compoundChildren = true) =>
  useMemo(buildTreeSelectOptions(source, compoundChildren), [source, compoundChildren]);

export default useTreeSelectOptions;