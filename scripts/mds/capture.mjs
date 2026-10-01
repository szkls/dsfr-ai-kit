// Capture d'écran d'écrans du prototype (adresse du serveur, puis chemins relatifs).
import { chromium } from 'playwright';
const [,, base, sortie, ...chemins] = process.argv;
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1248, height: 900 } })).newPage();
for (const c of chemins) { await p.goto(base + c, { waitUntil: 'networkidle' }); await p.waitForTimeout(400); await p.screenshot({ path: `${sortie}/${c.replace(/[\/.]/g, '_')}.png`, fullPage: true }); }
await b.close(); console.log('ok');
