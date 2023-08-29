import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (<div className="box">
    {/* <h3>This is the main page.</h3> */}
    <div className="pic">
      <img className="pic"
        src="/bird5.png"
        alt="Picture of a bird"
      />
      </div>
  </div>)
}