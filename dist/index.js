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
const parsers_1 = require("./modules/parsers");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    try {
        res.status(200).send("Hello World!");
    }
    catch (error) {
        res.status(500).send({ ERROR: error });
    }
});
app.get("/scrapper", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.query.url;
    try {
        yield res.status(200);
        yield (0, parsers_1.fetchURLMeta)(url).then((data) => {
            res.send(data);
        });
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
