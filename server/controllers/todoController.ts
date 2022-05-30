import Models from '../models/models'
import {Request, Response, NextFunction} from 'express'
import { nextTick } from 'process'

class todoController {
    async create(req: Request, res: Response) {
        try{
            const {id, title, description, rating} = req.body
            const todo = await Models.Todo.create({id, title, description, rating})
            return res.json(todo)
        } catch (error) {
            return res.status(500).json({ message: "Неизвестная ошибка" });
        }
        
    }
    async getAll(req: Request, res: Response){
        const tasks = await Models.Todo.findAll()
        return res.json(tasks)
    }
}
export default new todoController();