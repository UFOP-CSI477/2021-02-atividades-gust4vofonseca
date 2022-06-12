import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateEquipamentoUseCase } from './CreateEquipamentoUseCase';

class CreateEquipamentosController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const { name } = request.body;

        const createEquipamentoUseCase = container.resolve(CreateEquipamentoUseCase)

        await createEquipamentoUseCase.execute(name);

        return response.status(200).send();
    }
}

export { CreateEquipamentosController };
