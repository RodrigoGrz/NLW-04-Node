import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Hello World" });
})

app.post("/users", (request, response) => {
    const { name, description } = request.body;

    return response.status(201).send();
})

app.listen(3333, () => console.log("Server is running!"));