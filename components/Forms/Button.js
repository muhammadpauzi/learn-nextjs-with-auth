import Spinner from 'components/Spinner';
import { classNames } from 'utils';

export default function Button({
  processing = false,
  processingText = null,
  children,
  className = '',
  ...props
}) {
  return (
    <button
      className={classNames(
        'inline-flex items-center px-4 py-2 font-bold leading-6 text-sm shadow rounded-md text-white bg-me-primary hover:bg-me-primary transition ease-in-out duration-150',
        className,
        processing && 'cursor-not-allowed opacity-70'
      )}
      {...props}
    >
      {processing && <Spinner />}
      {processing && processingText ? processingText : children}
    </button>
  );
}
