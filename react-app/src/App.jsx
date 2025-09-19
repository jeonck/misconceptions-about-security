import { useState } from 'react';
import { securityMisconceptions } from './data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(securityMisconceptions[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-8 font-sans">
      <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">보안에 대한 오해와 올바른 인식</h1>
          <p className="text-lg text-gray-300">2025년 최신 보고서를 기반으로 한 보안 착각과 올바른 인식을 알아보세요.</p>
        </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <aside className="md:col-span-1">
              <nav className="space-y-1">
                {securityMisconceptions.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      selectedCategory.category === category.category
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white/10 hover:bg-white/20'
                    }`}>
                    {category.category} ({category.total})
                  </button>
                ))}
              </nav>
            </aside>

            <main className="md:col-span-3">
              <div className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedCategory.category}</h2>
                  <p className="mt-1 text-sm text-gray-300">{selectedCategory.description}</p>
                </div>
                <div className="border-t border-white/10">
                  <dl>
                    {selectedCategory.items.map((item, itemIdx) => (
                      <div
                        key={item.id}
                        className={`${itemIdx % 2 === 0 ? 'bg-black/20' : 'bg-black/10'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                        <dt className="text-sm font-medium text-gray-300">
                          <span className="font-bold text-blue-400">착각 {item.id}:</span> {item.misconception}
                        </dt>
                        <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                          <p><span className="font-semibold">올바른 인식:</span> {item.reality}</p>
                          <p className="mt-2"><span className="font-semibold">사례:</span> {item.case}</p>
                          <p className="mt-2"><span className="font-semibold">대응:</span> {item.response}</p>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
