import { withProviders } from 'app/providers';
import AppStyles from 'app/styles';

import MyNetwork from 'pages/my-network';

function App() {
  return (
    <>
      <MyNetwork />
      <AppStyles />
    </>
  );
}

export default withProviders(App);
