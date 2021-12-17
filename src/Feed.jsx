import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Archive from './Archive.jsx';
import Active from './Active.jsx';

const Feed = (props) => {
  const {calls,} = props;
  
const [archive, setArchive] = useState(null);
  //create mode to toggle between active list and archive list
  const actives = 'active';
  const archives = 'archive';
  let [mode, setMode] = useState(actives);

  const onArchiveCall = (id) => {  
    let postData = {
      is_archived: true
    };
    axios.post(
      `https://aircall-job.herokuapp.com/activities/${id}`, postData,
      ).then(response => {
          console.log("response", response.data)
      })
    }; 

    const onActiveCall = (id) => {    
      let postData = {
        is_archived: false
      };
      axios.post(
        `https://aircall-job.herokuapp.com/activities/${id}`, postData,
        ).then(response => {
          console.log(response.data)
          setArchive(false);
          console.log("post", archive)
        })
      }; 
  
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
    isArchived={call.is_archived}
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
        isArchived={call.is_archivedis_archived}
        callType={call.call_type}
        onClick={onActiveCall}
               />
    });
  return (
    <div className="feed">
      <button style={mode === actives ? {backgroundColor:'rgb(255, 250, 183)'} : {backgroundColor:'rgb(98, 98, 255)'}} onClick={() => setMode(actives)}>CALLS</button>
      <button style={mode === archives ? {backgroundColor:'rgb(255, 250, 183)'} : {backgroundColor:'rgb(98, 98, 255)'}}onClick={() => setMode(archives)}>ARCHIVE</button>

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