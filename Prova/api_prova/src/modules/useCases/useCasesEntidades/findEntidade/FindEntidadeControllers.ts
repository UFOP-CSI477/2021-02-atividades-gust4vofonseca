import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEntidadeUseCase } from "./FindEntidadeUseCase";

export class FindEntidadeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const findEntidadeUseCase = container.resolve(FindEntidadeUseCase);

        const entidade = await findEntidadeUseCase.execute(id);

        return response.status(201).json(entidade);
    }
}