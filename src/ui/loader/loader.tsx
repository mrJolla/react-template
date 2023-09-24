import cc from 'classcat';

import { Icon } from '~/ui/icon/icon';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div
    className={cc([
      'flex flex-1 flex-col items-center justify-center space-y-2 p-4',
      className,
    ])}
  >
    <Icon
      className='h-10 w-10 animate-spin fill-white'
      group='common'
      name='loader'
    />
    <p className='text-center text-base text-white'>Загрузка...</p>
  </div>
);
