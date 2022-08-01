module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: ['plugin:prettier/recommended'], //定义文件继承的子规范
  plugins: [
    //定义了该eslint文件所依赖的插件
    'react-hooks',
    'eslint-plugin-react',
    '@typescript-eslint',
  ],
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: false,
      },
    ],
  },
};
