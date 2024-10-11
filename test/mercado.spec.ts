import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { faker } from '@faker-js/faker';
import { SimpleReporter } from '../simple-reporter';

describe('Mercado', () => {
    const p = pactum;
    const rep = SimpleReporter;
    const baseUrl = 'https://api-desafio-qa.onrender.com';
    let mercado;

    // p.request.setDefaultTimeout(30000);

    beforeAll(async () => p.reporter.add(rep));
    afterAll(() => p.reporter.end());
    beforeEach(async () => {
        mercado = await p
            .spec()
            .post(`${baseUrl}/mercado`)
            .withJson({
                nome: faker.company.name(),
                cnpj: faker.string.numeric(14),
                endereco: faker.word.words(3)
            })
            .expectStatus(StatusCodes.CREATED)
            .returns('novoMercado')
    })

    describe('Mercado', () => {
        it('busca todos os mercados', async () => {
            await p
                .spec()
                .get(`${baseUrl}/mercado`)
                .expectStatus(StatusCodes.OK)
        });

        it('cadastra um mercado', async () => {
            await p
                .spec()
                .post(`${baseUrl}/mercado`)
                .withJson({
                    nome: faker.company.name(),
                    cnpj: faker.string.numeric(14),
                    endereco: faker.word.words(3)
                })
                .expectStatus(StatusCodes.CREATED)
                .returns('novoMercado')
        });

        it('busca um mercado por ID', async () => {
            await p
                .spec()
                .get(`${baseUrl}/mercado/${mercado.id}`)
                .expectStatus(StatusCodes.OK)
        });

        it('atualiza dados do mercado', async () => {
            mercado = await p
                .spec()
                .put(`${baseUrl}/mercado/${mercado.id}`)
                .withJson({
                    cnpj: faker.string.numeric(14),
                })
                .expectStatus(StatusCodes.OK)
        });

        it('busca todos produtos do mercado', async () => {
            await p
                .spec()
                .get(`${baseUrl}/mercado/${mercado.id}/produtos`)
                .expectStatus(StatusCodes.OK)
        });

        it('cadastra uma nova fruta no mercado', async () => {
            await p
                .spec()
                .post(`${baseUrl}/mercado/${mercado.id}/produtos/hortifruti/frutas`)
                .withJson({
                    nome: faker.food.fruit(),
                    valor: 3
                })
                .expectStatus(StatusCodes.CREATED)
        });

        it('busca todas as frutas do mercado', async () => {
            await p
                .spec()
                .get(`${baseUrl}/mercado/${mercado.id}/produtos/hortifruti/frutas`)
                .expectStatus(StatusCodes.OK)
        });

        it('busca todas os legumes do mercado', async () => {
            await p
                .spec()
                .get(`${baseUrl}/mercado/${mercado.id}/produtos/hortifruti/legumes`)
                .expectStatus(StatusCodes.OK)
        });

        it('busca todas os doces do mercado', async () => {
            await p
                .spec()
                .get(`${baseUrl}/mercado/${mercado.id}/produtos/padaria/doces`)
                .expectStatus(StatusCodes.OK)
        });

        it('deleta o mercado', async () => {
            mercado = await p
                .spec()
                .delete(`${baseUrl}/mercado/${mercado.id}`)
                .expectStatus(StatusCodes.OK)
                .expectBodyContains(`Mercado com ID ${mercado.id} foi removido com sucesso`);
        });
    });
});
