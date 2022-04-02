import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="sm:mb-2 ">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none  ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <div className="col-span-2 h-3 sm:h-6 -mt-1 ">
        <ErrorMessage component="div" name={field.name} className="error text-red-500 leading-3 text-xs sm:text-lg font-bold  truncate hover:overflow-visible hover:whitespace-normal " />
      </div>
    </div>
  )
}
