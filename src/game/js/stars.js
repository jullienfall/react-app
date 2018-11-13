import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = (props) => {
  return (
    <div className="col-5">
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
    </div>
  )
}

export default Stars;