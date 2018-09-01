// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  clientID: '4723f11e-e7a6-48c8-b985-add752411a2d',
  graphScopes: ["openid", "profile", "User.Read", "Mail.Send", "Contacts.Read", "People.Read"],
  signUpSignInPolicy: '',
  tenant: 'microsoft.onmicrosoft.com'
};
