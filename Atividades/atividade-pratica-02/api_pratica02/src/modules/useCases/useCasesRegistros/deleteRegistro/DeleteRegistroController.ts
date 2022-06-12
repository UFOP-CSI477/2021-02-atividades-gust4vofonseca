import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteRegistroUseCase } from './DeleteRegistroUseCase';

class DeleteRegistroController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const deleteRegistroUseCase = container.resolve(DeleteRegistroUseCase)

        await deleteRegistroUseCase.execute(id)

        return response.status(200).send();
    }
}

export { DeleteRegistroController }
