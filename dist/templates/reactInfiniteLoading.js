import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteLoadingComponent = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 200) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {items.map((_, index) => (
        <div
          key={index}
          style={{
            height: 30,
            border: "1px solid black",
            margin: 6,
            padding: 8,
          }}
        >
          div - #{index}
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteLoadingComponent;
