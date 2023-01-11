import _BadgeBase from "./_BadgeBase";

export default function Badge(props: BadgeProps) {
  return (
    <>
      <div className="w-8">
        {props.type === "LG_FALSE_GRAY_TYPE" && (
          <_BadgeBase text="1" />
        )}
        {props.type === "LG_FALSE_GRAY_TYPE1" && (
          <_BadgeBase text="2" />
        )}
      </div>
    </>
  );
}

Badge.defaultProps = {
  type: "LG_FALSE_GRAY_TYPE",
};

interface BadgeProps {
  type: "LG_FALSE_GRAY_TYPE" | "LG_FALSE_GRAY_TYPE1";
}


