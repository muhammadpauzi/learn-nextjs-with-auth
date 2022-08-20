import { classNames } from 'utils';

export default function Input({ className = '', ...props }) {
  return (
    <input
      className={classNames(
        'w-full block border-2 border-gray-200 py-2.5 px-3 focus:border-me-primary sm:text-base rounded-md outline-none duration-150 transition focus:shadow-sm',
        className
      )}
      {...props}
    />
  );
}
