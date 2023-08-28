import './globals.css'
import client from '../client'
import { Inter } from 'next/font/google'
import Nav from '../components/Header'
import Body from '../components/Body'
import Content from '../components/Content'
import Side from '../components/Side'
import { BarContextProvider } from '../context/bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

async function fetchData() {
  const authors = await client.fetch(`*[_type == "author"]{
    name,
    "posts": *[_type == "post" && references(^._id)][] {
      title,
      "slug": slug.current,
    }
}`)
  return authors
}

export default async function RootLayout({
  children,
}) {

  const data = await fetchData()

  return (
    <html lang="en">
      <body>

        <BarContextProvider>
          <Body>
            <div className="header">
              <Nav />
            </div>
            <Content>
              <main>{children}</main>
            </Content>
            <div className="sidebar">
              <Side data={data} />
            </div>
          </Body>
        </BarContextProvider>

      </body>
    </html>
  )
}
