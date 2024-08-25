export default function Button({
  text,
  onClicHandler,
  className,
}: {
  text: string;
  onClicHandler?: VoidFunction;
  className?: string;
}) {
  return (
    <button
      onClick={onClicHandler}
      className={`hover:cursor-pointer text-sm lg:text-base hover:scale-[1.1] transition-all duration-700 min-w-fit lg:w-[12rem] rounded-[24px] px-5 py-3  gradientBgColor ${className} `}
    >
      {text}
    </button>
  );
}
