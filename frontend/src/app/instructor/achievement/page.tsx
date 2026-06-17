import { PageTemplate } from '../intro/page';

export default function AchievementPage() {
  return (
    <PageTemplate
      title="경력 및 신기록"
      sections={[
        {
          heading: '자격 및 경력',
          body: `• AIDA Master Instructor
• AIDA Competition Safety Freediver
• 10+ years teaching experience
• 500+ certified students
• International competition safety team member`,
        },
        {
          heading: '개인 기록 (PB)',
          body: `• FIM (Free Immersion): 65m
• CWT (Constant Weight): 58m
• STA (Static Apnea): 6:30
• DYN (Dynamic Apnea): 90m`,
        },
      ]}
    />
  );
}
