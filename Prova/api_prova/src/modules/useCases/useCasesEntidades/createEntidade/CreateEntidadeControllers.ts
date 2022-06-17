import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEntidadeUseCase } from "./CreateEntidadeUseCase";

export class CreateEntidadeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, estado, bairro, cidade } = request.body;

        const createEntidadeUseCase = container.resolve(CreateEntidadeUseCase);

        await createEntidadeUseCase.execute({
            name, estado, bairro, cidade
        });

        return response.status(201).send()
    }
}