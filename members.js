// ============================================================
//  members.js  —  社員データ設定ファイル
//  ここだけ編集すれば社員の追加・削除・修正ができます
// ============================================================

const TEAMS = [
  {
    id: "designer",
    labelJp: "デザイナーチーム",
    color: "#FF6BAE",
    folderColor: "linear-gradient(160deg, #FFB3D4 0%, #FF6BAE 100%)",
    members: [
      {
        id: "tagami",
        nameEn: "Tagami Shohei",
        nameJp: "田上 翔平",
        nameReading: "（たがみ しょうへい）",
        grade: "G6（シニアデザイナー）",
        years: "入社 9 年目",
        origin: "茨城県",
        likes: "麻辣担、映画鑑賞（アメコミ映画）、猫、チョコ",
        hobbies: "映画鑑賞、ゲーム（最近はモンハン）",
        photo: "assets/circle_tagami.png",
        favPhoto: "assets/fav_tagami_orig.jpg",
        favLabel: "田上の一押し写真"
      },
      {
        id: "tokawa",
        nameEn: "Tokawa Issei",
        nameJp: "十河 一誠",
        nameReading: "（とかわ いっせい）",
        grade: "G6（シニアデザイナー）",
        years: "入社 5 年目",
        origin: "大阪",
        likes: "キムチ、明太子",
        hobbies: "本、飲み",
        photo: "assets/circle_tokawa.png",
        favPhoto: "assets/fav_tokawa_orig.jpg",
        favLabel: "十河の一押し写真"
      },
      {
        id: "oh",
        nameEn: "Oh Sugyeong",
        nameJp: "オ スギョン",
        nameReading: "（呉秀鏡）",
        grade: "G4（リードデザイナー）",
        years: "入社 7 年目",
        origin: "韓国",
        likes: "韓国料理、中華料理、コーヒ、ティラミス、ジェラート",
        hobbies: "香水、アイドル、ディズニー",
        photo: "assets/circle_oh.png",
        favPhoto: "assets/fav_oh_orig.jpg",
        favLabel: "スギョンの一押し写真"
      },
      {
        id: "tsai",
        nameEn: "Tsai Chiajung",
        nameJp: "サイ カヨウ",
        nameReading: "（蔡佳容）",
        grade: "G4（リードデザイナー）",
        years: "入社 6 年目",
        origin: "台湾",
        likes: "スープカレー、シナモンロール、コーヒー",
        hobbies: "旅行、山登り、インテリア、猫",
        photo: "assets/circle_tsai.png",
        favPhoto: "assets/fav_tsai_orig.jpg",
        favLabel: "サイの一押し写真"
      },
      {
        id: "lau",
        nameEn: "Lau Yeelam",
        nameJp: "リュウ イリン",
        nameReading: "（劉以琳）",
        grade: "G3（デザイナー）",
        years: "入社 4 年目",
        origin: "香港",
        likes: "レタス",
        hobbies: "読書、小説創作、イラスト、音楽、自主学習",
        photo: "assets/circle_lau.png",
        favPhoto: "assets/fav_lau_orig.jpg",
        favLabel: "イリンの一押し写真"
      },
      {
        id: "takeuchi",
        nameEn: "Takeuchi Yuka",
        nameJp: "竹内 祐香",
        nameReading: "（たけうち ゆか）",
        grade: "G3（デザイナー）",
        years: "入社 2 年目",
        origin: "静岡県",
        likes: "からあげ",
        hobbies: "アニメ、漫画、カメラ",
        photo: "assets/circle_takeuchi.png",
        favPhoto: "assets/fav_takeuchi_orig.jpg",
        favLabel: "竹内の一押し写真"
      },
      {
        id: "cai",
        nameEn: "Cai Shuyi",
        nameJp: "サイ ジョイ",
        nameReading: "（蔡舒颐）",
        grade: "G1（アシスタントデザイナー）",
        years: "入社 2 年目",
        origin: "中国",
        likes: "焼うどん、チーズケーキ",
        hobbies: "料理、ぬいぐるみ集め",
        photo: "assets/circle_cai.png",
        favPhoto: "assets/fav_cai_orig.jpg",
        favLabel: "ジョイの一押し写真"
      },
      {
        id: "wang",
        nameEn: "Wang Yenting",
        nameJp: "オウ エンテイ",
        nameReading: "（王彦庭）",
        grade: "G1（アシスタントデザイナー）",
        years: "入社 2 年目",
        origin: "台湾",
        likes: "ポテト、プリン",
        hobbies: "ダンス、美術館巡り",
        photo: "assets/circle_wang.png",
        favPhoto: "assets/fav_wang_orig.png",
        favLabel: "エンの一押し写真"
      }
    ]
  },
  {
    id: "engineer",
    labelJp: "エンジニアチーム",
    color: "#8B9DC3",
    folderColor: "linear-gradient(160deg, #BDC9E8 0%, #8B9DC3 100%)",
    members: [
      {
        id: "kono",
        nameEn: "Kono Taiki",
        nameJp: "河野 大輝",
        nameReading: "（こうの たいき）",
        grade: "G6（シニアエンジニア）",
        years: "入社 9 年目",
        origin: "東京都",
        likes: "甘い物、うなぎ",
        hobbies: "ご飯を食べること作ること、お散歩",
        photo: "assets/circle_kono.png",
        favPhoto: "assets/fav_kono_orig.jpg",
        favLabel: "河野の一押し写真"
      },
      {
        id: "kadegawa",
        nameEn: "Kadegawa Kotaro",
        nameJp: "嘉手川 航太朗",
        nameReading: "（かでかわ こうたろう）",
        grade: "G4（リードエンジニア）",
        years: "入社 6 年目",
        origin: "埼玉県",
        likes: "オムライス、パン",
        hobbies: "Web 制作、創作活動、ゲーム、アミューズメント・観光系",
        photo: "assets/circle_kadegawa.png",
        favPhoto: "assets/fav_kadegawa_orig.jpg",
        favLabel: "嘉手川の一押し写真"
      },
      {
        id: "hiraga",
        nameEn: "Hiraga Tomohiro",
        nameJp: "平賀 智大",
        nameReading: "（ひらが ともひろ）",
        grade: "G4（リードエンジニア）",
        years: "入社 5 年目",
        origin: "埼玉県",
        likes: "ラーメン、チョコレート",
        hobbies: "音楽鑑賞、ゲーム",
        photo: "assets/circle_hiraga.png",
        favPhoto: "assets/fav_hiraga_orig.jpg",
        favLabel: "平賀の一押し写真"
      },
      {
        id: "chiba",
        nameEn: "Chiba Kota",
        nameJp: "千葉 晃大",
        nameReading: "（ちば こうた）",
        grade: "G2（アシスタントエンジニア）",
        years: "入社 3 年目",
        origin: "東京都",
        likes: "サムギョプサル、キムチ、アップルパイ、パンケーキ",
        hobbies: "ゲーム（モンハン）、ショッピング",
        photo: "assets/circle_chiba.png",
        favPhoto: "assets/fav_chiba_orig.jpg",
        favLabel: "千葉の一押し写真"
      },
      {
        id: "bae",
        nameEn: "Bae Seokjin",
        nameJp: "ペ ソクジン",
        nameReading: "",
        grade: "派遣（エンジニア）",
        years: "韓国",
        origin: "",
        likes: "ヤンニョムチキン、マック、焼鳥、焼肉、サイゼ、サムギョプサル",
        hobbies: "食べ歩き、音楽鑑賞、韓国ドラマ",
        photo: "assets/circle_bae.png",
        favPhoto: "assets/fav_bae_orig.jpg",
        favLabel: "ペの一押し写真"
      },
      {
        id: "onari",
        nameEn: "Onari Yasushi",
        nameJp: "大成 泰",
        nameReading: "（おおなり やすし）",
        grade: "派遣（エンジニア）",
        years: "",
        origin: "",
        likes: "ヤンニョムチキン、マック、焼鳥、焼肉、サイゼ、サムギョプサル",
        hobbies: "食べ歩き、音楽鑑賞、韓国ドラマ",
        photo: "assets/circle_onari.png",
        favPhoto: "assets/fav_onari_orig.jpg",
        favLabel: "大成の一押し写真"
      }
    ]
  },
  {
    id: "data",
    labelJp: "データーチーム",
    color: "#C8963A",
    folderColor: "linear-gradient(160deg, #F0D080 0%, #D4A040 100%)",
    members: [
      {
        id: "iwase",
        nameEn: "Iwase Akihiro",
        nameJp: "岩瀬 彰宏",
        nameReading: "（いわせ あきひろ）",
        grade: "G5（リードエンジニア）",
        years: "入社 12 年目",
        origin: "東京都",
        likes: "長芋",
        hobbies: "自由研究（海外 YouTuber 動画を字幕無しで見る）",
        photo: "assets/circle_iwase.png",
        favPhoto: "assets/fav_iwase_orig.jpg",
        favLabel: "岩瀬の一押し写真"
      },
      {
        id: "okuwaki",
        nameEn: "Okuwaki Kana",
        nameJp: "奥脇 佳奈",
        nameReading: "（おくわき かな）",
        grade: "G3（エンジニア）",
        years: "入社 8 年目",
        origin: "東京都",
        likes: "餃子、パイナップル、固めのグミ",
        hobbies: "ショッピング、車いじり",
        photo: "assets/circle_okuwaki.png",
        favPhoto: "assets/fav_okuwaki_orig.jpg",
        favLabel: "奥脇の一押し写真"
      }
    ]
  }
];
