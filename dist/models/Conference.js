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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conference = void 0;
const typeorm_1 = require("typeorm");
const Author_1 = require("./Author");
const Topic_1 = require("./Topic");
require("reflect-metadata");
let Conference = class Conference {
};
exports.Conference = Conference;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({}),
    __metadata("design:type", Number)
], Conference.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Conference.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Conference.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Date)
], Conference.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Date)
], Conference.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Author_1.Author),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Author_1.Author)
], Conference.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Topic_1.Topic),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Topic_1.Topic)
], Conference.prototype, "topic", void 0);
exports.Conference = Conference = __decorate([
    (0, typeorm_1.Entity)()
], Conference);
//# sourceMappingURL=Conference.js.map