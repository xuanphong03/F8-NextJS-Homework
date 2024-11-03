import { MdOutlineWarning } from "react-icons/md";

export default function MindmapDeletionAlert({ onClose, onDelete }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
        <div className="md:flex items-center">
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h2 className="font-bold">Bạn muốn xóa mindmap này?</h2>
            <p className="text-sm text-gray-700 mt-1">
              Nếu xóa bạn không thể phục hồi dữ liệu
            </p>
          </div>
        </div>
        <div className="text-center md:text-right mt-4 md:flex md:justify-end">
          <button
            onClick={onDelete}
            className="hover:bg-opacity-80 block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
          >
            Có xóa
          </button>
          <button
            onClick={onClose}
            className="hover:bg-opacity-80 block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
          >
            Không
          </button>
        </div>
      </div>
    </div>
  );
}
