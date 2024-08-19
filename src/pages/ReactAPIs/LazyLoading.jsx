import React, { Suspense } from "react";


const LazyComponent = React.lazy(() =>
  import("../../components/LazyComponent")
);


const LazyLoading = () => {
  return (
    <div>
      <h1>welcome</h1>
      <Suspense fallback={<div>Loading......</div>} >
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoading;
