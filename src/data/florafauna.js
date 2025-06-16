// Di sini kita simpan semua data flora & fauna.
// Anda bisa melengkapi data ini sesuai kebutuhan.

export const floraFaunaData = [
  // 1. Capybara
  {
    id: 1,
    image: "/images/capybara.png",
    name: "Capybara",
    line1: "Hydrochoerus hydrochaeris",
    line2: "Status: Least Concern",
    title: "Capybara",
    images: ["/images/capybara.png", "/images/capybara2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Taxonomy", contentKey: "taxonomy" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
      { name: "Ecology", contentKey: "ecology" },
    ],
    content: {
      info: [
        "Kapibara adalah hewan pengerat terbesar di dunia, berasal dari Amerika Selatan. Mereka adalah hewan semi-akuatik yang menghabiskan banyak waktu di dekat air.",
      ],
      taxonomy: [
        "Kingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Rodentia, Family: Caviidae, Genus: Hydrochoerus, Species: H. hydrochaeris.",
      ],
      biology: [
        "Kapibara memiliki tubuh besar berbentuk barel, kepala besar dengan moncong tumpul, dan kaki berselaput yang membantu mereka berenang. Gigi seri mereka tumbuh terus menerus.",
      ],
      behavior: [
        "Mereka adalah hewan yang sangat sosial, hidup dalam kelompok besar. Mereka dikenal tenang dan sering membiarkan hewan lain, seperti burung dan monyet, duduk di punggung mereka.",
      ],
      ecology: [
        "Sebagai herbivora, makanan utama kapibara adalah rumput dan tanaman air. Mereka memainkan peran penting dalam ekosistem sebagai mangsa bagi predator besar seperti jaguar dan anaconda.",
      ],
    },
  },
  // 2. Dusky Shark
  {
    id: 2,
    image: "/images/duskyshark.png",
    name: "Dusky Shark",
    line1: "Carcharhinus obscurus",
    line2: "Status: Endangered",
    title: "Dusky Shark",
    images: ["/images/duskyshark.png", "/images/duskyshark2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Taxonomy", contentKey: "taxonomy" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
      { name: "Ecology", contentKey: "ecology" },
    ],
    content: {
      info: [
        "Hiu gelap adalah spesies hiu besar yang ditemukan di perairan tropis dan hangat di seluruh dunia. Mereka dikenal karena sifat migrasinya yang jauh.",
      ],
      taxonomy: [
        "Kingdom: Animalia, Phylum: Chordata, Class: Chondrichthyes, Order: Carcharhiniformes, Family: Carcharhinidae, Genus: Carcharhinus, Species: C. obscurus.",
      ],
      biology: [
        "Memiliki tubuh ramping dan aerodinamis dengan warna abu-abu kebiruan di bagian atas dan putih di bagian bawah, sebuah bentuk kamuflase yang dikenal sebagai countershading.",
      ],
      behavior: [
        "Sebagai predator oportunistik, mereka memakan berbagai jenis ikan, hiu yang lebih kecil, dan invertebrata. Mereka seringkali soliter tetapi dapat membentuk kelompok kecil.",
      ],
      ecology: [
        "Populasi hiu gelap menurun drastis karena penangkapan ikan berlebih, baik sebagai tangkapan utama maupun sampingan, membuat mereka terancam punah.",
      ],
    },
  },
  // 3. Capuchin Monkey
  {
    id: 3,
    image: "/images/capuchinmonkey.png",
    name: "Capuchin Monkey",
    line1: "Cebus capucinus",
    line2: "Status: Least Concern",
    title: "Capuchin Monkey",
    images: ["/images/capuchin.png", "/images/capuchinmonkey2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Taxonomy", contentKey: "taxonomy" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
      { name: "Ecology", contentKey: "ecology" },
      { name: "Roles with humans", contentKey: "roles" },
    ],
    content: {
      info: [
        "Monyet Capuchin adalah primata Dunia Baru yang terkenal dengan kecerdasan tinggi dan kemampuan menggunakan alat. Mereka sering terlihat di film dan televisi.",
      ],
      taxonomy: [
        "Kingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Primates, Family: Cebidae, Genus: Cebus, Species: C. capucinus.",
      ],
      biology: [
        "Mereka memiliki bulu berwarna terang di sekitar wajah, leher, dan bahu, yang kontras dengan sisa tubuh mereka yang berwarna gelap, menyerupai jubah biarawan Capuchin.",
      ],
      behavior: [
        "Sangat sosial dan cerdas, mereka menggunakan berbagai alat seperti batu untuk memecahkan kacang dan daun untuk menyerap air. Mereka hidup dalam kelompok besar yang dipimpin oleh jantan dominan.",
      ],
      ecology: [
        "Sebagai omnivora, mereka memakan buah, serangga, dan hewan kecil. Mereka memainkan peran penting dalam penyebaran biji di hutan.",
      ],
      roles: [
        "Karena kecerdasannya, Capuchin sering dilatih sebagai hewan pembantu untuk membantu orang dengan kelumpuhan, meskipun praktik ini kontroversial.",
      ],
    },
  },
  // 4. Coyote
  {
    id: 4,
    image: "/images/coyote.png",
    name: "Coyote",
    line1: "Canis latrans",
    line2: "Status: Least Concern",
    title: "Coyote",
    images: ["/images/coyote.png", "/images/coyote2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Taxonomy", contentKey: "taxonomy" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
      { name: "Ecology", contentKey: "ecology" },
      { name: "Roles with humans", contentKey: "roles" },
    ],
    content: {
      info: [
        "Coyote adalah anggota keluarga anjing yang berasal dari Amerika Utara. Mereka sangat mudah beradaptasi dan dapat ditemukan di berbagai habitat, dari gurun hingga kota.",
      ],
      taxonomy: [
        "Kingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Carnivora, Family: Canidae, Genus: Canis, Species: C. latrans.",
      ],
      biology: [
        "Ukuran mereka lebih kecil dari kerabat dekatnya, serigala abu-abu. Bulu mereka biasanya berwarna abu-abu terang dan merah atau fulvous, diselingi dengan hitam dan putih.",
      ],
      behavior: [
        "Coyote berkomunikasi dengan berbagai vokalisasi, termasuk lolongan khas mereka. Mereka bisa berburu sendiri atau dalam kelompok kecil.",
      ],
      ecology: [
        "Sebagai karnivora generalis, makanan mereka sangat bervariasi, termasuk hewan pengerat, kelinci, ikan, dan bahkan buah-buahan. Mereka membantu mengendalikan populasi hama.",
      ],
      roles: [
        "Adaptabilitas mereka sering membawa mereka ke dalam konflik dengan manusia di daerah perkotaan dan pertanian, meskipun mereka juga dikagumi karena ketahanan mereka.",
      ],
    },
  },
  // 5. Aardwolf
  {
    id: 5,
    image: "/images/aardwolf.png",
    name: "Aardwolf",
    line1: "Proteles cristata",
    line2: "Status: Least Concern",
    title: "Aardwolf",
    images: ["/images/aardwolf.png", "/images/aardwolf2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Taxonomy", contentKey: "taxonomy" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
      { name: "Ecology", contentKey: "ecology" },
    ],
    content: {
      info: [
        "Aardwolf adalah mamalia insektivora kecil yang berasal dari Afrika Timur dan Selatan. Namanya berarti 'serigala bumi' dalam bahasa Afrikaans.",
      ],
      taxonomy: [
        "Kingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Carnivora, Family: Hyaenidae, Genus: Proteles, Species: P. cristata.",
      ],
      biology: [
        "Meskipun berkerabat dengan hyena, aardwolf tidak berburu hewan besar. Mereka memiliki gigi geraham yang lemah dan mengandalkan lidah panjang dan lengket mereka untuk memakan serangga.",
      ],
      behavior: [
        "Hewan nokturnal dan pemalu ini menghabiskan hari di liang bawah tanah. Mereka bersifat monogami, dengan pasangan yang mempertahankan wilayah bersama.",
      ],
      ecology: [
        "Makanan mereka hampir secara eksklusif terdiri dari rayap. Seekor aardwolf dapat mengonsumsi hingga 250.000 rayap dalam satu malam, menjadikannya pengendali hama alami yang penting.",
      ],
    },
  },
  // 6. Elk
  {
    id: 6,
    image: "/images/elk.png",
    name: "Elk",
    line1: "Cervus canadensis",
    line2: "Status: Least Concern",
    title: "Elk",
    images: ["/images/elk.png", "/images/elk2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Taxonomy", contentKey: "taxonomy" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
      { name: "Ecology", contentKey: "ecology" },
    ],
    content: {
      info: [
        "Elk, juga dikenal sebagai wapiti, adalah salah satu spesies terbesar dari keluarga rusa di dunia. Mereka ditemukan di Amerika Utara dan Asia Timur.",
      ],
      taxonomy: [
        "Kingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Artiodactyla, Family: Cervidae, Genus: Cervus, Species: C. canadensis.",
      ],
      biology: [
        "Elk jantan terkenal dengan tanduk besar mereka, yang mereka lepaskan dan tumbuhkan kembali setiap tahun. Tanduk ini dapat tumbuh hingga satu inci per hari.",
      ],
      behavior: [
        "Selama musim kawin di musim gugur, elk jantan akan melakukan 'bugling', yaitu panggilan keras dan khas untuk menarik betina dan menantang jantan lain.",
      ],
      ecology: [
        "Sebagai herbivora, elk memakan rumput, tanaman, daun, dan kulit kayu. Mereka adalah bagian penting dari ekosistem mereka, membentuk lanskap melalui kebiasaan makan mereka.",
      ],
    },
  },
  // 7. Alpaca
  {
    id: 7,
    image: "/images/alpaca.png",
    name: "Alpaca",
    line1: "Vicugna pacos",
    line2: "Status: Domesticated",
    title: "Alpaca",
    images: ["/images/alpaca.png", "/images/alpaca2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Biology", contentKey: "biology" },
      { name: "Roles with humans", contentKey: "roles" },
    ],
    content: {
      info: [
        "Alpaca adalah spesies camelid Amerika Selatan yang didomestikasi, mirip dan sering dikelirukan dengan llama. Namun, alpaca secara signifikan lebih kecil dari llama.",
      ],
      biology: [
        "Mereka diternakkan secara khusus untuk serat mereka yang lembut, mewah, dan hangat. Ada dua jenis alpaca: Huacaya, dengan bulu seperti spons, dan Suri, dengan bulu panjang seperti sutra.",
      ],
      roles: [
        "Serat alpaca digunakan untuk membuat barang-barang rajutan dan tenunan, dari selimut dan syal hingga topi dan sarung tangan. Mereka juga hewan peliharaan yang populer karena sifatnya yang lembut.",
      ],
    },
  },
  // 8. Cow
  {
    id: 8,
    image: "/images/cow.png",
    name: "Cow",
    line1: "Bos taurus",
    line2: "Status: Domesticated",
    title: "Cow",
    images: ["/images/cow.png", "/images/cow2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Biology", contentKey: "biology" },
      { name: "Roles with humans", contentKey: "roles" },
    ],
    content: {
      info: [
        "Sapi adalah hewan ternak yang paling umum di seluruh dunia. Mereka adalah anggota modern dari subfamili Bovinae dan merupakan spesies yang paling tersebar luas dari genus Bos.",
      ],
      biology: [
        "Sebagai ruminansia, mereka memiliki sistem pencernaan empat bilik yang memungkinkan mereka mencerna tumbuhan berserat tinggi yang tidak dapat dicerna oleh banyak hewan lain.",
      ],
      roles: [
        "Sapi diternakkan sebagai ternak untuk daging (daging sapi dan sapi muda), sebagai hewan perah untuk susu dan produk susu lainnya, dan sebagai hewan penarik.",
      ],
    },
  },
  // 9. Chimpanzee
  {
    id: 9,
    image: "/images/chimpanzee.png",
    name: "Chimpanzee",
    line1: "Pan troglodytes",
    line2: "Status: Endangered",
    title: "Chimpanzee",
    images: ["/images/chimpanzee.png", "/images/chimpanzee2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Taxonomy", contentKey: "taxonomy" },
      { name: "Evolution", contentKey: "evolution" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
      { name: "Ecology", contentKey: "ecology" },
      { name: "Roles with humans", contentKey: "roles" },
    ],
    content: {
      info: [
        "Simpanse adalah spesies kera besar yang berasal dari hutan dan sabana Afrika tropis. Mereka adalah kerabat terdekat manusia yang masih hidup, berbagi sekitar 98% DNA kita.",
      ],
      taxonomy: [
        "Kingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Primates, Family: Hominidae, Genus: Pan, Species: P. troglodytes.",
      ],
      evolution: [
        "Garis keturunan manusia dan simpanse diperkirakan berpisah sekitar 4 hingga 6 juta tahun yang lalu, menjadikan studi mereka sangat penting untuk memahami evolusi manusia.",
      ],
      biology: [
        "Mereka memiliki lengan yang panjang dan kuat, memungkinkan mereka untuk berayun di antara pepohonan (brachiation) serta berjalan dengan buku-buku jari mereka di tanah.",
      ],
      behavior: [
        "Simpanse menunjukkan perilaku sosial yang kompleks, termasuk penggunaan alat yang canggih, komunikasi melalui berbagai vokalisasi dan gerakan, serta struktur politik dalam kelompok mereka.",
      ],
      ecology: [
        "Sebagai omnivora, mereka memakan buah, daun, dan terkadang berburu mamalia kecil seperti monyet. Mereka adalah penyebar benih yang vital.",
      ],
      roles: [
        "Studi tentang simpanse oleh primatolog seperti Jane Goodall telah merevolusi pemahaman kita tentang perilaku hewan dan evolusi manusia. Namun, mereka terancam oleh hilangnya habitat dan perburuan liar.",
      ],
    },
  },
  // 10. Gibbon
  {
    id: 10,
    image: "/images/gibbon.png",
    name: "Gibbon",
    line1: "Hylobatidae",
    line2: "Status: Endangered",
    title: "Gibbon",
    images: ["/images/gibbon.png", "/images/gibbon2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
    ],
    content: {
      info: [
        "Owa adalah kera kecil yang ditemukan di hutan tropis dan subtropis dari Asia Tenggara. Mereka sering disebut sebagai 'kera yang lebih rendah'.",
      ],
      biology: [
        "Mereka ahli dalam brachiation, berayun dari cabang ke cabang untuk jarak hingga 15 meter, dengan kecepatan hingga 55 km/jam. Mereka memiliki pergelangan tangan bola-dan-soket.",
      ],
      behavior: [
        "Owa dikenal karena nyanyian duet mereka yang keras dan rumit, yang sering mereka gunakan untuk menandai wilayah mereka di kanopi hutan.",
      ],
    },
  },
  // 11. Deer
  {
    id: 11,
    image: "/images/deer.png",
    name: "Deer",
    line1: "Cervidae",
    line2: "Status: Varies by species",
    title: "Deer",
    images: ["/images/deer.png", "/images/deer2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Biology", contentKey: "biology" },
      { name: "Ecology", contentKey: "ecology" },
    ],
    content: {
      info: [
        "Rusa adalah mamalia ruminansia berkuku yang membentuk keluarga Cervidae. Ada sekitar 100 spesies rusa yang ditemukan di seluruh dunia kecuali Antartika dan Australia.",
      ],
      biology: [
        "Jantan dari hampir semua spesies rusa, dan betina dari spesies rusa kutub, menumbuhkan dan melepaskan tanduk baru setiap tahun. Berbeda dengan tanduk permanen, tanduk adalah tulang padat.",
      ],
      ecology: [
        "Rusa adalah herbivora dan memainkan peran penting dalam membentuk komposisi vegetasi hutan melalui kebiasaan makan mereka. Mereka juga merupakan sumber makanan penting bagi banyak predator.",
      ],
    },
  },
  // 12. Bandicoot
  {
    id: 12,
    image: "/images/bandicoot.png",
    name: "Bandicoot",
    line1: "Peramelemorphia",
    line2: "Status: Varies by species",
    title: "Bandicoot",
    images: ["/images/bandicoot.png", "/images/bandicoot2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Biology", contentKey: "biology" },
      { name: "Ecology", contentKey: "ecology" },
    ],
    content: {
      info: [
        "Bandikut adalah kelompok marsupial omnivora darat berukuran kecil hingga sedang yang berasal dari wilayah Australia-Nugini.",
      ],
      biology: [
        "Mereka memiliki moncong yang runcing dan tubuh yang padat. Kaki belakang mereka yang kuat membuat mereka pelompat yang hebat, dan mereka menggunakan cakar depan mereka untuk menggali serangga.",
      ],
      ecology: [
        "Sebagai omnivora, mereka memakan serangga, cacing tanah, dan umbi tanaman. Kebiasaan menggali mereka membantu menganginkan tanah, meningkatkan kesehatan ekosistem.",
      ],
    },
  },
  // 13. Fresh Water Crocodile
  {
    id: 13,
    image: "/images/crocodile.png",
    name: "Fresh Water Crocodile",
    line1: "Crocodylus johnstoni",
    line2: "Status: Least Concern",
    title: "Freshwater Crocodile",
    images: ["/images/crocodile.png", "/images/crocodile2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
    ],
    content: {
      info: [
        "Buaya air tawar, juga dikenal sebagai 'Freshie', adalah spesies buaya yang relatif kecil yang endemik di Australia utara.",
      ],
      biology: [
        "Mereka memiliki moncong yang lebih sempit daripada kerabat mereka yang lebih besar dan lebih berbahaya, buaya air asin. Ini membuat mereka lebih cocok untuk berburu ikan.",
      ],
      behavior: [
        "Umumnya dianggap tidak berbahaya bagi manusia, mereka cenderung pemalu dan akan melarikan diri jika didekati. Mereka berjemur di tepi sungai di siang hari untuk mengatur suhu tubuh mereka.",
      ],
    },
  },
  // 14. Black Bear
  {
    id: 14,
    image: "/images/blackbear.png",
    name: "Black Bear",
    line1: "Ursus americanus",
    line2: "Status: Least Concern",
    title: "American Black Bear",
    images: ["/images/blackbear.png", "/images/blackbear2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Biology", contentKey: "biology" },
      { name: "Behavior", contentKey: "behavior" },
      { name: "Ecology", contentKey: "ecology" },
    ],
    content: {
      info: [
        "Beruang hitam Amerika adalah beruang berukuran sedang yang berasal dari Amerika Utara. Ini adalah spesies beruang yang paling umum dan tersebar luas di benua itu.",
      ],
      biology: [
        "Meskipun namanya 'hitam', warna bulu mereka dapat bervariasi dari hitam hingga coklat, kayu manis, atau bahkan putih. Mereka adalah pemanjat pohon yang sangat baik.",
      ],
      behavior: [
        "Biasanya pemalu dan waspada, mereka menghindari konfrontasi. Mereka memasuki periode dormansi selama musim dingin, yang dikenal sebagai hibernasi, meskipun tidak sedalam beruang grizzly.",
      ],
      ecology: [
        "Sebagai omnivora, diet mereka sangat bervariasi tergantung pada musim dan lokasi, termasuk rumput, buah beri, ikan, serangga, dan mamalia kecil.",
      ],
    },
  },
  // 15. Antelope
  {
    id: 15,
    image: "/images/antelope.png",
    name: "Antelope",
    line1: "Antilopinae",
    line2: "Status: Varies by species",
    title: "Antelope",
    images: ["/images/antelope.png", "/images/antelope2.png"],
    tabs: [
      { name: "Info", contentKey: "info" },
      { name: "Taxonomy", contentKey: "taxonomy" },
      { name: "Biology", contentKey: "biology" },
    ],
    content: {
      info: [
        "Antelop adalah kelompok beragam mamalia herbivora berkuku dalam keluarga Bovidae. Mereka dicirikan oleh tanduk yang tidak bercabang dan tidak pernah dilepaskan.",
      ],
      taxonomy: [
        "Antelop bukanlah kelompok taksonomi yang didefinisikan secara ketat; istilah ini digunakan untuk menggambarkan semua anggota Bovidae yang bukan sapi, domba, kambing, atau kerbau.",
      ],
      biology: [
        "Banyak antelop adalah pelari yang cepat dan gesit. Mereka telah beradaptasi untuk hidup di padang rumput terbuka, di mana kecepatan adalah pertahanan utama mereka terhadap predator.",
      ],
    },
  },
];
