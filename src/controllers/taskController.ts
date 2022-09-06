import { Request, RequestHandler } from "express";
import { ITask, Task } from "../models/task";

export const getTasks: RequestHandler = async (req, res, next) => {
    let taskList = await Task.find();
    res.status(200).json(taskList);
};

export const addTask: RequestHandler = async (req, res, next) => {
    const newTask = new Task ({ 
        title: req.body.title,
        completed: req.body.completed
    });

    try {
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).send(err)
    }
};

export const editTask: RequestHandler = async (req, res, next) => {
    let taskId = req.params.id;
    const updatedTask = new Task({
        _id: taskId,
        title: req.body.title,
        completed: req.body.completed
    });

    let result = await Task.findByIdAndUpdate(taskId, { $set: updatedTask });

    res.status(200).json(result);
};

export const deleteTask: RequestHandler = async (req, res, next) => {
    let taskId = req.params.id
    let result = await Task.findByIdAndDelete(taskId)
    res.status(200).json(result)
};