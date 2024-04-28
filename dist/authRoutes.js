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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = express_1.default.Router();
// Dummy user data for demonstration purposes
const users = [
    {
        id: 1,
        email: 'user@example.com',
        password: '$2b$10$LBdJf0HzUzpSxJ6Jslo2buRgE23XoqT5/mYLzUUFgjOeDGFD8y1QG',
    },
];
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log('Received email:', email);
    console.log('Received password:', password);
    const user = users.find((user) => user.email === email);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
    console.log('Is password valid?', isPasswordValid);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'secret-key');
    res.json({ token });
}));
exports.default = router;
//# sourceMappingURL=authRoutes.js.map