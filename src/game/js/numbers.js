import React from 'react';
import _ from 'lodash';

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  }

  return (
    <div className="card">
      <div className="row justify-content-center">
        {Numbers.list.map(number => (
          <span className={numberClassName(number)} key={number}
            onClick={() => props.selectNumber(number)}>{number}
          </span>
        ))}
      </div>
    </div>
  )
}

Numbers.list = _.range(1, 10);
export default Numbers;
