export default function Delete(props: DeleteProps) {
  return (
    <div>
      <div className="w-6 h-6 absolute left-[153px] top-[188px]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 18 9 L 12 15 M 12 9 L 18 15 M 21 4 H 8 L 1 12 L 8 20 H 21 C 21.53 20 22.039 19.789 22.414 19.414 C 22.789 19.039 23 18.53 23 18 V 6 C 23 5.47 22.789 4.961 22.414 4.586 C 22.039 4.211 21.53 4 21 4 Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
        </svg>
      </div>
    </div>
  );
}

Delete.defaultProps = {};

interface DeleteProps {}

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
