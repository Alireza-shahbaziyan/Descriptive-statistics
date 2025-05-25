import React from "react";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-sky-900 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        {/* لوگو */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          {/* لوگوی ساده SVG */}
          <img src="/public/websitelogo.jpg" alt="iau" className="md:w-36 px-2 w-20"/>
        </div>

        <p className="text-sm text-gray-300">
          © 2025 طراحی شده توسط علیرضا شهبازیان | استاد محمدرضا مهیاری نیا
        </p>
      </div>
    </footer>
  );
}
