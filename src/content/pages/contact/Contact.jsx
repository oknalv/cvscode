import React, { useContext } from "react";
import PageImg from "../PageImg";
import "./Contact.css";
import DataContext from "../../..";

function Contact({fontSize, theme}) {
    const contact = useContext(DataContext).contact
    return(
        <div className="contact">
            {
                contact.map((c, i) => {
                    return(
                        <div key={`contact-${c.page}`}>
                            <a href={c.link} target="_blank" rel="noopener noreferrer">
                                <PageImg
                                    src={`./img/${c.page}${c.themed ? `_${theme}`: ""}.svg`}
                                    fontSize={fontSize}
                                    size={3}
                                />
                                &nbsp;{c.name}
                            </a>
                            {
                                i < contact.length - 1 && <><br /><br /><br /></>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Contact;