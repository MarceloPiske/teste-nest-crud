"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const database_providers_1 = require("../database.providers");
const person_model_1 = require("./models/person.model");
const person_schema_1 = require("./schemas/person.schema");
let TasksController = class TasksController {
    async create(body) {
        const nome = body['nome'];
        const idade = body['idade'];
        const altura = body['altura'];
        const cidade = body['cidade'];
        console.log(body);
        const user = new person_model_1.PersonModel();
        user.name = nome;
        user.age = idade;
        user.altura = altura;
        user.cidade = cidade;
        await database_providers_1.AppDataSource.manager.save(user);
        console.log('Saved a new user with id: ' + user.id);
        return user;
    }
    async getOne(id) {
        const peronRepository = database_providers_1.AppDataSource.getRepository(person_model_1.PersonModel);
        const user = await peronRepository.findOneBy({
            id: id,
        });
        return user;
    }
    async getAll() {
        const users = await database_providers_1.AppDataSource.manager.find(person_model_1.PersonModel);
        console.log("Loaded users: ", users);
        return users;
    }
    update(id) {
        return { data: 'Entrei no update' };
    }
    async delete(id) {
        const photoRepository = database_providers_1.AppDataSource.getRepository(person_model_1.PersonModel);
        const photoToRemove = await photoRepository.findOneBy({
            id: id,
        });
        await photoRepository.remove(photoToRemove);
        return { data: 'Entrei no delete' };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_schema_1.CreateUser]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], TasksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "delete", null);
TasksController = __decorate([
    (0, common_1.Controller)('tasks')
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map