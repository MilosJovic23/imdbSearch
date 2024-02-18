import "bootstrap/dist/css/bootstrap.min.css"


const Footer =()=>{


    return(

        <footer className="page-footer bg-dark-subtle pt-2">
            <div className="container  text-center text-md-left ">

                    <ul className="d-flex gap-5 list-unstyled  text-dark justify-content-center align-items-center">
                        <h5 className="m-0">MoviesOnline</h5>
                        <li>
                            <a href="#home" className="text-decoration-none text-light-emphasis">Home</a>
                        </li>
                        <li>
                            <a href="#About" className="text-decoration-none text-light-emphasis">Trending Movies</a>
                        </li>
                        <li>
                            <a href="#Tranding" className="text-decoration-none text-light-emphasis">About</a>
                        </li>
                    </ul>
                    <div className="text-dark page-item p-2">
                        <h6>copyright@www.moviesonline.com</h6>
                    </div>
            </div>


        </footer>
    )
}


export default Footer;