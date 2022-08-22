import { TransactionModel } from "../model/transaction.model";

export const TRANSACTION_DATA: TransactionModel[] = [
  { name: 'John Dembe', amount: 'UGX 5,846.00', category: 'Send Money', status: 'Completed', timeElapsed: '4 hr', icon: 'arrow-top-right', iconClass: 'icon-solid' },
  { name: 'Mary Kaikara', amount: 'UGX 5,846.00', category: 'Collection', status: 'Completed', timeElapsed: '4 hr', icon: 'arrow-down-right', iconClass: 'icon-solid' },
  { name: 'Phillip Kenyanga', amount: 'UGX 5,846.00', category: 'Withdrawal', status: 'Completed', timeElapsed: '2 d', icon: 'download', iconClass: 'icon-solid' },
  { name: 'Nelson Kizza', amount: 'UGX 5,846.00', category: 'Send Money', status: 'Pending', timeElapsed: '5 d', icon: 'arrow-top-right', iconClass: 'icon-solid-bd' },
  { name: 'Alice Mukassa', amount: 'UGX 5,846.00', category: 'Send Money', status: 'Failed', timeElapsed: '5 d', icon: 'arrow-down-right', iconClass: 'icon-dashed-bd' },
];
