import styled from "styled-components";

const TaskStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  transition: background-color 0.3s;
`;

const TaskContentStyle = styled.p`
  flex: 1;
  color: #333;
  font-size: 1rem;
  margin-right: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`

export { TaskStyle, TaskContentStyle, ButtonsContainer };
