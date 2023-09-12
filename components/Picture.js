import Image from 'next/image'

export default function Picture({source}) {

    return (
        <>
            <Image src={source} alt="Sunset" width={850} height={580} layout="responsive" />
        </>
    )

}