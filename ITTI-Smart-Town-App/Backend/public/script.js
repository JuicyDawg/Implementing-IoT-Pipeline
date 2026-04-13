// DATA with opening hours
const places = [
  // FOOD
  { name: "ITTI Pizza", category: "food", location: "ITTI Finland pizza", open: 10, close: 22 },
  { name: "ITTI Grill", category: "food", location: "ITTI Finland burger", open: 11, close: 23 },

  // FITNESS
  { name: "ITTI Gym", category: "fitness", location: "ITTI Finland gym", open: 6, close: 22 },
  { name: "ITTI Yoga Center", category: "fitness", location: "ITTI Finland yoga", open: 8, close: 20 },

  // HEALTH
  { name: "ITTI Health Clinic", category: "health", location: "ITTI Finland clinic", open: 8, close: 16 },
  { name: "ITTI Pharmacy", category: "health", location: "ITTI Finland pharmacy", open: 9, close: 18 }
];


// DISPLAY PLACES WITH TIME + STATUS
function displayPlaces(list) {
  const container = document.getElementById("places");
  container.innerHTML = "";

  const currentHour = new Date().getHours();

  list.forEach(place => {
    const isOpen = currentHour >= place.open && currentHour < place.close;

    const div = document.createElement("div");

    div.innerHTML = `
      <p><strong>${place.name}</strong> (${place.category})</p>
      <p>Open: ${place.open}:00 - ${place.close}:00</p>
      <p>Status: <b style="color:${isOpen ? 'green' : 'red'}">
        ${isOpen ? 'OPEN' : 'CLOSED'}
      </b></p>
      <button onclick="navigateTo('${place.location}')">Navigate</button>
      <hr>
    `;

    container.appendChild(div);
  });
}


// FILTER
function filterCategory(category) {
  if (category === "all") {
    displayPlaces(places);
  } else {
    const filtered = places.filter(p => p.category === category);
    displayPlaces(filtered);
  }
}


// SAVE PREFERENCE
function savePreference() {
  const value = document.getElementById("preference").value;
  localStorage.setItem("category", value);
  alert("Preference saved!");
}


// SMART RECOMMENDATION (ONLY OPEN PLACES)
function getSmartSuggestion() {
  const saved = localStorage.getItem("category");

  if (!saved) {
    document.getElementById("suggestion").innerText = "No preference saved!";
    return;
  }

  const currentHour = new Date().getHours();

  const filtered = places.filter(p =>
    p.category === saved &&
    currentHour >= p.open &&
    currentHour < p.close
  );

  if (filtered.length > 0) {
    const randomPlace = filtered[Math.floor(Math.random() * filtered.length)];

    document.getElementById("suggestion").innerText =
      "We recommend: " + randomPlace.name + " (OPEN NOW)";
  } else {
    document.getElementById("suggestion").innerText =
      "No places open right now for your preference.";
  }
}


// MAP INSIDE APP (NO NEW TAB)
function navigateTo(location) {
  const map = document.getElementById("mapFrame");
  map.src = "https://www.google.com/maps?q=" + location + "&output=embed";
}


// LOAD ALL
displayPlaces(places);