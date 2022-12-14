import express from "express";

const app = express();

app.get("/games", (request, response) => {
  return response.json([]);
});

app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

app.get("/games/:id/ads", (request, response) => {
  const gameId = request.params.id;

  return response.json([
    { id: 1, nome: "user" },
    { id: 2, nome: "user2" },
    { id: 3, nome: "user3" },
    { id: 4, nome: "user4" },
  ]);
});

app.get("/ads/:id/discord", (request, response) => {
  const adId = request.params.id;

  return response.json([]);
});

app.listen(3333);
