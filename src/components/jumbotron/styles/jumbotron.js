import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction };
    justify-content: space-between;
    max-width: 110px;
    margin: auto;
    
    @media (max-width: 1000px) {
        flex-direction: colum;
    }
    `;

export const Container = styled.div`
    `;