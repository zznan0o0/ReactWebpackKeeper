import React from 'react';

import Bundle, {createComponent} from './Bundle';


import { Route } from 'react-keeper';

import Home from 'bundle-loader?lazy&name=Home!Pages/Home/Home.jsx';
import Page404 from 'bundle-loader?lazy&name=Page404!Pages/Page404/Page404.jsx';

const Routes = (
  <div>
    <Route index path="/" component={createComponent(Home)} />
    <Route path="/404" component={createComponent(Page404)} />
    <Route miss component={createComponent(Page404)} />
  </div>
);

export default Routes;