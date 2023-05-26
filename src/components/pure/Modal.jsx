import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { ModalStyled } from '../styles/Modal.styled';
import { themeLight } from '../styles/Theme.styled';

const IconStyles = {
  cursor: 'pointer',
  color: themeLight.colors.white,
  "&:hover": { color: themeLight.colors.orange },
  position: "relative",
  right: '-210px',
  top: '-1%'
}

export const Modal = (props) => {
  return (
    <ModalStyled>
      <CloseIcon
        sx={IconStyles}
        onClick={props.handleClose}></CloseIcon>
      {props.children}
    </ModalStyled>
  )
}
