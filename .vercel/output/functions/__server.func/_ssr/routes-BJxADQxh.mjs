import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Button, r as cn, t as AppChrome } from "./button-n7uHKoIs.mjs";
import { a as ChevronLeft, i as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as CartesianGrid, c as Legend, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BJxADQxh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var trajectory = [
	{
		h: 0,
		normal: 1,
		arrest: 1
	},
	{
		h: 12,
		normal: .94,
		arrest: .95
	},
	{
		h: 24,
		normal: .86,
		arrest: .88
	},
	{
		h: 36,
		normal: .74,
		arrest: .82
	},
	{
		h: 48,
		normal: .62,
		arrest: .81
	},
	{
		h: 72,
		normal: .48,
		arrest: .83
	},
	{
		h: 96,
		normal: .36,
		arrest: .86
	},
	{
		h: 120,
		normal: .28,
		arrest: .88
	}
];
function TrajectoryChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full sm:h-64",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: trajectory,
				margin: {
					top: 8,
					right: 8,
					left: -12,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "rgba(255,255,255,0.06)",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "h",
						tick: {
							fill: "#8b9bb0",
							fontSize: 11
						},
						axisLine: false,
						tickLine: false,
						unit: "h"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: {
							fill: "#8b9bb0",
							fontSize: 11
						},
						axisLine: false,
						tickLine: false,
						domain: [.2, 1.05]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: {
							background: "#121a28",
							border: "1px solid #243044",
							borderRadius: 8,
							color: "#e8eef4",
							fontSize: 12
						},
						labelFormatter: (v) => `${v} hours`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
						fontSize: 12,
						color: "#8b9bb0"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "normal",
						name: "Healthy ΔRe(Z) @ 1.49 MHz",
						stroke: "#2ee6c5",
						strokeWidth: 2.4,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "arrest",
						name: "Arrested trajectory",
						stroke: "#e05a6a",
						strokeWidth: 2.4,
						strokeDasharray: "5 4",
						dot: false
					})
				]
			})
		})
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-[11px] font-medium tracking-[0.22em] text-primary uppercase",
		children
	});
}
function Card({ label, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col gap-2 rounded-lg bg-panel p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium tracking-[0.2em] text-gold uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-sans text-base font-semibold text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: body
			})
		]
	});
}
function CoverSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative isolate flex min-h-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-well.jpg",
				alt: "Opposed Möbius resonators around an embryo culture well",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-bg via-bg/80 to-bg/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex w-full max-w-xl flex-col justify-end gap-5 p-6 sm:justify-center sm:p-10 lg:p-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Research & partnership deck" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl leading-[1.05] text-fg italic sm:text-6xl",
						children: "Adaptive Bio-Resonance Platform"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-base leading-relaxed text-muted sm:text-lg",
						children: "Non-invasive developmental metrology built from computationally manufactured resonators, multimodal sensing, and temporal AI."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg/80",
						children: "ScanIQ LLC · September 2026"
					})
				]
			})
		]
	});
}
function ChallengeSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-6 p-5 sm:p-8 lg:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The gap" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-fg italic sm:text-4xl",
				children: "Embryo assessment still sees only part of the biology"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "01",
						title: "Image-led",
						body: "Time-lapse systems infer competence from appearance and division timing. Failure is often visible only after arrest is underway."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "02",
						title: "Sparse signal",
						body: "Metabolic and genetic assays add information, but they are episodic, invasive, or expensive — including trophectoderm biopsy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "03",
						title: "Missing layer",
						body: "Continuous physical-property sensing could reveal dielectric and mechanical deviation before morphology becomes obvious."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-auto rounded-md bg-surface px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2 text-primary",
					children: "Opportunity"
				}), "Add a passive, continuous electromechanical phenotype to the embryo-development record."]
			})
		]
	});
}
function AnchorsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-6 p-5 sm:p-8 lg:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Empirical foundation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-fg italic sm:text-4xl",
				children: "Validated anchors, not a magic frequency"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					{
						value: "1.49 MHz",
						label: "Bovine embryo EIS anchor"
					},
					{
						value: "13 stages",
						label: "Medaka stages modeled"
					},
					{
						value: "0.92 AUC",
						label: "Metabolic + morphology target"
					},
					{
						value: "≈510 MPa",
						label: "Fused silk flexural strength"
					}
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-panel px-4 py-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-gold italic sm:text-3xl",
						children: m.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: m.label
					})]
				}, m.value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 text-sm leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rounded-md bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 font-medium text-primary",
							children: "Embryo impedance"
						}), "Differential spectra change with cell mass, viability and development (Uzzaman et al., IEEE EMBC 2024)."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rounded-md bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 font-medium text-primary",
							children: "AI morphokinetics"
						}), "Time-lapse models provide independent stage and outcome labels. Fusion, not replacement."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rounded-md bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 font-medium text-primary",
							children: "Chiral materials"
						}), "Kotov fused silk and asymmetric microstructures rotate THz polarization — a real materials stack."]
					})
				]
			})
		]
	});
}
function ArchitectureSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-6 p-5 sm:p-8 lg:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Closed loop" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-fg italic sm:text-4xl",
				children: "Design, make, measure, learn"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-3 sm:grid-cols-5",
				children: [
					{
						n: "1",
						t: "SDF + material field",
						d: "Geometry, density, fiber direction and chirality as one object."
					},
					{
						n: "2",
						t: "Field-oriented printing",
						d: "Aperture deposition with roto-field alignment and UV cure."
					},
					{
						n: "3",
						t: "Differential sensing",
						d: "Impedance, resonance, phase, Q and near-field channels."
					},
					{
						n: "4",
						t: "Temporal AI",
						d: "Stage estimate, trajectory deviation, arrest risk, uncertainty."
					},
					{
						n: "5",
						t: "Measured redesign",
						d: "Update local material orientation toward the target transfer function."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-panel p-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-gold italic",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-sm font-semibold text-fg",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted",
							children: s.d
						})
					]
				}, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-auto text-base text-fg",
				children: "Design intent: maximize developmental-state information per unit exposure — not Q alone."
			})
		]
	});
}
function MobiusSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/mobius.jpg",
			alt: "Hierarchical silk Möbius resonator",
			className: "h-48 w-full object-cover lg:h-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-5 p-5 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Topology" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg italic",
					children: "The Möbius advantage"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "A 180° twist imposes a Pancharatnam–Berry phase of π. Clockwise and counter-clockwise modes split. Fractional half-integer resonances become chirality-selective sensors."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-primary",
							children: "Macro"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted",
							children: "Twist, width, thickness, coupling gap"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-primary",
							children: "Meso"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted",
							children: "Fiber direction, porosity, conductive traces"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-primary",
							children: "Micro"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted",
							children: "Chiral domains, crystalline order, additives"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-auto text-sm text-fg",
					children: "Output: a target electromagnetic transfer function."
				})
			]
		})]
	});
}
function PrintheadSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/printhead.jpg",
			alt: "Field-oriented aperture printhead",
			className: "h-48 w-full object-cover lg:h-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-5 p-5 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Fabrication" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg italic",
					children: "Aperture printhead + roto-field"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "ScanIQ does not just print a shape. The SDF says where the object exists; the material field says what the material is doing at that location. The printer outputs electromagnetic architecture."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: [
						{
							k: "A",
							t: "Feedstock",
							d: "Silk/ANF photocurable composite with alignable fibers."
						},
						{
							k: "B",
							t: "Roto-field zone",
							d: "Programmed electric or magnetic field follows the voxel vector."
						},
						{
							k: "C",
							t: "Fixation",
							d: "Optical cure locks anisotropy before Brownian relaxation."
						}
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-panel p-4 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-[0.18em] text-gold uppercase",
							children: [
								i.k,
								" · ",
								i.t
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: i.d
						})]
					}, i.k))
				})
			]
		})]
	});
}
function CassetteSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/cassette.jpg",
			alt: "Opposed resonator microfluidic cassette with NV diamond",
			className: "h-48 w-full object-cover lg:h-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 overflow-y-auto p-5 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Sensing kernel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg italic",
					children: "Evanescent, not through-water"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "THz interrogates the resonator through near-field or evanescent coupling. We avoid high-loss bulk transmission through culture medium. The embryo perturbs the instrument’s song."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2",
					children: [
						{
							t: "RF / impedance",
							d: "Δf, ΔQ, S11, phase, complex Z — including the 1.49 MHz cell-mass marker."
						},
						{
							t: "Optical",
							d: "Morphology, cleavage timing, motion as independent labels."
						},
						{
							t: "Environmental reference",
							d: "Temperature, vibration, geomagnetic and laboratory EMI."
						},
						{
							t: "Optional quantum channel",
							d: "Near-field NV diamond at realistic stand-off, not long-range MAD."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-panel p-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted",
							children: c.d
						})]
					}, c.t))
				})
			]
		})]
	});
}
function AISlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full overflow-y-auto lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 p-5 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Digital phenotype" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg italic",
					children: "A trajectory, not a score"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "Model input: Z(f,t) · fᵣ(t) · Q(t) · phase · image sequence · environment · optional metabolism. Output: stage probability · trajectory deviation · arrest risk · confidence."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrajectoryChart, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Illustrative 1.49 MHz ΔRe(Z) path. Arrested embryos leave the healthy manifold hours before optical fragmentation. Training uses blinded outcomes; discovery models stay separate from clinical claims."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative min-h-48",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/trajectory.jpg",
				alt: "Healthy versus arrested developmental trajectory in spectral space",
				className: "absolute inset-0 h-full w-full object-cover"
			})
		})]
	});
}
function RoadmapSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-5 p-5 sm:p-8 lg:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Validation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl text-fg italic",
			children: "Measure first. Stimulate never — until later."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-2",
			children: [
				{
					n: "01",
					t: "Bench phantom",
					d: "Can the resonator resolve controlled dielectric and geometric perturbations?"
				},
				{
					n: "02",
					t: "Non-living models",
					d: "Do microspheres, cells and organoids produce repeatable spectral signatures?"
				},
				{
					n: "03",
					t: "Animal embryos",
					d: "Do spectra track stage, viability and arrest under blinded conditions?"
				},
				{
					n: "04",
					t: "Multimodal model",
					d: "Does fusion outperform imaging alone on held-out sites?"
				},
				{
					n: "05",
					t: "Regulated translation",
					d: "Can the system meet safety, reproducibility and clinical-study requirements?"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[auto_1fr] gap-4 rounded-md bg-panel px-4 py-3 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-gold",
					children: s.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-fg",
					children: s.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: s.d
				})] })]
			}, s.n))
		})]
	});
}
function IPSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-5 p-5 sm:p-8 lg:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Intellectual property" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-fg italic",
				children: "The strongest IP sits in the closed loop"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Individual components have prior art. The defensible claim strategy connects how the device is designed, made, measured and updated."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						t: "Fabrication",
						d: "SDF plus spatial material field controls local anisotropy and chirality."
					},
					{
						t: "Resonator",
						d: "Topologically chiral hierarchical composite positioned near a biological sample."
					},
					{
						t: "Measurement",
						d: "Differential, broadband, time-resolved perturbation of the resonator-sample system."
					},
					{
						t: "Learning",
						d: "Temporal multimodal model maps spectra to developmental-state trajectories."
					},
					{
						t: "Redesign",
						d: "Measured response updates the material field until the target transfer function is reached."
					}
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg bg-panel p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold tracking-[0.12em] text-primary uppercase",
						children: p.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: p.d
					})]
				}, p.t))
			})
		]
	});
}
function MarketSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-5 p-5 sm:p-8 lg:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Commercial architecture" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-fg italic",
				children: "Razor, blade, and the digital phenotype"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					{
						t: "TAM",
						d: "Global IVF/ART heading toward tens of billions, with millions of cycles each year."
					},
					{
						t: "Hardware",
						d: "Incubation chamber + optical/quantum transceiver as clinic capital equipment."
					},
					{
						t: "Consumables",
						d: "Single-use printed microfluidic cassettes with integrated topological resonators."
					},
					{
						t: "SaaS",
						d: "Trajectory reporting and viability scoring per analyzed embryo cycle."
					}
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg bg-panel p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-gold",
						children: i.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: i.d
					})]
				}, i.t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Clinical value: even a modest lift in first-cycle live-birth rate avoids a full repeat IVF cycle for intended parents. The resonator platform can also be developed independently of reproductive applications, reducing technical and regulatory coupling."
			})
		]
	});
}
function AskSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-5 p-5 sm:p-8 lg:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "12-week feasibility sprint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-fg italic",
				children: "Does a manufactured chiral resonator add signal?"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Test whether a printed Möbius resonator outperforms standard impedance electrodes — before any claim about stimulation or clinical selection."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					{
						t: "Materials",
						d: "Silk/polymer formulation and microstructure characterization."
					},
					{
						t: "Fabrication",
						d: "Field-assisted printhead, coupon library and metrology."
					},
					{
						t: "Biology",
						d: "Embryology partner, model selection and blinded endpoints."
					},
					{
						t: "RF / data",
						d: "VNA/impedance acquisition, controls and temporal modeling."
					}
				].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg bg-panel p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-primary",
						children: w.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: w.d
					})]
				}, w.t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-auto rounded-md bg-surface px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2 text-gold",
					children: "Partnership ask"
				}), "University lab + embryology collaborator + RF/materials fabrication support."]
			})
		]
	});
}
function CloseSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative isolate flex h-full items-end overflow-hidden sm:items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-well.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "relative z-10 max-w-3xl p-6 sm:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl leading-snug text-fg italic sm:text-5xl",
					children: "Don’t search for the frequency that makes an embryo grow. Build an instrument that learns the changing electromechanical fingerprint of healthy development."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-6 text-sm tracking-[0.16em] text-primary uppercase",
					children: "ScanIQ LLC"
				})]
			})
		]
	});
}
var SLIDES = [
	{
		id: "cover",
		title: "Cover",
		node: CoverSlide
	},
	{
		id: "challenge",
		title: "The gap",
		node: ChallengeSlide
	},
	{
		id: "anchors",
		title: "Anchors",
		node: AnchorsSlide
	},
	{
		id: "loop",
		title: "Closed loop",
		node: ArchitectureSlide
	},
	{
		id: "mobius",
		title: "Möbius",
		node: MobiusSlide
	},
	{
		id: "print",
		title: "Printhead",
		node: PrintheadSlide
	},
	{
		id: "sense",
		title: "Cassette",
		node: CassetteSlide
	},
	{
		id: "ai",
		title: "Phenotype",
		node: AISlide
	},
	{
		id: "path",
		title: "Roadmap",
		node: RoadmapSlide
	},
	{
		id: "ip",
		title: "IP",
		node: IPSlide
	},
	{
		id: "market",
		title: "Market",
		node: MarketSlide
	},
	{
		id: "ask",
		title: "Sprint",
		node: AskSlide
	},
	{
		id: "close",
		title: "Close",
		node: CloseSlide
	}
];
function PitchDeck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const touchX = (0, import_react.useRef)(null);
	const last = SLIDES.length - 1;
	const go = (0, import_react.useCallback)((next) => {
		setIndex(Math.max(0, Math.min(last, next)));
	}, [last]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
				e.preventDefault();
				go(index + 1);
			} else if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				go(index - 1);
			} else if (e.key === "Home") go(0);
			else if (e.key === "End") go(last);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		index,
		last
	]);
	const Slide = SLIDES[index].node;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppChrome, { view: "deck" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1 overflow-hidden",
				onTouchStart: (e) => {
					touchX.current = e.changedTouches[0]?.clientX ?? null;
				},
				onTouchEnd: (e) => {
					if (touchX.current == null) return;
					const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
					touchX.current = null;
					if (dx < -48) go(index + 1);
					if (dx > 48) go(index - 1);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full animate-in fade-in duration-200",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {})
				}, SLIDES[index].id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "no-print flex items-center gap-2 border-t border-border bg-bg px-3 py-2 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Previous slide",
						onClick: () => go(index - 1),
						disabled: index === 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 flex-1 items-center justify-center gap-1.5 overflow-x-auto py-1",
						children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": `Go to ${s.title}`,
							"aria-current": i === index,
							onClick: () => go(i),
							className: cn("size-2.5 shrink-0 rounded-full transition-colors", i === index ? "bg-primary" : "bg-border hover:bg-muted")
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hidden tabular-nums text-xs text-muted sm:block",
						children: [
							String(index + 1).padStart(2, "0"),
							" / ",
							String(SLIDES.length).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Next slide",
						onClick: () => go(index + 1),
						disabled: index === last,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PitchDeck, {});
}
//#endregion
export { Home as component };
