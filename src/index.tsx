// __webpack_public_path__ = CFG.__publicPath__;
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Layout from './layout';
import './index.css';

ReactDom.render(
  <Layout />,
  document.getElementById('root')
);