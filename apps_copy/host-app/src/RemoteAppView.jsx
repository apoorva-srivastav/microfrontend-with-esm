import App2 from 'http://localhost:8400/output.js'

export const RemoteAppView = () => {
    return (
    <>
    <App2 /></>
    )
}

    // import { useEffect, useState } from 'react';

// async function dynamicallyImport(baseUrl) {
//     /* @vite-ignore */
//     const { default: LoadedView } = (await import( baseUrl
//     ));
  
//     return LoadedView;
// }

// const [View, setView] = useState()

    // useEffect(() => {
    //     // dynamicallyImport('http://localhost:7001/bundle.js').then((LoadedView) => {
    //     //     setView(LoadedView)
    //     // })

    //     dynamicallyImport('http://localhost:8400/output.js').then((LoadedView) => {
    //         setView(LoadedView)
    //     })
        
    // },[])

    //return View
    // return (
    //     <React.Fragment>
    //     <App />
    //     <App2 />
    //     </React.Fragment>
    // )
    
