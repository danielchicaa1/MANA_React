import { Footer } from "../shared/Footer/Footer"
import '../shared/Footer/Footer.css'
import { Menu } from "../shared/Menu/Menu"
export function Members() {

    let integrantes = [
        {
            nombre: "Fernando Olvera",
            rol: "Guitarra acustica",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/Fernando%20Olvera.jpg?alt=media&token=7de7d957-fffc-42af-963b-4ba82c80b1c1",
            nacimiento: "Guadalajara, Jalisco,​ 8 de diciembre de 1959",
            id:1
        },
        {
            nombre: "Sergio Vallin",
            rol: "Guitarra electrica",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/Sergio%20Vallin.jpg?alt=media&token=90799629-99c6-4226-bd4d-711e9a0088e1",
            nacimiento: "Ciudad de México, 26 de mayo de 1972",
            id:2
        },
        {
            nombre: "Alejandro Gonzalez",
            rol: "Bateria",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/Battery.jpg?alt=media&token=890dbc4a-5422-45e6-929b-69bae1b07864",
            nacimiento: "Miami, Florida, Estados Unidos, 24 de febrero de 1969",
            id:3
        },
        {
            nombre: "Juan Calleros",
            rol: "Bajo electrico",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/Juan%20Calleros.jpg?alt=media&token=00d9e8aa-a3c5-494f-8233-00ef1d3611cc",
            nacimiento: "Guadalajara, 19 de abril de 1962",
            id:4
        }]

    return (
        <>

        

            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    integrantes.map(function (integrante) {
                        return (
                            <div key={integrante.id}>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                                        <img src={integrante.foto} alt="foto" className="img-fluid w-100 h-100" />
                                        <h3 className="text-center mt-3">Rol : {integrante.rol}</h3>
                                        <h3 className="text-center">Nacimiento: {integrante.nacimiento}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <section className="Footer">
                <Footer></Footer>
            </section>
        </>
    )
}