import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import HeroGradient from './HeroGradient'
import SubHeroSection from './SubHeroSection'

const HeroMain = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Added max-w-7xl for better content containment */}
      <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
          <HeroText />
          <HeroPic />
        </div>
      </div>
      <HeroGradient />
      <SubHeroSection />
    </div>
  )
}

export default HeroMain