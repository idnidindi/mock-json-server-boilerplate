import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import getDb from './index.js';

const db = typeof getDb === 'function' ? getDb() : getDb;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'db.json');

await fs.writeFile(outputPath, JSON.stringify(db, null, 2), 'utf-8');