const imgURL = "https://iili.io/JVmSGv1.md.png";

function Home () {

    return (
    <div className="">
       <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Yunque</span> Yunque 92.9 FM</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
    );
}

export default Home;