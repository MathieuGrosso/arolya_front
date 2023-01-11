export default function FLBar(props: FLBarProps) {
    return (
        <div
            className={ "bg-gray-50 gap-6 inline-flex items-start text-left font-bold w-[1194px] h-[55px] overflow-clip font-['Lexend']" }
            style={ props.style }
        >
            <div className="w-full text-[rgba(78,148,79,1)]">
                <div className="px-8 gap-2.5 flex flex-col items-start self-stretch w-[239px] h-[55px]">
                    <div className="flex-1 relative w-[175px] h-[55px]">
                        <div className="absolute left-0 top-4 gap-2.5 h-[49px]">
                            <p className="text-base leading-5 m-0 h-[49px] w-[175px] text-align">TOUS LES PRODUITS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

FLBar.defaultProps = {
    style: {}
};

interface FLBarProps {
  style: Object
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
