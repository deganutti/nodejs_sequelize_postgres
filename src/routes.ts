import { Router } from "express";
//import {} from "./imports/ControllersImports"


/**
 * Pessoas
*/
import { CreatePessoasController } from "./controllers/pessoas/CreatePessoasController";
import { GetAllPessoasController } from "./controllers/pessoas/GetAllPessoasController";
import { GetOnePessoasController } from "./controllers/pessoas/GetOnePessoasController";
import { DeletePessoasController } from "./controllers/pessoas/DeletePessoasController";
import { UpdatePessoasController } from "./controllers/pessoas/UpdatePessoasController";
/**
 * Tipo pessoas
 */
import { GetAllTipoPessoasController } from "./controllers/pessoas/tipo_pessoa/GetAllTipoPessoasController";
import { GetOneTipoPessoasController } from "./controllers/pessoas/tipo_pessoa/GetOneTipoPessoasController";
import { CreateTipoPessoasController } from "./controllers/pessoas/tipo_pessoa/CreateTipoPessoasController";
import { UpdateTipoPessoasController } from "./controllers/pessoas/tipo_pessoa/UpdateTipoPessoasController";

/**
 * Endereço
*/
import { CreatePessoasEnderecoController } from "./controllers/pessoas/endereço_pessoas/CreatePessoasEnderecoController";
import { DeletePessoasEnderecoController } from "./controllers/pessoas/endereço_pessoas/DeletePessoasEnderecoController";
import { GetAllPessoasEnderecoController } from "./controllers/pessoas/endereço_pessoas/GetAllPessoasEnderecoController";
import { GetOnePessoasEnderecoController } from "./controllers/pessoas/endereço_pessoas/GetOnePessoasEnderecoController";
import { UpdatePessoasEnderecoController } from "./controllers/pessoas/endereço_pessoas/UpdatePessoasEnderecoController";
/**
 * Tipo endereço
 */
import { CreateTipoEnderecoController } from "./controllers/pessoas/endereço_pessoas/tipo_endereco/CreateTipoEnderecoController";
import { GetAllTipoEnderecoController } from "./controllers/pessoas/endereço_pessoas/tipo_endereco/GetAllTipoEnderecoController";
import { GetOneTipoEnderecoController } from "./controllers/pessoas/endereço_pessoas/tipo_endereco/GetOneTipoEnderecoController";
import { UpdateTipoEnderecoController } from "./controllers/pessoas/endereço_pessoas/tipo_endereco/UpdateTipoEnderecoController";
/**
 * Bancos
 */
import { CreateBancoController } from "./controllers/bancos/CreateBancoController";
import { GetAllBancoController } from "./controllers/bancos/GetAllBancoController";
import { GetOneBancoController } from "./controllers/bancos/GetOneBancoController";
import { UpdateBancoController } from "./controllers/bancos/UpdateBancoController";

/**
 * Agencias
 */
import { GetAllAgenciaController } from "./controllers/bancos/agencias/GetAllAgenciaController";
import { CreateAgenciaController } from "./controllers/bancos/agencias/CreateAgenciaController";
import { GetAgenciaController } from "./controllers/bancos/agencias/GetAgenciaController";


const routes = Router();

/**
 * Raiz
 */

routes.get("/", function (req, res) {
    res.json({
        "Application":"Athena", 
        "Version":"1.0.0.0.A", 
        "Dev":"Deganutti, Luiz Gabriel",
        "Contact":"deganutti@outlook.com.br"
    })
})

/**
 * Pessoas
 */
routes.get("/pessoas/", new GetAllPessoasController().handle);
routes.get("/pessoa/:cnpj", new GetOnePessoasController().handle);
routes.post("/pessoas/novo/", new CreatePessoasController().handle);
routes.put("/pessoas/atualiza/", new UpdatePessoasController().handle);
routes.delete("/pessoas/delete/:id_pessoa", new DeletePessoasController().handle);
/**
 * Tipo pessoas
 */
routes.get("/tipo/pessoas", new GetAllTipoPessoasController().handle);
routes.get("/tipo/pessoa", new GetOneTipoPessoasController().handle);
routes.post("/tipo/pessoas", new CreateTipoPessoasController().handle);
routes.put("/tipo/pessoas", new UpdateTipoPessoasController().handle);

/**
 * Endereço
*/
routes.get("/pessoas/endereco/todos/", new GetAllPessoasEnderecoController().handle);
routes.get("/pessoas/endereco/unico/", new GetOnePessoasEnderecoController().handle);
routes.post("/pessoas/endereco/novo/", new CreatePessoasEnderecoController().handle);
routes.put("/pessoas/endereco/atualiza/", new UpdatePessoasEnderecoController().handle);
routes.delete("/pessoas/endereco/delete/", new DeletePessoasEnderecoController().handle);
/**
 * Tipo Endereço
 */
routes.get("/pessoas/endereco/tipo/", new GetAllTipoEnderecoController().handle);
routes.get("/pessoas/endereco/tipo/one/", new GetOneTipoEnderecoController().handle);
routes.post("/pessoas/endereco/tipo/", new CreateTipoEnderecoController().handle);
routes.put("/pessoas/endereco/tipo/atualiza/", new UpdateTipoEnderecoController().handle);
/**
 * Bancos
 */
routes.post("/bancos/novo/", new CreateBancoController().handle);
routes.put("/bancos/atualiza/", new UpdateBancoController().handle);
routes.get("/bancos/todos/", new GetAllBancoController().handle);
routes.get("/bancos/one/", new GetOneBancoController().handle);
/**
 * Agencias
 */
routes.get("/bancos/agencia/todos/", new GetAllAgenciaController().handle);
routes.get("/bancos/agencia/one/", new GetAgenciaController().handle);
routes.post("/bancos/agencia/novo/", new CreateAgenciaController().handle);

export { routes }