import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllEquipamentoUseCase } from './listAllEquipamentoUseCase';

class ListAllEquipamentosController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const listAllEquipamentosUseCase = container.resolve(ListAllEquipamentoUseCase);

        const equipamentos = await listAllEquipamentosUseCase.execute();

        return response.json(equipamentos);
    }
}

export { ListAllEquipamentosController };
