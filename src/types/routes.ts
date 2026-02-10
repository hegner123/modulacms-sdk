import type { ULID, Timestamp, NullableString } from "./common.js";

/**
 * A URL route that maps a slug to a content tree.
 * Routes are the top-level addressing mechanism — each route's slug
 * is used with {@link ModulaClient.getPage} to fetch rendered content.
 */
export interface Route {
  /** Unique identifier for this route. */
  route_id: ULID;
  /** URL-safe slug used to address this route (e.g. "about", "blog"). */
  slug: string;
  /** Human-readable title for this route. */
  title: string;
  /** Numeric status code defined by the API (e.g. 0 = inactive, 1 = active). */
  status: number;
  /** User who created or last modified this route, or null if unknown. */
  author_id: NullableString;
  /** When this route was created. */
  date_created: Timestamp;
  /** When this route was last modified. */
  date_modified: Timestamp;
}
