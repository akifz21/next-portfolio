import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkModeToggle from './DarkModeToggle'
import Layout from './Layout'

export default function Header() {

    const router = useRouter()

    const items = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'About',
            url: "/about",
        },
        {
            label: 'Projects',
            url: '/projects'
        }

    ]

    return (
        <header className=' bg-white fixed w-full  flex flex-row justify-center items-center
        h-16 md:h-20 border-b border-gray-200 z-50
        dark:bg-zinc-800 dark:border-gray-600
        text-black dark:text-white'>



            <ul className='flex flex-row  items-center'>
                {
                    items.map((item, i) => (
                        <Link key={i} className={`mr-4 font-normal   ${router.asPath === item.url && "border-b-2  border-b-yellow-500"}`} href={item.url}>{item.label}</Link>
                    ))
                }
                <li className='mr-6 sm:mr-8 flex flex-col relative'><DarkModeToggle /></li>
            </ul>

        </header>
    )
}
