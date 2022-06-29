localStorage.setItem(
  "property",
  JSON.stringify(
    (properties = [
      {
        id: 0,
        type: "Commercial",
        location: "Athlone",
        address: "8100 S Ashland Ave",
        picture: `../image/cmrcl1.jpg`,
        bedrooms: 2,
        bathrooms: 3,
        garage: 2,
        price: 5000,
      },
      {
        id: 1,
        type: "Residential",
        location: "Rondebosch East",
        address: "Metro Plaza Dr",
        picture: `../image/res1.jpg`,
        bedrooms: 3,
        bathrooms: 2,
        garage: 3,
        price: 7000,
      },
      {
        id: 2,
        type: "Apartment",
        address: "65 Lawson Rd",
        location: "Belgravia",
        picture: `../image/apt1.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 3,
        type: "Apartment",
        address: "Quincy St",
        location: "Jupiter",
        picture: `../image/apt2.jpg`,
        bedrooms: 3,
        bathrooms: 2,
        garage: 3,
        price: 9500,
      },
      {
        id: 4,
        type: "Commercial",
        address: "65 Lawson Rd",
        location: "Leeward",
        picture: `../image/cmrcl2.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 5,
        type: "Apartment",
        address: "87-656 Farrington Highway A",
        location: "Jupiter",
        picture: `../image/res2.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 6,
        type: "Residential",
        address: "41-157 Nalu Street",
        location: "Rondebosh East",
        picture: `../image/res3.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 7,
        type: "Apartment",
        address: "87-1409 Akowai Road",
        location: "Belgravia",
        picture: `../image/apt3.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 8,
        type: "Commercial",
        address: "1946 Pauoa Road A",
        location: "Athlone",
        picture: `../image/cmrcl3.webp`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 9,
        type: "Residential",
        address: "87-280 Laulele Street",
        location: "Leeward",
        picture: `../image/res4.jpg`,
        bedrooms: 4,
        bathrooms: 4,
        garage: 5,
        price: 10000,
      },
      {
        id: 10,
        type: "Commercial",
        address: " 85-929 midway Street",
        location: "Belgravia",
        picture: `../image/cmrcl4.jpg`,
        bedrooms: 2,
        bathrooms: 2,
        garage: 3,
        price: 7800,
      },
      {
        id: 11,
        type: "Apartment",
        address: "87-1013 Kahiwelola Street",
        location: "Leeward",
        picture: `../image/apt4.jpg`,
        bedrooms: 3,
        bathrooms: 2,
        garage: 1,
        price: 9000,
      },
    ])
  )
);

let display = document.getElementById("tbody");

function loadData() {
  display.innerHTML = "";
  properties.forEach((item, index) => {
    display.innerHTML += `
    <tr>
    <th scope="row">${item.id}</th>
    <td>${item.address}</td>
    <td>${item.type}</td>
    <td>${item.location}</td>

    <!-- icons -->
    <td>
    <!-- Update -->
    <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#update${index}"><i class="fa-solid fa-pen-to-square"></i></a>
    
    <!-- Delete -->
    <a class="btn"><i class="fa-solid fa-trash-can"></i></a>
    </td>
    </tr>


    <!-- Modal -->
    <div class="modal modal-xl fade" id="update${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${item.address}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div class="modal-body">
        <div class="row">
        <div class="col-6">
            <!-- Address -->
                <div class="mb-3">
                    <label for="editTitle${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editTitle${index}"
                    id="editTitle${index}"
                    value="${item.address}"/>
                </div>
    
            <!-- Type -->
                <div class="mb-3">
                    <label for="editType${index}" class="form-label">Type</label>
                    <input class="form-control" type="text"
                    name="editType${index}"
                    id="editType${index}"
                    value="${item.type}"/>
                </div>
    
            <!-- Location -->
                <div class="mb-3">
                    <label for="editLocation${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editLocation${index}"
                    id="editLocation${index}"
                    value="${item.location}"/>
                </div>
    
            <!-- picture -->
                <div class="mb-3">
                    <label for="editPic${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editPic${index}"
                    id="editPic${index}"
                    value="${item.picture}"/>
                </div>
            </div>
            
            <div class="col-6">
            <!-- bedrooms -->
                <div class="mb-3">
                    <label for="editRooms${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editRooms${index}"
                    id="editRooms${index}"
                    value="${item.bedrooms}"/>
                </div>
                
            <!-- bathrooms -->
                <div class="mb-3">
                    <label for="editBath${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editBath${index}"
                    id="editBath${index}"
                    value="${item.bathrooms}"/>
                </div>
    
            <!-- garage -->
                <div class="mb-3">
                    <label for="editGarage${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editGarage${index}"
                    id="editGarage${index}"
                    value="${item.garage}"/>
                </div>
    
            <!-- price -->
                <div class="mb-3">
                    <label for="editPrice${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editPrice${index}"
                    id="editPrice${index}"
                    value="${item.price}"/>
                </div>
            </div>
         </div> 

            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    `;
  });
}
loadData();
