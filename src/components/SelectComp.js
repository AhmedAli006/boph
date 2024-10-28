import React from "react";

function SelectComp({ value, onChange }) {
  return (
    <label className="text-gray-700 mb-8 " for="roles">
      <select
        id="role"
        className="  bg-white border border-gray-300 rounded-xl w-full py-2 px-4 shadow-sm h-12  focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name="role"
        value={value}
        onChange={onChange}
      >
        <option value="">Select a Role</option>
        <option value="patient">Patient</option>
        <option value="poctor">Doctor</option>
        {/* <option value="Ministry">Ministry</option> */}
      </select>
    </label>
  );
}

export default SelectComp;
