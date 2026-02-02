const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());


const places = [
  {
    id: 1,
    name: "ITTI City Park",
    type: "park",
    openNow: true,
    category: "recreation"
  },
  {
    id: 2,
    name: "ITTI Local Gym",
    type: "gym",
    openNow: false,
    category: "health"
  },
  {
    id: 3,
    name: "ITTI Health Center",
    type: "healthcare",
    openNow: true,
    category: "medical"
  },
  {
    id: 4,
    name: "ITTI Grocery Store",
    type: "shop",
    openNow: true,
    category: "shopping"
  }
];


app.get("/", (req, res) => {
  res.send("Town of ITTI backend is running");
});


app.get("/places", (req, res) => {
  res.json(places);
});


app.get("/places/filter", (req, res) => {
  const { type, openNow } = req.query;

  let result = places;

  if (type) {
    result = result.filter(p => p.type === type);
  }

  if (openNow !== undefined) {
    result = result.filter(p => p.openNow === (openNow === "true"));
  }

  res.json(result);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
