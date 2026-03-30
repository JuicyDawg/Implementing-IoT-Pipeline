const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Data
const places = [
  {
    name: "ITTI City Park",
    category: "Recreation",
    days: "Monday - Sunday",
    hours: "06:00 - 22:00",
    openNow: true
  },
  {
    name: "ITTI Library",
    category: "Education",
    days: "Monday - Friday",
    hours: "09:00 - 18:00",
    openNow: true
  },
  {
    name: "ITTI Health Center",
    category: "Medical",
    days: "Monday - Friday",
    hours: "08:00 - 16:00",
    openNow: false
  },
  {
    name: "ITTI Grocery Store",
    category: "Shopping",
    days: "Monday - Sunday",
    hours: "07:00 - 21:00",
    openNow: true
  }
];

// Root route
app.get("/", (req, res) => {
  res.send("Server is running successfully.");
});

// API route
app.get("/places", (req, res) => {
  res.json(places);
});

// Optional filter
app.get("/places/filter/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  const filtered = places.filter(
    place => place.category.toLowerCase() === category
  );

  res.json(filtered);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});