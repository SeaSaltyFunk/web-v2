import React, {ReactElement} from 'react';
import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render(): ReactElement {
		return (
			<Html lang={'en'}>
				<Head>
					<link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
					<link rel={'preconnect'} href={'https://fonts.gstatic.com'} crossOrigin={'true'} />
				</Head>
				<body className={'bg-grey-5 transition-colors duration-150'} data-theme={'light'}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;