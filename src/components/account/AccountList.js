import React from 'react'
import AccountIdea from './AccountIdeas'

const IdeaList = ({ideas}) => {
    return (
        <div className="idea-list section">
            { ideas && ideas.map(idea => {
                return (
                    <AccountIdea idea={idea} key={idea.id} />
                )
            })}
        </div>
    )
}

export default IdeaList