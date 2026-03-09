console.log("SERVER FILE STARTED");


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
    name: "ITTI Library",
    type: "public",
    openNow: true,
    category: "education"
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

app.get("/places", (req, res) => {
  res.json(places);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
