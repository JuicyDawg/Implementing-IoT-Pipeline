const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// DATA
const places = [
  {
    name: "ITTI Health Center",
    category: "health",
    open: 8,
    close: 16,
    distance: 1.2,
    description: "Main healthcare center"
  },
  {
    name: "City Gym",
    category: "fitness",
    open: 6,
    close: 22,
    distance: 0.8,
    description: "Best gym in town"
  },
  {
    name: "Pizza Spot",
    category: "food",
    open: 11,
    close: 23,
    distance: 0.5,
    description: "Fast food and takeaway"
  }
];


app.get('/places', (req, res) => {
  const currentHour = new Date().getHours();

  const updatedPlaces = places.map(place => ({
    ...place,
    status:
      currentHour >= place.open && currentHour < place.close
        ? "Open"
        : "Closed"
  }));

  res.json(updatedPlaces);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});