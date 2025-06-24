import Resolver from "@forge/resolver";
import api, { route } from "@forge/api";

const resolver = new Resolver();

resolver.define("getText", async (req) => {
  const response = await api
    .asUser()
    .requestConfluence(route`/wiki/rest/api/user/current`, {
      headers: {
        Accept: "application/json",
      },
    });

  // console.log(`Response: ${response.status} ${response.statusText}`);
  const currentUser = await response.json();
  //console.log(currentUser.displayName);
  return currentUser.displayName;
});

export const handler = resolver.getDefinitions();
