const initState = {
    
}

const ideaReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_IDEA':
            console.log('created idea', action.idea);
            return state;
        case 'CREATE_IDEA_ERROR':
            console.log('create idea error', action.error);
            return state;
        default:
            return state;
    }
}

export default ideaReducer