import data from '../tests/users.json';
import BaseController from './base';

class User extends BaseController {
    async list (req, resp) {
        const users = data;

        super.responseOk(resp, users);
    }

    async getById (req, resp) {
        const { id } = req.params;
        const user = data.find(e => e.id === id);

        if (!user) {
            return super.responseNotFound(resp);
        }

        super.responseOk(resp, user);
    }

    async register (req, resp) {
        const {
            email, firstName, lastName, location
        } = req.body;

        const dup = data.find(e => e.email === email);
        if (dup) {
            return super.responseInputError(resp, 'Email already registered.');
        }

        const user = {
            id: '4001', email, firstName, lastName, location
        };
        super.responseOk(resp, user);
    }

    async updateProfile (req, resp) {
        const {
            email, firstName, lastName, location
        } = req.body;

        const user = data.find(e => e.email === email);

        if (!user) {
            return super.responseNotFound(resp);
        }

        const updated = {
            ...user, firstName, lastName, location
        };

        super.responseOk(resp, updated);
    }
}

const singleton = new User();

export default singleton;
