import { Metadata } from "next";
import Link from "next/link";

const kategoriData: Record<string, { ad: string; aciklama: string }> = {
  "internet-paketleri": {
    ad: "İnternet Paketleri",
    aciklama: "Uygun fiyatlı internet paketlerini hemen yükle.",
  },
  "tl-yukleme": {
    ad: "TL Yükleme",
    aciklama: "Hattına anında TL yükle.",
  },
  "kontor-yukleme": {
    ad: "Kontör Yükleme",
    aciklama: "Hattına anında kontör yükle.",
  },
  "sms-paketleri": {
    ad: "SMS Paketleri",
    aciklama: "Uygun SMS paketlerini hemen yükle.",
  },
};

const operatorAdlari: Record<string, string> = {
  turkcell: "Turkcell",
  vodafone: "Vodafone",
  "turk-telekom": "Türk Telekom",
  bimcell: "BİMcell",
  pttcell: "PTTcell",
};

export async function generateMetadata(
  { params }: { params: Promise<{ operator: string; kategori: string }> }
): Promise<Metadata> {
  const { operator, kategori } = await params;
  const kat = kategoriData[kategori];
  const opAd = operatorAdlari[operator] || operator;
  return {
    title: `${opAd} ${kat?.ad || kategori} | KolayPaketYükle`,
    description: kat?.aciklama || "",
  };
}

export default async function KategoriPage(
  { params }: { params: Promise<{ operator: string; kategori: string }> }
) {
  const { operator, kategori } = await params;
  const kat = kategoriData[kategori];
  const opAd = operatorAdlari[operator] || operator;

  return (
    <main>
      <header className="header">
        <Link href="/" className="header-logo">KolayPaketYükle</Link>
        <nav className="header-nav">
          {Object.keys(operatorAdlari).map((key) => (
            <Link key={key} href={`/${key}`}>{operatorAdlari[key]}</Link>
          ))}
        </nav>
      </header>

      <div className="breadcrumb">
        <Link href="/">Ana Sayfa</Link>
        <span> › </span>
        <Link href={`/${operator}`}>{opAd}</Link>
        <span> › </span>
        <span>{kat?.ad || kategori}</span>
      </div>

      <section className="hero">
        <h1>{opAd} {kat?.ad}</h1>
        <p>{kat?.aciklama}</p>
      </section>

      <section className="kategoriler">
        <h2>Numara Gir, Paketi Seç</h2>
        <div className="form-kart">
          <input
            type="tel"
            placeholder="05XX XXX XX XX"
            className="form-input"
          />
          <button className="form-btn">Paketleri Gör →</button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 KolayPaketYükle. Tüm hakları saklıdır.</p>
        <div className="footer-links">
          <Link href="/kvkk">KVKK</Link>
          <Link href="/gizlilik">Gizlilik</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>
      </footer>
    </main>
  );
}