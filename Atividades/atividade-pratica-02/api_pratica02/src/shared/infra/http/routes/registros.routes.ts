import { CreateRegistroController } from '@modules/useCases/useCasesRegistros/createRegistro/CreateRegistroController';
import { DeleteRegistroController } from '@modules/useCases/useCasesRegistros/deleteRegistro/DeleteRegistroController';
import { FindByEquipamentosController } from '@modules/useCases/useCasesRegistros/findByEquipamentos/FindByEquipamentosController';
import { ListAllRegistroController } from '@modules/useCases/useCasesRegistros/listAllRegistros/ListAllRegistroController';
import { SearchRegistroController } from '@modules/useCases/useCasesRegistros/searchRegistro/SearchRegistroController';
import { UpdateRegistroController } from '@modules/useCases/useCasesRegistros/updateRegistro/UpdateRegistroController';
import { Router } from 'express';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticated';

const registrosRoutes = Router();


const createRegistroController = new CreateRegistroController();
const deleteRegistroController = new DeleteRegistroController();
const updateRegistroController = new UpdateRegistroController();
const listAllRegistroController = new ListAllRegistroController();
const searchRegistroController = new SearchRegistroController();
const findByEquipamentosController = new FindByEquipamentosController();


registrosRoutes.post("/", ensureAuthenticate, createRegistroController.handle);
registrosRoutes.post("/delete", ensureAuthenticate, deleteRegistroController.handle);
registrosRoutes.post("/update", ensureAuthenticate, updateRegistroController.handle);
registrosRoutes.get("/list", listAllRegistroController.handle);
registrosRoutes.post("/search", searchRegistroController.handle);
registrosRoutes.post("/equipamento", findByEquipamentosController.handle);

export {registrosRoutes};
