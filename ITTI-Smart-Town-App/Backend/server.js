const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

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

app.get("/places", (req, res) => {
res.json(places);
});

app.listen(3000, () => {
console.log("Server running on http://127.0.0.1:3000");
});