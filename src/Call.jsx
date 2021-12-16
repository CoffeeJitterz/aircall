import React from 'react';

import './css/call.css'

const Call = (props) => {
  const {createdAt, direction, from, to, via, duration, isArchived, callType} = props;
  return (
    <div className="call">
      <div className="call_type">
      <p>{callType}</p>
      </div>
      <div className="call_description">
      <p>{from}</p>
      <p>tried to call you on {via}</p>
      </div>
      <div>
        <button>seen </button>
      </div>
    </div>
  );
};

export default Call;