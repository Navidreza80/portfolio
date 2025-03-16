interface StatsCardProps {
  number: string;
  label: string;
}

export default function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="glass-card p-6 text-center card-hover">
      <h3 className="text-3xl font-bold gradient-text mb-2">{number}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
} 