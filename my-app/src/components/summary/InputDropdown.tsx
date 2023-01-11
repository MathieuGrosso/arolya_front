import _InputDropdownBase from "./_InputDropdownBase"

export default function InputDropdown(props: InputDropdownProps) {
  return (
    <div className="w-80 h-11 relative">
      <_InputDropdownBase />
    </div>
  );
}

InputDropdown.defaultProps = {};

interface InputDropdownProps {}

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
