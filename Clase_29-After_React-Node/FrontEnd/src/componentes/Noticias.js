import React from 'react'
import Noticia from './Noticia'

import axios from 'axios'

import './Noticias.css'
import generarNoticia from '../generador'

const URL_NOTICIAS = (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8082') + '/noticias/'

class Noticias extends React.Component {

    state = {
        noticias: [],
        idObtenerNoticia: '',
        pedidas: false
    }

    async componentDidMount() {
        //this.obtenerNoticias()
    }

    // TODO APIs
    /* ------------------------------- */
    /*           GET noticia           */
    /* ------------------------------- */
    async obtenerNoticias(_id) {
        try {
            let response = await axios.get('http://localhost:8082/noticias/' + (_id ? _id : ''))
            let { data: noticias } = response
            this.setState({ noticias: noticias ? noticias : [] })
        } catch (error) {
            console.error(error)
            this.setState({ noticias: [] })
        }
        this.setState({ pedidas: true, idObtenerNoticia: '' })
    }

    /* ------------------------------- */
    /*          POST noticia           */
    /* ------------------------------- */
    async incorporarNoticia() {
        try {
            let noticia = generarNoticia()
            console.log(noticia);

            let response = await axios.post(URL_NOTICIAS, noticia)
            let { data: noticiaIncorporada } = response
            console.log(noticiaIncorporada)

            let noticias = [...this.state.noticias]
            noticias.push(noticiaIncorporada)
            this.setState({ noticias })
        }
        catch (error) {
            console.error('incorporarNoticia', error)
        }
    }



    /* ------------------------------- */
    /*         UPDATE noticia          */
    /* ------------------------------- */
    async actualizarComoLeida(_id) {
        try {
            let { data: noticia } = await axios.put(URL_NOTICIAS + _id, { vista: true })
            console.log(noticia)
            let noticias = [...this.state.noticias]
            noticias.find(noticia => noticia._id === _id).vista = true
            this.setState({ noticias })
        }
        catch (error) {
            console.error(error)
        }
    }



    /* ------------------------------- */
    /*         DELETE noticia          */
    /* ------------------------------- */
    async borrarNoticia(_id) {
        try {
            let { data: noticia } = await axios.delete(URL_NOTICIAS + _id)
            console.log(noticia)

            let noticias = [...this.state.noticias]
            let index = noticias.findIndex(noticia => noticia._id === _id)

            noticias.splice(index, 1)
            this.setState({ noticias })
        }
        catch (error) {
            console.error('borrarNoticia', error)
        }
    }





    render() {
        let { noticias, idObtenerNoticia, pedidas } = this.state
        return (
            <div className="Noticias">
                <div className="container mt-3">
                    <div className="jumbotron">
                        <h1>Mis Noticias - API REST Full</h1>
                        <hr />

                        {/* ---------------- */}
                        {/* Obtener noticias */}
                        {/* ---------------- */}
                        <button className="btn btn-info my-3 float-left" onClick={
                            () => this.obtenerNoticias(idObtenerNoticia)}
                        ><i className="fas fa-file-alt"> Obtener</i></button>

                        <input value={idObtenerNoticia} className="mt-3 ml-1 form-control w-25 float-left" onChange={
                            e => this.setState({ idObtenerNoticia: e.target.value })
                        } placeholder="todas ó ingrese ID" type="text" />

                        {/* ------------- */}
                        {/* Crear noticia */}
                        {/* ------------- */}
                        <button className="btn btn-success my-3 float-right" onClick={
                            () => this.incorporarNoticia()}
                        ><i className="fas fa-envelope-open-text"> Generar</i></button>

                        <div className="clearfix" />

                        {/* Cartel de no hay noticias */}
                        {
                            !noticias.length && pedidas &&
                            <h3 className="alert alert-danger">
                                No hay noticias para mostrar
                            </h3>
                        }

                        {/* Representación de las noticias */}
                        {
                            noticias.map((noticia, index) => {
                                return (
                                    <Noticia
                                        noticia={noticia}
                                        index={index}
                                        marcarLeida={_id => this.actualizarComoLeida(_id)}
                                        borrar={_id => this.borrarNoticia(_id)}
                                        key={noticia._id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Noticias