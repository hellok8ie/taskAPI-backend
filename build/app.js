"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = 'mongodb://localhost:27017/testDB';
mongoose_1.default.connect(connectionString).then(() => console.log('database connection successful!'), err => console.log('Error connecting to the database', err));
