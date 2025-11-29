import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import Header from "@/components/Header";

const Results = () => {
  const [searchParams] = useSearchParams();
  const reconId = searchParams.get("id") || "recon-001";

  const summaryStats = {
    totalRows: 1500,
    reconciled: 1450,
    exceptions: 50,
  };

  const sampleData = [
    {
      id: 1,
      date: "2024-01-15",
      transactionId: "TXN001",
      amount: 5000.0,
      status: "matched",
      sourceAmount: 5000.0,
      targetAmount: 5000.0,
    },
    {
      id: 2,
      date: "2024-01-16",
      transactionId: "TXN002",
      amount: 12500.0,
      status: "matched",
      sourceAmount: 12500.0,
      targetAmount: 12500.0,
    },
    {
      id: 42,
      date: "2024-01-17",
      transactionId: "TXN042",
      amount: 1000.0,
      status: "exception",
      sourceAmount: 1000.0,
      targetAmount: 999.0,
    },
    {
      id: 43,
      date: "2024-01-18",
      transactionId: "TXN043",
      amount: 7500.0,
      status: "matched",
      sourceAmount: 7500.0,
      targetAmount: 7500.0,
    },
    {
      id: 44,
      date: "2024-01-19",
      transactionId: "TXN044",
      amount: 3200.0,
      status: "matched",
      sourceAmount: 3200.0,
      targetAmount: 3200.0,
    },
  ];

  const getRowClassName = (status: string) => {
    if (status === "matched") return "bg-green-500/10 hover:bg-green-500/20";
    if (status === "exception") return "bg-red-500/10 hover:bg-red-500/20";
    return "";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Reconciliation Results
          </h1>
          <p className="mt-2 text-muted-foreground">
            Review matched transactions and exceptions {reconId && `(ID: ${reconId})`}
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rows</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summaryStats.totalRows}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Total transactions processed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reconciled</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {summaryStats.reconciled}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {((summaryStats.reconciled / summaryStats.totalRows) * 100).toFixed(1)}% success rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Exceptions</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {summaryStats.exceptions}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Require manual review
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr,400px]">
          {/* Data Table */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction Data</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Row</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead className="text-right">Source Amount</TableHead>
                    <TableHead className="text-right">Target Amount</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleData.map((row) => (
                    <TableRow key={row.id} className={getRowClassName(row.status)}>
                      <TableCell className="font-medium">{row.id}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.transactionId}</TableCell>
                      <TableCell className="text-right">
                        ₹{row.sourceAmount.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        ₹{row.targetAmount.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-center">
                        {row.status === "matched" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600 inline-block" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600 inline-block" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Exception Details Sidebar */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                Exception Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Row 42: Amount Mismatch</h3>
                <div className="space-y-3">
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Ledger Amount
                    </p>
                    <p className="text-lg font-semibold">₹1,000.00</p>
                  </div>

                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Bank Amount
                    </p>
                    <p className="text-lg font-semibold">₹999.00</p>
                  </div>

                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Difference
                    </p>
                    <p className="text-lg font-semibold text-red-600">-₹1.00</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-accent" />
                  AI Reasoning
                </h4>
                <p className="text-sm text-foreground leading-relaxed">
                  The bank received ₹999.00 but the ledger says ₹1,000.00. This is 
                  likely a bank charge difference. The ₹1.00 discrepancy is within 
                  typical transaction fee ranges.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;
