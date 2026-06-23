import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">🎯 BBingV</div>
          <div className="space-x-4">
            <Link href="/login" className="px-4 py-2 text-indigo-600 hover:text-indigo-800">
              登入
            </Link>
            <Link href="/register" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              註冊
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            素人互惠接案系統
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            輕鬆管理你的多平台帳號，報名合作案件，追蹤合作績效
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            立即開始
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: '📝', title: '帳號登記', desc: '管理多平台帳號' },
              { icon: '🎯', title: '案件報名', desc: '瀏覽並報名案件' },
              { icon: '📊', title: '篇數統計', desc: '查看合作績效' },
              { icon: '✍️', title: '線上簽署', desc: '電子合約管理' },
              { icon: '😂', title: '笑話生成', desc: '隨機笑話 API' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 BBingV 素人互惠接案系統。保留所有權利。</p>
        </div>
      </footer>
    </div>
  )
}
