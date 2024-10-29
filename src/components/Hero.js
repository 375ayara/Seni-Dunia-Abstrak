import React from "react";
import seni2 from '../asset/seni2.jpg'

const Home = () => {
    return (
        <section id="home" className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: `url(${seni2})`}}
        >
            <div className="bg-black bg-opacity-30 h-full flex flex-col justify-center items-center text-center p-32">
                <h2 className="text-5xl font-bold text-center mb-5">Dunia Abstrak</h2>
                <p className="text 3xl font-semibold mb-8">Selamat datang di dunia imajinasi tanpa batas. Jelajahi beragam karya seni yang akan menginspirasi jiwa Anda.</p>
                <a href="#projects" className="bg-rose-700 hover:bg-rosse-500 text-white font-bold py-2 px-6 rounded-lg shadow-lgn transition duration-300">
                    Gallery 
                </a>
            </div>

        </section>
    )
}

export default Home; 