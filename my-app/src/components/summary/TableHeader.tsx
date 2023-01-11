import ArrowDown from "../../assets/ArrowDown";

export default function TableHeader(props: TableHeaderProps) {
  return (
    <>
      <div
        className={`gap-1 inline-flex items-center font-medium font-['Lexend'] text-[rgba(102,112,133,1)] transition-all ${
          props.type === "FALSE_DOWN_DEFAULT_TYPE" ? "text-left w-[115px]" : ""
        } ${
          props.type === "FALSE_FALSE_DEFAULT_TYPE"
            ? "text-center flex-1 h-5 flex-grow self-stretch"
            : ""
        }`}
      >
        <p
          className={`text-xs m-0 leading-[18px] transition-all ${
            props.type === "FALSE_FALSE_DEFAULT_TYPE" ? "flex-1" : ""
          }`}
        >
          {props.text}
        </p>
        {props.type === "FALSE_DOWN_DEFAULT_TYPE" && <ArrowDown />}
      </div>
    </>
  );
}

TableHeader.defaultProps = {
  type: "FALSE_DOWN_DEFAULT_TYPE",
  text: "Nom du produit",
};

interface TableHeaderProps {
  type: "FALSE_DOWN_DEFAULT_TYPE" | "FALSE_FALSE_DEFAULT_TYPE";
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
