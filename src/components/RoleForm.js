import React, { useState, useEffect } from 'react';

const RoleForm = ({ role, onSubmit }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        if (role) {
            setName(role.name);
        } else {
            setName('');
        }
    }, [role]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id: role ? role.id : undefined, name });
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Role Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">{role ? 'Update Role' : 'Add Role'}</button>
        </form>
    );
};

export default RoleForm;