import React from 'react'
import HeroComponent from '../../components/hero'
import "../style.scss"

const sectionContent = `Boost your trading with the all-in-one cryptocurrency trading software. Trade on multiple 
exchanges, track your performance, improve and get less emotional.
Bitcoin trading platform for beginners and expert traders.`
const sectionCaption = `Join over 40,000 productive crypto traders,
that trust the best bitcoin trading platform`
const headerContent = `Altrady crypto trading 
platform helps you trade on 
multiple exchanges!`

const HeroSection = ({extraClsName=" ", heroSectionData}) => {
  if ( heroSectionData) {
    return <HeroComponent
              clsName={"section hero " + extraClsName}
              headerContent={heroSectionData.header}
              sectionContent={heroSectionData.content}
              kickerText={heroSectionData.kicker}
              sectionCaption={heroSectionData.description}
              heroImg={heroSectionData.img.url} />
  } else {
    return <HeroComponent
              clsName={"section hero " + extraClsName}
              headerContent={headerContent}
              sectionContent={sectionContent}
              kickerText="Simple. Fast. Secure."
              sectionCaption={sectionCaption} />
  }
}

export default HeroSection