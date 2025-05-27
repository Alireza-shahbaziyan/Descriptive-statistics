
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DataInput from "./components/DataInput";
import FrequencyTable from "./components/FrequencyTable";
import HistogramChart from "./components/HistogramChart";
import DescriptiveStats from "./components/DescriptiveStats";
import {
  calculateFrequencies,
  calculateDescriptiveStats,
} from "./utils/statistics";

export default function MainPage() {
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
    <div className="min-h-screen bg-gradient-to-l from-sky-100 to-sky-200 p-4 sm:p-8 font-sans space-y-10">
 
        <h1 className="text-2xl sm:text-3xl font-extrabold text-sky-800">
          تحلیل آمار توصیفی
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          داده‌های عددی خود را وارد کنید تا جدول فراوانی، نمودار هیستوگرام و آمارهای توصیفی را مشاهده کنید.
        </p>


      
        <DataInput onDataChange={setData} />


 
        <FrequencyTable table={freqTable} />
      

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <HistogramChart data={freqTable} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <DescriptiveStats stats={stats} />
      </motion.div>
    </div>
  );
}
