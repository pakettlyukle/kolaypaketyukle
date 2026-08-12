export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">KolayPaketYükle</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/turkcell-paket-yukle" className="hover:underline">Turkcell</a>
          <a href="/vodafone-paket-yukle" className="hover:underline">Vodafone</a>
          <a href="/turk-telekom-paket-yukle" className="hover:underline">Türk Telekom</a>
          <a href="/bimcell-paket-yukle" className="hover:underline">BİMcell</a>
          <a href="/pttcell-paket-yukle" className="hover:underline">PTTcell</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Kolay ve Hızlı Paket Yükleme
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Turkcell, Vodafone, Türk Telekom, BİMcell ve PTTcell hatlarına anında paket ve TL yükle.
        </p>

        {/* Yükleme Formu */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
          <input
            type="tel"
            placeholder="05XX XXX XX XX"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none focus:border-blue-500"
          />
          <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none focus:border-blue-500">
            <option value="">Operatör Seçin</option>
            <option value="turkcell">Turkcell</option>
            <option value="vodafone">Vodafone</option>
            <option value="turk-telekom">Türk Telekom</option>
            <option value="bimcell">BİMcell</option>
            <option value="pttcell">PTTcell</option>
          </select>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg transition">
            Paket Seç →
          </button>
        </div>
      </section>

      {/* Operatörler */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Desteklenen Operatörler</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {["Turkcell", "Vodafone", "Türk Telekom", "BİMcell", "PTTcell"].map((op) => (
            <div key={op} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:border-blue-400 cursor-pointer transition">
              <div className="font-semibold text-gray-700 text-sm">{op}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Özellikler */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-800 mb-2">Anında Yükleme</h3>
            <p className="text-gray-500 text-sm">Ödeme onaylandıktan sonra saniyeler içinde yüklenir.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-800 mb-2">Güvenli Ödeme</h3>
            <p className="text-gray-500 text-sm">3D Secure ile PCI-DSS standartlarında güvenli ödeme.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🕐</div>
            <h3 className="font-bold text-gray-800 mb-2">7/24 Hizmet</h3>
            <p className="text-gray-500 text-sm">Hafta sonu ve tatil dahil her an yükleme yapabilirsin.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 px-6 text-center text-sm">
        <p>© 2026 KolayPaketYükle. Tüm hakları saklıdır.</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="/kvkk" className="hover:text-white">KVKK</a>
          <a href="/gizlilik" className="hover:text-white">Gizlilik</a>
          <a href="/iletisim" className="hover:text-white">İletişim</a>
        </div>
      </footer>
    </main>
  );
}