
import client from '../../client'
import styles from './page.module.css'
import { PortableText } from '@portabletext/react'


async function fetchData() {
    const post = await client.fetch(`*[_type == "graphic"][0]{
    title,
    subtitle,
    contentBlocks
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
        subtitle,
    } = post

    return (
        <article id="scale-up-center" className={styles.textbody}>

            <div className="scale-up-center">
                <h1 className={styles.title}>{title}</h1>
            </div>
            <h4>{subtitle}</h4>

            {contentBlocks &&

                contentBlocks.map((block) => {
                    const { title, subtitle, assetType, asset, body } = block;
                    return <>
                        <h1>{title}</h1>
                        {assetType &&

                            <div><img src={asset.url} /></div>}
                        <div className={styles.portable}>
                            <PortableText
                                value={body}
                                components={ptComponents}
                            />
                        </div>

                    </>
                })
            }
        </article>
    )
}

