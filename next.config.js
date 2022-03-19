const path = require('path');
const withAntdLess = require('next-plugin-antd-less');

// module.exports = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//     prependData: '@import "globals.scss";',
//   },
// };

module.exports = withAntdLess({
  lessVarsFilePath: './styles/AntdTheming.less',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "globals.scss";',
  },
});

//"lint": "eslint ./components/** ./pages/** -c .eslintrc --ext ts,tsx,js,jsx --color",
//"format": "prettier --write 'components/**/*.{ts,tsx,scss,css,json}' 'pages/**/*.{ts,tsx,scss,css,json}'",
//"isready": "yarn format && yarn lint && yarn build"
