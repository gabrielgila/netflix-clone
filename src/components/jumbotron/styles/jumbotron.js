import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    
    @media (max-width: 1000px) {
        flex-direction: colum;
    }
    `;

export const Pane = styled.div`
    width: 50%;
    `;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;
    
    @medioa (max-width: 600px) {
        font-size: 35px;
    }
    `;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    
    @medioa (max-width: 600px) {
        font-size: 18px;
    }
    `;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    `;

export const Container = styled.div``;