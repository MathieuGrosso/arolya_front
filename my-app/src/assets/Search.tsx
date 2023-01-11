export default function Search(props: SearchProps) {
  return (
    <div className="w-5 h-5">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 17.5 17.5 L 13.875 13.875 M 15.833 9.167 C 15.833 12.849 12.849 15.833 9.167 15.833 C 5.485 15.833 2.5 12.849 2.5 9.167 C 2.5 5.485 5.485 2.5 9.167 2.5 C 12.849 2.5 15.833 5.485 15.833 9.167 Z"
          stroke="#667085"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
      </svg>
    </div>
  );
}

Search.defaultProps = {};

interface SearchProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
