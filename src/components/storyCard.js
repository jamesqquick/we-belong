import React from "react"

export default function storyCard({ story }) {
  return (
    <div className="card">
      <p>{story.content}</p>
    </div>
  )
}
