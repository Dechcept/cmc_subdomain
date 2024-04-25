import React from "react";

const SweingTable2 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="overflow-x-auto ">
          <table className="bg-white ">
            <tr className="flex gap-[2px]">
              <th className="tableheading2">Denier</th>
              <th className="tableheading2">Dtex</th>
              <th className="tableheading2">Filament</th>
              <th className="tableheading2">Cross Section</th>
              <th className="tableheading2">End Use </th>
              <th className="tableheading2">Tex No. </th>
              <th className="tableheading2">TKT </th>
              <th className="tableheading2">Luster </th>
            </tr>
            <tr className="flex gap-[2px] bg-white">
              <td className="tabledata2">210/2</td>
              <td className="tabledata2">235/2</td>
              <td className="tabledata2">34x2</td>
              <td className="tabledata2">Round</td>
              <td className="tabledata2 text-[12px] leading-[120%] tracking-[0.8px] font-medium">
                Footwear/ leather
              </td>
              <td className="tabledata2">15</td>
              <td className="tabledata2">180</td>
              <td className="tabledata2">Bright</td>
            </tr>
            <tr className="flex gap-[2px]">
              <td className="tabledata2 bg-[#D9D9D9]">210/3</td>
              <td className="tabledata2 bg-[#D9D9D9]">235/3</td>
              <td className="tabledata2 bg-[#D9D9D9]">34x3</td>
              <td className="tabledata2 bg-[#D9D9D9]">Round</td>
              <td className="tabledata2 bg-[#D9D9D9] text-[12px] leading-[120%] tracking-[0.8px] font-medium">
              Footwear/ leather
              </td>
              <td className="tabledata2 bg-[#D9D9D9]">70</td>
              <td className="tabledata2 bg-[#D9D9D9]">40</td>
              <td className="tabledata2 bg-[#D9D9D9]">Bright</td>
            </tr>
            <tr className="flex gap-[2px] bg-white">
              <td className="tabledata2">420/3</td>
              <td className="tabledata2">470/3</td>
              <td className="tabledata2">72x3</td>
              <td className="tabledata2">Round</td>
              <td className="tabledata2 text-[12px] leading-[120%] tracking-[0.8px] font-medium">
                {" "}
                Footwear/ leather
              </td>
              <td className="tabledata2">139</td>
              <td className="tabledata2">20</td>
              <td className="tabledata2">Bright</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SweingTable2;
