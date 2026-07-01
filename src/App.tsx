import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rows = Array.from({ length: 10 }, (_, i) => {
  const multiplier = i + 1;
  return { multiplier, product: 23 * multiplier };
});

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-900 tracking-tight">
            Multiplication Table
          </h1>
          <p className="mt-2 text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            23
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-100 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 font-semibold text-sm uppercase tracking-wider">
            <div className="px-6 py-4 text-center">Multiplicand</div>
            <div className="px-6 py-4 text-center">Multiplier</div>
            <div className="px-6 py-4 text-center">Product</div>
          </div>

          {/* Rows */}
          {rows.map(({ multiplier, product }, index) => (
            <div
              key={multiplier}
              className={`grid grid-cols-3 transition-colors hover:bg-yellow-50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-yellow-50/40'
              }`}
            >
              <div className="px-6 py-3.5 text-center text-slate-700 font-medium">
                23
              </div>
              <div className="px-6 py-3.5 text-center text-slate-700 font-medium flex items-center justify-center gap-2">
                <span className="text-yellow-400 text-sm">×</span>
                {multiplier}
              </div>
              <div className="px-6 py-3.5 text-center font-bold text-amber-700">
                <span className="text-yellow-300 text-sm mr-1">=</span>
                {product}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-slate-400 mt-6">
          23 × 1 through 23 × 10
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
