// Write your code here.
import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faqs-bg-container">
      <div className="app-container">
        <h1 className="app-name">FAQs</h1>
        <ul className="faq-list-container">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
