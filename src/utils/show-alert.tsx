import toast from 'react-hot-toast';

import { ALERT_TYPES } from '~/constants/alert-types';
import { Icon } from '~/ui/icon/icon';

export interface AlertProps {
  alertTitle?: string;
  message?: string;
  type?: 'error' | 'success' | 'warning' | 'info';
}

export const showAlert = ({
  alertTitle,
  message = '',
  type = 'error',
}: AlertProps) => {
  const { icon, bgColor, borderColor, iconColor, title } = ALERT_TYPES[type];

  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } flex w-full max-w-xs rounded-xl border-2 bg-white p-3 shadow-lg`}
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
        }}
      >
        <div className='flex flex-1'>
          <div
            className='flex h-10 w-10 items-center justify-center rounded-full shadow-lg'
            style={{
              backgroundColor: iconColor,
              boxShadow: `0 10px 15px -3px ${iconColor}80, 0 4px 6px -4px ${iconColor}80`,
            }}
          >
            <img
              alt=''
              className='h-6 w-6'
              src={`/images/icons/toast/${icon}.svg`}
            />
          </div>

          <div className='flex-1 px-4 font-medium'>
            <p className='text-base text-dark'>{alertTitle || title}</p>
            <p className='text-xs'>{message || ''}</p>
          </div>
        </div>

        <button
          className='mt-1 flex h-8 w-8 items-center justify-center rounded-xl border border-border/20 bg-white text-dark'
          onClick={() => toast.dismiss(t.id)}
        >
          <Icon
            className='h-3 w-3 fill-current'
            group='common'
            name='br-cross'
          />
        </button>
      </div>
    ),
    { duration: 3000 },
  );
};
