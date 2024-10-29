import React from "react";
import starrynight from '../asset/starrynight.jpg';
import lastsupper from '../asset/lastsupper.jpg';
import girlpear from '../asset/girlpear.jpg';
import greyblack from '../asset/greyblack.jpg';
import cafe from '../asset/cafe.jpg';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto  text-center">
                <h2 className="text-2x1 font-bold mb-8">Let's discuss 5 of the most famous paintings in the world</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                    <img src={starrynight} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-2x1 font-bold mn-4">The Starry Night</h3>
                    <p className="text-gray-700">Vincent van Gogh (1889) </p>
                    <a href="https://id.wikipedia.org/wiki/Malam_Berbintang" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">klik selengkapnya</a>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                    <img src={lastsupper} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-2x1 font-bold mn-4">The Last Supper</h3>
                    <p className="text-gray-700">Leonardo da Vinci (1495-1498)</p>
                    <a href="https://id.wikipedia.org/wiki/Perjamuan_Terakhir_(Leonardo)" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">klik selengkapnya</a>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                    <img src={girlpear} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-2x1 font-bold mn-4">Girl with a Pearl Earring</h3>
                    <p className="text-gray-700">Johannes Vermeer (1665)</p>
                    <a href="https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">klik selengkapnya</a>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                    <img src={greyblack} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-2x1 font-bold mn-4">Arrangement in Grey and Black No. 1</h3>
                    <p className="text-gray-700">James Abbott McNeill Whistler (1871)</p>
                    <a href="https://en.wikipedia.org/wiki/Whistler%27s_Mother" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">klik selengkapnya</a>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                    <img src={cafe} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-2x1 font-bold mn-4">Café Terrace Of Night</h3>
                    <p className="text-gray-700">Vincent Van Gogh (1888)</p>
                    <a href="https://id.wikipedia.org/wiki/Teras_Kaf%C3%A9_pada_Malam_Hari" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">klik selengkapnya</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects;