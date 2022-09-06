import { Document, model, Schema } from "mongoose";

//Interface representing a document in MongoDB

interface ITask {
    title: string;
    completed: boolean;
}

//Schema corresponding to the document interface

const taskSchema  = new Schema<ITask>({
    title: { type: String, required: true, unique: true },
    completed: { type: Boolean, required: true }
});

//creating a model

const Task = model<ITask>('Task', taskSchema);

export { ITask, Task };