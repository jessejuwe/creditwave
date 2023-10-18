import { BsDatabaseAdd } from 'react-icons/bs';
import { TbCloudLock } from 'react-icons/tb';
import { IconType } from 'react-icons';

interface Apps {
  icon: IconType;
  title: string;
  date: string;
  badge: string;
}

export const APPLICATIONS: Apps[] = [
  { icon: BsDatabaseAdd, title: 'Recovery', date: '01/08/23', badge: 'Active' },
  { icon: TbCloudLock, title: 'Single Sign-on', date: '04/08/23', badge: 'Active' },
];
