"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.editTask = exports.addTask = exports.getTasks = void 0;
const task_1 = require("../models/task");
const getTasks = async (req, res, next) => {
    let taskList = await task_1.Task.find();
    res.status(200).json(taskList);
};
exports.getTasks = getTasks;
const addTask = async (req, res, next) => {
    const newTask = new task_1.Task({
        title: req.body.title,
        completed: req.body.completed
    });
    try {
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.addTask = addTask;
const editTask = async (req, res, next) => {
    let taskId = req.params.id;
    const updatedTask = new task_1.Task({
        _id: taskId,
        title: req.body.title,
        completed: req.body.completed
    });
    let result = await task_1.Task.findByIdAndUpdate(taskId, { $set: updatedTask });
    res.status(200).json(result);
};
exports.editTask = editTask;
const deleteTask = async (req, res, next) => {
    let taskId = req.params.id;
    let result = await task_1.Task.findByIdAndDelete(taskId);
    res.status(200).json(result);
};
exports.deleteTask = deleteTask;
