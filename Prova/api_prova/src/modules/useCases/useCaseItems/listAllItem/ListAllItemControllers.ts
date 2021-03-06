import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllItemUseCase } from "./ListAllItemUseCase";


export class ListAllItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllItemUseCase = container.resolve(ListAllItemUseCase);

        const items = await listAllItemUseCase.execute();

        return response.status(201).json(items)
    }
}