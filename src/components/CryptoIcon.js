// import React from 'react';

// const CryptoIcon = ({ symbol }) => {
//   const iconMap = {
//     BTC: (
//       <div className="bg-orange-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
//         <span className="transform rotate-12">₿</span>
//       </div>
//     ),
//     ETH: (
//       <div className="bg-gray-700 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
//         <span>Ξ</span>
//       </div>
//     ),
//     USDT: (
//       <div className="bg-green-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
//         <span>₮</span>
//       </div>
//     ),
//     XRP: (
//       <div className="bg-black text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
//         <span>✕</span>
//       </div>
//     ),
//     BNB: (
//       <div className="bg-yellow-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
//         <span>B</span>
//       </div>
//     ),
//     SOL: (
//       <div className="bg-purple-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
//         <span>S</span>
//       </div>
//     ),
//   };

//   return iconMap[symbol] || <div className="bg-gray-300 rounded-full p-1 w-6 h-6"></div>;
// };

// export default CryptoIcon;

import React from 'react';

// Simple crypto icon component that shows a circular background with the first letter
const CryptoIcon = ({ symbol }) => {
  // Generate a background color based on the symbol for visual distinction
  const getColorClass = (symbol) => {
    const colors = [
      'bg-blue-500', 'bg-orange-500', 'bg-green-500', 'bg-red-500', 
      'bg-purple-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-pink-500'
    ];
    
    const charCodeSum = symbol.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[charCodeSum % colors.length];
  };

  return (
    <div className={`flex items-center justify-center rounded-full ${getColorClass(symbol)}`}
         style={{ width: '24px', height: '24px', minWidth: '24px' }}>
      <span className="text-white text-xs font-medium">
        {symbol.charAt(0)}
      </span>
    </div>
  );
};

export default CryptoIcon;