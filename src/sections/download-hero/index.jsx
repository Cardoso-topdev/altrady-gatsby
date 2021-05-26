import React from 'react';
import HeroComponent from '../../components/hero';

const sectionContent = `Windows, Mac OS, Linux or just in browser.
Altrady works where you work.`
const headerContent = `Download the Altrady App`

const DownloadHeroSection = () => {
  return (
    <HeroComponent
      clsName="section hero download"
      headerContent={headerContent}
      sectionContent={sectionContent}
      kickerText="Simple. Fast. Secure." />
  );
};

export default DownloadHeroSection;