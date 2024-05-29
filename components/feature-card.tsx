interface CommitmentCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function CommitmentCard({
  title,
  description,
  children,
}: CommitmentCardProps) {
  return (
    <div className="h-[250px] w-[250px] flex flex-col items-center space-y-2 text-center">
      {children}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
