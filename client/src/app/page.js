import Link from "next/link"

export default function Home() {
  return (
   <div>
     <h1 className="mb-10" >Login and Register using nextjs 13 and keystone 6</h1>

     <button className="px-4 py-2 bg-sky-600 text-white border-none rounded-lg mx-5" ><Link href='/register' >REGISTER</Link></button>
     <button className="px-4 py-2 bg-sky-600 text-white border-none rounded-lg mx-5"><Link href='/login' >LOGIN</Link></button>
    </div>
  )
}

 
