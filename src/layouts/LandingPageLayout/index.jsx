import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"

const LandingPageLayout = ({children, navData}) => {
  return (
    <>
      <Header navData={navData}/>
      <div className="overlap"></div>
      <main>
        {children}
      </main>
      <Footer exchangeData={navData[2].dataRaw.exchange_item}/>
    </>
  );
};

export default LandingPageLayout;