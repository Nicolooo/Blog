import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Nav from '../comp/Navbar'
import CallToActionWithAnnotation from '../comp/Home'
import SimpleThreeColumns from '../comp/Feat'
import Pricing from '../comp/Pricing'
import Back from '../comp/Back'
import Contact from '../comp/Contact'
const Home = () => {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <Back/>
      <Pricing />
      <Contact />
    </div>
    </>
  )
}

export default Home
