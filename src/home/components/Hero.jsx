

export const Hero = () => {
  return (
    <section className="">
      <div className="bg-[url('/images/home/banner_fondo.png')] bg-cover bg-center h-screen flex items-center justify-center">
        <div className="text-white flex flex-col justify-center content-center text-center w-5/6 m-auto pb-10">
          <img
          className="w-[250px] md:w-[400px] m-auto"
          src="/images/home/logo_white.png"
          alt="logo GEMUKOIN"
          />
          <p className="md:text-xl text-gray-400 w-5/6 md:w-3/5 pt-5 m-auto">Elevate your gaming experience with GamuKoin. Earn, play and prosper in the world of digital rewards.</p>
        </div>
      </div>
    </section>
  )
}
