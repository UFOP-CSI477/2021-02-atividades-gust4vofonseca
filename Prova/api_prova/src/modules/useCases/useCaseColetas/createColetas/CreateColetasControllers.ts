import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateColetasUseCase } from "./CreateColetasUseCase";


export class CreateColetasController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { entidade_id, item_id, data, quantidade } = request.body;

        const createColetasUseCase = container.resolve(CreateColetasUseCase);

        await createColetasUseCase.execute({
            entidade_id, item_id, data, quantidade
        });

        return response.status(201).send()
    }
}