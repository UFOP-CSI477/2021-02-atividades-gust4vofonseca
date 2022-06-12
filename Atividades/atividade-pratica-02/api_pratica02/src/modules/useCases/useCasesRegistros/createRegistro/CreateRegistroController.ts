import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRegistroUseCase } from './CreateRegistroUseCase';

class CreateRegistroController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user; 
        const {
            equipamento_id,
            descricao,
            dataLimite,
            tipo
        } = request.body;

        const createRegistroUseCase = container.resolve(CreateRegistroUseCase)

        await createRegistroUseCase.execute({
            equipamento_id,
            user_id: id,
            descricao,
            dataLimite,
            tipo
        });

        return response.status(200).send();
    }
}

export { CreateRegistroController }
