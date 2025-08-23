export type PortfolioSettings = {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  bannerProfileImage: string;
  displayBannerImage: string;
  location: string;
  email: string
  aboutText: string[];
  skills: {
    frontend: string[];
    backend: string[];
  };
  projects:Project[];
  timeline:Timeline[];
  socialLinks: SocialLinks;
  contactTitle: string;
  contactDescription: string;
  typeformLink: string;
  footerText:string;
}
/*SELAIN UTAMA*/
export type Project = {
  title: string;
  description: string;
  descriptionIndo: string;
  tech: string[];
  image: string;
  timeline: string []
};
export type Timeline = {
  headline: string;
  description: string[];
}
export type WorksLinks = {
  name: string;
  url: string;
}
export type SocialLinks = {
  instagram: string;
  github: string;
  linkedin: string;
  email: string;
  workLinks: WorksLinks[];
}


export const portfolioSettings: PortfolioSettings = {
  // Personal Information
  name: "Altha.cra",
  title: "Edgerunner",
  description: "Sedang Menjalani Spesialisasi",

  // Images
  profileImage: "../src/images/patung.jpg",
  bannerProfileImage: "../src/images/BG.jpg", // This is no longer used in the current layout
  displayBannerImage: "../src/images/BG.jpg", // Updated path to match the new structure

  // Contact Information
  location: "Indonesia, East Java",
  email: "fawgrahpics@gmail.com",

  // About Section
  aboutText: [
    "Atensi terhadap Seni, Teknologi, dan Matematika.",
    "Digital diver that missing consciousness in the flow of AI distruption",
    "Currently based in Indonesia, work with Laptop and Internet",
  ],

  // Skills
  skills: {
    frontend: ["Typescript Beginner", "JavaScript Beginner", "CSS", "GSAP", "Affinity Designer", "Figma", "Vite"],
    backend: ["No Backend background"],
  },

  // Projects
  projects: [
    {
      title: "Website Building",
      description: "Hands-on experience in building and editing websites using TypeScript.",
      descriptionIndo: "Membuat dan menangani Website dengan Typescript",
      tech: [ "Typescript Beginner", "CSS"],
      image: "/images/setup-user-interface.jpeg", // Updated path
      timeline: [
        "satu",
        "dua",
        "tiga",
      ]
    },
    {
      title: "User Interface Design",
      description: "Collaborative workspace for teams with real-time updates",
      descriptionIndo: "Desain Tampilan Website",
      tech: ["Figma", "Affinity Designer", "GSAP"],
      image: "/images/user-interface-design.jpeg", // Updated path
      timeline: [
        "halo",
        "Hi",
        "satu",
      ]
    },
    {
      title: "Logo Design",
      description: "Creating Brand Identity",
      descriptionIndo: "Membuat Logo Identitas",
      tech: ["Figma", "Affinity Designer"],
      image: "/images/logo-design.jpeg", // Updated path
      timeline: [
        "satu",
      ]
    },
    {
      title: "Shaders",
      description: "Creating 3D models three.js, WEBGL???????",
      descriptionIndo: "Membuat model 3D dengan three.js, dan WEBGL",
      tech: ["WEBGL"],
      image: "/images/3d-visualizer.png", // Updated path
      timeline: [
        "satu",
      ]
    },
  ],

  // Timeline (now structured as sections with headlines and long paragraphs)
  timeline: [
    {
      headline: "Hi There",
      description: [
        "Sedikit Basa-basi. Ada banyak pertanyaan ketika aku memasuki studi sistem informasi S1 bidang sistem informasi. sebelumnya, pada dasarnya aku tidak memiliki latar belakang Eksak sama sekali, hanya modal sekolah, dan suka gambar. Tidak kepikiran sama sekali rencana untuk masuk sistem informasi (waktu itu).",
        "Tidak lama setelah akhir jenjang SMA, dengan waktu yang sedikit aku menetapkan sistem informasi pilihan pertama, dan itu konsisten sampai aku diterima univ.",
      ],
    },
    {
      headline: "Why?",
      description: [
        "Kenapa ambil sistem informasi? waktu itu terlalu abstraktif untuk bisa tau sistem informasi itu seperti apa. Tapi semakin memikirkan dan mencari tau, dunia IT itu lebih luas dibanding yang kubayangkan dulunya. Ini membuat dilema setelahnya karena aku juga tertarik pada dunia seni seperti Art, Grafis, 3D, dll. Ini membuat kepikiran apakah masih bisa mempertahankan keduanya? menjadi sedikit generalist misalnya?.",
        "Ketika semakin mecari tau seperti mencoba mempelajari coding, aku jadi semakin tau, pada akhirnya kita sendirilah yang menentukan frekuensinya, dan aspek skill yang ingin kita kuasai. kenyataan kalau kita memang tidak bisa melakukan semuanya.",
      ],
    },
    {
      headline: "About A",
      description: [
        "Aku membagi dua hal untuk hal yang ingin kukuasai yaitu: seni dan teknologi. Aku mengambil gambar, lukisan dan grafis adalah hal yang paling dominan dari seni yang ingin kukusai. Lalu teknologi, sebenarnya banyak hal yang menarik, tapi untuk sekarang aku mengambil bidang 3D Enginer (Sebutan sendiri), sedikit Website Debelopment,  dan sekitarnya. ",
      ],
    },
    {
      headline: "About B",
      description: [
        "Ada satu pertanyaan lagi yaitu alasan kenapa aku tidak mengambil bidang seni yang notabennya juga sesuai minatku?",
        "Pertama adalah pekerjaan, membayangkan menggambar, desain, dll sebagai pekerjaan mungkin sedikit tidak sesuai, karena aku lebih menyukai menggambar sebagai hobi, dan terkadang melakukannya sesuai mood. Mungkin saja mendapatkan pekerjaan, atau proyek besar dengan uang banyak. Tapi, tidak ada bedanya dengan IT kalau diliat dari sisi nilai uangnya. Tapi sebenarnya alasan kedua-lah membuat pilihan-ku menjadi berimbang.",
        "Melihat perembangan Teknologi selalu menarik ketertarikan-ku. Tapi bukan berarti seni tidak ada aritnya menarik juga. Seni dan Teknologi adalah dunianya sendiri.",
        "Alasan kedua adalah lebih ke perencaan kedepannya. Untuk sekarang setidaknya ada beberapa gambaran untuk perencaanku. 1. Mendalami ranah WEB development, IT, yang secara umum menjadi Enginer, 2. Leading proyek dan bisinis, atau 3. Akdemisi.",
        "Yang terakhir adalah yang paling tidak diminati, tapi setidaknya seperti itulah expektasi yang menurutku ranah yang sudah memiliki dunianya masing-masing.",
        "Meski bagi diriku sebenarnnya dunia ini sangat relaitf, flexible, dan kita bisa jadi apa yang kita mau, dan tidak terpaut hal-hal seperti itu.",
        "2025-08-02 17:24",
        "Kesimpulannya?? Ada banyak hal yang tidak bisa kujelaskan dalam perencaanku.",
      ]
    }
  ],

  // Social Links

  socialLinks: {

    instagram: "https://instagram.com/altha.cra",
    github: "https://github.com/noeewa",
    linkedin: "https://linkedin.com/in/althacra2025",
    email: "fawgrahpics@gmail.com",
    workLinks: [
      { name: "Behance", url: "https://www.behance.net/your-behance-profile" },
      { name: "Dribbble", url: "https://dribbble.com/your-dribbble-profile" },
      // Add more links here as needed
    ],
  },

  // Contact Section
  contactTitle: "Let's Work Together",
  contactDescription:
    "I'm always interested in new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out.",
  typeformLink: "https://form.typeform.com/to/aCNLSr9B", // Moved Typeform link here


  // Footer
  footerText: "© 2025 Althacra. All rights reserved.",
}
