import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Clock, FileText } from "lucide-react";
import Header from "@/components/Header";

const History = () => {
  const navigate = useNavigate();

  const reconciliations = [
    {
      id: "recon-001",
      date: "2024-11-29",
      time: "14:30",
      sourceFile: "Q4_Ledger.xlsx",
      targetFile: "Bank_Statement_Nov.pdf",
      totalRows: 1500,
      matched: 1450,
      exceptions: 50,
      status: "completed",
    },
    {
      id: "recon-002",
      date: "2024-11-28",
      time: "09:15",
      sourceFile: "Q4_Ledger.xlsx",
      targetFile: "Bank_Statement_Oct.pdf",
      totalRows: 1420,
      matched: 1395,
      exceptions: 25,
      status: "completed",
    },
    {
      id: "recon-003",
      date: "2024-11-27",
      time: "16:45",
      sourceFile: "Q3_Ledger.xlsx",
      targetFile: "Bank_Statement_Sep.pdf",
      totalRows: 1350,
      matched: 1320,
      exceptions: 30,
      status: "completed",
    },
    {
      id: "recon-004",
      date: "2024-11-26",
      time: "11:20",
      sourceFile: "Q3_Ledger.xlsx",
      targetFile: "Bank_Statement_Aug.pdf",
      totalRows: 1280,
      matched: 1275,
      exceptions: 5,
      status: "completed",
    },
  ];

  const handleRowClick = (reconId: string) => {
    navigate(`/results?id=${reconId}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-500/10 text-green-700 hover:bg-green-500/20 border-green-500/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500/20 border-blue-500/20">
            <Clock className="h-3 w-3 mr-1" />
            Processing
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-red-500/10 text-red-700 hover:bg-red-500/20 border-red-500/20">
            <XCircle className="h-3 w-3 mr-1" />
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Reconciliation History
          </h1>
          <p className="mt-2 text-muted-foreground">
            View and access your previous reconciliations
          </p>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Source File</TableHead>
                  <TableHead>Target File</TableHead>
                  <TableHead className="text-right">Total Rows</TableHead>
                  <TableHead className="text-right">Matched</TableHead>
                  <TableHead className="text-right">Exceptions</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reconciliations.map((recon) => (
                  <TableRow
                    key={recon.id}
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleRowClick(recon.id)}
                  >
                    <TableCell>
                      <div>
                        <p className="font-medium">{recon.date}</p>
                        <p className="text-sm text-muted-foreground">{recon.time}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{recon.sourceFile}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{recon.targetFile}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {recon.totalRows}
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="text-green-600 font-medium">
                        {recon.matched}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="text-red-600 font-medium">
                        {recon.exceptions}
                      </span>
                    </TableCell>
                    <TableCell>{getStatusBadge(recon.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>Click on any row to view detailed results</p>
        </div>
      </div>
    </div>
  );
};

export default History;
