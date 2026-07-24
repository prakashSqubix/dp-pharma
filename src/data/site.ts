import maleAvatar1 from "@/assets/doctor-male-1.jpg";
import maleAvatar2 from "@/assets/doctor-male-2.jpg";
import maleAvatar3 from "@/assets/doctor-male-3.jpg";
import femaleAvatar1 from "@/assets/doctor-female-1.jpg";

export const BRAND = {
  name: "D P PHARMA",
  tagline: "Your Trusted Pharmacy & Multispeciality Clinic",
  phones: ["7894558338", "7978243634", "7008661729"],
  whatsapp: "917894558338",
  address: {
    line1: "Ground Floor, Big Cup Cafe Campus",
    line2: "Phulnakhara, Near IMS & SUM Hospital-II",
    line3: "Pahal, Bhubaneswar, Odisha 751032",
    city: "Bhubaneswar",
    state: "Odisha",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=SUM+Hospital+Campus+2+Phulnakhara+Bhubaneswar",
  mapsEmbed:
    "https://www.google.com/maps?q=SUM+Hospital+Campus+2+Phulnakhara+Bhubaneswar&output=embed",
  rating: 4.58,
};

export type Doctor = {
  name: string;
  department: string;
  avatar: string;
};

const A = { m1: maleAvatar1, m2: maleAvatar2, m3: maleAvatar3, f1: femaleAvatar1 };

export const doctors: Doctor[] = [
  { name: "Dr. Sankarshan Das", department: "Medicine", avatar: A.m2 },
  { name: "Dr. Aditya Naraya Sahu", department: "Medicine", avatar: A.m1 },
  { name: "Dr. Abhijeet Mohapatra", department: "OBS & Gynaecology", avatar: A.m1 },
  { name: "Dr. Deepika Dash", department: "OBS & Gynaecology", avatar: A.f1 },
  { name: "Dr. Sampad Dash", department: "Pulmonary Medicine", avatar: A.m3 },
  { name: "Dr. Sudhanshu Sekhara Das", department: "Pediatric", avatar: A.m2 },
  { name: "Dr. Kallolinee Samal", department: "Skin & VD", avatar: A.f1 },
  { name: "Dr. Sabyasachi Pattanayak", department: "Neurology", avatar: A.m2 },
  { name: "Dr. Abhinash Swain", department: "Neurology", avatar: A.m3 },
  { name: "Dr. Satya Sarathi Jena", department: "Cardiology", avatar: A.m1 },
  { name: "Dr. Pranabananda Sahoo", department: "Cardiology", avatar: A.m2 },
  { name: "Dr. Bibhutibhushan Das", department: "Neuro Surgery", avatar: A.m2 },
  { name: "Dr. Soumya Ranjan Mishra", department: "Radi-Oncology", avatar: A.m3 },
  { name: "Dr. Jagamohan Mishra", department: "Urology", avatar: A.m1 },
  { name: "Dr. Vivekananda Acharya", department: "ENT", avatar: A.m1 },
  { name: "Dr. Prabir Majhi", department: "Gastro Medicine", avatar: A.m3 },
  { name: "Dr. Nihar Ranjan Mishra", department: "Orthopedic", avatar: A.m3 },
  { name: "Dr. Sai Prasad Ray", department: "Psychiatry", avatar: A.m2 },
  { name: "Dr. Sandeep Ku Sahu", department: "Endocrinologist", avatar: A.m1 },
  { name: "Dr. Siddhartha Goutam", department: "Geriatric Medicine", avatar: A.m2 },
];

export const openingHours = [
  { day: "Sunday", hours: "8:00 AM – 10:30 PM", index: 0 },
  { day: "Monday", hours: "8:00 AM – 11:00 PM", index: 1 },
  { day: "Tuesday", hours: "8:00 AM – 11:00 PM", index: 2 },
  { day: "Wednesday", hours: "8:00 AM – 11:00 PM", index: 3 },
  { day: "Thursday", hours: "8:00 AM – 11:00 PM", index: 4 },
  { day: "Friday", hours: "8:00 AM – 11:00 PM", index: 5 },
  { day: "Saturday", hours: "8:00 AM – 10:00 PM", index: 6 },
];

export const reviews = [
  {
    name: "Priyanka Mohanty",
    text: "Professional doctors, quick medicine availability and very friendly staff. My family's go-to pharmacy in Phulnakhara.",
  },
  {
    name: "Ranjan Behera",
    text: "Excellent consultation with the cardiologist. All prescribed medicines were available right at the counter downstairs.",
  },
  {
    name: "Suchitra Sahu",
    text: "Genuine medicines and honest pricing. The staff explained every dosage patiently — rare to find these days.",
  },
  {
    name: "Amit Patra",
    text: "Clean, modern and well-organized. Consulted a specialist in the evening and got everything under one roof.",
  },
];