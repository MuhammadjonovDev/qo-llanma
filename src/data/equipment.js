export const equipment = [
  // ─── Elektr uskunalari ───────────────────────────────────────────────────────
  {
    id: 1,
    name: "Transformator",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Polemount-singlephase-closeup.jpg/640px-Polemount-singlephase-closeup.jpg",
    alt: "Ustun ustiga o'rnatilgan bir fazali transformator",
    description:
      "Transformator – elektromagnit induksiya prinsipi asosida ishlagan, o'zgaruvchan tok kuchlanishini bir qiymatdan boshqa qiymatga o'zgartiruvchi statik elektr mashinasi.",
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
      "Sarmoqlarda qisqa tutashuv, izolyatsiya yetishmovchiligi, namlik tushishi, moy qochishi. Yuk tashlamaslik holi (holostoy xod) va yuklangan holda isish farqini kuzatib boring.",
  },
  {
    id: 2,
    name: "Avtomat",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MCB_cutaway.jpg/640px-MCB_cutaway.jpg",
    alt: "Kesma ko'rinishidagi miniatur avtomat uzgich",
    description:
      "Avtomat (avtomatik uzgich) – tok zanjirini ortiqcha tok va qisqa tutashuv paytida avtomatik ravishda uzib qo'yuvchi himoya qurilmasi.",
    purpose:
      "Kabel va simlarni haddan ortiq qizishdan, elektr asboblarni shikastlanishdan himoya qilish.",
    usage:
      "Uy-joy, ofis, sanoat – barcha turdagi elektr shield va taqsimlash qutilari.",
    parameters: [
      { label: "Nominal tok", value: "6 A dan 125 A gacha (uy sharoiti)" },
      { label: "Qisqa tutashuv uzilish qobiliyati", value: "6 kA – 25 kA" },
      { label: "Kuchlanish", value: "230/400 V" },
      { label: "Himoya harfi", value: "B (uy), C (sanoat), D (elektr motor)" },
    ],
    safetyNotes:
      "O'rnatishdan avval zanjirni tokdan uzing. Nominaldan yuqori toklarda ishlatmang. Yong'in bo'lsa darhol uzib qo'ying.",
    faults:
      "Kontaktlarning yonishi, bimetal plastinaning egilishi, kalit mexanizmining sinishi. Muammolarda avtomatni almashtirib qo'ying – ta'mirlash xavfli.",
  },
  {
    id: 3,
    name: "UZO",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Rcd_1p.jpg/640px-Rcd_1p.jpg",
    alt: "Bir fazali qoldiq tok himoyasi (UZO) qurilmasi",
    description:
      "UZO (Qoldiq Tok Qurilmasi, RCD) – kiruvchi va chiquvchi toklar orasidagi farqni (qoldiq tokni) aniqlagan holda zanjirni uzib qo'yuvchi himoya moslamasi.",
    purpose:
      "Odamni elektr tokidan urib o'tishdan himoya qilish; yer orqali oqayotgan oqimni aniqlash.",
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
      "Noto'g'ri ishlab ketishi (soxta uzilish), test tugmasi ishlamay qolishi, nam tushishi tufayli ichki xato. Test tugmasi klik bermasa – UZO-ni almashtirishga vaqt kelgan.",
  },
  {
    id: 4,
    name: "Elektr hisoblagich",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Electricity_meter.jpg/640px-Electricity_meter.jpg",
    alt: "Raqamli elektr hisoblagich qurilmasi",
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
      "Display ishlamay qolishi, noto'g'ri ko'rsatish, muhr buzilishi, o'g'irlik urinishlari. Ko'rsatkichlar shubhali tarzda pasaysa – yaxlit nazorat o'tkazib ko'ring.",
  },
  {
    id: 5,
    name: "Taqsimlash shiti",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Domestic_consumer_unit.jpg/640px-Domestic_consumer_unit.jpg",
    alt: "Uy-joy taqsimlash elektr shiti (panel)",
    description:
      "Taqsimlash shiti – avtomatlar, UZO va boshqa himoya elementlarini bitta korpusda jamlagan, elektr energiyasini turli zanjirlarga taqsimlovchi qurilma.",
    purpose:
      "Binodagi barcha elektr zanjirlarini boshqarish va himoya qilish markaziy nuqtasi.",
    usage: "Har bir uy-joy, ofis binosi, sanoat ob'ektlari kirish qismida.",
    parameters: [
      { label: "IP himoya darajasi", value: "IP40 (ichki), IP65 (tashqi)" },
      { label: "Din-reyka", value: "35 mm standard" },
      { label: "Kuchlanish", value: "230/400 V" },
      { label: "Modul soni", value: "4 dan 72 gacha" },
    ],
    safetyNotes:
      "Shitni yopiq ushlab tuting. Faqat malakali elektrik kirishi mumkin. Orqa devor va qopqoqda teshiklar bo'lmasligi kerak. Montajdan oldin butun zanjirni tokdan uzing.",
    faults:
      "Kontaktlarning qizishi, etarli ventilatsiya yo'qligi, noto'g'ri ulangan simlar, ortiqcha yuklangan zanjirlar.",
  },
  {
    id: 6,
    name: "Shina",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Copper_busbars_in_a_substation.jpg/640px-Copper_busbars_in_a_substation.jpg",
    alt: "Elektr podstantsiyasidagi mis shinalar",
    description:
      "Shina (busbar) – katta tok o'tkazish uchun mo'ljallangan, odatda mis yoki alyuminiydan yasalgan tekis o'tkazgich.",
    purpose:
      "Bir nechta zanjirni yagona to'plash nuqtasiga ulash; katta quvvatlarni uzatish.",
    usage:
      "Elektr podstantsiyalari, taqsimlash punktlari, sanoat shitlari, generator xonalari.",
    parameters: [
      { label: "Material", value: "Mis (Cu) yoki Alyuminiy (Al)" },
      { label: "Nominal tok", value: "100 A dan 6300 A gacha" },
      { label: "Kuchlanish sinfi", value: "0,4 kV – 110 kV" },
      { label: "Kesim shakli", value: "To'rtburchak, dumaloq, naysimon" },
    ],
    safetyNotes:
      "Shinaga tegishdan avval ulangan bo'lmasligini tekshiring. Qisqa tutashuv paytida shinalardan kuchli elektr yoyi hosil bo'lishi mumkin – uzoq turing.",
    faults:
      "Kontakt birlashtiruvchilarning qizishi, oksidlanish, titroqdan bo'shab qolish, izolyatsiya yenglari yeyilishi.",
  },
  {
    id: 7,
    name: "Ajratgich",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Disconnect_Switch_%28Isolator%29.jpg/640px-Disconnect_Switch_%28Isolator%29.jpg",
    alt: "Tashqi o'rnatma yuqori kuchlanishli ajratgich (izolator)",
    description:
      "Ajratgich (izolator, disconnect switch) – yuqori kuchlanishli zanjirlarni toqsiz holatda ko'rinadigan (video) ravishda uzib qo'yuvchi kommutatsion apparat.",
    purpose:
      "Texnik xizmat ko'rsatilayotgan uskunani qolgan tizimdan xavfsiz ajratish.",
    usage:
      "Elektr podstantsiyalari, yuqori kuchlanish liniyalari, generatorlar oldida.",
    parameters: [
      { label: "Kuchlanish sinfi", value: "10 kV dan 500 kV gacha" },
      { label: "Nominal tok", value: "400 A – 4000 A" },
      {
        label: "Izolatsiya sinov kuchlanishi",
        value: "Kuchlanish sinfiga bog'liq",
      },
    ],
    safetyNotes:
      "Ajratgichni faqat toqsiz holatda oching yoki yoping. Yuqori kuchlanishda yoqilgan holatda ochib bo'lmaydi – avval avtomat (vyklyuchatel) o'chirilsin.",
    faults:
      "Kontaktlarning yonishi, izolyatorlarning darzlanishi, mexanizm zanglashi, harakatlanuvchi qismlarning tiqilib qolishi.",
  },
  {
    id: 8,
    name: "Ortiqcha kuchlanish himoyasi",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Surge_protector.jpg/640px-Surge_protector.jpg",
    alt: "Ko'p rozetkali elektr filtr (ortiqcha kuchlanish himoyasi)",
    description:
      "Ortiqcha kuchlanish himoyasi (SPD/surge protector) – o'tkinchi kuchlanish impulslarini (momaqaldiroq, kommutatsiya) zaryad qiluvchi bo'g'in orqali yerga yo'naltiruvchi himoya qurilmasi.",
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
      "SPD-ni ifloslangan yoki nam joylarga o'rnatmang. Zarba yeyilgandan keyin holat indikatorini tekshiring – agar qizil bo'lsa, zudlik bilan almashtiring.",
    faults:
      "Variistorning eskirishi, fuse qurishi, indikatorning o'chib qolishi. Har 5 yilda yoki kuchli momaqaldiroqdan keyin tekshirish tavsiya etiladi.",
  },
  {
    id: 9,
    name: "Elektr kabeli",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Comparison_of_cross_sections_of_electric_cables.jpg/640px-Comparison_of_cross_sections_of_electric_cables.jpg",
    alt: "Turli turdagi elektr kabellarning kesma ko'rinishi",
    description:
      "Elektr kabeli – bir yoki bir nechta izolyatsiyalangan o'tkazgichdan iborat, elektr energiya yoki signallarni uzatish uchun mo'ljallangan mahsulot.",
    purpose:
      "Elektr energiyasini istehsol manbasidan iste'molchigacha uzatish.",
    usage:
      "Yer osti liniyalari, bino ichki simlari, sanoat qurulmalari, kabel kanallari.",
    parameters: [
      { label: "O'tkazgich materiali", value: "Mis (Cu), Alyuminiy (Al)" },
      { label: "Kesim", value: "1,5 mm² dan 1000 mm² gacha" },
      { label: "Izolatsiya turi", value: "PVC, XLPE, rubber" },
      { label: "Kuchlanish sinfi", value: "0,6/1 kV dan 500 kV gacha" },
    ],
    safetyNotes:
      "Kabelni minimal bukilish radiusidan kichikroq bukib o'rnatmang. Yer ostiga yotqizishda mexanik himoya qobig'i (zirh) bo'lishi shart. Joriy o'tkazish qobiliyatidan ortiq yuk bermang.",
    faults:
      "Izolyatsiya yeyilishi, qo'yib bo'lmas darajada egilish, mexanik shikast, namlik kirib kuchlanish pasayishi.",
  },
  {
    id: 10,
    name: "Generator",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/4_Stroke_Engine_with_Generator.jpg/640px-4_Stroke_Engine_with_Generator.jpg",
    alt: "To'rt taktli dvigatel bilan agregat generator",
    description:
      "Generator – mexanik energiyani (issiqlik dvigateli, suv turbinasi va h.k.) elektr energiyasiga aylantiruvchi mashina.",
    purpose:
      "Asosiy tarmoq yo'q yoki uzilgan paytda zaxira elektr ta'minotini ta'minlash.",
    usage:
      "Zaxira elektr ta'minoti tizimi (UPS), qurilish maydoni, tashqi tadbirlar, sanoat.",
    parameters: [
      { label: "Quvvat diapazoni", value: "1 kVt dan 10 MVt gacha" },
      { label: "Kuchlanish chiqishi", value: "230 V, 400 V, 6 kV" },
      { label: "Chastota", value: "50 Hz" },
      { label: "Yoqilg'i turi", value: "Dizel, benzin, gaz" },
    ],
    safetyNotes:
      "Generatordagi egzost gazlarini (CO) ichki xonalarda chiqarmang – o'limga olib kelishi mumkin. Yoqilg'i to'ldirishdan oldin generatorn o'chiring. Yer ulash (zazemlenie) majburiy.",
    faults:
      "Muommakorin ishga tushmaslik, chastota beqarorligi, ortiqcha isish, moy qochishi. Har 250 soat ishdan keyin texnik xizmat ko'rsating.",
  },
  {
    id: 11,
    name: "Kondensator batareyasi",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Capacitor_Bank.jpg/640px-Capacitor_Bank.jpg",
    alt: "Sanoat kondensator batareyasi bloki",
    description:
      "Kondensator batareyasi – reaktiv quvvatni kompensatsiya qilish va tarmoqdagi kuchlanish sifatini yaxshilash uchun parallel ulangan kondensatorlar guruhi.",
    purpose:
      "Reaktiv quvvatni kompensatsiya qilish, elektr tarmoqda kuchlanish ko'tarilishi, elektr energiya sarfini kamaytirish.",
    usage:
      "Sanoat korxonalari, katta savdo markazlari, elektr podstantsiyalari.",
    parameters: [
      { label: "Reaktiv quvvat", value: "10 kVAr dan 10 MVAr gacha" },
      { label: "Nominal kuchlanish", value: "0,4 kV – 10 kV" },
      { label: "Kompensatsiya turi", value: "Statik yoki avtomatik" },
      { label: "cos φ maqsad", value: "0,95 va undan yuqori" },
    ],
    safetyNotes:
      "Kondensator batareyasini uzib qo'ygandan keyin darhol ulamang – zaryadni tushish uchun 5 daqiqa kuting. Ichida kuchli zaryadlanish bo'ladi – izolyatsiyalangan asboblar bilan ishlang.",
    faults:
      "Kondensator partlashi (haddan ortiq kuchlanish), ESR ortishi, zanglar to'planishi, o'tkazgich uzilishi.",
  },
  {
    id: 12,
    name: "Saqlagich",
    category: "Elektr uskunalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Fuses_in_collection.jpg/640px-Fuses_in_collection.jpg",
    alt: "Turli turdagi saqlagichlar (sigortalar) to'plami",
    description:
      "Saqlagich (sigorta, fuse) – nominaldan oshgan tok o'tganda eruvchi sim orqali zanjirni uzib qo'yuvchi bir martalik himoya elementi.",
    purpose:
      "Kabel va uskunalarni qisqa tutashuv va haddan ortiq tok ta'siridan himoya qilish.",
    usage:
      "Avtomobil elektrikasi, uy-joy shitlari, sanoat uskunalari, quvvat ta'minot manbalari.",
    parameters: [
      { label: "Nominal tok", value: "0,1 A dan 1000 A gacha" },
      { label: "Nominal kuchlanish", value: "32 V, 250 V, 400 V, 500 V" },
      { label: "Uzilish qobiliyati", value: "10 kA – 100 kA" },
      { label: "Vaqt–tok xarakteri", value: "Tez (gG), Kechiktirilgan (aM)" },
    ],
    safetyNotes:
      "Sigorta kuyib qolsa uni simla yoki mis bilan almashtirishga HECH QACHOn ruxsat yo'q. Faqat xuddi shunday nominal va turda sigorta qo'ying. Kuyish sababini avval aniqlang.",
    faults:
      "Nominaldan yuqori toklarda erishi, nam muhitda korroziya, vibratsiyadagi kontakt yo'qolishi.",
  },

  // ─── Himoya vositalari ───────────────────────────────────────────────────────
  {
    id: 13,
    name: "Dielektrik qo'lqop",
    category: "Himoya vositalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Electrical_safety_gloves.jpg/640px-Electrical_safety_gloves.jpg",
    alt: "Sariq dielektrik rezina qo'lqoplar",
    description:
      "Dielektrik qo'lqoplar – elektr tokidan qo'llarni himoya qilish uchun mo'ljallangan, maxsus rezinadan (lateks yoki butilrezina) yasalgan himoya vositasi.",
    purpose:
      "Elektr uskunalarida ishlashda qo'llarni tok urishi va elektr yoyidan himoya qilish.",
    usage:
      "Tirik kuchlanish ostidagi uskunalarda ishlash, elektr ta'mirlash ishlari.",
    parameters: [
      { label: "Kuchlanish sinfi 00", value: "500 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 0", value: "1000 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 1", value: "7500 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 2", value: "17 000 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 3", value: "26 500 V gacha sinov (AC)" },
      { label: "Kuchlanish sinfi 4", value: "36 000 V gacha sinov (AC)" },
      { label: "Tekshirish muddati", value: "Har 6 oyda bir marta dieltekshiruv" },
    ],
    safetyNotes:
      "Foydalanishdan avval qo'lqopni havo bilan (diqqat: og'iz bilan emas) puflang – teshik borligini tekshiring. Kesik, teshik yoki xira bo'lgan qo'lqopni ishlatmang. Kori bitmasin deb cho'ziltirib kiyish mumkin emas.",
    faults:
      "Ko'rinadigan yoriqlari, deformatsiyalangan joylari, juda qattiq yoki yopishqoq bo'lib qolishi – bulardan xalos bo'ling. Muddati o'tgan qo'lqopni ishlatmang.",
  },
  {
    id: 14,
    name: "Dielektrik gilam",
    category: "Himoya vositalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Rubber_insulating_mat.jpg/640px-Rubber_insulating_mat.jpg",
    alt: "Elektr xavfsizlik uchun to'q sariq rezina dielektrik gilam",
    description:
      "Dielektrik gilam – elektr xavfsizligi uchun maxsus rezinadan tayyorlangan, elektrik o'tkazmaydigan pol qoplama.",
    purpose:
      "Elektr uskuna va shitlar oldida ishlashda operatorni yer orqali tok urishi xavfidan himoya qilish.",
    usage:
      "Taqsimlash shitlari oldida, generatorlar va trafo qoshida, laboratoriya va xizmat xonalarida.",
    parameters: [
      { label: "Sinf 1 sinov kuchlanishi", value: "10 kV (AC, 1 daqiqa)" },
      { label: "Sinf 2 sinov kuchlanishi", value: "20 kV (AC, 1 daqiqa)" },
      { label: "Qalinlik", value: "6 mm (1-sinf), 8–12 mm (2-sinf)" },
      { label: "Tekshirish muddati", value: "Har 12 oyda bir marta" },
    ],
    safetyNotes:
      "Gilamni o'tkir narsalardan (mix, metall parchalari) xoli saqlang. Yog', erituvchi va kimyoviy moddalarga tegmasin. Nam holatda foydalanish taqiqlangan.",
    faults:
      "Ko'rinadigan yoriqlari, teshiklari, ezilgan yoki yupqalashgan joylari, yopishib qolishi – bunday gilamni darhol almashtiring.",
  },
  {
    id: 15,
    name: "Dielektrik poyabzal",
    category: "Himoya vositalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Dielectric_boots.jpg/640px-Dielectric_boots.jpg",
    alt: "Sariq dielektrik xavfsizlik botinkasi",
    description:
      "Dielektrik poyabzal (etik) – oyoqlarni yer orqali tok o'tishidan himoya qilish uchun mo'ljallangan, elektrik o'tkazmaydigan maxsus poyabzal.",
    purpose:
      "Oyoqlar orqali tok urish xavfini bartaraf etish; yuqori va past kuchlanishli o'rnashtirish ishlarida.",
    usage:
      "Elektr stansiyalari, taqsimlash punktlari, ochiq maydonlardagi elektr qurilmalar yaqinida.",
    parameters: [
      { label: "Sinov kuchlanishi", value: "15 kV (AC, 1 daqiqa)" },
      { label: "Material", value: "Butilrezina, kauçuk" },
      { label: "Tekshirish muddati", value: "Har 6 oyda bir marta" },
    ],
    safetyNotes:
      "Istemol poyabzal sifatida emas – faqat himoya maqsadida kiyinng. Zirhli etiklar dielektrik xususiyatga ega emas. Foydalanishdan oldin etiklarni tashqi tomondan ko'rib chiqing.",
    faults:
      "Tagida teshik, yoriqlari, izolyatsiya qatlami ko'chishi – bularni aniqlasangiz darhol istifoda qilishni to'xtating.",
  },
  {
    id: 16,
    name: "Kuchlanish indikatori",
    category: "Himoya vositalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Non-contact_voltage_tester.jpg/640px-Non-contact_voltage_tester.jpg",
    alt: "Kontaktsiz kuchlanish indikatori (voltmeter-qalamchasi)",
    description:
      "Kuchlanish indikatori – elektr zanjirining kuchlanish ostida yoki toqsiz ekanligini aniqlash uchun mo'ljallangan xavfsizlik vositasi.",
    purpose:
      "Ishlashdan oldin zanjirning toqsizligini tasdiqlash; kuchlanish borligini ko'rsatish.",
    usage:
      "Har qanday elektr ta'mirlash ishlarida zanjirni tokdan uzilganini tekshirishda.",
    parameters: [
      { label: "Sinf 1 (past kuchlanish)", value: "0,1 kV – 1 kV gacha" },
      {
        label: "Sinf 2 (yuqori kuchlanish)",
        value: "1 kV dan 110 kV gacha",
      },
      { label: "Tekshirish muddati", value: "Har 12 oyda bir marta" },
    ],
    safetyNotes:
      "Indikatorni ishlatishdan avval ishchi holati tekshirilsin (ma'lum kuchlanishda sinab ko'ring). \"Tok yo'q\" xulosasiga ishonmang – ikki bor tekshiring. Kuchlanish sinfi kuchlanishga mos kelishi shart.",
    faults:
      "Batareya zaryadining tugashi, yorug'lik yoki tovush signalining ishlamasligi, sinish. Har ishlatishdan oldin operatsion tekshiruvdan o'tkazing.",
  },
  {
    id: 17,
    name: "Izolyatsiyalangan asboblar",
    category: "Himoya vositalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Isolated_tools.jpg/640px-Isolated_tools.jpg",
    alt: "Rang-barang izolyatsiyalangan dasta bilan elektr asboblari to'plami",
    description:
      "Izolyatsiyalangan asboblar – dastalari (sopi) maxsus dielektrik material bilan qoplangan; elektr ishlarida kuchlanish ostidagi qismlariga tasodifiy teginishdan himoya qiluvchi asboblar to'plami.",
    purpose:
      "Elektr montaj va ta'mirlash ishlarida qisqa tutashuv va elektr shokidan himoya qilish.",
    usage:
      "Elektr montaj, ta'mirlash, sinovlar – 1000 V gacha bo'lgan barcha ishlarda.",
    parameters: [
      { label: "Sinov kuchlanishi", value: "10 000 V (AC)" },
      { label: "Nominal ishlash kuchlanishi", value: "1000 V gacha" },
      { label: "Standard", value: "IEC 60900, DIN VDE 0682" },
      { label: "Tekshirish muddati", value: "Har 12 oyda bir marta" },
    ],
    safetyNotes:
      "Izolyatsiya qatlamini kesish, o'chirish yoki shikastlash mutlaqo taqiqlangan. Namda yoki yog'li qo'llar bilan ishlamang. Faqat sertifikatlangan asboblardan foydalaning.",
    faults:
      "Dasta izolyatsiyasining yorilishi, ko'chishi, rangi o'chishi (eskirish belgisi). Zarar ko'rgan asbobni ta'mirlash emas – tashlab yuborish kerak.",
  },
  {
    id: 18,
    name: "Yerga ulash qismi",
    category: "Himoya vositalari",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Portable_earthing_set.jpg/640px-Portable_earthing_set.jpg",
    alt: "Ko'chma yer ulash to'plami (earthing clamp va simlar)",
    description:
      "Yerga ulash qismi (ko'chma zazemlenie to'plami) – texnik xizmat ko'rsatish paytida zanjirni xavfsiz toqsiz holatda saqlash uchun ishlatiladigan ko'chma qurilma.",
    purpose:
      "Tasodifiy ulangan yoki induktsiya kuchlanishidan ishchi xodimni himoya qilish; \"ko'rinadigan yerga ulash\" ta'minlash.",
    usage:
      "Yuqori va o'rta kuchlanishli liniyalarda remont va texnik xizmat ko'rsatishda.",
    parameters: [
      { label: "Qisqa tutashuv toki toqati", value: "5 kA – 25 kA (1 soniya)" },
      { label: "O'tkazgich kesimi", value: "16 mm² – 95 mm² (mis)" },
      { label: "Qisqich turi", value: "C-bolt, mexanik, pnevmatik" },
      { label: "Tekshirish muddati", value: "Har 12 oyda bir marta" },
    ],
    safetyNotes:
      "Avval yer ulash qismini yerga ulang, keyin liniyaga ulang. Olib chiqarishda aksincha tartibda: avval liniyadan, keyin yerdan uzing. Bu tartib hayot-mamot meselasidir.",
    faults:
      "Sim tolalarining sinishi (ko'rinadigan va ko'rinmas), qisqichlarning eskirishi, vida va tutqichlardagi korroziya. Har ishlatishdan oldin vizual tekshiruvdan o'tkazing.",
  },
];
