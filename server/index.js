require("dotenv").config();
const { Client, CryptoTransferTransaction } = require("@hashgraph/sdk");

async function main() {

    const operatorAccount = process.env.ACCOUNT_ID;
    const operatorPrivateKey = process.env.PRIVATE_KEY;


    const client = Client.forTestnet();
    client.setOperator(operatorAccount, operatorPrivateKey);

    const transactionId = await new CryptoTransferTransaction()

        .addSender(operatorAccount, 1)

        .addRecipient("0.0.3", 1)

        .setTransactionMemo("Thanks a lot!")

        .execute(client);

    const receipt = await transactionId.getReceipt(client);

    console.log(receipt);

}

main();