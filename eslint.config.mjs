import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{ ignores: ['public/scripts/*'] },
	{
		rules: {
			'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
			'vue/no-unused-vars': 'warn',
			'vue/html-self-closing': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/no-v-html': 'off',
			'vue/require-default-prop': 'off',
			'vue/first-attribute-linebreak': 'off',
		},
	},
);
