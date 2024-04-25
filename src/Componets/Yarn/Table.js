import React from "react";

const YarnTable = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/Images/tableBackground.webp')" }}
        className="h-[772px] flex justify-center items-center bg-no-repeat bg-cover mt-10  "
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
              <td className="tabledata">Semi –Dull</td>
              <td className="tabledata">150-450d</td>
              <td className="tabledata">48-288</td>
              <td className="tabledata">Home Textiles, Apparels</td>
            </tr>
            <tr className="flex gap-[2px]">
              <td className="tabledata bg-[#D9D9D9]">Bright</td>
              <td className="tabledata bg-[#D9D9D9]">150-450d</td>
              <td className="tabledata bg-[#D9D9D9]">48-288</td>
              <td className="tabledata bg-[#D9D9D9]">
                Weaving, Hometex, Garments
              </td>
            </tr>
            <tr className="flex gap-[2px] bg-white">
              <td className="tabledata">Dope Dyed</td>
              <td className="tabledata">150-450d</td>
              <td className="tabledata">48-288</td>
              <td className="tabledata">
                Shirting, Suiting, Home Textile, knitting
              </td>
            </tr>
            <tr className="flex gap-[2px]">
              <td className="tabledata bg-[#D9D9D9]">DMS Mélange</td>
              <td className="tabledata bg-[#D9D9D9]">300- 600d</td>
              <td className="tabledata bg-[#D9D9D9]">48-288</td>
              <td className="tabledata bg-[#D9D9D9]">
                Shirting, Suiting, Apparels
              </td>
            </tr>
            <tr className="flex gap-[2px] bg-white">
              <td className="tabledata">Lycra (Spandex)</td>
              <td className="tabledata">80d, 160d, 220d, 300d.</td>
              <td className="tabledata">48-288</td>
              <td className="tabledata"></td>
            </tr>
            <tr className="flex gap-[2px]">
              <td className="tabledata bg-[#D9D9D9]">Twisting</td>
              <td className="tabledata bg-[#D9D9D9]">150-450d</td>
              <td className="tabledata bg-[#D9D9D9]">48-288</td>
              <td className="tabledata bg-[#D9D9D9]">
                Shirting, Suiting , Apparels
              </td>
            </tr>
            <tr className="flex gap-[2px] bg-white">
              <td className="tabledata">Nylon</td>
              <td className="tabledata">30D- 90d</td>
              <td className="tabledata"></td>
              <td className="tabledata">Saree, Dress Material.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YarnTable;
