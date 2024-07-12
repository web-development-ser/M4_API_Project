import { Router } from "express";
import { classAddAnm, listToAnimes, listToNovels, listToMangas } from '../controller/anime.controller.js';

const routesCategoryAnm = Router();

routesCategoryAnm.post("/addCategoryAnm", (req, res) => {
    const { title, type, genre, episodes, rating, releaseYear, studios, synopsis, status } = req.body;
    const listTo = classAddAnm(title, type, genre, episodes, rating, releaseYear, studios, synopsis, status)
    res.json({listTo});
});

// _____________________________________________
routesCategoryAnm.get("/listComplet", (req, res) => {
    const toList = classAddAnm();
    res.status(201).json({toList});
});
routesCategoryAnm.get("/anime", (req, res) => {
    const animes = listToAnimes();
    res.status(201).json({animes});
});
routesCategoryAnm.get("/novel", (req, res) => {
    const novels = listToNovels();
    res.status(201).json({novels});
});
routesCategoryAnm.get("/manga", (req, res) => {
    const mangas = listToMangas();
    res.status(201).json({mangas});
});

export { routesCategoryAnm };








/*

export const teste = (app) => {
    app.get ('/testes', (req, res) => {
        res.json (anime(ANM.filter (item => item.type == "anime")));
    });
};
export const testes = (app) => {
    app.get ('/hello', (req, res) => {
        res.json (listToAnimes());
    })
}





// ______________
// Lista Completa de Animes ... 0.0 :
export const completeAnimeList = (app) => {
    app.get ('/completeAnimeList', (req, res) => {
        res.json(ANIME_LIST);
    });
};

// Paginações ... 0.1 :
let initialIndex = 0, itemBeforePage = 10;
const PAGES_ANIMES = () => {
    const initialIndexs = ANIME_LIST.slice(initialIndex, initialIndex + itemBeforePage);
    initialIndex += itemBeforePage;
    return initialIndexs;
};

export const animeListPagination = (app) => {
    app.get ('/listPagination', (req, res) => {
        res.json(PAGES_ANIMES());
    });
};


const verificStatus = (status) => {
    const statusAtual = ANIME_LIST.filter(item => item.status == status);
    return statusAtual;
}


// Em lançamento ou concluido ... 0.2 :
export const animeStatus = (app) => {
    app.get ('/status', (req, res) => {
        res.json(verificStatus("Concluído"));
    });
};

// Filtro por anos ... 0.4 :
export const listAnimeYear = (app) => {
    app.get ('/year', (req, res) => {

    });
};
*/