"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Schema corresponding to the document interface
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    completed: {
        type: Boolean,
        required: true,
    }
});
//creating a model
const Task = (0, mongoose_1.model)('Task', taskSchema);
