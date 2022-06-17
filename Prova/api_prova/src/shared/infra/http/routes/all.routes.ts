import { CreateColetasController } from "@modules/useCases/useCaseColetas/createColetas/CreateColetasControllers";
import { DeleteColetasController } from "@modules/useCases/useCaseColetas/deleteColetas/DeleteColetasControllers";
import { FindColetasController } from "@modules/useCases/useCaseColetas/findColeta/FindColetasControllers";
import { ListAllColetasController } from "@modules/useCases/useCaseColetas/listAllColetas/ListAllColetasControllers";
import { UpdateColetasController } from "@modules/useCases/useCaseColetas/updateColetas/UpdateColetasControllers";
import { CreateItemController } from "@modules/useCases/useCaseItems/createItem/CreateItemControllers";
import { DeleteItemController } from "@modules/useCases/useCaseItems/deleteItem/DeleteItemControllers";
import { FindItemController } from "@modules/useCases/useCaseItems/findItem/FindItemControllers";
import { ListAllItemController } from "@modules/useCases/useCaseItems/listAllItem/ListAllItemControllers";
import { UpdateItemController } from "@modules/useCases/useCaseItems/updateItem/UpdateItemControllers";
import { CreateEntidadeController } from "@modules/useCases/useCasesEntidades/createEntidade/CreateEntidadeControllers";
import { DeleteEntidadeController } from "@modules/useCases/useCasesEntidades/deleteEntidade/DeleteEntidadeControllers";
import { FindEntidadeController } from "@modules/useCases/useCasesEntidades/findEntidade/FindEntidadeControllers";
import { ListAllEntidadeController } from "@modules/useCases/useCasesEntidades/listAllEntidade/ListAllEntidadeControllers";
import { UpdateEntidadeController } from "@modules/useCases/useCasesEntidades/updateEntidade/UpdateEntidadeControllers";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";

const allRoutes = Router();

const createColetasController = new CreateColetasController();
const deleteColetasController = new DeleteColetasController();
const updateColetasController = new UpdateColetasController();
const listAllColetasController = new ListAllColetasController();
const findColetasController = new FindColetasController();

const createEntidadesController = new CreateEntidadeController();
const deleteEntidadesController = new DeleteEntidadeController();
const updateEntidadesController = new UpdateEntidadeController();
const listAllEntidadesController = new ListAllEntidadeController();
const findEntidadesController = new FindEntidadeController();

const createItemController = new CreateItemController();
const deleteItemController = new DeleteItemController();
const updateItemController = new UpdateItemController();
const listAllItemController = new ListAllItemController();
const findItemController = new FindItemController();


allRoutes.post('/coletas/', ensureAuthenticate, createColetasController.handle);
allRoutes.post('/coletas/delete', ensureAuthenticate, deleteColetasController.handle);
allRoutes.post('/coletas/update', ensureAuthenticate, updateColetasController.handle);
allRoutes.get('/coletas/list-all', listAllColetasController.handle);
allRoutes.post('/coletas/find', ensureAuthenticate, findColetasController.handle);

allRoutes.post('/entidades/', ensureAuthenticate, createEntidadesController.handle);
allRoutes.post('/entidades/delete', ensureAuthenticate, deleteEntidadesController.handle);
allRoutes.post('/entidades/update', ensureAuthenticate, updateEntidadesController.handle);
allRoutes.get('/entidades/list-all', listAllEntidadesController.handle);
allRoutes.post('/entidades/find', ensureAuthenticate, findEntidadesController.handle);

allRoutes.post('/items/', ensureAuthenticate, createItemController.handle);
allRoutes.post('/items/delete', ensureAuthenticate, deleteItemController.handle);
allRoutes.post('/items/update', ensureAuthenticate, updateItemController.handle);
allRoutes.get('/items/list-all', listAllItemController.handle);
allRoutes.post('/items/find', ensureAuthenticate, findItemController.handle);


export { allRoutes }