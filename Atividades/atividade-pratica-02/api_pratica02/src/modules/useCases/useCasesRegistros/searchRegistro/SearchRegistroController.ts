import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { SearchRegistroUseCase } from './SearchRegistroUseCase';

class SearchRegistroController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const searchRegistroUseCase = container.resolve(SearchRegistroUseCase)

        const registro = await searchRegistroUseCase.execute(id)

        return response.json(registro);
    }
}

export { SearchRegistroController }
