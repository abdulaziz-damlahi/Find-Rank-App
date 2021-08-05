var countrypicker = function (a) {
    "use strict";
    a = a && a.hasOwnProperty("default") ? a.default : a;
    var S = [["AF", "AFG", "004", "ISO 3166-2:AF"], ["AX", "ALA", "248", "ISO 3166-2:AX"], ["AL", "ALB", "008", "ISO 3166-2:AL"], ["DZ", "DZA", "012", "ISO 3166-2:DZ"], ["AS", "ASM", "016", "ISO 3166-2:AS"], ["AD", "AND", "020", "ISO 3166-2:AD"], ["AO", "AGO", "024", "ISO 3166-2:AO"], ["AI", "AIA", "660", "ISO 3166-2:AI"], ["AQ", "ATA", "010", "ISO 3166-2:AQ"], ["AG", "ATG", "028", "ISO 3166-2:AG"], ["AR", "ARG", "032", "ISO 3166-2:AR"], ["AM", "ARM", "051", "ISO 3166-2:AM"], ["AW", "ABW", "533", "ISO 3166-2:AW"], ["AU", "AUS", "036", "ISO 3166-2:AU"], ["AT", "AUT", "040", "ISO 3166-2:AT"], ["AZ", "AZE", "031", "ISO 3166-2:AZ"], ["BS", "BHS", "044", "ISO 3166-2:BS"], ["BH", "BHR", "048", "ISO 3166-2:BH"], ["BD", "BGD", "050", "ISO 3166-2:BD"], ["BB", "BRB", "052", "ISO 3166-2:BB"], ["BY", "BLR", "112", "ISO 3166-2:BY"], ["BE", "BEL", "056", "ISO 3166-2:BE"], ["BZ", "BLZ", "084", "ISO 3166-2:BZ"], ["BJ", "BEN", "204", "ISO 3166-2:BJ"], ["BM", "BMU", "060", "ISO 3166-2:BM"], ["BT", "BTN", "064", "ISO 3166-2:BT"], ["BO", "BOL", "068", "ISO 3166-2:BO"], ["BQ", "BES", "535", "ISO 3166-2:BQ"], ["BA", "BIH", "070", "ISO 3166-2:BA"], ["BW", "BWA", "072", "ISO 3166-2:BW"], ["BV", "BVT", "074", "ISO 3166-2:BV"], ["BR", "BRA", "076", "ISO 3166-2:BR"], ["IO", "IOT", "086", "ISO 3166-2:IO"], ["BN", "BRN", "096", "ISO 3166-2:BN"], ["BG", "BGR", "100", "ISO 3166-2:BG"], ["BF", "BFA", "854", "ISO 3166-2:BF"], ["BI", "BDI", "108", "ISO 3166-2:BI"], ["KH", "KHM", "116", "ISO 3166-2:KH"], ["CM", "CMR", "120", "ISO 3166-2:CM"], ["CA", "CAN", "124", "ISO 3166-2:CA"], ["CV", "CPV", "132", "ISO 3166-2:CV"], ["KY", "CYM", "136", "ISO 3166-2:KY"], ["CF", "CAF", "140", "ISO 3166-2:CF"], ["TD", "TCD", "148", "ISO 3166-2:TD"], ["CL", "CHL", "152", "ISO 3166-2:CL"], ["CN", "CHN", "156", "ISO 3166-2:CN"], ["CX", "CXR", "162", "ISO 3166-2:CX"], ["CC", "CCK", "166", "ISO 3166-2:CC"], ["CO", "COL", "170", "ISO 3166-2:CO"], ["KM", "COM", "174", "ISO 3166-2:KM"], ["CG", "COG", "178", "ISO 3166-2:CG"], ["CD", "COD", "180", "ISO 3166-2:CD"], ["CK", "COK", "184", "ISO 3166-2:CK"], ["CR", "CRI", "188", "ISO 3166-2:CR"], ["CI", "CIV", "384", "ISO 3166-2:CI"], ["HR", "HRV", "191", "ISO 3166-2:HR"], ["CU", "CUB", "192", "ISO 3166-2:CU"], ["CW", "CUW", "531", "ISO 3166-2:CW"], ["CY", "CYP", "196", "ISO 3166-2:CY"], ["CZ", "CZE", "203", "ISO 3166-2:CZ"], ["DK", "DNK", "208", "ISO 3166-2:DK"], ["DJ", "DJI", "262", "ISO 3166-2:DJ"], ["DM", "DMA", "212", "ISO 3166-2:DM"], ["DO", "DOM", "214", "ISO 3166-2:DO"], ["EC", "ECU", "218", "ISO 3166-2:EC"], ["EG", "EGY", "818", "ISO 3166-2:EG"], ["SV", "SLV", "222", "ISO 3166-2:SV"], ["GQ", "GNQ", "226", "ISO 3166-2:GQ"], ["ER", "ERI", "232", "ISO 3166-2:ER"], ["EE", "EST", "233", "ISO 3166-2:EE"], ["ET", "ETH", "231", "ISO 3166-2:ET"], ["FK", "FLK", "238", "ISO 3166-2:FK"], ["FO", "FRO", "234", "ISO 3166-2:FO"], ["FJ", "FJI", "242", "ISO 3166-2:FJ"], ["FI", "FIN", "246", "ISO 3166-2:FI"], ["FR", "FRA", "250", "ISO 3166-2:FR"], ["GF", "GUF", "254", "ISO 3166-2:GF"], ["PF", "PYF", "258", "ISO 3166-2:PF"], ["TF", "ATF", "260", "ISO 3166-2:TF"], ["GA", "GAB", "266", "ISO 3166-2:GA"], ["GM", "GMB", "270", "ISO 3166-2:GM"], ["GE", "GEO", "268", "ISO 3166-2:GE"], ["DE", "DEU", "276", "ISO 3166-2:DE"], ["GH", "GHA", "288", "ISO 3166-2:GH"], ["GI", "GIB", "292", "ISO 3166-2:GI"], ["GR", "GRC", "300", "ISO 3166-2:GR"], ["GL", "GRL", "304", "ISO 3166-2:GL"], ["GD", "GRD", "308", "ISO 3166-2:GD"], ["GP", "GLP", "312", "ISO 3166-2:GP"], ["GU", "GUM", "316", "ISO 3166-2:GU"], ["GT", "GTM", "320", "ISO 3166-2:GT"], ["GG", "GGY", "831", "ISO 3166-2:GG"], ["GN", "GIN", "324", "ISO 3166-2:GN"], ["GW", "GNB", "624", "ISO 3166-2:GW"], ["GY", "GUY", "328", "ISO 3166-2:GY"], ["HT", "HTI", "332", "ISO 3166-2:HT"], ["HM", "HMD", "334", "ISO 3166-2:HM"], ["VA", "VAT", "336", "ISO 3166-2:VA"], ["HN", "HND", "340", "ISO 3166-2:HN"], ["HK", "HKG", "344", "ISO 3166-2:HK"], ["HU", "HUN", "348", "ISO 3166-2:HU"], ["IS", "ISL", "352", "ISO 3166-2:IS"], ["IN", "IND", "356", "ISO 3166-2:IN"], ["ID", "IDN", "360", "ISO 3166-2:ID"], ["IR", "IRN", "364", "ISO 3166-2:IR"], ["IQ", "IRQ", "368", "ISO 3166-2:IQ"], ["IE", "IRL", "372", "ISO 3166-2:IE"], ["IM", "IMN", "833", "ISO 3166-2:IM"], ["IL", "ISR", "376", "ISO 3166-2:IL"], ["IT", "ITA", "380", "ISO 3166-2:IT"], ["JM", "JAM", "388", "ISO 3166-2:JM"], ["JP", "JPN", "392", "ISO 3166-2:JP"], ["JE", "JEY", "832", "ISO 3166-2:JE"], ["JO", "JOR", "400", "ISO 3166-2:JO"], ["KZ", "KAZ", "398", "ISO 3166-2:KZ"], ["KE", "KEN", "404", "ISO 3166-2:KE"], ["KI", "KIR", "296", "ISO 3166-2:KI"], ["KP", "PRK", "408", "ISO 3166-2:KP"], ["KR", "KOR", "410", "ISO 3166-2:KR"], ["KW", "KWT", "414", "ISO 3166-2:KW"], ["KG", "KGZ", "417", "ISO 3166-2:KG"], ["LA", "LAO", "418", "ISO 3166-2:LA"], ["LV", "LVA", "428", "ISO 3166-2:LV"], ["LB", "LBN", "422", "ISO 3166-2:LB"], ["LS", "LSO", "426", "ISO 3166-2:LS"], ["LR", "LBR", "430", "ISO 3166-2:LR"], ["LY", "LBY", "434", "ISO 3166-2:LY"], ["LI", "LIE", "438", "ISO 3166-2:LI"], ["LT", "LTU", "440", "ISO 3166-2:LT"], ["LU", "LUX", "442", "ISO 3166-2:LU"], ["MO", "MAC", "446", "ISO 3166-2:MO"], ["MK", "MKD", "807", "ISO 3166-2:MK"], ["MG", "MDG", "450", "ISO 3166-2:MG"], ["MW", "MWI", "454", "ISO 3166-2:MW"], ["MY", "MYS", "458", "ISO 3166-2:MY"], ["MV", "MDV", "462", "ISO 3166-2:MV"], ["ML", "MLI", "466", "ISO 3166-2:ML"], ["MT", "MLT", "470", "ISO 3166-2:MT"], ["MH", "MHL", "584", "ISO 3166-2:MH"], ["MQ", "MTQ", "474", "ISO 3166-2:MQ"], ["MR", "MRT", "478", "ISO 3166-2:MR"], ["MU", "MUS", "480", "ISO 3166-2:MU"], ["YT", "MYT", "175", "ISO 3166-2:YT"], ["MX", "MEX", "484", "ISO 3166-2:MX"], ["FM", "FSM", "583", "ISO 3166-2:FM"], ["MD", "MDA", "498", "ISO 3166-2:MD"], ["MC", "MCO", "492", "ISO 3166-2:MC"], ["MN", "MNG", "496", "ISO 3166-2:MN"], ["ME", "MNE", "499", "ISO 3166-2:ME"], ["MS", "MSR", "500", "ISO 3166-2:MS"], ["MA", "MAR", "504", "ISO 3166-2:MA"], ["MZ", "MOZ", "508", "ISO 3166-2:MZ"], ["MM", "MMR", "104", "ISO 3166-2:MM"], ["NA", "NAM", "516", "ISO 3166-2:NA"], ["NR", "NRU", "520", "ISO 3166-2:NR"], ["NP", "NPL", "524", "ISO 3166-2:NP"], ["NL", "NLD", "528", "ISO 3166-2:NL"], ["NC", "NCL", "540", "ISO 3166-2:NC"], ["NZ", "NZL", "554", "ISO 3166-2:NZ"], ["NI", "NIC", "558", "ISO 3166-2:NI"], ["NE", "NER", "562", "ISO 3166-2:NE"], ["NG", "NGA", "566", "ISO 3166-2:NG"], ["NU", "NIU", "570", "ISO 3166-2:NU"], ["NF", "NFK", "574", "ISO 3166-2:NF"], ["MP", "MNP", "580", "ISO 3166-2:MP"], ["NO", "NOR", "578", "ISO 3166-2:NO"], ["OM", "OMN", "512", "ISO 3166-2:OM"], ["PK", "PAK", "586", "ISO 3166-2:PK"], ["PW", "PLW", "585", "ISO 3166-2:PW"], ["PS", "PSE", "275", "ISO 3166-2:PS"], ["PA", "PAN", "591", "ISO 3166-2:PA"], ["PG", "PNG", "598", "ISO 3166-2:PG"], ["PY", "PRY", "600", "ISO 3166-2:PY"], ["PE", "PER", "604", "ISO 3166-2:PE"], ["PH", "PHL", "608", "ISO 3166-2:PH"], ["PN", "PCN", "612", "ISO 3166-2:PN"], ["PL", "POL", "616", "ISO 3166-2:PL"], ["PT", "PRT", "620", "ISO 3166-2:PT"], ["PR", "PRI", "630", "ISO 3166-2:PR"], ["QA", "QAT", "634", "ISO 3166-2:QA"], ["RE", "REU", "638", "ISO 3166-2:RE"], ["RO", "ROU", "642", "ISO 3166-2:RO"], ["RU", "RUS", "643", "ISO 3166-2:RU"], ["RW", "RWA", "646", "ISO 3166-2:RW"], ["BL", "BLM", "652", "ISO 3166-2:BL"], ["SH", "SHN", "654", "ISO 3166-2:SH"], ["KN", "KNA", "659", "ISO 3166-2:KN"], ["LC", "LCA", "662", "ISO 3166-2:LC"], ["MF", "MAF", "663", "ISO 3166-2:MF"], ["PM", "SPM", "666", "ISO 3166-2:PM"], ["VC", "VCT", "670", "ISO 3166-2:VC"], ["WS", "WSM", "882", "ISO 3166-2:WS"], ["SM", "SMR", "674", "ISO 3166-2:SM"], ["ST", "STP", "678", "ISO 3166-2:ST"], ["SA", "SAU", "682", "ISO 3166-2:SA"], ["SN", "SEN", "686", "ISO 3166-2:SN"], ["RS", "SRB", "688", "ISO 3166-2:RS"], ["SC", "SYC", "690", "ISO 3166-2:SC"], ["SL", "SLE", "694", "ISO 3166-2:SL"], ["SG", "SGP", "702", "ISO 3166-2:SG"], ["SX", "SXM", "534", "ISO 3166-2:SX"], ["SK", "SVK", "703", "ISO 3166-2:SK"], ["SI", "SVN", "705", "ISO 3166-2:SI"], ["SB", "SLB", "090", "ISO 3166-2:SB"], ["SO", "SOM", "706", "ISO 3166-2:SO"], ["ZA", "ZAF", "710", "ISO 3166-2:ZA"], ["GS", "SGS", "239", "ISO 3166-2:GS"], ["SS", "SSD", "728", "ISO 3166-2:SS"], ["ES", "ESP", "724", "ISO 3166-2:ES"], ["LK", "LKA", "144", "ISO 3166-2:LK"], ["SD", "SDN", "729", "ISO 3166-2:SD"], ["SR", "SUR", "740", "ISO 3166-2:SR"], ["SJ", "SJM", "744", "ISO 3166-2:SJ"], ["SZ", "SWZ", "748", "ISO 3166-2:SZ"], ["SE", "SWE", "752", "ISO 3166-2:SE"], ["CH", "CHE", "756", "ISO 3166-2:CH"], ["SY", "SYR", "760", "ISO 3166-2:SY"], ["TW", "TWN", "158", "ISO 3166-2:TW"], ["TJ", "TJK", "762", "ISO 3166-2:TJ"], ["TZ", "TZA", "834", "ISO 3166-2:TZ"], ["TH", "THA", "764", "ISO 3166-2:TH"], ["TL", "TLS", "626", "ISO 3166-2:TL"], ["TG", "TGO", "768", "ISO 3166-2:TG"], ["TK", "TKL", "772", "ISO 3166-2:TK"], ["TO", "TON", "776", "ISO 3166-2:TO"], ["TT", "TTO", "780", "ISO 3166-2:TT"], ["TN", "TUN", "788", "ISO 3166-2:TN"], ["TR", "TUR", "792", "ISO 3166-2:TR"], ["TM", "TKM", "795", "ISO 3166-2:TM"], ["TC", "TCA", "796", "ISO 3166-2:TC"], ["TV", "TUV", "798", "ISO 3166-2:TV"], ["UG", "UGA", "800", "ISO 3166-2:UG"], ["UA", "UKR", "804", "ISO 3166-2:UA"], ["AE", "ARE", "784", "ISO 3166-2:AE"], ["GB", "GBR", "826", "ISO 3166-2:GB"], ["US", "USA", "840", "ISO 3166-2:US"], ["UM", "UMI", "581", "ISO 3166-2:UM"], ["UY", "URY", "858", "ISO 3166-2:UY"], ["UZ", "UZB", "860", "ISO 3166-2:UZ"], ["VU", "VUT", "548", "ISO 3166-2:VU"], ["VE", "VEN", "862", "ISO 3166-2:VE"], ["VN", "VNM", "704", "ISO 3166-2:VN"], ["VG", "VGB", "092", "ISO 3166-2:VG"], ["VI", "VIR", "850", "ISO 3166-2:VI"], ["WF", "WLF", "876", "ISO 3166-2:WF"], ["EH", "ESH", "732", "ISO 3166-2:EH"], ["YE", "YEM", "887", "ISO 3166-2:YE"], ["ZM", "ZMB", "894", "ISO 3166-2:ZM"], ["ZW", "ZWE", "716", "ISO 3166-2:ZW"], ["XK", "XKX", "", "ISO 3166-2:XK"]],
        I = Object.freeze({ default: S }), n = {}, e = {}, O = {}, t = {}, i = {};

    function r(a) {return String("000" + (a || "")).slice(-3)}

    function o(a) {return O[a]}

    function M(a) {return e[a]}

    function u(a) {
        var S = r(a);
        return M(t[S])
    }

    function A(a) {
        var S = r(a);
        return t[S]
    }

    function l(a) {
        if ("string" == typeof a) {
            if (/^[0-9]*$/.test(a)) return A(a);
            if (2 === a.length) return a.toUpperCase();
            if (3 === a.length) return o(a.toUpperCase())
        }
        if ("number" == typeof a) return A(a)
    }

    (I && S || I).forEach(function (a) {
        var S = a;
        e[S[0]] = S[1], O[S[1]] = S[0], t[S[2]] = S[0], i[S[0]] = S[2]
    });
    var s = {
        registerLocale: function (a) {
            if (!a.locale) throw new TypeError("Missing localeData.locale");
            if (!a.countries) throw new TypeError("Missing localeData.countries");
            n[a.locale] = a.countries
        },
        alpha3ToAlpha2: o,
        alpha2ToAlpha3: M,
        alpha3ToNumeric: function (a) {return i[o(a)]},
        alpha2ToNumeric: function (a) {return i[a]},
        numericToAlpha3: u,
        numericToAlpha2: A,
        toAlpha3: function (a) {
            if ("string" == typeof a) {
                if (/^[0-9]*$/.test(a)) return u(a);
                if (2 === a.length) return M(a.toUpperCase());
                if (3 === a.length) return a.toUpperCase()
            }
            if ("number" == typeof a) return u(a)
        },
        toAlpha2: l,
        getName: function (a, S) {try {return n[S.toLowerCase()][l(a)]} catch (a) {return}},
        getNames: function (a) {
            var S = n[a.toLowerCase()];
            return void 0 === S ? {} : S
        },
        getAlpha2Code: function (a, S) {
            try {
                var I, e = n[S.toLowerCase()];
                for (I in e) if (e.hasOwnProperty(I) && e[I].toLowerCase() === a.toLowerCase()) return I;
                return
            } catch (a) {return}
        },
        getAlpha2Codes: function () {return e},
        getAlpha3Code: function (a, S) {
            var I = this.getAlpha2Code(a, S);
            return I ? this.toAlpha3(I) : void 0
        },
        getAlpha3Codes: function () {return O},
        getNumericCodes: function () {return t},
        langs: function () {return Object.keys(n)},
        isValid: function (a) {return O.hasOwnProperty(a) || e.hasOwnProperty(a) || t.hasOwnProperty(a)}
    }, C = {
        locale: "en", countries: {
            aa: "select a country",
            AR: "Argentina",
            AU: "Australia",
            AT: "Austria",
            BE: "Belgium",
            BR: "Brazil",
            BG: "Bulgaria",
            CA: "Canada",
            CL: "Chile",
            CN: "China",
            CO: "Colombia",
            CZ: "Czech Republic",
            DK: "Denmark",
            EC: "Ecuador",
            EG: "Egypt",
            FI: "Finland",
            FR: "France",
            DE: "Germany",
            GR: "Greece",
            HU: "Hungary",
            IN: "India",
            IE: "Ireland",
            IL: "Israel",
            IT: "Italy",
            JP: "Japan",
            KR: "South Korea",
            LU: "Luxembourg",
            MX: "Mexico",
            MA: "Morocco",
            NG: "Nigeria",
            ES: "Spain",
            LK: "Sri Lanka",
            TR: "turkey",
            CH: "Switzerland",
            AE: "United Arab Emirates",
            GB: "United Kingdom",
        }
    };
    s.registerLocale(C);
    var G = s.getNames("en"), T = Object.keys(G).map(function (a) {return { name: G[a], code: a }}), N = function (S) {
        a(this).each(function (S, I) {
            var n = a(I), e = n.data("flag"), O = T, t = n.data("countries");
            t && t.length && (t = t.toUpperCase().split(","), O = O.filter(function (a) {return t.includes(a.code)}));
            var i = [];
            e ? a.each(O, function (a, S) {i.push('<option\n\t\t\t\t\t\tdata-tokens="' + S.code + " " + S.name + '"\n\t\t\t\t\t\tdata-icon="inline-flag flag ' + S.code.toLowerCase() + '"\n\t\t\t\t\t\tclass="option-with-flag"\n\t\t\t\t\t\tvalue="' + S.code + '">' + S.name + "</option>")}) : a.each(O, function (a, S) {i.push('<option\n\t\t\t\t\tdata-countrycode="' + S.code + '\n\t\t\t\t\tdata-tokens="' + S.code + " " + S.name + '"\n\t\t\t\t\tvalue="' + S.code + '">' + S.name + "</option>")}), n.addClass("f16").html(i.join("\n"));
            var r = n.data("default");
            r && n.val(r.split(",").map(function (a) {return a.trim()}))
        })
    };
    return a.fn.countrypicker = N, a(".countrypicker").countrypicker(), N
}($);
//# sourceMappingURL=bootstrap-select-country.min.js.map
