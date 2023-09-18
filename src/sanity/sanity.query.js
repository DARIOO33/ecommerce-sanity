import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPosts() {
  const timestamp = Date.now(); // Add a timestamp to the URL

  return client.fetch(
    groq`*[_type == "product_post"]{
      _id,
      product_name,
      product_desription,
      imageLink,
      product_price,
      categorie,
      discount
    }`
    , { timestamp }
  );
}