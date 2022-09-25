const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns unhashed value when input is < 256 in length", () => {
    const event = {
      partitionKey: "asdfghjklqwertyuiopzxcvbnm"
    };
    const output = deterministicPartitionKey(event);
    expect(output.length).toBe(26);
    expect(output).toBe("asdfghjklqwertyuiopzxcvbnm");
  });

  it("Returns json value when type of partitionKey is NOT string and is < 256 in length", () => {
    const partitionKey = { p: "test" }
    const event = {
      partitionKey
    };
    const output = deterministicPartitionKey(event);
    expect(output).toBe(JSON.stringify(partitionKey));
  });

  it("Returns hashed value when type of partitionKey is NOT in event object", () => {
    const partitionKey1 = { p: "test" }
    const event = {
      partitionKey1
    };
    const output = deterministicPartitionKey(event);
    expect(output.length).toBe(128);
    expect(output).not.toBe(JSON.stringify(event));
  });

  it("Returns hashed value when partitionKey is > 256 in length", () => {
    const event = {
      partitionKey: "ftnnkleixximtzmolptzuwedocqzsshmjmkvgwvdkauylapoevkbnrenheehxswojlqakbixeoqtbsvkyodpqfdmfakbqaumwrsmvvjatpntndnndfownuhoabfxcrkmknmbscrvuxowdjjzhhwswgalcxwqmdrrrdruizmrwfduxoronbumljhcytnhtfxhcqtmvyhmtxegvymzdybpodzdyxrkjjdjlnluspaazvtieirpglvxfgzygyovguzoqw"
    };
    const output = deterministicPartitionKey(event);
    expect(output.length).toBe(128);
    expect(output).not.toBe(event.partitionKey);
  });
  
});
