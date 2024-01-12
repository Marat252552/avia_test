import { useCallbackOnce } from "./useCallbackOnce";
import { PaginationQueryParams } from "../types/common";
import { useState } from "react";

type useLoadMoreType = (
  limit?: number,
  offset?: number
) => {
  paginationQuery: PaginationQueryParams;
  onLoadMoreClick: () => void;
};

const useLoadMore: useLoadMoreType = (limit = 4, offset = 0) => {
  const [paginationQuery, setPaginationQuery] = useState<PaginationQueryParams>(
    {
      limit,
      offset,
    }
  );
  const onLoadMoreClick = useCallbackOnce(() =>
    setPaginationQuery((prevState) => ({
      ...prevState,
      limit: prevState.limit + 4,
    }))
  );
  return { paginationQuery, onLoadMoreClick };
};

export default useLoadMore;
