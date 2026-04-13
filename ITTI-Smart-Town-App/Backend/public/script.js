const places = [
  
  { name: "ITTI Pizza", category: "food", location: "ITTI Finland pizza" },
  { name: "ITTI Grill", category: "food", location: "ITTI Finland burger" },

  
  { name: "ITTI Gym", category: "fitness", location: "ITTI Finland gym" },
  { name: "ITTI Yoga Center", category: "fitness", location: "ITTI Finland yoga" },

  
  { name: "ITTI Health Clinic", category: "health", location: "ITTI Finland clinic" },
  { name: "ITTI Pharmacy", category: "health", location: "ITTI Finland pharmacy" }
];



function displayPlaces(list) {
  const container = document.getElementById("places");
  container.innerHTML = "";

  list.forEach(place => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p><strong>${place.name}</strong> (${place.category})</p>
      <button onclick="navigateTo('${place.location}')">Navigate</button>
      <hr>
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

  const filtered = places.filter(p => p.category === saved);

  if (filtered.length > 0) {
    const randomPlace = filtered[Math.floor(Math.random() * filtered.length)];

    document.getElementById("suggestion").innerText =
      "We recommend: " + randomPlace.name;
  } else {
    document.getElementById("suggestion").innerText =
      "No places found.";
  }
}



function navigateTo(location) {
  const url = "https://www.google.com/maps/search/" + location;
  window.open(url, "_blank");
}



displayPlaces(places);