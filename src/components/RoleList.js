import React, { useEffect, useState } from 'react';
import { getRoles, addRole, updateRole, deleteRole } from '../api';
import RoleForm from './RoleForm';

const RoleList = () => {
    const [roles, setRoles] = useState([]);
    const [editingRole, setEditingRole] = useState(null);

    useEffect(() => {
        loadRoles();
    }, []);

    const loadRoles = async () => {
        const roles = await getRoles();
        setRoles(roles);
    };

    const handleAddOrUpdateRole = async (role) => {
        if (editingRole) {
            await updateRole(role);
        } else {
            await addRole(role);
        }
        setEditingRole(null);
        loadRoles();
    };

    const handleEditRole = (role) => {
        setEditingRole(role);
    };

    const handleDeleteRole = async (id) => {
        await deleteRole(id);
        loadRoles();
    };

    return (
        <div>
            <h2>Role Management</h2>
            <RoleForm role={editingRole} onSubmit={handleAddOrUpdateRole} />
            <ul>
                {roles.map(role => (
                    <li key={role.id}>
                        {role.name}
                        <button onClick={() => handleEditRole(role)}>Edit</button>
                        <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;