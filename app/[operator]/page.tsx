import { Metadata } from "next";
import Link from "next/link";

const operatorData: Record<string, {
  ad: string;
  renk: string;
  aciklama: string;
  kategoriler: { slug: string; ad: string; icon: string }[];
}> = {
  turkcell: {
    ad: "Turkcell",
    renk: "blue",
    aciklama: "Turkcell hatlarına anında paket ve TL yükle.",
    kategoriler: [
      { slug: "internet-paketleri", ad: "İnternet Paketleri", icon: "📶" },
      { slug: "tl-yukleme", ad: "TL Yükleme", icon: "💰" },
      { slug: "kontor-yukleme", ad: "Kontör Yükleme", icon: "📞" },
      { slug: "sms-paketleri", ad: "SMS Paketleri", icon: "✉️" },
    ],
  },
  vodafone: {
    ad: "Vodafone",
    renk: "red",
    aciklama: "Vodafone hatlarına anında paket ve TL yükle.",
    kategoriler: [
      { slug: "internet-paketleri", ad: "İnternet Paketleri", icon: "📶" },
      { slug: "tl-yukleme", ad: "TL Yükleme", icon: "💰" },
      { slug: "kontor-yukleme", ad: "Kontör Yükleme", icon: "📞" },
    ],
  },
  "turk-telekom": {
    ad: "Türk Telekom",
    renk: "blue",
    aciklama: "Türk Telekom hatlarına anında paket ve TL yükle.",
    kategoriler: [
      { slug: "internet-paketleri", ad: "İnternet Paketleri", icon: "📶" },
      { slug: "tl-yukleme", ad: "TL Yükleme", icon: "💰" },
      { slug: "kontor-yukleme", ad: "Kontör Yükleme", icon: "📞" },
    ],
  },
  bimcell: {
    ad: "BİMcell",
    renk: "orange",
    aciklama: "BİMcell hatlarına anında paket ve TL yükle.",
    kategoriler: [
      { slug: "internet-paketleri", ad: "İnternet Paketleri", icon: "📶" },
      { slug: "tl-yukleme", ad: "TL Yükleme", icon: "💰" },
    ],
  },
  pttcell: {
    ad: "PTTcell",
    renk: "yellow",
    aciklama: "PTTcell hatlarına anında paket ve TL yükle.",
    kategoriler: [
      { slug: "internet-paketleri", ad: "İnternet Paketleri", icon: "📶" },
      { slug: "tl-yukleme", ad: "TL Yükleme", icon: "💰" },
    ],
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ operator: string }> }
): Promise<Metadata> {
  const { operator } = await params;
  const op = operatorData[operator];
  if (!op) return { title: "Operatör Bulunamadı" };
  return {
    title: `${op.ad} Paket Yükleme | KolayPaketYükle`,
    description: op.aciklama,
  };
}

export default async function OperatorPage(
  { params }: { params: Promise<{ operator: string }> }
) {
  const { operator } = await params;
  const op = operatorData[operator];

  if (!op) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Operatör bulunamadı</h1>
          <Link href="/" className="text-blue-600 hover:underline">Ana sayfaya dön</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">KolayPaketYükle</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {Object.keys(operatorData).map((op) => (
            <Link key={op} href={`/${op}`} className="hover:underline capitalize">
              {operatorData[op].ad}
            </Link>
          ))}
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800 font-medium">{op.ad}</span>
      </div>

      {/* Hero */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-3">
          {op.ad} Paket Yükleme
        </h1>
        <p className="text-gray-600 text-lg">{op.aciklama}</p>
      </section>

      {/* Kategoriler */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          {op.ad} Kategorileri
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {op.kategoriler.map((kat) => (
            <Link
              key={kat.slug}
              href={`/${operator}/${kat.slug}`}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-blue-400 hover:shadow-md transition group"
            >
              <div className="text-4xl mb-3">{kat.icon}</div>
              <div className="font-semibold text-gray-700 group-hover:text-blue-600 transition text-sm">
                {kat.ad}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 px-6 text-center text-sm mt-12">
        <p>© 2026 KolayPaketYükle. Tüm hakları saklıdır.</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="/kvkk" className="hover:text-white">KVKK</Link>
          <Link href="/gizlilik" className="hover:text-white">Gizlilik</Link>
          <Link href="/iletisim" className="hover:text-white">İletişim</Link>
        </div>
      </footer>
    </main>
  );
}