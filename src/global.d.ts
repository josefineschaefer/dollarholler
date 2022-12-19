interface Invoice {
  client: Client;
  createdAt: string;
  dueDate: string;
  invoiceNumber: string;
  invoiceStatus: InvoiceStatus;
  issueDate: string;
  lineItems?: LineItems[];
  notes?: string;
  subject?: string;
  terms?: string;
}

interface LineItems {
  amount: number;
  description: string;
  id: string;
  quantity: number;
}

interface Client {
  clientStatus: ClientStatus;
  city: string;
  email: string;
  id: string;
  name: string;
  state: string;
  street: string;
  zip: string;
}
