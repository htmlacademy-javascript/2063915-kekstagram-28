
// eslint-disable-next-line no-unused-vars
const DESCRIPTION_PHOTO_USERS = 25;


// eslint-disable-next-line no-unused-vars
const PHOTO_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
// eslint-disable-next-line no-unused-vars
const NAME_AUTHOR = [
  'Аврора',
  'Иван',
  'Диана',
  'Вероника',
  'Алиса',
  'Ульяна',
  'Ярослав',
  'Стефания',
  'Марк',
  'Елисей',
  'Артём',
  'Максим',
  'Мирослава',
  'Демьян',
  'Владимир',
  'Анастасия',
  'Павел',
  'Дарья',
  'Сергей',
  'Денис'];

const DESCRIPTION = ['Я пыталась заниматься йогой, но в позе лотоса уснула',
  'Я, возможно, никогда не буду лучшей, но я стараюсь быть лучшей твоей',
  'Если вам никто не улыбнулся утром, я подарю вам одну из своих',
  'Никогда не позволяйте никому скучать',
  'Все только начинает становиться действительно хорошим',
  'Я опять съела сладкое. А все потому, что каждую секунду в мире 200 человек празднуют свой день рождения!',
  'Мечтайте. Поверьте, в это. Добейтесь этого',
  'Утром, только одна хорошая мысль меняет смысл целого дня',
  'Надейтесь на лучшее, но не ждите этого. Смотрите вперед в будущее, но никогда не ждите, пока это произойдет',
  'Любите меня, от этого я буду сиять еще ярче',
  'Я точно знаю, кто я, и я чертовски горжусь этим'];

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];


function createComment() {
  return ({
    id: getRandomInteger(1, 200),
    avatar: `img/avatar-${getRandomArrayElement(1, 6)}.svg`,
    massage: getRandomArrayElement(PHOTO_MESSAGE),
    name: getRandomArrayElement(NAME_AUTHOR)
  });
}


const createDescription = (_, index) => ({
  // eslint-disable-next-line no-undef
  id: index + 1,
  // eslint-disable-next-line no-template-curly-in-string
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({
    length: getRandomInteger(0, PHOTO_MESSAGE) },
  createComment
  ),
});


const similarComment = Array.from({length: DESCRIPTION_PHOTO_USERS}, createDescription);

// eslint-disable-next-line no-console
console.log(similarComment);
