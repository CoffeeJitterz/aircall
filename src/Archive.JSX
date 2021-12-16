import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Archive = (props) => {
  const {id, createdAt, direction, from, to, via, duration, isArchived, callType} = props;
  const open = 'open';
  const closed = 'closed';
  const [details, setDetails] = useState(closed);
  const [seen, setSeen] = useState(isArchived)
console.log('key', createdAt)

  const onArchiveCall = (e) => {
    e.preventDefault();
    const postData = {
      is_archived: false
    };
    axios.post(
      `https://aircall-job.herokuapp.com/activities/${id}`, postData,
    ).then(response => {
      setSeen(true)
      console.log(response);
    })
  }

  const parseDate = new Date(createdAt);
  const parseTime = parseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  console.log(parseTime)
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
        <button onClick={onArchiveCall}>seen </button>
      </div> 
      </div>
      )}
    </div>
  );
};

export default Archive;