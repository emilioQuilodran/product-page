import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.darkBlue};
`

export const Typography = styled.h1`
    font-size: 26px;
`

export const ProfilePic = styled.span `
  background-color: ${({theme}) => theme.colors.darkGrayishBlue};
  display: inline-block;
  width: 24px;
  height: 25px;
  border-radius: 50%;
`