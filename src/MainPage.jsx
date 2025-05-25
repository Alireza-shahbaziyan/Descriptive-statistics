
import { useState, useEffect } from "react";
import DataInput from "./components/DataInput";
import FrequencyTable from "./components/FrequencyTable";
import HistogramChart from "./components/HistogramChart";
import DescriptiveStats from "./components/DescriptiveStats";
import {
  calculateFrequencies,
  calculateDescriptiveStats,
} from "./utils/statistics";

function MainPage() {
  const [data, setData] = useState([]);
  const [freqTable, setFreqTable] = useState([]);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      setFreqTable(calculateFrequencies(data));
      setStats(calculateDescriptiveStats(data));
    } else {
      setFreqTable([]);
      setStats(null);
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 p-4 sm:p-8 font-sans space-y-10">
      <header className="text-center ">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-sky-800">تحلیل آمار توصیفی</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          داده‌های عددی خود را وارد کنید تا جدول فراوانی، نمودار هیستوگرام و آمارهای توصیفی را مشاهده کنید.
        </p>
      </header>
      <DataInput onDataChange={setData} />
      <FrequencyTable table={freqTable} />
      <HistogramChart data={freqTable} />
      <DescriptiveStats stats={stats} />
    </div>
  );
}

export default MainPage;
