import styled from 'styled-components';


export const PhotosContainer = styled.div`
    display : flex;
    justify-content : space-around;
    flex-wrap : wrap;
`
export const ImageContainer = styled.div`
    flex : 1 0 25rem;
    margin : 2rem 2rem;
    box-shadow : .3rem .3rem .5rem rgba(0,0,0, 0.3);
    border-radius : .5rem;
    overflow: hidden;

    img {
        display : block;
        height : 25rem;
        width : 100%;
        transform : scale(1.2);
        transition : all .4s;
    }

    &:hover img {
        transform : scale(1);
    }
`