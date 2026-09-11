export default function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-[1160px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
