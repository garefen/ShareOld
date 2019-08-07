import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import M from "materialize-css"
import { Link } from 'react-router-dom'

const IdeaDetail = (props) => {
    const ideia = props.ideia;
    
    useEffect(()=>{
        M.AutoInit();
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.tooltipped');
            var instances = M.Tooltip.init(elems, {});
        });
   
    });

    if (ideia){
        return (
            <div className="container section idea-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <h3 className="titulo">{ideia.titulo}</h3>
                        <p className="flow-text">{ideia.texto}</p>
                    </div>
                    <div className="card-action lighten-4 grey-text">
                        <div><Link className="green-text" to="/account">Publicado por Gabriel Sarti</Link></div>
                        <div>23 de Janeiro de 2019</div>
                    </div>
                </div>
                <div className="fixed-action-btn">
                    <a className="waves-effect waves-light btn-floating btn-large green"> 
                    {ideia.luzes}
                    {/* <i className="large material-icons"></i> */}
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <p>Carregando Ideia...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const ideias = state.firestore.data.ideias;
    const ideia = ideias ? ideias[id] : null
    return {
        ideia: ideia
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'ideias'
        }
    ])
)(IdeaDetail)
