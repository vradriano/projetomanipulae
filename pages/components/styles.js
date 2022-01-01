import styled from 'styled-components'

const Header = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-500);
`

const Container = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem; 

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      position: relative;
      display: inline-block;
      height: 5rem;
      line-height: 5rem;
      padding: 0 0.5rem;
      color: var(--grey-100);

      transition: color 0.2s;

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: var(--gray-400);
      }
    }
  }
`

export {
  Header, Container
}

