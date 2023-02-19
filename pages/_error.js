import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

function Error({ statusCode }) {
    return (
        <Layout>
            <h1 className={ utilStyles.headingXl }>This is sad 😢</h1>
            <p>
                { statusCode
                    ? `An error ${statusCode} has broke it's way into our website! If the error contiunes, please mark the issue on the Github repository.`
                    : `An error is lurking around the website. If it still contiunes, please mark the issue on the Github repository.`
                }
            </p>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;