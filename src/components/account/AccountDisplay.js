import React, { Component } from 'react'
import profile from '../../img/profile.jpg'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import AccountSummary from './AccountSummary'
import AccountList from './AccountIdeas'
import { Redirect } from 'react-router-dom'

class AccountDisplay extends Component {
    render() {
        const { account, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />;
        return (

            <div className="container">
                 <div className="row account">
                <div className="col s12 m12 l4">
                    <img className="circle profile-pic" alt="" src={profile} width="70%"/>
                </div>
                <div className="col s12 m12 l5 offset-m2">
                    
                </div>
                </div>
                <div className="col s12 m12">
                <div className="col s12 m12">
                    
                </div>
                </div>
                
               
            </div>
        )
    }
}
    


const mapStateToProps = (state) => {
    return {
        account : state.firestore.ordered.ideias,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'ideias'}
    ]))(AccountDisplay);