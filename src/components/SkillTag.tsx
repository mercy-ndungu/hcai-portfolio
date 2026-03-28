interface SkillTagProps {
  label: string;
}

const SkillTag = ({ label }: SkillTagProps) => (
  <span className="inline-block px-3 py-1 text-[13px] font-body font-medium text-primary bg-card rounded-full border border-border">
    {label}
  </span>
);

export default SkillTag;
