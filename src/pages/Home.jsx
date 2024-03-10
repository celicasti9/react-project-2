const imgURL = "https://iili.io/JVmSGv1.md.png";

function Home () {

    return (
      <div>
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

      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-top">
                <span className="top-title">Yunque 92.9 FM</span>
                <h2 className="section-title"></h2>
              </div>
            </div>
          </div>

          <ul className="nav nav-tabs show-tabs rounded shadow-lg" id="myTab" role="tablist">
            {/* ... Tabs for each day */}
          </ul>

          <div className="tab-content show-tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="day1-tab-pane" role="tabpanel" aria-labelledby="day1-tab" tabindex="0">
              {/* ... Podcast slides for Day 1 */}
            </div>
            {/* ... Repeat similar structure for other days */}
          </div>

          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0kevQv?utm_source=generator"
            width="100%"
            height="352"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>

    
    
    );
}

export default Home;