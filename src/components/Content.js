import React, { useContext } from "react";
import Search from "./Search";

import Brand from "./Brand";
import MainContext from "../MainContext";
// import LazyLoad from "react-lazyload-v18";
import Downloads from "./Downloads";
// import Loader from "./Loader";
import { AutoSizer, List } from "react-virtualized";
import Loader from "./Loader";

const Content = () => {
  const { selectedBrands, brands } = useContext(MainContext);

  const rowRenderer = ({ key, index, style, isScrolling }) => {
    const content = isScrolling ? <Loader /> : <Brand brand={brands[index]} />;
    return (
      <div key={key} style={style}>
        {content}
      </div>
    );
  };

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands && <Downloads />}
      </header>
      <section className="brands">
        {/* {brands.map((brand) => (
          <LazyLoad once={true} overflow={true} placeholder={<Loader />}>
            <Brand brand={brand} />
          </LazyLoad>
        ))} */}
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={brands.length}
              rowHeight={103}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </section>
    </main>
  );
};

export default Content;
