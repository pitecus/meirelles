import { Award } from './award';
import { Basics } from './basics';
import { Education } from './education';
import { Interests } from './interests';
import { Language } from './language';
import { Publication } from './publication';
import { Reference } from './reference';
import { Skill } from './skill';
import { Volunteer } from './volunteer';
import { Work } from './work';

interface Resume {
  awards?: Award[] | null;
  basics: Basics;
  education?: Education[] | null;
  interests?: Interests[] | null;
  languages?: Language[] | null;
  publications?: Publication[] | null;
  references?: Reference[] | null;
  skills?: Skill[] | null;
  volunteer?: Volunteer[] | null;
  work?: Work[] | null;
}

export { Resume };