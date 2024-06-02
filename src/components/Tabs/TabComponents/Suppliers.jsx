import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import {
  Divider,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Profiler from "../../CustomAvatar";

const Suppliers = () => {
  const rows = [
    {
      status: (
        <Profiler
          text="TQ"
          bgcolor="#008A25"
          cssProperties={{ width: 25, height: 25, fontSize: "10px" }}
        />
      ),
      supplierName: "Engineering Co. Ltd",
      goods: "3,459.70",
      freight: "0.00",
      total: "3,459.70",
      cur: "EUR",
      base: "3,811.92",
    },
    {
      status: (
        <Profiler
          text="TQ"
          bgcolor="#008A25"
          cssProperties={{ width: 25, height: 25, fontSize: "10px" }}
        />
      ),
      supplierName: "Fintec Co. Ltd - Spares",
      goods: (
        <Typography variant="body1" sx={{ color: "red", fontSize: "14px" }}>
          4,370.60
        </Typography>
      ),
      freight: "0.00",
      total: "4,370.60",
      cur: "EUR",
      base: "4,370.60",
    },
  ];
  return (
    <CommanWrapper>
      <TabHeader title={"Supplier"} badge={rows.length} />

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
              <TableCell>Status</TableCell>
              <TableCell>Supplier Name</TableCell>
              <TableCell>Goods</TableCell>
              <TableCell>Freight</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Cur</TableCell>
              <TableCell>Base(USD)</TableCell>
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
                <TableCell component="th" scope="row">
                  {row.status}
                </TableCell>
                <TableCell>{row.supplierName}</TableCell>
                <TableCell>{row.goods}</TableCell>
                <TableCell>{row.freight}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.cur}</TableCell>
                <TableCell>{row.base}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CommanWrapper>
  );
};

export default Suppliers;
