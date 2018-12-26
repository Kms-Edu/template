import Header from './index-header'
import Footer from './footer'

const Index = () => {
  return (
    <div>
      <Header />
      <section className="font-sans h-screen w-full bg-cover text-center flex flex-col items-center justify-center" style={{background: 'url(https://stitches-cdn.hyperyolo.com/demo-bg.png) no-repeat center'}}>
        <div className="bg-white text-black rounded-full h-16 w-16 flex items-center justify-center mb-8"><i className="fas fa-play ml-1" /></div>
        <label htmlFor="tagline" className="uppercase tracking-extrawide text-white text-xs font-hairline mt-8">Watch Video</label>
        <h3 className="text-white mx-auto max-w-sm mt-4 font-normal text-2xl leading-normal">Differentiate Yourself And Attract More Attention Sales And Profits</h3>
      </section><section className="my-8 font-sans container max-w-xl m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
        <div className="w-full lg:w-1/2"><img src="https://stitches-cdn.hyperyolo.com/demo-phone.png" /></div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start">
          <label htmlFor="tagline" className="uppercase tracking-wide text-grey-dark font-bold">best app ever</label>
          <h1 className="my-4 font-normal">Our Work Flow</h1>
          <p className="leading-normal mb-4 text-grey-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
      <section className="my-8 pt-8 font-sans container max-w-xl m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start">
          <label htmlFor="tagline" className="uppercase tracking-wide text-grey-dark font-bold">best app ever</label>
          <h1 className="my-4 font-normal">Our Work Flow</h1>
          <p className="leading-normal mb-4 text-grey-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="w-full lg:w-1/2"><img src="https://stitches-cdn.hyperyolo.com/demo-phone.png" /></div>
      </section><section className="my-8 font-sans container m-auto max-w-xl ">
        <div className="text-center">
          <h1 className="my-4 font-medium">Show Your Work</h1>
          <p className="leading-normal mb-4 max-w-sm m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap my-8">
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-grey-lightest border-r border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
            <div className="w-12 h-12 rounded-full bg-grey-light" />
            <h3 className="mt-4 mb-1">Digital</h3>
            <p className="mt-4 text-center text-grey-dark leading-normal px-6 hidden hover:block">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8  border-grey-lightest border-r border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
            <div className="w-12 h-12 rounded-full bg-grey-light" />
            <h3 className="mt-4 mb-1">Branding</h3>
            <p className="mt-4 text-center text-grey-dark leading-normal hidden hover:block">Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8  border-grey-lightest border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
            <div className="w-12 h-12 rounded-full bg-grey-light" />
            <h3 className="mt-4 mb-1">Excellence</h3>
            <p className="mt-4 text-center text-grey-dark leading-normal hidden hover:block">Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8  border-grey-lightest border-r hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
            <div className="w-12 h-12 rounded-full bg-grey-light" />
            <h3 className="mt-4 mb-1">Strategy</h3>
            <p className="mt-4 text-center text-grey-dark leading-normal hidden hover:block">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8  border-grey-lightest border-r hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
            <div className="w-12 h-12 rounded-full bg-grey-light" />
            <h3 className="mt-4 mb-1">Design</h3>
            <p className="mt-4 text-center text-grey-dark leading-normal hidden hover:block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 border-grey-lightest  hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
            <div className="w-12 h-12 rounded-full bg-grey-light" />
            <h3 className="mt-4 mb-1">Development</h3>
            <p className="mt-4 text-center text-grey-dark leading-normal hidden hover:block">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </p>
          </div>
        </div>
      </section><section className="font-sans text-center my-8 px-8">
        <h1 className="capitalize font-medium">Ready to get started?</h1>
        <p className="text-grey-dark mt-2 mb-6">But I must explain to you how all this mistaken idea of denouncing </p>
        <button className="bg-black hover:bg-grey-darkest text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide">Learn More</button>
      </section>
      <Footer />
    </div>
  );
}

export default Index
