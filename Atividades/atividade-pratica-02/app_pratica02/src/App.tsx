import './styles/global.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { Login } from './components/accounts/Login';
import { Registration } from './components/accounts/Registration';
import { User } from './components/accounts/User';
import { Navegation } from './components/Navegation';
import { Equipamentos } from './components/equipamentos/Equipamentos';
import { Registros } from './components/registros/Registros';
import { Equipamento } from './components/equipamentos/Equipamento';

export function App() {
    return (
        <div className='container'>
            <Navegation />
            <Routes>
                <Route path='/' element={<Registros />} />
                <Route path='/equipamentos' element={<Equipamentos />} />
                <Route path='/user' element={<User />} />
                <Route path='/login/registration' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/teste' element={<Link to="/allWallet">wallet</Link>} />
                <Route path='/registros/:id' element={<Equipamento />} />
            </Routes>
        </div>
    )
}