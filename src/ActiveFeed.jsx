import React from 'react';

import Call from './Call.jsx';

const ActivityFeed = (props) => {
  const {calls} = props;

  const callList = calls.map(call => {
      return <Call 
              key={call.id}
              createdAt={call.created_at}
              direction={call.outbound}
              from={call.from}
              to={call.to}
              via={call.via}
              duration={call.duration}
              isArchived={call.is_archived}
              callType={call.call_type}
             />
  })
  return (
    <div className="activity_feed">
      {callList}
    </div>
  );
};

export default ActivityFeed;