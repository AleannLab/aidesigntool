import cn from "classnames";

export const Textarea = (
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) => {
  return (
    <textarea
      {...props}
      className={cn("w-full p-2 rounded-[10px]", props.className)}
    />
  );
};
