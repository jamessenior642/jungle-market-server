import userDao from "../users/user-dao.js";


const signup = async (request, response) => {
    const email = request.body.email;
    const userName = request.body.userName;
    const password = request.body.password;
    const role = request.body.role;


    const checkEmail = await userDao.findByEmail(email);

    if (checkEmail) {
        response.status(400).json({ message: 'Email already exists' });
        return;
    }

    const user = await userDao.createUser(request.body);
    request.session.user = user;
    response.json(user);
    }

const login = async (request, response) => {
    const { email, password } = request.body;
    const user = await userDao.findbyCredentials(email, password);

    if (!user) {
        response.status(400).json({ message: 'Invalid credentials' });
        return;
    }

    request.session.user = user;
    response.json(user);
}

const profile = async (request, response) => {
    const user = request.session.profile;
    if (!user) {
        response.status(400).json({ message: 'Not logged in' });
        return;
    }
    response.json(user);
}

export default (app) => {
    app.post('/api/signup', signup);
    app.post('/api/login', login);
    app.get('/api/profile', profile);
}
