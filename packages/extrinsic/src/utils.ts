import { Result, err } from "neverthrow";
import { PlainResult } from "./types";

export function safeReturn<T>(result: Result<T, Error>): PlainResult<T> {
	if (result.isErr()) {
		return {
			value: result.error,
			ok: false,
		};
	}

	return {
		value: result.value,
		ok: true,
	};
}

export function errWithPrefix(prefix: string) {
	return <T = never>(msg: string, cause?: unknown) =>
		err<T, Error>(new Error(`${prefix}::${msg}`, { cause }));
}
