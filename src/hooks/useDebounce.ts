import { useEffect, useMemo } from "react";
import debounce from "../utils/debounce";

export default function useDebounce<A = unknown, R = void>(
	fn: (args: A) => R,
	ms: number
): (args: A) => Promise<R> {
	const [debouncedFunc, teardown] = useMemo(
		() => debounce<A, R>(fn, ms),
		[fn, ms]
	);

	useEffect(() => () => teardown(), []);

	return debouncedFunc;
}
