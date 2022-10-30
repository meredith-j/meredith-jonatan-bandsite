const api_url = 'https://project-1-api.herokuapp.com/';
const api_key = 'df7d7017-5f9b-4e31-92aa-0d70af0a5d0b';

//select correct container to add JS to
const showSectionDiv = document.querySelector('.shows__container-js');

//get request for API
axios
    .get(`${api_url}showdates?api_key=${api_key}`)
    .then((response) => {
    
    const shows = response.data;
    
    shows.forEach((show) => {

    //creating tags & classes for new HTML elements

    //article container to hold each show in
    const articleEl = document.createElement('article');
    articleEl.classList.add('shows__event');
    showSectionDiv.appendChild(articleEl);

    //creating date heading
    const showDateHeading = document.createElement('h6');
    showDateHeading.classList.add('shows__header');
    showDateHeading.innerText = 'Date';
    articleEl.appendChild(showDateHeading);

    //generating show dates
    const showDate = document.createElement('p');
    showDate.classList.add('shows__featured');
    showDate.innerText = new Date(show.date).toDateString(); //this method converts dates to the correct format
    articleEl.appendChild(showDate);

    //generating show venue heading
    const showVenueHeading = document.createElement('h6');
    showVenueHeading.classList.add('shows__header');
    showVenueHeading.innerText = 'Venue';
    articleEl.appendChild(showVenueHeading);

    //generating show venues
    const showVenue = document.createElement('p');
    showVenue.classList.add('shows__info');
    showVenue.innerText = show.place;
    articleEl.appendChild(showVenue);

    //generating show city heading
    const showCityHeading = document.createElement('h6');
    showCityHeading.classList.add('shows__header');
    showCityHeading.innerText = 'Location';
    articleEl.appendChild(showCityHeading);

    //generating show cities
    const showCity = document.createElement('p');
    showCity.classList.add('shows__info');
    showCity.innerText = show.location;
    articleEl.appendChild(showCity);

    //generating 'buy tickets' button
    const showTickets = document.createElement('button');
    showTickets.classList.add('shows__tickets');
    showTickets.innerText = 'Buy Tickets';
    articleEl.appendChild(showTickets);
})


//target elements that contain the .shows__event class
const articleEl1 = document.getElementsByTagName('article');
const featuredArticle = document.querySelectorAll('.shows__event--clicked');

    for (let i = 0; i < articleEl1.length; i++) {
        const showsEvent = articleEl1[i];

        showsEvent.addEventListener("click", function (event) {
            // handle the event - prevent page from reloading
            event.preventDefault();
            
        if (!event.target.classList.contains("shows__event--clicked")) {
            for (let i = 0; i < articleEl1.length; i++) {
                const showsEvent = articleEl1[i];
            showsEvent.classList.remove("shows__event--clicked")
            showsEvent.classList.add("shows__event")
        }
            showsEvent.classList.add("shows__event--clicked");
            showsEvent.classList.remove("shows__event")
        } 

        else {
            showsEvent.classList.remove("shows__event--clicked");
            showsEvent.classList.add("shows__event");
        }
        })
    }
})