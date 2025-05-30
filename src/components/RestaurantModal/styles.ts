import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    margin-top: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-top: 16px;
    border-top: 1px solid #ccc;
    padding-top: 8px;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 24px;
  right: 32px;
  cursor: pointer;
  color: white;
`
