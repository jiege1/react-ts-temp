// __webpack_public_path__ = CFG.__publicPath__;
import * as React from 'react';
import * as ReactDom from 'react-dom';
import './index.css';
import Layout from './layout';

ReactDom.render(
  <Layout />,
  document.getElementById('root') as HTMLElement,
);
