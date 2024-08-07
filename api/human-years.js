import { dogToHumanYears } from '../calculate.js';

export default function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { age } = new URLSearchParams(body);
      res.send(`<h1>${dogToHumanYears(age)}</h1>`);
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
