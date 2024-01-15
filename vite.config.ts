import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["@journeyapps/powersync-sdk-web"],
    include: ["object-hash", "uuid", "event-iterator", "js-logger", "lodash", "can-ndjson-stream"],
  },
  worker: {
    format: "es",
  },
  build: {
    target: "ESNext",
  },
});
