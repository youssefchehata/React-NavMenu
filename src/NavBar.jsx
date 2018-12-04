import React from "react";

import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
// --------home-----------------------------------------
const Home = () => <h1>Home component here</h1>;
// ---serv----
const ServicesComp = () => (
  <div>
    <h1>Services component here</h1>
    <Link to="/services/b2b">B2B </Link>
    <Link to="/services/b2c">B2C </Link>
    <div>
      <Route path="/services/b2b" render={() => "Business 2 Business"} />
      <Route path="/services/b2c" render={() => "Business 2 Customer"} />
    </div>
  </div>
);
//------ctct-----
const Contacts = () => <h1>Contact component here</h1>;
// ------
const Users = () => (
  <div>
    <Link to="/users/a">Go to user 15</Link>
    {/* redirect users not 15 */}
    <Link to="/users/19">Go to user 19</Link>
    <Link to="/users/156">Go to user 156</Link>
  </div>
);
const User = props => {
  const userId = props.match.params.id;
  if (!parseInt(userId)) {
    return <Redirect to="/users" />;
  }
  return "hello i am user number " + userId;
};
// --------------------------------------------------
const NavBar = () => {
  return (
    <BrowserRouter>
      <div>
        {/* 1 */}
        <h1>Hello world!</h1>
        <Link to="/"> Home </Link>
        <Link to="/services"> Our services </Link>
        <Link to="/contacts"> Contact us! </Link>
        <Link to="/users">Users</Link>

        <div>
          {/* 2  */}
          <Route exact path="/" component={Home} />
          <Route path="/services" component={ServicesComp} />
          <Route path="/contacts" component={Contacts} />
          <Route exact path="/users" component={Users} />
          {/* ------- */}
          <Route path="/users/:id" component={User} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;
