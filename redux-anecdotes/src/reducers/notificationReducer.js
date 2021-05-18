const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case "NEW_ANECDOTE": {
    const content = action.data.content
    const message = `you created a new anecdote - '${content}'`
    return setTimeout(message, 5000)
  }

  case "VOTE": {
    const content = action.data.content
    const message = `you voted for ${content}`

    return setTimeout(message, 5000)
  }
  }

  return state
}

export const addVote = (id) => {
  return {
    type: "VOTE",
    data: { id },
  }
}
export const createAnecdote = (content) => {
  return {
    type: "NEW_ANECDOTE",
    data: { content },
  }
}

export default notificationReducer
