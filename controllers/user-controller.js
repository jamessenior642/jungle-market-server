import userDao from "../users/user-dao.js"

const findUserbyEmail = async (request, response) => {
    const email = request.params.email;
    const user = await userDao.findByEmail(email);
    if (user) {
        response.json(user);
    }
    else {
        response.sendStatus(404);
    };
}

const findUserByID = async (request, response) => {
    const username = request.params.id;
    console.log(username)
    const user = await userDao.findUserById(username);
    if (user) {
        response.json(user);
    }
    else {
        response.sendStatus(404, "user not found");
    };
}

const findAllUsers = async (request, response) => {
    const users = await userDao.findAllUsers();
    response.json(users);
};

const updateUser = async (request, response) => {
    console.log(request.body);
    const id = request.params.id;
    const user = request.body;
    const updatedUser = await userDao.updateUser(id, user);
    response.json(updatedUser);
}

const deleteUser = async (request, response) => {
    const id = request.params.id;
    await userDao.deleteUser(id);
    response.sendStatus(200);
}

export default (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:email', findUserbyEmail);
    app.get('/api/user/:id', findUserByID);
    app.put('/api/users/:id', updateUser);
    app.delete('/api/users/:id', deleteUser);
}

