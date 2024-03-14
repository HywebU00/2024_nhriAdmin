import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  theme: {
    defaultTheme: 'default',
    themes: {
      default: {
        dark: false,
        colors: {
          primary: '#00acac', //'#247a96',
          secondary: '#00acac',
          loginColor: '#0156a2',
          light: '#8eebb1',
          navText: '#262626',
          submit: '#005f73',
          warning: '#ffd900',
          danger: '#ff5b57',
          cancel: '#6C7582',
          gray: '#6C7582',
          thead: '#e5e5e5',
        },
      },
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  components,
  directives,
});
