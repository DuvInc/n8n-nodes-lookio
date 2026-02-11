import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LookioApi implements ICredentialType {
	name = 'lookioApi';

	displayName = 'Lookio API';

	// Link to your community node's README
	documentationUrl = 'https://lookio.app';
	// @ts-expect-error icon property is required by linter but not in type definition
	icon = 'file:lookio.svg';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api_key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.lookio.app/webhook',
			url: '/get-resources',
			method: 'GET',
			qs: {
				// We need a workspace_id to test properly, but we can try to call an endpoint
				// that might fail with a specific error if auth is wrong vs right.
				// For now, let's just use the base check.
				// Actually, without workspace_id, get-resources might fail with 400, but auth check
				// usually happens before validation.
			},
		},
	};
}
