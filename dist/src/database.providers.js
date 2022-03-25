"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const person_model_1 = require("./tasks/models/person.model");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '2211',
    database: 'nest_teste_api',
    synchronize: true,
    logging: false,
    entities: [person_model_1.PersonModel],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=database.providers.js.map