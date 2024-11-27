import React from "react";
import PageImg from "../PageImg";
import "./Contact.css";

function Contact({fontSize, theme}) {
    return(
        <div className="contact">
            <a href="https://www.linkedin.com/in/eliotblancolebrero/" target="_blank" rel="noopener noreferrer">
                <PageImg
                    src={`./img/linkedin.svg`}
                    fontSize={fontSize}
                    size={3}
                />
                &nbsp;LinkedIn
            </a>
            <br />
            <br />
            <br />
            <a href="https://github.com/oknalv" target="_blank" rel="noopener noreferrer">
                <PageImg
                    src={`./img/github_${theme}.svg`}
                    fontSize={fontSize}
                    size={3}
                />
                &nbsp;GitHub
            </a>
        </div>
    )
}

export default Contact;