import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSubmit }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setRole(user.role);
        } else {
            setName('');
            setRole('');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id: user ? user.id : undefined, name, role });
        setName('');
        setRole('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="User  Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="User  Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
            />
            <button type="submit">{user ? 'Update User' : 'Add User'}</button>
        </form>
    );
};

export default UserForm;