const api_url = 'https://project-1-api.herokuapp.com/';
const api_key = 'df7d7017-5f9b-4e31-92aa-0d70af0a5d0b';

//select correct container to add JS to
const commentListEl = document.querySelector('.forum__container');


function displayComment() {
//get request for API
axios
    .get(`${api_url}comments?api_key=${api_key}`)
    .then((response) => {
    
    const comment = response.data;

    comment.sort(function(x, y) {
        return new Date(y.timestamp) - new Date(x.timestamp);
    })


   // create new elements via DOM for each comment
    comment.forEach((comment) => {


    // <article class="forum__comment">
    const articleEl = document.createElement('article');
    articleEl.classList.add('forum__comment');
    commentListEl.appendChild(articleEl);

    // div: container for image
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('forum__image');
    articleEl.appendChild(imageDiv);

    // add commenter profile photos - currently just a gray circle
    const imageEl = document.createElement('div');
    imageEl.classList.add('forum__photo');
    //  don't need this line for now - maybe if we get images 
    //  imageEl.src = person.image.url;

    //alt text for images
    imageEl.setAttribute('alt', comment.name);
    imageDiv.appendChild(imageEl);

    // div: container for commenter's name & date
    const nameDateDiv = document.createElement('div');
    nameDateDiv.classList.add('forum__name-date');
    articleEl.appendChild(nameDateDiv);

    //commenter name
    const commenterNameEl = document.createElement('p');
    commenterNameEl.classList.add('forum__user')
    commenterNameEl.innerText = comment.name;
    nameDateDiv.appendChild(commenterNameEl);

    //comment date
    const commenterDateEl = document.createElement('p');
    commenterDateEl.classList.add('forum__date')
    commenterDateEl.innerText = new Date(comment.timestamp).toLocaleDateString(); //this method converts dates to the correct format
    nameDateDiv.appendChild(commenterDateEl);

    // div: container for comment
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('forum__comment-container');
    articleEl.appendChild(commentDiv);

    //comment content
    const commentContentEl = document.createElement('p');
    commentContentEl.classList.add('forum__content');
    commentContentEl.innerText = comment.comment;
    commentDiv.appendChild(commentContentEl);
})})
    .catch((error) => console.log(error));
}

displayComment()

//target element for comment form
const commentForm = document.getElementById("newComment");

// create event listener
commentForm.addEventListener("submit", (event) => {
    // handle the event - prevent page from reloading
    event.preventDefault();

    // send new comment to axios
    axios.post(`${api_url}comments?api_key=${api_key}`, {
        name: event.target.name.value,
        comment: event.target.comment.value})
        
        .then(result => {

        //removing .forum__container
        commentListEl.innerText = '';
        commentForm.reset()

        displayComment()
        
        })
        
        .catch((err) => console.log(error));
})