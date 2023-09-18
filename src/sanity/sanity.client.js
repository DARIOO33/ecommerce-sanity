import { createClient } from "@sanity/client";

const config = {
  projectId: "36acwxdm",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);

export default client;