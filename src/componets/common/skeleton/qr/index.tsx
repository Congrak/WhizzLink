import { Skeleton } from "@mui/material";
import style from "./qr.module.css";

export const QRSkeleton = () => {
  return (
    <>
      <div className={style.container}>
        <Skeleton
          sx={{ bgcolor: "grey.800" }}
          width={"50%"}
          height={20}
          animation="wave"
        />
        <Skeleton
          sx={{ bgcolor: "grey.800" }}
          width={60}
          height={40}
          animation="wave"
        />
      </div>
      <div className={style.container}>
        <Skeleton
          sx={{ bgcolor: "grey.800" }}
          variant="circular"
          width={20}
          height={20}
          animation="wave"
        />
        <Skeleton
          sx={{ bgcolor: "grey.800" }}
          width={50}
          height={20}
          animation="wave"
        />
      </div>
    </>
  );
};
