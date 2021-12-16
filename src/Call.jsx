import React, {useState} from 'react';

import './css/call.css'

const Call = (props) => {
  const {createdAt, direction, from, to, via, duration, isArchived, callType} = props;
  const open = 'open';
  const cloes = 'closed';
  const [details, setDetails] = useState(closed);

  const parseDate = new Date(createdAt);
  const parseTime = parseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  console.log(parseTime)
  return (
    <div className="call">
      {details === closed && (
        <div>
          <p>{from}</p>
        </div>
      )}
      {details === open && (
        <div>
      <div className="call_type">
      <p>{callType}</p>
      </div>
      <div className="call_description">
      <p>{from}</p>
      <p>tried to call you on {via}</p>
      </div>
      <div>
        <p>{parseTime}</p>
        <button>seen </button>
      </div> 
      </div>
      )}
    </div>
  );
};

export default Call;