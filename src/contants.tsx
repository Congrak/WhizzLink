import { LinkIcon } from "./componets/common/icons/link";
import { LinksIcon } from "./componets/common/icons/links";
import { QRIcon } from "./componets/common/icons/qr";
import { QRSIcon } from "./componets/common/icons/qrs";

export const TABS_NAVIGATION = [
    {
      type: "link" as "link",
      icon: LinkIcon,
      messageId: "home.shorlink",
      defaultMessage: "Short link",
    },
    {
      type: "qr" as "qr",
      icon: QRIcon,
      messageId: "home.qrCode",
      defaultMessage: "QR Code",
    },
    {
      type: "mylinks" as "mylinks",
      icon: LinksIcon,
      messageId: "home.mylinks",
      defaultMessage: "My links",
    },
    {
      type: "myqrcodes" as "myqrcodes",
      icon: QRSIcon,
      messageId: "home.myqrcodes",
      defaultMessage: "My QR codes",
    },
  ];