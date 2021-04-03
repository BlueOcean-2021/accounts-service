import data from '../tests/auth.json';
import jwts from '../tests/jwts.json';
import BaseController from './base';

class Auth extends BaseController {
    async login (req, resp) {
        const { email, password } = req.body;
        const found = data.find(
            e => e.email === email && e.password === password
        );

        if (!found) {
            return super.responseInputError(resp, Error('Invalid credentials'));
        }

        // sign JWT
        const jwt = jwts.find(e => e.email === email);
        const authenticated = {
            ...found,
            password: undefined,
            accessToken: jwt.accessToken
        };

        super.responseOk(resp, authenticated);
    }
}

const singleton = new Auth();

export default singleton;
