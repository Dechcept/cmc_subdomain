import React from 'react'

const Swingtable = () => {
  return (
    <div>
        <div>
      <div className="flex justify-center">
        <div className="overflow-x-auto ">
          <table className="bg-white ">
            <tr className="flex gap-[2px]">
              <th className="tableheading2">Ticket No.</th>
              <th className="tableheading2">Yarn construction</th>
              <th className="tableheading2">Tex No</th>
              <th className="tableheading2">Ply</th>
              <th className="tableheading2">Averange Strength </th>
              <th className="tableheading2">Elongation Min - Max % </th>
              <th className="tableheading2">Needle Size </th>
              <th className="tableheading2">Luster </th>
            </tr>
            <tr className="flex gap-[2px] bg-white">
              <td className="tabledata2">40</td>
              <td className="tabledata2">210x3</td>
              <td className="tabledata2">T-70</td>
              <td className="tabledata2">3</td>
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
    </div>
  )
}

export default Swingtable