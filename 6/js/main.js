/* eslint-disable no-unused-vars */

import './functions.js';
// eslint-disable-next-line no-unused-vars
import {similarComment} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import { openbigPicture, closebigPicture, drawComment } from './window-rendering.js';

renderThumbnails(similarComment());
