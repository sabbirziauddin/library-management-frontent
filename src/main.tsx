import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/index.tsx'

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </StrictMode>
  );
}
