"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Conference_1 = require("./models/Conference");
const Author_1 = require("./models/Author");
const Topic_1 = require("./models/Topic");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'weather_conference_app',
    entities: [Conference_1.Conference, Author_1.Author, Topic_1.Topic],
    synchronize: true,
    logging: false,
});
//# sourceMappingURL=data-source.js.map