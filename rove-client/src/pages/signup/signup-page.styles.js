import styled from 'styled-components';
import img from './../../assets/images/jamie-street-hBzrr6m6-pc-unsplash.jpg'

export const SignUpPageContainer = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    height : 90vh;
    background-image : linear-gradient(
      to right,
      rgba(255, 211, 182, 0.4),
      rgba(255, 170, 165, 0.4)
    )
`

export const BackgroundImgContainer = styled.div`
    background-image :linear-gradient(
      to right,
      rgba(255, 211, 182, 0.4),
      rgba(255, 170, 165, 0.4)
    ), url(${img});
    background-position : center;
    background-size : cover;
    background-repeat : no-repeat;
    flex-basis : 30%;
    align-self: stretch;
`