import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Login } from './login';
import { Register } from './register';
import { Task } from './task';

export const Dashboard = () => {
    const [logged, setLogged] = useState(false)

    function changeLog(bool) {
        setLogged(bool)
    }

    return (

        <Router>

            <div>
                <aside>
                    <Link to='/tasks'> TASKS </Link>
                </aside>
                <main>
                    <Routes>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login change={changeLog}/>} />
                        <Route path='/tasks' element={
                        logged ? 
                        <Task />
                        :
                        <Navigate to='/login'/>
                        } />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
