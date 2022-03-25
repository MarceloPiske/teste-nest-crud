"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("reflect-metadata");
const database_providers_1 = require("./database.providers");
database_providers_1.AppDataSource.initialize()
    .then(() => {
    console.log('Banco iniciado!!');
})
    .catch(error => console.log(error));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map