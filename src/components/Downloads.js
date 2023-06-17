import React, { useContext, useEffect, useState } from "react";
import MainContext from "../MainContext";
import { IoMdDownload, IoMdClose } from "react-icons/io";
import { MdLink } from "react-icons/md";

const Downloads = () => {
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
  const [downloadURL, setDownloadURL] = useState();
  const [cssMethod, setCssMethod] = useState("css");

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";

      switch (cssMethod) {
        case "css":
          output += ":root{\n";
          selectedBrands.map((slug) => {
            let brand = brands.find((b) => b.slug === slug);
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color}\n`;
            });
          });
          output += "}";
          break;
        case "scss":
          selectedBrands.map((slug) => {
            let brand = brands.find((b) => b.slug === slug);
            brand.colors.map((color, key) => {
              output += `$${slug}-${key}: #${color}\n`;
            });
          });
          break;
        case "less":
          selectedBrands.map((slug) => {
            let brand = brands.find((b) => b.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color}\n`;
            });
          });
          break;

        default:
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadURL(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadURL("");
      };
    }
  }, [selectedBrands, brands, cssMethod]);

  const getLink = () => {
    prompt(
      "Here's the URL to share",
      `http://localhost:3000/collections/${selectedBrands.join(",")}`
    );
  };

  return (
    <div className="download">
      <div className="actions"></div>
      <div className="selected-slug">
        <div className="button-pairs">
          <select onChange={(e) => setCssMethod(e.target.value)}>
            <option value="css">CSS</option>
            <option value="scss">SCSS</option>
            <option value="less">LESS</option>
          </select>
          <a download={`brands.${cssMethod}`} href={downloadURL}>
            <IoMdDownload />
          </a>
          <button onClick={getLink}>
            <MdLink />
          </button>
          <button onClick={() => setSelectedBrands([])}>
            <IoMdClose />
          </button>
        </div>
        {selectedBrands.length} {selectedBrands.length > 1 ? "brands" : "brand"}{" "}
        collected.
      </div>
    </div>
  );
};

export default Downloads;
