# React TS LoginTest Frontend
이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)로 생성되었습니다.
react, typescript, react-redux- react-router, typesafe-actions를 사용하여 구현하였습니다.

## File Structure
```
React-Ts-LoginTest-Frontend
│
├── public
├── src
│   ├── api
│   │   └── reqres.ts
│   ├── assets
│   │   ├── css
│   │   │   ├── App.css
│   │   │   └── index.css
│   │   └── img
│   │       └── logo.svg
│   ├── components
│   │   └── PrivateRoute.tsx
│   ├── hooks
│   │   ├── useAuthentication.tsx
│   │   └── useLogin.tsx
│   ├── modules
│   │   ├── login
│   │   │   ├── actions.ts
│   │   │   ├── index.ts
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── views
│   │   ├── App.test.tsx
│   │   ├── App.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   └── Mypage.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── routes.tsx
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── data.json
├── pakage.json
├── README.md
├── tsconfig.json
└── yarn.lock    
```

## GetStart

### JSON-SERVER
간단한 테스트를 위한 json-server
```
$ npx json-server ./data.json --port 4000
```

### Create Project & Update
typescript 3.8.3 이상부터 정상작동하기때문에 업그레이드가 필요합니다.
```
$ npx create-react-app react-ts-logintest-frontend
$ yarn upgrade typescript@^3.8.3
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
