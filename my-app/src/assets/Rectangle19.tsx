export default function Rectangle19(props: Rectangle19Props) {
  return (
    <div className="flex-1">
      <div className="flex-1 relative w-[213px] h-[49px] drop-shadow-lg">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 213 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_544_24550)">
            <path
              d="M 3 23.5 C 3 12.178 12.178 3 23.5 3 H 187.5 C 198.822 3 208 12.178 208 23.5 C 208 34.822 198.822 44 187.5 44 H 23.5 C 12.178 44 3 34.822 3 23.5 Z"
              fill="#4E944F"
              fillOpacity="0.8"
              shapeRendering="crispEdges"
             />
          </g>
          <defs>
            <filter
              id="filter0_d_544_24550"
              x="0"
              y="0"
              width="213"
              height="49"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
               />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
               />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
               />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_544_24550"
               />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_544_24550"
                result="shape"
               />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

Rectangle19.defaultProps = {};

interface Rectangle19Props {}

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
