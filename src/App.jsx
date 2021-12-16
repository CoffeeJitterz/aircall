import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from './Header.jsx';
import ActivityFeed from './ActiveFeed.jsx';
import Archive from './Archive.jsx'

const App = () => {
  const activeFeed = 'activeFeed';
  const archive = 'archive';
  let [mode, setMode] = useState(activeFeed);
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
      <button onClick={() => setMode(activeFeed)}>CALLS</button>
      <button onClick={() => setMode(archive)}>ARCHIVE</button>
      <div className="activity_container">
      {mode === activeFeed && (
        <ActivityFeed 
        calls={calls}
        />
      )}
       {mode === archive && (
        <Archive />
      )}
    </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;

//(0 , _react.useState) is not a function
