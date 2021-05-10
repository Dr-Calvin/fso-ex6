/* eslint-disable react/prop-types */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state)

  return (
    <div>
      {anecdotes
        .sort((a, b) => (a.votes > b.votes ? 1 : b.votes > a.votes ? -1 : 0))
        .map((anecdote) => {
          return (
            <Anecdote
              key={anecdote.id}
              anecdote={anecdote}
              handleClick={() => dispatch(addVote(anecdote.id))}
            />
          )
        })}
    </div>
  )
}

export default AnecdoteList
