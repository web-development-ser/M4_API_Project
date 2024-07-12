import { CATEGORY_ANM } from '../model/animes.model.js';

export let arrayCategory = [];

export const classAddAnm = (title, type, genre, episodes, rating, releaseYear, studios, synopsis, status) => {
    const classAnm = new CATEGORY_ANM(title, type, genre, episodes, rating, releaseYear, studios, synopsis, status);
    arrayCategory.push(classAnm);
    return arrayCategory;
};

export const fullCategoryList = () => {
    return arrayCategory;
};
export const listToAnimes = () => {
    let a = arrayCategory.filter (item => item.type == "anime");
    return a;
};
export const listToNovels = () => {
    let n = arrayCategory.filter (item => item.type == "novel");
    return n;
};
export const listToMangas = () => {
    let m = arrayCategory.filter (item => item.type == "manga");
    return m;
};