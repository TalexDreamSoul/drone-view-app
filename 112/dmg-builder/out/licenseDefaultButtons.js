"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultButtons = void 0;
function getDefaultButtons(langWithRegion, id, name) {
    switch (langWithRegion) {
        case "de_DE":
            return `data 'STR#' (${id}, "${name}") {
  $"0006 0744 6575 7473 6368 0B41 6B7A 6570"
  $"7469 6572 656E 0841 626C 6568 6E65 6E07"
  $"4472 7563 6B65 6E0A 5369 6368 6572 6E2E"
  $"2E2E E74B 6C69 636B 656E 2053 6965 2069"
  $"6E20 D241 6B7A 6570 7469 6572 656E D32C"
  $"2077 656E 6E20 5369 6520 6D69 7420 6465"
  $"6E20 4265 7374 696D 6D75 6E67 656E 2064"
  $"6573 2053 6F66 7477 6172 652D 4C69 7A65"
  $"6E7A 7665 7274 7261 6773 2065 696E 7665"
  $"7273 7461 6E64 656E 2073 696E 642E 2046"
  $"616C 6C73 206E 6963 6874 2C20 6269 7474"
  $"6520 D241 626C 6568 6E65 6ED3 2061 6E6B"
  $"6C69 636B 656E 2E20 5369 6520 6B9A 6E6E"
  $"656E 2064 6965 2053 6F66 7477 6172 6520"
  $"6E75 7220 696E 7374 616C 6C69 6572 656E"
  $"2C20 7765 6E6E 2053 6965 20D2 416B 7A65"
  $"7074 6965 7265 6ED3 2061 6E67 656B 6C69"
  $"636B 7420 6861 6265 6E2E"
};`;
        case "fr_FR":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 0846 7261 6E8D 6169 7308 4163 6365"
	$"7074 6572 0752 6566 7573 6572 0849 6D70"
	$"7269 6D65 720E 456E 7265 6769 7374 7265"
	$"722E 2E2E BA53 6920 766F 7573 2061 6363"
	$"6570 7465 7A20 6C65 7320 7465 726D 6573"
	$"2064 6520 6C61 2070 728E 7365 6E74 6520"
	$"6C69 6365 6E63 652C 2063 6C69 7175 657A"
	$"2073 7572 2022 4163 6365 7074 6572 2220"
	$"6166 696E 2064 2769 6E73 7461 6C6C 6572"
	$"206C 6520 6C6F 6769 6369 656C 2E20 5369"
	$"2076 6F75 7320 6E27 9074 6573 2070 6173"
	$"2064 2761 6363 6F72 6420 6176 6563 206C"
	$"6573 2074 6572 6D65 7320 6465 206C 6120"
	$"6C69 6365 6E63 652C 2063 6C69 7175 657A"
	$"2073 7572 2022 5265 6675 7365 7222 2E"
};`;
        case "fr_CA":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 1146 7261 6E8D 6169 7320 6361 6E61"
	$"6469 656E 0841 6363 6570 7465 7207 5265"
	$"6675 7365 7208 496D 7072 696D 6572 0E45"
	$"6E72 6567 6973 7472 6572 2E2E 2EBA 5369"
	$"2076 6F75 7320 6163 6365 7074 657A 206C"
	$"6573 2074 6572 6D65 7320 6465 206C 6120"
	$"7072 8E73 656E 7465 206C 6963 656E 6365"
	$"2C20 636C 6971 7565 7A20 7375 7220 2241"
	$"6363 6570 7465 7222 2061 6669 6E20 6427"
	$"696E 7374 616C 6C65 7220 6C65 206C 6F67"
	$"6963 6965 6C2E 2053 6920 766F 7573 206E"
	$"2790 7465 7320 7061 7320 6427 6163 636F"
	$"7264 2061 7665 6320 6C65 7320 7465 726D"
	$"6573 2064 6520 6C61 206C 6963 656E 6365"
	$"2C20 636C 6971 7565 7A20 7375 7220 2252"
	$"6566 7573 6572 222E"
};`;
        case "es_ES":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 0745 7370 6196 6F6C 0741 6365 7074"
	$"6172 0A4E 6F20 6163 6570 7461 7208 496D"
	$"7072 696D 6972 0A47 7561 7264 6172 2E2E"
	$"2EC0 5369 2065 7374 8720 6465 2061 6375"
	$"6572 646F 2063 6F6E 206C 6F73 2074 8E72"
	$"6D69 6E6F 7320 6465 2065 7374 6120 6C69"
	$"6365 6E63 6961 2C20 7075 6C73 6520 2241"
	$"6365 7074 6172 2220 7061 7261 2069 6E73"
	$"7461 6C61 7220 656C 2073 6F66 7477 6172"
	$"652E 2045 6E20 656C 2073 7570 7565 7374"
	$"6F20 6465 2071 7565 206E 6F20 6573 748E"
	$"2064 6520 6163 7565 7264 6F20 636F 6E20"
	$"6C6F 7320 748E 726D 696E 6F73 2064 6520"
	$"6573 7461 206C 6963 656E 6369 612C 2070"
	$"756C 7365 2022 4E6F 2061 6365 7074 6172"
	$"2E22"
};`;
        case "it_IT":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 0849 7461 6C69 616E 6F07 4163 6365"
	$"7474 6F07 5269 6669 7574 6F06 5374 616D"
	$"7061 0B52 6567 6973 7472 612E 2E2E 7F53"
	$"6520 6163 6365 7474 6920 6C65 2063 6F6E"
	$"6469 7A69 6F6E 6920 6469 2071 7565 7374"
	$"6120 6C69 6365 6E7A 612C 2066 6169 2063"
	$"6C69 6320 7375 2022 4163 6365 7474 6F22"
	$"2070 6572 2069 6E73 7461 6C6C 6172 6520"
	$"696C 2073 6F66 7477 6172 652E 2041 6C74"
	$"7269 6D65 6E74 6920 6661 6920 636C 6963"
	$"2073 7520 2252 6966 6975 746F 222E"
};`;
        case "ja_JP":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 084A 6170 616E 6573 650A 93AF 88D3"
	$"82B5 82DC 82B7 0C93 AF88 D382 B582 DC82"
	$"B982 F108 88F3 8DFC 82B7 82E9 0795 DB91"
	$"B62E 2E2E B496 7B83 5C83 7483 6783 4583"
	$"4783 418E 6797 708B 9691 F88C 5F96 F182"
	$"CC8F F08C 8F82 C993 AF88 D382 B382 EA82"
	$"E98F EA8D 8782 C982 CD81 4183 5C83 7483"
	$"6783 4583 4783 4182 F083 4383 9383 5883"
	$"6781 5B83 8B82 B782 E982 BD82 DF82 C981"
	$"7593 AF88 D382 B582 DC82 B781 7682 F089"
	$"9F82 B582 C482 AD82 BE82 B382 A281 4281"
	$"4093 AF88 D382 B382 EA82 C882 A28F EA8D"
	$"8782 C982 CD81 4181 7593 AF88 D382 B582"
	$"DC82 B982 F181 7682 F089 9F82 B582 C482"
	$"AD82 BE82 B382 A281 42"
};`;
        case "nl_NL":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 0A4E 6564 6572 6C61 6E64 7302 4A61"
	$"034E 6565 0550 7269 6E74 0942 6577 6161"
	$"722E 2E2E A449 6E64 6965 6E20 7520 616B"
	$"6B6F 6F72 6420 6761 6174 206D 6574 2064"
	$"6520 766F 6F72 7761 6172 6465 6E20 7661"
	$"6E20 6465 7A65 206C 6963 656E 7469 652C"
	$"206B 756E 7420 7520 6F70 2027 4A61 2720"
	$"6B6C 696B 6B65 6E20 6F6D 2064 6520 7072"
	$"6F67 7261 6D6D 6174 7575 7220 7465 2069"
	$"6E73 7461 6C6C 6572 656E 2E20 496E 6469"
	$"656E 2075 206E 6965 7420 616B 6B6F 6F72"
	$"6420 6761 6174 2C20 6B6C 696B 7420 7520"
	$"6F70 2027 4E65 6527 2E"
};`;
        case "sv_SE":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 0653 7665 6E73 6B08 476F 646B 8A6E"
	$"6E73 0641 7662 9A6A 7308 536B 7269 7620"
	$"7574 0853 7061 7261 2E2E 2E93 4F6D 2044"
	$"7520 676F 646B 8A6E 6E65 7220 6C69 6365"
	$"6E73 7669 6C6C 6B6F 7265 6E20 6B6C 6963"
	$"6B61 2070 8C20 2247 6F64 6B8A 6E6E 7322"
	$"2066 9A72 2061 7474 2069 6E73 7461 6C6C"
	$"6572 6120 7072 6F67 7261 6D70 726F 6475"
	$"6B74 656E 2E20 4F6D 2044 7520 696E 7465"
	$"2067 6F64 6B8A 6E6E 6572 206C 6963 656E"
	$"7376 696C 6C6B 6F72 656E 2C20 6B6C 6963"
	$"6B61 2070 8C20 2241 7662 9A6A 7322 2E"
};`;
        case "br_FR":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 1150 6F72 7475 6775 9073 2C20 4272"
	$"6173 696C 0943 6F6E 636F 7264 6172 0944"
	$"6973 636F 7264 6172 0849 6D70 7269 6D69"
	$"7209 5361 6C76 6172 2E2E 2E8C 5365 2065"
	$"7374 8720 6465 2061 636F 7264 6F20 636F"
	$"6D20 6F73 2074 6572 6D6F 7320 6465 7374"
	$"6120 6C69 6365 6E8D 612C 2070 7265 7373"
	$"696F 6E65 2022 436F 6E63 6F72 6461 7222"
	$"2070 6172 6120 696E 7374 616C 6172 206F"
	$"2073 6F66 7477 6172 652E 2053 6520 6E8B"
	$"6F20 6573 7487 2064 6520 6163 6F72 646F"
	$"2C20 7072 6573 7369 6F6E 6520 2244 6973"
	$"636F 7264 6172 222E"
};`;
        case "zh_TW":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 1354 7261 6469 7469 6F6E 616C 2043"
	$"6869 6E65 7365 04A6 50B7 4E06 A4A3 A650"
	$"B74E 04A6 43A6 4C06 C078 A673 A14B 50A6"
	$"70AA 47B1 7AA6 50B7 4EA5 BBB3 5CA5 69C3"
	$"D2B8 CCAA BAB1 F8B4 DAA1 41BD D0AB F6A1"
	$"A7A6 50B7 4EA1 A8A5 48A6 77B8 CBB3 6EC5"
	$"E9A1 43A6 70AA 47A4 A3A6 50B7 4EA1 41BD"
	$"D0AB F6A1 A7A4 A3A6 50B7 4EA1 A8A1 43"
};`;
        case "zh_CN":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 1253 696D 706C 6966 6965 6420 4368"
	$"696E 6573 6504 CDAC D2E2 06B2 BBCD ACD2"
	$"E204 B4F2 D3A1 06B4 E6B4 A2A1 AD54 C8E7"
	$"B9FB C4FA CDAC D2E2 B1BE D0ED BFC9 D0AD"
	$"D2E9 B5C4 CCF5 BFEE A3AC C7EB B0B4 A1B0"
	$"CDAC D2E2 A1B1 C0B4 B0B2 D7B0 B4CB C8ED"
	$"BCFE A1A3 C8E7 B9FB C4FA B2BB CDAC D2E2"
	$"A3AC C7EB B0B4 A1B0 B2BB CDAC D2E2 A1B1"
	$"A1A3"
};`;
        case "da_DK":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 0544 616E 736B 0445 6E69 6705 5565"
	$"6E69 6707 5564 736B 7269 760A 4172 6B69"
	$"7665 722E 2E2E 9848 7669 7320 6475 2061"
	$"6363 6570 7465 7265 7220 6265 7469 6E67"
	$"656C 7365 726E 6520 6920 6C69 6365 6E73"
	$"6166 7461 6C65 6E2C 2073 6B61 6C20 6475"
	$"206B 6C69 6B6B 6520 708C 20D2 456E 6967"
	$"D320 666F 7220 6174 2069 6E73 7461 6C6C"
	$"6572 6520 736F 6674 7761 7265 6E2E 204B"
	$"6C69 6B20 708C 20D2 5565 6E69 67D3 2066"
	$"6F72 2061 7420 616E 6E75 6C6C 6572 6520"
	$"696E 7374 616C 6C65 7269 6E67 656E 2E"
};`;
        case "fi_FI":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 0553 756F 6D69 0848 7976 8A6B 7379"
	$"6E0A 456E 2068 7976 8A6B 7379 0754 756C"
	$"6F73 7461 0954 616C 6C65 6E6E 61C9 6F48"
	$"7976 8A6B 7379 206C 6973 656E 7373 6973"
	$"6F70 696D 756B 7365 6E20 6568 646F 7420"
	$"6F73 6F69 7474 616D 616C 6C61 20D5 4879"
	$"768A 6B73 79D5 2E20 4A6F 7320 6574 2068"
	$"7976 8A6B 7379 2073 6F70 696D 756B 7365"
	$"6E20 6568 746F 6A61 2C20 6F73 6F69 7461"
	$"20D5 456E 2068 7976 8A6B 7379 D52E"
};`;
        case "ko_KR":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 064B 6F72 6561 6E04 B5BF C0C7 09B5"
	$"BFC0 C720 BEC8 C7D4 06C7 C1B8 B0C6 AE07"
	$"C0FA C0E5 2E2E 2E7E BBE7 BFEB 20B0 E8BE"
	$"E0BC ADC0 C720 B3BB BFEB BFA1 20B5 BFC0"
	$"C7C7 CFB8 E92C 2022 B5BF C0C7 2220 B4DC"
	$"C3DF B8A6 20B4 ADB7 AF20 BCD2 C7C1 C6AE"
	$"BFFE BEEE B8A6 20BC B3C4 A1C7 CFBD CABD"
	$"C3BF C02E 20B5 BFC0 C7C7 CFC1 F620 BECA"
	$"B4C2 B4D9 B8E9 2C20 22B5 BFC0 C720 BEC8"
	$"C7D4 2220 B4DC C3DF B8A6 20B4 A9B8 A3BD"
	$"CABD C3BF C02E"
};`;
        case "nb_NO":
            return `data 'STR#' (${id}, "${name}") {
	$"0006 054E 6F72 736B 0445 6E69 6709 496B"
	$"6B65 2065 6E69 6708 536B 7269 7620 7574"
	$"0A41 726B 6976 6572 2E2E 2EA3 4876 6973"
	$"2044 6520 6572 2065 6E69 6720 6920 6265"
	$"7374 656D 6D65 6C73 656E 6520 6920 6465"
	$"6E6E 6520 6C69 7365 6E73 6176 7461 6C65"
	$"6E2C 206B 6C69 6B6B 6572 2044 6520 708C"
	$"2022 456E 6967 222D 6B6E 6170 7065 6E20"
	$"666F 7220 8C20 696E 7374 616C 6C65 7265"
	$"2070 726F 6772 616D 7661 7265 6E2E 2048"
	$"7669 7320 4465 2069 6B6B 6520 6572 2065"
	$"6E69 672C 206B 6C69 6B6B 6572 2044 6520"
	$"708C 2022 496B 6B65 2065 6E69 6722 2E"
};`;
        default:
            // en_US
            return `data 'STR#' (${id}, "${name}") {
	$"0006 0745 6E67 6C69 7368 0541 6772 6565"
	$"0844 6973 6167 7265 6505 5072 696E 7407"
	$"5361 7665 2E2E 2E7A 4966 2079 6F75 2061"
	$"6772 6565 2077 6974 6820 7468 6520 7465"
	$"726D 7320 6F66 2074 6869 7320 6C69 6365"
	$"6E73 652C 2070 7265 7373 20D2 4167 7265"
	$"65D3 2074 6F20 696E 7374 616C 6C20 7468"
	$"6520 736F 6674 7761 7265 2E20 4966 2079"
	$"6F75 2064 6F20 6E6F 7420 6167 7265 652C"
	$"2070 7265 7373 20D2 4469 7361 6772 6565"
	$"D32E"
};`;
    }
}
exports.getDefaultButtons = getDefaultButtons;
//# sourceMappingURL=licenseDefaultButtons.js.map