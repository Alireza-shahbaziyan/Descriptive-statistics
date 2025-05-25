
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  export default function HistogramChart({ data }) {
    if (data.length === 0) return null;
  
    return (
      <div className="w-full max-w-3xl mx-auto mt-6 bg-white p-4 shadow rounded-2xl">
        <h2 className="text-lg font-semibold text-center mb-4">نمودار هیستوگرام</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="value" label={{ value: "مقدار", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "فراوانی", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="frequency" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  