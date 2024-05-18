import React from 'react';


/**
 * Renders a question and its corresponding answer.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.question - The question to be displayed.
 * @param {string} props.answer - The answer to the question.
 * @returns {JSX.Element} The rendered QuestionComponent.
 */
const QuestionComponent = ({ question, answer }) => {
    return (
        <div className="FAQcontainer">
            <h2 className="question">{question}</h2>
            <p className="answer">{answer}</p>
        </div>
    );
};

export default QuestionComponent;
