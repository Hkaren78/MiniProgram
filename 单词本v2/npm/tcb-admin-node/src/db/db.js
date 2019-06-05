Object.defineProperty(exports, "__esModule", {
    value: true
});

const Geo = require("./geo/index.js");

const collection_1 = require("./collection.js");

const command_1 = require("./command.js");

const serverDate_1 = require("./serverDate/index.js");

const request_1 = require("./request.js");

class Db {
    constructor(config) {
        this.config = config;
        this.Geo = Geo;
        this.command = new command_1.Command();
    }
    serverDate({offset: offset = 0} = {}) {
        return new serverDate_1.ServerDate({
            offset: offset
        });
    }
    collection(collName) {
        if (!collName) {
            throw new Error("Collection name is required");
        }
        return new collection_1.CollectionReference(this, collName);
    }
    createCollection(collName) {
        let request = new request_1.Request(this);
        const params = {
            collectionName: collName
        };
        return request.send("addCollection", params);
    }
}

exports.Db = Db;