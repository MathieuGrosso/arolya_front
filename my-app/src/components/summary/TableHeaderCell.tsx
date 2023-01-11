import TableHeader from "./TableHeader";

export default function TableHeaderCell(props: TableHeaderCellProps) {
  return (
    <>
      <div
        className={`px-6 py-3 h-11 bg-gray-50 gap-3 inline-flex items-center transition-all ${
          props.type === "TRUE_FALSE_GRAY_TYPE" ? "w-full self-stretch" : ""
        } ${props.type === "TRUE_TRUE_GRAY_TYPE" ? "w-[321px]" : ""} ${
          props.type === "TRUE_FALSE_GRAY_TYPE1" ? "w-[563px]" : ""
        }`}
      >
        {props.type === "TRUE_FALSE_GRAY_TYPE" && (
          <TableHeader
            type="FALSE_FALSE_DEFAULT_TYPE"
            text="Prix du jour"
           />
        )}
        {props.type === "TRUE_TRUE_GRAY_TYPE" && (
          <TableHeader
            type="FALSE_DOWN_DEFAULT_TYPE"
            text="Nom du produit"
           />
        )}
        {props.type === "TRUE_FALSE_GRAY_TYPE1" && (
          <TableHeader
            type="FALSE_FALSE_DEFAULT_TYPE"
            text="EAN"
           />
        )}
      </div>
    </>
  );
}

TableHeaderCell.defaultProps = {
  type: "TRUE_TRUE_GRAY_TYPE",
};

interface TableHeaderCellProps {
  type:
    | "TRUE_TRUE_GRAY_TYPE"
    | "TRUE_FALSE_GRAY_TYPE"
    | "TRUE_FALSE_GRAY_TYPE1";
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
