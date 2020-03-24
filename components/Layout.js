import Head from 'next/head';
import Header from './Header.js';
export default function Layout(props){
    return(
        <div>
            <Head>
                <title>JP Movies</title>
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
                />
                <link href="https://use.fontawesome.com/releases/v5.12.1/css/svg-with-js.css" rel="stylesheet"></link>
            </Head>
            <main>
                <Header/>
                {props.children}
            </main>
        </div>
    );
}
