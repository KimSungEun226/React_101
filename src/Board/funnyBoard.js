import { Container, Paper, Table, TableBody, TableCell, TableContainer, 
    TableHead,
     TableRow } from "@mui/material";
import React from "react";

function createData(thumbnail, title, writer, postedTime, hits) {
    return { thumbnail, title, writer, postedTime, hits };
  }
  
  
  const rows = [
    createData('사진', '스틸하는 만화.jpg', 'JohnSungEun', '방금', 0),
    createData('사진', '배용준 최지우.jpg', 'JohnSungEun', '방금', 0),
    createData('사진', '누누티비 오진다', 'JohnSungEun', '방금', 0),
    createData('사진', '어쩌구저쩌구티비', 'JohnSungEun', '방금', 0),
    createData('사진', '윤석열문재인', 'JohnSungEun', '방금', 0),
  ];


function FunnyBoard() {

    return (
        <Container component="main" maxWidth="lg" style={{marginTop: "8% "}}>
            <div><h1>웃긴자료를 올려주세요. 우하하~</h1></div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.title}
                    >
                    <TableCell component="th" scope="row">
                        {row.thumbnail}
                    </TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="right">{row.writer}</TableCell>
                    <TableCell align="right">{row.postedTime}</TableCell>
                    <TableCell align="right">{row.hits}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>  
        </Container>
    );
};

export default FunnyBoard;