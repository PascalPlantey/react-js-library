export default useCheckChanges;
/**
 * Tracks changes in the parameters list from one render to another. Helper to check why a state change/render occurs
 * @param  {...any} values List of parameters
 * @returns {array} [boolean, array] [true, { paramIndex, previousValue, newValue }]
 * @example
 * const [obj, setObj] = useState({ a: 1, b: [10, 2] })
 * const [changed, what] = useCheckChanges(obj, obj.values()) // Track changes of obj and its values
 *
 * useEffect(() => { setObj({ a: 1, b: [12, 3] })}, []) // obj and obj.b did change
 * useEffect(() => { obj.a = 2; setObj(obj); }, [])     // obj.a did change (but no render, [changed, what] not updated)
 */
declare function useCheckChanges(...values: any[]): array;
//# sourceMappingURL=useCheckChanges.d.ts.map