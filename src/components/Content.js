import React, { useContext } from "react";
import Search from "./Search";

import Brand from "./Brand";
import MainContext from "../MainContext";
import LazyLoad from "react-lazyload-v18";

const Content = () => {
  const { brands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
      </header>
      <section className="brands">
        {brands.map((brand) => (
          <LazyLoad once={true} overflow={true} placeholder="Yükleniyor...">
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
};

export default Content;
