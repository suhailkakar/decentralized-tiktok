import { createReactClient } from "@livepeer/react-native";
import { studioProvider } from "livepeer/providers/studio";

const LPClient = createReactClient({
	provider: studioProvider({ apiKey: "2cedff44-a68e-4149-9345-e2b25b1cdbd2" }),
});

export default LPClient;