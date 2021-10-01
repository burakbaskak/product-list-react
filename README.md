[![Netlify Status](https://api.netlify.com/api/v1/badges/5d2e0ed4-3f49-423f-b129-b62c98a0322a/deploy-status)](https://app.netlify.com/sites/bbaskak-product-list/deploys)

## Getting started

You can view a live demo over at https://bbaskak-product-list.netlify.app/

To get the frontend running locally:

- Clone this repo
- `yarn install` to install all req'd dependencies
- `yarn start` to start the local server (this project uses create-react-app)

## Libraries

- `material-ui`: used for ui library
- `msw`: used for API mocking

## File Structure

- `app`: contains app-wide setup
  - `services`: contains set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data.
  - `store.js`: store setup file
- `components`: contains truly generic and reusable utilities and components
- `features`: has folders that contain all functionality related to a specific feature.
  - `basket`: contains files that manage all processes such as adding, removing, deleting for the basket
  - `product`: contains files that manage all processes such as sorting, filtering, paging for products
- `hooks`: contains custom hooks for redux selectors
- `mocks`: contains API mocking library that uses Service Worker API to intercept actual requests

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
