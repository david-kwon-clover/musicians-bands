const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index');
const { describe, test, expect } = require("@jest/globals");

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({
            name: "Linkin Park",
            genre: "Rock"
        })
        expect(testBand.id).not.toBeNull();
        expect(testBand.name).toBe("Linkin Park");
        expect(testBand.genre).toBe("Rock");
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})