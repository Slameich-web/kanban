import ApiError from "../error/ApiError";
import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import Models from '../models/models';

interface Ia {
    id: number;
    email: string;
    password:string;
    role: string;
    phone: string;
    description: string;
    username: string;
}

const generateJWT = (id: number, email: string, role: string) => Jwt.sign(
    {id, email, role},
     'secretkey', 
     {expiresIn: '24h'}
     )

class userController {
    async registration(req: Request, res: Response) {
        const {email, password, role, phone, description, username, id}: Ia= req.body
        if(!email || !password) {
            return res.status(404).json({ message: "Некорректный email или password" })
        }
        const condidate = await Models.User.findOne({where: {email}})
        if(condidate) {
            return res.status(404).json({ message: "Пользователь с таким Email уже существует" })
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await Models.User.create({id, email, role, password: hashPassword, phone, description, username})
        const task_list = await Models.TaskList.create({userId: user.id});
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req: Request, res: Response) {
        const {email, password} = req.body;
        const user = await Models.User.findOne({where: {email}});
        if(!user){
            return res.status(404).json({ message: "Ошибка" });
        }
        // @ts-ignore
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword) {
            return res.status(404).json({ message: "Ошибка" });
        }
        // @ts-ignore
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({token});
    }
    async create(req: Request, res: Response) {
        
    }
    async check(req: any, res: any, next: any) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('На найден ID'));
        }
        res.json(id);
    }

}
export default new userController();