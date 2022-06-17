import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindItemUseCase } from "./FindItemUseCase";


export class FindItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const findItemUseCase = container.resolve(FindItemUseCase);

        await findItemUseCase.execute(id);

        return response.status(201).send()
    }
}