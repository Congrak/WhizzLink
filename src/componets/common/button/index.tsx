import style from "./button.module.css";

export const Button = ({
  children,
  type,
  onClick,
  isValid,
}: {
  children: React.ReactNode;
  type: "orange" | "outline" | "gray";
  onClick: () => void;
  isValid?: boolean;
}) => {

  const buttonStyle = {
    orange: style.orange,
    outline: style.outline,
    gray: style.buttonGray,
  };

  return (
    <button className={buttonStyle[type]} onClick={onClick} disabled={isValid}>
      {children}
    </button>
  );
};
