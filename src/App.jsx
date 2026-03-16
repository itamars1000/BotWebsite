import { useState, useEffect } from "react"

const BOT_LINK = "https://t.me/yaditabot"
const PAYBOX_LINK = "https://links.payboxapp.com/f9r2nhvpy1b"

function TelegramIcon({ className }) {
  return (
    <svg className={className || "w-5 h-5"} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function HawkSVG({ className }) {
  return (
    <svg viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-auto"}>
      <circle cx="100" cy="112" r="80" fill="#EFF6FF" opacity="0.65" />
      <ellipse cx="36" cy="126" rx="48" ry="26" fill="#1E293B" transform="rotate(-22 36 126)" />
      <ellipse cx="164" cy="126" rx="48" ry="26" fill="#1E293B" transform="rotate(22 164 126)" />
      <ellipse cx="36" cy="122" rx="32" ry="16" fill="#334155" transform="rotate(-22 36 122)" />
      <ellipse cx="164" cy="122" rx="32" ry="16" fill="#334155" transform="rotate(22 164 122)" />
      <ellipse cx="100" cy="140" rx="48" ry="58" fill="#0F172A" />
      <ellipse cx="100" cy="156" rx="30" ry="38" fill="#1E293B" />
      <ellipse cx="100" cy="164" rx="18" ry="26" fill="#334155" opacity="0.55" />
      <circle cx="100" cy="92" r="44" fill="#0F172A" />
      <circle cx="86" cy="77" r="12" fill="white" opacity="0.05" />
      <path d="M73 56 L65 30 L84 54 Z" fill="#0F172A" />
      <path d="M127 56 L135 30 L116 54 Z" fill="#0F172A" />
      <path d="M73 55 L69 38 L82 54 Z" fill="#1E293B" />
      <path d="M127 55 L131 38 L118 54 Z" fill="#1E293B" />
      <circle cx="82" cy="94" r="19" fill="#FEF3C7" />
      <circle cx="118" cy="94" r="19" fill="#FEF3C7" />
      <circle cx="82" cy="94" r="14" fill="#EAB308" />
      <circle cx="118" cy="94" r="14" fill="#EAB308" />
      <circle cx="82" cy="94" r="8" fill="#0F172A" />
      <circle cx="118" cy="94" r="8" fill="#0F172A" />
      <circle cx="86" cy="90" r="3.5" fill="white" />
      <circle cx="122" cy="90" r="3.5" fill="white" />
      <path d="M100 107 L89 120 L111 120 Z" fill="#EAB308" />
      <path d="M100 107 L89 113 L111 113 Z" fill="#D97706" />
      <ellipse cx="100" cy="172" rx="13" ry="18" fill="#EAB308" opacity="0.18" />
      <rect x="77" y="190" width="10" height="18" rx="5" fill="#1E293B" />
      <rect x="113" y="190" width="10" height="18" rx="5" fill="#1E293B" />
      <path d="M82 207 L71 218" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
      <path d="M82 207 L79 220" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
      <path d="M82 207 L91 218" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
      <path d="M118 207 L107 218" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
      <path d="M118 207 L115 220" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
      <path d="M118 207 L127 218" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-slate-100/60">
      <div className="px-5 h-14 flex items-center justify-end">
        <span className="font-black text-[1.2rem] text-[#0F172A] tracking-tight">
          RentHawk <span className="text-[#EAB308]">TLV</span>
        </span>
      </div>
    </header>
  )
}

const HERO_NOTIFS = [
  { area: "פלורנטין", rooms: "3", price: "6,800", live: false },
  { area: "דיזנגוף",  rooms: "2", price: "5,900", live: true  },
  { area: "לבונטין",  rooms: "2", price: "5,600", live: false },
]

function HeroNotifCard({ notif, delay }) {
  return (
    <div
      className="animate-slide-up bg-white rounded-2xl px-4 py-3 flex items-start gap-3"
      style={{ boxShadow: "0 4px 20px rgba(15,23,42,0.07)", animationDelay: delay || "0s" }}
    >
      <span className="text-base leading-none mt-0.5">📍</span>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[#0F172A] text-sm leading-snug">
          דירה חדשה — {notif.area} {notif.rooms} חדרים | ₪{notif.price}
        </p>
        <p className="text-[#475569] text-xs font-medium mt-0.5">
          {notif.live ? "🟢 פורסם עכשיו" : "⏱ פורסם לפני כמה שניות"}
        </p>
      </div>
      {notif.live && <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 animate-pulse" />}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#F9F8F6] pt-14">
      <div className="px-5 pt-8 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF3C7] border border-amber-200/80 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse" />
          <span className="text-amber-800 font-semibold text-xs">פעיל 24/7 · חינמי לגמרי</span>
        </div>
        <h1 className="text-[2.3rem] font-black text-[#0F172A] leading-[1.12] tracking-tight mb-4">
          הדירות הכי שוות בתל אביב.{" "}
          <span className="text-[#EAB308]">לפני כולם.</span>
        </h1>
        <p className="text-[1rem] text-[#475569] leading-relaxed font-medium mb-7">
          בוט חכם שסורק פייסבוק ויד2 24/7 ומתריע ברגע שמופיעה דירה שמתאימה לך.
        </p>
      </div>
      <div className="flex justify-center px-8 animate-hawk-bob">
        <img src="/hawk-hero.png" alt="RentHawk" className="w-44 h-auto drop-shadow-xl" />
      </div>
      <div className="flex flex-col gap-2.5 px-5 mt-5 mb-7">
        {HERO_NOTIFS.map(function(n, i) {
          return <HeroNotifCard key={i} notif={n} delay={String(i * 0.15) + "s"} />
        })}
      </div>
      <div className="px-5 pb-8">
        <a
          href={BOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-cta-pulse flex items-center justify-center gap-3 w-full h-14 rounded-full bg-[#0F172A] text-white font-bold text-base mb-4"
        >
          <TelegramIcon className="w-5 h-5" />
          התחל סריקה בטלגרם
        </a>
        <div className="flex items-center justify-center gap-4">
          {["ללא הרשמה", "0 ₪ לצמיתות", "מוכן ב-60 שנ"].map(function(t) {
            return (
              <span key={t} className="flex items-center gap-1 text-xs text-[#475569] font-medium">
                <span className="text-emerald-500 text-sm">✓</span>
                {t}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const BADGES = [
  { icon: "⏰", label: "סריקה 24/7" },
  { icon: "🔔", label: "התראות בזמן אמת" },
  { icon: "🚫", label: "אפס ספאם" },
]

function TrustBadges() {
  return (
    <section className="bg-white py-5 border-y border-slate-100">
      <div className="flex gap-3 px-5 overflow-x-auto no-scrollbar">
        {BADGES.map(function(b) {
          return (
            <div
              key={b.label}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-[#F9F8F6] rounded-full border border-slate-200"
              style={{ boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
            >
              <span className="text-sm">{b.icon}</span>
              <span className="text-[#475569] font-semibold text-xs whitespace-nowrap">{b.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const FEATURES = [
  { icon: "⚡", title: "מהירות שיא", desc: "התראה תוך שניות מהרגע שהמודעה עולה. לפני כל סוכן, לפני כולם." },
  { icon: "🎯", title: "סינון חכם",  desc: "רק דירות שמתאימות למחיר ולאזור שלך. בלי רעש, בלי ספאם." },
  { icon: "🕵️", title: "כיסוי מלא", desc: "סריקה של קבוצות פייסבוק, יד2 ומודעות פרטיות — הכל במקום אחד." },
]

function FeaturesSection() {
  return (
    <section className="bg-[#F9F8F6] py-10 px-5">
      <div className="mb-7">
        <p className="text-xs font-black text-[#EAB308] uppercase tracking-widest mb-2">למה RentHawk?</p>
        <h2 className="text-[1.6rem] font-black text-[#0F172A] leading-tight">שלוש סיבות לא לחפש לבד</h2>
      </div>
      <div className="flex flex-col gap-4">
        {FEATURES.map(function(f, i) {
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 flex items-start gap-4 transition-transform duration-200 active:scale-[0.98]"
              style={{ boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#EAB308] flex items-center justify-center text-xl">
                {f.icon}
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <h3 className="font-black text-[#0F172A] text-base leading-tight">{f.title}</h3>
                <p className="text-[#475569] text-sm font-medium leading-relaxed">{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const STEPS = [
  { icon: "💬", title: "מתחברים לבוט בטלגרם", desc: "לוחצים על כפתור אחד — ללא הרשמה, ללא פרטים אישיים.", num: "01" },
  { icon: "⚙️", title: "מגדירים תקציב ואזור", desc: "אומרים לבוט כמה חדרים, איזה שכונה, ומה המחיר המקסימלי.", num: "02" },
  { icon: "🔔", title: "מקבלים התראות מידיות", desc: "ברגע שדירה מתאימה מופיעה — מגיעה הודעה ישירות לטלגרם.", num: "03" },
]

function HowItWorksSection() {
  return (
    <section className="bg-white py-10 px-5">
      <div className="mb-7">
        <p className="text-xs font-black text-[#EAB308] uppercase tracking-widest mb-2">תהליך</p>
        <h2 className="text-[1.6rem] font-black text-[#0F172A] leading-tight">איך זה עובד</h2>
      </div>
      <div className="relative flex flex-col">
        {STEPS.map(function(s, i) {
          return (
            <div key={i} className="flex gap-5 relative">
              {i < STEPS.length - 1 && (
                <div
                  className="absolute bg-slate-100"
                  style={{ right: "23px", top: "52px", width: "2px", bottom: "-12px" }}
                />
              )}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center text-xl z-10">
                {s.icon}
              </div>
              <div className="pb-10 pt-1">
                <span className="inline-block text-xs font-black text-[#EAB308] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full mb-1.5">
                  {s.num}
                </span>
                <h3 className="font-black text-[#0F172A] text-base leading-tight mb-1">{s.title}</h3>
                <p className="text-[#475569] text-sm font-medium leading-relaxed">{s.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const ALL_DEMO = [
  { area: "לבונטין",     rooms: "2", price: "5,600" },
  { area: "רוטשילד",    rooms: "3", price: "7,200" },
  { area: "פלורנטין",   rooms: "2", price: "5,800" },
  { area: "שינקין",     rooms: "1", price: "4,500" },
  { area: "הצפון הישן", rooms: "4", price: "9,500" },
  { area: "יפו",        rooms: "3", price: "6,400" },
]

function DemoMessage({ msg, fresh }) {
  var isDark = fresh
  return (
    <div className={"flex justify-end " + (fresh ? "animate-notif-in" : "")}>
      <div
        className={"rounded-2xl rounded-tl-sm px-4 py-3 max-w-[88%] " + (isDark ? "bg-[#0F172A]" : "bg-white border border-slate-200/80")}
        style={{ boxShadow: isDark ? "0 4px 16px rgba(15,23,42,0.22)" : "0 2px 10px rgba(15,23,42,0.04)" }}
      >
        <div className="flex items-start gap-2">
          <span className="text-sm mt-0.5">📍</span>
          <div>
            <p className={"font-bold text-sm leading-snug " + (isDark ? "text-white" : "text-[#0F172A]")}>
              {msg.area} — {msg.rooms} חדרים | ₪{msg.price}
            </p>
            <p className={"text-xs font-medium mt-1 " + (isDark ? "text-[#EAB308]" : "text-[#475569]")}>
              {fresh ? "🟢 פורסם עכשיו" : "⏱ פורסם לפני כמה דקות"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PayboxSection() {
  return (
    <section className="bg-white py-10 px-5">
      <div className="rounded-3xl p-7 text-center" style={{ background: "#F0FDF4", boxShadow: "0 4px 20px rgba(15,23,42,0.07)" }}>
        <div className="text-4xl mb-4">💳</div>
        <h2 className="text-[1.4rem] font-black text-[#0F172A] leading-tight mb-2">
          רוצה לתמוך בפרויקט?
        </h2>
        <p className="text-[#475569] text-sm font-medium leading-relaxed mb-6">
          אהלן! הבוט הזה מופעל באהבה כדי לעזור לכולנו למצוא דירה ושותפים בקלות ובמהירות. כדי שהבוט יוכל להמשיך לסרוק את יד2 וקבוצות פייסבוק 24/7 באופן רציף, ולשלוח התראות באופן מיידי בלי לקרוס, ישנן עלויות חודשיות של אחסון בשרתים שעומדות על כמה מאות שקלים בחודש. אם הבוט עזר לך לחסוך זמן יקר וכאב ראש, או אפילו עזר לך למצוא דירה מדהימה - אשמח מאוד אם תשקול לתמוך בהמשך הפעילות שלו! מובן שזה לא חובה וכל סכום עוזר מאוד. 🙏"
        </p>
        <a
          href={PAYBOX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-14 rounded-full font-bold text-base text-white"
          style={{ background: "#16A34A", boxShadow: "0 8px 24px rgba(22,163,74,0.35)" }}
        >
          <span className="text-lg">💳</span>
          תשלום דרך פייבוקס
        </a>
      </div>
    </section>
  )
}

function LiveDemoFeed() {
  var initial = [ALL_DEMO[1], ALL_DEMO[2], ALL_DEMO[3]]
  var result = useState(initial)
  var msgs = result[0]
  var setMsgs = result[1]
  var freshResult = useState(null)
  var freshMsg = freshResult[0]
  var setFreshMsg = freshResult[1]
  var idxResult = useState(0)
  var cycleIdx = idxResult[0]
  var setCycleIdx = idxResult[1]

  useEffect(function() {
    var timer = setInterval(function() {
      var incoming = ALL_DEMO[cycleIdx % ALL_DEMO.length]
      setFreshMsg(incoming)
      setTimeout(function() {
        setMsgs(function(prev) { return [incoming].concat(prev.slice(0, 3)) })
        setFreshMsg(null)
      }, 600)
      setCycleIdx(function(c) { return c + 1 })
    }, 3500)
    return function() { clearInterval(timer) }
  }, [cycleIdx])

  return (
    <section className="bg-[#F9F8F6] py-10 px-5">
      <div className="mb-7">
        <p className="text-xs font-black text-[#EAB308] uppercase tracking-widest mb-2">דמו חי</p>
        <h2 className="text-[1.6rem] font-black text-[#0F172A] leading-tight">ככה זה נראה בפועל</h2>
      </div>
      <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 10px 30px rgba(15,23,42,0.09)" }}>
        <div className="bg-[#0F172A] px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#EAB308] flex items-center justify-center font-black text-[#0F172A] text-sm">
            🦅
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none mb-1">RentHawk TLV Bot</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-slate-400 text-xs">online</span>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2.5 bg-[#ECE5DD] min-h-[220px]">
          {freshMsg && <DemoMessage msg={freshMsg} fresh={true} />}
          {msgs.map(function(m, i) {
            return <DemoMessage key={m.area + i} msg={m} fresh={false} />
          })}
        </div>
      </div>
    </section>
  )
}


function MainCTASection() {
  return (
    <section className="px-5 py-10">
      <div className="rounded-3xl p-7 text-center" style={{ background: "#FEF3C7", boxShadow: "0 10px 30px rgba(15,23,42,0.06)" }}>
        <div className="text-5xl mb-5">🦅</div>
        <h2 className="text-[1.6rem] font-black text-[#0F172A] leading-tight mb-3">
          רוצה לראות דירות לפני כולם?
        </h2>
        <p className="text-[#475569] text-sm font-medium leading-relaxed mb-7">
        </p>
        <a
          href={BOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-cta-pulse flex items-center justify-center gap-3 w-full h-14 rounded-full bg-[#0F172A] text-white font-bold text-base mb-4"
        >
          <TelegramIcon className="w-5 h-5" />
          התחל סריקה בטלגרם
        </a>
        <p className="text-[#475569] text-xs font-medium">ללא כרטיס אשראי · ללא הרשמה</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#F9F8F6] pb-28 pt-6 px-5 border-t border-slate-100">
      <div className="text-center">
        <p className="text-xs text-slate-400 font-medium">
          © 2026 RentHawk TLV · כל הזכויות שמורות
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a href="mailto:support@renthawk-tlv.com" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
            צור קשר
          </a>
          <span className="text-slate-200">·</span>
          <a
            href={BOT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1"
          >
            <TelegramIcon className="w-3 h-3" />
            טלגרם
          </a>
        </div>
      </div>
    </footer>
  )
}

function StickyCtaBar() {
  return (
    <div
      className="fixed bottom-0 right-0 left-0 z-50 px-5 pb-5 pt-3"
      style={{ background: "linear-gradient(to top, #F9F8F6 75%, transparent)" }}
    >
      <a
        href={BOT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full h-14 rounded-full bg-[#0F172A] text-white font-bold text-base"
        style={{ boxShadow: "0 8px 28px rgba(15,23,42,0.3)" }}
      >
        <TelegramIcon className="w-5 h-5" />
        התחל סריקה
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div dir="rtl" className="font-heebo antialiased bg-[#F9F8F6]">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <PayboxSection />
        <FeaturesSection />
        <HowItWorksSection />
        <LiveDemoFeed />
        <MainCTASection />
      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  )
}
