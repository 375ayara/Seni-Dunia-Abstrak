import React from "react";
import gallery from '../asset/gallery.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 style={{ 'bg-white' }}>">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">Tentang Dunia Abstrak</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center">
                        <img src={gallery} alt="img" className="w-70 h-auto object-cover rounded"/>
                    <div className="ml-4 max-w-lg">
                        <h3 className="text-left text-2xl text-amber-950 font-bold">Dunia Abstrak</h3>
                        <p className="text-black text-left mt-2 whitespace-nowrap">Dunia Abstrak adalah galeri online yang didedikasikan untuk memperkaya kehidupan Anda melalui<br />
                            keindahan seni abstrak. Kami percaya bahwa seni memiliki kekuatan untuk menginspirasi, menghibur<br />
                            dan menghubungkan kita semua. Dengan kurasi yang cermat, kami menghadirkan karya-karya terbaik<br />
                            dari seniman-seniman berbakat yang berani bereksperimen dengan warna, bentuk, dan tekstur.<br />
                            Jelajahi galeri seni kami dan temukan karya yang berbicara langsung kepada jiwa Anda.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;