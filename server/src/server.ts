import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, nome: "user" },
    { id: 2, nome: "user2" },
    { id: 3, nome: "user3" },
    { id: 4, nome: "user4" },
  ]);
});

app.listen(3333);
