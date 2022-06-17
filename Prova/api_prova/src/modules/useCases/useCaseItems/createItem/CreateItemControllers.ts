import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateItemUseCase } from "./CreateItemUseCase";


export class CreateItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { descricao } = request.body;

        const createItemUseCase = container.resolve(CreateItemUseCase);

        await createItemUseCase.execute({
            descricao
        });

        return response.status(201).send()
    }
}