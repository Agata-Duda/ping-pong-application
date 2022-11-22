module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard-with-typescript"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react", "import"
  ],
  "rules": {
    "react/prop-types": 0,
    "indent": ["warn", 2],
    "linebreak-style": 0,
    "quotes": ["warn", "double"],
    "quote-props": ["warn", "consistent"],
    "max-lines": ["warn", { "max": 200, "skipBlankLines": true }],
    "max-len": ["error", { "code": 500 }]
  }
}
