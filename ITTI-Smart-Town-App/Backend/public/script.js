
const places = [
  { name: "ITTI Pizza", category: "food", location: "Iitti Finland pizza", open: 10, close: 22 },
  { name: "ITTI Grill", category: "food", location: "Iitti Finland burger", open: 11, close: 23 },

  { name: "ITTI Gym", category: "fitness", location: "Iitti Finland gym", open: 6, close: 22 },
  { name: "ITTI Yoga Center", category: "fitness", location: "Iitti Finland yoga", open: 8, close: 20 },

  { name: "ITTI Health Clinic", category: "health", location: "Iitti Finland clinic", open: 8, close: 16 },
  { name: "ITTI Pharmacy", category: "health", location: "Iitti Finland pharmacy", open: 9, close: 18 }
];



function displayPlaces(list) {
  const container = document.getElementById("places");
  container.innerHTML = "";

  const currentHour = new Date().getHours();

  list.forEach(place => {
    const isOpen = currentHour >= place.open && currentHour < place.close;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${place.name}</h3>
      <p>${place.category}</p>
      <p>Open: ${place.open}:00 - ${place.close}:00</p>
      <p>Status: ${isOpen ? 'OPEN' : 'CLOSED'}</p>
      <button onclick="navigateTo('${place.location}')">Navigate</button>
    `;

    container.appendChild(div);
  });
}



function filterCategory(category) {
  if (category === "all") {
    displayPlaces(places);
  } else {
    const filtered = places.filter(p => p.category === category);
    displayPlaces(filtered);
  }
}



function savePreference() {
  const value = document.getElementById("preference").value;
  localStorage.setItem("category", value);
  alert("Preference saved!");
}



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
      "No places open right now.";
  }
}



function navigateTo(location) {
  const map = document.getElementById("mapFrame");
  map.src = "https://www.google.com/maps?q=" + location + "&z=12&output=embed";
}



displayPlaces(places);