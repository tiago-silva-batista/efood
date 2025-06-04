import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export default Container
