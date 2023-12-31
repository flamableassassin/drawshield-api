import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <img src={useBaseUrl('/img/homepage.png')} width={500} /> */}

        <Heading as="h2" className={styles["strike-through"]}>
          Drawshield documentation
        </Heading>

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className='container'>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/api">
              Check out the docs
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Unofficial drawshield api docs">
      <HomepageHeader />
      <main>
        <section>
          <div className="container">
            <div className="text--center" style={{ 'padding-top': '1.5rem' }}>
              <Heading as="h2">Info</Heading>
              <p>This is unofficial it was setup to help others who are looking to use the api.<br></br>Note it is common that I have copied text from the official docs to these docs as to prevent confusion on topics that I don't know much about</p>
              <div className="text--center">
                <img src='https://avatars.githubusercontent.com/u/43076116' width="25%" style={{ "border-radius": "3%" }} alt='Flammableassassin profile picture' />
              </div>
              <div className="text--center padding-horiz--md">
                <Heading as="h4">Built by flammableassassin</Heading>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}