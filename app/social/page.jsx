
import client from '../../client'
import styles from './page.module.css'
import { PortableText } from '@portabletext/react'
import MusicPlayer from "../../components/MusicPlayer"
import VideoPlayer from '../../components/VideoPlayer'


async function fetchData() {
    const post = await client.fetch(`*[_type == "social"][0]{
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
        <div className="mainbox">
        <article id="scale-up-center" className={styles.textbody}>
            {JSON.stringify(contentBlocks.imageList)}
            <div className="scale-up-center">
                <h1 className={styles.title}>{title}</h1>
            </div>
            <h4 className={styles.subtitle}>{subtitle}</h4>
            {mainImage && <div><img width="300px" src={mainImage.url} /></div>}
            <div className={styles.portable}>
                <PortableText
                    value={body}
                    components={ptComponents}
                />
            </div>

            {contentBlocks &&

                contentBlocks.map((block) => {
                  
                    const { title, imageList = [], assetType, body } = block;
                    console.log(imageList)
                    return <>
                        <h1 className={styles.subtitle}>{title}</h1>
                        {assetType == 'image' &&
                            imageList.map((n) => {
                                return <><div><img src={n.url} /></div></>
                            })
                        }
                        {assetType == 'audio' &&
                        <div><MusicPlayer data={imageList} title={title} /></div>
                        }
                         {assetType == 'video' &&
                            imageList.map((n) => {
                                return <><div><VideoPlayer url={n.url} /></div></>
                            })
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