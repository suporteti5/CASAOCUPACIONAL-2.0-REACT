import React from "react";

/* Components */
import Banner from "../Components/Banner";
import Companies from "../Components/Companies";
import Welcome from "../Components/Welcome";
import Services from "../Components/Services";
import ScrollButton from "../Components/ScrollButton";
import Numbers from "../Components/Numbers";
import TabsExames from "../Components/TabsExames";
import TabsCity from "../Components/TabsCity";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Companies />
      <Welcome />
      <Numbers />
      <TabsExames />
      <Services />
      <TabsCity />
    </>
  );
};

export default Homepage;
