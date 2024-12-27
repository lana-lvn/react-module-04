
// import UseContextExample from './UseContextExample/UseContextExample';
// import UseMemoExample from './useMemoExample';
// import UseRefForwardRefExample from './UseRefForwardRefExample';
// import UseRefRenderCountExample from './UseRefRenderCountExample';
// import UseRefStoreValueExample from './UseRefStoreValueExample';

import { useContext } from "react";
import Header from "./Header/Header";
import { authContext } from "./context/AuthProvider/AuthProvider";
import FormLogin from "./FormLogin";




const App = () => {
  
  const { user } = useContext(authContext);

  if (!user) {
    return <FormLogin />
  }

  return (
    

    <div>
      <h2>Hooks</h2>
      <Header/>
      {/* <UseMemoExample /> */}
      {/* <UseRefRenderCountExample /> */}
      {/* <UseRefStoreValueExample /> */}
      {/* <UseRefForwardRefExample /> */}
      {/* <UseContextExample auto={auto} /> */}
      <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dignissimos
        consequuntur perspiciatis recusandae possimus
        aperiam dolores fuga cupiditate. Expedita porro ducimus
        quisquam reprehenderit quis explicabo autem quod deleniti culpa veniam!
      </h2>
    </div>


      
  );
};
export default App;
