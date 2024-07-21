export class CATEGORY_ANM {
    static autoID = 0;
    constructor (title, type, genre, episodes, rating, releaseYear, studios, synopsis, status) {
        this.id = ++CATEGORY_ANM.autoID;
        this.title = title;
        this.type = type;
        this.genre = genre;
        this.episodes = episodes;
        this.rating = rating;
        this.releaseYear = releaseYear;
        this.studio = studios;
        this.synopsis = synopsis;
        this.status = status;
    };
};