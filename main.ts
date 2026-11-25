// Fridge entry: writes one passive-aggressive note to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The fridge keeps score in silence, and the tally always comes out before dawn.
const line = 'I kept a log: door opened 14 times today, nothing eaten. My light is not a nightlight, and this is not a museum.';

mkdirSync(outDir, { recursive: true });
// The fridge files its complaints in one place, so nothing gets lost in the crisper drawer.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
