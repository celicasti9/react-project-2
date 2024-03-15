import React, { useState } from 'react';


const imgURL = "https://iili.io/JVmSGv1.md.png";

function HomePage() {

  const [currentDay, setCurrentDay] = useState('Monday'); // Replace with dynamic logic

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


      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conoce a nuestro equipo
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestro equipo está listo para ayudarte a alcanzar esa demografica.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://scontent.fsju1-1.fna.fbcdn.net/v/t1.6435-9/117971861_10158718326894432_4805530864384379242_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5srlIWy4QPgAX9h9AM9&_nc_ht=scontent.fsju1-1.fna&oh=00_AfASZ266Didz32aXdVfMzst5_rLOGlEKl6zG5L26B1JaEA&oe=66149FF5"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Nelly Carrion
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Directora de Programación</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://scontent.fsju2-1.fna.fbcdn.net/v/t39.30808-6/385053960_746963090574407_5261593387724256772_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Dz7HK9e9tvAAX-4kXz0&_nc_ht=scontent.fsju2-1.fna&oh=00_AfBE7rub4659cWr7FJ7qB-2RDWOZnCtpBvysAxzMgSqCbg&oe=65F8BE3F"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Castillo La Cone
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Talento</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0kevQv?utm_source=generator"
        width="100%"
        height="400"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
      ></iframe>
      </div>


    </div>
  );
}

export default HomePage;
