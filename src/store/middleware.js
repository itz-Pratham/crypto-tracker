import { updatePrices } from './cryptoSlice';

// Mock WebSocket middleware for Redux
export const websocketMiddleware = store => {
  let interval = null;

  return next => action => {
    if (action.type === 'crypto/websocketConnect') {
      // Start the interval to simulate WebSocket updates
      if (!interval) {
        interval = setInterval(() => {
          store.dispatch(updatePrices());
        }, 2000);
      }
    }

    if (action.type === 'crypto/websocketDisconnect') {
      // Clean up the interval
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }

    return next(action);
  };
};

// Action creators for WebSocket connection management
export const websocketConnect = () => ({ type: 'crypto/websocketConnect' });
export const websocketDisconnect = () => ({ type: 'crypto/websocketDisconnect' });