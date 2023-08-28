// // client.ts
// import sanityClient, { createClient } from '@sanity/client'

// export default sanityClient({
//   projectId: 'mxpmmhqx', // you can find this in sanity.json
//   dataset: 'production', // or the name you chose in step 1
// //   useCdn: true // `false` if you want to ensure fresh data
// })

import {createClient, groq} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2023-05-03"

const client = createClient({
  projectId,
  dataset,
  studioUrl: '/studio',
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

// const data = await client.fetch(groq`*[]`)

export default client;