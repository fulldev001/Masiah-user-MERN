/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// styles
import 'bootstrap/scss/bootstrap.scss'
import 'assets/scss/paper-kit.scss?v=1.3.0'
import 'assets/demo/demo.css?v=1.3.0'
// pages
import Index from 'views/Index.js'
import NucleoIcons from 'views/NucleoIcons.js'
import LandingPage from 'views/examples/LandingPage.js'
import ProfilePage from 'views/examples/ProfilePage.js'
import RegisterPage from 'views/examples/RegisterPage.js'
import BlogPage from 'views/Blog/Blog'
import AboutUs from 'views/AboutUs/About'
import Collaborate from 'views/Collaborate/Collaborate'
import Contact from 'views/Contact/Contact'
import JoinUs from 'views/JoinUs/JoinUs'
import OurServices from 'views/OurServices/OurServices'
import OurTeam from 'views/OurTeam/OurTeam'
import CustomIndexNavbar from 'components/Custom/CustomIndexNavbar'
import CustomFooterBar from 'components/Custom/CustomFooterBar'
import CustomFooter from 'components/Custom/CustomFooter'
// others
import 'assets/css/custom.css'
import ContactUs from 'views/Contact/Contact'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CustomIndexNavbar />
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route path="/blog" render={(props) => <BlogPage {...props} />} />
        <Route path="/about" render={(props) => <AboutUs {...props} />} />
        <Route
          path="/collaborate"
          render={(props) => <Collaborate {...props} />}
        />
        <Route path="/our-team" render={(props) => <OurTeam {...props} />} />
        <Route path="/services" render={(props) => <OurServices {...props} />} />
        <Route path="/join-us" render={(props) => <JoinUs {...props} />} />
        <Route path="/contact-us" render={(props) => <Contact {...props} />} />

        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Redirect to="/index" />
      </Switch>

      <CustomFooter />
      <CustomFooterBar />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
