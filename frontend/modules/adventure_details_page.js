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
    imageDiv.classList.add('col-md-4', 'mb-3');

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
  const carouselIndicators = document.querySelector('#photo-gallery .carousel-indicators');
  const carouselInner = document.querySelector('#photo-gallery .carousel-inner');

  images.forEach((image, index) => {
    // Create indicator
    const indicator = document.createElement('li');
    indicator.setAttribute('data-bs-target', '#photo-gallery');
    indicator.setAttribute('data-bs-slide-to', index.toString());
    if (index === 0) {
      indicator.classList.add('active');
    }
    carouselIndicators.appendChild(indicator);

    // Create slide
    const slide = document.createElement('div');
    slide.classList.add('carousel-item');
    if (index === 0) {
      slide.classList.add('active');
    }
    const imageElement = document.createElement('img');
    imageElement.classList.add('d-block', 'w-100');
    imageElement.src = image;
    slide.appendChild(imageElement);
    carouselInner.appendChild(slide);
  });
}


//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

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
// let ele = document.createElement("div");
//     ele.className = "col-lg-8";
//     ele.innerHTML = ` 
//           <div class = "adventure-detail-card">
//             <div class = "adventure-name">${name}</div>
//               <div class = "adventure-subtitle">${subtitle}</div>
//                <div class ="

                         

//     `
//     let div = document.getElementById("data");
//     div.append(ele);
