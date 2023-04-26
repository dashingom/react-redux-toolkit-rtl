export default {
  oidc: {
    issuer: 'https://dev-60703092.okta.com/oauth2/default',
    clientId: '0oa99ius34mF7RByG5d7',
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: false,
    useInteractionCode: false,
  },
};
