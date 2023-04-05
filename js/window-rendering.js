
const bigPictureOpenElement = document.querySelector('.big-picture');
// eslint-disable-next-line no-unused-vars
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureComments = document.querySelector('.social__comments');
// eslint-disable-next-line no-unused-vars
const whatLikes = document.querySelector('.likes-count');
// eslint-disable-next-line no-unused-vars
const whatComments = document.querySelector('.comments-count');
// eslint-disable-next-line no-unused-vars
const bigPictureDescription = document.querySelector('.social__caption');

// eslint-disable-next-line no-unused-vars
const commentCount = document.querySelector('.social__comment-count');
// eslint-disable-next-line no-unused-vars
const commentsLoader = document.querySelector('.comments-loader');
const bigPictureLoadButton = document.querySelector('.comments-loader');

let showingComments = 0;
let comments = [];
const COMMENTS_COUNTER = 5;


// eslint-disable-next-line no-unused-vars
function onDocumentKeydown(evt) {
  // eslint-disable-next-line no-undef
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closebigPicture();
  }
}

const fillCommentCounter = () => {
  commentCount.innerHTML = `${showingComments} из <span class="comments-count"> ${comments.length}</span> комментариев`;
};

const renderComments = () => {
  const currentComments = comments.slice(showingComments, showingComments + COMMENTS_COUNTER);
  showingComments = currentComments.length;
  // eslint-disable-next-line no-use-before-define
  currentComments.forEach((item) => bigPictureComments.append(drawComment(item)));
  fillCommentCounter();

  if (showingComments >= comments.length) {
    bigPictureLoadButton.classList.add('hidden');
    return;
  }
  bigPictureLoadButton.classList.remove('hidden');
};

const drawComment = (comment) => {
  const commentLi = document.createElement('li');
  commentLi.classList.add('social__comments');

  const commentImg = document.createElement('img');
  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentImg.classList.add('social__picture');
  commentLi.append(commentImg);

  // eslint-disable-next-line no-unused-vars
  const commentMessage = document.createElement('p');
  commentMessage.textContent = comment.message;
  commentMessage.classList.add('social__text');
  commentLi.append(commentMessage);


  return commentLi;
};

const onCommentsLoadClick = (evt) => {
  evt.preventDefault();
  renderComments();
};

function openbigPicture (data) {
  bigPictureOpenElement.classList.remove('hidden');
  comments = data.comments;
  renderComments();
  bigPictureLoadButton.addEventListener('click', onCommentsLoadClick);


  // eslint-disable-next-line no-undef
  bigPictureImg.src = data.url;
  whatLikes.textContent = data.likes;
  bigPictureDescription.textContent = data.description;


  // eslint-disable-next-line no-undef
  bigPictureComments.innerHTML = '';
  document.body.classList.add('modal-open');

  data.comments.forEach((comment) => {
    const commentHtml = drawComment(comment);
    // eslint-disable-next-line no-undef
    bigPictureComments.append(commentHtml);
  });

  document.addEventListener('keydown', onDocumentKeydown);
}

// eslint-disable-next-line no-unused-vars


function closebigPicture () {
  bigPictureOpenElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  comments = [];
  showingComments = 0;

  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureCloseElement.addEventListener('click', () => {
  closebigPicture();
});

export {openbigPicture, closebigPicture, drawComment};
