"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lookio = void 0;
class Lookio {
    constructor() {
        this.description = {
            displayName: 'Lookio',
            name: 'lookio',
            icon: 'file:lookio.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with Lookio API',
            defaults: {
                name: 'Lookio',
            },
            usableAsTool: true,
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'lookioApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: 'https://api.lookio.app/webhook',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Assistant',
                            value: 'assistant',
                        },
                        {
                            name: 'Query',
                            value: 'query',
                        },
                        {
                            name: 'Resource',
                            value: 'resource',
                        },
                    ],
                    default: 'query',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'assistant',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create',
                            value: 'create',
                            description: 'Create a new assistant',
                            action: 'Create an assistant',
                            routing: {
                                request: {
                                    method: 'POST',
                                    url: '/create-assistant',
                                },
                            },
                        },
                        {
                            name: 'Delete',
                            value: 'delete',
                            description: 'Delete an assistant',
                            action: 'Delete an assistant',
                            routing: {
                                request: {
                                    method: 'DELETE',
                                    url: '/delete-assistant',
                                },
                            },
                        },
                        {
                            name: 'Get',
                            value: 'get',
                            description: 'Get an assistant or list all',
                            action: 'Get an assistant',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/get-assistants',
                                },
                            },
                        },
                    ],
                    default: 'create',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'resource',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Add',
                            value: 'add',
                            description: 'Add a new resource',
                            action: 'Add a resource',
                        },
                        {
                            name: 'Delete',
                            value: 'delete',
                            description: 'Delete a resource',
                            action: 'Delete a resource',
                            routing: {
                                request: {
                                    method: 'DELETE',
                                    url: '/delete-resource',
                                },
                            },
                        },
                        {
                            name: 'Get',
                            value: 'get',
                            description: 'Get a resource or list all',
                            action: 'Get a resource',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/get-resources',
                                },
                            },
                        },
                    ],
                    default: 'add',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'query',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Ask',
                            value: 'ask',
                            description: 'Query an assistant',
                            action: 'Ask an assistant',
                            routing: {
                                request: {
                                    method: 'POST',
                                    url: '/query',
                                },
                            },
                        },
                    ],
                    default: 'ask',
                },
                {
                    displayName: 'Workspace ID',
                    name: 'workspace_id',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['assistant', 'resource', 'query'],
                            operation: ['create', 'add', 'ask'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'workspace_id',
                        },
                    },
                },
                {
                    displayName: 'Workspace ID',
                    name: 'workspace_id',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['assistant', 'resource'],
                            operation: ['get', 'delete'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'query',
                            property: 'workspace_id',
                        },
                    },
                },
                {
                    displayName: 'Assistant Name',
                    name: 'assistant_name',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['assistant'],
                            operation: ['create'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'assistant_name',
                        },
                    },
                },
                {
                    displayName: 'Context',
                    name: 'context',
                    type: 'string',
                    typeOptions: {
                        rows: 4,
                    },
                    default: '',
                    description: 'The persona and context for the assistant',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['assistant'],
                            operation: ['create'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'context',
                        },
                    },
                },
                {
                    displayName: 'Output Guidelines',
                    name: 'output_guidelines',
                    type: 'string',
                    typeOptions: {
                        rows: 4,
                    },
                    default: '',
                    description: 'Instructions on how responses should be formatted',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['assistant'],
                            operation: ['create'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'output_guidelines',
                        },
                    },
                },
                {
                    displayName: 'Resources Access Type',
                    name: 'resources_access_type',
                    type: 'options',
                    options: [
                        {
                            name: 'All Resources',
                            value: 'All resources',
                        },
                        {
                            name: 'Limited Selection',
                            value: 'Limited selection',
                        },
                    ],
                    default: 'All resources',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['assistant'],
                            operation: ['create'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'resources_access_type',
                        },
                    },
                },
                {
                    displayName: 'Allowed Resources',
                    name: 'allowed_resources',
                    type: 'string',
                    default: '',
                    description: 'Comma-separated list of Resource IDs. Required if access type is Limited.',
                    displayOptions: {
                        show: {
                            resource: ['assistant'],
                            operation: ['create'],
                            resources_access_type: ['Limited selection'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'allowed_resources',
                            value: '={{$value.split(",").map(id => id.trim())}}',
                        },
                    },
                },
                {
                    displayName: 'Assistant ID',
                    name: 'assistant_id',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['assistant'],
                            operation: ['delete'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'query',
                            property: 'assistant_id',
                        },
                    },
                },
                {
                    displayName: 'Assistant ID',
                    name: 'assistant_id',
                    type: 'string',
                    default: '',
                    description: 'Leave empty to list all assistants',
                    displayOptions: {
                        show: {
                            resource: ['assistant'],
                            operation: ['get'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'query',
                            property: 'assistant_id',
                        },
                    },
                },
                {
                    displayName: 'Assistant ID',
                    name: 'assistant_id',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['query'],
                            operation: ['ask'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'assistant_id',
                        },
                    },
                },
                {
                    displayName: 'Query',
                    name: 'query',
                    type: 'string',
                    default: '',
                    required: true,
                    typeOptions: {
                        rows: 2,
                    },
                    displayOptions: {
                        show: {
                            resource: ['query'],
                            operation: ['ask'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'query',
                        },
                    },
                },
                {
                    displayName: 'Query Mode',
                    name: 'query_mode',
                    type: 'options',
                    options: [
                        {
                            name: 'Eco (1 Credit)',
                            value: 'eco',
                        },
                        {
                            name: 'Flash (3 Credits)',
                            value: 'flash',
                        },
                        {
                            name: 'Europe (5 Credits)',
                            value: 'europe',
                        },
                        {
                            name: 'Deep (20 Credits)',
                            value: 'deep',
                        },
                    ],
                    default: 'flash',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['query'],
                            operation: ['ask'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'body',
                            property: 'query_mode',
                        },
                    },
                },
                {
                    displayName: 'Resource ID',
                    name: 'resource_id',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['delete'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'query',
                            property: 'resource_id',
                        },
                    },
                },
                {
                    displayName: 'Resource ID',
                    name: 'resource_id',
                    type: 'string',
                    default: '',
                    description: 'Leave empty to list all resources',
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['get'],
                        },
                    },
                    routing: {
                        send: {
                            type: 'query',
                            property: 'resource_id',
                        },
                    },
                },
                {
                    displayName: 'Method',
                    name: 'method',
                    type: 'options',
                    options: [
                        {
                            name: 'File Upload',
                            value: 'file',
                        },
                        {
                            name: 'URL',
                            value: 'url',
                        },
                        {
                            name: 'Text',
                            value: 'text',
                        },
                    ],
                    default: 'text',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['add'],
                        },
                    },
                },
                {
                    displayName: 'Source Title',
                    name: 'source_title',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['add'],
                        },
                    },
                },
                {
                    displayName: 'Text Content',
                    name: 'text',
                    type: 'string',
                    typeOptions: {
                        rows: 4,
                    },
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['add'],
                            method: ['text'],
                        },
                    },
                },
                {
                    displayName: 'URL',
                    name: 'url',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['add'],
                            method: ['url'],
                        },
                    },
                },
                {
                    displayName: 'File Upload Method',
                    name: 'file_upload_method',
                    type: 'options',
                    options: [
                        {
                            name: 'Local Binary',
                            value: 'binary',
                        },
                        {
                            name: 'Hosted URL',
                            value: 'hosted_url',
                        },
                    ],
                    default: 'binary',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['add'],
                            method: ['file'],
                        },
                    },
                },
                {
                    displayName: 'File URL',
                    name: 'file_url',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['add'],
                            method: ['file'],
                            file_upload_method: ['hosted_url'],
                        },
                    },
                },
                {
                    displayName: 'Input Binary Field',
                    name: 'binaryPropertyName',
                    type: 'string',
                    default: 'data',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['add'],
                            method: ['file'],
                            file_upload_method: ['binary'],
                        },
                    },
                },
                {
                    displayName: 'Source URL',
                    name: 'source_url_citation',
                    type: 'string',
                    default: '',
                    description: 'Optional URL to associate with the resource for citations',
                    displayOptions: {
                        show: {
                            resource: ['resource'],
                            operation: ['add'],
                        },
                    },
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const length = items.length;
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        if (resource === 'resource' && operation === 'add') {
            for (let i = 0; i < length; i++) {
                try {
                    const method = this.getNodeParameter('method', i);
                    const workspaceId = this.getNodeParameter('workspace_id', i);
                    const sourceTitle = this.getNodeParameter('source_title', i);
                    const sourceUrlCitation = this.getNodeParameter('source_url_citation', i, '');
                    const body = {
                        workspace_id: workspaceId,
                        method: method,
                        source_title: sourceTitle,
                    };
                    if (sourceUrlCitation) {
                        body.source_url = sourceUrlCitation;
                    }
                    const options = {
                        method: 'POST',
                        url: 'https://api.lookio.app/webhook/add-resource',
                        json: true,
                    };
                    if (method === 'text') {
                        body.text = this.getNodeParameter('text', i);
                        options.body = body;
                    }
                    else if (method === 'url') {
                        body.url = this.getNodeParameter('url', i);
                        options.body = body;
                    }
                    else if (method === 'file') {
                        const fileUploadMethod = this.getNodeParameter('file_upload_method', i);
                        if (fileUploadMethod === 'hosted_url') {
                            body.file_url = this.getNodeParameter('file_url', i);
                            options.body = body;
                        }
                        else {
                            const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i);
                            const binaryData = this.helpers.assertBinaryData(i, binaryPropertyName);
                            const formData = {
                                workspace_id: workspaceId,
                                method: 'file',
                                source_title: sourceTitle,
                                file: {
                                    value: await this.helpers.getBinaryDataBuffer(i, binaryPropertyName),
                                    options: {
                                        filename: binaryData.fileName,
                                        contentType: binaryData.mimeType,
                                    },
                                },
                            };
                            if (sourceUrlCitation) {
                                formData.source_url = sourceUrlCitation;
                            }
                            options.formData = formData;
                            delete options.json;
                        }
                    }
                    const response = await this.helpers.httpRequestWithAuthentication.call(this, 'lookioApi', options);
                    returnData.push({ json: response, pairedItem: { item: i } });
                }
                catch (error) {
                    if (this.continueOnFail()) {
                        returnData.push({ json: { error: error.message }, pairedItem: { item: i } });
                        continue;
                    }
                    throw error;
                }
            }
            return [returnData];
        }
        for (let i = 0; i < length; i++) {
            try {
                const options = {
                    json: true,
                    url: '',
                    method: 'GET',
                };
                let body = {};
                let qs = {};
                const workspaceId = this.getNodeParameter('workspace_id', i, '');
                if (resource === 'assistant') {
                    if (operation === 'create') {
                        options.method = 'POST';
                        options.url = 'https://api.lookio.app/webhook/create-assistant';
                        body = {
                            workspace_id: workspaceId,
                            assistant_name: this.getNodeParameter('assistant_name', i),
                            context: this.getNodeParameter('context', i),
                            output_guidelines: this.getNodeParameter('output_guidelines', i),
                            resources_access_type: this.getNodeParameter('resources_access_type', i),
                        };
                        const resourcesAccessType = this.getNodeParameter('resources_access_type', i);
                        if (resourcesAccessType === 'Limited selection') {
                            const allowedResourcesStr = this.getNodeParameter('allowed_resources', i);
                            body.allowed_resources = allowedResourcesStr.split(',').map((s) => s.trim());
                        }
                        options.body = body;
                    }
                    else if (operation === 'delete') {
                        options.method = 'DELETE';
                        options.url = 'https://api.lookio.app/webhook/delete-assistant';
                        qs = {
                            workspace_id: workspaceId || undefined,
                            assistant_id: this.getNodeParameter('assistant_id', i),
                        };
                        if (workspaceId)
                            qs.workspace_id = workspaceId;
                        options.qs = qs;
                    }
                    else if (operation === 'get') {
                        options.method = 'GET';
                        options.url = 'https://api.lookio.app/webhook/get-assistants';
                        qs = {
                            workspace_id: workspaceId,
                        };
                        const assistantId = this.getNodeParameter('assistant_id', i, '');
                        if (assistantId)
                            qs.assistant_id = assistantId;
                        options.qs = qs;
                    }
                }
                else if (resource === 'resource') {
                    if (operation === 'delete') {
                        options.method = 'DELETE';
                        options.url = 'https://api.lookio.app/webhook/delete-resource';
                        qs = {
                            resource_id: this.getNodeParameter('resource_id', i),
                        };
                        if (workspaceId)
                            qs.workspace_id = workspaceId;
                        options.qs = qs;
                    }
                    else if (operation === 'get') {
                        options.method = 'GET';
                        options.url = 'https://api.lookio.app/webhook/get-resources';
                        qs = {
                            workspace_id: workspaceId,
                        };
                        const resourceId = this.getNodeParameter('resource_id', i, '');
                        if (resourceId)
                            qs.resource_id = resourceId;
                        options.qs = qs;
                    }
                }
                else if (resource === 'query') {
                    if (operation === 'ask') {
                        options.method = 'POST';
                        options.url = 'https://api.lookio.app/webhook/query';
                        const formData = {
                            workspace_id: workspaceId,
                            assistant_id: this.getNodeParameter('assistant_id', i),
                            query: this.getNodeParameter('query', i),
                            query_mode: this.getNodeParameter('query_mode', i),
                        };
                        options.formData = formData;
                        delete options.json;
                    }
                }
                const response = await this.helpers.httpRequestWithAuthentication.call(this, 'lookioApi', options);
                returnData.push({ json: response, pairedItem: { item: i } });
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message }, pairedItem: { item: i } });
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.Lookio = Lookio;
//# sourceMappingURL=Lookio.node.js.map