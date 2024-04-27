import './Noticia.css'

function Noticia(props) {
    let { noticia, marcarLeida,borrar,index } = props
    return (
        <div className="Noticia" style={{opacity: noticia.vista? '0.5': '1'}}>
            <div className="media alert alert-primary my-4">
                <img src={noticia.imagen} style={{width:'350px', borderRadius:'15px'}}  alt={noticia.title} />
                <div className="media-body ml-4">

                    {/* ------------- */}
                    {/* Botón de leer */}
                    {/* ------------- */}
                    <button className="btn btn-warning float-right" onClick={ 
                        () => marcarLeida(noticia._id)}><i className="fab fa-readme"> Leida</i></button>

                    {/* --------------- */}
                    {/* Botón de borrar */}
                    {/* --------------- */}
                    <button className="btn btn-danger float-left" onClick={ 
                        () => borrar(noticia._id)}
                    ><i className="far fa-trash-alt"> Borrar</i></button>

                    {/* --------------------------- */}
                    {/* Represntación de la noticia */}
                    {/* --------------------------- */}
                    <h3 className="text-center font-italic text-uppercase"><u>Noticia Nro. {index+1}</u></h3>
                    <br />
                    <h3>{noticia.titulo}</h3>
                    <p><i>{noticia.cuerpo}</i></p>
                    <p><b>{noticia.autor}</b></p>
                    <p><b><i>{noticia.email}</i></b></p>
                    <p><b>ID: </b><i>{noticia._id}</i></p>
                </div>
            </div>
        </div>
    )
}

export default Noticia