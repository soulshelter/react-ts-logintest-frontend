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

## GetStart

### Create Project & Update
CRA를 사용하여 `react-ts-logintest-frontend`를 생성합니다.
```
$ npx create-react-app react-ts-logintest-frontend --typescript
```
`typescript@3.7` 버전과  `eslint@2.24` 버전과의 호환 문제가 있어 `typescript@3.8.3`로 업그레이드가 필요합니다.
추후 CRA에서 `typescript@3.8`이상을 자동 생성하게 되면 업데이트를 생락하면 됩니다.
```
$ yarn upgrade typescript@^3.8.3
```

### Add Library
필요한 라이브러리인 `react-router`, `redux`, `axios`, `typesafe-actions`를 추가합니다.
``` 
$ yarn add react-router-dom @types/react-router-dom react-redux @types/react-redux axios @types/axios typesafe-actions 
```

### IE 11 설정
IE 11를 사용하기위해 `polyfill`을 추가합니다.
```
$ yarn add react-app-polyfill
```
package.json에 `ie 11`를 추가합니다.
```
"browserslist": {
  "production": [
    ">0.2%",s
    "not dead",
    "not op_mini all",
    "ie 11"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version",
    "ie 11"
  ]
}
```
index.tsx 맨 위에 2개의 import 추가합니다.
```
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
```
IE 11 세팅이 완료되었습니다.   
위 설정 후에도 IE에서 페이지가 열리지 않으면 node_modules/.cache를 삭제 후 다시 `yarn start` 하면 됩니다.

### JSON-SERVER
axios 연동을 위한 `json-server`를 생성 및 실행합니다.   
최상위 폴더에 `data.json`를 생성 후 아래 내용을 입력합니다.
```
{
  "auth": {
    "authentication": "jwt-tokken"
  }
}
```
아래 명령어를 이용하여 `json-server`를 실행할 수 있습니다.
```
$ npx json-server ./data.json --port 4000

localhost가 아닌 다른 호스트를 지정하기 위해선 --host 옵션을 추가하면 됩니다.
$ npx json-server ./data.json --host 10.10.1.10 --port 4000
```
[http://localhost:4000/auth](http://localhost:4000/auth)를 접속하여 확인 할 수 있습니다.

### React-Redux
modules/login 폴더에 로그인 관련 actions, types, reducer를 구현합니다.   

#### Actions
`modules/login/actions.ts`를 생성 후 액션 type과 액션 생성 function을 만듭니다.   
액션 type과 액션 생성 function은 `typesafe-actions` 라이브러리를 사용합니다.
```
import { createAction } from 'typesafe-actions';

// 액션 type
export const LOGIN = 'login/LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
export const LOGOUT = 'login/LOGOUT';

// 액션 생성 함수
export const login = createAction(LOGIN)();
export const loginSuccess = createAction(LOGIN_SUCCESS)<string[]>();
export const loginFailure = createAction(LOGIN_FAILURE)();
export const logout = createAction(LOGOUT)();
```

#### Types
`modules/login/types.ts`를 생성합니다.   
`LoginState`, `LoginAction` Type을 정의합니다.
```
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = {
    id: string;
    name: string;
    authentication: string;
    state: string;
}
```

#### Reducer
`modules/login/reducer.ts`를 생성합니다.   
LoginState에 `initialState`를 사용하여 초기값을 설정합니다.   
그 후 `typesafe-actions`의 `createReducer`를 이용하여 reducer를 구현합니다.
```
import { LoginState, LoginAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LOGIN, LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actions";

const initialState: LoginState = {
    id: '',
    name: '',
    authentication: '',
    state: ''
};

const loginReducer = createReducer<LoginState, LoginAction>(initialState, {
    [LOGIN]: () =>
        ({
            id: '',
            name: '',
            authentication: '',
            state: 'WAITTING'
        }),
    [LOGIN_SUCCESS]: (state, { payload: data }) =>
        ({
            id: data[0],
            name: data[1],
            authentication: data[2],
            state: 'SUCCESS'
        }),
    [LOGIN_FAILURE]: () =>
        ({
            id: '',
            name: '',
            authentication: '',
            state: 'FAILURE'
        }),
    [LOGOUT]: () =>
        ({
            id: '',
            name: '',
            authentication: '',
            state: ''
        })
})

export default loginReducer;
```

#### index
index는 총 2가지가 필요합니다.   
먼저 login의 `reducer`, `actions`, `types`를 외부로 보내줄 index입니다.
`modules/login/index.ts`를 생성 후 `reducer`, `actions`, `types`을 그대로 export합니다.
```
export { default } from './reducer'
export * from './actions';
export * from './types';
```
두번째로 각 reducer를 하나의 reducer로 묶기위한 index입니다.   
`combineReducers`를 사용하여 여러개의 `reducer`를 하나의 `rootReducer`로 만들 수 있습니다.
`modules/index.ts`를 생성 후 `combineReducers`를 이용하여 `rootReducer`를 만듭니다.
```
import { combineReducers } from 'redux';
import login from './login';

const rootReducer = combineReducers({
    login
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
```
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


