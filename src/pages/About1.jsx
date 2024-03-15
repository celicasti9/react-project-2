
function About1 () {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Somos una empresa de radio y telecomunicaciones netamente puertorriqueña que transmite una programación 
            diversa a través de radio. Ofreciendo contenidos especializados 
            que cubren segmentos exclusivos en industrias de crecimiento (salud, deportes, Top40, entre otras). Establecemos 
            alianzas estratégicas locales e internacionales que fortalecen nuestra oferta y servicio.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://iili.io/JVmSGv1.md.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our team</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Nuestro equipo siempre trabaja con las demograficas de mayor alcance.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-2 pb-2 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://scontent.fsju1-1.fna.fbcdn.net/v/t1.6435-9/117971861_10158718326894432_4805530864384379242_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5srlIWy4QPgAX9h9AM9&_nc_ht=scontent.fsju1-1.fna&oh=00_AfASZ266Didz32aXdVfMzst5_rLOGlEKl6zG5L26B1JaEA&oe=66149FF5" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://scontent.fsju1-1.fna.fbcdn.net/v/t1.6435-9/117971861_10158718326894432_4805530864384379242_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5srlIWy4QPgAX9h9AM9&_nc_ht=scontent.fsju1-1.fna&oh=00_AfASZ266Didz32aXdVfMzst5_rLOGlEKl6zG5L26B1JaEA&oe=66149FF5" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-2 text-gray-800 mt-2">Nelly Carrion</p>
                        </div>
                        <div className="p-2 pb-2 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/385053960_746963090574407_5261593387724256772_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Dz7HK9e9tvAAX92-FfW&_nc_ht=scontent-iad3-1.xx&oh=00_AfAoRWfwzaz4uPxS_neB5ZULEUoEjoSiSPgq7xBSPKoVVw&oe=65F97279" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/385053960_746963090574407_5261593387724256772_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Dz7HK9e9tvAAX92-FfW&_nc_ht=scontent-iad3-1.xx&oh=00_AfAoRWfwzaz4uPxS_neB5ZULEUoEjoSiSPgq7xBSPKoVVw&oe=65F97279" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-2 text-gray-800 mt-2">Castillo La Cone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;

