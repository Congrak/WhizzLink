"use client";

import { CopyIcon } from "@/componets/common/icons/copy";
import { TrashIcon } from "@/componets/common/icons/trash";
import { getAllLinks } from "@/service/getAllLinks";
import { LinkObject } from "@/types/globalTypes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import style from "./links.module.css";
import { formatDate } from "@/utils/formatDate";
import { Pagination } from "@/componets/common/pagination";
import { CopyToClipboard } from "@/utils/copyToClipboard ";
import { Toaster } from "react-hot-toast";
import { deleteItem } from "@/service/delete";
import { notify } from "@/utils/notify";
import { SettingsLink } from "@/componets/settings";
import { Skeleton } from "@/componets/common/skeleton";
import { NotLogged } from "../../notLogged";
import { Empty } from "@/componets/common/empty";

export const AllLinks = () => {
  const [links, setLinks] = useState<LinkObject[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [change, setChange] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    setChange(false);
    setLoading(true);
    (async () => {
      const res = await getAllLinks({
        creatorId: session?.user?.id!,
        page,
      });
      setLinks(res.links);
      setTotal(res.totalPages);
      setLoading(false);
    })();
  }, [page, session?.user?.id, change]);

  const handleDelete = useCallback(
    async (id: string, creatorId: string, type: "link" | "qr") => {
      try {
        const res = await deleteItem({ id, creatorId, type });
        console.log(res);
        if (creatorId !== session?.user?.id) {
          throw new Error("Error deleting item - not authorized");
          return notify("Error deleting item - not authorized", "❌");
        }
        const newLinks = await getAllLinks({
          creatorId: session?.user?.id!,
          page,
        });
        setLinks(newLinks.links);
        setTotal(newLinks.totalPages);
        return notify("Link deleted", "✅");
      } catch (error) {
        throw new Error("Error deleting item - try again");
        return notify("Error deleting link", "❌");
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

  const handleCopy = async (textToCopy: string) => {
    await CopyToClipboard(textToCopy);
    return notify("Copied to clipboard", "✅");
  };

  if (status === "loading") {
    return <Skeleton type="link" />;
  }

  if (status === "unauthenticated") return <NotLogged />;

  return loading ? (
    <Skeleton type="link" />
  ) : (
    <>
      <Toaster position="bottom-right" />
      {links.length > 0 ? (
        <div className={style.container}>
          {links.map((data: LinkObject, index) => (
            <div key={index} className={style.gridItem}>
              <div>
                <Link
                  href={process.env.NEXT_URL + data.shorted}
                  target="_blank"
                  className={style.link}
                >
                  {process.env.NEXT_URL + data.shorted}
                </Link>
              </div>
              <div className={style.text}>{data.url}</div>
              <div className={style.info}>
                <div className={style.icons}>
                  <div
                    className={style.icon}
                    onClick={() =>
                      handleCopy(process.env.NEXT_URL + data.shorted)
                    }
                  >
                    <CopyIcon width={22} height={22} color="#FFFFFF" />
                  </div>
                  <div className={style.icon}>
                    <SettingsLink data={data} setChange={setChange} />
                  </div>
                  <div
                    className={style.icon}
                    onClick={() =>
                      handleDelete(data.id, data.creatorId, "link")
                    }
                  >
                    <TrashIcon width={20} height={20} color="#FFFFFF" />
                  </div>
                </div>
                <div className={style.text}>{formatDate(data.createdAt)}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Empty />
      )}

      {links.length > 0 && (
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
