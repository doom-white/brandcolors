import React, { useContext } from "react";
import { getContrastYIQ } from "../helpers";
import MainContext from "../MainContext";
import ClipboardButton from "react-clipboard.js";
import { VscCopy } from "react-icons/vsc";

const Brand = ({ brand }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand.slug)); //anlayamadım...
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>

      <div className="brand-colors">
        {brand.colors.map((color) => (
          <ClipboardButton
            data-clipboard-text={`#${color}`}
            component="span"
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
            onSuccess={() => setCopied(color)}
          >
            <span className="brand-copy-icon">
              <VscCopy />
            </span>
            <span className="brand-color-hex">#{color}</span>
          </ClipboardButton>
        ))}
      </div>
    </div>
  );
};

export default Brand;
