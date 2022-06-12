import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllRegistroUseCase } from './ListAllRegistroUseCase';

class ListAllRegistroController {
    async handle(request: Request, response: Response): Promise<Response> {

        const listAllRegistroUseCase = container.resolve(ListAllRegistroUseCase)

        const registros = await listAllRegistroUseCase.execute()

        return response.json(registros);
    }
}

export { ListAllRegistroController }
