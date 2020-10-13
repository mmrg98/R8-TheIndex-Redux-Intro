
export const addAuthor  = () => {
    return {
        type: "ADD_AUTHOR",
    }
}

export const deleteAuthor = (author) => {
    return {
        type: "DELETE_AUTHOR" ,
        payload: author,
    }
}