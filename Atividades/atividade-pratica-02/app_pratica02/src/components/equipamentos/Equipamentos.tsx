import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { api } from "../../services/api"

interface IEquipamentos {
    nome: string;
    id: string;
}

export function Equipamentos() {
    const [equipamentos, setEquipamentos] = useState<IEquipamentos[]>([])
    const token = localStorage.getItem('token');
    function loadEquipamentos () {
        api.get("/equipamentos/list", {}).then(response => {
            setEquipamentos(response.data)
        })
    }

    function viewCadastrar() {
        const button = document.getElementById("viewButton");
        const divView = document.getElementById("divView");

        if (token) {
            if (divView?.className === 'displayInvisible') {
                button.className = 'displayInvisible';
                divView.className = 'container'
            } else {
                button.className = 'buttonCreate';
                divView.className = 'displayInvisible';
            }
        } else {
            alert('Faça o login')
        }
    }

    function createEquipamento() {
        const nome = document.getElementById('nome')?.value;

        if (token) {
            api.post('/equipamentos', {
                name: nome
            },{
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                loadEquipamentos();
                viewCadastrar();
            })
            
        }
    }

    function deleteEquipamento(id: string) {
        if (token) {
            if (token) {
                api.post('/equipamentos/delete', {
                    id
                },{
                    headers: {
                        'authorization': `token ${token}`
                    }
                }).then(response => {
                    loadEquipamentos();
                })
                
            }

        } else {
            alert('Faça o login') 
        }
    }

    function viewEditInput(id: string) {
        if (token) {
            const divinput = document.getElementById(`div-${id}`);
            const button = document.getElementById(`button-${id}`);

            if (divinput?.className === 'displayInvisible') {
                button.className = 'displayInvisible';
                divinput.className = 'container';
            } else {
                button.className = 'buttonUpdateInput';
                divinput.className = 'displayInvisible';
            }
        } else {
            alert("Faça o login")
        }
    }

    function updateEquipamento(id: string) {
        if (token) {
            const name = document.getElementById(`input-${id}`)?.value;

            api.post('/equipamentos/update', {
                id,
                name
            },{
                headers: {
                    'authorization': `token ${token}`
                }
            }).then(response => {
                loadEquipamentos();
                viewEditInput(id);
            })
        }
    }

    useEffect(() => {
        loadEquipamentos();

    }, [])

    return (
        <div className="container">
            <div className="container login">
                <button className="buttonCreate" id="viewButton" onClick={viewCadastrar}>Cadastrar</button>
                <div id="divView" className="displayInvisible">
                    <input type="text" id="nome" placeholder="nome"/>
                    <button className="buttonCreate" onClick={createEquipamento}>Salvar</button>
                    <button className="buttonDelete" onClick={viewCadastrar}>Cancelar</button>
                </div>
            </div>
            <h1>Equipamentos registrados</h1>
            <ul>
                {equipamentos.map(equipamento => <li key={equipamento.id} id={equipamento.id} className="teste">
                    <div>
                        <p><Link to={`/registros/${equipamento.id}`} className="link">{equipamento.nome} </Link></p>
                        <button className="buttonDeleteInput" onClick={() => { deleteEquipamento(equipamento.id)}}>Deletar</button>
                        <div id={`div-${equipamento.id}`} className="displayInvisible">
                            <input type="text" id={`input-${equipamento.id}`} placeholder="nome"/>
                            <button className="buttonCreateInput" onClick={()=> {updateEquipamento(equipamento.id)}}>Salvar</button>
                        </div>
                        <button className="buttonUpdateInput" onClick={()=>{viewEditInput(equipamento.id)}} id={`button-${equipamento.id}`}>Editar</button>
                    </div>
                </li>)}
            </ul>

 
        </div>
    ) 
}