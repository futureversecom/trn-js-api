import { describe, expect, jest, test } from "@jest/globals";
import { ISubmittableResult } from "@polkadot/types/types/extrinsic";
import { send } from "@therootnetwork/extrinsic/libs/send";
import { Extrinsic, ExtrinsicResult, Result } from "@therootnetwork/extrinsic/types";
describe("send", () => {
	test("sends a given extrinsic ends with ok result", async () => {
		//const api = null;
		const extrinsic = {
			send: (callback: (result: ISubmittableResult) => void) => {
				setTimeout(() => {
					callback({
						status: {
							type: "InBlock",
							isInBlock: true,
							asInBlock: "0x0b6435045b7637f6a6ec81dd40f61e12b769958cb334dde7d76ce6c5d14dbc30",
						},
						blockNumber: 10456157,
						txIndex: 0,
						events: [
							{
								event: {
									data: { toJSON: () => ["1", "2"] },
									meta: { fields: { toJSON: () => [{ name: "assetId1" }, { name: "assetId2" }] } },
									section: "assets",
									method: "Transfer1",
								},
								phase: {
									type: "ApplyExtrinsic",
								},
							},
							{
								event: {
									data: { toJSON: () => ["1", "2"] },
									meta: { fields: { toJSON: () => [{}, {}] } },
									section: "assets",
									method: "Transfer2",
								},
								phase: {
									type: "ApplyExtrinsic",
								},
							},
						],
					} as unknown as ISubmittableResult);
				}, 100);

				return Promise.resolve(jest.fn());
			},
		};

		const sendResult = await send(extrinsic as unknown as Extrinsic);

		expect(sendResult.ok).toBe(true);
		const { events } = sendResult.value as ExtrinsicResult;
		expect((sendResult.value as ExtrinsicResult).id).toEqual("0010456157-000000-0b643");
		expect(events).toEqual([
			{
				name: "assets.Transfer1",
				phase: "ApplyExtrinsic",
				data: { assetId1: "1", assetId2: "2" },
			},
			{
				name: "assets.Transfer2",
				phase: "ApplyExtrinsic",
				data: { arg0: "1", arg1: "2" },
			},
		]);
	});

	test("sends a given extrinsic ends with internal error", async () => {
		const internalError = new Error("internal error");
		const extrinsic = {
			send: (callback: (result: ISubmittableResult) => void) => {
				setTimeout(() => {
					callback({
						internalError,
					} as unknown as ISubmittableResult);
				}, 100);

				return Promise.resolve(jest.fn());
			},
		};

		const sendResult = await send(extrinsic as unknown as Extrinsic);

		expect(sendResult.ok).toBe(false);
		expect((sendResult.value as Error).message).toEqual("Send::Unable to send the extrinsic");
		expect((sendResult.value as Error).cause).toEqual(internalError);
	});

	test("sends a given extrinsic ends with dispatch error", async () => {
		const extrinsic1 = {
			send: (callback: (result: ISubmittableResult) => void) => {
				setTimeout(() => {
					callback({
						dispatchError: { isModule: false, toJSON: () => ({}) },
					} as unknown as ISubmittableResult);
				}, 100);

				return Promise.resolve(jest.fn());
			},
		};

		const sendResult1 = await send(extrinsic1 as unknown as Extrinsic);
		expect(sendResult1.ok).toBe(false);
		expect((sendResult1.value as Error).message).toEqual("Send::Unable to send the extrinsic");
		expect((sendResult1.value as Error).cause).toEqual({});

		const extrinsic2 = {
			send: (callback: (result: ISubmittableResult) => void) => {
				setTimeout(() => {
					callback({
						dispatchError: {
							isModule: true,
							registry: {
								findMetaError: jest.fn(() => ({
									section: "system",
									name: "remark",
									docs: "error",
								})),
							},
							asModule: {},
						},
					} as unknown as ISubmittableResult);
				}, 100);

				return Promise.resolve(jest.fn());
			},
		};

		const sendResult2 = await send(extrinsic2 as unknown as Extrinsic);
		expect(sendResult2.ok).toBe(false);
		expect((sendResult2.value as Error).message).toEqual("Send::Unable to send the extrinsic");
		expect((sendResult2.value as Error).cause).toEqual({
			section: "system",
			name: "remark",
			docs: "error",
		});
	});

	test("sends a given extrinsic ends with error from received result", async () => {
		const extrinsic = { ok: false, value: new Error("error") };
		const sendResult = await send(extrinsic as Result<never, Error>);

		expect(sendResult.ok).toEqual(false);
		expect((sendResult.value as Error).message).toStrictEqual(`error`);
	});

	test("sends a given extrinsic ends with error from extrinsic", async () => {
		const extrinsic = { send: jest.fn(() => Promise.reject("error")) };
		const sendResult = await send(extrinsic as unknown as Extrinsic);
		expect(sendResult.ok).toEqual(false);
		expect((sendResult.value as Error).message).toStrictEqual(`Send::Unable to send the extrinsic`);
	});
});
