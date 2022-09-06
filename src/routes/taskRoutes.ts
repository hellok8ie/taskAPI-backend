import { Router } from "express";
import { addTask, deleteTask, editTask, getTasks } from "../controllers/taskController";

const router = Router();

router.post('/', addTask);
router.get('/', getTasks);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

export default router;
