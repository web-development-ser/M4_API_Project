import { CATEGORY_ANM } from '../model/animes.model.js';

export let arrayCategory = [];

export const classAddAnm = (title, type = "", genre, episodes, rating, releaseYear, studios, synopsis, status) => {
    const classAnm = new CATEGORY_ANM(title, type, genre, episodes, rating, releaseYear, studios, synopsis, status);
    if (type !== "") {
        arrayCategory.push(classAnm);
        return classAnm;
    } else {
        return "Data is needed to create a Json...";
    };
};

export const fullCategoryList = () => {
    return arrayCategory;
};
export const listToAnimes = () => {
    let a = arrayCategory.filter (item => item.type == 'anime');
    return a;
};
export const listToNovels = () => {
    let n = arrayCategory.filter (item => item.type == 'novel');
    return n;
};
export const listToMangas = () => {
    let m = arrayCategory.filter (item => item.type == 'manga');
    return m;
};


export const listToAlls = (text) => {
    let v = arrayCategory.filter (item => item.type == text);
    return v;
};


export const anmUpdate = (id, type) => {
    const verificExistsID = arrayCategory.find(item => item.id == id);

    if (verificExistsID) {
        let indexItemId = arrayCategory.findIndex(item => item.id == id);
        arrayCategory[indexItemId].type = type;
        return arrayCategory[indexItemId];
    } else {
        return "Anm does not exist!";
    };
};

export const anmDeletClass = (id) => {
    const verificExistsID = arrayCategory.find(item => item.id == id);
    if (verificExistsID) {
        const indexItemId = arrayCategory.findIndex(item => item.id == id);
        arrayCategory.splice(indexItemId, 1);
        return verificExistsID;
    } else {
        return "No values found...";
    };
};