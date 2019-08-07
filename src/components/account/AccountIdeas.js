import React, {useEffect} from 'react'
import img from '../../img/leaves.jpg'
import { Link } from 'react-router-dom'
import M from "materialize-css"

const AccountIdea = ({idea}) => {
  
    useEffect(()=>{
      M.AutoInit();
      document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.tooltipped');
          var instances = M.Tooltip.init(elems, {});
      });

    })
    return (
        // <div className="card z-depth-0 idea-summary">
        //     <div className="card-content grey-text text-darken-3">
        //         <span className="card-title">{idea.titulo}</span>
        //         <p>Posted by Gabriel Sarti</p>
        //         <p className="grey-text">03 de Janeiro de 2019</p>
        //     </div> 
        // </div>
        // <div class="row">
        <div className="col s12 m3">
          <div className="card hoverable">
            <div className="card-image">
              <img src={img}/>
              <Link to={"/idea/" + idea.id} className="card-title">{idea.titulo}</Link>
              <Link to="/" className="pointer btn-floating btn-large halfway-fab waves-effect waves-light green tooltiped" data-position="top" data-tooltip="I am a tooltip"><i className="large material-icons">lightbulb_outline</i></Link>
            </div>
            <div className="card-content">
              <p>{idea.descricao}</p>
            </div>
          </div>
        </div>
    //   </div>
    )
}

export default AccountIdea