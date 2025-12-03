
import request from 'supertest';
import { app } from '../app';

describe('GET /hello-world', () => {
    it('validar retorno rota /hello-world', async() => {
        
        const response = await request(app).get('/hello-world');

        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello Typescript!')
    });
});