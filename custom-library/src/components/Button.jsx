import React from "https://esm.sh/react@18.2.0?dev"
/**
 * Renders a basic button component.
 *
 * @param {object} props - The props object containing the following properties:
 *   @param {string} Text: The text to display on the button.
 *   @param {function} onClick: The callback function to be called when the button is clicked. Defaults to an empty function.
 * @returns {JSX.Element} The rendered button component.
 */
export const BasicButton = ({text, onClick = () => {}}) => {
  return (
      <button onClick={() => onClick()}>{text}</button>
  );
}