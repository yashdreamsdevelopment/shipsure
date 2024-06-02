import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import NoItemsFound from "../../NoItemsFound";

const Components = () => {
  return (
    <CommanWrapper>
      <TabHeader title={"components"} badge={"0"} />

      <NoItemsFound />
    </CommanWrapper>
  );
};

export default Components;
