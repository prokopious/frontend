
import client from '../../client'
import styles from './page.module.css'
import { PortableText } from '@portabletext/react'


async function fetchData() {
  const post = await client.fetch(`*[_type == "about"][0]{
    title
  }`)
  return post
}

export default async function Page() {

  const post = await fetchData()

  // const {
    // title = 'Missing title'
    // name = 'Missing name',
    // audioList,
    // imageList,
    // body = []
  // } = post

  return (
    <article id="scale-up-center" className={styles.textbody}>

      {/* <div className="scale-up-center">
        <h1 className={styles.title}>{title}</h1>
      </div>
 */}

 
    </article>
  )
}


