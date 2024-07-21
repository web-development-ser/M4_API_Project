import { Router } from "express";
import { classAddAnm, fullCategoryList, listToAnimes, listToNovels, listToMangas, anmUpdate, anmDeletClass } from '../controller/anime.controller.js';

const routesCategoryAnm = Router();

routesCategoryAnm.post("/anm/addCategoryAnm", (req, res) => {
    const { title, type, genre, episodes, rating, releaseYear, studios, synopsis, status } = req.body;
    const listTo = classAddAnm(title, type, genre, episodes, rating, releaseYear, studios, synopsis, status)
    res.status(201).json({listTo});
});

routesCategoryAnm.get("/anm/listComplet", (req, res) => {
    const toList = fullCategoryList();
    res.status(200).json({toList});
});
routesCategoryAnm.get("/anm/anime", (req, res) => {
    const animes = listToAnimes();
    res.status(200).json({animes});
});
routesCategoryAnm.get("/anm/novel", (req, res) => {
    const novels = listToNovels();
    res.status(200).json({novels});
});
routesCategoryAnm.get("/anm/manga", (req, res) => {
    const mangas = listToMangas();
    res.status(200).json({mangas});
});

routesCategoryAnm.patch("/anm/anmUpdate/:id", (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    const resultANM = anmUpdate(id, type);
    res.status(200).json({resultANM});
});

routesCategoryAnm.delete('/anm/delet/:id', (req, res) => {
    const { id } = req.params;
    const user = anmDeletClass(id);
    res.status(200).json({user});
});

export { routesCategoryAnm };