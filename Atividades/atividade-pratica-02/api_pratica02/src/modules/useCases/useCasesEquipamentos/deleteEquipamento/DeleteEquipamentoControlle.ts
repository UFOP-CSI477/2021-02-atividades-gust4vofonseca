import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteEquipamentoUseCase } from './DeleteEquipamentoUseCase';

class DeleteEquipamentosController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const { id } = request.body;

        const deleteEquipamentosUseCase = container.resolve(DeleteEquipamentoUseCase);

        await deleteEquipamentosUseCase.execute(id);

        return response.status(200).send();
    }
}

export { DeleteEquipamentosController };
