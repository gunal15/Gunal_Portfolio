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
  ReactGA.set({ user_id: userId });
};

// Set additional user properties (optional)
export const setUserProperties = (properties) => {
  ReactGA.set(properties);
};
