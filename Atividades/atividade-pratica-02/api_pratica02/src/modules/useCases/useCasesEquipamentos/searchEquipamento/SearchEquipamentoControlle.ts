import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { SearchEquipamentoUseCase } from './SearchEquipamentoUseCase';

class SearchEquipamentosController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const { id } = request.body;

        const searchEquipamentosUseCase = container.resolve(SearchEquipamentoUseCase)

        const equipamento = await searchEquipamentosUseCase.execute(id);

        return response.json(equipamento);
    }
}

export { SearchEquipamentosController };
