import PropTypes from "prop-types";

TextShrink.propTypes = {
  children: PropTypes.string,
  wordlength: PropTypes.number,
  style: PropTypes.string,
};

function TextShrink({ children, wordlength, style }) {
  return (
    <p className={`inline ${style}`}>
      {children.split(" ").slice(0, wordlength).join(" ") +
        (children.split(" ").length >= 10 ? "..." : "")}
    </p>
  );
}

export default TextShrink;
