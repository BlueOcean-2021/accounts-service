import data from '../tests/employers.json';
import BaseController from './base';

class Employer extends BaseController {
    async list (req, resp) {
        const employers = data;

        super.responseOk(resp, employers);
    }

    async getById (req, resp) {
        const { id } = req.params;
        const employer = data.find(e => e.id === id);

        if (!employer) {
            return super.responseNotFound(resp);
        }

        super.responseOk(resp, employer);
    }

    async register (req, resp) {
        const {
            email, firstName, lastName, company, location
        } = req.body;

        const dup = data.find(e => e.email === email);
        if (dup) {
            return super.responseInputError(resp, 'Email already registered.');
        }

        const employer = {
            id: '3001', email, firstName, lastName, company, location
        };
        super.responseOk(resp, employer);
    }

    async updateProfile (req, resp) {
        const {
            email, company, firstName, lastName, location
        } = req.body;

        const employer = data.find(e => e.email === email);

        if (!employer) {
            return super.responseNotFound(resp);
        }

        const updated = {
            ...employer, company, firstName, lastName, location
        };

        super.responseOk(resp, updated);
    }
}

const singleton = new Employer();

export default singleton;
