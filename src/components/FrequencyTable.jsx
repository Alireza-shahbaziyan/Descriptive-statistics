
export default function FrequencyTable({ table }) {
    if (table.length === 0) return null;
  
    return (
      <div className="w-full max-w-3xl mx-auto mt-6 overflow-auto">
        <h2 className="text-lg font-semibold mb-4 text-center">جدول فراوانی</h2>
        <table className="w-full table-auto bg-white shadow rounded overflow-hidden border">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-2">مقدار</th>
              <th className="p-2">فراوانی</th>
              <th className="p-2">فراوانی نسبی</th>
              <th className="p-2">فراوانی تجمعی</th>
              <th className="p-2">فراوانی نسبی تجمعی</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, idx) => (
              <tr key={idx} className="text-center border-t">
                <td className="p-2">{row.value}</td>
                <td className="p-2">{row.frequency}</td>
                <td className="p-2">{row.relativeFrequency}</td>
                <td className="p-2">{row.cumulativeFrequency}</td>
                <td className="p-2">{row.cumulativeRelativeFrequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  