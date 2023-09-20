import { RouterProvider } from 'react-router-dom';
import './App.css';
import roughter from './componant/Roughts/Rougth/Rought';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1440px] m-auto'>
      <RouterProvider router={roughter}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
