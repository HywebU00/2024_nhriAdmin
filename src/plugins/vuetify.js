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
          primary: '#348fe2',
          secondary: '#e9ecef', //'#32a7fa',
          loginColor: '#0156a2',
          light: '#8eebb1',
          navText: '#262626',
          thead: '#dadfe0',
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
