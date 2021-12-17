import axios from 'axios';
import React, {useState, useEffect} from 'react';

import './css/call.css'

const Active = (props) => {
  const {id, createdAt, direction, from, to, via, duration, isArchived, callType, onClick} = props;

  //create mode to toggle details open and closed
  const open = 'open';
  const closed = 'closed';
  const [details, setDetails] = useState(closed);

  //parse time from timestamp
  const parseDate = new Date(createdAt);
  const parseTime = parseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <div className="call">
      {details === closed && (
        <div onClick={() => setDetails(open)}>
          <p>{callType}</p>
          <p>{from}</p>
        </div>
      )}
      {details === open && (
        <div onClick={() => setDetails(closed)}>
          <div className="call_type">
            <p>{callType}</p>
          </div>
          <div className="call_description">
            <p>{from}</p>
            <p>tried to call you on {via}</p>
          </div>
          <div>
            <p>{parseTime}</p>
            <button onClick={onClick(id)}>seen </button>
          </div> 
        </div>
      )}
    </div>
  );
};

export default Active;