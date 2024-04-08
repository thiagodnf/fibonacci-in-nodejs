const express = require("express");
const { performance } = require('perf_hooks');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');

const { query, matchedData, validationResult } = require('express-validator');

const PORT = argv.port || 3000;
const MIN_INDEX = 0;
const MAX_INDEX = 50;

const app = express();

app.use('/', express.static('public'))

const API_VALIDATOR = [
    query('index').trim().notEmpty().withMessage("should not be empty"),
    query('index').isInt({ gt: MIN_INDEX - 1, lt: MAX_INDEX + 1 }).toInt().withMessage(`should be integer >= ${MIN_INDEX} and <= ${MAX_INDEX}`)
];

function fibonacci(num) {

    if (num <= 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function calculate(index) {

    const start = performance.now();
    const result = fibonacci(index);
    const end = performance.now();

    const elapsedTime = end - start;

    return { index, result, elapsedTime };
}

app.get("/api/fibonacci", API_VALIDATOR, function (req, res) {

    console.log(`Request received on port ${PORT}`)

    const errors = validationResult(req)

    if (errors.isEmpty()) {

        const { index } = matchedData(req);

        res.status(200).json(calculate(index));
    } else {
        res.status(422).json({ errors: errors.array() })
    }
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
