import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav dir="rtl" className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">آموزش آمار توصیفی</div>
      <div className="space-x-4 flex items-center gap-4">
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"
          }
        >
          تاریخچه آمار
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"
          }
        >
          درباره پروژه
        </NavLink>
      </div>
    </nav>
  );
}
