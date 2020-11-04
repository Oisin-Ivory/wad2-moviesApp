class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.watchLaterMovies = [];
    }

    add(movie) {
        this.favoriteMovies.push(movie);
    }

    addWatchLater(movie) {
        this.watchLaterMovies.push(movie);
    }

    getAll() {
        return this.favoriteMovies;
    }

    getAllWatchLater() {
        return this.watchLaterMovies;
    }
}

export default new StubAPI();