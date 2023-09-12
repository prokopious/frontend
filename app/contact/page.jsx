import ContactForm from '../../components/ContactForm'
import client from '../../client'
import styles from './page.module.css'
import { PortableText } from '@portabletext/react'
import Picture from '../../components/Picture'


async function fetchData() {
  const post = await client.fetch(`*[_type == "contact"][0]{
    title,
    email,
    phone,
    subtitle,
    mainImage,
    body,
  }`)
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

export default async function Page() {

  const post = await fetchData()

  const {
    title,
    subtitle,
    body = [],
    phone,
    mainImage,
    email
  } = post

  return (
    <div className={styles.bg}>
    <div className="mainbox">
      <article id="scale-up-center">

        <div className="scale-up-center">
          <h1 className={styles.title}>{title}</h1>
        </div>
        {subtitle && <h4>{subtitle}</h4>}
        {/* {mainImage && <div className={styles.picBox}><Picture source={mainImage.url} /></div>} */}

        {/* {contentBlocks &&

          contentBlocks.map((block) => {
            const { title, phone, mainImage, email, subtitle, assetType, asset, body } = block;
            return <>
              <h1>{title}</h1>
              assetType &&

              <div><img src={asset.url} /></div>
              <div className={styles.portable}>
                <PortableText
                  value={body}
                  components={ptComponents}
                />
              </div>

            </>
          })
        } */}
          <h4 className={styles.cont}>Contact information:</h4>
  <div className={styles.contactBox}>
        {email && <div className={styles.mail}>Email: <b>{email}</b></div>}
        {phone && <div>Phone: <b>{phone}</b></div>}</div>

        <h4 className={styles.cont}>Or..</h4>
  <ContactForm />

      </article ></div ></div>
  )
}
