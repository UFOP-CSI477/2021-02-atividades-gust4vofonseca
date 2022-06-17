import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllColetasUseCase } from "./ListAllColetasUseCase";



export class ListAllColetasController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updateColetasUseCase = container.resolve(ListAllColetasUseCase);

        const coletas = await updateColetasUseCase.execute();

        return response.status(201).json(coletas);
    }
}