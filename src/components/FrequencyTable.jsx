export default function FrequencyTable({ table }) {
  if (table.length === 0) return null;

  return (
    <div className="w-full max-w-6xl mx-auto mt-6 px-2 sm:px-4">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">جدول فراوانی</h2>
      <h4 className="text-sm mb-4 text-center text-gray-800">برای دیدن تمام ایتم های جدول به سمت  راست بکشید جدول  را</h4>

      <div className="relative overflow-x-auto rounded-lg shadow ring-1 ring-gray-300">
        <table className="w-full text-sm text-gray-700 bg-white">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-xs uppercase text-gray-600 tracking-wider">
            <tr>
              <th className="p-3 text-left whitespace-nowrap">مقدار (xi)</th>
              <th className="p-3 text-left whitespace-nowrap">فراوانی (fi)</th>
              <th className="p-3 text-left whitespace-nowrap">فراوانی نسبی</th>
              <th className="p-3 text-left whitespace-nowrap">فراوانی تجمعی</th>
              <th className="p-3 text-left whitespace-nowrap">فراوانی نسبی تجمعی</th>
              <th className="p-3 text-left whitespace-nowrap">xi × fi</th>
              <th className="p-3 text-left whitespace-nowrap">xi²</th>
              <th className="p-3 text-left whitespace-nowrap">fi × xi²</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, idx) => (
              <tr
                key={idx}
                className={`border-t hover:bg-gray-50 transition-colors duration-200 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="p-3 whitespace-nowrap text-right">{row.value}</td>
                <td className="p-3 whitespace-nowrap text-right">{row.frequency}</td>
                <td className="p-3 whitespace-nowrap text-right">{row.relativeFrequency}</td>
                <td className="p-3 whitespace-nowrap text-right">{row.cumulativeFrequency}</td>
                <td className="p-3 whitespace-nowrap text-right">{row.cumulativeRelativeFrequency}</td>
                <td className="p-3 whitespace-nowrap text-right">{row.xiFi}</td>
                <td className="p-3 whitespace-nowrap text-right">{row.xiSquared}</td>
                <td className="p-3 whitespace-nowrap text-right">{row.fiXiSquared}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
