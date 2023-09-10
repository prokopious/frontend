import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const saveContact = async (contact) => {
  let contact1 = {
    firstname: "john",
    lastname: "smith",
    email: "jsmith@example.com"
  }

  const response = await fetch('../app/api/home/route', {
    method: 'POST',
    body: JSON.stringify(contact1),
    headers: {
      'Content-Type': 'application/json; charset=utf8'
    }
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}


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

async function getSqlData() {
  const contacts = await prisma.contact.findMany()
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!contacts) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return contacts
}

export default async function Home() {
  const data = await getData()
  const contacts = await getSqlData()



  return (
    <>{JSON.stringify(contacts)}
   
    </>
    // <div className="box">
    //   {/* <h3>This is the main page.</h3> */}
    //   <div className="pic">
    //     <img className="pic"
    //       src="/bird5.png"
    //       alt="Picture of a bird"
    //     />
    //     </div>
    // </div>

  )
}