import React from 'react';

/**
 * Renders a title component with the provided title.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to be displayed.
 * @returns {JSX.Element} The rendered title component.
 */
function TitleComponent({ title }) {
    return <h1 className="title">{title}</h1>;
}

export default TitleComponent;