import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from '../styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const resp = await fetch(`${process.env.API_HOST}/socials`);
    const data = await resp.json();

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { socials: data },
    }
  } catch {
    return {
      props: { socials: null }
    }
  }
};

const Home = ({ socials }) => {
  
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={ styles.wrapper }>
        <Heading text="Hello World!" />
      </div>
      <Socials socials={ socials } />
    </>
  )
}

export default Home;
