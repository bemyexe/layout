import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {App} from './app/App';

import './global-styles/reset.scss';
import './global-styles/global.scss';
import './global-styles/colors.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
