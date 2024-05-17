import React from 'react';

const QuestionComponent = ({ question, answer }) => {
    return (
        <div className="FAQcontainer">
            <h2 className="question">{question}</h2>
            <p className="answer">{answer}</p>
        </div>
    );
};

export default QuestionComponent;
