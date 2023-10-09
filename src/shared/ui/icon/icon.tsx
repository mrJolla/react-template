import { SVGProps } from 'react';

import cc from 'classcat';

import { SpritesMap } from '~/shared/types/icon.ts';

export type SpriteKey = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`;
}[keyof SpritesMap];

interface Props extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  name: SpriteKey;
}

export const Icon = ({ name, className, ...props }: Props) => {
  const [spriteName, iconName] = name.split('/');

  return (
    <svg
      className={cc(['select-none fill-current text-inherit', className])}
      {...props}
    >
      <use xlinkHref={`/imgs/svg-sprites/${spriteName}.svg#${iconName}`} />
    </svg>
  );
};
