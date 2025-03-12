import type { Config } from "tailwindcss";

// export default {
// 	darkMode: ["class"],
// 	content: [
// 		"./pages/**/*.{ts,tsx}",
// 		"./components/**/*.{ts,tsx}",
// 		"./app/**/*.{ts,tsx}",
// 		"./src/**/*.{ts,tsx}",
// 	],
// 	prefix: "",
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: '2rem',
// 			screens: {
// 				'2xl': '1400px'
// 			}
// 		},
// 		extend: {
// 			colors: {
// 				border: 'hsl(var(--border))',
// 				input: 'hsl(var(--input))',
// 				ring: 'hsl(var(--ring))',
// 				background: 'hsl(var(--background))',
// 				foreground: 'hsl(var(--foreground))',
// 				primary: {
// 					DEFAULT: 'hsl(var(--primary))',
// 					foreground: 'hsl(var(--primary-foreground))'
// 				},
// 				secondary: {
// 					DEFAULT: 'hsl(var(--secondary))',
// 					foreground: 'hsl(var(--secondary-foreground))'
// 				},
// 				destructive: {
// 					DEFAULT: 'hsl(var(--destructive))',
// 					foreground: 'hsl(var(--destructive-foreground))'
// 				},
// 				muted: {
// 					DEFAULT: 'hsl(var(--muted))',
// 					foreground: 'hsl(var(--muted-foreground))'
// 				},
// 				accent: {
// 					DEFAULT: 'hsl(var(--accent))',
// 					foreground: 'hsl(var(--accent-foreground))'
// 				},
// 				popover: {
// 					DEFAULT: 'hsl(var(--popover))',
// 					foreground: 'hsl(var(--popover-foreground))'
// 				},
// 				card: {
// 					DEFAULT: 'hsl(var(--card))',
// 					foreground: 'hsl(var(--card-foreground))'
// 				},
// 				sidebar: {
// 					DEFAULT: 'hsl(var(--sidebar-background))',
// 					foreground: 'hsl(var(--sidebar-foreground))',
// 					primary: 'hsl(var(--sidebar-primary))',
// 					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
// 					accent: 'hsl(var(--sidebar-accent))',
// 					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
// 					border: 'hsl(var(--sidebar-border))',
// 					ring: 'hsl(var(--sidebar-ring))'
// 				},
// 				navy: {
// 					DEFAULT: '#0A2342',
// 					light: '#1D3557'
// 				},
// 				gold: {
// 					DEFAULT: '#E3B23C',
// 					light: '#F2CC8F'
// 				},
// 				cream: '#F7F9FB'
// 			},
// 			borderRadius: {
// 				lg: 'var(--radius)',
// 				md: 'calc(var(--radius) - 2px)',
// 				sm: 'calc(var(--radius) - 4px)'
// 			},
// 			keyframes: {
// 				'accordion-down': {
// 					from: { height: '0' },
// 					to: { height: 'var(--radix-accordion-content-height)' }
// 				},
// 				'accordion-up': {
// 					from: { height: 'var(--radix-accordion-content-height)' },
// 					to: { height: '0' }
// 				},
// 				'fade-in': {
// 					from: { opacity: '0' },
// 					to: { opacity: '1' }
// 				},
// 				'fade-up': {
// 					from: { opacity: '0', transform: 'translateY(20px)' },
// 					to: { opacity: '1', transform: 'translateY(0)' }
// 				},
// 				'fade-right': {
// 					from: { opacity: '0', transform: 'translateX(-20px)' },
// 					to: { opacity: '1', transform: 'translateX(0)' }
// 				},
// 				'text-shimmer': {
// 					from: { backgroundPosition: '0 0' },
// 					to: { backgroundPosition: '-200% 0' }
// 				}
// 			},
// 			animation: {
// 				'accordion-down': 'accordion-down 0.2s ease-out',
// 				'accordion-up': 'accordion-up 0.2s ease-out',
// 				'fade-in': 'fade-in 0.5s ease-out forwards',
// 				'fade-up': 'fade-up 0.5s ease-out forwards',
// 				'fade-right': 'fade-right 0.5s ease-out forwards',
// 				'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate'
// 			},
// 			fontFamily: {
// 				sans: ['Montserrat', 'system-ui', 'sans-serif'],
// 				serif: ['Playfair Display', 'serif']
// 			}
// 		}
// 	},
// 	plugins: [require("tailwindcss-animate")],
// } satisfies Config;

// export default {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border, 220 13% 91%))", // ✅ Added fallback value
//         input: "hsl(var(--input, 220 13% 91%))",
//         ring: "hsl(var(--ring, 220 13% 91%))",
//         background: "hsl(var(--background, 0 0% 100%))",
//         foreground: "hsl(var(--foreground, 220 13% 91%))",
//         primary: {
//           DEFAULT: "hsl(var(--primary, 240 100% 50%))",
//           foreground: "hsl(var(--primary-foreground, 0 0% 100%))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary, 210 100% 50%))",
//           foreground: "hsl(var(--secondary-foreground, 0 0% 100%))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive, 0 100% 50%))",
//           foreground: "hsl(var(--destructive-foreground, 0 0% 100%))",
//         },
//         navy: {
//           DEFAULT: "#0A2342",
//           light: "#1D3557",
//         },
//         gold: {
//           DEFAULT: "#E3B23C",
//           light: "#F2CC8F",
//         },
//         cream: "#F7F9FB",
//       },
//       borderRadius: {
//         lg: "var(--radius, 0.5rem)",
//         md: "calc(var(--radius, 0.5rem) - 2px)",
//         sm: "calc(var(--radius, 0.5rem) - 4px)",
//       },
//       keyframes: {
//         "fade-in": {
//           from: { opacity: "0" },
//           to: { opacity: "1" },
//         },
//         "fade-up": {
//           from: { opacity: "0", transform: "translateY(20px)" },
//           to: { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         "fade-in": "fade-in 0.5s ease-out forwards",
//         "fade-up": "fade-up 0.5s ease-out forwards",
//       },
//     },
//   },

  

//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;

export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./app/**/*.{ts,tsx}",
	  "./src/**/*.{ts,tsx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  border: "hsl(var(--border, 220 13% 91%))",
		  input: "hsl(var(--input, 220 13% 91%))",
		  ring: "hsl(var(--ring, 220 13% 91%))",
		  background: "hsl(var(--background, 0 0% 100%))",
		  foreground: "hsl(var(--foreground, 220 13% 91%))",
		  primary: {
			DEFAULT: "hsl(var(--primary, 240 100% 50%))",
			foreground: "hsl(var(--primary-foreground, 0 0% 100%))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary, 210 100% 50%))",
			foreground: "hsl(var(--secondary-foreground, 0 0% 100%))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive, 0 100% 50%))",
			foreground: "hsl(var(--destructive-foreground, 0 0% 100%))",
		  },
		  navy: {
			DEFAULT: "#0A2342",
			light: "#1D3557",
		  },
		  gold: {
			DEFAULT: "#E3B23C",
			light: "#F2CC8F",
		  },
		  cream: "#F7F9FB",
		},
		borderRadius: {
		  lg: "var(--radius, 0.5rem)",
		  md: "calc(var(--radius, 0.5rem) - 2px)",
		  sm: "calc(var(--radius, 0.5rem) - 4px)",
		},
		keyframes: {
		  "fade-in": {
			from: { opacity: "0" },
			to: { opacity: "1" },
		  },
		  "fade-up": {
			from: { opacity: "0", transform: "translateY(20px)" },
			to: { opacity: "1", transform: "translateY(0)" },
		  },
		},
		animation: {
		  "fade-in": "fade-in 0.5s ease-out forwards",
		  "fade-up": "fade-up 0.5s ease-out forwards",
		},
	  },
	},
	variants: {
	  extend: {
		backgroundColor: ["active"],
		scale: ["active"],
		opacity: ["active"],
		ringWidth: ["active"],
		borderColor: ["active"],
		textColor: ["active"],
	  },
	},
	plugins: [require("tailwindcss-animate")],
  } satisfies Config;