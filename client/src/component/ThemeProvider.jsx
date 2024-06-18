import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function ThemeProvider({ children }) {
  const currTheme = useSelector((state) => state.theme.currTheme);
  console.log(currTheme);

  return (
    <div className={currTheme}>
      <div className="bg-white text-gray-700 dark:text-gray-500 dark:bg-[#0d1225] min-h-screen">
        {children}
      </div>
    </div>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
