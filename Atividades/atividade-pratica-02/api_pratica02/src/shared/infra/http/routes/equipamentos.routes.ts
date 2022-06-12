import { CreateEquipamentosController } from '@modules/useCases/useCasesEquipamentos/createEquipamento/CreateEquipamentoControlle';
import { DeleteEquipamentosController } from '@modules/useCases/useCasesEquipamentos/deleteEquipamento/DeleteEquipamentoControlle';
import { ListAllEquipamentosController } from '@modules/useCases/useCasesEquipamentos/listAllEquipamentos/ListAllEquipamentoControlle';
import { SearchEquipamentosController } from '@modules/useCases/useCasesEquipamentos/searchEquipamento/SearchEquipamentoControlle';
import { UpdateEquipamentosController } from '@modules/useCases/useCasesEquipamentos/updateEquipamento/UpdateEquipamentoControlle';
import { Router } from 'express';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticated';

const equipamentoRoutes = Router();


const createEquipamentosController = new CreateEquipamentosController();
const deleteEquipamentosController = new DeleteEquipamentosController();
const updateEquipamentosController = new UpdateEquipamentosController();
const listAllEquipamentosController = new ListAllEquipamentosController();
const searchEquipamentosController = new SearchEquipamentosController();


equipamentoRoutes.post('/', ensureAuthenticate, createEquipamentosController.handle);
equipamentoRoutes.post('/delete', ensureAuthenticate, deleteEquipamentosController.handle);
equipamentoRoutes.post('/update', ensureAuthenticate, updateEquipamentosController.handle);
equipamentoRoutes.get('/list', listAllEquipamentosController.handle);
equipamentoRoutes.post('/search', searchEquipamentosController.handle);

export { equipamentoRoutes };
