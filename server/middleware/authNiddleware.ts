import { NextFunction, Response, Request } from "express";
import Jwt from 'jsonwebtoken'

export default function (req: Request, res: Response, next: NextFunction) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req?.headers?.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({ message: "Login error1" })
        }
        const decoded = Jwt.verify(token, '');
        console.log('///////////');
        return res.send({
            user: decoded
        })
    } catch (e) {
        return res.status(401).json({ message: "Login error2" })
    }
}