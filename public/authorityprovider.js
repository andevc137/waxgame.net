// A custom cosigner AuthorityProvider for EOSJS v2
// This provider overrides the checks on all keys,
// allowing a partially signed transaction to be
// broadcast to the API node.
class CosignAuthorityProvider {
    constructor(rpc) {
        this.rpc = rpc;
    }

    async getRequiredKeys(args) {
        const { transaction } = args;
        // Iterate over the actions and authorizations
        transaction.actions.forEach((action, ti) => {
            action.authorization.forEach((auth, ai) => {
                // If the authorization matches the expected cosigner
                // then remove it from the transaction while checking
                // for what public keys are required
                if (
                    (auth.actor === "greymassfuel" &&
                        auth.permission === "cosign") ||
                    (["federation", "m.federation"].includes(auth.actor) &&
                        auth.permission === "paybw")
                ) {
                    delete transaction.actions[ti].authorization.splice(ai, 1);
                }
            });
        });
        return convertLegacyPublicKeys(
            (
                await this.rpc.fetch("/v1/chain/get_required_keys", {
                    transaction,
                    available_keys: args.availableKeys,
                })
            ).required_keys
        );
    }
}
