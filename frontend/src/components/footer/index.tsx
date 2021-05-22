const Footer = () =>{
    return(
        <footer className="footer mt-auto py-3 bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-grey"><span><i className="bi bi-whatsapp"></i></span>&nbsp;<span>(11) 942597646</span></h2>
                        <hr className="text-light"></hr>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <h5 className="text-grey">Sobre</h5>
                   </div>
                   <div className="col">  
                        <h5 className="text-grey">Redes sociais</h5>   
                   </div>
                   <div className="col">  
                        <h5 className="text-grey">Missão</h5>
                   </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <p className="text-light">
                            <span>AKA SYSTEM &reg;</span>
                            <br></br>
                            <span><label><i className="bi bi-person"></i>&nbsp;<small>CEO Lucas Rodrigues</small></label></span>
                        </p>
                    </div>
                    <div className="col">
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <a className="btn btn-outline-light" href="https://github.com/lucasrodrigues19" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                            <a className="btn btn-outline-light" href="https://instagram.com/lucas_pereira.20" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                            <a className="btn btn-outline-light" href=" https://www.linkedin.com/in/lucas-rodrigues-521060191/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col">
                        <p className="text-light"><small><strong>Simplificar seu trabalho!</strong></small></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;