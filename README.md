# Object validator

Validate the object values by a schema.
I hope you like it.

Pieter Wigboldus

## Test

If you would test the validator, you can just run:

```
npm install
npm run test
```

## Usage

Example schema:
```javascript
const barSchema = {
    name: "string",
    address: "string",
    drinks: "object"
};
```

Example input:
```javascript
const barObj = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};
```

Example usage:
```javascript
const validator = new Validator(barSchema);

validator.validate(barObj);
```
