import Link from 'next/link'
import {withRouter} from 'next/router'
import Head from 'next/head'

const Header = ({router}) => {
  const {pathname} = router
  const isActive = (path) => {
    return pathname === path ? 'border-b-2 border-black' : ''
  }

  return (    
    <nav className="font-sans bg-white text-center flex justify-between px-8 py-4 mx-auto container overflow-hidden items-center">
    <Head>
      <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/amiechen/stitches-template-generator/master/public/stitches.css" />
    </Head>
    <div className="flex items-center">
      <Link href="/" passHref>
      <a href="/" className="mr-4 w-32">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </a>
      </Link>
      <input type="search" placeholder="Search" className="text-sm transition focus:outline-0 border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-1 px-2 pl-10 appearance-none leading-normal ds-input" />
      <ul className="text-sm text-grey-dark list-reset flex items-center">
        <li><Link href="/dashboard" passHref><a href="/dashboard" className={`inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline ${isActive('/dashboard')}`}>Dashboard</a></Link></li>
        <li><Link href="/messages" passHref><a href="/messages" className={`inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline ${isActive('/messages')}`}>Messages</a></Link></li>
        <li><Link href="/feed" passHref><a href="/feed" className={`inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline ${isActive('/feed')}`}>Feed</a></Link></li>
      </ul>
    </div>
    <ul className="text-sm text-grey-dark list-reset flex items-center">
      <li><a href="#" className="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline">Log In</a></li>
      <li>
        <button className="bg-black hover:bg-grey-darker text-white ml-4 py-2 px-3">
          Sign Up
        </button>
      </li>
    </ul>
  </nav>
);
}

export default withRouter(Header)
