"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectionOptions = {
    type: "postgres",
    database: "nuber",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT,
    port: 5433,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
};
exports.default = connectionOptions;
//# sourceMappingURL=ormConfig.js.map