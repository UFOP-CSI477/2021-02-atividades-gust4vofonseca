import {Request, Response} from "express";
import { container } from "tsyringe";
import { FindByEquipamentosUseCase } from "./FindByEquipamentosUseCase";

class FindByEquipamentosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        
        const findByEquipamentosUseCase = container.resolve(FindByEquipamentosUseCase);

        const registros = await findByEquipamentosUseCase.execute(id);

        return response.json(registros);
    }
}

export {FindByEquipamentosController};