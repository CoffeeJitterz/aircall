import React from 'react';
import Archive from './Archive.jsx';

import Call from './Call.jsx';

const ActivityFeed = (props) => {
  const {calls} = props;

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
    })
  })
  return (
    <div className="activity_feed">
      {callList}
    </div>
  );
};

export default ActivityFeed;