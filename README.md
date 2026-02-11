# n8n-nodes-lookio

This is an n8n community node for the Lookio API. It allows you to integrate Lookio's AI assistants, resource management, and querying capabilities directly into your n8n workflows.

[Lookio](https://lookio.app)

## Prerequisites

- An n8n installation (cloud or self-hosted)
- A Lookio API Key

## Installation

### Community Node (Recommended)

1. Go to your n8n instance settings.
2. Select **Community Nodes**.
3. Select **Install**.
4. Enter `n8n-nodes-lookio` (once published to npm).

### Manual Installation (Local Development)

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the node.
4. Link the node to your n8n installation:
   ```bash
   npm link
   cd /path/to/n8n/packages/cli
   npm link n8n-nodes-lookio
   ```

## Credentials

You need a Lookio API Key to use this node.

1. In n8n, go to **Credentials**.
2. Search for **Lookio API**.
3. Enter your **API Key**.

## Operations

### Assistant
- **Create**: Create a new assistant with specific context and guidelines.
- **Get**: Retrieve details of an assistant or list all assistants.
- **Delete**: Remove an assistant.

### Resource
- **Add**: Add a resource (Text, URL, or File) to a workspace.
- **Get**: Retrieve resource details.
- **Delete**: Remove a resource.

### Query
- **Ask**: Send a query to an assistant using a specific model mode (Eco, Flash, Europe, Deep).

## Resources

* [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Lookio API Documentation](https://lookio.app)
