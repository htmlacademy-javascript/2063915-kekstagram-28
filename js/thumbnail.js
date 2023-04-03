
// eslint-disable-next-line no-unused-vars
import { similarComment } from './data.js';
import { openbigPicture } from './window-rendering.js';

// eslint-disable-next-line eol-last, no-unused-vars
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
// eslint-disable-next-line no-unused-vars
const container = document.querySelector('.pictures');

// eslint-disable-next-line no-unused-vars
const createThumbnail = (data) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = data.url;
  thumbnail.querySelector('.picture__img').alt = data.description;
  // eslint-disable-next-line no-undef
  thumbnail.querySelector('.picture__comments').textContent = data.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = data.likes;

  // eslint-disable-next-line no-undef
  thumbnail.addEventListener('click', () => openbigPicture(data));

  return thumbnail;
};

// eslint-disable-next-line no-unused-vars
const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export{renderThumbnails};

