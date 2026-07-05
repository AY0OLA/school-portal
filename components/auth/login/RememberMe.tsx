type RememberMeProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function RememberMe({ checked, onChange }: RememberMeProps) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300"
      />
      Remember me
    </label>
  );
}
