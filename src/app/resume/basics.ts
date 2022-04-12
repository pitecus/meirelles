import { Location } from './location';
import { Profile } from './profile';

/**
 * Basic resume information.
 */
interface Basics {
  email: string;
  label: string;
  location: Location;
  name: string;
  phone: string;
  picture: string;
  profiles?: Profile[] | null;
  pronoun: string;
  summary: string;
  website: string;
}

/**
 * Export the interface.
 */
export { Basics };
