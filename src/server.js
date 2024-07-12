import express from 'express';
// import { completeAnimeList, animeListPagination, animeStatus, listAnimeYear } from './routes.js';

import { routesCategoryAnm } from '../src/routes/routes.js';

const app = express();
const port = 7070;

app.use(express.json());

// dando acesso as nossas rotas
app.use(routesCategoryAnm);




app.listen(port, () => {
    /*teste(app)
    testes(app)
    completeAnimeList (app);
    animeListPagination (app);
    animeStatus (app);
    listAnimeYear (app);*/
});