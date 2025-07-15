import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

if (!projectId) {
  throw new Error("VITE_SANITY_PROJECT_ID is not defined. Check your .env file.");
}

const config = {
  projectId: projectId,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-11', // YYYY-MM-DD
};

export const client: SanityClient = createClient(config);

const builder = imageUrlBuilder(client);

// This is the updated part. We import the 'Image' type from the 'sanity' package.
// If the 'sanity' package isn't found in this file, you can install it as a dev dependency:
// npm install --save-dev sanity
export function urlFor(source: Image) {
  return builder.image(source);
}
