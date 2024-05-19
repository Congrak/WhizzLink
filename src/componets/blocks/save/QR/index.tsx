"use client";

import { TrashIcon } from "@/componets/common/icons/trash";
import { formatDate } from "@/utils/formatDate";
import style from "./qr.module.css";
import { useCallback, useEffect, useState } from "react";
import { getAllQR } from "@/service/getAllQR";
import { useSession } from "next-auth/react";
import { ShowQR } from "@/componets/showQR";
import { Pagination } from "@/componets/common/pagination";
import { deleteItem } from "@/service/delete";
import { notify } from "@/utils/notify";
import { Toaster } from "react-hot-toast";
import { reconstructQR } from "@/utils/reconstructor";
import { ChunkQR } from "@/types/globalTypes";
import { Skeleton } from "@/componets/common/skeleton";
import { NotLogged } from "../../notLogged";
import { Empty } from "@/componets/common/empty";

export const AllQRs = () => {
  const [data, setData] = useState([]);
  const [generateQR, setGenerateQR] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await getAllQR({ page, creatorId: session?.user?.id! });
      console.log(res, "res");
      setData(res.qrs);
      setTotal(res.totalPages);
      setLoading(false);
    })();
  }, [page, session?.user?.id]);

  const handleDelete = useCallback(
    async (id: string, creatorId: string, type: "link" | "qr") => {
      try {
        const res = await deleteItem({ id, creatorId, type });
        console.log(res);
        if (creatorId !== session?.user?.id) {
          throw new Error("Error deleting item - not authorized");
          return notify("Error deleting item - not authorized", "❌");
        }
        const newQRS = await getAllQR({
          creatorId: session?.user?.id!,
          page,
        });
        setData(newQRS.qrs);
        setTotal(newQRS.totalPages);
        return notify("QR deleted", "✅");
      } catch (error) {
        throw new Error("Error deleting item - try again");
        return notify("Error deleting item - try again", "❌");
      }
    },
    [page, session?.user?.id]
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<unknown>, value: number) => {
      return setPage(value);
    },
    [setPage]
  );

  const handleReconstruct = useCallback((chunks: ChunkQR[]) => {
    const img = reconstructQR(chunks);
    return () => setGenerateQR(img);
  }, []);

  if (status === "loading") return <Skeleton type="qr" />;
  if (status === "unauthenticated") return <NotLogged />;

  return loading ? (
    <Skeleton type="qr" />
  ) : (
    <>
      <Toaster position="bottom-right" />
      {data.length > 0 ? (
        <div className={style.container}>
          {data.map((data: any, index) => (
            <div key={index} className={style.gridItem}>
              <div className={style.head}>
                <div className={style.text}>{data.url}</div>
                <span onClick={handleReconstruct(data.chunks)}>
                  <ShowQR QR={generateQR} />
                </span>
              </div>
              <div className={style.info}>
                <div
                  className={style.icon}
                  onClick={() => handleDelete(data.id, data.creatorId, "qr")}
                >
                  <TrashIcon width={20} height={20} color="#FFFFFF" />
                </div>
                <div className={style.date}>{formatDate(data.createdAt)}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Empty />
      )}

      {data.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Pagination
            page={page}
            handleOnChange={handleOnChange}
            total={total}
          />
        </div>
      )}
    </>
  );
};
