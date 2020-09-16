const db = require('./con');

class LanguageList {
    constructor (language, score) {
        this.language = language;
        this.score = score;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT language, rankings."Rank", rankings."Score" FROM languages INNER JOIN rankings ON languages.rank_id = rankings.id;`);
            return response;
        } catch(error) {
            return error.message;
        }
    }
}

module.exports = LanguageList;
