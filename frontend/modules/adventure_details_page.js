import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  const urlParams = new URLSearchParams(search);
  const adventureId = urlParams.get("adventure");
  return adventureId;

  // Place holder for functionality to work in the Stubs
  return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try{
    const result = await fetch(config.backendEndpoint + `/adventures/detail?adventure=${adventureId}`);
    const data = await result.json();
    return data;
  }
  catch(e){
    return null;
  }
  // Place holder for functionality to work in the Stubs
  // return null;
}

//Implementation of DOM manipulation to add adventure details to DOM
// function addAdventureDetailsToDOM(adventure) {
//   // TODO: MODULE_ADVENTURE_DETAILS
//   // 1. Add the details of the adventure to the HTML DOM
//   adventure.forEach(({name, subtitle, images, content}) => {
    
//   });
// }
function addAdventureDetailsToDOM(adventure) {
  // Get HTML elements by their IDs
  const adventureName = document.getElementById('adventure-name');
  const adventureSubtitle = document.getElementById('adventure-subtitle');
  const photoGallery = document.getElementById('photo-gallery');
  const adventureContent = document.getElementById('adventure-content');

  // Set adventure details in the DOM
  const { name, subtitle, images, content } = adventure;

  // Set adventure name and subtitle
  adventureName.textContent = name;
  adventureSubtitle.textContent = subtitle;

  // Create and append images to the photo gallery
  images.forEach(image => {
    const imageDiv = document.createElement('div');
    // imageDiv.classList.add('col-md-4', 'mb-3');

    const imageElement = document.createElement('img');
    imageElement.classList.add('activity-card-image');
    imageElement.src = image;

    imageDiv.appendChild(imageElement);
    photoGallery.appendChild(imageDiv);
  });
  // Set adventure content
  adventureContent.innerHTML = content;
}



//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
 
  document.getElementById("photo-gallery").innerHTML = `
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  `

  images.forEach((image, index) => {
    // Create indicator
    const ele =document.createElement("div");
    const activeclass = index == 0 ? "active" : "";
    ele.className = `carousel-item ${activeclass} `;
    ele.innerHTML = `
    <img src="${image}"  class="d-block w-100 carousel-img" alt="...">
    `;
    document.querySelector(".carousel-inner").appendChild(ele);
  
  });
}


//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
  if(adventure.available){
    document.getElementById("reservartion-panel-available").style.display = "block";
    document.getElementById("reservartion-panel-sold-out").style.display = "none";
    document.getElementById("reservartion-panel-cost").innerHTML = adventure.costPerHead;
  }
  else{
    document.getElementById("reservartion-panel-available").style.display = "none";
    document.getElementById("reservartion-panel-sold-out").style.display = "block";
  }

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
  document.getElementById("reservartion-cost").innerHTML = persons * adventure.costPerHead;

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};

