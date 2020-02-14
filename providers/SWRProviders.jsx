import { DummyAPIProvider } from "../hooks/requests/useDummyAPI";

export const SWRProviders = ({ children }) => (
  <DummyAPIProvider>{children}</DummyAPIProvider>
);
