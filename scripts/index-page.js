/* 
here is user comment code structure without assigned values, just in case i need
it again.

    {
    id: #,
    userName: "",
    commentDate: "",
    commentContent: "",
}; */



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

function generateCommentCard(person) {

    // <article class="forum__comment">
    const articleEl = document.createElement('article');
    articleEl.classList.add('forum__comment');
    commentListEl.appendChild(articleEl);

    // add commenter profile photos - currently just a gray circle
    const imageEl = document.createElement('div');
    imageEl.classList.add('comment__image');
    //  don't need this line for now - maybe if we get images 
    //  imageEl.src = person.image.url;
    imageEl.setAttribute('alt', person.userName);
    articleEl.appendChild(imageEl);

    //commenter name
    const commenterNameEl = document.createElement('p');
    commenterNameEl.innerText = person.userName;
    articleEl.appendChild(commenterNameEl);

    //comment date
    const commenterDateEl = document.createElement('p');
    commenterDateEl.innerText = person.commentDate;
    articleEl.appendChild(commenterDateEl);

    //comment content
    const commentContentEl = document.createElement('p');
    commentContentEl.innerText = person.commentContent;
    articleEl.appendChild(commentContentEl);
}