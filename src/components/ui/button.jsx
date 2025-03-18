export function Button({ children, onClick, className, variant }) {
    const base = "px-4 py-2 rounded-lg";
    const styles =
      variant === "secondary"
        ? "bg-yellow-400 text-black"
        : variant === "outline"
        ? "border border-gray-400"
        : "bg-blue-500 text-white";
  
    return (
      <button onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
      </button>
    );
  }
  