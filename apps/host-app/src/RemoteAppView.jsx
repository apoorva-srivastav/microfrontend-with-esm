
import React from 'react'
import App from 'http://localhost:7300/bundle.js';
import App2 from 'http://localhost:7400/bundle.js'

//import { useEffect, useState } from 'react';

// async function dynamicallyImport(baseUrl) {
//     const { default: LoadedView } = (await import( baseUrl
//     ));
  
//     return LoadedView;
// }

export const RemoteAppView = (url) => {
    //const [View, setView] = useState()

    // useEffect(() => {
    //     // dynamicallyImport('http://localhost:7001/bundle.js').then((LoadedView) => {
    //     //     setView(LoadedView)
    //     // })

    //     // dynamicallyImport('http://localhost:8484/output.js').then((LoadedView) => {
    //     //     setView(LoadedView)
    //     // })
        
    // },[])

    //return View
    return (
        <React.Fragment>
        <App />
        <App2 />
        </React.Fragment>
    )
    
}