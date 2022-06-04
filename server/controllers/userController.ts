import ApiError from "../error/ApiError";
import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import Models from '../models/models';
import { IUserRegistration } from './controllersInterfaces'

const generateJWT = (id: number, email: string, role: string) => Jwt.sign(
    {id, email, role},
     'secretkey', 
     {expiresIn: '24h'}
     )

class userController {
    async registration(req: Request, res: Response) {
        const {email, password, role, phone, description, username, id}: IUserRegistration = req.body
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
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword) {
            return res.status(404).json({ message: "Ошибка" });
        }
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({token});
    }
    async check(req: Request, res: Response) {
        res.json({message: "ALL RIGHT"})
    }

}
export default new userController();