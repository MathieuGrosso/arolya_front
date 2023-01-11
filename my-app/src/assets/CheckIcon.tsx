export default function CheckIcon(props: CheckIconProps) {
  return (
    <div className="w-5 h-5 top-0 absolute left-[551px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="10" fill="#F2F4F7" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 14.247 6.158 L 8.28 11.917 L 6.697 10.225 C 6.405 9.95 5.947 9.933 5.614 10.167 C 5.289 10.408 5.197 10.833 5.397 11.175 L 7.272 14.225 C 7.455 14.508 7.772 14.683 8.13 14.683 C 8.472 14.683 8.797 14.508 8.98 14.225 C 9.28 13.833 15.005 7.008 15.005 7.008 C 15.755 6.242 14.847 5.567 14.247 6.15 V 6.158 Z"
          fill="#667085"
         />
      </svg>
    </div>
  );
}

CheckIcon.defaultProps = {};

interface CheckIconProps {}

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
