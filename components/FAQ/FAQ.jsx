import React from 'react'
import "./FAQ.scss";

const FAQ = ({faq, index, toggle}) => {
  return (
    <div className={"faq " + (faq.open ? 'open' : '')}
    key={index}
    onClick={() => toggle(index)}
    >
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">{faq.answer}</div>
        </div>
  )
}

export default FAQ