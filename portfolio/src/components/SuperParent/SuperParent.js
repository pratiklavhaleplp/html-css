import React, { memo } from 'react';
import './styles.css';
import Article from '../Article/Article';
import Header from '../Header/Header';

const SuperParent = memo(({ width, height }) => {
  const styles = {
    width: width.toString() + 'px',
    height: height.toString() + 'px',
    minheight: height.toString() + 'px'
  }
  return (
    <div style={styles}
      className='parent-flex-container'>
      <div className='parent-grid-container' >
        <Header />
        <Article />
      </div>
    </div>
  );
})

export default SuperParent;