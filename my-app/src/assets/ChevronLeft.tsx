export default function ChevronLeft(props: ChevronLeftProps) {
  return (
    <div className="w-6 h-6 left-0 absolute top-[calc(50%_-_12px_+_0px)]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 15 18 L 9 12 L 15 6"
          stroke="#101828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
      </svg>
    </div>
  );
}

ChevronLeft.defaultProps = {};

interface ChevronLeftProps {}
