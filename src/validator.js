const types = {
    string: String,
    array: Array,
    object: Object,
    number: Number,
    boolean: Boolean
};

/**
 * Object validator.
 */
export class Validator {
    /**
     * Set the schema for the validator.
     *
     * @param {object} schema
     */
    constructor(schema) {
        this.schema = schema;
    }

    /**
     * Validate the input.
     *
     * @param {object} input
     *
     * @return {boolean}
     */
    validate(input) {
        return Object.entries(this.schema).every(([fieldName, fieldType]) => {
            if (
                !input ||
                !input.hasOwnProperty(fieldName) ||
                !types.hasOwnProperty(fieldType)
            ) {
                return false;
            }

            const value = input[fieldName];
            const type = types[fieldType];

            return value.constructor === type;
        });
    }
}
