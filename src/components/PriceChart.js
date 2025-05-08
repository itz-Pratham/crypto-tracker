// import React from 'react';

// const PriceChart = ({ trend }) => {
//   // Simple SVG chart based on trend
//   const getPoints = () => {
//     if (trend === 'up') {
//       return "M0,50 L20,45 L40,48 L60,40 L80,35 L100,20 L120,10 L140,5";
//     } else if (trend === 'down') {
//       return "M0,5 L20,10 L40,15 L60,25 L80,30 L100,40 L120,45 L140,50";
//     } else if (trend === 'volatile') {
//       return "M0,30 L20,10 L40,50 L60,20 L80,40 L100,5 L120,45 L140,25";
//     } else {
//       return "M0,25 L20,24 L40,26 L60,25 L80,26 L100,24 L120,25 L140,26";
//     }
//   };

//   const getColor = () => {
//     if (trend === 'up') return "#10B981"; // green
//     if (trend === 'down') return "#EF4444"; // red
//     if (trend === 'volatile') return "#3B82F6"; // blue
//     return "#9CA3AF"; // gray
//   };

//   return (
//     <svg width="140" height="50" className="ml-auto">
//       <path
//         d={getPoints()}
//         stroke={getColor()}
//         strokeWidth="2"
//         fill="none"
//       />
//     </svg>
//   );
// };

// export default PriceChart;

import React from 'react';

const PriceChart = ({ trend }) => {
  // Simple SVG chart that shows a trend line
  let path;
  let color;
  
  switch (trend) {
    case 'up':
      path = 'M0,20 L10,15 L20,18 L30,10 L40,5 L50,2';
      color = '#10B981'; // green
      break;
    case 'down':
      path = 'M0,2 L10,8 L20,5 L30,12 L40,15 L50,20';
      color = '#EF4444'; // red
      break;
    case 'volatile':
      path = 'M0,10 L10,5 L20,15 L30,2 L40,18 L50,8';
      color = '#3B82F6'; // blue
      break;
    case 'stable':
    default:
      path = 'M0,10 L10,10 L20,10.5 L30,9.5 L40,10 L50,10';
      color = '#9CA3AF'; // gray
      break;
  }

  return (
    <div className="flex justify-end">
      <svg width="80" height="24" viewBox="0 0 50 24">
        <path d={path} fill="none" stroke={color} strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default PriceChart;