import ApiError from "../error/ApiError";
import {Request, Response} from 'express';
import models from "../models/models";

class userController {
    registration(arg0: string, registration: any) {
        throw new Error('Method not implemented.');
    }
    login(arg0: string, login: any) {
        throw new Error('Method not implemented.');
    }
    async create(req: Request, res: Response) {
        
    }
    /*
    async registration() {

    }
    async login() {

    }
    */
    async check(req: any, res: any, next: any) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('На найден ID'));
        }
        res.json(id);
    }

}
export default new userController();