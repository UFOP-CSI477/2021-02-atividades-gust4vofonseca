import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteColetasUseCase } from "./DeleteColetasUseCase";

export class DeleteColetasController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteColetasUseCase = container.resolve(DeleteColetasUseCase);

        await deleteColetasUseCase.execute(
            id
        );

        return response.status(201).send()
    }
}