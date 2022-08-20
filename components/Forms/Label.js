import { classNames } from 'utils';

export default function Label({ children, className = '', ...props }) {
  return (
    <label
      className={classNames(
        'block text-gray-800 text-base font-semibold mb-1',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
