// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: false,
//   clientID: '4723f11e-e7a6-48c8-b985-add752411a2d',
//   graphScopes: ["openid", "profile", "User.Read", "Mail.Send", "Contacts.Read", "People.Read"],
//   signUpSignInPolicy: '',
//   tenant: 'microsoft.onmicrosoft.com'
// };

export const environment = {
    production: false,
    clientID: '986a27b6-e88e-4471-a0ba-dcd5e33477c5',
    graphScopes: ["openid", "profile", "Mail.Send", "User.Read", "User.ReadWrite", "User.ReadBasic.All", "User.Read.All", "User.ReadWrite.All", "Directory.Read.All", "Directory.ReadWrite.All", "Directory.AccessAsUser.All"],
    signUpSignInPolicy: '',
    tenant: 'M365x342201.onmicrosoft.com'
  };