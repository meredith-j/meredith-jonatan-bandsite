/* 
here is user comment code structure without assigned values, just in case i need
it again.

    {
    id: #,
    userName: "",
    commentDate: "",
    commentContent: "",
}; */


// array of objects - each object contains the user, date and content of the comment
let comments = [
    {
        userName: "Connor Walton",
        commentDate: "02/17/2021",
        commentContent: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        userName: "Emilie Beach",
        commentDate: "01/09/2021",
        commentContent: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        userName: "Miles Acosta",
        commentDate: "12/20/2020",
        commentContent: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },    
];



//select correct container to add JS to
const commentListEl = document.querySelector('.forum__container');

//tells JS to add entire list of comments to HTML
for (let i = 0; i < comments.length; i++) {
  const commentItem = comments[i];
  console.log(commentItem);
  generateCommentCard(commentItem);
}

//creating tags & classes for new HTML elements
function generateCommentCard(person) {

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
    imageEl.setAttribute('alt', person.userName);
    imageDiv.appendChild(imageEl);

    // div: container for commenter's name & date
    const nameDateDiv = document.createElement('div');
    nameDateDiv.classList.add('forum__name-date');
    articleEl.appendChild(nameDateDiv);

    //commenter name
    const commenterNameEl = document.createElement('p');
    commenterNameEl.classList.add('forum__user')
    commenterNameEl.innerText = person.userName;
    nameDateDiv.appendChild(commenterNameEl);

    //comment date
    const commenterDateEl = document.createElement('p');
    commenterDateEl.classList.add('forum__date')
    commenterDateEl.innerText = person.commentDate;
    nameDateDiv.appendChild(commenterDateEl);

    // div: container for comment
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('forum__comment-container');
    articleEl.appendChild(commentDiv);

    //comment content
    const commentContentEl = document.createElement('p');
    commentContentEl.classList.add('forum__content');
    commentContentEl.innerText = person.commentContent;
    commentDiv.appendChild(commentContentEl);
}

//create function for new comment to be added to array
function addComment (userName, newDate, comment) {

    const newComment =
        {userName: userName,
        commentDate: newDate,
        commentContent: comment,
        }
        
    comments.unshift(newComment);
}

//target element for comment form
const commentForm = document.getElementById("newComment");

// create event listener
commentForm.addEventListener("submit", (event) => {
    // handle the event - prevent page from reloading
    event.preventDefault();

    let name = event.target.name.value;
    let comment = event.target.comment.value;

    
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    let newDate = `${month}/${day}/${year}.`;

    addComment(name, newDate, comment);

    //removing .forum__container
    commentListEl.innerHTML = '';

    for (let i = 0; i < comments.length; i++) {
        const commentItem = comments[i];
        console.log(commentItem);
        generateCommentCard(commentItem);
      }

    console.log(newComment);
})