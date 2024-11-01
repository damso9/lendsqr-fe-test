// data.tsx

import AuditLogs from '../../../assets/svg-components/auditLogs.svg';
import Dashboard from '../../../assets/svg-components/dashboard.svg';
import DecisionModels from '../../../assets/svg-components/decisionModels.svg';
import FeesAndCharges from '../../../assets/svg-components/feesAndCharges.svg';
import FeesAndPricing from '../../../assets/svg-components/feesAndPricing.svg';
import Guarantors from '../../../assets/svg-components/guarantors.svg';
import Karma from '../../../assets/svg-components/karma.svg';
import LoanProduct from '../../../assets/svg-components/loanProduct.svg';
import LoanRequests from '../../../assets/svg-components/loanRequests.svg';
import Loans from '../../../assets/svg-components/loans.svg';
import Organization from '../../../assets/svg-components/organization.svg';
import Preferences from '../../../assets/svg-components/preferences.svg';
import Reports from '../../../assets/svg-components/reports.svg';
import Savings from '../../../assets/svg-components/savings.svg';
import SavingsProduct from '../../../assets/svg-components/savingsProduct.svg';
import ServiceAccount from '../../../assets/svg-components/serviceAccount.svg';
import Services from '../../../assets/svg-components/services.svg';
import Settlements from '../../../assets/svg-components/settlements.svg';
import Transactions from '../../../assets/svg-components/transactions.svg';
import Users from '../../../assets/svg-components/users.svg';
import WhiteList from '../../../assets/svg-components/whitelist.svg';

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
