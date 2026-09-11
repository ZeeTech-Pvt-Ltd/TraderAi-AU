import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import Layout from '../components/Layout';

export function mount(Page, active) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Layout active={active}>
        <Page />
      </Layout>
    </StrictMode>
  );
}
