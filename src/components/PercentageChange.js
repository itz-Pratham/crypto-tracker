// import React from 'react';

// const PercentageChange = ({ value }) => {
//   const isPositive = value > 0;
//   const isZero = value === 0;
  
//   return (
//     <span className={`flex items-center ${isPositive ? 'text-green-500' : isZero ? 'text-gray-500' : 'text-red-500'}`}>
//       {isPositive ? '▲' : isZero ? '→' : '▼'} {Math.abs(value).toFixed(2)}%
//     </span>
//   );
// };

// export default PercentageChange;

import React from 'react';

const PercentageChange = ({ value }) => {
  // Determine text color based on value
  const getColorClass = () => {
    if (value > 0) return 'text-green-500';
    if (value < 0) return 'text-red-500';
    return 'text-gray-500';
  };

  // Determine arrow direction based on value
  const getArrow = () => {
    if (value > 0) return '▲';
    if (value < 0) return '▼';
    return '•';
  };

  // Format the percentage value
  const formattedValue = Math.abs(value).toFixed(2);

  return (
    <span className={`font-medium ${getColorClass()}`} style={{ whiteSpace: 'nowrap' }}>
      {getArrow()} {formattedValue}%
    </span>
  );
};

export default PercentageChange;