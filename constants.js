export default {
    IPA_FETCH_LINK: "https://cdn.discordapp.com/attachments/1015971724895989780/1103441324729978930/Discord_178.0_43611.ipa",
    ENMITY_LOADER: "Enmity.Debug.deb",
    GET_PATCH_TYPE(predicate, inputArg, truePredicate, falsePredicate, fallback) {
        const out = predicate(inputArg);
        switch (out) {
            case true: return truePredicate;
            case false: return falsePredicate;
            default: return fallback;
        }
    },
    FORMAT(someInput) {
        return someInput.split(" ").map((e) => e[0].toUpperCase() + e.slice(1)).join(' ').replace(" ", "").replace(".deb", "");
    },
    Colors: class {
        constructor() {
            this.RED = '\x1b[91m';
            this.GREEN = '\x1b[92m';
            this.BLUE = '\x1b[94m';
            this.PINK = '\x1b[95m';
            this.CYAN = '\x1b[96m';
            this.ENDC = '\x1b[0m';
        }
    }
};
