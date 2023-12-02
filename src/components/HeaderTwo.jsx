export default function HeaderTwo({ page }) {
  return (
    <div className="flex flex-row-reverse space-x-4 space-x-reverse mb-3">
      <h2>
        <span className="span font-light mr-2 md:mr-4">FooFest</span>
        {page}
      </h2>
    </div>
  );
}
