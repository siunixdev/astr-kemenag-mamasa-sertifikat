import React, { useState, useEffect } from "react";
import {
  Search,
  Download,
  CheckCircle,
  XCircle,
  UserPlus,
  QrCode,
  ShieldCheck,
  FileCheck,
  Loader2,
} from "lucide-react";

// --- DATABASE DUMMY ---
const initialDB = [
  {
    id: 1,
    name: "RAMLI S.Ag., M.Pd.I",
    certId: "CERT-11022026-MMS-A8N3P9X",
    role: "Peserta",
  },
  {
    id: 2,
    name: "USAMA MAJID S.Ag., M.M.",
    certId: "CERT-11022026-MMS-M4K7L2R",
    role: "Peserta",
  },
  {
    id: 3,
    name: "ABDUL HAFID S.HI, M.H.",
    certId: "CERT-11022026-MMS-B9V1C5X",
    role: "Peserta",
  },
  {
    id: 4,
    name: "YONATAN M.Pd.K",
    certId: "CERT-11022026-MMS-Z3M8Q4L",
    role: "Peserta",
  },
  {
    id: 5,
    name: "ANWAR S.Ag",
    certId: "CERT-11022026-MMS-T5W1Y6Q",
    role: "Peserta",
  },
  {
    id: 6,
    name: "SONNY KURNIAWAN SE",
    certId: "CERT-11022026-MMS-P2X7N9V",
    role: "Peserta",
  },
  {
    id: 7,
    name: "SELLEQ S.Ag",
    certId: "CERT-11022026-MMS-K8R4M1L",
    role: "Peserta",
  },
  {
    id: 8,
    name: "GUSTI IRAWAN S.HI",
    certId: "CERT-11022026-MMS-H3J9B2C",
    role: "Peserta",
  },
  {
    id: 9,
    name: "ABD RAZAK NATSIR S.Sos.I",
    certId: "CERT-11022026-MMS-V7N5X3Z",
    role: "Peserta",
  },
  {
    id: 10,
    name: "JAWARIA S.E, S.Kom",
    certId: "CERT-11022026-MMS-L1M4Q8W",
    role: "Peserta",
  },
  {
    id: 11,
    name: "BERLINSTYM SE, MM",
    certId: "CERT-11022026-MMS-D9K2R5P",
    role: "Peserta",
  },
  {
    id: 12,
    name: "TRIYANTO ST",
    certId: "CERT-11022026-MMS-C4V8N1M",
    role: "Peserta",
  },
  {
    id: 13,
    name: "DEDI PURWANTO S.M",
    certId: "CERT-11022026-MMS-X6Z3L9K",
    role: "Peserta",
  },
  {
    id: 14,
    name: "NURASIAH FAUSIAH S.E.",
    certId: "CERT-11022026-MMS-W2Q7M5R",
    role: "Peserta",
  },
  {
    id: 15,
    name: "ABDUL AZIS S.M",
    certId: "CERT-11022026-MMS-P8N1V4C",
    role: "Peserta",
  },
  {
    id: 16,
    name: "MUNAWIR, SE",
    certId: "CERT-11022026-MMS-M3L9K2J",
    role: "Peserta",
  },
  {
    id: 17,
    name: "FAUZI AMIR S.Pd",
    certId: "CERT-11022026-MMS-B5C1V8X",
    role: "Peserta",
  },
  {
    id: 18,
    name: "GHINA RIZQA RAIHANAH S.Stat",
    certId: "CERT-11022026-MMS-Z7M4Q2W",
    role: "Peserta",
  },
  {
    id: 19,
    name: "ISMA YUNIAR S. S.Ak.",
    certId: "CERT-11022026-MMS-L9K5R1P",
    role: "Peserta",
  },
  {
    id: 20,
    name: "ARRUAN TONDOK",
    certId: "CERT-11022026-MMS-N2M8V4C",
    role: "Peserta",
  },
  {
    id: 21,
    name: "SITI NURHANISA, S.Pd",
    certId: "CERT-11022026-MMS-X1Z6L3K",
    role: "Peserta",
  },
  {
    id: 22,
    name: "YUSUF S.T, M.M.",
    certId: "CERT-11022026-MMS-W7Q2M9R",
    role: "Peserta",
  },
  {
    id: 23,
    name: "ANUGRAH KHAERIYAH S.H",
    certId: "CERT-11022026-MMS-P4N8V1C",
    role: "Peserta",
  },
  {
    id: 24,
    name: "MUAMMAR",
    certId: "CERT-11022026-MMS-M9L3K5J",
    role: "Peserta",
  },
  {
    id: 25,
    name: "FATHUL MUBARAK, S.H.",
    certId: "CERT-11022026-MMS-B1C5V7X",
    role: "Peserta",
  },
  {
    id: 26,
    name: "WAHYUDI NUR ALAM SATRIA S.Ip",
    certId: "CERT-11022026-MMS-Z4M7Q9W",
    role: "Peserta",
  },
  {
    id: 27,
    name: "ABDILLAH F S.Kom.",
    certId: "CERT-11022026-MMS-L5K9R2P",
    role: "Peserta",
  },
  {
    id: 28,
    name: "NUR MUHAMMAD FADHLULLAH S.Hub.Int.",
    certId: "CERT-11022026-MMS-N8M2V6C",
    role: "Peserta",
  },
  {
    id: 29,
    name: "INDRAWANI SURYANTI TANDIBAMBA S.E",
    certId: "CERT-11022026-MMS-X3Z1L8K",
    role: "Peserta",
  },
  {
    id: 30,
    name: "SYAKIR S.HI",
    certId: "CERT-11022026-MMS-W9Q5M2R",
    role: "Peserta",
  },
  {
    id: 31,
    name: "SUARNI S.Pd.I, M.M",
    certId: "CERT-11022026-MMS-P1N4V7C",
    role: "Peserta",
  },
  {
    id: 32,
    name: "JASMIR",
    certId: "CERT-11022026-MMS-M5L8K3J",
    role: "Peserta",
  },
  {
    id: 33,
    name: "SYAFIRA AMIR S.Pd",
    certId: "CERT-11022026-MMS-B7C2V9X",
    role: "Peserta",
  },
  {
    id: 34,
    name: "MUHAMMAD HAJIDIN S.Sos",
    certId: "CERT-11022026-MMS-Z9M1Q4W",
    role: "Peserta",
  },
  {
    id: 35,
    name: "MUH. YUSRAN YUSUF",
    certId: "CERT-11022026-MMS-L2K6R8P",
    role: "Peserta",
  },
  {
    id: 36,
    name: "NELCE TUDANG S.Pd",
    certId: "CERT-11022026-MMS-N6M9V1C",
    role: "Peserta",
  },
  {
    id: 37,
    name: "BONGGARAYA S.Pd",
    certId: "CERT-11022026-MMS-X8Z4L2K",
    role: "Peserta",
  },
  {
    id: 38,
    name: "PAILLIN S.Pd",
    certId: "CERT-11022026-MMS-W4Q8M7R",
    role: "Peserta",
  },
  {
    id: 39,
    name: "BERTHA S.Pd",
    certId: "CERT-11022026-MMS-P7N2V5C",
    role: "Peserta",
  },
  {
    id: 40,
    name: "NELCE LANGI MEWANGKA S.Pd",
    certId: "CERT-11022026-MMS-M1L5K9J",
    role: "Peserta",
  },
  {
    id: 41,
    name: "PAMPANG ARRUAN",
    certId: "CERT-11022026-MMS-B4C7V2X",
    role: "Peserta",
  },
  {
    id: 42,
    name: "ARIANUS S.Pd",
    certId: "CERT-11022026-MMS-Z1M6Q8W",
    role: "Peserta",
  },
  {
    id: 43,
    name: "DAMARIS DATU S.Pd",
    certId: "CERT-11022026-MMS-L8K3R5P",
    role: "Peserta",
  },
  {
    id: 44,
    name: "DEWISETIA RINI S.Pd",
    certId: "CERT-11022026-MMS-N1M4V9C",
    role: "Peserta",
  },
  {
    id: 45,
    name: "YOSEP",
    certId: "CERT-11022026-MMS-X5Z2L7K",
    role: "Peserta",
  },
  {
    id: 46,
    name: "MARKUS",
    certId: "CERT-11022026-MMS-W8Q1M4R",
    role: "Peserta",
  },
  {
    id: 47,
    name: "BORRONG SENGA'",
    certId: "CERT-11022026-MMS-P2N7V1C",
    role: "Peserta",
  },
  {
    id: 48,
    name: "ILANG",
    certId: "CERT-11022026-MMS-M9L4K6J",
    role: "Peserta",
  },
  {
    id: 49,
    name: "SARNI",
    certId: "CERT-11022026-MMS-B3C8V5X",
    role: "Peserta",
  },
  {
    id: 50,
    name: "I MADE WIDIANA S.M",
    certId: "CERT-11022026-MMS-Z6M2Q9W",
    role: "Peserta",
  },
  {
    id: 51,
    name: "MINANGA S.Ag",
    certId: "CERT-11022026-MMS-L4K8R1P",
    role: "Peserta",
  },
  {
    id: 52,
    name: "LINCE S.Pd.I",
    certId: "CERT-11022026-MMS-N9M5V3C",
    role: "Peserta",
  },
  {
    id: 53,
    name: "NISWAR ARIS MUNANDAR S.Pd.",
    certId: "CERT-11022026-MMS-X2Z7L4K",
    role: "Peserta",
  },
  {
    id: 54,
    name: "KAMARUDDIN",
    certId: "CERT-11022026-MMS-W1Q9M6R",
    role: "Peserta",
  },
  {
    id: 55,
    name: "RAMLAN S.P.",
    certId: "CERT-11022026-MMS-P5N3V8C",
    role: "Peserta",
  },
  {
    id: 56,
    name: "YUSUF S.H.",
    certId: "CERT-11022026-MMS-M6L1K9J",
    role: "Peserta",
  },
  {
    id: 57,
    name: "MARLIA S.Pd.I",
    certId: "CERT-11022026-MMS-B8C4V2X",
    role: "Peserta",
  },
  {
    id: 58,
    name: "IRWANTO S.Pd.I",
    certId: "CERT-11022026-MMS-Z2M9Q5W",
    role: "Peserta",
  },
  {
    id: 59,
    name: "RUSMAN",
    certId: "CERT-11022026-MMS-L7K1R4P",
    role: "Peserta",
  },
  {
    id: 60,
    name: "AGUS MARDIN, S.H",
    certId: "CERT-11022026-MMS-N3M6V9C",
    role: "Peserta",
  },
  {
    id: 61,
    name: "HAMZA S.E",
    certId: "CERT-11022026-MMS-X4Z8L1K",
    role: "Peserta",
  },
  {
    id: 62,
    name: "AHMAD SIMANGGALA AMMA S.M.",
    certId: "CERT-11022026-MMS-W9Q3M5R",
    role: "Peserta",
  },
  {
    id: 63,
    name: "SATRIA AGUNG MAHENDRA P. S.Kom",
    certId: "CERT-11022026-MMS-P1N8V4C",
    role: "Peserta",
  },
  {
    id: 64,
    name: "NELCE TASIK BULAWAN S.Pd",
    certId: "CERT-11022026-MMS-M4L6K2J",
    role: "Peserta",
  },
  {
    id: 65,
    name: "PETRUS S.IP",
    certId: "CERT-11022026-MMS-B9C1V7X",
    role: "Peserta",
  },
  {
    id: 66,
    name: "ANIKE",
    certId: "CERT-11022026-MMS-Z5M3Q8W",
    role: "Peserta",
  },
  {
    id: 67,
    name: "EFRAIM BUNTUMINANGA",
    certId: "CERT-11022026-MMS-L2K9R6P",
    role: "Peserta",
  },
  {
    id: 68,
    name: "MONIKA",
    certId: "CERT-11022026-MMS-N7M4V1C",
    role: "Peserta",
  },
  {
    id: 69,
    name: "YUNUS. U S.Th",
    certId: "CERT-11022026-MMS-X1Z5L9K",
    role: "Peserta",
  },
  {
    id: 70,
    name: "SIMSON D., S.Th",
    certId: "CERT-11022026-MMS-W6Q2M8R",
    role: "Peserta",
  },
  {
    id: 71,
    name: "WIRANTO. L S.H.",
    certId: "CERT-11022026-MMS-P8N5V3C",
    role: "Peserta",
  },
  {
    id: 72,
    name: "SYAWAL, S.HI",
    certId: "CERT-11022026-MMS-M2L7K1J",
    role: "Peserta",
  },
  {
    id: 73,
    name: "HASANUDDIN, S.HI",
    certId: "CERT-11022026-MMS-B4C9V6X",
    role: "Peserta",
  },
  {
    id: 74,
    name: "ABDUL RAHIM S.H.I, M.H.",
    certId: "CERT-11022026-MMS-Z8M1Q5W",
    role: "Peserta",
  },
  {
    id: 75,
    name: "KADRI, S.Pd.I",
    certId: "CERT-11022026-MMS-L3K6R9P",
    role: "Peserta",
  },
  {
    id: 76,
    name: "RUSMADI RIJAL SALEH S.H.I",
    certId: "CERT-11022026-MMS-N5M2V8C",
    role: "Peserta",
  },
  {
    id: 77,
    name: "BAHARUDDIN DEG. PERRANI, S.Ag",
    certId: "CERT-11022026-MMS-X9Z4L1K",
    role: "Peserta",
  },
  {
    id: 78,
    name: "ABDUL ARIFIN. A S.Ag.",
    certId: "CERT-11022026-MMS-W2Q8M3R",
    role: "Peserta",
  },
  {
    id: 79,
    name: "SAHARUDDIN SARDINI, S.Pd.I",
    certId: "CERT-11022026-MMS-P6N1V9C",
    role: "Peserta",
  },
  {
    id: 80,
    name: "RUSMIATI",
    certId: "CERT-11022026-MMS-M7L3K5J",
    role: "Peserta",
  },
  {
    id: 81,
    name: "IBRAHIM S.Ag",
    certId: "CERT-11022026-MMS-B1C8V4X",
    role: "Peserta",
  },
  {
    id: 82,
    name: "LUDIA D S.Th",
    certId: "CERT-11022026-MMS-Z3M6Q9W",
    role: "Peserta",
  },
  {
    id: 83,
    name: "HERMIN LEBO S.Th",
    certId: "CERT-11022026-MMS-L9K2R7P",
    role: "Peserta",
  },
  {
    id: 84,
    name: "MELTIH S. Th",
    certId: "CERT-11022026-MMS-N4M8V1C",
    role: "Peserta",
  },
  {
    id: 85,
    name: "KARAENG S. PAK",
    certId: "CERT-11022026-MMS-X6Z1L5K",
    role: "Peserta",
  },
  {
    id: 86,
    name: "BASRI, S.Sos",
    certId: "CERT-11022026-MMS-W7Q4M9R",
    role: "Peserta",
  },
  {
    id: 87,
    name: "JAMALUDDIN, S.HI, M.H",
    certId: "CERT-11022026-MMS-P3N9V2C",
    role: "Peserta",
  },
  {
    id: 88,
    name: "DEMMARAPA, S.Th",
    certId: "CERT-11022026-MMS-M5L1K8J",
    role: "Peserta",
  },
  {
    id: 89,
    name: "ADRIAN NAMIQ, S.Ag",
    certId: "CERT-11022026-MMS-B2C6V9X",
    role: "Peserta",
  },
  {
    id: 90,
    name: "THOMAS TATO' S.Sos.H.",
    certId: "CERT-11022026-MMS-Z9M4Q1W",
    role: "Peserta",
  },
  {
    id: 91,
    name: "DANIEL, S.Ag",
    certId: "CERT-11022026-MMS-L1K7R3P",
    role: "Peserta",
  },
  {
    id: 92,
    name: "ISMAIL.S.Pd.I",
    certId: "CERT-11022026-MMS-N8M5V2C",
    role: "Peserta",
  },
];

export default function App() {
  const [db, setDb] = useState(initialDB);
  const [view, setView] = useState("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUserName, setNewUserName] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const certIdFromUrl = params.get("certId");

    if (certIdFromUrl) {
      const user = db.find((u) => u.certId === certIdFromUrl);
      setSelectedUser(user || { notFound: true, certId: certIdFromUrl });
      setView("validation");
    }
  }, [db]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      const results = db.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.certId.toLowerCase().includes(query.toLowerCase()),
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const generateRandomCertId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 7; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `CERT-11022026-MMS-${result}`;
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUserName.trim()) return;

    const newUser = {
      id: db.length + 1,
      name: newUserName,
      certId: generateRandomCertId(),
      role: "Peserta",
    };
    setDb([...db, newUser]);
    setNewUserName("");
    alert(
      `Peserta ${newUser.name} berhasil ditambahkan dengan ID ${newUser.certId}`,
    );
  };

  const viewCertificate = (user) => {
    setSelectedUser(user);
    setView("certificate");
  };

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
      );
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js",
      );

      const { jsPDF } = window.jspdf;

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const imageOptions = {
        pixelRatio: 2,
        quality: 1.0,
        backgroundColor: "#ffffff",
      };

      // TANGKAP HALAMAN 1
      const page1 = document.getElementById("cert-page-1");
      window.scrollTo({ top: page1.offsetTop - 20, behavior: "instant" });
      await new Promise((resolve) => setTimeout(resolve, 400));
      const imgData1 = await window.htmlToImage.toJpeg(page1, imageOptions);
      doc.addImage(imgData1, "JPEG", 0, 0, 297, 210);

      // TANGKAP HALAMAN 2
      doc.addPage();
      const page2 = document.getElementById("cert-page-2");
      window.scrollTo({ top: page2.offsetTop - 20, behavior: "instant" });
      await new Promise((resolve) => setTimeout(resolve, 400));
      const imgData2 = await window.htmlToImage.toJpeg(page2, imageOptions);
      doc.addImage(imgData2, "JPEG", 0, 0, 297, 210);

      window.scrollTo({ top: 0, behavior: "smooth" });

      doc.save(`Sertifikat_${selectedUser.name.replace(/\s+/g, "_")}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(
        `Gagal membuat PDF: ${error.message}\n\nPastikan Anda terhubung ke internet untuk memuat library PDF.`,
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const getQRUrl = (certId) => {
    const baseUrl = window.location.origin + window.location.pathname;
    const validationUrl = `${baseUrl}?certId=${certId}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=0f172a&data=${encodeURIComponent(validationUrl)}&v=${Date.now()}`;
  };

  // --- RENDERERS ---

  if (view === "validation") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 text-center relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#f59e0b]"></div>

            {selectedUser?.notFound ? (
              <>
                <XCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                  Sertifikat Tidak Valid
                </h2>
                <p className="text-slate-500 mb-6">
                  Sertifikat dengan ID <strong>{selectedUser.certId}</strong>{" "}
                  tidak ditemukan dalam sistem kami.
                </p>
              </>
            ) : (
              <>
                <ShieldCheck className="w-20 h-20 text-[#0f172a] mx-auto mb-4" />
                <h2 className="text-2xl font-black text-[#0f172a] mb-2 tracking-wide">
                  SERTIFIKAT SAH
                </h2>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  Dokumen ini otentik dan telah diverifikasi oleh sistem.
                </p>

                <div className="bg-slate-50 rounded-xl p-6 text-left space-y-4 border border-slate-200 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#f59e0b] opacity-10 rounded-bl-full"></div>

                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                      Nama Peserta
                    </p>
                    <p className="font-bold text-[#0f172a] text-xl">
                      {selectedUser.name}
                    </p>
                  </div>
                  <div className="h-px w-full bg-slate-200 my-2"></div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                      Nomor Sertifikat
                    </p>
                    <p className="font-mono text-[#f59e0b] font-bold text-base">
                      {selectedUser.certId}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                      Kegiatan
                    </p>
                    <p className="text-sm text-[#0f172a] font-bold">
                      Pembinaan Kepegawaian
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Kemenag Kab. Mamasa
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    window.history.pushState({}, "", window.location.pathname);
                    setView("search");
                  }}
                  className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-[#f59e0b] font-bold py-3 px-4 rounded-xl transition-colors tracking-wider uppercase text-sm"
                >
                  Unduh / Lihat Sertifikat
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (view === "certificate") {
    return (
      <div className="min-h-screen bg-slate-200 py-8">
        {/* Print Styles & Fonts */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap');

            @media print {
              body {
                background-color: white;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .no-print {
                display: none !important;
              }
              @page {
                size: A4 landscape;
                margin: 0;
              }
              .cert-page {
                width: 297mm;
                height: 210mm;
                margin: 0;
                padding: 0;
                box-shadow: none !important;
                page-break-after: always;
                page-break-inside: avoid;
              }
            }
            .font-script { font-family: 'Great Vibes', cursive; }
            .font-serif { font-family: 'Playfair Display', serif; }
            .font-sans { font-family: 'Montserrat', sans-serif; }

            /* Pola Latar Belakang Wave Samar */
            .bg-pattern {
              background-color: #fdfdfd;
              background-image: url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.5C10 6.5 10 0.5 20 0.5C30 0.5 30 6.5 40 6.5' stroke='%23e2e8f0' stroke-width='1' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
              background-size: 30px;
            }

            /* SCROLLBAR & TOUCH PANS (Solusi Pasti) */
            .scroll-container {
              overflow-x: auto !important;
              -webkit-overflow-scrolling: touch !important;
              touch-action: pan-x pan-y !important;
              width: 100%;
              max-width: 100vw;
            }
            .scroll-container::-webkit-scrollbar {
              height: 10px;
            }
            .scroll-container::-webkit-scrollbar-track {
              background: #e2e8f0;
              border-radius: 8px;
              margin: 0 16px;
            }
            .scroll-container::-webkit-scrollbar-thumb {
              background: #94a3b8;
              border-radius: 8px;
            }
          `}
        </style>

        {/* Toolbar */}
        <div className="max-w-5xl mx-auto px-4 mb-6 relative z-50">
          <div className="flex justify-between items-center no-print bg-white p-4 rounded-2xl shadow-sm border border-slate-200 font-sans">
            <button
              onClick={() => setView("search")}
              className="text-slate-500 hover:text-[#0f172a] font-bold px-4 py-2 transition-colors flex items-center gap-2"
            >
              &larr; Kembali
            </button>
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="flex items-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-[#f59e0b] px-6 py-3 rounded-xl font-bold transition-colors shadow-sm disabled:opacity-50"
            >
              {isDownloading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Download size={18} />
              )}
              {isDownloading ? "Memproses PDF..." : "Download PDF"}
            </button>
          </div>
        </div>

        {/* Indikator Panduan Scroll (Hanya Muncul di Mobile) */}
        <div className="text-center w-full mb-4 lg:hidden">
          <span className="inline-flex items-center gap-2 bg-white/60 text-slate-600 text-xs px-4 py-1.5 rounded-full font-medium shadow-sm animate-pulse border border-slate-300">
            Geser layar untuk melihat ➔
          </span>
        </div>

        {/* --- WRAPPER SCROLL HORIZONTAL (SOLUSI FIX LAYOUT UNTUK BROWSER EKSTERNAL) --- */}
        <div className="scroll-container">
          {/* Rahasia perbaikannya ada di sini:
            Kita membungkusnya dalam satu elemen w-max yang margin kirinya dikunci,
            sehingga browser (termasuk Astro) dipaksa mengizinkan scroll ke kanan.
          */}
          <div className="w-max ml-4 lg:mx-auto flex flex-col gap-12 pr-8 lg:pr-0 pb-12">
            {/* --- HALAMAN 1 : SERTIFIKAT UTAMA --- */}
            <div
              id="cert-page-1"
              className="cert-page bg-pattern shadow-lg border border-slate-300 relative overflow-hidden font-sans flex items-center justify-center shrink-0"
              style={{
                width: "297mm",
                height: "210mm",
                position: "relative",
                transform: "translateZ(0)",
              }}
            >
              {/* ======================================= */}
              {/* ORNAMEN GEOMETRIS KIRI */}
              {/* ======================================= */}
              <div className="absolute top-0 left-0 w-48 h-full pointer-events-none z-0">
                {/* Navy Setengah Lingkaran Kiri Atas */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-[#0f172a] rounded-br-full"></div>
                {/* Yellow Balok Miring Kiri Atas */}
                <div className="absolute top-8 left-0 w-16 h-48 bg-[#f59e0b] transform skew-y-[35deg] origin-top-left"></div>
                {/* Garis-garis Sejajar Navy */}
                <div className="absolute top-36 left-12 flex gap-1 transform skew-y-[35deg]">
                  <div className="w-1 h-24 bg-[#0f172a]"></div>
                  <div className="w-1 h-24 bg-[#0f172a]"></div>
                  <div className="w-1 h-24 bg-[#0f172a]"></div>
                </div>

                {/* Lingkaran Kuning Kecil */}
                <div className="absolute top-[40%] left-6 w-8 h-8 rounded-full bg-[#f59e0b]"></div>

                {/* Segitiga Navy Kiri Tengah */}
                <div
                  className="absolute top-[50%] left-0 w-24 h-24 bg-[#0f172a]"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                ></div>

                {/* Yellow Balok Bawah Kiri */}
                <div
                  className="absolute bottom-0 left-0 w-24 h-64 bg-[#f59e0b]"
                  style={{
                    clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
                  }}
                ></div>
                {/* Navy Segitiga Bawah Kiri */}
                <div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-[#0f172a]"
                  style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                ></div>
                {/* Segitiga Putih Kecil sebagai aksen */}
                <div
                  className="absolute bottom-8 left-4 w-6 h-6 bg-white"
                  style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                ></div>
              </div>

              {/* ======================================= */}
              {/* ORNAMEN GEOMETRIS KANAN */}
              {/* ======================================= */}
              <div className="absolute top-0 right-0 w-48 h-full pointer-events-none z-0">
                {/* Yellow Balok Kanan Atas */}
                <div
                  className="absolute top-0 right-0 w-24 h-48 bg-[#f59e0b]"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                ></div>
                {/* Navy Garis Horizontal Miring */}
                <div className="absolute top-16 right-0 w-32 h-10 bg-[#0f172a] transform -skew-x-[30deg] origin-right"></div>
                {/* Garis-garis Kuning Sejajar Kanan Atas */}
                <div className="absolute top-36 right-8 flex gap-1 transform -skew-x-[30deg]">
                  <div className="w-1 h-16 bg-[#f59e0b]"></div>
                  <div className="w-1 h-16 bg-[#f59e0b]"></div>
                  <div className="w-1 h-16 bg-[#f59e0b]"></div>
                </div>

                {/* Lingkaran Kombinasi Kanan Tengah */}
                <div className="absolute top-[45%] right-6 w-12 h-12 rounded-full border-[5px] border-[#0f172a] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#f59e0b]"></div>
                </div>

                {/* Yellow Balok Kanan Bawah */}
                <div
                  className="absolute bottom-16 right-0 w-32 h-64 bg-[#f59e0b]"
                  style={{
                    clipPath: "polygon(100% 0, 0 20%, 0 100%, 100% 80%)",
                  }}
                ></div>
                {/* Navy Setengah Segitiga Kanan Bawah */}
                <div
                  className="absolute bottom-0 right-0 w-48 h-48 bg-[#0f172a]"
                  style={{ clipPath: "polygon(100% 20%, 20% 100%, 100% 100%)" }}
                ></div>
              </div>

              {/* ======================================= */}
              {/* KONTEN UTAMA SERTIFIKAT */}
              {/* ======================================= */}
              <div className="relative z-10 w-[70%] h-full flex flex-col items-center pt-20 pb-12 text-center">
                {/* Logo Kemenag (Ditambahkan ?v=1 untuk cache-busting CORS) */}
                <div className="mb-4 bg-white/50 p-2 rounded-full backdrop-blur-sm">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Seal_of_the_Ministry_of_Religious_Affairs_of_the_Republic_of_Indonesia.svg?v=1"
                    alt="Kemenag"
                    className="w-16 h-16 object-contain drop-shadow-sm"
                    crossOrigin="anonymous"
                  />
                </div>

                {/* Judul Sertifikat */}
                <div className="mb-4">
                  <h1 className="text-6xl font-black text-[#0f172a] tracking-[0.15em] uppercase leading-none">
                    Sertifikat
                  </h1>
                  <p className="text-xs font-bold text-slate-500 tracking-[0.3em] uppercase mt-1">
                    No: {selectedUser.certId}
                  </p>
                </div>

                {/* Penerima */}
                <p className="text-[10px] text-slate-500 tracking-[0.2em] uppercase font-bold mb-2">
                  Sertifikat Ini Diberikan Kepada:
                </p>

                <div className="w-full flex flex-col items-center mb-6">
                  <h2 className="text-[38px] font-serif font-black text-[#0f172a] leading-tight px-8 tracking-wider max-w-3xl mx-auto">
                    {selectedUser.name}
                  </h2>
                  <div className="w-3/4 h-[1.5px] bg-[#0f172a]/30 mt-4"></div>
                </div>

                {/* Deskripsi */}
                <p className="text-xs text-slate-600 leading-relaxed max-w-3xl mx-auto uppercase tracking-widest font-semibold mb-4">
                  Atas dedikasi dan partisipasinya sebagai{" "}
                  <span className="font-bold text-[#f59e0b]">
                    {selectedUser.role}
                  </span>{" "}
                  dalam kegiatan Pembinaan Kepegawaian yang diselenggarakan
                  secara resmi oleh Kantor Kementerian Agama Kabupaten Mamasa.
                </p>

                {/* Footer / Tanda Tangan */}
                <div className="w-full flex justify-between items-end px-4">
                  {/* Tanda Tangan Kiri */}
                  <div className="text-center w-48 relative top-[-140px]">
                    <img
                      src={"/ttd-yusuf.png"}
                      alt="Tanda Tangan Kepala Kantor"
                      className="w-32 h-auto object-contain mb-2 absolute top-0 left-4"
                      crossOrigin="anonymous"
                    />
                    <div className="border-b border-slate-400 pb-1 mb-1 mt-12">
                      <p className="text-[10px] font-black text-[#0f172a] uppercase tracking-wider">
                        YUSUF S.T, M.M.
                      </p>
                    </div>
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">
                      Ketua Panitia
                    </p>
                  </div>
                  {/* QR Code & Tanggal (Tengah) */}
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[9px] text-[#0f172a] tracking-widest uppercase font-bold mb-6">
                      Mamasa, 11 Februari 2026
                    </p>
                    <div className="p-1 bg-white border-2 border-slate-100 rounded-lg shadow-sm mb-1">
                      <img
                        src={getQRUrl(selectedUser.certId)}
                        alt="QR Code"
                        className="w-16 h-16 object-contain"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <p className="text-[6px] text-slate-400 uppercase tracking-[0.2em] font-bold mb-8">
                      No: {selectedUser.certId}
                    </p>

                    {/* Tambahan Mengetahui */}
                    <div className="text-center w-48 relative">
                      <p className="text-[8px] text-[#0f172a] uppercase tracking-widest font-bold mb-14">
                        Mengetahui,
                        <br />
                        Kepala Kantor
                      </p>
                      {/* ttd image from img public folder */}
                      <img
                        src={"/ttd.png"}
                        alt="Tanda Tangan Kepala Kantor"
                        className="w-32 h-auto object-contain mb-2 absolute top-0 opacity-80"
                        crossOrigin="anonymous"
                      />

                      <div className="border-b border-slate-400 pb-1 mb-1">
                        <p className="text-[10px] font-black text-[#0f172a] uppercase tracking-wider">
                          H. RAMLI L., S.Ag., M.Pd.I
                        </p>
                      </div>
                      <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">
                        NIP. 197206012005011008
                      </p>
                    </div>
                  </div>

                  {/* Tanda Tangan Kanan */}
                  <div className="text-center w-48 relative top-[-140px]">
                    <img
                      src={"/ttd-nawir.png"}
                      alt="Tanda Tangan Kepala Kantor"
                      className="w-24 h-auto object-contain mb-2 absolute -top-2 left-10"
                      crossOrigin="anonymous"
                    />

                    <div className="border-b border-slate-400 pb-1 mb-1 mt-12">
                      <p className="text-[10px] font-black text-[#0f172a] uppercase tracking-wider">
                        MUNAWIR, S.E.
                      </p>
                    </div>
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">
                      Sekretaris
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- HALAMAN 2 : TRANSKRIP JP --- */}
            <div
              id="cert-page-2"
              className="cert-page bg-pattern shadow-lg border border-slate-300 relative overflow-hidden flex flex-col mb-8 font-sans shrink-0"
              style={{
                width: "297mm",
                height: "210mm",
                position: "relative",
                transform: "translateZ(0)",
              }}
            >
              {/* Ornamen Transkrip Kiri */}
              <div className="absolute top-0 left-0 w-24 h-full pointer-events-none z-0 opacity-70">
                <div
                  className="absolute top-0 left-0 w-24 h-48 bg-[#0f172a]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-16 h-48 bg-[#f59e0b]"
                  style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                ></div>
              </div>

              {/* Ornamen Transkrip Kanan */}
              <div className="absolute top-0 right-0 w-24 h-full pointer-events-none z-0 opacity-70">
                <div
                  className="absolute top-0 right-0 w-20 h-40 bg-[#f59e0b]"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                ></div>
                <div
                  className="absolute bottom-0 right-0 w-24 h-32 bg-[#0f172a]"
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                ></div>
              </div>

              <div className="px-[120px] py-[60px] h-full flex flex-col relative z-20">
                {/* Header Transkrip */}
                <div className="flex justify-between items-end pb-4 mb-6 border-b-2 border-[#0f172a]/10">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/82/Seal_of_the_Ministry_of_Religious_Affairs_of_the_Republic_of_Indonesia.svg?v=1"
                      alt="Logo"
                      className="w-14 h-14"
                      crossOrigin="anonymous"
                    />
                    <div>
                      <h2 className="text-3xl font-black text-[#0f172a] uppercase tracking-widest mb-1">
                        Kantor Kemenag Mamasa
                      </h2>
                      <h3 className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                        Pelatihan Pembinaan Kepegawaian
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] text-[#f59e0b] uppercase tracking-widest font-black mb-1">
                      Diberikan Kepada
                    </p>
                    <p className="text-xl font-black text-[#0f172a] uppercase">
                      {selectedUser.name}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono font-bold mt-0.5">
                      ID: {selectedUser.certId}
                    </p>
                  </div>
                </div>

                {/* Tabel Jam Pelajaran (Desain Bersih & Elegan) */}
                <div className="flex-grow">
                  <table className="w-full text-left font-sans text-sm">
                    <thead>
                      <tr className="bg-[#0f172a] text-white">
                        <th className="py-3 px-4 font-bold w-12 text-center uppercase text-[10px] tracking-widest rounded-tl-lg">
                          No
                        </th>
                        <th className="py-3 px-4 font-bold uppercase text-[10px] tracking-widest">
                          Materi Kompetensi
                        </th>
                        <th className="py-3 px-4 font-bold w-48 uppercase text-[10px] tracking-widest">
                          Instruktur
                        </th>
                        <th className="py-3 px-4 font-bold w-24 text-center uppercase text-[10px] tracking-widest rounded-tr-lg">
                          JP
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white/80">
                      <tr className="border-b border-slate-200">
                        <td className="py-4 px-4 text-center text-slate-500 text-xs font-bold">
                          1
                        </td>
                        <td className="py-4 px-4 text-[#0f172a] font-bold text-xs">
                          Kebijakan Kementerian Agama Dalam Pengelolaan Anggaran
                          Tahun 2026
                        </td>
                        <td className="py-4 px-4 text-slate-600 text-xs font-medium">
                          Ka. Kanwil Kemenag Sulbar
                        </td>
                        <td className="py-4 px-4 text-center font-black text-[#f59e0b] text-base">
                          2
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 bg-slate-50/50">
                        <td className="py-4 px-4 text-center text-slate-500 text-xs font-bold">
                          2
                        </td>
                        <td className="py-4 px-4 text-[#0f172a] font-bold text-xs">
                          Pembinaan ASN Dalam Rangka Peningkatan Kinerja
                          Instansi Tahun 2026
                        </td>
                        <td className="py-4 px-4 text-slate-600 text-xs font-medium">
                          Tim Kepegawaian Kanwil Kemenag Sulbar
                        </td>
                        <td className="py-4 px-4 text-center font-black text-[#f59e0b] text-base">
                          2
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-4 px-4 text-center text-slate-500 text-xs font-bold">
                          3
                        </td>
                        <td className="py-4 px-4 text-[#0f172a] font-bold text-xs">
                          Pengembangan Karir dan Pengembangan Kompetensi ASN
                        </td>
                        <td className="py-4 px-4 text-slate-600 text-xs font-medium">
                          Tim Kepegawaian Kanwil Kemenag Sulbar
                        </td>
                        <td className="py-4 px-4 text-center font-black text-[#f59e0b] text-base">
                          3
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="bg-[#f59e0b]/10 border-t-2 border-[#f59e0b]">
                        <td
                          colSpan="3"
                          className="py-4 px-6 font-black text-right text-[#0f172a] uppercase tracking-widest text-[11px] rounded-bl-lg"
                        >
                          Total Jam Pelajaran
                        </td>
                        <td className="py-4 px-4 text-center font-black text-xl text-[#0f172a] rounded-br-lg">
                          7 JP
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <p className="mt-4 text-[9px] text-slate-400 font-semibold tracking-wide">
                    * 1 Jam Pelajaran (JP) bernilai setara dengan 45 menit tatap
                    muka / sesi praktik lapangan.
                  </p>
                </div>

                {/* Footer Halaman 2 */}
                <div className="mt-4 flex justify-between items-end">
                  <div className="flex gap-4 items-center">
                    <div className="p-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                      <img
                        src={getQRUrl(selectedUser.certId)}
                        alt="QR Code"
                        className="w-14 h-14 object-contain"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-[#0f172a] flex items-center gap-1.5 uppercase tracking-widest">
                        <FileCheck size={14} className="text-[#f59e0b]" /> VALID
                      </p>
                      <p className="text-[7px] text-slate-400 mt-1 uppercase tracking-widest font-bold">
                        Scan untuk memvalidasi
                        <br />
                        keaslian transkrip.
                      </p>
                    </div>
                  </div>

                  <div className="text-center w-48 relative">
                    <img
                      src={"/ttd-yusuf.png"}
                      alt="Tanda Tangan Kepala Kantor"
                      className="w-32 h-auto object-contain mb-2 absolute top-0 left-4"
                      crossOrigin="anonymous"
                    />
                    <div className="border-b border-slate-400 pb-1 mb-1 mt-12">
                      <p className="text-[10px] font-black text-[#0f172a] uppercase tracking-wider">
                        YUSUF S.T, M.M.
                      </p>
                    </div>
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">
                      Ketua Panitia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- HALAMAN UTAMA : PENCARIAN ---
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#0f172a] pb-12">
      {/* Header/Hero */}
      <header className="bg-[#0f172a] text-white py-20 px-4 relative overflow-hidden">
        {/* Ornamen Latar Portal */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#f59e0b] opacity-10 rounded-bl-full transform"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-tr-full transform"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-[#f59e0b]/20 text-[#f59e0b] rounded-full mb-6">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-wide text-white">
            Sertifikasi & Validasi
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
            Portal pencarian, validasi, dan pengunduhan dokumen e-sertifikat
            secara mandiri dengan verifikasi QR Code.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-4 py-4 border-2 border-slate-100 rounded-xl text-lg font-bold text-[#0f172a] focus:ring-0 focus:border-[#f59e0b] transition-all outline-none bg-slate-50 focus:bg-white"
              placeholder="Masukkan Nama Lengkap atau Nomor Registrasi..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          {/* Search Results */}
          {searchQuery.length > 2 && (
            <div className="mt-6">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                Hasil Pencarian ({searchResults.length})
              </h3>
              {searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((user) => (
                    <div
                      key={user.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-slate-100 rounded-xl hover:border-[#f59e0b]/50 transition-all bg-white group"
                    >
                      <div className="mb-4 sm:mb-0">
                        <p className="font-black text-xl text-[#0f172a]">
                          {user.name}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-[#f59e0b] border border-slate-200 text-xs font-bold px-3 py-1 rounded-md font-mono">
                            <QrCode size={12} /> {user.certId}
                          </span>
                          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                            {user.role}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => viewCertificate(user)}
                        className="inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-[#f59e0b] px-6 py-3 rounded-xl font-bold transition-colors shadow-sm text-sm uppercase tracking-wider"
                      >
                        <Download size={16} />
                        Unduh
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-slate-500 text-sm font-bold bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  Data tidak ditemukan untuk{" "}
                  <span className="font-black text-[#0f172a]">
                    "{searchQuery}"
                  </span>
                  .<br />
                  Pastikan penulisan ejaan sudah sesuai.
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
