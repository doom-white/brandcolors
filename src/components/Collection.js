import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MainContext from "../MainContext";
import LazyLoad from "react-lazyload-v18";
import Brand from "./Brand";
import Downloads from "./Downloads";
import { MdArrowBack } from "react-icons/md";
import Loader from "./Loader";

const Collection = () => {
  const { slugs } = useParams();
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext);

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={() => setSelectedBrands([])}>
          <MdArrowBack /> All Brands
        </Link>
        {selectedBrands && <Downloads />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((b) => b.slug === slug);
          return (
            <LazyLoad once={true} overflow={true} placeholder={<Loader />}>
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
};

export default Collection;
