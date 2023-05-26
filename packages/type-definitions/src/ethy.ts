export default {
  rpc: {
    "getEventProof": {
      "description": "Get ETH event proof for event Id",
      "params": [
        {
          "name": "eventId",
          "type": "EventProofId"
        }
      ],
      "type": "Option<EthEventProofResponse>"
    },
    "getXrplTxProof": {
      "description": "Get XRPL event proof for event Id",
      "params": [
        {
          "name": "eventId",
          "type": "EventProofId"
        }
      ],
      "type": "Option<XrplEventProofResponse>"
    }
  },
  types: {
    VersionedEventProof: {
      _enum: {
        sentinel: null,
        EventProof: "EventProof",
      },
    },
    ExtrinsicSignature: "EthereumSignature",
    EthyId: "[u8; 32]",
    EthyEventId: "u64",
    EthereumSignature: {
      r: "H256",
      s: "H256",
      v: "U8",
    },
  }
};
