import Search from "../../assets/Search";

export default function _InputDropdownBase(props: _InputDropdownBaseProps) {
  return (
    <div
      className={`text-left font-normal font-['Lexend'] text-[rgba(102,112,133,1)]`}
    >
      <div
        className="absolute left-0 top-0 gap-1.5 w-[347px] right-[-0.37px]"
      >
        <div className="w-full gap-1.5">
          <div
            className="[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] px-3.5 py-2.5 w-full bg-white gap-2 flex items-center self-stretch rounded-lg drop-shadow-lg"
          >
            <div className="flex-1 gap-2 flex items-center flex-grow">
              <Search />
              <p className="text-base leading-6 m-0">Rechercher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

_InputDropdownBase.defaultProps = {};

interface _InputDropdownBaseProps {}

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
