import { Document } from "mongoose";

interface ITask extends Document {
    Title: string;
    Completed: boolean;
}

