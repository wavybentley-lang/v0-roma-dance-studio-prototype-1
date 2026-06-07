import {
  Calendar,
  CalendarRange,
  Crown,
  Flame,
  Heart,
  Star,
  Tag,
  Ticket,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ScheduleDay = {
  day: string
  classes: {
    time: string
    name: string
  }[]
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

export const brand = {
  name: "Roma Dance Studio",
  shortName: "Roma Dance Studio",
  tagline: "Professionalità, Eleganza ed Esclusività",
  logo: "",
  phone: "+39 377 105 1900",
  phoneHref: "tel:+393771051900",
  whatsappHref: "https://wa.me/393771051900",
  email: "Info@romadancestudio.com",
  emailHref: "mailto:Info@romadancestudio.com",
  websiteHref: "",
  instagramHref: "https://www.instagram.com/roma_dance_studio/",
  facebookHref: "https://www.facebook.com/romadancestudio.eur/",
  mapsHref: "https://maps.google.com/?q=Piazza+Del+Sole+52+53+54+00144+Roma+RM+Italy",
  primaryLocation: "Piazza Del Sole, 52/53/54",
  secondaryLocation: "00144 Roma RM",
  cityLine: "Italy",
  hours:
    "Lunedì: 14:00-22:00\n" +
    "Martedì: 14:00-22:00\n" +
    "Mercoledì: 14:00-22:00\n" +
    "Giovedì: 14:00-22:00\n" +
    "Venerdì: 14:00-22:00\n" +
    "Sabato: 09:00-15:00\n" +
    "Domenica: Chiuso",
  copyright: "2026 Roma Dance Studio",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#orari", label: "Orari" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "9+", label: "PROGRAMMI ARTISTICI" },
  { number: "BAMBINI, TEEN E ADULTI", label: "PERCORSI PER OGNI ETA" },
  { number: "9:30-21:30", label: "DAL LUNEDI AL VENERDI" },
  { number: "STEP BY STEP", label: "TALENTO, TECNICA E PASSIONE" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Steps Dance",
    courses: [
      {
        title: "Danza",
        age: "Percorsi formativi",
        description: "Lezioni pensate per sviluppare tecnica, musicalita e presenza scenica in un percorso strutturato.",
        image: "/sunriseforever-bounce-5277075.jpg",
        Icon: Zap,
      },
      {
        title: "Tecnica accademica e danza moderna",
        age: "Formazione tecnica",
        description: "Studio della base accademica e della danza moderna per costruire precisione, controllo ed espressivita.",
        image: "/karenbond-ballet-1409894.jpg",
        Icon: Flame,
      },
      {
        title: "Crossfit",
        age: "Esperienze artistiche",
        description: "Gestualita corporea, recitazione, saggi, spettacoli e stage per completare la crescita scenica dell'allievo.",
        image: "/pilates.jpg",
        Icon: Wind,
      },
    ],
  },
]

export const featuredGalleryPhotos: { src: string; alt: string }[] = [
  { src: "/romadancestudio/nostrimomenti1.jpg", alt: "Roma Dance Studio momento 1" },
  { src: "/romadancestudio/nostrimomenti2.jpg", alt: "Roma Dance Studio momento 2" },
  { src: "/romadancestudio/nostrimomenti3.jpg", alt: "Roma Dance Studio momento 3" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
  "/additional/saggio-ateneo-agropoli-1.webp", "/additional/saggio-ateneo-agropoli-2.webp",
  "/additional/performance-ateneo-agropoli.webp", "/additional/spettacolo-fine-anno-ateneo-1.webp",
  "/additional/spettacolo-fine-anno-ateneo-3.webp", "/additional/spettacolo-fine-anno-ateneo.webp",
  "/additional/danza-femminile-sedia-agropoli.webp", "/additional/female-perform-sitting-chair.webp",
  "/additional/female-solo.webp", "/additional/females-group-perform.webp",
  "/additional/females-perform-stage.webp", "/additional/females-performs3.webp",
  "/additional/group-performance-4.webp", "/additional/group-performance-all-black.webp",
  "/additional/groupd-perform-1.webp", "/additional/kid-perform-solo.webp",
  "/additional/kid-solo-performance.webp", "/additional/kids-group-performance.webp",
  "/additional/kids-performance.webp", "/additional/kids-performance1.webp",
  "/additional/m-f-performa1.webp", "/additional/male-dancer.webp",
  "/additional/male-fdemale-performance4.webp", "/additional/male-female-ballet-1.webp",
  "/additional/coppia-balletto-ateneo-agropoli.webp",
  "/additional/coppia-balletto-ateneo-agropoli-3.webp",
  "/additional/duo-danza-ateneo-agropoli.webp", "/additional/gruppo-misto-performance-ateneo.webp",
  "/additional/coppia-performance-ateneo-cilento.webp",
  "/additional/coppia-danza-moderna-agropoli.webp",
  "/additional/coppia-danza-moderna-agropoli-1.webp",
  "/additional/coppia-danza-moderna-agropoli-2.webp",
  "/additional/coppia-danza-moderna-agropoli-4.webp",
  "/additional/coppia-performance-palcoscenico-1.webp",
  "/additional/coppia-performance-palcoscenico-2.webp",
  "/additional/coppia-performance-palcoscenico-3.webp",
  "/additional/coppia-danza-ateneo.webp", "/additional/gruppo-misto-danza-ateneo-3.webp",
  "/additional/danzatore-performance-agropoli-2.webp",
  "/additional/danzatore-solo-ateneo-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli-1.webp",
  "/additional/duo-misto-performance-ateneo.webp",
  "/additional/uomo-danza-performance-agropoli.webp",
  "/additional/performance-danza-ateneo-agropoli.webp",
  "/additional/due-ragazze-palcoscenico-ateneo.webp",
  "/additional/donna-danza-performance-agropoli-3.webp",
  "/additional/donna-danza-rosso-ateneo-agropoli.webp",
  "/additional/donne-performance-ateneo-agropoli-2.webp",
]

export const salaArmoniaSchedule: ScheduleDay[] = [
  {
    day: "LUNEDI",
    classes: [
      { time: "10:00-11:00", name: "Danza" },
      { time: "11:00-12:00", name: "Programmi Bambini" },
      { time: "14:00-15:00", name: "Programmi Teen" },
      { time: "17:00-18:00", name: "Programmi Adulti" },
      { time: "18:00-19:00", name: "Canto" },
      { time: "19:00-20:00", name: "Recitazione" },
      { time: "20:00-21:30", name: "Musical Theatre" },
    ],
  },
  {
    day: "MARTEDI",
    classes: [
      { time: "10:00-11:00", name: "Musica" },
      { time: "11:00-12:00", name: "Pole Dance" },
      { time: "14:00-15:00", name: "Programmi Bambini" },
      { time: "17:00-18:00", name: "Danza" },
      { time: "18:00-19:00", name: "Canto" },
      { time: "19:00-20:00", name: "Recitazione" },
      { time: "20:00-21:30", name: "Programmi Adulti" },
    ],
  },
  {
    day: "MERCOLEDI",
    classes: [
      { time: "10:00-11:00", name: "Programmi Bambini" },
      { time: "11:00-12:00", name: "Musica" },
      { time: "14:00-15:00", name: "Programmi Teen" },
      { time: "17:00-18:00", name: "Danza" },
      { time: "18:00-19:00", name: "Pole Dance" },
      { time: "19:00-20:00", name: "Recitazione" },
      { time: "20:00-21:30", name: "Musical Theatre" },
    ],
  },
  {
    day: "GIOVEDI",
    classes: [
      { time: "10:00-11:00", name: "Canto" },
      { time: "11:00-12:00", name: "Musica" },
      { time: "14:00-15:00", name: "Programmi Bambini" },
      { time: "17:00-18:00", name: "Programmi Teen" },
      { time: "18:00-19:00", name: "Danza" },
      { time: "19:00-20:00", name: "Pole Dance" },
      { time: "20:00-21:30", name: "Programmi Adulti" },
    ],
  },
  {
    day: "VENERDI",
    classes: [
      { time: "10:00-11:00", name: "Recitazione" },
      { time: "11:00-12:00", name: "Musical Theatre" },
      { time: "14:00-15:00", name: "Programmi Bambini" },
      { time: "17:00-18:00", name: "Danza" },
      { time: "18:00-19:00", name: "Canto" },
      { time: "19:00-20:00", name: "Programmi Teen" },
      { time: "20:00-21:30", name: "Programmi Adulti" },
    ],
  },
]

export const salaRitmoSchedule = salaArmoniaSchedule

export const scheduleBookingServices = [
  "Lezioni di prova",
  "Percorsi personalizzati",
  "Stage e preparazione spettacoli",
]

export const scheduleContactInfo = {
  address: "Piazza Del Sole, 52/53/54, 00144 Roma RM, Italy",
  phone: "+39 377 105 1900",
}

export const pricingCards = [
  { Icon: Ticket, title: "Lezione Singola", description: "Ideale per provare un corso prima di iscriverti. Nessun impegno, massima flessibilita." },
  { Icon: Calendar, title: "Abbonamento Mensile", description: "La soluzione piu flessibile per chi vuole allenarsi e crescere con continuita." },
  { Icon: CalendarRange, title: "Abbonamento Trimestrale", description: "Una formula pensata per dare stabilita al percorso con un vantaggio economico." },
  { Icon: Crown, title: "Percorso Annuale", description: "La scelta migliore per chi vuole costruire il proprio talento passo dopo passo." },
]

export const pricingHighlights = [
  { Icon: Tag, title: "Tariffe Differenziate", description: "I costi variano in base al programma scelto e alla fascia di eta. Contattaci per un preventivo personalizzato." },
  { Icon: Users, title: "Percorsi per Eta", description: "Sono disponibili proposte dedicate a bambini, teen e adulti, con livelli e obiettivi differenti." },
]
