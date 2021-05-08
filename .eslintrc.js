module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:react/recommended"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    semi: ["error", "always"],
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
  },
};
