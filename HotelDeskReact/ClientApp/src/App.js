import React, { Component, useState } from 'react';
import { Route, Switch } from 'react-router';
import { ErrorPage } from './common/ErrorPage';
import  Home  from './pages/Home';
import  Login  from './common/Login';
import Register from './common/Register';
import { Layout } from './common/Layout';

import './custom.css'
import { UserContext } from './Utils/UserContext';

function App() {

    const [user, setUser] = useState({
        Id: "",
        Nmae: "",
        Email: "",
        Role: "",
        Auth: false
    });

    const login = (userData) => {
        setUser({
            Id: userData.Id,
            Name: userData.Name,
            Email: userData.Email,
            Role: userData.Role,
            Auth: true
        });
    }

    const logout = () => {
        setUser({
            Id: "",
            Name: "",
            Email: "",
            Role: "",
            Auth: false
        });
    }

    return (
        <>
            <UserContext.Provider value={{ user, login, logout }}>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />

                        <Route exact path='/register' component={Register} />

                        <Route exact path='/login' component={Login} />
                    </Switch>
                </Layout>
            </UserContext.Provider>
        </>
        );
}
export default App;