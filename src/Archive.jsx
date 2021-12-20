import React, {useState} from 'react';

const Archive = (props) => {
  const {id, createdAt, direction, from, to, via, duration, isArchived, callType, onClick} = props;

  //create mode to toggle details open and closed
  const open = 'open';
  const closed = 'closed';
  const [details, setDetails] = useState(closed);

  //parse time from timestamp
  const parseDate = new Date(createdAt);
  const parseTime = parseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <div className="call_container">
    {details === closed && (
      <div className="call_closed">
        <h5>{callType}</h5>
        <h5>{from}</h5>
        <button className="details" onClick={() => setDetails(open)}>details</button>
      </div>
    )}
    {details === open && (
      <div className="details_open">
        {callType === 'missed' && (
        <div className="call_description">
          <p>{from} tried to call you on {via} at {parseTime}</p>
          <p></p>
        </div>
        )}
          {callType === 'voicemail' && (
        <div className="call_description">
          <p>{from} tried to call you on {via} at {parseTime}</p>
          <p></p>
        </div>
        )}
        {callType === 'answered' && (
        <div className="call_description">
          <p>{from} called you from {via} at {parseTime}</p>
          <p>The call lasted {duration} minutes</p>
        </div>
        )}
        <div className="buttons">
          <button onClick={() => onClick(id)}>mark as not seen </button>
          <button className="details" onClick={() => setDetails(closed)}>close</button>
        </div> 
      </div>
    )}
  </div>
  );
};

export default Archive;
