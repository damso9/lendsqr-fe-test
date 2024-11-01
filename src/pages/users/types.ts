// types.ts
// types.ts
export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Guarantor {
  fullName: string;
  phone: string;
  email: string;
  relationship: string;
}

export interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: 'Active' | 'Inactive' | 'Blacklisted' | 'Pending';
  fullName: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  socials: Socials;
  guarantor: Guarantor;
}

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
  onItemsPerPageChange: (items: number) => void;
}