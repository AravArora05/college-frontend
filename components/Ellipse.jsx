import React from 'react';

const Ellipse = ({ style }) => {
  return (
    <div className="absolute z-0" style={{ 
      width: '400px',  
      height: '350px', 
      background: 'rgba(135, 206, 250, 0.8)', 
      borderRadius: '60%', 
      position: 'absolute', 
      filter: 'blur(30px)', 
      ...style 
    }}>
    </div>
  );
}

export default Ellipse;
