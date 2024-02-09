import createStore from "react-auth-kit/createStore";

export const authStore = createStore<object>({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});