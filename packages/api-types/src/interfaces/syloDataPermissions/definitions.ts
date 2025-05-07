export default {
	rpc: {
		getPermissions: {
			description:
				"Get all permissions granted to a grantee by a data author for a given set of data ids",
			params: [
				{
					name: "dataAuthor",
					type: "AccountId",
				},
				{
					name: "grantee",
					type: "AccountId",
				},
				{
					name: "dataIds",
					type: "Vec<Text>",
				},
			],
			type: "Result<GetPermissionsResult, Text>",
		},
	},
	types: {
		DataPermission: "Text",
		PermissionReferenceRecord: {
			permission_record_id: "Text",
			resolvers: "Vec<(Text, Vec<Text>)>",
		},
		GetPermissionsResult: {
			permissions: "Vec<(Text, Vec<DataPermission>)>",
			permission_reference: "Option<PermissionReferenceRecord>",
		},
	},
};
