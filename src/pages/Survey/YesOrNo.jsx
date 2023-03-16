import React, { useState } from "react";
import styled from "styled-components";
import { Button, Grid, TextField } from "@mui/material";

function YesOrNo(props){

    return(
        
        <Grid container style={{ marginTop: 20 }}>
            <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                질문: <TextField placeholder="내용을 입력하세요" fullWidth/>
            </Grid>
        </Grid>

    
    );
}
export default YesOrNo;