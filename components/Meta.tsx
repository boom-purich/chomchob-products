import Head from 'next/head';

const Meta = ({title,keyword,description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width,initial-scale=1'/>
            <meta name="keywords" content={keyword}/>
            <meta name="description" content={description}/>
            <meta charSet='utf-8'/>
            <link rel='icon' href='logo.png' type="image/png"/>
            <title>{title}</title>
        </Head>
    );
}

Meta.defaultProps = {
    title: 'ChomCHOB | Product Lists',
    keyword: 'Website show product list.',
    description: 'Develop with Next.js framework by Purich Sangprasert.',
}

export default Meta;
