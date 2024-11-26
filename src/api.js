let users = [];
let roles = [];
let userId = 1;
let roleId = 1;

export const getUsers = () => Promise.resolve(users);
export const addUser  = (user) => {
    user.id = userId++;
    users.push(user);
    return Promise.resolve(user);
};
export const updateUser  = (updatedUser ) => {
    users = users.map(user => user.id === updatedUser.id ? updatedUser  : user);
    return Promise.resolve(updatedUser );
};
export const deleteUser  = (id) => {
    users = users.filter(user => user.id !== id);
    return Promise.resolve();
};

export const getRoles = () => Promise.resolve(roles);
export const addRole = (role) => {
    role.id = roleId++;
    roles.push(role);
    return Promise.resolve(role);
};
export const updateRole = (updatedRole) => {
    roles = roles.map(role => role.id === updatedRole.id ? updatedRole : role);
    return Promise.resolve(updatedRole);
};
export const deleteRole = (id) => {
    roles = roles.filter(role => role.id !== id);
    return Promise.resolve();
};