import Link from 'next/link'


type Props = {

        href: string,
        title: string
    
}
export default function NavLink({href, title} : Props) {
   
  return (
    <li className=''>
        <Link className='text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-blue-600 py-3 pl-3 md:p-0 hover:text-[#0B60B0] block md:text-2xl lg:text-3xl mx-6' href={href}>
            {title}
        </Link>
    </li>
)
}
