import type { ULID, Timestamp, NullableString, NullableNumber } from "./common.js";

/**
 * A media item (image, document, etc.) managed by the CMS.
 * Media records store metadata about uploaded files including
 * display properties, dimensions, and the public URL.
 */
export interface Media {
  /** Unique identifier for this media item. */
  media_id: ULID;
  /** Internal filename, or null if not set. */
  name: NullableString;
  /** Human-readable display name, or null if not set. */
  display_name: NullableString;
  /** Alt text for accessibility, or null if not set. */
  alt: NullableString;
  /** Caption text, or null if not set. */
  caption: NullableString;
  /** Longer description, or null if not set. */
  description: NullableString;
  /** CSS class hint for rendering, or null if not set. */
  class: NullableString;
  /** MIME type (e.g. "image/png"), or null if not detected. */
  mimetype: NullableString;
  /** Dimension string (e.g. "1920x1080"), or null if not applicable. */
  dimensions: NullableString;
  /** Public URL where this media file can be accessed. */
  url: string;
  /** Responsive image srcset string, or null if not generated. */
  srcset: NullableString;
  /** User who uploaded this media item, or null if unknown. */
  author_id: NullableString;
  /** When this media item was created. */
  date_created: Timestamp;
  /** When this media item was last modified. */
  date_modified: Timestamp;
}

/**
 * A named dimension preset for media assets (e.g. "thumbnail", "hero").
 * Used to define standard image sizes across the CMS.
 */
export interface MediaDimension {
  /** Unique identifier for this dimension preset. Abbreviated from the API schema. */
  md_id: string;
  /** Human-readable label (e.g. "Thumbnail", "Hero Banner"), or null if not set. */
  label: NullableString;
  /** Width in pixels, or null if unconstrained. */
  width: NullableNumber;
  /** Height in pixels, or null if unconstrained. */
  height: NullableNumber;
  /** Aspect ratio string (e.g. "16:9"), or null if unconstrained. */
  aspect_ratio: NullableString;
}
