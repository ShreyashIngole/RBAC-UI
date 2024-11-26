import React from 'react';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import './styles.css';

const App = () => {
    return (
        <div className="app">
            <h1>RBAC Admin Dashboard</h1>
            <UserList />
            <RoleList />
        </div>
    );
};

export default App;