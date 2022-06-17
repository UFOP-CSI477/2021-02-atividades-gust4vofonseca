import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateItemUseCase } from "./UpdateItemUseCase";

export class UpdateItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, descricao } = request.body;

        const updateItemUseCase = container.resolve(UpdateItemUseCase);

        await updateItemUseCase.execute({
            id,
            descricao
        });

        return response.status(201).send()
    }
}