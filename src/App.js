import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/layout.scss";
// import PublicRoutes from "./routes/public.routes";
// import PrivateRoutes from "./routes/private.routes";
import MainContainer from "./components/layout/main-container.layout";
import Header from "./components/layout/header/header.layout";
import LeftNav from "./components/layout/left-nav/left-nav.layout";
import MainContent from "./components/layout/main-content.layout";
import Footer from "./components/layout/footer/footer.layout";
import LayoutProvider from "./hooks/layout/layout.provider";
import UserProvider from "./hooks/user/user.provider";
// import { isAuthenticated } from "./data/services/auth/auth";
import Routes from "./routes/routes";

function App(props) {
  // const isAuth = isAuthenticated();

  return (
    <LayoutProvider>
      <MainContainer>
        <UserProvider>
          <Header />
          <LeftNav />
          <MainContent>
            {/* {
              isAuth ? <PrivateRoutes props={props} /> : <PublicRoutes />
            } */}
            <Routes />
          </MainContent>
        </UserProvider>
        <Footer />
      </MainContainer>
    </LayoutProvider>
  );
}

export default App;
