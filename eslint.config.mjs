// @ts-check
import perfectionist from 'eslint-plugin-perfectionist';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(perfectionist.configs['recommended-natural']);
