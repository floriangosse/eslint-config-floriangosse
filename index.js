module.exports = {
    parserOptions: {
        // This is supported since Node.js 14
        ecmaVersion: 2019,
        sourceType: 'module'
    },

    rules: {
        // require curly braces around blocks
        curly: 'error',

        // require dot notation for accessing properties - except for keywords
        'dot-notation': ['error', { allowKeywords: true }],

        // use `===` and `!==` over `==` and `!=`
        'eqeqeq': 'error',

        // disallow use of arguments.caller or arguments.callee
        'no-caller': 'error',

        // disallow usage of multiline strings
        'no-multi-str': 'error',

        // disallow usage of with
        'no-with': 'error',

        // require immediate function expression to be wrapped in parentheses
        'wrap-iife': ['error', 'inside'],

        // disallow trailing commas
        'comma-dangle': ['error', 'never'],

        // disallow empty blocks
        'no-empty': 'error',

        // ensure that the results of typeof are compared against a valid string
        'valid-typeof': ['error', { requireStringLiterals: true }],

        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 'error',

        // disallow declaration of variables that are not used in the code
        'no-unused-vars': ['error', {
            vars: 'local',
            args: 'after-used',
            ignoreRestSiblings: false
        }],

        // disallow use of variables before they are defined
        'no-use-before-define': ['warn', {
            functions: false,
            classes: false,
            variables: true
        }],

        // strict mode should be handled by the engine or transpiler
        strict: ['error', 'never'],

        //
        // Style
        //

        // don't require a specific style for spacing after/before array brackets
        'array-bracket-spacing': 'off',

        // require spacing after opening braces and before closing braces
        'block-spacing': ['error', 'always'],

        'brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // variables, functions, ... should be namded in camelcase
        camelcase: ['error', { properties: 'never' }],

        // space after a comma
        'comma-spacing': ['error', { before: false, after: true }],

        // commas only allowed at the end of line
        'comma-style': ['error', 'last'],

        // disallow padding inside computed properties
        'computed-property-spacing': ['error', 'never'],

        // enforce empty line at the end of the file
        'eol-last': ['error', 'always'],

        // enforce no space between called function name and paranthese
        'func-call-spacing': ['error', 'never'],

        // warn if a function has no name
        'func-names': 'warn',

        // indentation of 4
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 'off',
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            }
        }],

        // enforces spacing between keys and values in object literal properties
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // enforces spacing before and after keywords
        'keyword-spacing': ['error', { before: true, after: true }],

        // enforce unix styled linebreaks
        'linebreak-style': ['error', 'unix'],

        'new-cap': 'error',

        // disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 'error',

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'error',

        // don't require specific linebreaks for operators
        'operator-linebreak': 'off',

        // enforce usage of single quotes - except for escaping
        quotes: ['error', 'single', { avoidEscape: true }],

        // require simemicolons at the end of a statement
        semi: ['error', 'always'],

        // require space before blocks
        'space-before-blocks': 'error',

        // require space around infix operators
        'space-infix-ops': 'error',

        // require spaces after words
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {}
        }]
    }
};
