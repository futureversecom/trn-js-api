import { Keyring } from "@polkadot/api";
import { hexToU8a } from "@polkadot/util";
import { EventRecord } from "@polkadot/types/interfaces";

export type Signer = ReturnType<InstanceType<typeof Keyring>["addFromSeed"]>;

export function createKeyring(seed: string): Signer {
	const keyring = new Keyring({ type: "ethereum" });
	const seedU8a = hexToU8a(seed);
	return keyring.addFromSeed(seedU8a);
}

type EventFilter = `${string}.${string}`;

export function filterExtrinsicEvents(
	events: EventRecord[],
	eventFilters: EventFilter[]
): (EventRecord | undefined)[] {
	return eventFilters.map((eventFilter) => {
		const event = events.find(({ event }) => {
			const name = `${event.section}.${event.method}` as `${string}.${string}`;

			if (typeof eventFilter === "string") return name === eventFilter;
		});

		return event;
	});
}
