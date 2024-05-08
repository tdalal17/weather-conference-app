"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const database_1 = require("./database");
const conferenceRoutes_1 = __importDefault(require("./conferenceRoutes"));
const weatherRoutes_1 = __importDefault(require("./weatherRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const indexRoutes_1 = __importDefault(require("./indexRoutes"));
require("reflect-metadata");
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'conference-app', 'build')));
app.use('/', indexRoutes_1.default);
app.use('/conferences', conferenceRoutes_1.default);
app.use('/weather', weatherRoutes_1.default);
app.use('/auth', authRoutes_1.default);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'conference-app', 'build', 'index.html'));
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.initializeDatabase)();
    console.log('Database connected successfully');
    console.log(`Server is running on port ${port}`);
}));
//# sourceMappingURL=index.js.map