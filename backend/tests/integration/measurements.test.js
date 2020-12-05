const request = require('supertest');
const { Measurement } = require('../../models/measurement');

let server;

describe('/api/measurements', () => {
    beforeEach(async () => { server = await require('../../index') })
    afterEach(async () => {
        Measurement.deleteMany({}).then(() => { server.close() })
    })

    describe('GET /', () => {
        it('should get all measuremets', async () => {
            Measurement.create([{ location: 'foo' }, { location: 'bar' }])
            const response = await request(server).get('/api/measurements')
            expect(response.status).toBe(200)
            expect(response.body.some(m => m.location === 'foo')).toBeTruthy()
            expect(response.body.some(m => m.location === 'bar')).toBeTruthy()
        })
    })

    describe('GET /removeAll', () => {
        it('should remove all measuremets', async () => {
            const response = await request(server).get('/api/measurements/removeAll')
            expect(response.status).toBe(200)
            expect(response.body).toHaveProperty('deletedCount')
        })
    })
})

describe('/', () => {
    beforeEach(async () => { server = await require('../../index') })
    afterEach(async () => {
        Measurement.deleteMany({}).then(() => { server.close() })
    })
    describe('GET /', () => {
        it('should be reachable', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
            expect(response.text).toMatch(/(Welcome)/i)

        })
    })
})