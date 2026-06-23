'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Contracts() {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      title: '新品推廣合約',
      date: '2024-06-15',
      status: 'signed',
      signedDate: '2024-06-16',
    },
    {
      id: 2,
      title: '服飾代言合約',
      date: '2024-06-20',
      status: 'pending',
      signedDate: null,
    },
  ])

  const [showSignModal, setShowSignModal] = useState(false)
  const [selectedContract, setSelectedContract] = useState<number | null>(null)
  const [signature, setSignature] = useState('')

  const handleSign = (contractId: number) => {
    setSelectedContract(contractId)
    setShowSignModal(true)
  }

  const handleConfirmSign = () => {
    if (signature.trim()) {
      setContracts(contracts.map(c =>
        c.id === selectedContract
          ? { ...c, status: 'signed', signedDate: new Date().toISOString().split('T')[0] }
          : c
      ))
      setShowSignModal(false)
      setSignature('')
      setSelectedContract(null)
      alert('✅ 合約簽署成功！')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="text-2xl font-bold text-indigo-600">🎯 BBingV</Link>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">登出</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">線上簽署</h2>

        {/* Contracts List */}
        <div className="space-y-6">
          {contracts.map((contract) => (
            <div key={contract.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{contract.title}</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>建立日期：{new Date(contract.date).toLocaleDateString('zh-TW')}</p>
                    {contract.signedDate && (
                      <p>簽署日期：{new Date(contract.signedDate).toLocaleDateString('zh-TW')}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="mb-4">
                    {contract.status === 'signed' ? (
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        ✓ 已簽署
                      </span>
                    ) : (
                      <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                        ⏳ 待簽署
                      </span>
                    )}
                  </div>
                  <div className="space-x-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      📄 查看
                    </button>
                    {contract.status === 'pending' && (
                      <button
                        onClick={() => handleSign(contract.id)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        ✍️ 簽署
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {contracts.length === 0 && (
          <div className="bg-white rounded-lg shadow p-12 text-center text-gray-600">
            <p className="text-lg">暫無合約記錄</p>
          </div>
        )}
      </div>

      {/* Sign Modal */}
      {showSignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6">簽署合約</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">簽名</label>
              <input
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="輸入你的簽名"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-sm text-gray-500 mt-2">或使用觸控板簽名</p>
              <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg h-24 bg-gray-50 flex items-center justify-center">
                <span className="text-gray-400">簽名區域</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowSignModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                取消
              </button>
              <button
                onClick={handleConfirmSign}
                disabled={!signature.trim()}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
              >
                確認簽署
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
