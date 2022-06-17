import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEntidadeUseCase } from "./DeleteEntidadeUseCase";

export class DeleteEntidadeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteEntidadeUseCase = container.resolve(DeleteEntidadeUseCase);

        await deleteEntidadeUseCase.execute(
            id
        );

        return response.status(201).send()
    }
}