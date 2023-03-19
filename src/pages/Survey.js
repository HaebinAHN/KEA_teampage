import React, { useState } from 'react';
import styled from "styled-components";
import Button from "./ui/Button";
import Dropdown from "./ui/Dropdown";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function Survey(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <h2>Survey</h2>
                <div>
                    <Dropdown />
                </div>
            </Container>
        </Wrapper>
    );
}

export default Survey;