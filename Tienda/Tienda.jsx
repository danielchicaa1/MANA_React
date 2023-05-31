import React from "react";
import { Footer } from "../src/shared/Footer/Footer";
import '../src/shared/Footer/Footer.css'
import '../Tienda/Tienda.css'
export function Tienda() {

    const productos = [
        {
            id: 1,
            foto: "https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/CamisetaMana.webp?alt=media&token=93a20f65-b517-400b-90e9-3d8db4776651",
            nombre: "Camiseta MANA",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est assumenda rem explicabo impedit cupiditate quasi unde ipsam. ?",
            precio: "50"
        },
        {
            id: 2,
            foto: "https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/CamisetaMana2.webp?alt=media&token=5492f99e-d2d4-4aaf-86a8-f2d41e0fc90b",
            nombre: "Rayando el sol poster",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est assumenda rem explicabo impedit cupiditate quasi unde ipsam. ",
            precio: "12"
        },
        {
            id: 3,
            foto: "https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/CamisetaMana2.webp?alt=media&token=5492f99e-d2d4-4aaf-86a8-f2d41e0fc90b",
            nombre: "Camiseta Shattered LS",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est assumenda rem explicabo impedit cupiditate quasi unde ipsam. ?",
            precio: "35"
        },
        {
            id: 4,
            foto: "https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/CamisetaMana2.webp?alt=media&token=5492f99e-d2d4-4aaf-86a8-f2d41e0fc90b",
            nombre: "Encendedor Def Leppard",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est assumenda rem explicabo impedit cupiditate quasi unde ipsam. ?",
            precio: "20"
        },
        
    ]

    const productosCards = productos.map( producto =>
        <div className={"card bg-dark"} key={producto.id}>
            <img src={producto.foto} className={"card-img-top"} alt={producto.nombre}/>
            <div className="card-body text-bg-dark">
                <h4 className="card-title my-2 border-danger-subtle">{ "$" + producto.precio}</h4>
                <h5 className="card-subtitle text-capitalize my-2 text-info">{producto.nombre}</h5>
                <p className="card-text my-2">{producto.descripcion}</p>
            </div>
        </div>
    )


    return (
        <>
            <section className="bannerTienda">
            <div className={"row gap-3 justify-content-center"}>
                {productosCards}
            </div>
            </section>

            
            

            <section>
                <Footer></Footer>
            </section>

        </>
    )


}