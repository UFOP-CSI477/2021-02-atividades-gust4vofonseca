import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api } from "../../services/api";

interface IRegistros {
	id: string;
	equipamento_id: string;
	user_id: string;
	descricao: string;
	dataLimite: Date;
	tipo: number;
}

interface IEquipamentos {
    nome: string;
    id: string;
}


export function Equipamento() {
    const [registros, setRegistros] = useState<IRegistros[]>([])
    const [equipamento, setEquipamento] = useState<IEquipamentos>();
    const [equipamentos, setEquipamentos] = useState<IEquipamentos[]>([]);
    const { id } = useParams();
    const token = localStorage.getItem('token')

    function loadRegistros() {
        api.post("/registros/equipamento", {
            id
        }).then(response => {
            setRegistros(response.data);
        })

        api.post("/equipamentos/search", {
            id
        }).then(response => {
            setEquipamento(response.data);
        })
    }

    function loadEquipamentos() {
        api.get("/equipamentos/list", {}).then(response => {
            setEquipamentos(response.data)
        })
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
                viewEditInput(id);
            })
        }
    }

    useEffect(() => {
        loadRegistros()
        loadEquipamentos()
    }, [])

    return (
        <div className="container">
            <h1>{equipamento?.nome}</h1>
             <ul>
                {
                    registros.map(registro => <li key={registro.id} className="teste">
                        <p>
                        Equipamento: {equipamento?.nome}
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