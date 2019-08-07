export const createIdea = (idea) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('ideias').add({ 
            ...idea,
            luzes: 0,
            data: new Date()
         }).then(() => {
            dispatch({type: 'CREATE_IDEA', idea});
         }).catch((err) => {
            dispatch({type: 'CREATE_IDEA_ERROR', err});
         })
    }
}; 