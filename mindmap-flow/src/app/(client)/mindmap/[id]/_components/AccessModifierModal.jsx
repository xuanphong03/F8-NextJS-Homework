"use client";
import { useState } from "react";
import { SHARE_MODE } from "@/app/constants/share-mode";

export default function AccessModifierModal({
  accessMode,
  mindmapId,
  mindmapName,
  mindmapDesc,
  onClose,
  onUpdate,
}) {
  const [shareMode, setShareMode] = useState(accessMode);

  const handleChangeMode = (e) => {
    setShareMode(e.target.value);
  };

  const handleCancelChangeShareMode = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleUpdateShareMode = async () => {
    if (onUpdate) {
      await onUpdate(shareMode);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          aria-labelledby="modal-headline"
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center share-option">
              <div className="flex items-center mr-4 mb-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="share_mode"
                    onChange={handleChangeMode}
                    value={SHARE_MODE.PRIVATE}
                    checked={shareMode === SHARE_MODE.PRIVATE}
                  />
                  Riêng tư
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="share_mode"
                    onChange={handleChangeMode}
                    value={SHARE_MODE.PUBLIC}
                    checked={shareMode === SHARE_MODE.PUBLIC}
                  />
                  Công khai
                </label>
              </div>
            </div>
            {shareMode === SHARE_MODE.PRIVATE ? (
              <div>
                <p>
                  Nếu chọn riêng tư, chỉ có bạn mới được quyền xem Mindmap này
                </p>
              </div>
            ) : (
              <>
                <div className="group relative">
                  <label
                    htmlFor="url-share"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Liên kết chia sẻ
                  </label>
                  <input
                    id="url-share"
                    type="url"
                    readOnly
                    defaultValue={`${process.env.CLIENT_BASE_URL}/mindmap/${mindmapId}`}
                    className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
                <div className="group relative mt-3">
                  <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    name="name"
                    readOnly
                    placeholder="Chưa có tiêu đề..."
                    defaultValue={mindmapName}
                    className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
                <div className="group relative mt-3">
                  <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    Mô tả
                  </label>
                  <textarea
                    name="desc"
                    readOnly
                    placeholder="Chưa có mô tả..."
                    defaultValue={mindmapDesc}
                    className="py-2 resize-none peer h-20 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              </>
            )}
          </div>
          <div className="bg-gray-200 px-4 py-3 text-right">
            <button
              type="button"
              onClick={handleCancelChangeShareMode}
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
            >
              Đóng
            </button>
            <button
              type="submit"
              onClick={handleUpdateShareMode}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
            >
              Lưu lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
