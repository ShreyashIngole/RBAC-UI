import React, { useEffect, useState } from 'react';
import { getUsers, addUser , updateUser , deleteUser  } from '../api';
import UserForm from './UserForm';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser , setEditingUser ] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const users = await getUsers();
        setUsers(users);
    };

    const handleAddOrUpdateUser  = async (user) => {
        if (editingUser ) {
            await updateUser (user);
        } else {
            await addUser (user);
        }
        setEditingUser (null);
        loadUsers();
    };

    const handleEditUser  = (user) => {
        setEditingUser (user);
    };

    const handleDeleteUser  = async (id) => {
        await deleteUser (id);
        loadUsers();
    };

    return (
        <div>
            <h2>User Management</h2>
            <UserForm user={editingUser } onSubmit={handleAddOrUpdateUser } />
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.role}
                        <button onClick={() => handleEditUser (user)}>Edit</button>
                        <button onClick={() => handleDeleteUser (user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;