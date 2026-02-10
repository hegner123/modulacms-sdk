import type { ULID, Timestamp, NullableString } from "./common.js";

/**
 * A datatype defines a content schema — the structural blueprint
 * for a category of content nodes (e.g. "Blog Post", "Hero Section").
 */
export interface Datatype {
  /** Unique identifier for this datatype. */
  datatype_id: ULID;
  /** Parent content node ID for hierarchical datatypes, or null if top-level. */
  parent_id: NullableString;
  /** Human-readable name for this datatype (e.g. "Blog Post"). */
  label: string;
  /** Datatype category or kind as defined by the API. */
  type: string;
  /** User who created or last modified this datatype, or null if unknown. */
  author_id: NullableString;
  /** When this datatype was created. */
  date_created: Timestamp;
  /** When this datatype was last modified. */
  date_modified: Timestamp;
}

/**
 * A field definition within a datatype schema.
 * Fields define the individual data points that content nodes of a given
 * datatype can hold (e.g. "Title", "Body", "Featured Image").
 */
export interface Field {
  /** Unique identifier for this field definition. */
  field_id: ULID;
  /** Parent datatype ID this field belongs to, or null if standalone. */
  parent_id: NullableString;
  /** Human-readable name for this field (e.g. "Title", "Body"). */
  label: string;
  /** JSON-serialized field configuration. Parse with `JSON.parse` and validate at runtime. */
  data: string;
  /** JSON-serialized validation rules. Parse with `JSON.parse` and validate at runtime. */
  validation: string;
  /** JSON-serialized UI configuration. Parse with `JSON.parse` and validate at runtime. */
  ui_config: string;
  /** Field type identifier (e.g. "text", "richtext", "image", "relation"). */
  type: string;
  /** User who created or last modified this field definition, or null if unknown. */
  author_id: NullableString;
  /** When this field definition was created. */
  date_created: Timestamp;
  /** When this field definition was last modified. */
  date_modified: Timestamp;
}
