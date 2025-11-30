
function Hero() {
  return (
    <section className="relative py-32 px-8 flex justify-center items-center rounded-2xl overflow-hidden hero">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl">
            <h1 className="text-white mb-6 leading-tight">Discover Your Next <b>Career Opportunity</b></h1>
            <p className="text-gray-200 text-xl mb-8 font-light">Connect with top companies and find positions that match your skills and ambitions</p>
        </div>
    </section>
  )
}

export default Hero;