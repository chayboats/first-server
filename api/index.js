import { dirname } from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const directory = dirname(fileName);

export default function handler(req, res) {
  res.sendFile(directory + '/public/index.html');
}