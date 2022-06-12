import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface IEquipamentos {
    nome: string;
    id: string;
}

interface IRegistros {
	id: string;
	equipamento_id: string;
	user_id: string;
	descricao: string;
	dataLimite: Date;
	tipo: number;
}



export function Registros() {
    const token = localStorage.getItem('token');
    const [registros, setRegistros] = useState<IRegistros[]>([])
    const [equipamentos, setEquipamentos] = useState<IEquipamentos[]>([]);

    function loadRegistros() {
        api.get("/registros/list", {}).then(response => {
            setRegistros(response.data)
        })
    }

    function loadEquipamentos() {
        api.get("/equipamentos/list", {}).then(response => {
            setEquipamentos(response.data)
        })
    }

    function createRegistro() {
        const equipamentoId = document.getElementById('equipamento')?.value;
        const descricao = document.getElementById('descricao')?.value;
        const date = document.getElementById('date')?.value;
        const tipo = document.getElementById('tipo')?.value;

        console.log(equipamentoId, descricao, date, tipo);

        api.post('/registros', {
            equipamento_id: equipamentoId,
            descricao,
            dataLimite: date,
            tipo
        }, {
            headers: {
                'authorization': `token ${token}`
            }
        }).then(data => {
            loadRegistros()
            viewCadastrar()
        }) 
        
    }

    function viewCadastrar() {
        const createRegistros = document.getElementById('createRegistros');
        const button = document.getElementById('buttonCadastro');

        if (token){
            if (createRegistros?.className === 'displayInvisible') {
                createRegistros.className = 'container login';
                button.className = 'displayInvisible';
            } else {
                createRegistros.className = 'displayInvisible';
                button.className = 'buttonCreate';
            }
        } else {
            alert("Faça o login!")
        }
    }

    function viewEditInput(id: string) {
        if (token) {
            const divinput = document.getElementById(`div-${id}`);
            const button = document.getElementById(`button-${id}`);

            if (divinput?.className === 'displayInvisible') {
                button.className = 'displayInvisible';
                divinput.className = 'container login';
            } else {
                button.className = 'buttonUpdateInput';
                divinput.className = 'displayInvisible';
            }
        } else {
            alert("Faça o login")
        }
    }

    function deleteRegistro(id: string) {
        if (token) {
            if (token) {
                api.post('/registros/delete', {
                    id
                },{
                    headers: {
                        'authorization': `token ${token}`
                    }
                }).then(response => {
                    loadRegistros();
                })
                
            }
        } else {
            alert('Faça o login') 
        }
    }

    function updateRegistro(id: string) {
        const equipamentoId = document.getElementById(`equipamento-${id}`)?.value;
        const descricao = document.getElementById(`descricao-${id}`)?.value;
        const date = document.getElementById(`date-${id}`)?.value;
        const tipo = document.getElementById(`tipo-${id}`)?.value;

        if (token) {
            api.post('/registros/update', {
                id,
                equipamento_id: equipamentoId,
                descricao,
                dataLimite: date,
                tipo
            },{
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                loadRegistros()
                loadEquipamentos();
                viewEditInput(id);
            })
        }
    }

    useEffect(() => {
        loadEquipamentos();
        loadRegistros()
    }, [])


    return (
        <div>
            <div id="createRegistros" className="displayInvisible">
                <select name="equipamendo" id="equipamento">
                    <option value="" defaultValue='' disabled>Equipamento</option>
                    {
                        equipamentos.map(equipamento => <option value={equipamento.id} key={equipamento.id}>{equipamento.nome}</option>)
                    }
                </select>
                <input type="text" name="descricao" id="descricao" placeholder="Descrição"/>
                <input type="date" name="date" id="date"/>
                <select name="tipo" id="tipo">
                    <option value="" disabled>Tipo</option>
                    <option value="1">Preventiva</option>
                    <option value="2">Corretiva</option>
                    <option value="3">Urgente</option>
                </select>

                <button onClick={createRegistro} className="buttonCreate">Salvar</button>
                <button onClick={viewCadastrar} className="buttonDelete">Cancelar</button>
            </div>
            <button onClick={viewCadastrar} id="buttonCadastro" className="buttonCreate">Cadastrar</button>
            <h1>Manuteções Registradas</h1>
            <ul>
                {
                    registros.map(registro => <li key={registro.id}>
                        <p>
                        Equipamento: {equipamentos.map(equipamento => { if (equipamento.id === registro.equipamento_id) {return equipamento.nome} })}
                        </p>
                        <p>
                            Descrição: {registro.descricao}
                        </p>
                        <p>
                            Data limite: {registro.dataLimite}
                        </p>
                        <p>
                            tipo: {registro.tipo}
                        </p>
                        <button className="buttonDeleteInput" onClick={() => { deleteRegistro(registro.id)}}>Deletar</button>
                        <div id={`div-${registro.id}`} className="displayInvisible">
                            <select name="equipamendo" id={`equipamento-${registro.id}`} defaultValue={registro.equipamento_id}>
                                <option value="" defaultValue='' disabled>Equipamento</option>
                                {
                                    equipamentos.map(equipamento => <option value={equipamento.id} key={equipamento.id}>{equipamento.nome}</option>)
                                }
                            </select>
                            <input type="text" name="descricao" id={`descricao-${registro.id}`} defaultValue={registro.descricao} placeholder="Descrição"/>
                            <input type="date" name="date" id={`date-${registro.id}`} defaultValue={registro.dataLimite}/>
                            <select name="tipo" id={`tipo-${registro.id}`} defaultValue={registro.tipo}>
                                <option value="" disabled>Tipo</option>
                                <option value="1">Preventiva</option>
                                <option value="2">Corretiva</option>
                                <option value="3">Urgente</option>
                            </select>
                            <button className="buttonCreateInput" onClick={()=> {updateRegistro(registro.id)}}>Salvar</button>
                            <button className="buttonDeleteInput" onClick={()=>{viewEditInput(registro.id)}}>Cancelar</button>
                        </div>
                        <button className="buttonUpdateInput" onClick={()=>{viewEditInput(registro.id)}} id={`button-${registro.id}`}>Editar</button>
                    </li>)
                }
            </ul>
        </div>
    )
}