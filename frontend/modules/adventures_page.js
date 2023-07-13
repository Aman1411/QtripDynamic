import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  const urlParams = new URLSearchParams(search);
  const city = urlParams.get("city");
  return city;


}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  try{
    const result = await fetch(config.backendEndpoint + `/adventures?city=${city}`);
    const data = await result.json();
    return data;
  }
  catch(e){
    return null;
  }

}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  adventures.forEach(({ id, category, image, name, costPerHead, duration}) => {
    let ele = document.createElement("div");
    ele.className = "col-6 col-lg-3 mb-4";
    ele.innerHTML = `
            <a href="detail/?adventure=${id}" id=${id}>
              <div class="activity-card">
                <div class="category-banner">${category}</div>
                  <img class="img-responsive"
                       src=${image}
                  />
                    <div class="activity-card-text w-100 d-md-flex text-center justify-content-between p-2">
                       <h5 class="text-left">${name}</h5>
                       <p>${costPerHead}</p>
                    </div>
                    <div class="w-100 d-md-flex text-center justify-content-between p-2">
                    <h5 class="text-left">Duration</h5>
                    <p>${duration} Hours</p>
                    </div>
                  </div>
                </div>
              </a>               
             
    `;
    let div = document.getElementById("data");
    div.append(ele);
  });
}

// Implementation of filtering by duration which takes in a list of adventures,
// the lower bound and upper bound of duration, and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // Filter adventures based on Duration and return filtered list
  let filteredList = list.filter((listItem) => {
    return listItem.duration >= low && listItem.duration <= high;
  });
  return filteredList;
}


// Implementation of filtering by category which takes in a list of adventures,
// a list of categories to be filtered upon, and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // Filter adventures based on their Category and return filtered list
  let filteredList = list.filter((listItem) => {
    return categoryList.includes(listItem.category);
  });
  return filteredList;
}


// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  let filteredList = list;

  // Case 1: Filter by Duration
  if(filters.duration !== "") {
    const [low,high] = filters.duration.split("-");
    filteredList = filterByDuration(filteredList,Number(low), Number(high));
  }

  // Case 2: Filter by Category
  if (filters.category.length > 0) {
    filteredList = filterByCategory(filteredList, filters.category);
  }

  // Case 3: Add more filters as needed
  return filteredList
}
 
//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  const filtersString = JSON.stringify(filters);
  // Save the filters string to localStorage
  localStorage.setItem("filters", filtersString);
  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // Get the filters string from localStorage
  const filtersString = localStorage.getItem("filters");

  // If the filters string exists, parse it as an object and return
  if (filtersString) {
    const filters = JSON.parse(filtersString);
    return filters;
  }

  // If no filters are found, return null or an empty object based on your preference
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
  // Get the category pills container from the DOM
  const categoryListContainer = document.getElementById("category-list");

  // Clear existing category pills
  categoryListContainer.innerHTML="";
  // Check if filters is an array
 
    // Generate category pills and add them to the container
   filters.category.forEach((category) =>{
    const pillContainer = document.createElement("div");
    pillContainer.className = "category-filter";
    const pillHTML = `<p>${category}</p>`;
    pillContainer.innerHTML = pillHTML;
    categoryListContainer.append(pillContainer);
   });
}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
