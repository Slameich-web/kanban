import ApiError from "../error/ApiError";
import { Response, Request } from "express";


export default function(err: Error, req: Request, res: Response) {
    if (err instanceof ApiError) {
        res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: "Неизвестная ошибка" });
}