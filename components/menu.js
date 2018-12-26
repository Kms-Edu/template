const Menu = () => {
  return (
    <section className="bg-white py-4 font-sans">
      <div className="container m-auto max-w-xl flex items-baseline justify-start m-10">
        <h2 className="text-grey-dark text-base font-bold tracking-wide uppercase py-4 px-6">All</h2>
        <h2 className="text-base font-bold tracking-wide uppercase py-4 px-6 border-b-2 border-black -mb-4">Recent</h2>
        <h2 className="text-grey-dark text-base font-bold tracking-wide uppercase py-4 px-6">Assigned to Me</h2>
        <h2 className="text-grey-dark text-base font-bold tracking-wide uppercase py-4 px-6">Pending</h2>
      </div>
    </section>
  )
}

export default Menu
