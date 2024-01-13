import { useCallbackOnce } from "./useCallbackOnce";
import { useState } from "react";

export interface PaginationQueryParams {
  limit: number;
}

type useLoadMoreType = (
  limit?: number,
  offset?: number
) => {
  paginationQuery: PaginationQueryParams;
  onLoadMoreClick: () => void;
};

const useLoadMore: useLoadMoreType = (limit = 4) => {
  const [paginationQuery, setPaginationQuery] = useState<PaginationQueryParams>(
    { limit }
  );
  const onLoadMoreClick = useCallbackOnce(() =>
    setPaginationQuery((prevState) => ({
      limit: prevState.limit + 4,
    }))
  );
  return { paginationQuery, onLoadMoreClick };
};

export default useLoadMore;
