import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'oversigt', title: 'Oversigt', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'dokuments', title: 'Dokumenter', href: paths.dashboard.customers, icon: 'users' },
  { key: 'scan-dokumenter', title: 'Scan&Analyse', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'profil', title: 'Profil', href: paths.dashboard.account, icon: 'user' },
  { key: 'betaling', title: 'Betaling', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
