import React from 'react'
import Head from 'next/dist/shared/lib/head'
const Back = () => {
    return (
    <div id="container">
        <Head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
            </Head>
            <a href="/">
    <span class="material-icons" id="back">
        arrow_back_ios
        </span>
</a>
    </div>
    )
}

export default Back
