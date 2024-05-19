import { LinkSkeleton } from "./link";
import { QRSkeleton } from "./qr";
import style from "./skeleton.module.css";

export const Skeleton = ({ type }: { type: "link" | "qr" }) => {
  const skeletonArray = Array.from({ length: 6 });

  return (
    <div className={style.container}>
      {skeletonArray.map((_, index) => (
        <div key={index} className={style.gridItem}>
          {type === "link" ? (
            <LinkSkeleton />
          ) : (
            <QRSkeleton />
          )}
        </div>
      ))}
    </div>
  );
};
