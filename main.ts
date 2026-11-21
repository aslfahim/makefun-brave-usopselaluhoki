// brave entry for @usopselaluhoki: a warm mug on a cold platform.
// Parts are queued and drained in order into the final string.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const queue: string[] = [
  'Hands around a warm mug on a cold platform.',
  'The train is late; the sky is doing something pink and unrepeatable overhead.',
  'You are not behind.',
  'You are early for this.',
];

let text = '';
while (queue.length > 0) {
  const next = queue.shift() as string;
  text = text === '' ? next : `${text} ${next}`;
}

const size = [...text].length;
if (size < 1 || size > 280 || text.trim().length === 0) {
  throw new Error(`invalid entry of ${size} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
