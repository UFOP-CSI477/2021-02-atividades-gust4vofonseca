import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateRegistroUseCase } from './UpdateRegistroUseCase';

class UpdateRegistroController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            equipamento_id,
            user_id,
            descricao,
            dataLimite,
            tipo
        } = request.body;

        const updateRegistroUseCase = container.resolve(UpdateRegistroUseCase)

        await updateRegistroUseCase.execute({
            id,
            equipamento_id,
            user_id,
            descricao,
            dataLimite,
            tipo
        })

        return response.status(200).send();
    }
}

export { UpdateRegistroController }
