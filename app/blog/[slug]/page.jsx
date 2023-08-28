import client from '../../../client'
import styles from './page.module.css'
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
  console.log(post)
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = post
  return (
    <article className={styles.textbody}>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
            alt={`${name}'s picture`}
          />
        </div>
      )}

      <PortableText
        value={body}
        components={ptComponents}
      />
    </article>
  )
}


