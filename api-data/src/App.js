import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  useEffect(() => {

  }, []);

  const [url, setUrl] = useState('');

  const getImage = () => {
    fetch("http://localhost:4000/image", {
      method: 'GET'
    }).then(res => res.blob()).
      then(response => {
        const url = URL.createObjectURL(response);
        setUrl(url);
      });
  };

  const getData = () => {
    fetch("http://localhost:4000/json", {
      method: 'GET'
    }).then(res => res.json()).
      then(response => console.log('data is : ', response));
  };

  const getBackGroundVideo = () => {
    fetch("http://localhost:4000/video", {
      method: 'GET'
    }).then(res => res.json()).
      then(response => console.log('data is : ', response));
  };
  return (
    <>
      {/* <div className='parent-container'>
        <div className='one-grid-row two-columns'>
          <div className='sub-item aling-in-middle'>
            <button onClick={() => getData()} >Click to Get</button>
          </div>
          <div className='sub-item'>
            data
          </div>
        </div>
        <div className='one-grid-row two-columns'>
          <div className='sub-item aling-in-middle'>
            <button onClick={() => getImage()} >Click to Get Image</button>
          </div>
          <div className='sub-item'>
            <img height='240px' src={url} />
          </div>
        </div>
        <div className='one-grid-row two-columns'>
        </div>
      </div> */}
      <div className='center-container'>
        {getData()}
      </div>
    </>
  );
}

export default App;


// console.log(0.1 * 2 == 0.2);
// console.log(0.1 * 3 == 0.3);
// console.log(5 < 4 < 3);
// console.log(5 > 4 > 3);
// console.log(018 - 015);
// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());