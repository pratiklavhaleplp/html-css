import React from 'react';
import './styles.css'
import NavBar from '../NavBar/NavBar';
import WorkExp from '../WorkExp/WorlExp';
import Footer from '../Footer/Footer'

const SuperParent = ({ width, height }) => {
  const styles = {
    width: width.toString() + 'px',
    height: height.toString() + 'px'
  }
  return (
    <div style={styles} className='parent-flex-container'>
      <div className='parent-grid-container'>
        <NavBar />
        <WorkExp />
        <Footer />

      </div>
    </div>
  );
}

export default SuperParent;