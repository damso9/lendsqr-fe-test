// data.tsx

import AuditLogs from '../../assets/svg/auditLogs.svg';
import Dashboard from '../../assets/svg/dashboard.svg';
import DecisionModels from '../../assets/svg/decisionModels.svg';
import FeesAndCharges from '../../assets/svg/feesAndCharges.svg';
import FeesAndPricing from '../../assets/svg/feesAndPricing.svg';
import Guarantors from '../../assets/svg/guarantors.svg';
import Karma from '../../assets/svg/karma.svg';
import LoanProduct from '../../assets/svg/loanProduct.svg';
import LoanRequests from '../../assets/svg/loanRequests.svg';
import Loans from '../../assets/svg/loans.svg';
import Organization from '../../assets/svg/organization.svg';
import Preferences from '../../assets/svg/preferences.svg';
import Reports from '../../assets/svg/reports.svg';
import Savings from '../../assets/svg/savings.svg';
import SavingsProduct from '../../assets/svg/savingsProduct.svg';
import ServiceAccount from '../../assets/svg/serviceAccount.svg';
import Services from '../../assets/svg/services.svg';
import Settlements from '../../assets/svg/settlements.svg';
import Transactions from '../../assets/svg/transactions.svg';
import Users from '../../assets/svg/users.svg';
import WhiteList from '../../assets/svg/whitelist.svg';

export interface SidebarItem {
  label: string;
  icon: string; // Use a function that returns a JSX element
  path: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export const sidebarData: SidebarSection[] = [
  {
    title: '',
    items: [{ label: 'Dashboard', icon: Dashboard, path: '/dashboard' }],
  },
  {
    title: 'CUSTOMERS',
    items: [
      { label: 'Users', icon: Users, path: '/users' },
      { label: 'Guarantors', icon: Guarantors, path: '/guarantors' },
      { label: 'Loans', icon: Loans, path: '/loans' },
      {
        label: 'Decision Models',
        icon: DecisionModels,
        path: '/decision-models',
      },
      { label: 'Savings', icon: Savings, path: '/savings' },
      {
        label: 'Loan Requests',
        icon: LoanRequests,
        path: '/loan-requests',
      },
      { label: 'Whitelist', icon: WhiteList, path: '/whitelist' },
      { label: 'Karma', icon: Karma, path: '/karma' },
    ],
  },
  {
    title: 'BUSINESSES',
    items: [
      {
        label: 'Organization',
        icon: Organization,
        path: '/organization',
      },
      {
        label: 'Loan Products',
        icon: LoanProduct,
        path: '/loan-products',
      },
      {
        label: 'Savings Products',
        icon: SavingsProduct,
        path: '/savings-products',
      },
      {
        label: 'Fees and Charges',
        icon: FeesAndCharges,
        path: '/fees-and-charges',
      },
      {
        label: 'Transactions',
        icon: Transactions,
        path: '/transactions',
      },
      { label: 'Services', icon: Services, path: '/services' },
      {
        label: 'Service Account',
        icon: ServiceAccount,
        path: '/service-account',
      },
      {
        label: 'Settlements',
        icon: Settlements,
        path: '/settlements',
      },
      { label: 'Reports', icon: Reports, path: '/reports' },
    ],
  },
  {
    title: 'SETTINGS',
    items: [
      {
        label: 'Preferences',
        icon: Preferences,
        path: '/preferences',
      },
      {
        label: 'Fees and Pricing',
        icon: FeesAndPricing,
        path: '/fees-and-pricing',
      },
      { label: 'Audit Logs', icon: AuditLogs, path: '/audit-logs' },
    ],
  },
];
