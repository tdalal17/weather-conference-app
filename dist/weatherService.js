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
exports.getWeatherByLocation = void 0;
const axios_1 = __importDefault(require("axios"));
const API_KEY = '509cd8f85ac9e1549b363546b1551240';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const getWeatherByLocation = (location) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(BASE_URL, {
            params: {
                q: location,
                appid: API_KEY,
                units: 'imperial',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
});
exports.getWeatherByLocation = getWeatherByLocation;
//# sourceMappingURL=weatherService.js.map