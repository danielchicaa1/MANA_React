import React from "react";
import { Footer } from "../src/shared/Footer/Footer";
import '../src/shared/Footer/Footer.css'
import '../Tienda/Tienda.css'
export function Tienda() {
    return (
        <>
            <section className="bannerTienda">

            </section>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                        <div className="card">
                            <div className="camiseta1">
                                <img src="https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/CamisetaMana.webp?alt=media&token=93a20f65-b517-400b-90e9-3d8db4776651" alt="Camiseta1" />
                                <h1 className="titulo text-center">
                                    Camiseta MANA
                                </h1>
                                <h2 className="precio text-center">
                                    $15
                                </h2>
                                <p className="descripcion">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est assumenda rem explicabo impedit cupiditate quasi unde ipsam. Corporis culpa doloribus ducimus reprehenderit officiis quidem amet neque quasi fuga exercitationem?
                                </p>
                                <div className="text-center">
                                    <button className="btn btn-success">Comprar</button>
                                </div>

                            </div>
                            
                            <div className="camiseta2">
                                <img src="https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/CamisetaMana2.webp?alt=media&token=5492f99e-d2d4-4aaf-86a8-f2d41e0fc90b" alt="Camiseta2" />
                                <h1 className="titulo text-center">
                                    Rayando el sol poster
                                </h1>
                                <h2 className="precio text-center">
                                    $12
                                </h2>
                                <p className="descripcion">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est assumenda rem explicabo impedit cupiditate quasi unde ipsam. Corporis culpa doloribus ducimus reprehenderit officiis quidem amet neque quasi fuga exercitationem?
                                </p>
                                <div className="text-center">
                                    <button className="btn btn-success">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <section>
                <Footer></Footer>
            </section>

        </>
    )


}