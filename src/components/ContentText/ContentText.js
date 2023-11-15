import React from 'react';
import './ContentText.scss';

function ContentText({numbertoprint, title, content, isDark}) {
  return (
    <div className={isDark?"section-text container dark": "section-text container"}>
        <h2 className="numbers">{numbertoprint}</h2>
        <h5 className="title">{title}</h5>
        <p className="content">
            {content}
        </p>
    </div>
  );
}

export default ContentText;
