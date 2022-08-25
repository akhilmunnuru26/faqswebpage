import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickExpandIcon = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="faq-question-box">
          <h1 className="question">{questionText}</h1>
          <button
            onClick={this.onClickExpandIcon}
            type="button"
            className="button"
          >
            <img src={imgUrl} alt={altText} className="icons" />
          </button>
        </div>
        {isActive ? (
          <div className="faq-answer-box">
            <p className="answer-text">{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
