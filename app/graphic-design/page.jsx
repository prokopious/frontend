import client from '../../client'
import styles from './page.module.css'
import { PortableText } from '@portabletext/react'
import Picture from '../../components/Picture'


async function fetchData() {
    const post = await client.fetch(`*[_type == "graphic"][0]{
    title,
    subtitle,
    mainImage,
    contentBlocks,
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
        contentBlocks = [],
        title,
        mainImage,
        subtitle,
        body = [],
    } = post

    return (
      <div className="mainbox">  <article id="scale-up-center" className={styles.textbody}>
            {JSON.stringify(contentBlocks.imageList)}
            <div className="scale-up-center">
                <h1 className={styles.title}>{title}</h1>
            </div>
            <h4 className={styles.subtitle}>{subtitle}</h4>
            {mainImage && <div><Picture source={mainImage.url} /></div>}
            <div className={styles.portable}>
                            <PortableText
                                value={body}
                                components={ptComponents}
                            />
                        </div>

            {contentBlocks &&

                contentBlocks.map((block) => {
                    const { title, imageList = [], assetType, body } = block;
                    return <>
                        <h1 className={styles.subtitle}>{title}</h1>
                        {assetType == 'image' &&
                            imageList.map((n) => {
                                return <><div><Picture source={n.url} /></div></>
                            })
                            // <div><img src={asset.url} /></div>

                        }
                        <div className={styles.portable}>
                            <PortableText
                                value={body}
                                components={ptComponents}
                            />
                        </div>

                    </>
                })
            }
        </article></div>
    )
}

