import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html className="has-navbar-fixed-top">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link href="https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
