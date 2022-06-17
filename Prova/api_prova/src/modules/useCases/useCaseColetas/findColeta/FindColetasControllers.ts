import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindColetasUseCase } from "./FindColetasUseCase";


export class FindColetasController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const findColetasUseCase = container.resolve(FindColetasUseCase);

        const coleta = await findColetasUseCase.execute(
            id
        );

        return response.status(201).json(coleta);
    }
}