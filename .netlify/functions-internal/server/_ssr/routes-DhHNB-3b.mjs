import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { A as Bone, C as FileHeart, D as Clock, E as Droplet, M as Baby, N as Activity, O as CircleCheck, S as FlaskConical, T as Droplets, _ as MessageCircleHeart, a as Stethoscope, b as IndianRupee, c as ShoppingBag, d as Ribbon, f as Radiation, g as MessageCircle, h as Navigation, i as UserRound, j as BadgeCheck, k as Brain, l as ShieldCheck, m as Phone, n as Wind, o as Star, p as Pill, r as Users, s as Sparkles, t as Zap, u as Scissors, v as MapPin, w as Ear, x as HeartPulse, y as Leaf } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DhHNB-3b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var doctor_male_1_default = "/assets/doctor-male-1-BH9ni3ji.jpg";
var doctor_male_2_default = "/assets/doctor-male-2-KQpk0QMK.jpg";
var doctor_male_3_default = "/assets/doctor-male-3-YPHFhH0r.jpg";
var doctor_female_1_default = "/assets/doctor-female-1-CoIGRRny.jpg";
var BRAND = {
	name: "D P PHARMA",
	tagline: "Your Trusted Pharmacy & Multispeciality Clinic",
	phones: [
		"7894558338",
		"7978243634",
		"7008661729"
	],
	whatsapp: "917894558338",
	address: {
		line1: "Ground Floor, Big Cup Cafe Campus",
		line2: "Phulnakhara, Near IMS & SUM Hospital-II",
		line3: "Pahal, Bhubaneswar, Odisha 751032",
		city: "Bhubaneswar",
		state: "Odisha"
	},
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=SUM+Hospital+Campus+2+Phulnakhara+Bhubaneswar",
	mapsEmbed: "https://www.google.com/maps?q=SUM+Hospital+Campus+2+Phulnakhara+Bhubaneswar&output=embed",
	rating: 4.58
};
var A = {
	m1: doctor_male_1_default,
	m2: doctor_male_2_default,
	m3: doctor_male_3_default,
	f1: doctor_female_1_default
};
var doctors = [
	{
		name: "Dr. Sankarshan Das",
		department: "Medicine",
		avatar: A.m2
	},
	{
		name: "Dr. Aditya Naraya Sahu",
		department: "Medicine",
		avatar: A.m1
	},
	{
		name: "Dr. Abhijeet Mohapatra",
		department: "OBS & Gynaecology",
		avatar: A.m1
	},
	{
		name: "Dr. Deepika Dash",
		department: "OBS & Gynaecology",
		avatar: A.f1
	},
	{
		name: "Dr. Sampad Dash",
		department: "Pulmonary Medicine",
		avatar: A.m3
	},
	{
		name: "Dr. Sudhanshu Sekhara Das",
		department: "Pediatric",
		avatar: A.m2
	},
	{
		name: "Dr. Kallolinee Samal",
		department: "Skin & VD",
		avatar: A.f1
	},
	{
		name: "Dr. Sabyasachi Pattanayak",
		department: "Neurology",
		avatar: A.m2
	},
	{
		name: "Dr. Abhinash Swain",
		department: "Neurology",
		avatar: A.m3
	},
	{
		name: "Dr. Satya Sarathi Jena",
		department: "Cardiology",
		avatar: A.m1
	},
	{
		name: "Dr. Pranabananda Sahoo",
		department: "Cardiology",
		avatar: A.m2
	},
	{
		name: "Dr. Bibhutibhushan Das",
		department: "Neuro Surgery",
		avatar: A.m2
	},
	{
		name: "Dr. Soumya Ranjan Mishra",
		department: "Radi-Oncology",
		avatar: A.m3
	},
	{
		name: "Dr. Jagamohan Mishra",
		department: "Urology",
		avatar: A.m1
	},
	{
		name: "Dr. Vivekananda Acharya",
		department: "ENT",
		avatar: A.m1
	},
	{
		name: "Dr. Prabir Majhi",
		department: "Gastro Medicine",
		avatar: A.m3
	},
	{
		name: "Dr. Nihar Ranjan Mishra",
		department: "Orthopedic",
		avatar: A.m3
	},
	{
		name: "Dr. Sai Prasad Ray",
		department: "Psychiatry",
		avatar: A.m2
	},
	{
		name: "Dr. Sandeep Ku Sahu",
		department: "Endocrinologist",
		avatar: A.m1
	},
	{
		name: "Dr. Siddhartha Goutam",
		department: "Geriatric Medicine",
		avatar: A.m2
	}
];
var openingHours = [
	{
		day: "Sunday",
		hours: "8:00 AM – 10:30 PM",
		index: 0
	},
	{
		day: "Monday",
		hours: "8:00 AM – 11:00 PM",
		index: 1
	},
	{
		day: "Tuesday",
		hours: "8:00 AM – 11:00 PM",
		index: 2
	},
	{
		day: "Wednesday",
		hours: "8:00 AM – 11:00 PM",
		index: 3
	},
	{
		day: "Thursday",
		hours: "8:00 AM – 11:00 PM",
		index: 4
	},
	{
		day: "Friday",
		hours: "8:00 AM – 11:00 PM",
		index: 5
	},
	{
		day: "Saturday",
		hours: "8:00 AM – 10:00 PM",
		index: 6
	}
];
var reviews = [
	{
		name: "Priyanka Mohanty",
		text: "Professional doctors, quick medicine availability and very friendly staff. My family's go-to pharmacy in Phulnakhara."
	},
	{
		name: "Ranjan Behera",
		text: "Excellent consultation with the cardiologist. All prescribed medicines were available right at the counter downstairs."
	},
	{
		name: "Suchitra Sahu",
		text: "Genuine medicines and honest pricing. The staff explained every dosage patiently — rare to find these days."
	},
	{
		name: "Amit Patra",
		text: "Clean, modern and well-organized. Consulted a specialist in the evening and got everything under one roof."
	}
];
var links = [
	{
		href: "#pharmacy",
		label: "Pharmacy"
	},
	{
		href: "#clinic",
		label: "Clinic"
	},
	{
		href: "#doctors",
		label: "Specialists"
	},
	{
		href: "#location",
		label: "Location"
	}
];
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
		initial: {
			y: -24,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .5,
			ease: "easeOut"
		},
		className: "fixed top-0 inset-x-0 z-50 glass-card border-b border-white/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 h-16 md:h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-9 rounded-xl bg-brand text-white grid place-items-center font-display font-extrabold shadow-md shadow-brand/30",
						children: "DP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-extrabold tracking-tight text-brand-secondary hidden sm:block",
						children: "PHARMA"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "hover:text-brand transition-colors",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:+91${BRAND.phones[0]}`,
					className: "inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-brand-secondary text-white text-xs md:text-sm font-bold shadow-lg shadow-brand-secondary/25 hover:scale-[1.03] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Call Now"
					})]
				})
			]
		})
	});
}
var hero_pharmacy_default = "/assets/hero-pharmacy-BeMMcUc5.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] right-[-8%] size-[520px] rounded-full bg-brand/20 blur-3xl blob-anim" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-20%] left-[-10%] size-[420px] rounded-full bg-brand-secondary/15 blur-3xl blob-anim [animation-delay:-6s]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPill, { className: "absolute top-40 left-[6%] rotate-[-18deg] text-brand [animation-delay:-2s]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPill, { className: "absolute top-[55%] left-[3%] rotate-12 text-brand-secondary [animation-delay:-4s]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPill, { className: "absolute top-24 right-[42%] rotate-[24deg] text-brand hidden md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .5 },
							className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 text-brand text-[11px] font-bold uppercase tracking-widest mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brand animate-pulse" }), "SUM Hospital Campus-II, Bhubaneswar"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .05
							},
							className: "font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-slate-900",
							children: [
								"Integrated",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-brand to-brand-secondary bg-clip-text text-transparent",
									children: "Pharmacy"
								}),
								" ",
								"& Multispeciality Clinic"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .15
							},
							className: "mt-6 text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed",
							children: [
								"Serving the community with quality medicines and expert medical consultations under one roof. ",
								BRAND.tagline,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .25
							},
							className: "mt-10 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#pharmacy",
									className: "inline-flex items-center gap-2 px-6 md:px-7 py-3.5 rounded-2xl bg-brand text-white font-bold shadow-xl shadow-brand/30 hover:scale-[1.03] transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { className: "size-4" }), " Visit Pharmacy"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#doctors",
									className: "inline-flex items-center gap-2 px-6 md:px-7 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold shadow-sm hover:bg-slate-50 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "size-4" }), " View Specialists"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:+91${BRAND.phones[0]}`,
									className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl glass-card font-bold text-slate-700 hover:bg-white transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Call Now"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: BRAND.mapsUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl glass-card font-bold text-slate-700 hover:bg-white transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), " Directions"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .8,
								delay: .5
							},
							className: "mt-10 max-w-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 400 60",
								className: "w-full h-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M0 30 L80 30 L100 30 L110 10 L125 50 L140 20 L155 40 L170 30 L400 30",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									className: "text-brand heartbeat-anim"
								})
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .96
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .8,
							delay: .1
						},
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-secondary/20 ring-1 ring-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_pharmacy_default,
									alt: "Modern D P Pharma interior at SUM Hospital Campus-II",
									width: 1200,
									height: 1400,
									className: "w-full h-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-secondary/30 via-transparent to-transparent" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .5
								},
								className: "absolute -bottom-6 -left-4 md:-left-8 glass-card p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-[280px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-11 rounded-full bg-brand/15 grid place-items-center text-brand shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display font-extrabold text-slate-900",
										children: "100% Genuine"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-500 truncate",
										children: "Certified medical supply"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: -20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .6
								},
								className: "absolute -top-4 -right-2 md:-right-6 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-brand-secondary font-display font-extrabold text-2xl leading-none",
									children: BRAND.rating
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] font-semibold text-slate-500 leading-tight",
									children: [
										"Google",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"★★★★★"
									]
								})]
							})
						]
					})]
				})
			})
		]
	});
}
function FloatingPill({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `float-anim opacity-70 ${className}`,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "64",
			height: "24",
			viewBox: "0 0 64 24",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "1",
					y: "1",
					width: "62",
					height: "22",
					rx: "11",
					fill: "currentColor",
					opacity: "0.15"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "1",
					y: "1",
					width: "31",
					height: "22",
					rx: "11",
					fill: "currentColor",
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "1",
					y: "1",
					width: "62",
					height: "22",
					rx: "11",
					stroke: "currentColor",
					strokeOpacity: "0.4"
				})
			]
		})
	});
}
function useCountUp(target, durationMs = 1600) {
	const [value, setValue] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting && !started.current) {
				started.current = true;
				const start = performance.now();
				const tick = (now) => {
					const t = Math.min(1, (now - start) / durationMs);
					const eased = 1 - Math.pow(1 - t, 3);
					setValue(Math.round(target * eased));
					if (t < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		}, { threshold: .35 });
		io.observe(el);
		return () => io.disconnect();
	}, [target, durationMs]);
	return {
		value,
		ref
	};
}
var stats = [
	{
		value: 15,
		suffix: "+",
		label: "Years of Service"
	},
	{
		value: 1e4,
		suffix: "+",
		label: "Genuine Medicines",
		format: (v) => `${(v / 1e3).toFixed(0)}k`
	},
	{
		value: 22,
		suffix: "+",
		label: "Expert Specialists"
	},
	{
		value: 5e4,
		suffix: "+",
		label: "Patients Served",
		format: (v) => `${(v / 1e3).toFixed(0)}k`
	}
];
function Counters() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-14 md:py-20 border-y border-slate-100 bg-brand-tint/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, { ...s }, s.label))
		})
	});
}
function Stat({ value, suffix, label, format }) {
	const { value: v, ref } = useCountUp(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-display font-extrabold text-4xl md:text-5xl bg-gradient-to-b from-brand-secondary to-brand bg-clip-text text-transparent",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref,
				children: format ? format(v) : v.toLocaleString("en-IN")
			}), suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500",
			children: label
		})]
	});
}
var about_shelves_default = "/assets/about-shelves-CxB2SmNT.jpg";
var points = [
	"Certified genuine medicines",
	"Board-certified specialist doctors",
	"Patient-first approach across every visit",
	"Convenient location near SUM Campus-II"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -24
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_shelves_default,
					loading: "lazy",
					width: 1200,
					height: 900,
					alt: "Neatly organized pharmacy shelves at D P Pharma",
					className: "w-full rounded-[2rem] shadow-xl shadow-slate-900/5 ring-1 ring-black/5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl shadow-xl max-w-[220px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-brand mb-1",
						children: "Since day one"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-slate-600 leading-relaxed",
						children: "Making healthcare accessible, affordable and trustworthy for every family."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 24
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-[0.25em] text-brand",
						children: "About D P Pharma"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900 leading-[1.05]",
						children: "Comprehensive care under one roof."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-slate-500 text-lg leading-relaxed max-w-xl",
						children: "We provide quality medicines, healthcare essentials and specialist consultations in one convenient location. Our mission is to make healthcare simple, honest and close to home for the families of Phulnakhara and Bhubaneswar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-slate-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-brand shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: p
							})]
						}, p))
					})
				]
			})]
		})
	});
}
var reasons = [
	{
		icon: BadgeCheck,
		title: "Genuine Medicines",
		text: "Sourced only from licensed distributors."
	},
	{
		icon: Stethoscope,
		title: "Experienced Doctors",
		text: "Consultants across 14+ specialties."
	},
	{
		icon: IndianRupee,
		title: "Affordable Care",
		text: "Honest pricing, no hidden charges."
	},
	{
		icon: MapPin,
		title: "Convenient Location",
		text: "Inside SUM Campus-II, Phulnakhara."
	},
	{
		icon: Users,
		title: "Friendly Staff",
		text: "Warm, patient, and attentive team."
	},
	{
		icon: Zap,
		title: "Fast Service",
		text: "Quick counters and short waiting times."
	},
	{
		icon: FileHeart,
		title: "Prescription Support",
		text: "Guidance on dosage and refills."
	},
	{
		icon: MessageCircleHeart,
		title: "Health Consultation",
		text: "Talk to our in-house pharmacist."
	}
];
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28 bg-brand-tint/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Why choose us",
				title: "Care you can feel the moment you walk in."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
				children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .5,
						delay: i * .05
					},
					className: "group relative bg-white p-6 rounded-3xl border border-slate-100 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-12 rounded-2xl bg-brand/10 grid place-items-center text-brand mb-5 group-hover:scale-110 transition-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-bold text-lg text-slate-900",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-slate-500 leading-relaxed",
							children: r.text
						})
					]
				}, r.title))
			})]
		})
	});
}
function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-bold uppercase tracking-[0.25em] text-brand",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900 leading-[1.05]",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-slate-500 text-lg leading-relaxed",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-brand to-brand-secondary ${align === "center" ? "mx-auto" : ""}` })
		]
	});
}
var services = [
	{
		icon: Pill,
		label: "Prescription Medicines"
	},
	{
		icon: ShoppingBag,
		label: "OTC Medicines"
	},
	{
		icon: Leaf,
		label: "Health Supplements"
	},
	{
		icon: Baby,
		label: "Baby Care"
	},
	{
		icon: Sparkles,
		label: "Personal Care"
	},
	{
		icon: Droplet,
		label: "Diabetic Care"
	},
	{
		icon: Scissors,
		label: "Surgical Items"
	},
	{
		icon: Activity,
		label: "Medical Equipment"
	},
	{
		icon: HeartPulse,
		label: "Health Essentials"
	}
];
function PharmacyServices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pharmacy",
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Pharmacy",
				title: "Every medicine you need, always in stock.",
				subtitle: "A full-service retail pharmacy stocking prescription drugs, wellness essentials and specialist supplies."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 md:grid-cols-3 gap-5",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .96
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .45,
						delay: i * .04
					},
					className: "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-brand-tint/60 p-8 border border-slate-100 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -right-16 size-40 rounded-full bg-brand/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative size-14 rounded-2xl bg-white grid place-items-center text-brand shadow-md shadow-brand/10 mb-5 group-hover:scale-110 transition-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "relative font-display font-bold text-lg text-slate-900",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mt-1 text-sm text-slate-500",
							children: "Available at the counter"
						})
					]
				}, s.label))
			})]
		})
	});
}
var specialties = [
	{
		icon: Stethoscope,
		name: "General Consultation"
	},
	{
		icon: Ribbon,
		name: "Women's Health"
	},
	{
		icon: Baby,
		name: "Child Care"
	},
	{
		icon: Brain,
		name: "Neurology"
	},
	{
		icon: Sparkles,
		name: "Skin Care"
	},
	{
		icon: HeartPulse,
		name: "Cardiology"
	},
	{
		icon: Ear,
		name: "ENT"
	},
	{
		icon: Bone,
		name: "Orthopaedics"
	},
	{
		icon: UserRound,
		name: "Geriatrics"
	},
	{
		icon: Droplets,
		name: "Urology"
	},
	{
		icon: Activity,
		name: "Psychiatry"
	},
	{
		icon: FlaskConical,
		name: "Nephrology"
	},
	{
		icon: Wind,
		name: "Endocrinology"
	},
	{
		icon: Radiation,
		name: "Radiology"
	}
];
function ClinicServices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "clinic",
		className: "py-20 md:py-28 bg-brand-tint/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Clinic",
				title: "14 specialties. One trusted address.",
				subtitle: "Consult experienced consultants at D P Pharma's integrated multispeciality clinic."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
				children: specialties.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .4,
						delay: i * .03
					},
					className: "group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-slate-200 via-slate-200 to-slate-200 hover:from-brand hover:via-brand-secondary hover:to-brand transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full bg-white rounded-[calc(1.5rem-1.5px)] p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-11 rounded-xl bg-brand/10 grid place-items-center text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-base text-slate-900",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-500 leading-relaxed",
								children: "Consultation available by walk-in or appointment."
							})
						]
					})
				}, s.name))
			})]
		})
	});
}
function Doctors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "doctors",
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Specialists",
				title: "Meet our board of doctors.",
				subtitle: "Renowned consultants across 14+ departments — all under one roof at D P Pharma."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
				children: doctors.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .5,
						delay: i % 8 * .04
					},
					className: "group relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-brand/40 via-brand-secondary/40 to-brand/40 opacity-0 blur-xl group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand/40 shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all group-hover:-translate-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square overflow-hidden bg-slate-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.avatar,
								loading: "lazy",
								width: 512,
								height: 512,
								alt: `${d.name} — ${d.department}`,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block px-2.5 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest mb-2",
									children: d.department
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-extrabold text-slate-900 leading-tight text-[15px]",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-slate-500",
									children: "Consultant Specialist"
								})
							]
						})]
					})]
				}, d.name + i))
			})]
		})
	});
}
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5e3);
		return () => clearInterval(t);
	}, []);
	const r = reviews[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28 bg-brand-tint/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Testimonials",
				title: "Loved by families across Phulnakhara."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-[2.5rem] p-8 md:p-12 shadow-xl min-h-[280px] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 text-amber-400",
							children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5 fill-current" }, k))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-extrabold text-2xl text-slate-900",
								children: BRAND.rating
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-slate-500 ml-2",
								children: "Google Rating"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -16
							},
							transition: { duration: .4 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-2xl md:text-3xl text-slate-800 leading-snug",
								children: [
									"“",
									r.text,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-sm font-bold text-slate-600",
								children: ["— ", r.name]
							})]
						}, i)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: reviews.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": `Show review ${k + 1}`,
						onClick: () => setI(k),
						className: `h-2 rounded-full transition-all ${k === i ? "w-8 bg-brand" : "w-2 bg-slate-300"}`
					}, k))
				})]
			})]
		})
	});
}
function LocationHours() {
	const today = (/* @__PURE__ */ new Date()).getDay();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "location",
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Visit us",
				title: "Located near SUM Hospital Campus-II."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid lg:grid-cols-5 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .6 },
					className: "lg:col-span-3 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "D P Pharma location map",
						src: BRAND.mapsEmbed,
						className: "w-full h-[420px] lg:h-full min-h-[420px]",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .05
						},
						className: "relative overflow-hidden rounded-3xl bg-brand-secondary text-white p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 shimmer-anim" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-10 rounded-xl bg-white/15 grid place-items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-widest text-white/70",
										children: "Address"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-bold text-xl leading-snug",
									children: BRAND.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-white/85 text-sm leading-relaxed",
									children: [
										BRAND.address.line1,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										BRAND.address.line2,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										BRAND.address.line3,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										BRAND.address.city,
										", ",
										BRAND.address.state
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: BRAND.mapsUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-brand-secondary text-sm font-bold hover:scale-[1.03] transition-transform",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }), " Google Maps"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:+91${BRAND.phones[0]}`,
										className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand text-white text-sm font-bold hover:scale-[1.03] transition-transform",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Call Now"]
									})]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .1
						},
						className: "rounded-3xl bg-white border border-slate-100 shadow-sm p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-10 rounded-xl bg-brand/10 grid place-items-center text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-widest text-slate-500",
								children: "Opening Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-brand font-semibold flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brand animate-pulse" }), "Open today"]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5",
							children: openingHours.map((row) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: `flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${row.index === today ? "bg-brand/10 text-brand-secondary font-bold" : "text-slate-600"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs md:text-sm",
										children: row.hours
									})]
								}, row.day);
							})
						})]
					})]
				})]
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-20 md:py-28 bg-brand-tint/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .97
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand text-white p-10 md:p-16 shadow-2xl shadow-brand-secondary/25",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-3xl blob-anim" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 size-80 rounded-full bg-brand/30 blur-3xl blob-anim [animation-delay:-8s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-[0.25em] text-white/70",
								children: "Get in touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display font-extrabold text-4xl md:text-5xl leading-[1.05]",
								children: "We're here whenever you need us."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-white/80 max-w-xl",
								children: "Call, WhatsApp or visit us directly at D P Pharma near SUM Hospital Campus-II, Phulnakhara."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid sm:grid-cols-3 gap-3",
								children: BRAND.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:+91${p}`,
									className: "glass-card !bg-white/15 !border-white/25 rounded-2xl p-4 flex items-center gap-3 hover:!bg-white/25 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-10 rounded-xl bg-white/20 grid place-items-center shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-widest text-white/70",
											children: "Call"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-display font-bold text-lg tracking-tight",
											children: ["+91 ", p]
										})]
									})]
								}, p))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${BRAND.whatsapp}`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-brand-secondary font-bold hover:scale-[1.03] transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " WhatsApp Us"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: BRAND.mapsUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand text-white font-bold hover:scale-[1.03] transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }), " Get Directions"]
								})]
							})
						]
					})
				]
			})
		})
	});
}
var quickLinks = [
	{
		href: "#pharmacy",
		label: "Pharmacy"
	},
	{
		href: "#clinic",
		label: "Clinic Services"
	},
	{
		href: "#doctors",
		label: "Specialists"
	},
	{
		href: "#location",
		label: "Location"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "pt-16 pb-10 border-t border-slate-100 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-4 gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-9 rounded-xl bg-brand text-white grid place-items-center font-display font-extrabold shadow-md shadow-brand/30",
									children: "DP"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-extrabold tracking-tight text-brand-secondary",
									children: BRAND.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-slate-500 leading-relaxed max-w-sm",
								children: [BRAND.tagline, ". Integrated pharmacy and multispeciality clinic serving Phulnakhara and Bhubaneswar."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-current" }),
									" ",
									BRAND.rating,
									" Google Rating"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-slate-500 mb-4",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: quickLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-slate-700 hover:text-brand transition-colors",
							children: l.label
						}) }, l.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-slate-500 mb-4",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-slate-700",
						children: [BRAND.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:+91${p}`,
							className: "hover:text-brand transition-colors",
							children: ["+91 ", p]
						}) }, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-slate-500 pt-2 leading-relaxed",
							children: [
								BRAND.address.line1,
								", ",
								BRAND.address.line3,
								", ",
								BRAND.address.city,
								",",
								" ",
								BRAND.address.state
							]
						})]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BRAND.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Designed with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://squbix.com/",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "hover:text-brand transition-colors underline",
					children: "Squbix Digital Pvt. Ltd."
				})] })]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-slate-900 overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counters, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PharmacyServices, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicServices, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Doctors, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationHours, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
