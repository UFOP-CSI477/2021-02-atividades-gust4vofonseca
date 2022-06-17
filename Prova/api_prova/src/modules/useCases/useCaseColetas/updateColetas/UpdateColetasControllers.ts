import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateColetasUseCase } from "./UpdateColetasUseCase";


export class UpdateColetasController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, entidade_id, item_id, data, quantidade } = request.body;

        const updateColetasUseCase = container.resolve(UpdateColetasUseCase);

        await updateColetasUseCase.execute({
            id, entidade_id, item_id, data, quantidade
        });

        return response.status(201).send()
    }
}