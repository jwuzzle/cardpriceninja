import { useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {

  const navigate = useNavigate();

const gotoFAQs = () => {
navigate("/faq");
}

  return (
    <div className="footer">
        <div className="footer__copyright">
            <p className="footer__copyright--text">© Copyright 2024. All rights reserved. CardPriceNinja.</p>
            <p className="footer__copyright--text">Need help? Check out the FAQs <button className="footer__faq-button" onClick={gotoFAQs}>here</button>.</p>
        </div>
    </div>
  )
}

export default Footer