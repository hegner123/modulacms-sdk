import type { ULID, Timestamp, NullableString } from "./common.js";

/**
 * A content node in the CMS content tree.
 * Content nodes are arranged in a tree structure using parent/child/sibling pointers.
 * Each node belongs to a route and may be associated with a datatype.
 */
export interface ContentData {
  /** Unique identifier for this content node. */
  content_data_id: ULID;
  /** Parent node ID, or null if this is a root node. */
  parent_id: NullableString;
  /** First child node ID for tree traversal, or null if this node has no children. */
  first_child_id: NullableString;
  /** Next sibling node ID for tree traversal, or null if this is the last sibling. */
  next_sibling_id: NullableString;
  /** Previous sibling node ID for tree traversal, or null if this is the first sibling. */
  prev_sibling_id: NullableString;
  /** Route this content node belongs to, or null if unassigned. */
  route_id: NullableString;
  /** Datatype that defines this node's schema, or null if untyped. */
  datatype_id: NullableString;
  /** User who created or last modified this content node, or null if unknown. */
  author_id: NullableString;
  /** Content status value defined by the API (e.g. "draft", "published"). */
  status: string;
  /** When this content node was created. */
  date_created: Timestamp;
  /** When this content node was last modified. */
  date_modified: Timestamp;
}

/**
 * A field value attached to a content node.
 * Content fields store the actual data for each content node, linking a field definition
 * to its value within a specific content context.
 */
export interface ContentField {
  /** Unique identifier for this content field entry. */
  content_field_id: ULID;
  /** Route this field belongs to, or null if route-independent. */
  route_id: NullableString;
  /** Content node this field value is attached to, or null if unattached. */
  content_data_id: NullableString;
  /** Field definition this value corresponds to, or null if undefined. */
  field_id: NullableString;
  /** The stored value for this field. */
  field_value: string;
  /** User who created or last modified this field value, or null if unknown. */
  author_id: NullableString;
  /** When this field value was created. */
  date_created: Timestamp;
  /** When this field value was last modified. */
  date_modified: Timestamp;
}
