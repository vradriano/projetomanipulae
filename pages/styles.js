import styled from 'styled-components';

const Container = styled.div`
  max-width: 1080px;
  justify-content: center;
  display: block;
  align-items: center;
  margin-top: 1.5rem;
  margin: 0 auto;

`

const CardWrapper = styled.main`
  max-width: 1080px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin: 0 auto;

  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width:)
`

const CardContainer = styled.div`
  margin-top: 3rem;
  border-radius: 5px;
  background-color: white;
  height: 17.00rem;
  width: 15.00rem;
  margin: 0 auto 4rem; auto;  
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  padding-bottom: 3.25rem;

  input {
    height: 1.875rem;
    width: 30.5rem;
    border-radius: 5px;
  }
`

export {
  Container,
  CardWrapper,
  CardContainer,
  Form
}