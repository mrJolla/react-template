import { SVGProps } from 'react';

import cc from 'classcat';

import { SpritesMap } from '~/types/icon';

export interface IconProps<Group extends keyof SpritesMap>
  extends SVGProps<SVGSVGElement> {
  group: Group;
  name: SpritesMap[Group];
}

export function Icon<Group extends keyof SpritesMap>({
  group,
  name,
  className,
  ...props
}: IconProps<Group>) {
  return (
    <svg className={cc(['fill-current', className])} {...props}>
      <use xlinkHref={`/images/svg-sprites/${group}.svg#${name}`} />
    </svg>
  );
}
