import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there! My name is Sami, and I'm a avid learner on the field of computer science! I'm a student at Thomas Jefferson High School for Science and Technology, a STEM magnet school located in Alexandria, Virginia. I love researching, coding, and learning new things about the ever growning industry of computer science!</p>
        <p>
          If you have come here to look at my research, fantastic! This is where I talk about my findings and research about many different types of topics including but not limited to: <i>artificial intelligence</i>, <i>machine learning</i>, <i>computer vision</i>, <i>web development</i>, etc. If you are looking for my personal website, <a href="https://selsayed25.github.io/mywebsite">click here</a>!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
