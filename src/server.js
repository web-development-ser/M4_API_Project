import express from 'express';

import { routesCategoryAnm } from '../src/routes/routes.js';

const app = express();
const port = 7070;

app.use(express.json());
app.use(routesCategoryAnm);

app.listen(port, () => { });