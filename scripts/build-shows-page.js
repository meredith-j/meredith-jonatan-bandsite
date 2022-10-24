/* 
here is user comment code structure without assigned values, just in case i need
it again.

    {
    date: "",
    venue: "",
    location: "",
}; */

let shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Fransisco, CA",
    }, {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Fransisco, CA",
    }, {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Fransisco, CA",
    },  {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Fransisco, CA",
    }, {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Fransisco, CA",
    }, {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Fransisco, CA",
    }
];

//select correct container to add JS to
const showSectionDiv = document.querySelector('.shows__container-js');

//tells JS to add entire list of comments to HTML
for (let i = 0; i < shows.length; i++) {
    const showItem = shows[i];
    console.log(showItem);
    generateCommentCard(showItem);
}

//creating tags & classes for new HTML elements
function generateCommentCard(show) {

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
    showDate.innerText = show.date
    articleEl.appendChild(showDate);

    //generating show venue heading
    const showVenueHeading = document.createElement('h6');
    showVenueHeading.classList.add('shows__header');
    showVenueHeading.innerText = 'Venue';
    articleEl.appendChild(showVenueHeading);

    //generating show venues
    const showVenue = document.createElement('p');
    showVenue.classList.add('shows__info');
    showVenue.innerText = show.venue;
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
}

const articleEl1 = document.querySelectorAll('.shows__event');
    

console.log (articleEl1);

    for (let i = 0; i < articleEl1.length; i++) {
        const showsEvent = articleEl1[i];

        showsEvent.addEventListener("click", function (event) {
            // handle the event - prevent page from reloading
            event.preventDefault();

            for (let i = 0; i < articleEl1.length; i++) {
                const showsEvent = articleEl1[i];
            showsEvent.classList.remove("shows__event--clicked")
        };

            showsEvent.classList.add("shows__event--clicked");
        });
    }

