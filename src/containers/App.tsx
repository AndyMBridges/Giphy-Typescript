
import * as React from 'react';
import '../App.css';

import ImageList from '../components/ImageList';
import Search from '../components/Search';

const App: React.SFC<{}> = () => {
  return (
    <>
      <h1>Giphy API with React, Redux &amp; Typescript</h1>
      <Search />
      <ImageList />
    </>
  );
};

export default App;