import React from "react";
import "./PageImg.css";

function PageImg({fontSize, size, src}) {
    const imgHeight = fontSize[1] * size;
    const imgPadding = fontSize[0] - (imgHeight % fontSize[0]);
    const imageUrl = new URL(src, import.meta.url).href;
    return(
        <img
            className="page-img"
            src={imageUrl}
            style={{
                padding: `0 ${imgPadding / 2}px`,
                height: `${imgHeight}px`
            }}
        />
    )
}

export default PageImg;