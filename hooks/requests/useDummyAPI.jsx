import { createRequestHook } from "../../utils/swr";

export const [DummyAPIProvider, useDummyAPI] = createRequestHook({
  url: "https://randomuser.me/api/",
  revalidatorName: "revalidateDummyAPI",
  SWRRegistryData: {
    url: "https://randomuser.me/api/",
    description:
      "Gets random user data from. Used for a demo of SWR. Gets random user data from. Used for a demo of SWR. Gets random user data from.",
    file: "/hooks/requests/useDummyAPI.jsx",
    providerName: "DummyAPIProvider",
    hookName: "useDummyAPI"
  }
});
