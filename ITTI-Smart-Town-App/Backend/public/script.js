let allPlaces = [];


function loadPlaces() {
  fetch('/places')
    .then(res => res.json())
    .then(data => {
      allPlaces = data;
      displayPlaces(data);
    })
    .catch(err => {
      console.error("Error loading places:", err);
    });
}

function displayPlaces(places) {
  const container = document.getElementById("places");
  container.innerHTML = "";

  places.forEach(place => {
    container.innerHTML += `
      <div class="section">
        <h2>${place.name}</h2>
        <p>${place.description}</p>
        <p>Category: ${place.category}</p>
        <p>Status: 
          <span style="color:${place.status === 'Open' ? 'green' : 'red'}">
            ${place.status}
          </span>
        </p>
        <p>Distance: ${place.distance} km</p>
        <p>Estimated time: ${Math.round(place.distance * 12)} min walk</p>
      </div>
    `;
  });
}


function filterCategory(category) {
  if (category === 'all') {
    displayPlaces(allPlaces);
  } else {
    const filtered = allPlaces.filter(p => p.category === category);
    displayPlaces(filtered);
  }
}


function getSmartSuggestion() {
  const pref = localStorage.getItem("userPreference");

  let suggestion;

  if (pref) {
    suggestion = allPlaces.find(p => p.category === pref);
  } else {
    const hour = new Date().getHours();

    if (hour < 11) {
      suggestion = allPlaces.find(p => p.category === "food");
    } else if (hour < 18) {
      suggestion = allPlaces.find(p => p.category === "health");
    } else {
      suggestion = allPlaces.find(p => p.category === "fitness");
    }
  }

  if (suggestion) {
    document.getElementById("suggestion").innerHTML =
      "Recommended: " + suggestion.name;
  }
}


function savePreference() {
  const pref = document.getElementById("preference").value;
  localStorage.setItem("userPreference", pref);
  alert("Preference saved!");
}


loadPlaces();