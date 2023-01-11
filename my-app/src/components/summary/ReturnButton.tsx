import ChevronLeft from "../../assets/ChevronLeft";

export default function ReturnButton(props: ReturnButtonProps) {
  return (
    <div
      className={`h-7 absolute left-10 top-11 text-black text-left font-normal w-[113px] font-['Lexend']`}
    >
      <div
        className="w-full h-7 absolute left-0 top-0 gap-2.5 inline-flex items-start self-stretch"
      >
        <ChevronLeft />
      </div>
      <div className="h-7 absolute left-11 top-0 gap-2.5 w-[69px]">
        <div>
            <a href={props.href}>
          <p
            className="h-7 top-0 absolute text-sm leading-5 m-0 w-[69px] left-[-17px]"
          >
            Précédent
          </p>
            </a>
        </div>
      </div>
    </div>
  );
}

ReturnButton.defaultProps = {};

interface ReturnButtonProps {
  href: string;
}