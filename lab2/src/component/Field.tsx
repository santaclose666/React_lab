import React from "react";

interface FieldProps {
  field: string;
  type?: string;
  value: string;
  onTextChange: (c: string) => void;
  error?: string;
}

function Field({
  field,
  type = "text",
  value,
  onTextChange,
  error,
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-700">
        {field}:
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
      />
      <p className="text-red-500 text-xs mt-1">{error!}</p>
    </div>
  );
}

export default Field;
