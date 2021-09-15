const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    res.send("Hello World!");
});

app.get("/results/:n1/:n2", (req, res) => {
    const x = Number(req.params.n1);
    const y = Number(req.params.n2);

    res.send({
        result: x + y,
    });
});

app.post("/results/:n1/:n2", (req, res, next) => {
    const x = Number(req.params.n1);
    const y = Number(req.params.n2);

    res.send({
        result: x * y,
    });
});

app.put("/results/:n1/:n2", (req, res, next) => {
    const x = Number(req.params.n1);
    const y = Number(req.params.n2);

    res.send({
        result: x / y,
    });
});

app.patch("/results/:n1/:n2", (req, res, next) => {
    const x = Number(req.params.n1);
    const y = Number(req.params.n2);

    res.send({
        result: Math.pow(x, y),
    });
});

app.delete("/results/:n1/:n2", (req, res, next) => {
    const x = Number(req.params.n1);
    const y = Number(req.params.n2);

    res.send({
        result: x - y,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
