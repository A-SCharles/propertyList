let arr = [
  {
    type: "Commercial",
    location: "Athlone",
    address: '8100 S Ashland Ave',
    picture: `../image/cmrcl1.jpg`,
    bedrooms: 2,
    bathrooms: 3,
    garage: 2,
    price: 5000,
  },
  {
    type: "Residential",
    location: "Rondebosch East",
    address: 'Metro Plaza Dr',
    picture: `../image/res1.jpg`,
    bedrooms: 3,
    bathrooms: 2,
    garage: 3,
    price: 7000,
  },
  {
    type: "Apartment",
    address: "194 Mercer Street, 627 Broadway",
    location: "Belgravia",
    picture: `../image/apt1.jpg`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    type: "Apartment",
    address: "190 Mercer Street, 627 Broadway",
    location: "Belgravia",
    picture: `../image/apt1.jpg`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    type: "Apartment",
    address: "194 Mercer Street, 627 Broadway",
    location: "Belgravia",
    picture: `../image/apt1.jpg`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    type: "Apartment",
    address: "194 Mercer Street, 627 Broadway",
    location: "Belgravia",
    picture: `../image/apt1.jpg`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
];

let properties = document.getElementById("properties");
arr.forEach((item, index) => {
  properties.innerHTML += `
  <div class="card p-3 m-3 mx-auto">
    <img src="${item.picture}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5>Address: ${item.address}</h5>
    <h6 class="card-title">${item.location}</h6>
      <p class="card-text">Price: R${item.price.toFixed(2)}/pm</p>
      <p class="card-text">Property Type: ${item.type}</p>
      <!-- Icons -->
      <div class="d-flex justify-content-around">
        <p><i class="fa-solid fa-bed"></i> ${item.bedrooms}</p>
        <p><i class="fa-solid fa-shower"></i> ${item.bathrooms}</p>
        <p><i class="fa-solid fa-car"></i> ${item.garage}</p>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#property${index}">
        View
      </button>
    </div>
  </div>


  <!--  -->
  <!-- Modal -->
  <div class="modal fade" id="property${index}" tabindex="-1" aria-labelledby="propertyLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="propertyLabel">${item.address}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div class="modal-body">
              <div class="row">
                  <div class="col-5">
                    <img src="${item.picture}" class="img-fluid">
                  </div>

                  <div class="col-6">
                    <label>Property type: </label>
                    <p><i class="fa-solid fa-house-building"></i>${item.type}</p>
                      
                    <label>Bedrooms: </label>
                    <p><i class="fa-solid fa-bed"></i> ${item.bedrooms}</p>

                    <label>Bathrooms: </label>
                    <p><i class="fa-solid fa-shower"></i> ${item.bathrooms}</p>
                    
                    <label>Garage Space: </label>
                    <p><i class="fa-solid fa-car"></i> ${item.garage}</p>
                  </div>
              </div>

              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
  </div>
  <!--  -->
    `;
});

// footer & copyright
const Year = new Date().getFullYear();
document.getElementById("footer").innerHTML += `
<div class="container">
  <div class="row w-100">
      <div class="col-12 d-flex justify-content-between">
      <p><i class="fa-solid fa-location-dot"></i> Property 420</p>
        
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
  </div>
</div>
`;
