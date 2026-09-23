import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-n7uHKoIs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: "size-8 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 22c0-8 16-4 16-12",
					fill: "none",
					stroke: "currentColor",
					className: "text-primary",
					strokeWidth: "2.2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 10c0 8-16 4-16 12",
					fill: "none",
					stroke: "currentColor",
					className: "text-gold",
					strokeWidth: "2.2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "8",
					cy: "22",
					r: "2",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "10",
					r: "2",
					className: "fill-gold"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-sans text-sm font-semibold tracking-[0.22em] text-fg",
			children: "SCANIQ"
		})]
	});
}
function AppChrome({ view }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "no-print relative z-20 flex items-center justify-between gap-3 border-b border-border/80 bg-bg/85 px-4 py-3 backdrop-blur-md sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-1 rounded-md bg-surface p-1 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: cn("min-h-10 rounded-sm px-3.5 text-sm font-medium leading-10", view === "deck" ? "bg-panel text-fg" : "text-muted hover:text-fg"),
					children: "Deck"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/patent",
					className: cn("min-h-10 rounded-sm px-3.5 text-sm font-medium leading-10", view === "patent" ? "bg-panel text-fg" : "text-muted hover:text-fg"),
					children: "Patent"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden text-[11px] tracking-[0.16em] text-muted uppercase sm:block",
				children: "Confidential · Sep 2026"
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-50 min-h-11", {
	variants: {
		variant: {
			default: "bg-primary text-bg hover:bg-primary/90",
			ghost: "text-fg hover:bg-panel",
			outline: "shadow-[var(--shadow-border)] text-fg hover:shadow-[var(--shadow-border-hover)] bg-surface",
			gold: "bg-gold text-bg hover:bg-gold/90"
		},
		size: {
			default: "px-4 py-2",
			sm: "min-h-10 px-3 text-xs",
			icon: "size-11 p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as n, cn as r, AppChrome as t };
