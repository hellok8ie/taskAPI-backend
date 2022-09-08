"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
//Schema corresponding to the document interface
const taskSchema = new mongoose_1.Schema({
    //**I am utilizing taskID as the _id property automatically added by Mongoose**
    title: { type: String, required: true, unique: true },
    completed: { type: Boolean, required: true }
});
//creating a model
const Task = (0, mongoose_1.model)('Task', taskSchema);
exports.Task = Task;
