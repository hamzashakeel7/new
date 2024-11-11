/* eslint-disable react/prop-types */
import { Button } from "../../../shadcn/components/ui/Button";

export function BottomBar({ loading }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-14 md:h-16 items-center justify-end gap-2 border-t bg-white px-6">
      <Button variant="outline" className="text-sm px-3 py-0">
        Edit
      </Button>
      <Button
        type="submit"
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 text-sm px-3 py-0"
      >
        {loading ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}
