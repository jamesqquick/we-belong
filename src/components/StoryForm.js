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
      <div className="card">
        <form onSubmit={this.submitStory}>
          <label htmlFor="story">Your story</label>
          <textarea
            name="story"
            id="story"
            rows="5"
            onChange={this.onInputChange}
            value={this.state.story}
            placeholder="Share you imposter syndrome story to help others feel at ease!"
          ></textarea>
          <button type="submit">HELP OTHERS!</button>
        </form>
      </div>
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
