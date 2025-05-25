export default function DescriptiveStats({ stats }) {
    if (!stats) return null;
  
    return (
      <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded-2xl">
        <h2 className="text-lg font-semibold text-center mb-4">آمار توصیفی</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-gray-600">میانگین</p>
            <p className="font-bold">{stats.mean}</p>
          </div>
          <div>
            <p className="text-gray-600">میانه</p>
            <p className="font-bold">{stats.median}</p>
          </div>
          <div>
            <p className="text-gray-600">مد</p>
            <p className="font-bold">{stats.mode.join(", ")}</p>
          </div>
          <div>
            <p className="text-gray-600">واریانس</p>
            <p className="font-bold">{stats.variance}</p>
          </div>
          <div>
            <p className="text-gray-600">انحراف معیار</p>
            <p className="font-bold">{stats.stdDev}</p>
          </div>
        </div>
      </div>
    );
  }
  