import React from 'react';
import Feed from './Componentes/Feed';
import Widget from './Componentes/Widget';
import SideMenu from './Componentes/SideMenu';
function App() {
  return (
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col">
          <SideMenu/>
        </div>
        <div className="col-md-5">
          <Feed />
        </div>
        <div className="col">
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default App;
