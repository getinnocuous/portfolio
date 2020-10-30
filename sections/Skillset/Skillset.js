import { Skill } from '../../components/Skill/Skill';
import { SkillGrid } from '../../components/SkillGrid/SkillGrid';
import { skills } from '../../data/skills';

export const Skillset = () => (
  <section>
    <h2>
      <span>Skillset</span>
    </h2>
    <h3>
      <span>Tech</span>
    </h3>
    <SkillGrid>
      {skills.tech.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </SkillGrid>
    <h3>
      <span>Design/UI</span>
    </h3>
    <SkillGrid>
      {skills.design.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </SkillGrid>
  </section>
);
