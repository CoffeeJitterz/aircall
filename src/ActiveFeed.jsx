import React, {useState, useEffect} from 'react';
import Archive from './Archive.jsx';

import Call from './Call.jsx';

const ActivityFeed = (props) => {
  const {calls} = props;
  const activeFeed = 'activeFeed';
  const archive = 'archive';
  let [mode, setMode] = useState(activeFeed);

  const callList = calls.map(call => {
    if(!call.is_archived){
      return <Call 
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
             />
    }
  });
    const archiveList = calls.map(call => {
      if(call.is_archived){
        return <Archive 
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
               />
      }
    });
  return (
    <div className="activity_feed">
      <button onClick={() => setMode(activeFeed)}>CALLS</button>
      <button onClick={() => setMode(archive)}>ARCHIVE</button>
      <div className="activity_container">
      {mode === activeFeed && (    
        <div>
          {callList}
        </div>
      )}
       {mode === archive && (
        <div>
         {archiveList}
        </div>
      )}
    </div> 
    </div>
  );
};

export default ActivityFeed;