import { AllQRs } from "./QR";
import { AllLinks } from "./links";

export const Save = ({ currenType }: { currenType: "mylinks" | "myqrcodes" }) => {

  return currenType === "mylinks" ? <AllLinks /> : <AllQRs />
};
