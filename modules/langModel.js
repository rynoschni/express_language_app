const { static } = require('express');
const { query } = require('./con');
const db = require('./con');

class LanguageList {
    constructor (language, rank_id) {
        this.language = language;
        this.rank_id = rank_id;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT language, rankings."Rank", rankings."Score" FROM languages INNER JOIN rankings ON languages.rank_id = rankings.id;`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async updateStatus(language, rank_id) {
        try {
            const response = await db.result(`UPDATE languages SET rank_id = $1 WHERE language =$2;`, [rank_id, language]);
            return response;
        } catch(error){
            console.log("Error:", error);
        }
    }
}



module.exports = LanguageList;
