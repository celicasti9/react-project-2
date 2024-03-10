const imgURL = "https://iili.io/JVmSGv1.md.png";

function Home () {

    return (
      <div className="grid grid-cols-3 gap-2 mt-7">
      <h1 className="mb-4 text-3xl font-extrabold text-black-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-orange-400 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          Yunque
        </span> 92.9 FM
      </h1>
      <img src={imgURL} alt="home gif" className="justify-center" />
      <iframe
        title="Radio Player"
        src="https://tunein.com/embed/player/s24240/"
        style={{ width: '100%', height: '100px' }}
      ></iframe>
    </div>
    );
}

export default Home;