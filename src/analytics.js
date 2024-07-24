// src/analytics.js
import ReactGA from 'react-ga4';

// Initialize GA4 with your Measurement ID
export const initGA = () => {
  ReactGA.initialize('G-E3J53H4LDX'); // Replace with your Measurement ID
};

// Log a page view
export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

// Log an event
export const logEvent = (action, params) => {
  ReactGA.event(action, params);
};

// Set the User ID
export const setUserId = (userId) => {
  console.log(`Setting user ID: ${userId}`);
  ReactGA.set({ userId });
};

export const setUserProperties = (properties) => {
  console.log('Setting user properties:', properties);
  ReactGA.set(properties);
};
