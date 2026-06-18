export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-busy="true" aria-label="Loading page">
      <div className="h-10 w-10 rounded-full border-2 border-lid-sand-300 border-t-lid-gold-500 animate-spin" />
    </div>
  );
}
