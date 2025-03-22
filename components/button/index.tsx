import { ButtonProps, Button as HeroUIButton } from "@heroui/react";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = ButtonProps &
  PropsWithChildren & {
    theme?: "primary" | "secondary" | "accent";
    intent?: "solid" | "outline";
    className?: string;
  };

const Button = ({
  children,
  theme = "primary",
  intent = "solid",
  ...rest
}: Props) => {
  let style = "";

  switch (intent) {
    case "solid":
      style = `bg-${theme} text-${theme === "primary" ? "white" : "black"}`;
      break;
    case "outline":
      style = "bg-transparent border text-black";
  }

  return (
    <HeroUIButton radius="md" className={clsx(style, rest.className)} {...rest}>
      <span className="text-xs md:text-base">{children}</span>
    </HeroUIButton>
  );
};

export default Button;
