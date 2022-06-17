import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteItemUseCase } from "./DeleteItemUseCase";


export class DeleteItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteItemUseCase = container.resolve(DeleteItemUseCase);

        await deleteItemUseCase.execute(
            id
        );

        return response.status(201).send()
    }
}