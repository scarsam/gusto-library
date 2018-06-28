import React from 'react';

export const User = ({user, pending}) => {
  if (pending === false && user !== null) {
    return (
      <p>{user.name}</p>
    )
  } else {
    return <p>Loading...</p>
  }
};