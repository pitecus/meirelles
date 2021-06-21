import { Changelog } from "./changelog";
import { ChangelogDetail } from "./changelog-detail";

interface Release {
  version: string;
  changes: ChangelogDetail[];
}

/**
 * Export the interface.
 */
export { Release };