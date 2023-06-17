import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MainContext from "./MainContext";
import BrandsData from "./brandcolors.json";
import Copied from "./components/Copied";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./components/Collection";

const App = () => {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [searched, setSearched] = useState("");
  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    setSearched,
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((b) => b.title.toLowerCase().includes(searched))
    );
  }, [searched]);

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/collections/:slugs" element={<Collection />} />
          </Routes>
        </BrowserRouter>
        {copied && <Copied color={copied} />}
      </MainContext.Provider>
    </>
  );
};

export default App;
