import maleAvatar1 from "@/assets/doctor-male-1.jpg";
import maleAvatar2 from "@/assets/doctor-male-2.jpg";
import maleAvatar3 from "@/assets/doctor-male-3.jpg";
import femaleAvatar1 from "@/assets/doctor-female-1.jpg";

export const BRAND = {
  name: "D P PHARMA",
  tagline: "Your Trusted Pharmacy & Multispeciality Clinic",
  phones: ["7894558338", "7978243634", "7008611729"],
  whatsapp: "917894558338",
  address: {
    line1: "Ground Floor, Big Cup Cafe Campus",
    line2: "Hospital-2, Beside HDFC Bank",
    line3: "Near IMS & SUM, Phulnakhara",
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
  { name: "Dr. Aditya Narayan Sahu", department: "Medicine", avatar: A.m1 },
  { name: "Dr. Sampad Dash", department: "Medicine", avatar: A.m3 },
  { name: "Dr. Abhijit Bhuyanpatra", department: "OBS & Gynaecology", avatar: A.m1 },
  { name: "Dr. Deepika Dash", department: "OBS & Gynaecology", avatar: A.f1 },
  { name: "Dr. Susmita Sekhar Das", department: "Pediatrics", avatar: A.f1 },
  { name: "Dr. Kailounee Samal", department: "Skin & VD", avatar: A.f1 },
  { name: "Dr. Sabyasachi Pattnayak", department: "Neurology", avatar: A.m2 },
  { name: "Dr. Abhinash Swain", department: "Neurology", avatar: A.m3 },
  { name: "Dr. Satya Sarathi Jena", department: "Cardiology", avatar: A.m1 },
  { name: "Dr. Pranabananda Sahoo", department: "Cardiology", avatar: A.m2 },
  { name: "Dr. Debabrata Hussain Das", department: "Neuro Surgery", avatar: A.m2 },
  { name: "Dr. Jagmohan Mishra", department: "Urology", avatar: A.m1 },
  { name: "Dr. Prabir Majhi", department: "Gastro Medicine", avatar: A.m3 },
  { name: "Dr. Vivekananda Acharya", department: "ENT", avatar: A.m1 },
  { name: "Dr. Sai Prasad Ray", department: "Psychiatry", avatar: A.m2 },
  { name: "Dr. Nihar Ranjan Mishra", department: "Orthopedic", avatar: A.m3 },
  { name: "Dr. Siddhartha Gitum", department: "Geriatrics", avatar: A.m2 },
  { name: "Dr. Sandeep Kumar Sahu", department: "Endocrinology", avatar: A.m1 },
  { name: "Dr. Sudhanya Ranjan Mishra", department: "Radiology", avatar: A.m3 },
  { name: "Dr. Pulmonology Consultant", department: "Pulmonary Medicine", avatar: A.m2 },
  { name: "Dr. Nephrology Consultant", department: "Nephrology", avatar: A.m1 },
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