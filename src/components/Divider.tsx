export default function Divider() {
  return (
    <div className="flex items-center justify-center py-1">
      <div className="flex items-center gap-3">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
        <div className="h-1.5 w-1.5 rotate-45 bg-gold/40" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
      </div>
    </div>
  );
}
