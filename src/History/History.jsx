import { Footer } from "../shared/Footer/Footer"
import '../shared/Footer/Footer.css'
export function History() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/sl4.jpeg?alt=media&token=63b6a63b-f4fa-4e8f-a1de-a8669e004e5a" class="img-fluid d-block w-100" alt="foto1" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Origenes</h5>
                    <p>Los orígenes de Maná se remontan a un grupo musical llamado Sombrero Verde.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/sliderb2.jpg?alt=media&token=09413ec1-c75a-4e48-9108-5923059c0d2f" class="img-fluid d-block w-100" alt="foto2" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Maná en vivo</h5>
                    <p>Con su nuevo y bien merecido estatus en la escena del rock pop latino internacional.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/sl3.webp?alt=media&token=bd26662c-c52a-431d-b5ef-7f28b8e28bba" class="img-fluid d-block w-100" alt="foto3" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Drama y luz</h5>
                    <p>Drama y luz representa un hito en la trayectoria artística de Maná.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-targeNamet="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    
      <section className="Footer">
      <Footer></Footer>
      </section>
    </>
  )

}