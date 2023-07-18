const path = require('path');
//const withAntdLess = require('next-plugin-antd-less');

// module.exports = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//     prependData: '@import "globals.scss";',
//   },
// };

// module.exports = {
//   lessVarsFilePath: './styles/AntdTheming.less',
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//     prependData: '@import "globals.scss";',
//   },
// };

//"lint": "eslint ./components/** ./pages/** -c .eslintrc --ext ts,tsx,js,jsx --color",
//"format": "prettier --write 'components/**/*.{ts,tsx,scss,css,json}' 'pages/**/*.{ts,tsx,scss,css,json}'",
//"isready": "yarn format && yarn lint && yarn build"
const withTM = require('next-transpile-modules')([
  '@adobe/react-spectrum',
  '@react-spectrum/actiongroup',
  '@react-spectrum/breadcrumbs',
  '@react-spectrum/badge',
  '@react-spectrum/button',
  '@react-spectrum/buttongroup',
  '@react-spectrum/calendar',
  '@react-spectrum/checkbox',
  '@react-spectrum/combobox',
  '@react-spectrum/contextualhelp',
  '@react-spectrum/datepicker',
  '@react-spectrum/dialog',
  '@react-spectrum/divider',
  '@react-spectrum/form',
  '@react-spectrum/icon',
  '@react-spectrum/illustratedmessage',
  '@react-spectrum/image',
  '@react-spectrum/label',
  '@react-spectrum/labeledvalue',
  '@react-spectrum/layout',
  '@react-spectrum/link',
  '@react-spectrum/list',
  '@react-spectrum/listbox',
  '@react-spectrum/menu',
  '@react-spectrum/meter',
  '@react-spectrum/numberfield',
  '@react-spectrum/overlays',
  '@react-spectrum/picker',
  '@react-spectrum/progress',
  '@react-spectrum/provider',
  '@react-spectrum/radio',
  '@react-spectrum/slider',
  '@react-spectrum/searchfield',
  '@react-spectrum/statuslight',
  '@react-spectrum/switch',
  '@react-spectrum/table',
  '@react-spectrum/tabs',
  '@react-spectrum/text',
  '@react-spectrum/textfield',
  '@react-spectrum/theme-dark',
  '@react-spectrum/theme-default',
  '@react-spectrum/theme-light',
  '@react-spectrum/tooltip',
  '@react-spectrum/view',
  '@react-spectrum/well',
  //'@spectrum-icons/illustrations',
  '@spectrum-icons/ui',
  '@spectrum-icons/workflow',
]);

module.exports = {
  // Your next configuration
  reactStrictMode: true,
  basePath: '',
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: process.env.BACKEND_URL,
    },
  ],
};
