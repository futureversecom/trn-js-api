import { Keyring } from "@polkadot/api";
import { hexToU8a } from "@polkadot/util";
import { SubmittableResultValue } from "@polkadot/api/types";
import { EventRecord } from "@polkadot/types/interfaces";
import assert from "node:assert";

export type Signer = ReturnType<InstanceType<typeof Keyring>["addFromSeed"]>;

export function createKeyring(seed: string): Signer {
	const keyring = new Keyring({ type: "ethereum" });
	const seedU8a = hexToU8a(seed);
	return keyring.addFromSeed(seedU8a);
}

type EventFilter = `${string}.${string}`;

export function filterExtrinsicEvents(
	events: SubmittableResultValue["events"],
	eventFilters: EventFilter[]
): EventRecord[] {
	assert(events);

	return eventFilters.map((eventFilter) => {
		const event = events.find(({ event }) => {
			const name = `${event.section[0].toUpperCase() + event.section.slice(1)}.${
				event.method
			}` as `${string}.${string}`;

			if (typeof eventFilter === "string") return name === eventFilter;
		});

		assert(event);
		return event;
	});
}
