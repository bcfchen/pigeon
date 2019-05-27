# JNTO DAM UI
Application features & callouts:
- UI for SAKAAR Glossary Management Application

### To install
Clone this repo with 
```
git clone git clone git clone https://fc-beck@bitbucket.org/funkycorp/sakaar-ui.git
```
cd into the __sakaar-ui/client__ folder and install npm packages by:
```
npm install
```

### To run
Check that you're in the __sakaar-ui/client__ folder and run the project by either of the following, depending on the services (in dev vs staging) you'd like to use:

```
npm run start-local-dev
```
```
npm run start-local-staging
```

The page should automatically open up in your browser at __localhost:3000__

Click "Prev" or "Next" to navigate to previous/next pages

### Main libraries & services used
- __React/Redux__


### Polyfills support reference
https://facebook.github.io/create-react-app/docs/supported-browsers-features
https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md 