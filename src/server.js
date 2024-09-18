import express from 'express';
import cors from 'cors';

import { routesCategoryAnm } from '../src/routes/routes.js';

const app = express();
app.use(cors())
const port = 7070;

app.use(express.json());
app.use(routesCategoryAnm);

app.listen(port, () => { });