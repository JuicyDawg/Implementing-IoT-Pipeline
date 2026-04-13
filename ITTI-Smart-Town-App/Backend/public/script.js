// Example places (you can change these later)
const places = [
  { name: "Pizza Place", category: "food" },
  { name: "Gym Center", category: "fitness" },
  { name: "Health Clinic", category: "health" }
];


// Show places
function displayPlaces(list) {
  const container = document.getElementById("places");
  container.innerHTML = "";

  list.forEach(place => {
    const p = document.createElement("p");
    p.innerText = place.name + " (" + place.category + ")";
    container.appendChild(p);
  });
}


// Filter categories
function filterCategory(category) {
  if (category === "all") {
    displayPlaces(places);
  } else {
    const filtered = places.filter(p => p.category === category);
    displayPlaces(filtered);
  }
}


// Save preference
function savePreference() {
  const value = document.getElementById("preference").value;
  localStorage.setItem("category", value);
  alert("Preference saved!");
}


// Get recommendation
function getSmartSuggestion() {
  const saved = localStorage.getItem("category");

  if (!saved) {
    document.getElementById("suggestion").innerText = "No preference saved!";
    return;
  }

  const filtered = places.filter(p => p.category === saved);

  if (filtered.length > 0) {
    document.getElementById("suggestion").innerText =
      "We recommend: " + filtered[0].name;
  } else {
    document.getElementById("suggestion").innerText =
      "No places found for your preference.";
  }
}


// Show all places when page loads
displayPlaces(places);