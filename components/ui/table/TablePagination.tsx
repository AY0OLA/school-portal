type Props = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
};

export default function TablePagination({ page, totalPages, setPage }: Props) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <span className="text-sm">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
