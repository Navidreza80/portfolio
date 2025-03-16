import { IconType } from 'react-icons';

interface SkillCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function SkillCard({ icon: Icon, title, description }: SkillCardProps) {
  return (
    <div className="glass-card p-6 card-hover">
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="text-3xl text-blue-400" />
        <h3 className="text-xl font-semibold gradient-text">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
} 