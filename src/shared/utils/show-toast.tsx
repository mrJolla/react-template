import toast from 'react-hot-toast';

import { SpritesMap } from '~/shared/types/icon.ts';
import { Icon } from '~/shared/ui/icon/icon.tsx';

type Props = {
  alertTitle?: string;
  message?: string;
  type?: SpritesMap['toast'];
};

export const ALERT_TYPES = {
  error: {
    bgColor: '#fbeeeb',
    borderColor: '#eed0c6',
    icon: 'error',
    iconColor: '#fc5758',
    title: 'Ошибка',
  },
  info: {
    bgColor: '#e7effa',
    borderColor: '#b4ccee',
    icon: 'info',
    iconColor: '#3086eb',
    title: 'Инфо',
  },
  success: {
    bgColor: '#f1f9f5',
    borderColor: '#cee8d2',
    icon: 'success',
    iconColor: '#50dc6c',
    title: 'Успешно',
  },
  warning: {
    bgColor: '#fff9eb',
    borderColor: '#f4e0b9',
    icon: 'warning',
    iconColor: '#ffc122',
    title: 'Предупреждение',
  },
};

export const showToast = ({
  alertTitle,
  message = '',
  type = 'error',
}: Props) => {
  const { icon, bgColor, borderColor, iconColor, title } = ALERT_TYPES[type];

  toast.custom((t) => (
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
          className='size-10 rounded-full shadow-lg flex-center'
          style={{
            backgroundColor: iconColor,
            boxShadow: `0 10px 15px -3px ${iconColor}80, 0 4px 6px -4px ${iconColor}80`,
          }}
        >
          <Icon
            className='size-6 fill-white'
            name={`toast/${icon as SpritesMap['toast']}`}
          />
        </div>

        <div className='flex-1 px-4 font-medium'>
          <p className='text-base'>{alertTitle || title}</p>
          <p className='text-xs'>{message || ''}</p>
        </div>
      </div>

      <button
        className='mt-1 size-8 rounded-xl border border-black/20 bg-white text-black flex-center'
        onClick={() => toast.dismiss(t.id)}
      >
        <Icon
          className='size-3 fill-current'
          name='common/cross-bold'
        />
      </button>
    </div>
  ));
};
