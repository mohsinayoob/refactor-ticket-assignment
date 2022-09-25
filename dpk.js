const crypto = require("crypto");

const generateHash = (key) => crypto.createHash("sha3-512").update(key).digest("hex");

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  if (!event) return TRIVIAL_PARTITION_KEY; // no event return trivial

  if (event.partitionKey) {
    const partitionKey = typeof event.partitionKey !== "string" ? JSON.stringify(event.partitionKey) : event.partitionKey;
    if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) return generateHash(partitionKey);

    return partitionKey
  }

  //no partition key then event should be converted to json and hashed
  return generateHash(JSON.stringify(event)); //length for this would not increase than 128 beacuse its hashed
};

module.exports = {
  deterministicPartitionKey
}