/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: ["class", '[data-theme="dark"]'], // Support dark mode
    corePlugins: { preflight: false }, // Allow Docusaurus components to be styled
    blocklist: ["container"], // Disable built-in classes to not interfere with Docusaurus classes
}
