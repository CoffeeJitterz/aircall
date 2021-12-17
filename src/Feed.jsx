import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Archive from './Archive.jsx';

import Active from './Active.jsx';

const Feed = (props) => {
  const {calls} = props;

  //create mode to toggle between active list and archive list
  const actives = 'active';
  const archives = 'archive';
  let [mode, setMode] = useState(actives);
  
  const [archive, setArchive] = useState({is_archived: true});
  
  const onArchiveCall = (id, activate) => {    
    let postData = {
      is_archived: true
    };

    if(activate) {
      postData = {
        is_archived: false
      }
    }
    axios.post(
      `https://aircall-job.herokuapp.com/activities/${id}`, postData,
      ).then(response => {
        console.log(response.data)
        setArchive(response.data);
        console.log("post", archive)
      })
    } 
  
  //filter calls for active list
  const filteredActiveList = calls.filter(call => !call.is_archived)
  //loop through filtered active list and pass props to active component
  const activeList = filteredActiveList.map(call => {

    return <Active 
    key={call.id}
    id={call.id}
    createdAt={call.created_at}
    direction={call.outbound}
    from={call.from}
    to={call.to}
    via={call.via}
    duration={call.duration}
    isArchived={archive}
    callType={call.call_type}
    onClick={onArchiveCall}
    />   
  });

  //filter calls for archive list
  const filteredArchiveList = calls.filter(call => call.is_archived)
  //loop through filtered archive list and pass props to archive component
  console.log("filtered archive list", filteredArchiveList)
    const archiveList = filteredArchiveList.map(call => {
        return <Archive 
        key={call.id}
        id={call.id}
        createdAt={call.created_at}
        direction={call.outbound}
        from={call.from}
        to={call.to}
        via={call.via}
        duration={call.duration}
        isArchived={archive}
        callType={call.call_type}
        onClick={onArchiveCall}
               />
    });
  return (
    <div className="activity_feed">
      <button onClick={() => setMode(actives)}>CALLS</button>
      <button onClick={() => setMode(archives)}>ARCHIVE</button>

      {mode === actives && (    
        <div>
          {activeList}
        </div>
      )}
       {mode === archives && (
        <div>
         {archiveList}
        </div>
      )}

    </div>
  );
};

export default Feed;