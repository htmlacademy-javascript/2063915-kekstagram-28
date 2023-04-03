
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


// eslint-disable-next-line no-unused-vars
const onDocumentKeydown = (evt) => {
  // eslint-disable-next-line no-undef
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closebigPicture();
  }
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

function openbigPicture (data) {
  bigPictureOpenElement.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

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


function closebigPicture () {
  bigPictureOpenElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureCloseElement.addEventListener('click', () => {
  closebigPicture();
});

export {openbigPicture, closebigPicture, drawComment};
