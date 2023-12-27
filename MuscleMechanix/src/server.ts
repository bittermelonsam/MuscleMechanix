import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.get('/', (_: Request, res: Response) => {
  res.status(200).send("LET'S FUCKING GOOOO!");
});

app.get('/test', (_: Request, res: Response) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET POST',
    'Content-Type': 'text/plain',
  });

  return res.status(200).json([
    { name: 'curls', description: 'makes you curvy' },
    { name: 'push-ups', description: 'push the earth down' },
  ]);
});

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
