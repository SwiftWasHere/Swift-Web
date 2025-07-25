export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "SWIFT",
      subtitle: "Video Editor",
      description:
        "Transforming raw footage into cinematic masterpieces. Specializing in professional video editing and aerial cinematography that tells your story from every angle.",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
    },
    about: {
      title: "About Swift",
      description1:
        "With over 5 years of experience in video editing and drone cinematography, I specialize in creating compelling visual narratives that captivate audiences. My passion lies in combining technical expertise with creative vision to deliver exceptional results.",
      description2:
        "From corporate videos to cinematic productions, I bring a unique perspective to every project, utilizing cutting-edge drone technology and professional editing techniques to tell stories that resonate.",
      projects: "Projects",
      clients: "Clients",
      years: "Years",
      available: "Available for hire",
      remote: "Remote & On-location",
    },
    services: {
      title: "Services",
      description: "Professional video editing and drone cinematography services tailored to bring your vision to life",
      videoEditing: {
        title: "Video Editing",
        description:
          "Professional post-production services including color grading, audio mixing, and motion graphics.",
      },
      dronecinematography: {
        title: "Drone Cinematography",
        description: "Stunning aerial footage and photography for real estate, events, and cinematic productions.",
      },
      contentCreation: {
        title: "Content Creation",
        description:
          "Complete video production from concept to delivery for social media, marketing, and corporate needs.",
      },
    },
    portfolio: {
      title: "Portfolio",
      description: "A showcase of recent projects demonstrating expertise in video editing and drone cinematography",
      viewProject: "View Project",
      projectTitle: "Project",
      projectType: "Drone Cinematography & Editing",
    },
    contact: {
      title: "Let's Work Together",
      description: "Ready to bring your vision to life? Get in touch to discuss your next project",
      getInTouch: "Get In Touch",
      email: "Email",
      location: "Location",
      worldwide: "Available Worldwide",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        projectType: "Project Type",
        videoEditing: "Video Editing",
        dronecinematography: "Drone Cinematography",
        fullProduction: "Full Production",
        other: "Other",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      services: "Hizmetler",
      portfolio: "Portföy",
      contact: "İletişim",
    },
    hero: {
      title: "SWIFT",
      subtitle: "Video Editörü",
      description:
        "Ham görüntüleri sinematik başyapıtlara dönüştürüyorum. Hikayenizi her açıdan anlatan profesyonel video düzenleme ve havacılık sinematografisinde uzmanım.",
      viewWork: "Çalışmalarımı Gör",
      getInTouch: "İletişime Geç",
    },
    about: {
      title: "Swift Hakkında",
      description1:
        "Video düzenleme ve drone sinematografisinde 5 yılı aşkın deneyimle, izleyicileri büyüleyen etkileyici görsel anlatılar yaratma konusunda uzmanım. Tutkum, teknik uzmanlığı yaratıcı vizyonla birleştirerek olağanüstü sonuçlar elde etmektir.",
      description2:
        "Kurumsal videolardan sinematik prodüksiyonlara kadar, her projeye benzersiz bir bakış açısı getiriyorum. En son drone teknolojisi ve profesyonel düzenleme tekniklerini kullanarak yankı uyandıran hikayeler anlatıyorum.",
      projects: "Proje",
      clients: "Müşteri",
      years: "Yıl",
      available: "İşe hazır",
      remote: "Uzaktan & Yerinde",
    },
    services: {
      title: "Hizmetler",
      description:
        "Vizyonunuzu hayata geçirmek için özel olarak tasarlanmış profesyonel video düzenleme ve drone sinematografisi hizmetleri",
      videoEditing: {
        title: "Video Düzenleme",
        description: "Renk düzeltme, ses miksajı ve motion graphics dahil profesyonel post-prodüksiyon hizmetleri.",
      },
      dronecinematography: {
        title: "Drone Sinematografisi",
        description: "Emlak, etkinlikler ve sinematik prodüksiyonlar için çarpıcı havadan görüntü ve fotoğrafçılık.",
      },
      contentCreation: {
        title: "İçerik Üretimi",
        description:
          "Sosyal medya, pazarlama ve kurumsal ihtiyaçlar için konseptten teslimata kadar eksiksiz video prodüksiyonu.",
      },
    },
    portfolio: {
      title: "Portföy",
      description: "Video düzenleme ve drone sinematografisindeki uzmanlığı gösteren son projelerin vitrine",
      viewProject: "Projeyi Gör",
      projectTitle: "Proje",
      projectType: "Drone Sinematografisi & Düzenleme",
    },
    contact: {
      title: "Birlikte Çalışalım",
      description: "Vizyonunuzu hayata geçirmeye hazır mısınız? Bir sonraki projenizi görüşmek için iletişime geçin",
      getInTouch: "İletişime Geç",
      email: "E-posta",
      location: "Konum",
      worldwide: "Dünya Çapında Hizmet",
      form: {
        name: "İsim",
        namePlaceholder: "Adınız",
        email: "E-posta",
        emailPlaceholder: "eposta@ornek.com",
        projectType: "Proje Türü",
        videoEditing: "Video Düzenleme",
        dronecinematography: "Drone Sinematografisi",
        fullProduction: "Tam Prodüksiyon",
        other: "Diğer",
        message: "Mesaj",
        messagePlaceholder: "Projeniz hakkında bana anlatın...",
        send: "Mesaj Gönder",
      },
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
    },
  },
}

export type Locale = keyof typeof translations
