import React, { useState, useContext } from 'react';
import User_context from '../context/usercontext';

function Profile() {
  const { user } = useContext(User_context);

  if (!user) {
    return (
      <div
        style={{
          display: 'inline-block',
          background: 'white',
          fontWeight: 'bold',
          margin: '10px',
          width: '30%',
          color: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        please login
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'inline-block',
        background: 'white',
        fontWeight: 'bold',
        margin: '10px',
        width: '30%',
        color: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Welcome {user.username}
    </div>
  );
}

export default Profile;