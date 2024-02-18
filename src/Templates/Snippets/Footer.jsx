import "bootstrap/dist/css/bootstrap.min.css"


const Footer =()=>{


    return(

        <footer className="page-footer bg-dark pt-2">
            <div className="container  text-center text-md-left ">

                    <ul className="d-flex gap-5 list-unstyled  text-dark justify-content-center align-items-center">
                        <h5 className="m-0 text-light-emphasis">MoviesOnline</h5>
                        <li>
                            <a href="#home" className="text-decoration-none link-light link-opacity-50-hover">Home</a>
                        </li>
                        <li>
                            <a href="#trending" className="text-decoration-none link-light link-opacity-50-hover">Trending Movies</a>
                        </li>
                        <li>
                            <a href="#about" className="text-decoration-none link-light link-opacity-50-hover">About</a>
                        </li>
                    </ul>
                    <div className="text-dark page-item p-2 text-light-emphasis">
                        <p>copyright @ www.moviesonline.com 2024</p>
                    </div>
            </div>


        </footer>
    )
}


export default Footer;