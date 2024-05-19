import { Skeleton } from "@mui/material";
import style from "./link.module.css";

export const LinkSkeleton = () => {
  return (
    <>
      <Skeleton
        sx={{ bgcolor: "grey.800" }}
        width={"50%"}
        height={20}
        animation="wave"
      />
      <Skeleton
        sx={{ bgcolor: "grey.800" }}
        width={"30%"}
        height={20}
        animation="wave"
      />
      <div className={style.container}>
        <div className={style.circle}>
          <Skeleton sx={{ bgcolor: "grey.800" }} variant="circular" width={20} height={20} animation="wave" />
          <Skeleton sx={{ bgcolor: "grey.800" }} variant="circular" width={20} height={20} animation="wave" />
          <Skeleton sx={{ bgcolor: "grey.800" }} variant="circular" width={20} height={20} animation="wave" />
        </div>
        <Skeleton sx={{ bgcolor: "grey.800" }} width={50} height={20} animation="wave" />
      </div>
    </>
  );
};
