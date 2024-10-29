import React from "react";

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4x1 font-bold mb-8 text-gray-800">
                    Mari belajar tentang Seni
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-rose-700">Apa itu Seni?</h3>
                        <p className="text-gray-700 mb-4">
                        Seni merupakan sebuah karya manusia yang merupakan ekspresi atau ungkapan dalam diri dengan melalui bentuk audio, visual dan sastra
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-550 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-rose-700">5 Seniman Terkenal di Dunia</h3>
                        <p className="text-gray-700 mb-4 text-left">
                            <li>Leonardo da Vinci</li>
                            <li>Michelangelo</li>
                            <li>Pablo Picasso</li>
                            <li>Vincent van Gogh</li>
                            <li>Claude Monet</li>
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-rose-700">5 Galeri Seni Terbaik di Dunia</h3>
                        <p className="text-gray-700 mb-4 text-left">
                            <li>Museum Louvre, Paris, Prancis</li>
                            <li>Metropolitan Museum of Art, New York, Amerika Serikat</li>
                            <li>The British Museum, London, Inggris</li>
                            <li>Uffizi Gallery, Florence, Italia</li>
                            <li>National Gallery, London, Inggris</li>
                        </p>
                    </div>
                </div>
                <p className="text-lg text-gray-600 mt-8">
                  Experience the cutting edge of contemporary art at our online gallery.
                </p>
            </div>
        </section>
    )
}

export default Blog;