import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from './Header.jsx';
import Feed from './Feed.jsx';

const App = () => {
  
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios.get(' https://aircall-job.herokuapp.com/activities')
    .then (res => {
      setCalls(res.data)
      console.log("calls:", calls)
    })
    .catch(err => {
      console.log(err)
    })
  },[]);

  return (
    <div className='container'>
      <Header
      />
      <Feed calls={calls} setCalls={setCalls} />
      
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;

//(0 , _react.useState) is not a function
