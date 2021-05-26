import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"

const LandingPageLayout = ({children, exchangeData}) => {
  return (
    <>
      <Header exchangeData={exchangeData}/>
      <div className="overlap"></div>
      <main>
        {children}
      </main>
      <Footer exchangeData={exchangeData}/>
    </>
  );
};

export default LandingPageLayout;