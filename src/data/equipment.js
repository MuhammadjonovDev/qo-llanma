export const equipment = [
  // ─── Elektr uskunalari ───────────────────────────────────────────────────────
  {
    id: 1,
    name: "Transformator",
    category: "Elektr uskunalari",
    wikiTitle: "Transformer",
    description:
      "Transformator – elektromagnit induksiya prinsipi asosida ishlaydigan, o'zgaruvchan tok kuchlanishini bir qiymatdan boshqa qiymatga o'zgartiruvchi statik elektr mashinasi.",
    purpose:
      "Kuchlanishni oshirish yoki kamaytirish; elektr energiyasini uzatishda yo'qotishlarni kamaytirishga xizmat qiladi.",
    usage:
      "Elektr stansiyalari, taqsimlash punktlari, sanoat korxonalari, turar-joy kvartallarida.",
    parameters: [
      { label: "Kuchlanish sinfi", value: "0,4 kV dan 1150 kV gacha" },
      { label: "Nominal quvvat", value: "10 kVA dan yuzlab MVA gacha" },
      { label: "Chastota", value: "50 Hz" },
      { label: "Izolatsiya sinfi", value: "A, E, B, F, H" },
    ],
    safetyNotes:
      "O'rnatishdan oldin yer ulash (zazemlenie) majburiy. Moy transformatorlarida moy sathini muntazam tekshirib turish kerak. Transformator atrofida xavfsizlik masofasiga rioya qiling.",
    faults:
      "Chulg'amlarda qisqa tutashuv, izolyatsiya yetishmovchiligi, namlik tushishi, moy qochishi. Yuksiz ishlash (xolostoy ish) va yuklangan holda isish farqini kuzatib boring.",
  },
  {
    id: 2,
    name: "Avtomat",
    category: "Elektr uskunalari",
    wikiTitle: "Circuit_breaker",
    description:
      "Avtomat (avtomatik uzgich) – tok zanjirini ortiqcha tok va qisqa tutashuv paytida avtomatik ravishda uzib qo'yuvchi himoya qurilmasi.",
    purpose:
      "Kabel va simlarni haddan ortiq qizishdan, elektr asboblarni shikastlanishdan himoya qilish.",
    usage:
      "Uy-joy, ofis, sanoat – barcha turdagi elektr shit va taqsimlash qutilari.",
    parameters: [
      { label: "Nominal tok", value: "6 A dan 125 A gacha (uy sharoiti)" },
      { label: "Qisqa tutashuv uzilish qobiliyati", value: "6 kA – 25 kA" },
      { label: "Kuchlanish", value: "230/400 V" },
      { label: "Himoya harfi", value: "B (uy), C (sanoat), D (elektr motor)" },
    ],
    safetyNotes:
      "O'rnatishdan avval zanjirni tokdan uzing. Nominaldan yuqori toklarda ishlatmang. Yong'in bo'lsa darhol uzib qo'ying.",
    faults:
      "Kontaktlarning yonishi, bimetall plastinaning egilishi, kalit mexanizmining sinishi. Nosozlikda avtomatni almashtiring – ta'mirlash xavfli.",
  },
  {
    id: 3,
    name: "UZO",
    category: "Elektr uskunalari",
    wikiTitle: "Residual-current_device",
    description:
      "UZO (qoldiq tok qurilmasi, RCD) – kiruvchi va chiquvchi toklar orasidagi farqni (qoldiq tokni) aniqlab, zanjirni uzib qo'yuvchi himoya moslamasi.",
    purpose:
      "Odamni elektr tokidan urilishdan himoya qilish; yer orqali oqayotgan oqimni aniqlash.",
    usage:
      "Vannaxona, oshxona, qurilish maydoni, ko'chma asbob-uskunalar bilan ishlanadigan joylarda.",
    parameters: [
      { label: "Nominal tok", value: "16 A – 63 A" },
      { label: "Qoldiq tok sezgirligi", value: "10 mA, 30 mA, 100 mA, 300 mA" },
      {
        label: "Uzilish vaqti (30 mA da)",
        value: "≤ 0,04 s (odam uchun xavfsiz)",
      },
      { label: "Kuchlanish", value: "230 V / 400 V" },
    ],
    safetyNotes:
      "Oyiga kamida bir marta test tugmasini bosib sinab ko'ring. UZO avtomat bilan birgalikda ishlatilishi tavsiya etiladi (difavtomat). Nol va faza simlarini teskari ulamang.",
    faults:
      "Noto'g'ri ishlab ketishi (soxta uzilish), test tugmasi ishlamay qolishi, namlik tufayli ichki nosozlik. Test tugmasi klik bermasa – UZO ni almashtirish vaqti kelgan.",
  },
  {
    id: 4,
    name: "Elektr hisoblagich",
    category: "Elektr uskunalari",
    wikiTitle: "Electricity_meter",
    description:
      "Elektr hisoblagich – iste'molchilar tomonidan sarflangan elektr energiyasini kVt·soat birligida o'lchovchi asbob.",
    purpose:
      "Sarflangan elektr energiyasini qayd qilish va hisob-kitob qilish uchun.",
    usage:
      "Uy-joy, ofis, sanoat korxonalari, barcha iste'molchi nuqtalarida.",
    parameters: [
      { label: "O'lchov birligi", value: "kVt·soat (kWh)" },
      { label: "Aniqlik sinfi", value: "0,5 / 1,0 / 2,0" },
      { label: "Kuchlanish", value: "230 V / 400 V" },
      { label: "Nominal tok", value: "5(60) A, 10(100) A" },
    ],
    safetyNotes:
      "Muhrni buzish va hisoblagich ko'rsatkichlarini o'zgartirish qonun bilan taqiqlangan. O'rnatish va almashtirishni faqat vakolatli xizmat xodimi amalga oshirishi kerak.",
    faults:
      "Displeyning ishlamay qolishi, noto'g'ri ko'rsatish, muhr buzilishi, o'g'irlik urinishlari. Ko'rsatkichlar shubhali tarzda pasaysa – boshqa hisoblagich bilan solishtirib ko'ring.",
  },
  {
    id: 5,
    name: "Taqsimlash shiti",
    category: "Elektr uskunalari",
    wikiTitle: "Distribution_board",
    description:
      "Taqsimlash shiti – avtomatlar, UZO va boshqa himoya elementlarini bitta korpusda jamlagan, elektr energiyasini turli zanjirlarga taqsimlovchi qurilma.",
    purpose:
      "Binodagi barcha elektr zanjirlarini boshqarish va himoya qilishning markaziy nuqtasi.",
    usage: "Har bir uy-joy, ofis binosi, sanoat ob'ektlari kirish qismida.",
    parameters: [
      { label: "IP himoya darajasi", value: "IP40 (ichki), IP65 (tashqi)" },
      { label: "Din-reyka", value: "35 mm standart" },
      { label: "Kuchlanish", value: "230/400 V" },
      { label: "Modul soni", value: "4 dan 72 gacha" },
    ],
    safetyNotes:
      "Shitni yopiq tuting. Faqat malakali elektrik kirishi mumkin. Orqa devor va qopqoqda teshiklar bo'lmasligi kerak. Montajdan oldin butun zanjirni tokdan uzing.",
    faults:
      "Kontaktlarning qizishi, yetarli ventilyatsiya yo'qligi, noto'g'ri ulangan simlar, ortiqcha yuklangan zanjirlar.",
  },
  {
    id: 6,
    name: "Shina",
    category: "Elektr uskunalari",
    wikiTitle: "Busbar",
    description:
      "Shina (busbar) – katta tok o'tkazish uchun mo'ljallangan, odatda mis yoki alyuminiydan yasalgan tekis o'tkazgich.",
    purpose:
      "Bir nechta zanjirni yagona to'plash nuqtasiga ulash; katta quvvatlarni uzatish.",
    usage:
      "Elektr podstansiyalari, taqsimlash punktlari, sanoat shitlari, generator xonalari.",
    parameters: [
      { label: "Material", value: "Mis (Cu) yoki alyuminiy (Al)" },
      { label: "Nominal tok", value: "100 A dan 6300 A gacha" },
      { label: "Kuchlanish sinfi", value: "0,4 kV – 110 kV" },
      { label: "Kesim shakli", value: "To'rtburchak, dumaloq, naysimon" },
    ],
    safetyNotes:
      "Shinaga tegishdan avval ulangan emasligini tekshiring. Qisqa tutashuv paytida shinalardan kuchli elektr yoyi hosil bo'lishi mumkin – uzoqroq turing.",
    faults:
      "Kontakt birlashtiruvchilarning qizishi, oksidlanish, titrashdan bo'shab qolish, izolyatsiya g'iloflarining yeyilishi.",
  },
  {
    id: 7,
    name: "Ajratgich",
    category: "Elektr uskunalari",
    wikiTitle: "Disconnect_switch",
    description:
      "Ajratgich (izolyator, disconnect switch) – yuqori kuchlanishli zanjirlarni tok o'tmaydigan holatda ko'rinadigan (vizual) uzilish hosil qilib ajratuvchi kommutatsion apparat.",
    purpose:
      "Texnik xizmat ko'rsatilayotgan uskunani qolgan tizimdan xavfsiz ajratish.",
    usage:
      "Elektr podstansiyalari, yuqori kuchlanish liniyalari, generatorlar oldida.",
    parameters: [
      { label: "Kuchlanish sinfi", value: "10 kV dan 500 kV gacha" },
      { label: "Nominal tok", value: "400 A – 4000 A" },
      {
        label: "Izolatsiya sinov kuchlanishi",
        value: "Kuchlanish sinfiga bog'liq",
      },
    ],
    safetyNotes:
      "Ajratgichni faqat tok o'tmaydigan holatda oching yoki yoping. Yuklama ostida ochib bo'lmaydi – avval avtomat (vyklyuchatel) o'chirilsin.",
    faults:
      "Kontaktlarning yonishi, izolyatorlarning darzlanishi, mexanizmning zanglashi, harakatlanuvchi qismlarning tiqilib qolishi.",
  },
  {
    id: 8,
    name: "Ortiqcha kuchlanish himoyasi",
    category: "Elektr uskunalari",
    wikiTitle: "Surge_arrester",
    description:
      "Ortiqcha kuchlanish himoyasi (SPD, surge protector) – o'tkinchi kuchlanish impulslarini (momaqaldiroq, kommutatsiya) yerga yo'naltiruvchi himoya qurilmasi.",
    purpose:
      "Elektron asboblar, kompyuter va boshqa uskunalarni kuchlanish zarbidan himoya qilish.",
    usage:
      "Server xonalari, uy-joy, tibbiyot asboblari, telekommunikatsiya ob'ektlari.",
    parameters: [
      { label: "Himoya darajasi (Up)", value: "< 1,5 kV (1-sinf), < 1 kV (2-sinf)" },
      { label: "Nominal razryad toki (In)", value: "5 kA – 20 kA" },
      { label: "Nominal kuchlanish", value: "230 V / 400 V" },
      { label: "Himoya sinfi", value: "1, 2, 3 (DIN VDE 0675)" },
    ],
    safetyNotes:
      "SPD ni ifloslangan yoki nam joylarga o'rnatmang. Zarbadan keyin holat indikatorini tekshiring – agar qizil bo'lsa, zudlik bilan almashtiring.",
    faults:
      "Varistorning eskirishi, saqlagichning kuyishi, indikatorning o'chib qolishi. Har 5 yilda yoki kuchli momaqaldiroqdan keyin tekshirish tavsiya etiladi.",
  },
  {
    id: 9,
    name: "Elektr kabeli",
    category: "Elektr uskunalari",
    wikiTitle: "Electrical_cable",
    description:
      "Elektr kabeli – bir yoki bir nechta izolyatsiyalangan o'tkazgichdan iborat, elektr energiya yoki signallarni uzatish uchun mo'ljallangan mahsulot.",
    purpose:
      "Elektr energiyasini ishlab chiqarish manbaidan iste'molchigacha uzatish.",
    usage:
      "Yer osti liniyalari, bino ichki simlari, sanoat qurilmalari, kabel kanallari.",
    parameters: [
      { label: "O'tkazgich materiali", value: "Mis (Cu), alyuminiy (Al)" },
      { label: "Kesim", value: "1,5 mm² dan 1000 mm² gacha" },
      { label: "Izolatsiya turi", value: "PVX, XLPE, rezina" },
      { label: "Kuchlanish sinfi", value: "0,6/1 kV dan 500 kV gacha" },
    ],
    safetyNotes:
      "Kabelni minimal bukilish radiusidan kichikroq bukib o'rnatmang. Yer ostiga yotqizishda mexanik himoya qobig'i (zirh) bo'lishi shart. Joriy o'tkazish qobiliyatidan ortiq yuk bermang.",
    faults:
      "Izolyatsiyaning yeyilishi, ruxsat etilganidan ortiq egilish, mexanik shikast, namlik kirib izolyatsiya qarshiligining pasayishi.",
  },
  {
    id: 10,
    name: "Generator",
    category: "Elektr uskunalari",
    wikiTitle: "Electric_generator",
    description:
      "Generator – mexanik energiyani (issiqlik dvigateli, suv turbinasi va h.k.) elektr energiyasiga aylantiruvchi mashina.",
    purpose:
      "Asosiy tarmoq yo'q yoki uzilgan paytda zaxira elektr ta'minotini ta'minlash.",
    usage:
      "Zaxira elektr ta'minoti tizimi, qurilish maydoni, tashqi tadbirlar, sanoat.",
    parameters: [
      { label: "Quvvat diapazoni", value: "1 kVt dan 10 MVt gacha" },
      { label: "Kuchlanish chiqishi", value: "230 V, 400 V, 6 kV" },
      { label: "Chastota", value: "50 Hz" },
      { label: "Yoqilg'i turi", value: "Dizel, benzin, gaz" },
    ],
    safetyNotes:
      "Generatorning chiqindi gazlarini (CO) ichki xonalarda chiqarmang – o'limga olib kelishi mumkin. Yoqilg'i to'ldirishdan oldin generatorni o'chiring. Yer ulash (zazemlenie) majburiy.",
    faults:
      "Ishga tushmaslik, chastota beqarorligi, ortiqcha isish, moy qochishi. Har 250 soat ishdan keyin texnik xizmat ko'rsating.",
  },
  {
    id: 11,
    name: "Kondensator batareyasi",
    category: "Elektr uskunalari",
    wikiTitle: "Capacitor_bank",
    description:
      "Kondensator batareyasi – reaktiv quvvatni kompensatsiya qilish va tarmoqdagi kuchlanish sifatini yaxshilash uchun parallel ulangan kondensatorlar guruhi.",
    purpose:
      "Reaktiv quvvatni kompensatsiya qilish, kuchlanish sifatini oshirish, elektr energiya sarfini kamaytirish.",
    usage:
      "Sanoat korxonalari, katta savdo markazlari, elektr podstansiyalari.",
    parameters: [
      { label: "Reaktiv quvvat", value: "10 kVAr dan 10 MVAr gacha" },
      { label: "Nominal kuchlanish", value: "0,4 kV – 10 kV" },
      { label: "Kompensatsiya turi", value: "Statik yoki avtomatik" },
      { label: "cos φ maqsad", value: "0,95 va undan yuqori" },
    ],
    safetyNotes:
      "Kondensator batareyasini uzib qo'yganingizdan keyin darhol ulamang – zaryad tushishi uchun 5 daqiqa kuting. Ichida kuchli zaryad saqlanadi – izolyatsiyalangan asboblar bilan ishlang.",
    faults:
      "Kondensatorning portlashi (haddan ortiq kuchlanish), ekvivalent qarshilikning (ESR) ortishi, zanglar to'planishi, o'tkazgich uzilishi.",
  },
  {
    id: 12,
    name: "Saqlagich",
    category: "Elektr uskunalari",
    wikiTitle: "Fuse_(electrical)",
    description:
      "Saqlagich (sigorta, fuse) – nominaldan oshgan tok o'tganda eriydigan sim orqali zanjirni uzib qo'yuvchi bir martalik himoya elementi.",
    purpose:
      "Kabel va uskunalarni qisqa tutashuv va haddan ortiq tok ta'siridan himoya qilish.",
    usage:
      "Avtomobil elektr jihozlari, uy-joy shitlari, sanoat uskunalari, quvvat ta'minot manbalari.",
    parameters: [
      { label: "Nominal tok", value: "0,1 A dan 1000 A gacha" },
      { label: "Nominal kuchlanish", value: "32 V, 250 V, 400 V, 500 V" },
      { label: "Uzilish qobiliyati", value: "10 kA – 100 kA" },
      { label: "Vaqt–tok xarakteri", value: "Tez (gG), kechiktirilgan (aM)" },
    ],
    safetyNotes:
      "Sigorta kuyib qolsa, uni sim yoki mis bilan almashtirishga HECH QACHON ruxsat etilmaydi. Faqat xuddi shunday nominal va turdagi sigorta qo'ying. Kuyish sababini avval aniqlang.",
    faults:
      "Nominaldan yuqori toklarda erishi, nam muhitda korroziya, vibratsiyada kontaktning yo'qolishi.",
  },

  // ─── Himoya vositalari ───────────────────────────────────────────────────────
  {
    id: 13,
    name: "Dielektrik qo'lqop",
    category: "Himoya vositalari",
    wikiTitle: "Rubber_glove",
    description:
      "Dielektrik qo'lqoplar – elektr tokidan qo'llarni himoya qilish uchun mo'ljallangan, maxsus rezinadan (lateks yoki butil-rezina) yasalgan himoya vositasi.",
    purpose:
      "Kuchlanish ostidagi uskunalarda ishlashda qo'llarni tok urishi va elektr yoyidan himoya qilish.",
    usage:
      "Tirik kuchlanish ostidagi uskunalarda ishlash, elektr ta'mirlash ishlari.",
    parameters: [
      { label: "Kuchlanish sinfi 00", value: "500 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 0", value: "1000 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 1", value: "7500 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 2", value: "17 000 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 3", value: "26 500 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 4", value: "36 000 V gacha sinov (AC)" },
      { label: "Tekshirish muddati", value: "Har 6 oyda bir marta dielektrik sinov" },
    ],
    safetyNotes:
      "Foydalanishdan avval qo'lqopni havo bilan puflang (og'iz bilan emas) – teshik borligini tekshiring. Kesik, teshik yoki yoriq bo'lgan qo'lqopni ishlatmang. Qo'lqopni cho'zib kiyish mumkin emas, u yirtilishi mumkin.",
    faults:
      "Ko'rinadigan yoriqlari, deformatsiyalangan joylari, juda qattiq yoki yopishqoq bo'lib qolishi – bunday qo'lqopdan voz keching. Muddati o'tgan qo'lqopni ishlatmang.",
  },
  {
    id: 14,
    name: "Dielektrik gilam",
    category: "Himoya vositalari",
    wikiTitle: "Rubber_mat",
    description:
      "Dielektrik gilam – elektr xavfsizligi uchun maxsus rezinadan tayyorlangan, elektr o'tkazmaydigan pol qoplamasi.",
    purpose:
      "Elektr uskuna va shitlar oldida ishlashda operatorni yer orqali tok urishi xavfidan himoya qilish.",
    usage:
      "Taqsimlash shitlari oldida, generatorlar va transformator qoshida, laboratoriya va xizmat xonalarida.",
    parameters: [
      { label: "1-sinf sinov kuchlanishi", value: "10 kV (AC, 1 daqiqa)" },
      { label: "2-sinf sinov kuchlanishi", value: "20 kV (AC, 1 daqiqa)" },
      { label: "Qalinlik", value: "6 mm (1-sinf), 8–12 mm (2-sinf)" },
      { label: "Tekshirish muddati", value: "Har 12 oyda bir marta" },
    ],
    safetyNotes:
      "Gilamni o'tkir narsalardan (mix, metall parchalari) xoli saqlang. Yog', erituvchi va kimyoviy moddalar tegmasin. Nam holatda foydalanish taqiqlangan.",
    faults:
      "Ko'rinadigan yoriqlari, teshiklari, ezilgan yoki yupqalashgan joylari, yopishib qolishi – bunday gilamni darhol almashtiring.",
  },
  {
    id: 15,
    name: "Dielektrik poyabzal",
    category: "Himoya vositalari",
    wikiTitle: "Safety_footwear",
    description:
      "Dielektrik poyabzal (etik) – oyoqlarni yer orqali tok o'tishidan himoya qilish uchun mo'ljallangan, elektr o'tkazmaydigan maxsus poyabzal.",
    purpose:
      "Oyoqlar orqali tok urish xavfini bartaraf etish; yuqori va past kuchlanishli o'rnatish ishlarida.",
    usage:
      "Elektr stansiyalari, taqsimlash punktlari, ochiq maydonlardagi elektr qurilmalar yaqinida.",
    parameters: [
      { label: "Sinov kuchlanishi", value: "15 kV (AC, 1 daqiqa)" },
      { label: "Material", value: "Butil-rezina, kauchuk" },
      { label: "Tekshirish muddati", value: "Har 6 oyda bir marta" },
    ],
    safetyNotes:
      "Iste'mol poyabzali sifatida emas – faqat himoya maqsadida kiying. Oddiy zirhli etiklar dielektrik xususiyatga ega emas. Foydalanishdan oldin etiklarni tashqi tomondan ko'rib chiqing.",
    faults:
      "Tagida teshik, yoriqlar, izolyatsiya qatlamining ko'chishi – bularni aniqlasangiz darhol foydalanishni to'xtating.",
  },
  {
    id: 16,
    name: "Kuchlanish indikatori",
    category: "Himoya vositalari",
    wikiTitle: "Voltage_detector",
    description:
      "Kuchlanish indikatori – elektr zanjirining kuchlanish ostida yoki tok o'tmaydigan holatda ekanligini aniqlash uchun mo'ljallangan xavfsizlik vositasi.",
    purpose:
      "Ishlashdan oldin zanjirning tok o'tmasligini tasdiqlash; kuchlanish borligini ko'rsatish.",
    usage:
      "Har qanday elektr ta'mirlash ishlarida zanjirning tokdan uzilganini tekshirishda.",
    parameters: [
      { label: "1-sinf (past kuchlanish)", value: "0,1 kV – 1 kV gacha" },
      {
        label: "2-sinf (yuqori kuchlanish)",
        value: "1 kV dan 110 kV gacha",
      },
      { label: "Tekshirish muddati", value: "Har 12 oyda bir marta" },
    ],
    safetyNotes:
      "Indikatorni ishlatishdan avval ish holati tekshirilsin (ma'lum kuchlanishda sinab ko'ring). \"Tok yo'q\" xulosasiga ishonmang – ikki marta tekshiring. Kuchlanish sinfi tarmoq kuchlanishiga mos kelishi shart.",
    faults:
      "Batareya zaryadining tugashi, yorug'lik yoki tovush signalining ishlamasligi, sinish. Har ishlatishdan oldin ishlashini tekshiring.",
  },
  {
    id: 17,
    name: "Izolyatsiyalangan asboblar",
    category: "Himoya vositalari",
    wikiTitle: "Insulated_tool",
    description:
      "Izolyatsiyalangan asboblar – dastalari (sopi) maxsus dielektrik material bilan qoplangan; elektr ishlarida kuchlanish ostidagi qismlariga tasodifiy tegishdan himoya qiluvchi asboblar to'plami.",
    purpose:
      "Elektr montaj va ta'mirlash ishlarida qisqa tutashuv va elektr urishidan himoya qilish.",
    usage:
      "Elektr montaj, ta'mirlash, sinovlar – 1000 V gacha bo'lgan barcha ishlarda.",
    parameters: [
      { label: "Sinov kuchlanishi", value: "10 000 V (AC)" },
      { label: "Nominal ishlash kuchlanishi", value: "1000 V gacha" },
      { label: "Standart", value: "IEC 60900, DIN VDE 0682" },
      { label: "Tekshirish muddati", value: "Har 12 oyda bir marta" },
    ],
    safetyNotes:
      "Izolyatsiya qatlamini kesish, o'chirish yoki shikastlash qat'iyan taqiqlanadi. Namda yoki yog'li qo'llar bilan ishlamang. Faqat sertifikatlangan asboblardan foydalaning.",
    faults:
      "Dasta izolyatsiyasining yorilishi, ko'chishi, rangining o'chishi (eskirish belgisi). Zarar ko'rgan asbobni ta'mirlash emas, almashtirish kerak.",
  },
  {
    id: 18,
    name: "Yerga ulash qismi",
    category: "Himoya vositalari",
    wikiTitle: "Ground_(electricity)",
    description:
      "Yerga ulash qismi (ko'chma zazemlenie to'plami) – texnik xizmat ko'rsatish paytida zanjirni xavfsiz tok o'tmaydigan holatda saqlash uchun ishlatiladigan ko'chma qurilma.",
    purpose:
      "Tasodifiy ulangan yoki induksiya kuchlanishidan ishchi xodimni himoya qilish; ko'rinadigan yerga ulashni ta'minlash.",
    usage:
      "Yuqori va o'rta kuchlanishli liniyalarda ta'mirlash va texnik xizmat ko'rsatishda.",
    parameters: [
      { label: "Qisqa tutashuv tokiga chidamlilik", value: "5 kA – 25 kA (1 soniya)" },
      { label: "O'tkazgich kesimi", value: "16 mm² – 95 mm² (mis)" },
      { label: "Qisqich turi", value: "C-bolt, mexanik, pnevmatik" },
      { label: "Tekshirish muddati", value: "Har 12 oyda bir marta" },
    ],
    safetyNotes:
      "Avval yer ulash qismini yerga ulang, keyin liniyaga ulang. Olib chiqishda teskari tartibda: avval liniyadan, keyin yerdan uzing. Bu tartib hayot-mamot masalasi.",
    faults:
      "Sim tolalarining sinishi (ko'rinadigan va ko'rinmas), qisqichlarning eskirishi, vint va tutqichlardagi korroziya. Har ishlatishdan oldin vizual tekshiruvdan o'tkazing.",
  },
];