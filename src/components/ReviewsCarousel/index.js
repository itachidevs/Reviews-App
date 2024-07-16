import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {arrayIndex: 0}

  decreaseIndex = () => {
    const {arrayIndex} = this.state
    if (arrayIndex === 0) {
      this.setState({arrayIndex: 0})
    } else {
      this.setState(prevState => ({arrayIndex: prevState.arrayIndex - 1}))
    }
  }

  increaseIndex = () => {
    const {arrayIndex} = this.state
    const {reviewsList} = this.props
    if (arrayIndex === reviewsList.length - 1) {
      this.setState({arrayIndex: reviewsList.length - 1})
    } else {
      this.setState(prevState => ({arrayIndex: prevState.arrayIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    // console.log(reviewsList.length)
    const {arrayIndex} = this.state
    const profileObject = reviewsList[arrayIndex]
    const {imgUrl, username, description, companyName} = profileObject
    console.log(arrayIndex)
    return (
      <div className="container">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <div className="profile-container">
            <img className="profile" src={imgUrl} alt={username} />
            <p className="username">{username}</p>
          </div>
          <div className="arrow-container">
            <button
              className="btn"
              type="button"
              data-testid="leftArrow"
              onClick={this.decreaseIndex}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <button
              className="btn"
              type="button"
              data-testid="rightArrow"
              onClick={this.increaseIndex}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
          <p className="company">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
