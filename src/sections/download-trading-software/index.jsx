import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import SoftwareCard from '../../components/common/SoftwareCard';
import SectionLayout from '../../layouts/SectionLayout';
import {
  OsBrowser,
  OsMac,
  OsWindows,
  OsLinux,
} from "../../utils/imgLoader"

const sectionData = [
  {
    os: "Windows",
    osDescription: "Windows 8 and higher",
    imgSrc: OsWindows,
    ctaText: "Download"
  },
  {
    os: "Mac OS",
    osDescription: "Yosemite or higher",
    imgSrc: OsMac,
    ctaText: "Download"
  },
  {
    os: "Linux",
    osDescription: "Ubuntu (other distros can work, but require gnome-keyring)",
    imgSrc: OsLinux,
    ctaText: "Download"
  },
  {
    os: "Browser",
    osDescription: "Windows 8 and higher",
    imgSrc: OsBrowser,
    ctaText: "Open now"
  }
]
const DownloadTradingSoftwareSection = () => {
  return (
    <SectionLayout sectionName="trading-software">
      <SectionHeader title="Altrady crypto trading software works where you work" />

      <div className="row software-container">
        {sectionData.map( (item, idx) => (
          <SoftwareCard {...item} key={idx} clsName="col-lg-6 col-sm-6"/>
        ))}
      </div>
    </SectionLayout>
  );
};

export default DownloadTradingSoftwareSection;