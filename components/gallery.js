import Head from 'next/head'
import Header from './index-header'
import Footer from './footer'
const Gallery = () => {
  return (
    <div>
      <Head>
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/shuvroroy/youtube-clone/883c8d9a/public/css/main.css" />
      </Head>
  <Header />
  <div className="bg-white font-sans">
    <div className="bg-cover h-112">
      <img src="https://yt3.ggpht.com/HR5bTyedjHyoOd9h2zty2OAqZ3MFM6T7_R48jhdd2rQE2aSPHOD2B-ibdv-yLSTy4_AAF6XdoCk=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no" alt="banner" />
    </div>
    <div className="-mt-1 bg-grey-lighter">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-16">
          <div className="flex items-center">
            <img className="w-24 h-24 rounded-full" src="https://yt3.ggpht.com/-5ny40r8qe90/AAAAAAAAAAI/AAAAAAAAAAA/IrloZ_OeiYc/s288-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="channel_logo" />
            <div className="ml-6">
              <div className="text-2xl font-normal flex items-center">
                <span className="mr-2">Fun Fun Function</span>
                <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
              </div>
              <p className="mt-2 font-hairline text-sm">126,014 subscribers</p>
            </div>
          </div>
          <div className="text-grey-dark">
            <button className="appearance-none px-3 py-2 bg-grey-light uppercase text-grey-darker text-sm mr-4">Subscribed 126K</button>
            <span><i className="fa fa-bell fa-lg" aria-hidden="true" /></span>
          </div>
        </div>
        <div className="px-16">
          <ul className="list-reset flex">
            <li className="text-center py-3 px-8 border-b-2 border-solid border-grey-dark"><a href="#" className="text-black">Home</a></li>
            <li className="text-center py-3 px-8"><a href="#" className="hover:text-black">Videos</a></li>
            <li className="text-center py-3 px-8"><a href="#" className="hover:text-black">Playlists</a></li>
            <li className="text-center py-3 px-8"><a href="#" className="hover:text-black">Community</a></li>
            <li className="text-center py-3 px-8"><a href="#" className="hover:text-black">Channels</a></li>
            <li className="text-center py-3 px-8"><a href="#" className="hover:text-black">About</a></li>
            <li className="text-center py-3 px-8"><i className="fa fa-search fa-lg text-grey-dark" /></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container mx-auto flex">
      <div className="w-3/4 mx-16 py-6">
        <div className="border-b pb-8">
          <div className="flex">
            <div className="w-3/4 flex">
              <div>
                <img className="block w-full" src="https://i.ytimg.com/vi/Kcie9rbbb4s/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCbowulw74TtG_RM8mhfoyq3tya9A"  />
              </div>
              <div className="pl-4">
                <p className="w-64 h-6 truncate text-sm font-medium mb-1">Habitual negative thoughts</p>
                <p className="text-grey-darker text-xs">
                  <span>Fun Fun Function</span>
                  <span>·</span>
                  <span>7.5 views</span>
                  <span>·</span>
                  <span>2 days ago</span>
                </p>
              </div>
            </div>
            <div className="w-1/4">
              <div>
                <img className="block w-100" src="https://i.ytimg.com/vi/TubVp9nn32Q/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAUxQM30HpBNOg3UpiPQUISQgwSlg"  />
              </div>
              <div>
                <p className="text-sm font-medium my-2">TDD with Wallaby.js Part 2</p>
                <p className="text-grey-darker text-xs mb-1">Fun Fun Function</p>
                <p className="text-grey-darker text-xs">
                  <span>186 views</span>
                  <span>·</span>
                  <span>3 hours ago</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b">
          <h3 className="py-6 text-base font-medium">
            Best of Fun Fun Function
            <span className="uppercase ml-3 text-grey-dark">Play all</span>
          </h3>
          <div className="flex mb-4 relative">
            <div className="absolute w-10 h-10 rounded-full bg-white text-grey-dark text-center -mr-3 pin-r mt-8 shadow-md">
              <i className="fa fa-chevron-right mt-3" aria-hidden="true" />
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  336K views · 2 years ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg" />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  336K views · 2 years ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg" />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  336K views · 2 years ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg" />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  336K views · 2 years ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b">
          <h3 className="py-6 text-base font-medium">
            Uploads
            <span className="uppercase ml-3 text-grey-dark">Play all</span>
          </h3>
          <div className="flex mb-4 relative">
            <div className="absolute w-10 h-10 rounded-full bg-white text-grey-dark text-center -mr-3 pin-r mt-8 shadow-md">
              <i className="fa fa-chevron-right mt-3" aria-hidden="true" />
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/C8p7rHwctAg/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDnbDWPH7Ef-OV7CVWii7v-0RuSBw" />
              </div>
              <div className="mb-4 mt-1">
                <h4 className="text-sm font-medium">Commit editor settings to version control? - Fun Fun Function</h4>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  5.3K views · 4 days ago
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/C8p7rHwctAg/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDnbDWPH7Ef-OV7CVWii7v-0RuSBw" />
              </div>
              <div className="mb-4 mt-1">
                <h4 className="text-sm font-medium">Commit editor settings to version control? - Fun Fun Function</h4>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  5.3K views · 4 days ago
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/C8p7rHwctAg/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDnbDWPH7Ef-OV7CVWii7v-0RuSBw"  />
              </div>
              <div className="mb-4 mt-1">
                <h4 className="text-sm font-medium">Commit editor settings to version control? - Fun Fun Function</h4>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  5.3K views · 4 days ago
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/C8p7rHwctAg/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDnbDWPH7Ef-OV7CVWii7v-0RuSBw"  />
              </div>
              <div className="mb-4 mt-1">
                <h4 className="text-sm font-medium">Commit editor settings to version control? - Fun Fun Function</h4>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  5.3K views · 4 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b">
          <div className="py-6">
            <h3 className="text-base font-medium">
              MPJ's Musings
              <span className="uppercase ml-3 text-grey-dark">Play all</span>
            </h3>
            <p className="text-sm font-normal text-grey-dark mt-2 leading-loose max-w-md">More "soft" episodes about software, creativity, motivation, and career.</p>
          </div>
          <div className="flex mb-4 relative">
            <div className="absolute w-10 h-10 rounded-full bg-white text-grey-dark text-center -mr-3 pin-r mt-8 shadow-md">
              <i className="fa fa-chevron-right mt-3" aria-hidden="true" />
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/gXfOdwduXqY/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAUglms6KZMul1UMpuBfFPM5Ddocw"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Why remote working is so hard</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  20K views · 2 months ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/gXfOdwduXqY/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAUglms6KZMul1UMpuBfFPM5Ddocw"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Why remote working is so hard</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  20K views · 2 months ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/gXfOdwduXqY/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAUglms6KZMul1UMpuBfFPM5Ddocw"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Why remote working is so hard</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  20K views · 2 months ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/gXfOdwduXqY/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAUglms6KZMul1UMpuBfFPM5Ddocw"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Why remote working is so hard</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  20K views · 2 months ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b">
          <div className="py-6">
            <h3 className="text-base font-medium">
              Functional programming in Javascript
              <span className="uppercase ml-3 text-grey-dark">Play all</span>
            </h3>
            <p className="text-sm font-normal text-grey-dark mt-2 leading-loose max-w-md">This is a collection of the videos from FunFunFunction that is specifically about functional programming in JavaScript</p>
          </div>
          <div className="flex mb-4 relative">
            <div className="absolute w-10 h-10 rounded-full bg-white text-grey-dark text-center -mr-3 pin-r mt-8 shadow-md">
              <i className="fa fa-chevron-right mt-3" aria-hidden="true" />
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming in JavaScript</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  20K views · 2 months ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming in JavaScript</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  20K views · 2 months ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming in JavaScript</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  20K views · 2 months ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg"  />
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming in JavaScript</h4>
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Fun Fun Function
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  20K views · 2 months ago
                </p>
                <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                  CC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 py-6">
        <div className="border-b">
          <p className="text-grey-darker uppercase text-sm mb-6">Other channels I like</p>
          <ul className="list-reset">
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-E0Ej_rdX5Ic/AAAAAAAAAAI/AAAAAAAAAAA/kskO1deXSNs/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">Wes Bos</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-X6Szi46cleA/AAAAAAAAAAI/AAAAAAAAAAA/XJsGnNESQs8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">TheHappieCat</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-Lvqivbc77hw/AAAAAAAAAAI/AAAAAAAAAAA/YSd9RXOp_Ng/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">Siraj Raval</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-1rYs64e24jQ/AAAAAAAAAAI/AAAAAAAAAAA/B2LPB2yW030/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">The Coding Train</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-kHTbb6oDqmY/AAAAAAAAAAI/AAAAAAAAAAA/BHWd_jlJmJU/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">sentdex</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-pX2m-odRVjo/AAAAAAAAAAI/AAAAAAAAAAA/kVOqkSiGTaA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">noopkat</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="text-grey-darker uppercase text-sm mb-6">RELATED CHANNELS</p>
          <ul className="list-reset">
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-5aj55jp4Jm8/AAAAAAAAAAI/AAAAAAAAAAA/aMg0g6GjNJ8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">DevTips</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-OsgBxXITFdg/AAAAAAAAAAI/AAAAAAAAAAA/gDaUV_aSb2Q/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">Traversy Media</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/--JVzzRDG2ME/AAAAAAAAAAI/AAAAAAAAAAA/Q-LECA0Cxb8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">The Net Ninja</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-yZnkNC2qlCU/AAAAAAAAAAI/AAAAAAAAAAA/qgA6rParUds/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">Academind</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
            <li className="mb-6">
              <span className="flex items-center mb-2">
                <img className="w-6 h-6 rounded-full" src="https://yt3.ggpht.com/-9X-_QJu0RvQ/AAAAAAAAAAI/AAAAAAAAAAA/X3cPcZ5icto/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                <span className="ml-2">Google Chrome Developers</span>
              </span>
              <button className="appearance-none p-2 bg-grey-light uppercase text-grey-darker text-xs mr-4">Subscribe</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</div>

  )
}

export default Gallery
