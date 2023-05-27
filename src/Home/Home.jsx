import './Home.css'
import '../shared/Footer/Footer.css'
import { Footer } from "../shared/Footer/Footer"
import React from "react";
import ReactPlayer from 'react-player'
import { Menu } from '../shared/Menu/Menu';

export function Home() {
    return (
        <>
            <section className="banner">

            </section>

            <section className="banner2">
                <h1>MANA: MEXICO LINDO Y QUERIDO</h1>
                <h4>COMPRA TUS ENTRADAS AQUI</h4>
                <button className='btn btn-success'>ENTRADAS</button>
            </section>

            <section>
                <ReactPlayer url='<iframe width="560" height="315" src="https://youtu.be/SBh34m-6hIg" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>'
                    width={'100%'} />
            </section>

            <div className="footer">
                <section className="">
                    <Footer></Footer>
                </section>
            </div>






        </>
    )
}
