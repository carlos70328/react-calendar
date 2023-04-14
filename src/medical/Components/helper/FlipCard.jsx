import { useState } from 'react';

function FlipCard ({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={` col-lg-4  col-md-6 d-flex align-items-stretch mt-4  flip-card ${ isFlipped ? 'flipped ' : '' }`}>

      <div className="flip-card-inner">
        <div className='Z-1' onClick={handleClick}>
          <i className="bi bi-arrows-move  arrow" ></i>
        </div>

        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
