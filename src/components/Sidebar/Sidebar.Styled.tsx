import styled from "styled-components";

const StyledSidebar = styled.div`
  .sidebar {
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 600px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.purple[50]};
    border: 4px solid ${({ theme }) => theme.color.purple[100]};

    a {
      padding: 20px;
      margin: 10px;
      text-align: center;
      border-radius: 10px;
      color: ${({ theme }) => theme.color.purple[500]};
      background-color: ${({ theme }) => theme.color.purple[200]};
    }
    
  }
  

  @media (max-width: ${({ theme }) => theme.breakpoint.l}px) {
    .sidebar {
      display: none;
    }
  }
`;

export default StyledSidebar;
