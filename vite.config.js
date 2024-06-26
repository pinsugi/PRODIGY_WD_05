import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // You don't need to specify dotenv file in Vite for basic usage
});
