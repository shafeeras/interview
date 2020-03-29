import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const LazyLoading = WrappedComponent => {
  const LazyRender = props => {
    return (
      <InfiniteScroll
        next={props.loadMore}
        hasMore={props.hasMore}
        dataLength={props.length}
        scrollThreshold={props.scrollThreshold}
      >
        <WrappedComponent {...props} />
      </InfiniteScroll>
    );
  };
  return LazyRender;
};
