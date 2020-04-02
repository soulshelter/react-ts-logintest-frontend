import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import App from "./views/App";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Mypage from "./views/Mypage";
import PrivateRoute from "./components/PrivateRoute";


function routes() {
    return (
        /*
            <BrowerRouter> : HTML5의 history API를 활용하여 UI를 업데이트
            <HashRouter> : URL의 Hash를 활용한 라우터
            <Swith> : <Route> 관리, 내부에 <Route>를 넣어 사용
            <Route> : 요청뱓은 path에 해당하는 컴포넌트를 렌더링, exact를 사용하여 path가 완전히 동일할경우 매칭 ex) <Route exact path="/app" component={App} />
            <Link> : 링크 생성
        */
        <Router>
            <nav>
                <Link to="/app">App</Link> |
                <Link to="/dashboard">dashboard</Link> |
                <Link to="/login">login</Link> |
                <Link to="/mypage">mypage</Link>
            </nav>
            <Switch>
                <Route path="/app" component={App} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/mypage" component={Mypage} />
                <Redirect from="*" to="/app" />
            </Switch>
        </Router>
    )
};

export default routes;