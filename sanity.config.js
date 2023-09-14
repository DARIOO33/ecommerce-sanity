import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/schemas";

export default defineConfig({
  name: "ecommerce-sanity",
  title: "ecommerce-sanity ",
  projectId: "36acwxdm",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});