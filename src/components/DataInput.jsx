import { Trash } from "iconsax-reactjs";
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "userDataValues";

const DataInput = ({ onDataChange }) => {
  const [values, setValues] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [""];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
    const numericValues = values
      .map((v) => parseFloat(v))
      .filter((v) => !isNaN(v));
    onDataChange(numericValues);
  }, [values, onDataChange]);

  const handleChange = (index, newValue) => {
    const updated = [...values];
    updated[index] = newValue;
    setValues(updated);
  };

  const handleAdd = () => {
    setValues([...values, ""]);
  };

  const handleRemove = (index) => {
    const updated = values.filter((_, i) => i !== index);
    setValues(updated.length ? updated : [""]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl space-y-4">
      <h2 className="text-lg font-semibold text-center mb-4 text-sky-700">ورود داده‌های عددی</h2>
      <div className="flex flex-col gap-3">
        {values.map((value, index) => (
          <div key={index} className="flex items-center gap-2 relative">
            <input
              type="number"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-900 absolute left-1"
            >
              <Trash size="32" variant="Bold"/>
            </button>
          </div>
        ))}
        <button
          onClick={handleAdd}
          className="w-full h-14 bg-gradient-to-l from-sky-500 to-sky-800 text-white py-2 rounded-md hover:bg-sky-700 transition"
        >
          افزودن مقدار
        </button>
      </div>
    </div>
  );
};

export default DataInput;
