module.exports = {

    env: {
        'browser': true,
        'es6': true,
        'mocha': true,
        'node': true,
    },

    extends: [
        'eslint:all',
        'plugin:node/recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
    ],

    parserOptions: {
        'sourceType': 'script',
    },

    plugins: [
        'const-case',
        'jsdoc',
        'node',
        'optimize-regex',
        'promise',
        'sonarjs',
        'sort-requires',
        'unicorn',
    ],

    rules: {
        // const-case
        'const-case/uppercase': 2,

        // optimize-regex
        'optimize-regex/optimize-regex': 2,

        // sort-requires
        'sort-requires/sort-requires': 2,

        // sonarjs
        'sonarjs/cognitive-complexity': 0,

        // node
        'node/exports-style': 2,
        'node/no-missing-import': 2,
        'node/prefer-global/buffer': 2,
        'node/prefer-global/console': 2,
        'node/prefer-global/process': 2,
        'node/prefer-global/text-decoder': 2,
        'node/prefer-global/text-encoder': 2,
        'node/prefer-global/url-search-params': 2,
        'node/prefer-global/url': 2,
        'node/prefer-promises/dns': 2,
        'node/prefer-promises/fs': 2,

        // promise
        'promise/no-callback-in-promise': 2,
        'promise/no-nesting': 2,
        'promise/no-new-statics': 2,
        'promise/no-promise-in-callback': 2,
        'promise/no-return-in-finally': 2,

        // unicorn
        'unicorn/catch-error-name': [2, {'name': 'err'}],
        'unicorn/custom-error-definition': 2,
        'unicorn/filename-case': 0,
        'unicorn/no-process-exit': 0,
        'unicorn/no-unused-properties': 2,
        'unicorn/prevent-abbreviations': 0,

        // jsdoc
        'jsdoc/check-alignment': 2,
        'jsdoc/check-indentation': 2,
        'jsdoc/check-param-names': 2,
        'jsdoc/check-tag-names': 2,
        'jsdoc/check-types': 2,
        'jsdoc/newline-after-description': [2, 'never'],
        'jsdoc/no-undefined-types': 2,
        'jsdoc/require-hyphen-before-param-description': [2, 'never'],
        'jsdoc/require-jsdoc': [2, {'require': {'FunctionExpression': true, 'FunctionDeclaration': true, 'ArrowFunctionExpression': true}}],
        'jsdoc/require-param-name': 2,
        'jsdoc/require-param-type': 2,
        'jsdoc/require-param': 2,
        'jsdoc/require-returns-check': 2,
        'jsdoc/require-returns-type': 2,
        'jsdoc/require-returns': 2,
        'jsdoc/valid-types': 2,

        // eslint modified
        'arrow-parens': [2, 'as-needed'],
        'camelcase': [2, {'properties': 'never', 'ignoreDestructuring': true}],
        'comma-dangle': [2, {'arrays': 'always-multiline', 'objects': 'always-multiline', 'imports': 'always-multiline', 'exports': 'always-multiline', 'functions': 'always-multiline'}],
        'dot-location': [2, 'property'],
        'func-names': [2, 'never'],
        'indent': [2, 4, {'SwitchCase': 1}],
        'lines-around-comment': [2, {'afterBlockComment': false, 'allowObjectEnd': false, 'allowBlockEnd': false, 'allowArrayEnd': false}],
        'no-empty': [2, {'allowEmptyCatch': true}],
        'no-inner-declarations': [2, 'both'],
        'no-multiple-empty-lines': [2, {'max': 1, 'maxBOF': 0}],
        'one-var': [2, {'uninitialized': 'always'}],
        'operator-linebreak': [2, 'before'],
        'padded-blocks': [2, {'classes': 'always', 'switches': 'never'}],
        'padding-line-between-statements': [2, {'blankLine': 'always', 'prev': '*', 'next': 'multiline-block-like'}, {'blankLine': 'always', 'prev': 'multiline-block-like', 'next': '*'}, {'blankLine': 'always', 'prev': 'cjs-import', 'next': '*'}, {'blankLine': 'never', 'prev': 'cjs-import', 'next': 'cjs-import'}],
        'quote-props': [2, 'consistent-as-needed'],
        'quotes': [2, 'single'],
        'radix': [2, 'as-needed'],
        'space-before-function-paren': [2, {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],

        // eslint off
        'array-element-newline': 0,
        'capitalized-comments': 0,
        'complexity': 0,
        'function-call-argument-newline': 0,
        'function-paren-newline': 0,
        'global-require': 0,
        'guard-for-in': 0,
        'id-length': 0,
        'init-declarations': 0,
        'max-depth': 0,
        'max-len': 0,
        'max-lines-per-function': 0,
        'max-params': 0,
        'max-statements': 0,
        'multiline-comment-style': 0,
        'multiline-ternary': 0,
        'newline-per-chained-call': 0,
        'no-await-in-loop': 0,
        'no-confusing-arrow': 0,
        'no-console': 0,
        'no-continue': 0,
        'no-magic-numbers': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-ternary': 0,
        'no-unused-expressions': 0,
        'object-property-newline': 0,
        'prefer-named-capture-group': 0,
        'require-atomic-updates': 0,
        'require-unicode-regexp': 0,
        'sort-keys': 0,
        'wrap-regex': 0,
    }

};
