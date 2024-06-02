import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const Invoices = () => {
  const rows = [
    {
      attachment: <AttachFileIcon color="success" />,
      status: (
        <Typography variant="body1" sx={{ color: "#008A25", fontSize: "14px" }}>
          Invoice Paid
        </Typography>
      ),
      reference: "PJIN002271-SRIN",
      amount: "34,445.00",
      currency: "USD",
      "invoice date": "23 Sep 2019",
      "paid date": "30 Jun 2020",
    },
    {
      attachment: <AttachFileIcon color="success" />,
      status: (
        <Typography variant="body1" sx={{ color: "#008A25", fontSize: "14px" }}>
          Invoice Paid
        </Typography>
      ),
      reference: "PJIN002156-SRIN",
      amount: "31,320.00",
      currency: "USD",
      "invoice date": "12 Aug 2019",
      "paid date": "30 Jun 2020",
    },
  ];
  return (
    <CommanWrapper>
      <TabHeader title={"Invoices"} badge={rows.length} />

      <TableContainer>
        <Table
          sx={{ width: "100%", border: "0.5px solid", borderRadius: "10px" }}
          aria-label="simple table"
          size="small"
        >
          <TableHead
            sx={{ bgcolor: "#DAE0E2", borderBottom: "1px solid black" }}
          >
            <TableRow>
              <TableCell>Attachments</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Invoice Date</TableCell>
              <TableCell>Paid Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  bgcolor: "white",
                }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.attachment}
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.reference}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell>{row["invoice date"]}</TableCell>
                <TableCell>{row["paid date"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CommanWrapper>
  );
};

export default Invoices;
