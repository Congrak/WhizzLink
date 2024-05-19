import { Creation } from "./creation";
import { Save } from "./save";

export const Blocks = ({
  type,
}: {
  type: "link" | "qr" | "mylinks" | "myqrcodes";
}) => {
  const BLOKS = {
    link: <Creation currenType="link" />,
    qr: <Creation currenType="qr" />,
    mylinks: <Save currenType="mylinks" />,
    myqrcodes: <Save currenType="myqrcodes"/>,
  };
  return BLOKS[type];
};
