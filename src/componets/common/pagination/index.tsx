import { Stack, Pagination as MuiPagination } from "@mui/material";

export const Pagination = ({
  page,
  handleOnChange,
  total,
}: {
  page: number;
  handleOnChange: any;
  total: number;
}) => {
  return (
    <Stack spacing={2}>
      <MuiPagination
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .Mui-selected": {
            backgroundColor: "#F4652D !important",
            color: "black",
          },
          "& .MuiPaginationItem-ellipsis": {
            color: "white",
          },
        }}
        count={total}
        page={page}
        onChange={handleOnChange}
      />
    </Stack>
  );
};
