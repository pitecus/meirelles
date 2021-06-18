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
  awards: Award[];
  basics: Basics;
  education: Education[];
  interests: Interests[];
  languages: Language[];
  publications: Publication[];
  references: Reference[];
  skills: Skill[];
  volunteer: Volunteer[];
  work: Work[];
}

export { Resume };