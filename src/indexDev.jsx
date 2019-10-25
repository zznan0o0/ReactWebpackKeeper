import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// import Routes from 'Routes/Routes.jsx';
// import Store from 'Redux/Store.js'

import App from 'Components/App/App.jsx';

// import Hello from './Components/Hello/Hello.jsx';

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
  module.hot.accept('Components/App/App.jsx', () => {
    let nextApp = require('Components/App/App.jsx').default;
    renderWithHotReload(nextApp);
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <RootElement/>
    </AppContainer>
    ,
    document.getElementById('app')
  )
}