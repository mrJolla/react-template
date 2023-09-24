import { useIsAuthorized } from '~/hooks/use-is-authorized';
import { AuthStack } from '~/pages/auth-pages/auth-stack';
import { MainStack } from '~/pages/main-pages/main-stack';
import { Loader } from '~/ui/loader/loader';
import { useApp } from '~/use-app';

export const App = () => {
  const { isLoading } = useApp();
  const isLogin = useIsAuthorized();

  if (isLoading) return <Loader />;

  if (!isLogin) return <AuthStack />;

  return <MainStack />;
};
