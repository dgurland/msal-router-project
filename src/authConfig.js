export const msalConfig = {
  auth: {
    clientId: "136d05f6-99f5-4a49-a8ef-826f2835d673",
    authority:
      "https://login.microsoftonline.com/1d2b0050-27d1-4c3d-860c-92f35489cd9a",
    redirectUri: "https://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.co/v1.0/me",
};
