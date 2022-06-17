import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEntidadeUseCase } from "./UpdateEntidadeUseCase";

export class UpdateEntidadeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, estado, bairro, cidade } = request.body;

        const updateEntidadeUseCase = container.resolve(UpdateEntidadeUseCase);

        await updateEntidadeUseCase.execute({
            id, name, estado, bairro, cidade
        });

        return response.status(201).send()
    }
}