/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        custom: ['CustomFont', 'sans-serif'],
      },
      borderWidth: {
        'medium': '3px', // Thay đổi giá trị này theo yêu cầu của bạn
      },
    },
  },
  plugins: [],
}
