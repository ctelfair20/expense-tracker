import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import App from './App.tsx'
import DataProvider from './context/DataProvider.tsx'
import './index.css'

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#613F75',
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
