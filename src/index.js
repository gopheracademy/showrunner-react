/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';

// bootstrap rtl for rtl support page
import "assets/vendor/bootstrap-rtl/bootstrap-rtl.scss";
// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
// plugins styles downloaded
import "assets/vendor/fullcalendar/dist/fullcalendar.min.css";
import "assets/vendor/sweetalert2/dist/sweetalert2.min.css";
import "assets/vendor/select2/dist/css/select2.min.css";
import "assets/vendor/quill/dist/quill.core.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// core styles
import "assets/scss/argon-dashboard-pro-react.scss?v1.1.0";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import IndexView from "views/Index.js";
const CALLBACK_PATH = '/login/callback';
const config = {
  clientId: '0oa26dc0cgcjzHwsJ5d6',
  issuer: 'https://dev-7217861.okta.com',
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};
const oktaAuth = new OktaAuth(config);

ReactDOM.render(

  <BrowserRouter>

    <Security oktaAuth={oktaAuth}>
      <Switch>

        <Route path={CALLBACK_PATH}
          component={LoginCallback} />
        <SecureRoute path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/" render={props => <IndexView {...props} />} />
        <Redirect from="*" to="/" />

      </Switch>
    </Security>
  </BrowserRouter>,

  document.getElementById("root")
);
