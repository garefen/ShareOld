import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createIdea } from '../../store/actions/ideaActions'
import M from "materialize-css"

class CreateIdea extends Component {
    state = {
        titulo: '',
        texto:'',
        descricao: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createIdea(this.state);
    }
    componentDidMount() { // nao funciona ainda
        M.AutoInit();
        // $(document).ready(function() {
        //     $('input#input_text, textarea#textarea2').characterCounter();
        // });
        var elems = document.querySelectorAll('input#input_text, textarea#textarea2');
        var instances = M.CharacterCounter.init(elems, {});
    }
    render() {

        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />;
        

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h4 className="grey-text text-darken-3 pulse">Compartilhe sua ideia</h4>
                    <div className="input-field">
                        <label htmlFor="titulo">Título</label>
                        <input autoComplete="off" type="text" id="titulo" data-length="10" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="texto">Texto</label>
                        <textarea type="text" id="texto" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    {/* <div className="input-field">
                        <label htmlFor="texto">Breve Descrição</label>
                        <textarea type="text" id="descricao" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div> */}
                    <div className="input-field">
                        <button className="btn green waves-effect waves-light lighten-1 z-depth-0">Compartilhar</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createIdea: (idea) => dispatch(createIdea(idea))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateIdea)