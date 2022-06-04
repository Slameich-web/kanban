import Models from '../models/models'
import {Request, Response} from 'express'
import { TodoModelView } from '../models/modelsInterfaces'

class todoController {
    async create(req: Request, res: Response) {
        try{
            const {id, title, description, rating}: TodoModelView = req.body
            const todo = await Models.Todo.create({id, title, description, rating})
            return res.json(todo)
        } catch (error) {
            return res.status(500).json({ message: "Неизвестная ошибка" });
        }
        
    }
    async getAll(req: Request, res: Response){
        let {limit, page} = req.query;
        page = page || '1';
        limit = limit || '10';
        let offset = Number(page) * Number(limit) - Number(limit);
        const todos = await Models.Todo.findAndCountAll({limit: Number(limit), offset, subQuery: false});
        return res.json(todos);
    }
    async getOne(req: Request, res: Response){
        const {id} = req.params;
        const todo = await Models.Todo.findOne(
            {
                where: {id},
                include: [{model: Models.TaskListTodos, as: 'task_list_todos'}]
            }
        )
        return res.json(todo);
    }
}
export default new todoController();