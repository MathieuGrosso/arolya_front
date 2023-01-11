export default function TableCell(props: TableCellProps) {
  return (
    <>
      <div
        className={`px-6 py-4 w-full gap-3 inline-flex items-center self-stretch text-left font-medium h-[72px] font-['Lexend'] text-[rgba(16,24,40,1)]`}
      >
        <div
          className={`transition-all ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE4"
              ? "w-[214px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE5"
              ? "w-[179px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE6"
              ? "w-[151px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE7"
              ? "w-[147px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE8"
              ? "w-[152px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE9"
              ? "w-[159px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE10"
              ? "w-[150px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE11"
              ? "w-[142px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE"
              ? "w-[180px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE1"
              ? "w-[234px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE2"
              ? "w-[194px]"
              : ""
          } ${
            props.type === "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE3"
              ? "w-[190px]"
              : ""
          }`}
        >
          <p className="leading-5 m-0 text-[10px]">{props.text}</p>
        </div>
      </div>
    </>
  );
}

TableCell.defaultProps = {
  type: "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE",
  text: "TOMATE RD GRAP VRAC FRANCE C1",
};

interface TableCellProps {
  type:
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE1"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE2"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE3"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE4"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE5"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE6"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE7"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE8"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE9"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE10"
    | "LEAD_AVATAR_CHECKBOX_TRUE_DEFAULT_TYPE11";
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
