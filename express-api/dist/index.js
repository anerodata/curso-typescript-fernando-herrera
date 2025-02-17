"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejemplo de web server
const express_1 = require("express");
//const express = require('express')
const app = (0, express_1.express)();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Okey'
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
