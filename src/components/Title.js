import React from 'react'
import styled from 'styled-components'

export default function Title({ title }) {
    return (
        <div className="mt-5">
            <TitleContainer>{title}</TitleContainer>
        </div>
    )
}

const TitleContainer = styled.h1`
    text-align: center;
`;