import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav dir="rtl" className="bg-sky-950 text-white px-6 py-4 flex justify-between items-center">
      <NavLink to='/' className="text-xl font-bold ">آموزش آمار توصیفی</NavLink>
      <div className="space-x-4 flex items-center gap-4 text-sm md:text-base">
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
