
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
