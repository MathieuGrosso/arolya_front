import _BadgeBase from "./_BadgeBase";

export default function Badge(props: BadgeProps) {
  return (
    <>
      <div className="w-8">
        {props.type === "LG_FALSE_GRAY_TYPE" && (
          <_BadgeBase text="1" />
        )}
        {props.type === "LG_FALSE_GRAY_TYPE1" && (
          <_BadgeBase text="2" />
        )}
      </div>
    </>
  );
}

Badge.defaultProps = {
  type: "LG_FALSE_GRAY_TYPE",
};

interface BadgeProps {
  type: "LG_FALSE_GRAY_TYPE" | "LG_FALSE_GRAY_TYPE1";
}

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
