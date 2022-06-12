import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateEquipamentoUseCase } from './UpdateEquipamentoUseCase';

class UpdateEquipamentosController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const { name, id } = request.body;

        const updateEquipamentosUseCase = container.resolve(UpdateEquipamentoUseCase)

        await updateEquipamentosUseCase.execute(name, id);

        return response.status(200).send();
    }
}

export { UpdateEquipamentosController };
