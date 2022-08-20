import { classNames } from 'utils';

export default function Container({ className = '', children }) {
  return (
    <div className={classNames('max-w-4xl mx-auto px-2', className)}>
      {children}
    </div>
  );
}
