const Footer = () => {
  return (
    <footer className="font-sans bg-black text-white py-8 px-4">
  <div className="mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between">
    <a href="/" className="block mr-4 w-1/2">
      <img src="https://stitches-cdn.hyperyolo.com/logo-white.png" className="w-32" alt="logo" />
    </a>
    <div className="w-1/2 flex text-sm mt-6 lg:mt-0">
      <ul className="text-grey-dark list-reset font-thin flex flex-col text-left">
        <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">Product</li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Popular</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Trending</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Catalog</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Features</a></li>
      </ul>
      <ul className="text-grey-dark list-reset font-thin flex flex-col text-left">
        <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">Company</li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Press Release</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Mission</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Strategy</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Works</a></li>
      </ul>
      <ul className="text-grey-dark list-reset font-thin flex flex-col text-left">
        <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">Info</li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Support</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Developers</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Customer Services</a></li>
        <li><a href="#" className="inline-block py-2 px-3 text-grey hover:text-grey-light no-underline">Started Guide</a></li>
      </ul>
      <div className="text-grey-dark flex flex-col">
        <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Follow Us</div>
        <div className="flex pl-4 justify-start">
          <a className="block flex items-center text-white hover:text-grey mr-6 no-underline" href="#"><i className="fab fa-github-alt" /></a>
          <a className="block flex items-center text-white hover:text-grey mr-6 no-underline" href="#"><i className="fab fa-slack" /></a>
          <a className="block flex items-center text-white hover:text-grey no-underline" href="#"><i className="fab fa-twitter" /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="pt-4 mt-4 text-grey-darker border-t border-grey-darkest text-center"> ©2018 Hyperyolo. All rights reserved.</div>
</footer>

  )
}

export default Footer
