import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllEntidadeUseCase } from "./ListAllEntidadeUseCase";

export class ListAllEntidadeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllEntidadeUseCase = container.resolve(ListAllEntidadeUseCase);

        const entidades = await listAllEntidadeUseCase.execute();

        return response.status(201).json(entidades);
    }
}