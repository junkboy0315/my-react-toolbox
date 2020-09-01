import React from 'react';
import HeroSlick from './components/HeroSlick';

function App() {
  return (
    <HeroSlick
      srcs={[
        'https://hikimiaoiya.com/wp/wp-content/themes/aoiya/assets/images/main/mv_01.jpg',
        'https://hikimiaoiya.com/wp/wp-content/themes/aoiya/assets/images/main/mv_02.jpg',
      ]}
    />
  );
}

export default App;
