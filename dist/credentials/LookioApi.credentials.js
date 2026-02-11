"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookioApi = void 0;
class LookioApi {
    constructor() {
        this.name = 'lookioApi';
        this.displayName = 'Lookio API';
        this.documentationUrl = 'https://lookio.app';
        this.icon = 'file:lookio.svg';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'api_key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.lookio.app/webhook',
                url: '/get-resources',
                method: 'GET',
                qs: {},
            },
        };
    }
}
exports.LookioApi = LookioApi;
//# sourceMappingURL=LookioApi.credentials.js.map