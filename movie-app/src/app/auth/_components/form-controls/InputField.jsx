import "./form-controls.css";

export default function InputField({ id, label, register, errorMessage }) {
  return (
    <>
      <div className="input-field w-full border border-solid border-white rounded h-14 flex items-end">
        <input
          id={id}
          {...register}
          type="text"
          placeholder=""
          autoComplete="off"
          className="bg-transparent px-4 py-2 rounded w-full"
        />
        <label
          htmlFor={id}
          className="label-field text-gray-400 flex items-center px-4 transition-all"
        >
          {label}
        </label>
      </div>
      {errorMessage && (
        <p className="mt-1 px-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </>
  );
}
