import React from 'react'
import FAQ from "../../components/FAQ/FAQ";
import { useState } from 'react';
import "./FAQPage.scss";

const FAQPage = () => {


    const [faqs, setFaqs] = useState([
        {
            question: "How do I find the correct SNKRDUNK product URL to use in the search bar?",
            answer: "To find the correct SNKRDUNK product URL, follow these steps: (1) Visit SNKRDUNK.com and click on the magnifying glass icon. (2) Enter the name of the card and navigate to it under the Streetwear and TCG tab. (3) Once on the card's product page, copy the URL from your web browser.",
            open: false
        },
        {
            question: "Can I use this tool to search for other types of trading cards?",
            answer: "At this time, our tool only provides search results for Pokémon cards.",
            open: false
        },
        {
            question: "Is there a fee to use this tool?",
            answer: "No, this tool is completely free to use.",
            open: false
        },
        {
            question: "What is SNKRDUNK?",
            answer: "SNKRDUNK is a website where users can buy and sell authentic sneakers and apparel.",
            open: false
        },
        {
            question: "Is SNKRDUNK safe to use?",
            answer: "SNKRDUNK employs rigorous authentication processes to prevent the sale of counterfeit products. These include expert teams, X-ray technology, and a comprehensive database of sneakers and TCG items. Please review SNKRDUNK's policies to determine if their services meet your needs.",
            open: false
        },
    ])

    const toggleFAQ = (index) => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
    }))
    } 


  return (
    <div className="faqs-page">
        <h1 className="faqs-page__header">Frequently Asked Questions</h1>
    <div className="faqs">
        {faqs.map((fag, index) => (
            <FAQ faq={fag} index={index} toggle={toggleFAQ} />
        ) )}
        
    </div>
    </div>
  )
}

export default FAQPage