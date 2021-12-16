import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from './Header.jsx';
import ActivityFeed from './ActiveFeed.jsx';
import Archive from './Archive.jsx'

const App = () => {
  
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios.get(' https://aircall-job.herokuapp.com/activities')
    .then (res => {
      setCalls(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[]);

console.log(calls)
  return (
    <div className='container'>
      <Header
      />
      <ActivityFeed calls={calls}/>
      
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;

//(0 , _react.useState) is not a function
