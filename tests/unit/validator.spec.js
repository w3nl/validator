import { Validator } from "../../src/validator.js";
import barSchema from "../../src/schemas/bar.js";
import carSchema from "../../src/schemas/car.js";
import personSchema from "../../src/schemas/person.js";

const testCases = [
    {
        description: "A valid bar",
        input: {
            name: "Jimmys drinks",
            address: "Somewhere over the rainbow",
            drinks: {
                beer: ["Straffe Hendrik", "Rochefort", "St Bernard"]
            }
        },
        schema: barSchema,
        expectedValue: true
    },
    {
        description: "An invalid bar",
        input: {
            name: "Sjonnies",
            address: "Centrum 001",
            drinks: [
                // < No object
                "Heineken"
            ]
        },
        schema: barSchema,
        expectedValue: false
    },
    {
        description: "A valid car",
        input: {
            brand: "Mazda",
            type: "MX5 NB 1.8",
            milage: 199999.99,
            extras: ["2001 Special Edition"]
        },
        schema: carSchema,
        expectedValue: true
    },
    {
        description: "An invalid car",
        input: {
            brand: "BMW",
            type: "335",
            // No number
            milage: "100000",
            extras: ["LCI", "KW Coilovers"]
        },
        schema: carSchema,
        expectedValue: false
    },
    {
        description: "A valid person",
        input: {
            name: "James",
            age: 25,
            siblings: ["Johnnathan"],
            metaData: {},
            active: true
        },
        schema: personSchema,
        expectedValue: true
    },
    {
        description: "An invalid person",
        input: {
            name: "James",
            age: 25,
            active: true
        },
        schema: personSchema,
        expectedValue: false
    }
];

describe.each(testCases)(
    "Validator test",
    ({ description, input, schema, expectedValue }) => {
        it(description, () => {
            const validator = new Validator(schema);

            expect(validator.validate(input)).toEqual(expectedValue);
        });
    }
);
