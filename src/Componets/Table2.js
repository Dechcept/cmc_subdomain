import React from "react";

const Table2 = () => {
  return (
    <div
      className="flex justify-center items-center h-[452px] bg-no-repeat bg-cover w-full bg-center bg-opacity-30 mt-10 "
      style={{ backgroundImage: "url('/Images/tableBackground2.webp')" }}
    >
      <div className="overflow-x-auto">
        <table className="bg-white">
          <tr className="flex gap-[2px]">
            <th className="tableheading">Product Name</th>
            <th className="tableheading">Denier Range</th>
            <th className="tableheading">Filament</th>
            <th className="tableheading">Application</th>
          </tr>
          <tr className="flex gap-[2px] bg-white">
            <td className="tabledata">Cot Feel</td>
            <td className="tabledata">150-450d</td>
            <td className="tabledata">48-288</td>
            <td className="tabledata">Home Textiles, Apparels</td>
          </tr>
          <tr className="flex gap-[2px]">
            <td className="tabledata bg-[#D9D9D9]">
              Dope Dyed & Mélange (ATY)
            </td>
            <td className="tabledata bg-[#D9D9D9]">150-450d</td>
            <td className="tabledata bg-[#D9D9D9]">48-288</td>
            <td className="tabledata bg-[#D9D9D9]">
              Shirting, Suiting, Home Textile, knitting
            </td>
          </tr>
          <tr className="flex gap-[2px] bg-white">
            <td className="tabledata">Nylon ATY</td>
            <td className="tabledata">30D-90d</td>
            <td className="tabledata">48-288</td>
            <td className="tabledata">Saree, Dress Material.</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table2;
