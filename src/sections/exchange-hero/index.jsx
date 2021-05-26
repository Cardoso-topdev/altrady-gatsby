import React from 'react'
import HeroComponent from '../../components/hero'
import "../style.scss"

const sectionContent = `You can choose from one of the top bitcoin cryptocurrency exchanges.
Altrady does not stop here and continues his development by integrating with more bitcoin cryptocurrency exchanges soon.`
const headerContent = `Our Top Bitcoin & Altcoin Cryptocurrency Exchange Partners`

const ExchangeHeroSection = ({extraClsName}) => {
  return <HeroComponent
            clsName={"section hero " + extraClsName}
            headerContent={headerContent}
            sectionContent={sectionContent}
            kickerText="Multiple Exchanges. One platform" />
}

export default ExchangeHeroSection