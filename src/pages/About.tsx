import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { ProfileSection } from '../components/about/ProfileSection';
import { SkillsSection } from '../components/about/SkillsSection';
import { ExperienceSection } from '../components/about/ExperienceSection';

export const About = () => {
  return (
    <div className="bg-black">
      <AboutHero />
      <ProfileSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
};