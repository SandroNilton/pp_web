import { Loader } from "@vibe/core";
import React from "react";

const LoaderPage: React.FC = () => {
  return (
    <div className={`h-full flex items-center justify-center`}>
      <Loader size="medium" color="primary" hasBackground/>
    </div>
  );
};

export default LoaderPage;