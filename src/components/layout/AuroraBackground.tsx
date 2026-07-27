/** Static aurora gradient backdrop. Sits behind everything.
 *  No JS-driven animation — pure CSS for fast load and smooth scrolling. */
export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-[0.35] mask-fade-b" />
      <div
        className="absolute -top-[20%] -left-[10%] h-[55vh] w-[55vh] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(79,124,255,0.32), transparent 60%)' }}
      />
      <div
        className="absolute top-[30%] -right-[10%] h-[60vh] w-[60vh] rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.26), transparent 60%)' }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[50vh] w-[50vh] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0,213,255,0.18), transparent 60%)' }}
      />
      <div className="absolute inset-0 noise opacity-40" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.6) 100%)' }} />
    </div>
  );
}
