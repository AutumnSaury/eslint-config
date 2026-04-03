import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'

export default function getTSConfig (project: string, tsconfigRootDir: string): Linter.Config[] {
  return [
    {
      name: 'typescript',
      plugins: {
        '@typescript-eslint': tseslint.plugin
      },
      languageOptions: {
        parserOptions: {
          project,
          tsconfigRootDir
        },
        parser: tseslint.parser
      },
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/await-thenable': ['error'],
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            minimumDescriptionLength: 3
          }
        ],
        '@typescript-eslint/ban-tslint-comment': ['error'],
        '@typescript-eslint/no-restricted-types': [
          'error',
          {
            types: {
              String: {
                message: 'Use string instead',
                fixWith: 'string'
              },
              Boolean: {
                message: 'Use boolean instead',
                fixWith: 'boolean'
              },
              Number: {
                message: 'Use number instead',
                fixWith: 'number'
              },
              Symbol: {
                message: 'Use symbol instead',
                fixWith: 'symbol'
              },
              BigInt: {
                message: 'Use bigint instead',
                fixWith: 'bigint'
              },
              Function: {
                message: [
                  'The `Function` type accepts any function-like value.',
                  'It provides no type safety when calling the function, which can be a common source of bugs.',
                  'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
                  'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
                ].join('\n')
              },
              // object typing
              Object: {
                message: [
                  'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
                  '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                  '- If you want a type meaning "any value", you probably want `unknown` instead.'
                ].join('\n')
              },
              '{}': {
                message: [
                  '`{}` actually means "any non-nullish value".',
                  '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                  '- If you want a type meaning "any value", you probably want `unknown` instead.'
                ].join('\n')
              }
            }
          }
        ],
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/consistent-generic-constructors': [
          'error',
          'constructor'
        ],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
          }
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-type-exports': [
          'error',
          {
            fixMixedExportsWithInlineTypeSpecifier: true
          }
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports'
          }
        ],
        '@typescript-eslint/dot-notation': [
          'error',
          {
            allowIndexSignaturePropertyAccess: false,
            allowKeywords: true,
            allowPattern: '',
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false
          }
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowDirectConstAssertionInArrowFunctions: true
          }
        ],
        '@typescript-eslint/method-signature-style': ['error'],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variableLike',
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
          }
        ],
        '@typescript-eslint/no-array-constructor': ['error'],
        '@typescript-eslint/no-base-to-string': ['error'],
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { ignoreArrowShorthand: false, ignoreVoidOperator: false }
        ],
        '@typescript-eslint/no-dupe-class-members': ['error'],
        '@typescript-eslint/no-dynamic-delete': ['error'],
        '@typescript-eslint/no-empty-object-type': [
          'error',
          {
            allowInterfaces: 'with-single-extends'
          }
        ],
        '@typescript-eslint/no-extra-non-null-assertion': ['error'],
        '@typescript-eslint/no-extraneous-class': [
          'error',
          { allowWithDecorator: true }
        ],
        '@typescript-eslint/no-floating-promises': ['error'],
        '@typescript-eslint/no-for-in-array': ['error'],
        '@typescript-eslint/no-implied-eval': ['error'],
        '@typescript-eslint/no-invalid-void-type': ['error'],
        '@typescript-eslint/no-misused-new': ['error'],
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/no-namespace': ['error'],
        '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
        '@typescript-eslint/no-non-null-assertion': ['warn'],
        '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
        '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
        '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
        '@typescript-eslint/no-unsafe-argument': ['error'],
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
            enforceForJSX: false
          }
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
            argsIgnorePattern: '^_',
            caughtErrors: 'none',
            caughtErrorsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            enums: false,
            variables: false,
            typedefs: false
          }
        ],
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/no-require-imports': ['error', { allowAsImport: true }],
        '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
        '@typescript-eslint/only-throw-error': [
          'error',
          { allowThrowingAny: false, allowThrowingUnknown: false }
        ],
        '@typescript-eslint/prefer-function-type': ['error'],
        '@typescript-eslint/prefer-includes': ['error'],
        '@typescript-eslint/prefer-nullish-coalescing': [
          'error',
          { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }
        ],
        '@typescript-eslint/prefer-optional-chain': ['error'],
        '@typescript-eslint/prefer-promise-reject-errors': ['error'],
        '@typescript-eslint/prefer-readonly': ['error'],
        '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
        '@typescript-eslint/prefer-return-this-type': ['error'],
        '@typescript-eslint/promise-function-async': ['error'],
        '@typescript-eslint/require-array-sort-compare': [
          'error',
          { ignoreStringArrays: true }
        ],
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          { skipCompoundAssignments: false }
        ],
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true }
        ],
        '@typescript-eslint/return-await': ['error', 'always'],
        '@typescript-eslint/strict-boolean-expressions': [
          'error',
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
            allowNullableBoolean: false,
            allowNullableString: false,
            allowNullableNumber: false,
            allowAny: false
          }
        ],
        '@typescript-eslint/triple-slash-reference': [
          'error',
          { lib: 'never', path: 'never', types: 'never' }
        ],
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: false }]
      }
    } satisfies Linter.Config
  ]
}
