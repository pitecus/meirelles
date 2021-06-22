import { Changelog } from "./changelog";
import { ChangelogDetail } from "./changelog-detail";

/**
 * Release.
 */
interface Release {
  /**
   * Version.
   */
  version: string;

  /**
   * Changes grouped by type.
   */
  changes: {
    /**
     * Change type.
     */
    type: string;

    /**
     * Changes.
     */
    changes: ChangelogDetail[]
  }[];
}

/**
 * Export the interface.
 */
export { Release };