import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillName = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;

export const Skill = ({ skill }) => {
  const { component, name } = skill;
  return (
    <SkillContainer>
      {component}
      <SkillName>{name}</SkillName>
    </SkillContainer>
  );
};
