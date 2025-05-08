// // import React, { useContext } from 'react';
// // import { CryptoContext } from '../context/CryptoContext';
// // import CryptoIcon from './CryptoIcon';
// // import PriceChart from './PriceChart';
// // import PercentageChange from './PercentageChange';

// // // Format large numbers for display
// // const formatNumber = (num) => {
// //   if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
// //   if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
// //   if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
// //   if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
// //   return num.toString();
// // };

// // // Format price for display
// // const formatPrice = (price) => {
// //   return new Intl.NumberFormat('en-US', {
// //     style: 'currency',
// //     currency: 'USD',
// //     minimumFractionDigits: price < 10 ? 2 : 2,
// //     maximumFractionDigits: price < 10 ? 2 : 2,
// //   }).format(price);
// // };

// // // Info icon component
// // const InfoIcon = () => (
// //   <svg className="w-4 h-4 ml-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
// //     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
// //   </svg>
// // );

// // const CryptoTable = () => {
// //   const { state } = useContext(CryptoContext);
// //   const { assets } = state;

// //   return (
// //     <div className="overflow-x-auto w-full shadow-lg rounded-lg bg-white">
// //       <table className="min-w-full">
// //         <thead>
// //           <tr className="bg-gray-50 border-b border-gray-200">
// //             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
// //             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
// //             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
// //             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">1h %</th>
// //             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">24h %</th>
// //             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">7d %</th>
// //             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-end">
// //               Market Cap <InfoIcon />
// //             </th>
// //             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-end">
// //               Volume(24h) <InfoIcon />
// //             </th>
// //             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-end">
// //               Circulating Supply <InfoIcon />
// //             </th>
// //             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Last 7 Days</th>
// //           </tr>
// //         </thead>
// //         <tbody className="bg-white divide-y divide-gray-200">
// //           {assets.map((asset) => (
// //             <tr key={asset.id} className="hover:bg-gray-50">
// //               <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
// //                 <div className="flex items-center">
// //                   <span className="text-gray-400 mr-2">★</span>
// //                   {asset.id}
// //                 </div>
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap">
// //                 <div className="flex items-center">
// //                   <CryptoIcon symbol={asset.symbol} />
// //                   <div className="ml-3">
// //                     <div className="text-sm font-medium text-gray-900">{asset.name}</div>
// //                     <div className="text-sm text-gray-500">{asset.symbol}</div>
// //                   </div>
// //                 </div>
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-900 font-medium">
// //                 {formatPrice(asset.price)}
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
// //                 <PercentageChange value={asset.change1h} />
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
// //                 <PercentageChange value={asset.change24h} />
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
// //                 <PercentageChange value={asset.change7d} />
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-900">
// //                 ${formatNumber(asset.marketCap)}
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap text-right">
// //                 <div className="text-sm text-gray-900">${formatNumber(asset.volume24h)}</div>
// //                 <div className="text-xs text-gray-500">{(asset.volume24h / asset.price).toFixed(2)} {asset.symbol}</div>
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap text-right">
// //                 <div className="text-sm text-gray-900">{asset.circulatingSupply} {asset.supplyUnit}</div>
// //               </td>
// //               <td className="px-4 py-4 whitespace-nowrap">
// //                 <PriceChart trend={asset.trend} />
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default CryptoTable;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectAllAssets } from '../store/cryptoSlice';
// import CryptoIcon from './CryptoIcon';
// import PriceChart from './PriceChart';
// import PercentageChange from './PercentageChange';

// // Format large numbers for display
// const formatNumber = (num) => {
//   if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
//   if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
//   if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
//   if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
//   return num.toString();
// };

// // Format price for display
// const formatPrice = (price) => {
//   return new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: price < 10 ? 2 : 2,
//     maximumFractionDigits: price < 10 ? 2 : 2,
//   }).format(price);
// };

// // Info icon component
// const InfoIcon = () => (
//   <svg className="w-4 h-4 ml-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
//     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
//   </svg>
// );

// const CryptoTable = () => {
//   // Use useSelector hook to get assets from Redux store
//   const assets = useSelector(selectAllAssets);

//   return (
//     <div className="overflow-x-auto w-full shadow-lg rounded-lg bg-white">
//       <table className="min-w-full">
//         <thead>
//           <tr className="bg-gray-50 border-b border-gray-200">
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">1h %</th>
//             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">24h %</th>
//             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">7d %</th>
//             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-end">
//               Market Cap <InfoIcon />
//             </th>
//             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-end">
//               Volume(24h) <InfoIcon />
//             </th>
//             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-end">
//               Circulating Supply <InfoIcon />
//             </th>
//             <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Last 7 Days</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {assets.map((asset) => (
//             <tr key={asset.id} className="hover:bg-gray-50">
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
//                 <div className="flex items-center">
//                   <span className="text-gray-400 mr-2">★</span>
//                   {asset.id}
//                 </div>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <CryptoIcon symbol={asset.symbol} />
//                   <div className="ml-3">
//                     <div className="text-sm font-medium text-gray-900">{asset.name}</div>
//                     <div className="text-sm text-gray-500">{asset.symbol}</div>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-900 font-medium">
//                 {formatPrice(asset.price)}
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
//                 <PercentageChange value={asset.change1h} />
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
//                 <PercentageChange value={asset.change24h} />
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
//                 <PercentageChange value={asset.change7d} />
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-900">
//                 ${formatNumber(asset.marketCap)}
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-right">
//                 <div className="text-sm text-gray-900">${formatNumber(asset.volume24h)}</div>
//                 <div className="text-xs text-gray-500">{(asset.volume24h / asset.price).toFixed(2)} {asset.symbol}</div>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-right">
//                 <div className="text-sm text-gray-900">{asset.circulatingSupply} {asset.supplyUnit}</div>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap">
//                 <PriceChart trend={asset.trend} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CryptoTable;

import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../store/cryptoSlice';
import CryptoIcon from './CryptoIcon';
import PriceChart from './PriceChart';
import PercentageChange from './PercentageChange';

// Format large numbers for display
const formatNumber = (num) => {
  if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return num.toString();
};

// Format price for display
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: price < 10 ? 2 : 2,
    maximumFractionDigits: price < 10 ? 2 : 2,
  }).format(price);
};

// Info icon component
const InfoIcon = () => (
  <svg style={{ width: '16px', height: '16px', marginLeft: '4px' }} className="text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
  </svg>
);

const CryptoTable = () => {
  // Use useSelector hook to get assets from Redux store
  const assets = useSelector(selectAllAssets);

  return (
    <div className="overflow-x-auto w-full shadow-lg rounded-lg bg-white">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">1h %</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">24h %</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">7d %</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center justify-end">
                Market Cap <InfoIcon />
              </div>
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center justify-end">
                Volume(24h) <InfoIcon />
              </div>
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center justify-end">
                Circulating Supply <InfoIcon />
              </div>
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assets.map((asset) => (
            <tr key={asset.id} className="hover:bg-gray-50">
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">★</span>
                  {asset.id}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <CryptoIcon symbol={asset.symbol} />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    <div className="text-sm text-gray-500">{asset.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-900 font-medium">
                {formatPrice(asset.price)}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                <PercentageChange value={asset.change1h} />
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                <PercentageChange value={asset.change24h} />
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                <PercentageChange value={asset.change7d} />
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                ${formatNumber(asset.marketCap)}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-right">
                <div className="text-sm text-gray-900">${formatNumber(asset.volume24h)}</div>
                <div className="text-xs text-gray-500">{(asset.volume24h / asset.price).toFixed(2)} {asset.symbol}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-right">
                <div className="text-sm text-gray-900">{asset.circulatingSupply} {asset.supplyUnit}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <PriceChart trend={asset.trend} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;