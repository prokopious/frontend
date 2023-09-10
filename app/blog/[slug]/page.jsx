
import client from '../../../client'
import styles from './page.module.css'
import VideoPlayer from "../../../components/VideoPlayer"
import MusicPlayer from "../../../components/MusicPlayer"
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == Post]`)
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

async function fetchData(params) {
  const { slug } = params
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    imageList,
    audioList,
    "name": author->name,
    "authorImage": author->image,
    body
  }`, { slug })
  return post
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

export default async function Page({ params }) {

  const post = await fetchData(params)

  const {
    title = 'Missing title',
    name = 'Missing name',
    audioList,
    imageList,
    body = []
  } = post

  return (
    <article id="scale-up-center" className={styles.textbody}>

      <div className="scale-up-center">
        <h1 className={styles.title}>{title}</h1>
      </div>

      {post.audioList != null &&
        <div className={styles.musicBox}>
          <MusicPlayer data={post.audioList} title={post.title} />
        </div>
      }
      <div className={styles.portable}>
      <PortableText
        value={body}
        components={ptComponents}
      />
      </div>
    </article>
  )
}


