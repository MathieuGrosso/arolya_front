export default function _BadgeBase(props: _BadgeBaseProps) {
  return (
    <>
      <div
        className={`px-3 py-1 w-8 bg-black inline-flex justify-center items-center rounded-2xl text-white text-center font-medium font-['Lexend']`}
      >
        <p className="text-sm leading-5 m-0">{props.text}</p>
      </div>
    </>
  );
}

_BadgeBase.defaultProps = {
  text: "1",
};

interface _BadgeBaseProps {
  text: string;
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
