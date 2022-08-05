import React from 'react';
import Avatar from 'react-avatar';

function Client(props) {
  return (
    <div className='client'>
      <Avatar name={props.username} size={50} round='50%' />
      <div className='username'>{props.username}</div>
    </div>
  );
}

export default Client;
