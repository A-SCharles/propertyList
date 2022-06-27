let arr = [
  {
    location: "fddghjk",
    bedrooms: 5,
    bathrooms: 6,
    picture: `../image/landing_Wallpaper.jpg`,
    type: "For Rent",
  },
  {
    location: "fddghjk",
    bedrooms: 5,
    bathrooms: 6,
    picture: `../image/landing_Wallpaper.jpg`,
    type: "For Rent",
  },
];
let properties = document.getElementById("properties");
arr.forEach((item, index) => {
  properties.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${item.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.location}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary">${item.type}</button>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
});
// copyright
const Year = new Date().getFullYear();
document.getElementById("footer").innerHTML += `
<div class="row w-100">
<div class="col-12 d-flex justify-content-between">

<i class="fa-solid fa-location-dot">
Property 420
</i>

<i>&copyAbdus-Samad Charles ${Year}</i>

<div>
<a href="" class="mx-1">
<i class="fa-brands fa-github">
    GitHub
</i>
</a>

<a href="" class="mx-1">
<i class="fa-brands fa-linkedin">
    LinkedIn
</i>
</a>

</div>
</div>    
</div>
`;
