import { describe, expect, test } from "@jest/globals";
import { EventRecord } from "@polkadot/types/interfaces";
import { ExtrinsicEvent } from "@therootnetwork/extrinsic/types";
import { filterExtrinsicEvents } from "@therootnetwork/extrinsic/utils";

const eventRecordEvent = {
	event: {
		section: "system",
		method: "Remarked",
	},
} as EventRecord;

const extrinsicEventEvent = {
	name: "system.Remarked",
} as ExtrinsicEvent;

describe("filterExtrinsicEvents", () => {
	test("it returns expected events", () => {
		const [remarkEvent] = filterExtrinsicEvents([eventRecordEvent], ["system.Remarked"]);

		expect(remarkEvent).toBe(eventRecordEvent);

		const [remarkEvent2] = filterExtrinsicEvents([extrinsicEventEvent], ["system.Remarked"]);

		expect(remarkEvent2).toBe(extrinsicEventEvent);
	});
	test("it returns undefined for missing events", () => {
		const [remarkEvent, secondEvent] = filterExtrinsicEvents(
			[eventRecordEvent, eventRecordEvent],
			["system.Remarked", "balances.Transfer"]
		);

		expect(remarkEvent).toBe(eventRecordEvent);
		expect(secondEvent).toBeUndefined();

		const [remarkEvent2, secondEvent2] = filterExtrinsicEvents(
			[extrinsicEventEvent, extrinsicEventEvent],
			["system.Remarked", "balances.Transfer"]
		);

		expect(remarkEvent2).toBe(extrinsicEventEvent);
		expect(secondEvent2).toBeUndefined();
	});
});
