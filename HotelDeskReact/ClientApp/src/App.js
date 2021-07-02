import React, { Component, useState } from 'react';
import { Route, Switch } from 'react-router';
import ErrorPage  from './Pages/ErrorPage';
import  Home  from './Pages/Home';
import  Login  from './Pages/Login';
import Register from './Pages/Register';
import ProfilePage from './Pages/ProfilePage';
import { Layout } from './Utils/Layout';
import HotelPage from '../src/Pages/HotelPage';
import './custom.css'
import { UserContext } from './Utils/UserContext';
import BookingPage from './Pages/BookingPage';

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

                        <Route exact path='/error' component={ErrorPage} />

                        <Route exact path='/profile/:id' component={ProfilePage} />

                        <Route exact path='/hotels' component={BookingPage} />

                        <Route exact path='/post/:id' component={HotelPage} />
                    </Switch>
                </Layout>
            </UserContext.Provider>
        </>
        );
}
export default App;