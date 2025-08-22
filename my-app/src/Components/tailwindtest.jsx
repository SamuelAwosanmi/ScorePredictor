// src/TailwindTest.jsx
export default function TailwindTest() {
  return (
    <div className="p-8">
      {/* Test Utility Classes */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-lg text-gray-700">
          If these styles appear, Tailwind is working!
        </p>
      </div>

      {/* Color Test */}
      <div className="flex gap-4 mb-8">
        <div className="w-16 h-16 bg-red-500 rounded"></div>
        <div className="w-16 h-16 bg-green-500 rounded"></div>
        <div className="w-16 h-16 bg-blue-500 rounded"></div>
      </div>

      {/* Responsive Test (resize your browser) */}
      <div className="p-4 bg-purple-100 md:bg-yellow-100 lg:bg-pink-100">
        <p className="text-center">
          This box changes color at different screen sizes
        </p>
      </div>

      {/* Hover Test */}
      <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
        Hover over me
      </button>
    </div>
  );
}