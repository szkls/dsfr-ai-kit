#!/usr/bin/env node
// Client de test du serveur MCP dsfr-kit, en ligne de commande (protocole MCP réel, transport stdio).
//   npm run mcp:call                                  liste les outils et les prompts
//   npm run mcp:call -- get_component '{"nom":"input"}'   appelle un outil et affiche sa réponse
//   npm run mcp:call -- prompt:build_screen '{"nom":"rdv-prefecture"}'   affiche un prompt

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [name, json] = process.argv.slice(2);
const args = json ? JSON.parse(json) : {};

const client = new Client({ name: 'dsfr-kit-call', version: '1.0.0' });
await client.connect(new StdioClientTransport({ command: process.execPath, args: [resolve(ROOT, 'mcp', 'server.mjs')], cwd: ROOT, stderr: 'pipe' }));

if (!name) {
  const { tools } = await client.listTools();
  console.log(`# ${tools.length} outils`);
  for (const t of tools) console.log(`- ${t.name} : ${t.description.split('. ')[0]}.`);
  const { prompts } = await client.listPrompts();
  console.log(`\n# ${prompts.length} prompts`);
  for (const p of prompts) console.log(`- ${p.name}(${(p.arguments || []).map((a) => a.name).join(', ')}) : ${p.description}`);
} else if (name.startsWith('prompt:')) {
  const r = await client.getPrompt({ name: name.slice(7), arguments: args });
  for (const m of r.messages) console.log(`[${m.role}]\n${m.content.text}`);
} else {
  const r = await client.callTool({ name, arguments: args });
  for (const c of r.content) console.log(c.type === 'text' ? c.text : JSON.stringify(c));
  if (r.isError) process.exitCode = 1;
}
await client.close();
