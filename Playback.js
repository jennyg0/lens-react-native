import { Player } from "@livepeer/react-native";
import { parseArweaveTxId, parseCid } from "livepeer/media";

import { useMemo, useState } from "react";

export const DecentralizedStoragePlayback = () => {
  const [url, setUrl] = useState < string > "";

  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);

  return (
    <>
      <Box>
        <Text>IPFS or Arweave URL</Text>
        <TextField
          type="text"
          placeholder="ipfs://... or ar://"
          onChange={(e) => setUrl(e.target.value)}
        />

        {url && !idParsed && (
          <Text>Provided value is not a valid identifier.</Text>
        )}
      </Box>

      {idParsed && (
        <Player
          title={idParsed.id}
          src={url}
          autoPlay
          muted
          autoUrlUpload={{ fallback: true, ipfsGateway: "https://w3s.link" }}
        />
      )}
    </>
  );
};
