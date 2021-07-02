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
  pronoun: string;
  profiles?: Profile[] | null;
  summary: string;
  website: string;
}

export { Basics };
