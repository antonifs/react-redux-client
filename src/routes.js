import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require-auth';
import Welcome from './components/welcome';
import BankOfResume from './components/resume/bank-of-resume';
import UploadResume from './components/resume/upload-resume';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={RequireAuth(Feature)} />
        <Route path="bank-of-resume" component={RequireAuth(BankOfResume)} />
        <Route path="upload-resume" component={RequireAuth(UploadResume)} />
    </Route>
);

