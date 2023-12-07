export default function PrimaryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#c5ef1a] mt-3 font-semibold w-full p-3 px-3  text-[15px] md:p-4 md:px-4 text-[#292d32] md:text-[20px] hover:bg-[#292d32] hover:text-[#c5ef1a] hover:outline hover:outline-[var(---border-color)] focus:bg-[#292d32] focus:text-[#c5ef1a]"
    >
      NEXT
    </button>
  );
}
