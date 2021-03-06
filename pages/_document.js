import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render() {
        return (
            <html>
                <Head>
                    <title>sayun's next.js practice</title>
                    <meta name="author" content={"Sayun Jung"}/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel='stylesheet' href='/_next/static/style.css' />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}