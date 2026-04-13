// DATA (2 places per category)
const places = [
  // FOOD
  { name: "Pizza Place", category: "food" },
  { name: "Burger House", category: "food" },

  // FITNESS
  { name: "Gym Center", category: "fitness" },
  { name: "Yoga Studio", category: "fitness" },

  // HEALTH
  { name: "Health Clinic", category: "health" },
  { name: "Pharmacy", category: "health" }
];


// DISPLAY PLACES
function displayPlaces(list) {
  const container = document.getElementById("places");
  container.innerHTML = "";

  list.forEach(place => {
    const p = document.createElement("p");
    p.innerText = place.name + " (" + place.category + ")";
    container.appendChild(p);
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


// GET RECOMMENDATION (RANDOM)
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


// LOAD ALL ON START
displayPlaces(places);