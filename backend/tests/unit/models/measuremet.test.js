const winston = require('winston');
const { loadAllMeasurements } = require('../../../models/measurement');
const measurementsService = require('../../../services/measurements');

describe('loadAllMeasurements', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should resolve with response of measuremets', async () => {
        measurementsService.getAllMeasurements = jest.fn().mockResolvedValue({ statusCode: 200, body: '{ "results": [1, 2, 3] }' })

        const response = await measurementsService.getAllMeasurements('a')
        measurements = JSON.parse(response.body).results;

        expect(response.statusCode).toBe(200)
        expect(measurements.length).toBe(3)
    })

    it('should throw exception if fetching data from open AQ API get rejected', async () => {
        winston.error = jest.fn()

        let datasourceUrl = 'a'

        await loadAllMeasurements(datasourceUrl)
        expect(winston.error).toHaveBeenCalled();
    })

    it('should throw exception if fetching data from open AQ API get response with status code other than 200', async () => {
        measurementsService.getAllMeasurements = jest.fn().mockResolvedValue({ statusCode: 403 })
        winston.error = jest.fn()

        let datasourceUrl = 'a'

        await loadAllMeasurements(datasourceUrl)
        expect(winston.error).toHaveBeenCalled();
    })

})