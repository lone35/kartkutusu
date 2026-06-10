"use client";

import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const CLOUDINARY_CLOUD_NAME = "dy2wfdyzl";
const CLOUDINARY_MUSIC_PRESET = "kartkutusu_music";

const themes = {
  pink: {
    bg: "bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200",
    card: "bg-white border-rose-100",
    title: "text-rose-600",
    button: "bg-rose-500",
    text: "text-gray-800",
    icon: "🎂",
  },
  blue: {
    bg: "bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200",
    card: "bg-white border-blue-100",
    title: "text-blue-600",
    button: "bg-blue-500",
    text: "text-gray-800",
    icon: "💙",
  },
  gold: {
    bg: "bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200",
    card: "bg-white border-yellow-200",
    title: "text-amber-600",
    button: "bg-amber-500",
    text: "text-gray-800",
    icon: "👑",
  },
  dark: {
    bg: "bg-gradient-to-br from-gray-950 via-purple-950 to-black",
    card: "bg-white/10 border-white/20",
    title: "text-yellow-300",
    button: "bg-yellow-500",
    text: "text-gray-100",
    icon: "🖤",
  },
};

const templates = {
  birthday: {
    label: "Doğum Günü",
    emoji: "🎂",
    title: "İyi Ki Doğdun",
    defaultMessage: "Mutlu yıllar!",
    shareText: "Senin için hazırladığım doğum günü kartı 🎂🎉",
    effects: ["🎉", "🎊", "✨", "🎈"],
    messages: [
      "Yeni yaşın sana sağlık, mutluluk ve başarı getirsin. İyi ki doğdun, iyi ki varsın!",
      "Hayatının her günü bugünkü kadar neşeli, umutlu ve güzel olsun. Nice mutlu yıllara!",
      "Yeni yaşında tüm dileklerinin gerçekleşmesini dilerim. Mutlu yıllar!",
      "Gülümsemen hiç eksilmesin, kalbin hep mutlulukla dolsun. Doğum günün kutlu olsun!",
    ],
  },
  love: {
    label: "Sevgiliye Özel",
    emoji: "❤️",
    title: "Seni Çok Seviyorum",
    defaultMessage: "Kalbim hep seninle...",
    shareText: "Senin için romantik bir sürpriz hazırladım ❤️",
    effects: ["❤️", "💖", "💕", "💘"],
    messages: [
      "Sen hayatımın en güzel tesadüfü, kalbimin en özel yerisin. İyi ki varsın sevgilim.",
      "Her anımda aklımda, her duamda kalbimdesin. Seni çok seviyorum.",
      "Seninle geçen her gün, hayatımın en güzel hediyesi gibi. İyi ki benimlesin.",
      "Kalbimin en güzel cümlesi sensin. Seni bugün de, yarın da, her zaman çok seveceğim.",
    ],
  },
  proposal: {
    label: "Evlilik Teklifi",
    emoji: "💍",
    title: "Benimle Evlenir misin?",
    defaultMessage: "Bir ömür benimle olur musun?",
    shareText: "Senin için çok özel bir sürpriz hazırladım 💍",
    effects: ["💍", "❤️", "✨", "💖"],
    messages: [
      "Hayatımın geri kalanında her sabaha seninle uyanmak istiyorum. Benimle evlenir misin?",
      "Seninle bir ömür aynı yolda yürümek, aynı hayalleri paylaşmak istiyorum. Benimle evlenir misin?",
      "Kalbim seni seçti, hayatım seninle tamamlandı. Bir ömür benimle olur musun?",
      "En güzel hikâyemizin bugün başlamasını istiyorum. Benimle evlenir misin?",
    ],
  },
  baby: {
    label: "Yeni Bebek",
    emoji: "👶",
    title: "Hoş Geldin Minik Mucize",
    defaultMessage: "Ailemize mutluluk getirdin...",
    shareText: "Senin için özel bir yeni bebek kartı hazırladım 👶",
    effects: ["👶", "⭐", "🍼", "🎈"],
    messages: [
      "Hoş geldin minik mucize. Hayatımıza sevgi, neşe ve umut getirdin.",
      "Küçücük ellerinle kocaman mutluluklar getirdin. Hoş geldin güzel bebek.",
      "Ailemize katıldığın ilk günden beri her şey daha güzel. Hoş geldin minik kalp.",
      "Sağlıkla, mutlulukla, sevgiyle büyümen dileğiyle. Hoş geldin minik mucize.",
    ],
  },
  graduation: {
    label: "Mezuniyet",
    emoji: "🎓",
    title: "Başarınla Gurur Duyuyoruz",
    defaultMessage: "Yeni yolun başarılarla dolu olsun.",
    shareText: "Senin için mezuniyet sürprizi hazırladım 🎓",
    effects: ["🎓", "🎉", "⭐", "✨"],
    messages: [
      "Emeklerinin karşılığını aldığın bu özel günde seninle gurur duyuyoruz. Yolun açık olsun!",
      "Başarın daim, yolun aydınlık olsun. Mezuniyetin kutlu olsun!",
      "Bugün bir son değil, yepyeni bir başlangıç. Hayallerinin peşinden cesaretle git.",
      "Azmin, emeğin ve başarın hepimize ilham oldu. Mezuniyetin kutlu olsun!",
    ],
  },
  newyear: {
    label: "Yılbaşı",
    emoji: "🎄",
    title: "Mutlu Yıllar",
    defaultMessage: "Yeni yıl sana sağlık, mutluluk ve huzur getirsin.",
    shareText: "Senin için yılbaşı kartı hazırladım 🎄",
    effects: ["❄️", "🎄", "✨", "☃️"],
    messages: [
      "Yeni yıl sana sağlık, huzur, mutluluk ve bolca güzel anı getirsin. Mutlu yıllar!",
      "Yeni yılda tüm dileklerinin gerçekleşmesini dilerim. Umut dolu bir yıl olsun!",
      "Geçmişin yorgunluğu geride kalsın, yeni yıl kalbine güzellikler getirsin.",
      "Yeni yılın her günü neşe, sevgi ve başarıyla dolu olsun. Mutlu yıllar!",
    ],
  },
  mothersday: {
    label: "Anneler Günü",
    emoji: "👩",
    title: "Anneler Günün Kutlu Olsun",
    defaultMessage: "İyi ki varsın canım annem.",
    shareText: "Senin için Anneler Günü kartı hazırladım 👩",
    effects: ["🌹", "💐", "❤️", "🌸"],
    messages: [
      "İyi ki varsın canım annem. Sevgin, emeğin ve şefkatin için sonsuz teşekkür ederim.",
      "Dünyanın en güzel kalbine sahip annem, Anneler Günün kutlu olsun.",
      "Her zaman yanımda olduğun, beni koşulsuz sevdiğin için teşekkür ederim annem.",
      "Sen benim en güvenli limanım, en güzel şansımsın. Anneler Günün kutlu olsun.",
    ],
  },
  fathersday: {
    label: "Babalar Günü",
    emoji: "👨",
    title: "Babalar Günün Kutlu Olsun",
    defaultMessage: "Her zaman yanımda olduğun için teşekkür ederim.",
    shareText: "Senin için Babalar Günü kartı hazırladım 👨",
    effects: ["⭐", "🏆", "💙", "✨"],
    messages: [
      "Her zaman yanımda olduğun, bana güç verdiğin için teşekkür ederim. Babalar Günün kutlu olsun.",
      "Canım babam, emeğin, sevgin ve desteğin için minnettarım. İyi ki varsın.",
      "Sen benim kahramanım, yol gösterenim ve en büyük destekçimsin. Babalar Günün kutlu olsun.",
      "Hayatımdaki en güçlü omuz, en güvenli liman sensin babam. İyi ki varsın.",
    ],
  },
  womensday: {
    label: "Kadınlar Günü",
    emoji: "💐",
    title: "Kadınlar Günün Kutlu Olsun",
    defaultMessage: "Gücün, emeğin ve güzelliğin kutlu olsun.",
    shareText: "Senin için Kadınlar Günü kartı hazırladım 💐",
    effects: ["💐", "🌸", "🌷", "✨"],
    messages: [
      "Gücün, emeğin, zarafetin ve güzelliğin kutlu olsun. Kadınlar Günün kutlu olsun!",
      "Hayata kattığın sevgi, emek ve umut için teşekkür ederim. Kadınlar Günün kutlu olsun.",
      "Her zaman güçlü, özgür ve mutlu olman dileğiyle. Kadınlar Günün kutlu olsun.",
      "Dünyayı güzelleştiren tüm emeklerin ve sevgin için iyi ki varsın.",
    ],
  },
  teachersday: {
    label: "Öğretmenler Günü",
    emoji: "🎖️",
    title: "Öğretmenler Gününüz Kutlu Olsun",
    defaultMessage: "Emeğiniz ve ışığınız için teşekkür ederiz.",
    shareText: "Senin için Öğretmenler Günü kartı hazırladım 🎖️",
    effects: ["🎖️", "⭐", "📚", "✨"],
    messages: [
      "Bilginiz, emeğiniz ve sabrınız için teşekkür ederiz. Öğretmenler Gününüz kutlu olsun.",
      "Hayatımıza ışık tuttuğunuz, yolumuzu aydınlattığınız için minnettarız.",
      "Bir öğrencinin kalbine dokunmak en büyük emektir. Öğretmenler Gününüz kutlu olsun.",
      "Öğrettikleriniz sadece derslerde değil, hayatımızda da yol gösteriyor. Teşekkür ederiz.",
    ],
  },
};


const namedSongs = [
  { name: "Fatma", file: "/music/fatma-birthday.mp3" },
  { name: "Ayşe", file: "/music/ayse-birthday.mp3" },
  { name: "Emine", file: "/music/emine-birthday.mp3" },
  { name: "Hatice", file: "/music/hatice-birthday.mp3" },
  { name: "Zeynep", file: "/music/zeynep-birthday.mp3" },
  { name: "Elif", file: "/music/elif-birthday.mp3" },
  { name: "Meryem", file: "/music/meryem-birthday.mp3" },
  { name: "Şerife", file: "/music/serife-birthday.mp3" },
  { name: "Zehra", file: "/music/zehra-birthday.mp3" },
  { name: "Sultan", file: "/music/sultan-birthday.mp3" },
  { name: "Hanife", file: "/music/hanife-birthday.mp3" },
  { name: "Merve", file: "/music/merve-birthday.mp3" },
  { name: "Havva", file: "/music/havva-birthday.mp3" },
  { name: "Esra", file: "/music/esra-birthday.mp3" },
  { name: "Özlem", file: "/music/ozlem-birthday.mp3" },
  { name: "Yasemin", file: "/music/yasemin-birthday.mp3" },
  { name: "Büşra", file: "/music/busra-birthday.mp3" },
  { name: "Kübra", file: "/music/kubra-birthday.mp3" },
  { name: "Rabia", file: "/music/rabia-birthday.mp3" },
  { name: "Dilek", file: "/music/dilek-birthday.mp3" },
  { name: "Hacer", file: "/music/hacer-birthday.mp3" },
  { name: "Sevgi", file: "/music/sevgi-birthday.mp3" },
  { name: "Songül", file: "/music/songul-birthday.mp3" },
  { name: "Tuğba", file: "/music/tugba-birthday.mp3" },
  { name: "Gamze", file: "/music/gamze-birthday.mp3" },
  { name: "İrem", file: "/music/irem-birthday.mp3" },
  { name: "Ece", file: "/music/ece-birthday.mp3" },
  { name: "Ceren", file: "/music/ceren-birthday.mp3" },
  { name: "Melis", file: "/music/melis-birthday.mp3" },
  { name: "Sude", file: "/music/sude-birthday.mp3" },
  { name: "Sena", file: "/music/sena-birthday.mp3" },
  { name: "Senem", file: "/music/senem-birthday.mp3" },
  { name: "Aylin", file: "/music/aylin-birthday.mp3" },
  { name: "Alya", file: "/music/alya-birthday.mp3" },
  { name: "Defne", file: "/music/defne-birthday.mp3" },
  { name: "Gökçe", file: "/music/gokce-birthday.mp3" },
  { name: "Asel", file: "/music/asel-birthday.mp3" },
  { name: "Eylül", file: "/music/eylul-birthday.mp3" },
  { name: "Nehir", file: "/music/nehir-birthday.mp3" },
  { name: "Mina", file: "/music/mina-birthday.mp3" },
  { name: "Mira", file: "/music/mira-birthday.mp3" },
  { name: "Azra", file: "/music/azra-birthday.mp3" },
  { name: "Ela", file: "/music/ela-birthday.mp3" },
  { name: "Yağmur", file: "/music/yagmur-birthday.mp3" },
  { name: "Duru", file: "/music/duru-birthday.mp3" },
  { name: "İkra", file: "/music/ikra-birthday.mp3" },
  { name: "Elifnaz", file: "/music/elifnaz-birthday.mp3" },
  { name: "Selim", file: "/music/selim-birthday.mp3" },
  { name: "Nisa", file: "/music/nisa-birthday.mp3" },
  { name: "Nur", file: "/music/nur-birthday.mp3" },
  { name: "Nazlı", file: "/music/nazli-birthday.mp3" },
  { name: "Beyza", file: "/music/beyza-birthday.mp3" },
  { name: "Sıla", file: "/music/sila-birthday.mp3" },
  { name: "Hilal", file: "/music/hilal-birthday.mp3" },
  { name: "Gizem", file: "/music/gizem-birthday.mp3" },
  { name: "Deniz", file: "/music/deniz-birthday.mp3" },
  { name: "Derya", file: "/music/derya-birthday.mp3" },
  { name: "İlayda", file: "/music/ilayda-birthday.mp3" },
  { name: "Bahar", file: "/music/bahar-birthday.mp3" },
  { name: "Cansu", file: "/music/cansu-birthday.mp3" },
  { name: "Pınar", file: "/music/pinar-birthday.mp3" },
  { name: "Damla", file: "/music/damla-birthday.mp3" },
  { name: "Selin", file: "/music/selin-birthday.mp3" },
  { name: "İclal", file: "/music/iclal-birthday.mp3" },
  { name: "İnci", file: "/music/inci-birthday.mp3" },
  { name: "Berfin", file: "/music/berfin-birthday.mp3" },
  { name: "Ecrin", file: "/music/ecrin-birthday.mp3" },
  { name: "Esila", file: "/music/esila-birthday.mp3" },
  { name: "Hira", file: "/music/hira-birthday.mp3" },
  { name: "Rüya", file: "/music/ruya-birthday.mp3" },
  { name: "Lina", file: "/music/lina-birthday.mp3" },
  { name: "Masal", file: "/music/masal-birthday.mp3" },
  { name: "Lara", file: "/music/lara-birthday.mp3" },
  { name: "Maya", file: "/music/maya-birthday.mp3" },
  { name: "Derin", file: "/music/derin-birthday.mp3" },
  { name: "Güneş", file: "/music/gunes-birthday.mp3" },
  { name: "Aysima", file: "/music/aysima-birthday.mp3" },
  { name: "Dilara", file: "/music/dilara-birthday.mp3" },
  { name: "İpek", file: "/music/ipek-birthday.mp3" },
  { name: "Beren", file: "/music/beren-birthday.mp3" },
  { name: "Nisanur", file: "/music/nisanur-birthday.mp3" },
  { name: "Aleyna", file: "/music/aleyna-birthday.mp3" },
  { name: "Zümra", file: "/music/zumra-birthday.mp3" },
  { name: "Zümra Nur", file: "/music/zumra-nur-birthday.mp3" },
  { name: "Hiranur", file: "/music/hiranur-birthday.mp3" },
  { name: "Betül", file: "/music/betul-birthday.mp3" },
  { name: "Kader", file: "/music/kader-birthday.mp3" },
  { name: "Fadime", file: "/music/fadime-birthday.mp3" },
  { name: "Gül", file: "/music/gul-birthday.mp3" },
  { name: "Gülay", file: "/music/gulay-birthday.mp3" },
  { name: "Gülşah", file: "/music/gulsah-birthday.mp3" },
  { name: "Seher", file: "/music/seher-birthday.mp3" },
  { name: "Leyla", file: "/music/leyla-birthday.mp3" },
  { name: "Aslı", file: "/music/asli-birthday.mp3" },
  { name: "Sibel", file: "/music/sibel-birthday.mp3" },
  { name: "Burcu", file: "/music/burcu-birthday.mp3" },
  { name: "Neslihan", file: "/music/neslihan-birthday.mp3" },
  { name: "Arzu", file: "/music/arzu-birthday.mp3" },
  { name: "Filiz", file: "/music/filiz-birthday.mp3" },
  { name: "Nurgül", file: "/music/nurgul-birthday.mp3" },
  { name: "Mehmet", file: "/music/mehmet-birthday.mp3" },
  { name: "Mustafa", file: "/music/mustafa-birthday.mp3" },
  { name: "Ahmet", file: "/music/ahmet-birthday.mp3" },
  { name: "Ali", file: "/music/ali-birthday.mp3" },
  { name: "Hüseyin", file: "/music/huseyin-birthday.mp3" },
  { name: "Hasan", file: "/music/hasan-birthday.mp3" },
  { name: "İbrahim", file: "/music/ibrahim-birthday.mp3" },
  { name: "İsmail", file: "/music/ismail-birthday.mp3" },
  { name: "Osman", file: "/music/osman-birthday.mp3" },
  { name: "Murat", file: "/music/murat-birthday.mp3" },
  { name: "Yusuf", file: "/music/yusuf-birthday.mp3" },
  { name: "Ömer", file: "/music/omer-birthday.mp3" },
  { name: "Ramazan", file: "/music/ramazan-birthday.mp3" },
  { name: "Süleyman", file: "/music/suleyman-birthday.mp3" },
  { name: "Abdullah", file: "/music/abdullah-birthday.mp3" },
  { name: "Recep", file: "/music/recep-birthday.mp3" },
  { name: "Fatih", file: "/music/fatih-birthday.mp3" },
  { name: "Emre", file: "/music/emre-birthday.mp3" },
  { name: "Halil", file: "/music/halil-birthday.mp3" },
  { name: "Adem", file: "/music/adem-birthday.mp3" },
  { name: "Enes", file: "/music/enes-birthday.mp3" },
  { name: "Mert", file: "/music/mert-birthday.mp3" },
  { name: "Kaan", file: "/music/kaan-birthday.mp3" },
  { name: "Arda", file: "/music/arda-birthday.mp3" },
  { name: "Eren", file: "/music/eren-birthday.mp3" },
  { name: "Berkay", file: "/music/berkay-birthday.mp3" },
  { name: "Burak", file: "/music/burak-birthday.mp3" },
  { name: "Furkan", file: "/music/furkan-birthday.mp3" },
  { name: "Kerem", file: "/music/kerem-birthday.mp3" },
  { name: "Umut", file: "/music/umut-birthday.mp3" },
  { name: "Yiğit", file: "/music/yigit-birthday.mp3" },
  { name: "Alperen", file: "/music/alperen-birthday.mp3" },
  { name: "Muhammed", file: "/music/muhammed-birthday.mp3" },
  { name: "Muhammed Ali", file: "/music/muhammed-ali-birthday.mp3" },
  { name: "Ali Asaf", file: "/music/ali-asaf-birthday.mp3" },
  { name: "Ömer Asaf", file: "/music/omer-asaf-birthday.mp3" },
  { name: "Hamza", file: "/music/hamza-birthday.mp3" },
  { name: "Miraç", file: "/music/mirac-birthday.mp3" },
  { name: "Eymen", file: "/music/eymen-birthday.mp3" },
  { name: "Poyraz", file: "/music/poyraz-birthday.mp3" },
  { name: "Çınar", file: "/music/cinar-birthday.mp3" },
  { name: "Kuzey", file: "/music/kuzey-birthday.mp3" },
  { name: "Ayaz", file: "/music/ayaz-birthday.mp3" },
  { name: "Atlas", file: "/music/atlas-birthday.mp3" },
  { name: "Aras", file: "/music/aras-birthday.mp3" },
  { name: "Alparslan", file: "/music/alparslan-birthday.mp3" },
  { name: "Göktuğ", file: "/music/goktug-birthday.mp3" },
  { name: "Metehan", file: "/music/metehan-birthday.mp3" },
  { name: "Aslan", file: "/music/aslan-birthday.mp3" },
  { name: "Miran", file: "/music/miran-birthday.mp3" },
  { name: "Emir", file: "/music/emir-birthday.mp3" },
  { name: "Ege", file: "/music/ege-birthday.mp3" },
  { name: "Doruk", file: "/music/doruk-birthday.mp3" },
  { name: "Baran", file: "/music/baran-birthday.mp3" },
  { name: "Bora", file: "/music/bora-birthday.mp3" },
  { name: "Onur", file: "/music/onur-birthday.mp3" },
  { name: "Oğuzhan", file: "/music/oguzhan-birthday.mp3" },
  { name: "Serkan", file: "/music/serkan-birthday.mp3" },
  { name: "Hakan", file: "/music/hakan-birthday.mp3" },
  { name: "Volkan", file: "/music/volkan-birthday.mp3" },
  { name: "Tolga", file: "/music/tolga-birthday.mp3" },
  { name: "Tuna", file: "/music/tuna-birthday.mp3" },
  { name: "Kadir", file: "/music/kadir-birthday.mp3" },
  { name: "Kemal", file: "/music/kemal-birthday.mp3" },
  { name: "Cem", file: "/music/cem-birthday.mp3" },
  { name: "Can", file: "/music/can-birthday.mp3" },
  { name: "Cihan", file: "/music/cihan-birthday.mp3" },
  { name: "Batuhan", file: "/music/batuhan-birthday.mp3" },
  { name: "Bartu", file: "/music/bartu-birthday.mp3" },
  { name: "Taha", file: "/music/taha-birthday.mp3" },
  { name: "Talha", file: "/music/talha-birthday.mp3" },
  { name: "Yunus", file: "/music/yunus-birthday.mp3" },
  { name: "Yunus Emre", file: "/music/yunus-emre-birthday.mp3" },
  { name: "Salih", file: "/music/salih-birthday.mp3" },
  { name: "Bilal", file: "/music/bilal-birthday.mp3" },
  { name: "Fırat", file: "/music/firat-birthday.mp3" },
  { name: "Koray", file: "/music/koray-birthday.mp3" },
  { name: "Levent", file: "/music/levent-birthday.mp3" },
  { name: "Orhan", file: "/music/orhan-birthday.mp3" },
  { name: "Erdem", file: "/music/erdem-birthday.mp3" },
  { name: "Ertuğrul", file: "/music/ertugrul-birthday.mp3" },
  { name: "Efe", file: "/music/efe-birthday.mp3" },
  { name: "Musa", file: "/music/musa-birthday.mp3" },
  { name: "Yakup", file: "/music/yakup-birthday.mp3" },
  { name: "Sinan", file: "/music/sinan-birthday.mp3" },
  { name: "Samet", file: "/music/samet-birthday.mp3" },
  { name: "İlker", file: "/music/ilker-birthday.mp3" },
  { name: "Uğur", file: "/music/ugur-birthday.mp3" },
  { name: "Gökhan", file: "/music/gokhan-birthday.mp3" },
  { name: "Okan", file: "/music/okan-birthday.mp3" },
  { name: "Bülent", file: "/music/bulent-birthday.mp3" },
  { name: "Cemal", file: "/music/cemal-birthday.mp3" },
  { name: "Celal", file: "/music/celal-birthday.mp3" },
  { name: "Rıza", file: "/music/riza-birthday.mp3" },
  { name: "Faruk", file: "/music/faruk-birthday.mp3" },
  { name: "Ferhat", file: "/music/ferhat-birthday.mp3" },
  { name: "Doğukan", file: "/music/dogukan-birthday.mp3" },
  { name: "Yasin", file: "/music/yasin-birthday.mp3" },
  { name: "Serhat", file: "/music/serhat-birthday.mp3" },
];


function compressImageFile(file: File): Promise<File> {
  return new Promise((resolve) => {
    if (!file.type.startsWith("image/")) {
      resolve(file);
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(imageUrl);

      const maxSize = 1400;
      let { width, height } = img;

      if (width > height && width > maxSize) {
        height = Math.round((height * maxSize) / width);
        width = maxSize;
      } else if (height >= width && height > maxSize) {
        width = Math.round((width * maxSize) / height);
        height = maxSize;
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        resolve(file);
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(file);
            return;
          }

          const compressedFile = new File(
            [blob],
            file.name.replace(/\.[^/.]+$/, "") + "-kartkutusu.jpg",
            {
              type: "image/jpeg",
              lastModified: Date.now(),
            }
          );

          resolve(compressedFile);
        },
        "image/jpeg",
        0.85
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      resolve(file);
    };

    img.src = imageUrl;
  });
}

function TemplateEffects({ effects }: { effects: string[] }) {
  const items = Array.from({ length: 34 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {items.map((_, index) => {
        const emoji = effects[index % effects.length];
        const left = (index * 17) % 100;
        const delay = (index % 12) * 0.35;
        const duration = 5 + (index % 6);
        const size = 22 + (index % 5) * 5;

        return (
          <span
            key={index}
            className="absolute select-none animate-fall"
            style={{
              left: `${left}%`,
              top: "-12%",
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`,
              opacity: 0.85,
            }}
          >
            {emoji}
          </span>
        );
      })}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20vh) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(125vh) rotate(360deg) scale(1.15);
            opacity: 0;
          }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [blown, setBlown] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);

  const [musicType, setMusicType] = useState<"library" | "name" | "upload">("library");
  const [selectedSong, setSelectedSong] = useState("/music/birthday-happy.mp3");
  const [nameSongSearch, setNameSongSearch] = useState("");
  const [showNameSongList, setShowNameSongList] = useState(true);
  const [uploadedSong, setUploadedSong] = useState<string | null>(null);
  const [musicFile, setMusicFile] = useState<File | null>(null);

  const [theme, setTheme] = useState<keyof typeof themes>("pink");
  const [template, setTemplate] = useState<keyof typeof templates>("birthday");
  const [cardLink, setCardLink] = useState("");
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const selectedTheme = themes[theme];
  const selectedTemplate = templates[template];

  async function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const compressedFiles = await Promise.all(
      files.map((file) => compressImageFile(file))
    );

    setPhotoFiles(compressedFiles);
    setPhotoPreviews(compressedFiles.map((file) => URL.createObjectURL(file)));
    setGalleryIndex(0);
  }

  function handleMusicUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setMusicFile(file);
    setUploadedSong(URL.createObjectURL(file));
  }

  function startCard() {
    setBlown(true);
    setTimeout(() => {
      audioRef.current?.play().catch(() => {
        console.log("Müzik otomatik başlatılamadı.");
      });
    }, 500);
  }

  function nextPhoto() {
    if (photoPreviews.length <= 1) return;
    setGalleryIndex((current) => (current + 1) % photoPreviews.length);
  }

  function previousPhoto() {
    if (photoPreviews.length <= 1) return;
    setGalleryIndex((current) =>
      current === 0 ? photoPreviews.length - 1 : current - 1
    );
  }

  function selectReadyMessage(text: string) {
    setMessage(text);
  }

  async function uploadPhoto(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Fotoğraf yüklenemedi");
    }

    return data.url;
  }

  async function uploadMusicDirectlyToCloudinary(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_MUSIC_PRESET);
    formData.append("folder", "kartkutusu/music");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok || !data.secure_url) {
      console.error("Cloudinary music upload error:", data);
      throw new Error("Müzik yüklenemedi");
    }

    return data.secure_url;
  }

  async function saveCard() {
    try {
      setSaving(true);
      setCopied(false);

      let photoUrls: string[] = [];
      let musicUrl = "";

      if (photoFiles.length > 0) {
        photoUrls = await Promise.all(photoFiles.map((file) => uploadPhoto(file)));
      }

      if (musicType === "upload" && musicFile) {
        musicUrl = await uploadMusicDirectlyToCloudinary(musicFile);
      }

      if (musicType === "library" || musicType === "name") {
        musicUrl = selectedSong;
      }

      const response = await fetch("/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message,
          photoUrl: photoUrls[0] || "",
          photoUrls,
          musicUrl,
          theme,
          template,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setCardLink(`${window.location.origin}/card/${data.cardId}`);
      } else {
        alert("Kart kaydedilemedi.");
      }
    } catch (error) {
      console.error(error);
      alert(
        "Kart oluşturulurken bir hata oluştu. Fotoğraf çok büyük olabilir veya internet bağlantısı kesilmiş olabilir. Lütfen tekrar deneyin."
      );
    } finally {
      setSaving(false);
    }
  }

  async function copyLink() {
    if (!cardLink) return;
    await navigator.clipboard.writeText(cardLink);
    setCopied(true);
  }

  const musicSource = musicType === "library" || musicType === "name" ? selectedSong : uploadedSong;

  const filteredNamedSongs = namedSongs.filter((song) =>
    song.name.toLocaleLowerCase("tr-TR").includes(nameSongSearch.toLocaleLowerCase("tr-TR"))
  );

  if (blown) {
    return (
      <main
        className={`min-h-screen flex items-center justify-center ${selectedTheme.bg} p-6 overflow-hidden relative`}
      >
        <TemplateEffects effects={selectedTemplate.effects} />
        {musicSource && <audio ref={audioRef} src={musicSource} />}

        <section
          className={`relative z-10 w-full max-w-2xl rounded-3xl ${selectedTheme.card} shadow-2xl border p-8 text-center`}
        >
          <div className="text-7xl mb-4">{selectedTemplate.emoji}</div>

          {photoPreviews.length > 0 && (
            <div className="mb-6">
              <img
                src={photoPreviews[galleryIndex]}
                alt="Yüklenen fotoğraf"
                className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
              />

              {photoPreviews.length > 1 && (
                <div className="flex items-center justify-center gap-3 mt-4">
                  <button
                    onClick={previousPhoto}
                    className={`${selectedTheme.button} text-white px-4 py-2 rounded-xl font-bold`}
                  >
                    ←
                  </button>

                  <span className={`font-bold ${selectedTheme.text}`}>
                    {galleryIndex + 1} / {photoPreviews.length}
                  </span>

                  <button
                    onClick={nextPhoto}
                    className={`${selectedTheme.button} text-white px-4 py-2 rounded-xl font-bold`}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          )}

          <h1
            className={`text-4xl md:text-5xl font-extrabold mb-4 ${selectedTheme.title}`}
          >
            {selectedTemplate.title} {name || "Arkadaşım"}!
          </h1>

          <p
            className={`text-lg md:text-xl leading-relaxed max-w-xl mx-auto ${selectedTheme.text}`}
          >
            {message || selectedTemplate.defaultMessage}
          </p>

          <button
            onClick={() => setBlown(false)}
            className={`mt-8 ${selectedTheme.button} text-white px-6 py-3 rounded-2xl shadow font-semibold hover:scale-105 transition`}
          >
            Geri Dön
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 p-5">
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start min-h-screen py-8">
        <div className="text-center lg:text-left">
          <div className="mb-8 flex justify-center lg:justify-start">
            <img
              src="/logo.svg"
              alt="KartKutusu"
              className="h-28 w-auto"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
            Fotoğrafını ekle,{" "}
            <span className="text-rose-600">müziğini seç,</span>{" "}
            sürprizini paylaş.
          </h1>

          <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0">
            Doğum günü, sevgiliye özel, yılbaşı, anneler günü ve daha fazlası
            için dakikalar içinde kişiye özel müzikli kart oluştur.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl p-4 shadow text-center">
              <div className="text-3xl mb-1">📸</div>
              <p className="text-sm font-semibold text-gray-900">Çoklu Fotoğraf</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow text-center">
              <div className="text-3xl mb-1">🎵</div>
              <p className="text-sm font-semibold text-gray-900">Kendi Müziğin</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow text-center">
              <div className="text-3xl mb-1">🔗</div>
              <p className="text-sm font-semibold text-gray-900">Tek Tık Paylaşım</p>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
            <div className="bg-white/90 rounded-2xl p-4 shadow text-center border border-rose-100">
              <p className="text-sm font-bold text-gray-900">✅ 10 Kart Türü</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-4 shadow text-center border border-rose-100">
              <p className="text-sm font-bold text-gray-900">✅ 4 Özel Tema</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-4 shadow text-center border border-rose-100">
              <p className="text-sm font-bold text-gray-900">✅ Çoklu Fotoğraf</p>
            </div>
          </div>
          <section className="mt-8 max-w-xl mx-auto lg:mx-0 rounded-[2rem] border border-rose-200 bg-white/95 p-6 shadow-2xl">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-rose-600">
                Ürün / Hizmet
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                🎁 Dijital Sürpriz Kart
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Fotoğraf, kişisel mesaj ve müzik ile hazırlanan özel kartını
                oluştur, önizle ve paylaşılabilir kart linkini aktif et.
              </p>

              <div className="mt-6 rounded-3xl bg-rose-50 p-5 border border-rose-100">
                <span className="text-5xl font-extrabold text-rose-600">
                  19,90 TL
                </span>

                <p className="mt-2 text-sm font-semibold text-gray-600">
                  Kart başı tek seferlik ödeme
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-bold text-gray-800">
              <div className="rounded-2xl bg-white p-3 shadow-sm border border-rose-100">
                ✅ Fotoğraf ekleme
              </div>

              <div className="rounded-2xl bg-white p-3 shadow-sm border border-rose-100">
                ✅ Kişisel mesaj
              </div>

              <div className="rounded-2xl bg-white p-3 shadow-sm border border-rose-100">
                ✅ Müzik seçme
              </div>

              <div className="rounded-2xl bg-white p-3 shadow-sm border border-rose-100">
                ✅ Özel paylaşım linki
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-900 p-4 text-center text-white">
              <a
  href="/urunler"
  className="mt-4 block rounded-2xl bg-rose-600 p-4 text-center font-bold text-white shadow-lg hover:bg-rose-700 transition"
>
  🎁 Tüm Ürünleri Gör
</a>
              <p className="font-bold">Önizleme ücretsizdir.</p>
              <p className="mt-1 text-sm text-gray-200">
                Kart linkini aktif etmek için 19,90 TL ödeme alınır.
              </p>
            </div>
          </section>

          <div className="mt-8 max-w-xl mx-auto lg:mx-0">
            <div className="relative overflow-hidden rounded-[2rem] border border-rose-100 bg-white/95 p-6 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-100" />

              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <span className="absolute left-8 top-8 animate-bounce text-2xl">🎉</span>
                <span className="absolute right-10 top-10 animate-pulse text-2xl">✨</span>
                <span className="absolute bottom-12 left-12 animate-bounce text-2xl">🎊</span>
                <span className="absolute bottom-8 right-10 animate-pulse text-2xl">💖</span>
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg">
                    <span className="animate-bounce text-4xl">🎁</span>
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-rose-600">
                      Nasıl Çalışır?
                    </p>
                    <p className="text-base font-bold text-gray-800">
                      4 adımda unutulmaz sürpriz kart hazırla
                    </p>
                  </div>
                </div>

                <div className="mb-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-3 text-center shadow-md border border-rose-100">
                    <div className="mb-1 text-3xl">📸</div>
                    <p className="text-xs font-bold text-gray-800">Fotoğrafını Yükle</p>
                  </div>

                  <div className="rounded-2xl bg-white p-3 text-center shadow-md border border-rose-100">
                    <div className="mb-1 text-3xl">💌</div>
                    <p className="text-xs font-bold text-gray-800">Mesajını Yaz</p>
                  </div>

                  <div className="rounded-2xl bg-white p-3 text-center shadow-md border border-rose-100">
                    <div className="mb-1 text-3xl">🎵</div>
                    <p className="text-xs font-bold text-gray-800">Müziğini Seç</p>
                  </div>

                  <div className="rounded-2xl bg-white p-3 text-center shadow-md border border-rose-100">
                    <div className="mb-1 text-3xl">🔗</div>
                    <p className="text-xs font-bold text-gray-800">Linkini Paylaş</p>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-rose-100 bg-white p-4 shadow-inner">
                  <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-5 text-center">
                    <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <span className="animate-pulse text-5xl">🎂</span>
                    </div>

                    <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-rose-500">
                      Sürpriz kart hazırlandı
                    </p>

                    <h4 className="mb-3 text-3xl font-extrabold leading-tight text-rose-600 md:text-4xl">
                      Hande İçin Özel Kart 🎊
                    </h4>

                    <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-700 md:text-base">
                      Fotoğrafını ekle, duygularını yaz, müziğini seç ve
                      unutulmaz bir sürpriz hazırla.
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white shadow-lg">
                    Önizle → Beğen → Kartını Oluştur 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-rose-100 p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <img
                src="/logo.svg"
                alt="KartKutusu"
                className="h-24 w-auto"
              />
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900">
              Kartını Oluştur
            </h2>
            <p className="text-gray-700 mt-1">
              Bilgileri doldur, sürpriz linkini al.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-rose-200 p-4 rounded-2xl text-gray-900">
              <h3 className="font-bold mb-3 text-gray-900">🎁 Kart Türü Seç</h3>

              <div className="grid grid-cols-2 gap-3">
                {Object.entries(templates).map(([value, item]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTemplate(value as keyof typeof templates)}
                    className={`rounded-2xl border p-3 text-sm font-bold transition ${
                      template === value
                        ? "border-rose-600 bg-rose-50 text-rose-700"
                        : "border-rose-200 bg-white text-gray-800"
                    }`}
                  >
                    {item.emoji} {item.label}
                  </button>
                ))}
              </div>
            </div>

            <input
              type="text"
              placeholder="Kimin için? Örn: Hande"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-rose-200 bg-white p-4 rounded-2xl w-full outline-none focus:ring-2 focus:ring-rose-300 text-gray-900 placeholder:text-gray-500"
            />

            <div className="bg-white border border-rose-200 p-4 rounded-2xl text-gray-900">
              <h3 className="font-bold mb-3 text-gray-900">
                📝 Hazır Mesaj Seç
              </h3>

              <div className="grid gap-2">
                {selectedTemplate.messages.map((readyMessage, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => selectReadyMessage(readyMessage)}
                    className={`text-left rounded-2xl border p-3 text-sm leading-relaxed transition ${
                      message === readyMessage
                        ? "border-rose-600 bg-rose-50 text-rose-700"
                        : "border-rose-200 bg-white text-gray-800"
                    }`}
                  >
                    {readyMessage}
                  </button>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Hazır mesaj seçebilir veya aşağıdaki alana kendi mesajını yazabilirsin.
              </p>
            </div>

            <textarea
              placeholder="Mesajını yaz..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-rose-200 bg-white p-4 rounded-2xl w-full h-32 outline-none focus:ring-2 focus:ring-rose-300 text-gray-900 placeholder:text-gray-500"
            />

            <div className="bg-white border border-rose-200 p-4 rounded-2xl text-gray-900">
              <h3 className="font-bold mb-3 text-gray-900">🎨 Tema Seçimi</h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["pink", "🌸 Romantik Pembe"],
                  ["blue", "💙 Mavi Sürpriz"],
                  ["gold", "👑 Altın Lüks"],
                  ["dark", "🖤 Siyah Premium"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTheme(value as keyof typeof themes)}
                    className={`rounded-2xl border p-3 text-sm font-bold transition ${
                      theme === value
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-rose-200 bg-white text-gray-800"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label className="block bg-white border border-rose-200 rounded-2xl p-4 cursor-pointer text-gray-900">
              <p className="font-bold text-gray-900 mb-2">
                📸 Fotoğrafları seç
              </p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="w-full text-sm text-gray-800"
              />
              <p className="text-xs text-gray-500 mt-2">
                Birden fazla fotoğraf seçebilirsin.
              </p>
            </label>

            {photoPreviews.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {photoPreviews.map((preview, index) => (
                  <img
                    key={preview}
                    src={preview}
                    alt={`Ön izleme ${index + 1}`}
                    className="w-full h-20 object-cover rounded-xl shadow"
                  />
                ))}
              </div>
            )}

            <div className="bg-white border border-rose-200 p-4 rounded-2xl text-gray-900">
              <h3 className="font-bold mb-3 text-gray-900">🎵 Müzik Seçimi</h3>

              <label className="flex items-center gap-2 mb-3 text-gray-900">
                <input
                  type="radio"
                  checked={musicType === "library"}
                  onChange={() => setMusicType("library")}
                />
                <span>Hazır müzik seç</span>
              </label>

              {musicType === "library" && (
                <select
                  value={selectedSong}
                  onChange={(e) => setSelectedSong(e.target.value)}
                  className="border border-rose-200 bg-white p-3 rounded-xl w-full mb-3 outline-none text-gray-900"
                >
                  <option value="/music/birthday-happy.mp3">🎂 Doğum Günü - Neşeli</option>
                  <option value="/music/birthday-soft.mp3">🎂 Doğum Günü - Duygusal</option>
                  <option value="/music/romantic-soft.mp3">❤️ Romantik - Yumuşak</option>
                  <option value="/music/romantic-piano.mp3">❤️ Romantik - Piyano</option>
                  <option value="/music/emotional-piano.mp3">✨ Duygusal - Piyano</option>
                  <option value="/music/emotional-soft.mp3">✨ Duygusal - Yumuşak</option>
                  <option value="/music/happy-fun.mp3">🎉 Eğlenceli - Mutlu</option>
                  <option value="/music/party-fun.mp3">🎉 Eğlenceli - Parti</option>
                  <option value="/music/graduation.mp3">🎓 Mezuniyet</option>
                  <option value="/music/success.mp3">🎓 Başarı</option>
                  <option value="/music/newyear.mp3">🎄 Yılbaşı</option>
                  <option value="/music/winter.mp3">❄️ Kış / Yılbaşı</option>
                </select>
              )}

              <label className="flex items-center gap-2 mb-3 text-gray-900">
                <input
                  type="radio"
                  checked={musicType === "name"}
                  onChange={() => setMusicType("name")}
                />
                <span>İsme özel şarkı seç</span>
              </label>

              {musicType === "name" && (
                <div className="mb-3 rounded-2xl border border-rose-100 bg-rose-50 p-3">
                  <input
                    type="text"
                    value={nameSongSearch}
                    onChange={(e) => {
                      setNameSongSearch(e.target.value);
                      setShowNameSongList(true);
                    }}
                    onFocus={() => setShowNameSongList(true)}
                    placeholder="İsim yaz... örnek: Hande"
                    className="border border-rose-200 bg-white p-3 rounded-xl w-full mb-3 outline-none focus:ring-2 focus:ring-rose-300 text-gray-900 placeholder:text-gray-500"
                  />

                  {showNameSongList && (
                    <div className="grid gap-2 max-h-56 overflow-y-auto pr-1">
                      {filteredNamedSongs.length > 0 ? (
                        filteredNamedSongs.map((song) => (
                          <button
                            key={song.file}
                            type="button"
                            onClick={() => {
                              setSelectedSong(song.file);
                              setNameSongSearch(song.name);
                              setShowNameSongList(false);
                            }}
                            className={`text-left rounded-xl border p-3 text-sm font-bold transition ${
                            selectedSong === song.file
                              ? "border-rose-600 bg-white text-rose-700"
                              : "border-rose-200 bg-white/80 text-gray-800"
                          }`}
                        >
                          🎂 {song.name} İçin Doğum Günü Şarkısı
                          </button>
                        ))
                      ) : (
                        <p className="text-sm text-gray-600">
                          Bu isim için hazır şarkı henüz eklenmedi. İstersen kendi şarkını yükleyebilirsin.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              <label className="flex items-center gap-2 mb-3 text-gray-900">
                <input
                  type="radio"
                  checked={musicType === "upload"}
                  onChange={() => setMusicType("upload")}
                />
                <span>Kendi şarkını yükle</span>
              </label>

              {musicType === "upload" && (
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleMusicUpload}
                  className="w-full bg-white border border-rose-200 p-3 rounded-xl text-sm text-gray-800"
                />
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <button
                onClick={startCard}
                className="bg-rose-500 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg hover:scale-[1.02] transition"
              >
                Önizle {selectedTemplate.emoji}
              </button>

              <button
                onClick={saveCard}
                disabled={saving}
                className="bg-purple-600 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg disabled:opacity-50 hover:scale-[1.02] transition"
              >
                {saving ? "Kaydediliyor..." : "🎁 Kartı Oluştur "}
              </button>
            </div>

            {cardLink && (
              <div className="mt-5 bg-white p-4 rounded-2xl shadow border border-rose-100 text-center">
                <p className="font-bold mb-2 text-gray-900">
                  Kart linkin hazır 🎉
                </p>

                <a
                  href={cardLink}
                  target="_blank"
                  className="text-blue-600 underline break-all text-sm"
                >
                  {cardLink}
                </a>

                <div className="flex flex-col gap-3 mt-4">
                  <button
                    onClick={copyLink}
                    className="bg-gray-900 text-white px-5 py-3 rounded-xl font-bold"
                  >
                    {copied ? "Kopyalandı ✅" : "Linki Kopyala 📋"}
                  </button>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      selectedTemplate.shareText + "\n\n" + cardLink
                    )}`}
                    target="_blank"
                    className="bg-green-500 text-white px-5 py-3 rounded-xl font-bold"
                  >
                    WhatsApp'ta Paylaş 📱
                  </a>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-white p-3 rounded-xl shadow">
                    <QRCodeSVG value={cardLink} size={180} />
                  </div>
                </div>

                <p className="text-xs text-gray-600 mt-2">
                  QR kodu okutunca kart açılır.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-rose-200 pt-6 text-center text-sm text-gray-600">
        <div className="flex flex-wrap justify-center gap-6 mb-3">
          <a href="/urunler" className="hover:text-rose-600 transition">
  Ürünler
</a>
          <a href="/privacy" className="hover:text-rose-600 transition">
            Gizlilik Politikası
          </a>

          <a href="/terms" className="hover:text-rose-600 transition">
            Kullanım Şartları
          </a>

          <a href="/contact" className="hover:text-rose-600 transition">
            İletişim
          </a>
        </div>

        <p>© {new Date().getFullYear()} KartKutusu.com - Tüm Hakları Saklıdır</p>
      </footer>
    </main>
  );
}
