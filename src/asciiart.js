import React, { useEffect, useState } from 'react';

function Asciiart(){
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const loadHtml = async () => {
            try {
                const response = await fetch('/kanna.html');
                if (!response.ok) throw new Error('Network response was not ok');
                const text = await response.text();
                setHtmlContent(text);
            } catch (error) {
                console.error('Error fetching HTML:', error);
            }
        };

        loadHtml();
    }, []);
    return(
        <div className = "kanna" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
}
export default Asciiart;