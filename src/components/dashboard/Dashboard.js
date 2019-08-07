import React, { Component } from 'react'
import IdeaList from '../idea/IdeaList'
import IdeaLinks from '../idea/IdeaLinks'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        const { ideas } = this.props;
        return (
            <div className="dashboard">
                <div>
                <div className="row">
                    <div className="col s12 m12">
                        <IdeaLinks/>
                    </div>
                </div>
                <div className="innerDashboard">
                    <IdeaList ideas={ideas}/>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ideas: state.firestore.ordered.ideias
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'ideias'}
    ])
)(Dashboard);