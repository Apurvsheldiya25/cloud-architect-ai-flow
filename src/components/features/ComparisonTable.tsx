import React from 'react';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[300px]">Feature</TableHead>
            <TableHead className="text-primary font-semibold text-center">Arch AI</TableHead>
            <TableHead className="text-center">Miro</TableHead>
            <TableHead className="text-center">Manual Tools</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">AI Diagram Generation</TableCell>
            <TableCell className="text-center">
              <Check className="h-5 w-5 text-primary mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <X className="h-5 w-5 text-muted-foreground mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <X className="h-5 w-5 text-muted-foreground mx-auto" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">IaC Export</TableCell>
            <TableCell className="text-center">
              <Check className="h-5 w-5 text-primary mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <X className="h-5 w-5 text-muted-foreground mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground ml-1">(manual)</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Cloud Templates</TableCell>
            <TableCell className="text-center">
              <Check className="h-5 w-5 text-primary mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <X className="h-5 w-5 text-muted-foreground mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <X className="h-5 w-5 text-muted-foreground mx-auto" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Multi-Cloud Support</TableCell>
            <TableCell className="text-center">
              <Check className="h-5 w-5 text-primary mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                <span className="text-sm text-muted-foreground ml-1">(limited)</span>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                <span className="text-sm text-muted-foreground ml-1">(varies)</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Collaboration</TableCell>
            <TableCell className="text-center">
              <Check className="h-5 w-5 text-primary mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <Check className="h-5 w-5 text-muted-foreground mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                <span className="text-sm text-muted-foreground ml-1">(limited)</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Technical Documentation</TableCell>
            <TableCell className="text-center">
              <Check className="h-5 w-5 text-primary mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <X className="h-5 w-5 text-muted-foreground mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                <span className="text-sm text-muted-foreground ml-1">(manual)</span>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
