import React, { Component } from "react"

export default class StoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      story: "",
      error: "",
    }
  }

  render() {
    return (
      <form onSubmit={this.submitStory}>
        <label htmlFor="story">Your story</label>
        <textarea
          name="story"
          id="story"
          cols="30"
          rows="10"
          onChange={this.onInputChange}
          value={this.state.story}
        ></textarea>
        <button type="submit">Share!</button>
      </form>
    )
  }

  submitStory = e => {
    e.preventDefault()
    console.log("submitting", this.state.story)
    const { story } = this.state
    fetch("/.netlify/functions/submit", {
      method: "POST",
      body: JSON.stringify({ story }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ story: "" })
      })
      .catch(err => {
        console.error(err)
      })
  }

  onInputChange = e => {
    const name = e.target.name
    const text = e.target.value
    this.setState({ [name]: text })
  }
}
