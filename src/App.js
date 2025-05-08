// import React from 'react';
// import { CryptoProvider } from './context/CryptoContext';
// import CryptoTable from './components/CryptoTable';

// const App = () => {
//   return (
//     <CryptoProvider>
//       <div className="min-h-screen bg-gray-100 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">Real-Time Crypto Price Tracker</h1>
//             <p className="mt-2 text-gray-600">Live cryptocurrency prices updated every 2 seconds</p>
//           </div>
//           <CryptoTable />
//           <div className="mt-4 text-sm text-gray-500">
//             <p>Note: This is a simulated real-time tracker using React Context API and useReducer.</p>
//           </div>
//         </div>
//       </div>
//     </CryptoProvider>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { websocketConnect, websocketDisconnect } from './store/middleware';
import CryptoTable from './components/CryptoTable';

const CryptoDataManager = ({ children }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Connect to the "WebSocket" when component mounts
    dispatch(websocketConnect());
    
    // Disconnect when component unmounts
    return () => {
      dispatch(websocketDisconnect());
    };
  }, [dispatch]);
  
  return children;
};

const App = () => {
  return (
    <Provider store={store}>
      <CryptoDataManager>
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Real-Time Crypto Price Tracker</h1>
              <p className="mt-2 text-gray-600">Live cryptocurrency prices updated every 2 seconds</p>
            </div>
            <CryptoTable />
            <div className="mt-4 text-sm text-gray-500">
              <p>Note: This is a simulated real-time tracker using Redux Toolkit and react-redux.</p>
            </div>
          </div>
        </div>
      </CryptoDataManager>
    </Provider>
  );
};

export default App;