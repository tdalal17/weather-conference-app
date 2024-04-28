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
const Conference_1 = require("./models/Conference");
const data_source_1 = require("./data-source");
const router = express_1.default.Router();
// GET all conferences
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conferenceRepository = data_source_1.AppDataSource.getRepository(Conference_1.Conference);
    const conferences = yield conferenceRepository.find();
    res.json(conferences);
}));
// POST a new conference
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conferenceRepository = data_source_1.AppDataSource.getRepository(Conference_1.Conference);
    const conference = conferenceRepository.create(req.body);
    yield conferenceRepository.save(conference);
    res.json(conference);
}));
// GET a single conference by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conferenceRepository = data_source_1.AppDataSource.getRepository(Conference_1.Conference);
    const conferenceId = parseInt(req.params.id, 10);
    if (isNaN(conferenceId)) {
        return res.status(400).json({ error: 'Invalid conference ID' });
    }
    const conference = yield conferenceRepository.findOne({ where: { id: conferenceId } });
    if (!conference) {
        return res.status(404).json({ error: 'Conference not found' });
    }
    res.json(conference);
}));
// PUT (update) a conference by ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conferenceRepository = data_source_1.AppDataSource.getRepository(Conference_1.Conference);
    const conferenceId = parseInt(req.params.id, 10);
    if (isNaN(conferenceId)) {
        return res.status(400).json({ error: 'Invalid conference ID' });
    }
    const conference = yield conferenceRepository.findOne({ where: { id: conferenceId } });
    if (!conference) {
        return res.status(404).json({ error: 'Conference not found' });
    }
    conferenceRepository.merge(conference, req.body);
    yield conferenceRepository.save(conference);
    res.json(conference);
}));
// DELETE a conference by ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conferenceRepository = data_source_1.AppDataSource.getRepository(Conference_1.Conference);
    const conferenceId = parseInt(req.params.id, 10);
    if (isNaN(conferenceId)) {
        return res.status(400).json({ error: 'Invalid conference ID' });
    }
    const conference = yield conferenceRepository.findOne({ where: { id: conferenceId } });
    if (!conference) {
        return res.status(404).json({ error: 'Conference not found' });
    }
    yield conferenceRepository.remove(conference);
    res.json({ message: 'Conference deleted successfully' });
}));
exports.default = router;
//# sourceMappingURL=conferenceRoutes.js.map