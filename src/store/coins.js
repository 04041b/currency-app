// Static list of supported currencies. Rates are fetched at runtime.
const coins = [
  {
    "symbol": "AED",
    "sign": "",
    "name": "United Arab Emirates Dirham",
    "nameCN": "阿联酋迪拉姆",
    "countryCode": "AE",
    "type": "fiat"
  },
  {
    "symbol": "AFN",
    "sign": "؋",
    "name": "Afghan Afghani",
    "nameCN": "阿富汗尼",
    "countryCode": "AF",
    "type": "fiat"
  },
  {
    "symbol": "ALL",
    "sign": "",
    "name": "Albanian Lek",
    "nameCN": "阿尔巴尼亚列克",
    "countryCode": "AL",
    "type": "fiat"
  },
  {
    "symbol": "AMD",
    "sign": "֏",
    "name": "Armenian Dram",
    "nameCN": "亚美尼亚德拉姆",
    "countryCode": "AM",
    "type": "fiat"
  },
  {
    "symbol": "AOA",
    "sign": "Kz",
    "name": "Angolan Kwanza",
    "nameCN": "安哥拉宽扎",
    "countryCode": "AO",
    "type": "fiat"
  },
  {
    "symbol": "ARS",
    "sign": "$",
    "name": "Argentine Peso",
    "nameCN": "阿根廷比索",
    "countryCode": "AR",
    "type": "fiat"
  },
  {
    "symbol": "AUD",
    "sign": "$",
    "name": "Australian Dollar",
    "nameCN": "澳大利亚元",
    "countryCode": "AU",
    "type": "fiat"
  },
  {
    "symbol": "AWG",
    "sign": "",
    "name": "Aruban Florin",
    "nameCN": "阿鲁巴弗罗林",
    "countryCode": "AW",
    "type": "fiat"
  },
  {
    "symbol": "AZN",
    "sign": "₼",
    "name": "Azerbaijani Manat",
    "nameCN": "阿塞拜疆马纳特",
    "countryCode": "AZ",
    "type": "fiat"
  },
  {
    "symbol": "BAM",
    "sign": "KM",
    "name": "Bosnia-Herzegovina Convertible Mark",
    "nameCN": "波斯尼亚-黑塞哥维那可兑换马克",
    "countryCode": "BA",
    "type": "fiat"
  },
  {
    "symbol": "BBD",
    "sign": "$",
    "name": "Barbadian Dollar",
    "nameCN": "巴巴多斯元",
    "countryCode": "BB",
    "type": "fiat"
  },
  {
    "symbol": "BDT",
    "sign": "৳",
    "name": "Bangladeshi Taka",
    "nameCN": "孟加拉塔卡",
    "countryCode": "BD",
    "type": "fiat"
  },
  {
    "symbol": "BGN",
    "sign": "",
    "name": "Bulgarian Lev",
    "nameCN": "保加利亚列弗",
    "countryCode": "BG",
    "type": "fiat"
  },
  {
    "symbol": "BHD",
    "sign": "",
    "name": "Bahraini Dinar",
    "nameCN": "巴林第纳尔",
    "countryCode": "BH",
    "type": "fiat"
  },
  {
    "symbol": "BIF",
    "sign": "",
    "name": "Burundian Franc",
    "nameCN": "布隆迪法郎",
    "countryCode": "BI",
    "type": "fiat"
  },
  {
    "symbol": "BMD",
    "sign": "$",
    "name": "Bermudan Dollar",
    "nameCN": "百慕大元",
    "countryCode": "BM",
    "type": "fiat"
  },
  {
    "symbol": "BND",
    "sign": "$",
    "name": "Brunei Dollar",
    "nameCN": "文莱元",
    "countryCode": "BN",
    "type": "fiat"
  },
  {
    "symbol": "BOB",
    "sign": "Bs",
    "name": "Bolivian Boliviano",
    "nameCN": "玻利维亚诺",
    "countryCode": "BO",
    "type": "fiat"
  },
  {
    "symbol": "BRL",
    "sign": "R$",
    "name": "Brazilian Real",
    "nameCN": "巴西雷亚尔",
    "countryCode": "BR",
    "type": "fiat"
  },
  {
    "symbol": "BSD",
    "sign": "$",
    "name": "Bahamian Dollar",
    "nameCN": "巴哈马元",
    "countryCode": "BS",
    "type": "fiat"
  },
  {
    "symbol": "BTN",
    "sign": "",
    "name": "Bhutanese Ngultrum",
    "nameCN": "不丹努尔特鲁姆",
    "countryCode": "BT",
    "type": "fiat"
  },
  {
    "symbol": "BWP",
    "sign": "P",
    "name": "Botswanan Pula",
    "nameCN": "博茨瓦纳普拉",
    "countryCode": "BW",
    "type": "fiat"
  },
  {
    "symbol": "BYN",
    "sign": "",
    "name": "Belarusian Ruble",
    "nameCN": "白俄罗斯卢布",
    "countryCode": "BY",
    "type": "fiat"
  },
  {
    "symbol": "BZD",
    "sign": "$",
    "name": "Belize Dollar",
    "nameCN": "伯利兹元",
    "countryCode": "BZ",
    "type": "fiat"
  },
  {
    "symbol": "CAD",
    "sign": "$",
    "name": "Canadian Dollar",
    "nameCN": "加拿大元",
    "countryCode": "CA",
    "type": "fiat"
  },
  {
    "symbol": "CDF",
    "sign": "",
    "name": "Congolese Franc",
    "nameCN": "刚果法郎",
    "countryCode": "CD",
    "type": "fiat"
  },
  {
    "symbol": "XAF",
    "sign": "FCFA",
    "name": "Central African CFA Franc",
    "nameCN": "中非法郎",
    "countryCode": "CF",
    "type": "fiat"
  },
  {
    "symbol": "CHF",
    "sign": "",
    "name": "Swiss Franc",
    "nameCN": "瑞士法郎",
    "countryCode": "CH",
    "type": "fiat"
  },
  {
    "symbol": "CLP",
    "sign": "$",
    "name": "Chilean Peso",
    "nameCN": "智利比索",
    "countryCode": "CL",
    "type": "fiat"
  },
  {
    "symbol": "CNY",
    "sign": "¥",
    "name": "Chinese Yuan",
    "nameCN": "人民币",
    "countryCode": "CN",
    "type": "fiat"
  },
  {
    "symbol": "COP",
    "sign": "$",
    "name": "Colombian Peso",
    "nameCN": "哥伦比亚比索",
    "countryCode": "CO",
    "type": "fiat"
  },
  {
    "symbol": "CRC",
    "sign": "₡",
    "name": "Costa Rican Colón",
    "nameCN": "哥斯达黎加科朗",
    "countryCode": "CR",
    "type": "fiat"
  },
  {
    "symbol": "CUP",
    "sign": "$",
    "name": "Cuban Peso",
    "nameCN": "古巴比索",
    "countryCode": "CU",
    "type": "fiat"
  },
  {
    "symbol": "CVE",
    "sign": "",
    "name": "Cape Verdean Escudo",
    "nameCN": "佛得角埃斯库多",
    "countryCode": "CV",
    "type": "fiat"
  },
  {
    "symbol": "CZK",
    "sign": "Kč",
    "name": "Czech Koruna",
    "nameCN": "捷克克朗",
    "countryCode": "CZ",
    "type": "fiat"
  },
  {
    "symbol": "DJF",
    "sign": "",
    "name": "Djiboutian Franc",
    "nameCN": "吉布提法郎",
    "countryCode": "DJ",
    "type": "fiat"
  },
  {
    "symbol": "DKK",
    "sign": "kr",
    "name": "Danish Krone",
    "nameCN": "丹麦克朗",
    "countryCode": "DK",
    "type": "fiat"
  },
  {
    "symbol": "DOP",
    "sign": "$",
    "name": "Dominican Peso",
    "nameCN": "多米尼加比索",
    "countryCode": "DO",
    "type": "fiat"
  },
  {
    "symbol": "DZD",
    "sign": "",
    "name": "Algerian Dinar",
    "nameCN": "阿尔及利亚第纳尔",
    "countryCode": "DZ",
    "type": "fiat"
  },
  {
    "symbol": "EGP",
    "sign": "E£",
    "name": "Egyptian Pound",
    "nameCN": "埃及镑",
    "countryCode": "EG",
    "type": "fiat"
  },
  {
    "symbol": "ERN",
    "sign": "",
    "name": "Eritrean Nakfa",
    "nameCN": "厄立特里亚纳克法",
    "countryCode": "ER",
    "type": "fiat"
  },
  {
    "symbol": "ETB",
    "sign": "",
    "name": "Ethiopian Birr",
    "nameCN": "埃塞俄比亚比尔",
    "countryCode": "ET",
    "type": "fiat"
  },
  {
    "symbol": "EUR",
    "sign": "€",
    "name": "Euro",
    "nameCN": "欧元",
    "countryCode": "EU",
    "type": "fiat"
  },
  {
    "symbol": "FJD",
    "sign": "$",
    "name": "Fijian Dollar",
    "nameCN": "斐济元",
    "countryCode": "FJ",
    "type": "fiat"
  },
  {
    "symbol": "FKP",
    "sign": "£",
    "name": "Falkland Islands Pound",
    "nameCN": "福克兰群岛镑",
    "countryCode": "FK",
    "type": "fiat"
  },
  {
    "symbol": "GBP",
    "sign": "£",
    "name": "British Pound",
    "nameCN": "英镑",
    "countryCode": "GB",
    "type": "fiat"
  },
  {
    "symbol": "GEL",
    "sign": "₾",
    "name": "Georgian Lari",
    "nameCN": "格鲁吉亚拉里",
    "countryCode": "GE",
    "type": "fiat"
  },
  {
    "symbol": "GHS",
    "sign": "GH₵",
    "name": "Ghanaian Cedi",
    "nameCN": "加纳塞地",
    "countryCode": "GH",
    "type": "fiat"
  },
  {
    "symbol": "GIP",
    "sign": "£",
    "name": "Gibraltar Pound",
    "nameCN": "直布罗陀镑",
    "countryCode": "GI",
    "type": "fiat"
  },
  {
    "symbol": "GMD",
    "sign": "",
    "name": "Gambian Dalasi",
    "nameCN": "冈比亚达拉西",
    "countryCode": "GM",
    "type": "fiat"
  },
  {
    "symbol": "GNF",
    "sign": "FG",
    "name": "Guinean Franc",
    "nameCN": "几内亚法郎",
    "countryCode": "GN",
    "type": "fiat"
  },
  {
    "symbol": "GTQ",
    "sign": "Q",
    "name": "Guatemalan Quetzal",
    "nameCN": "危地马拉格查尔",
    "countryCode": "GT",
    "type": "fiat"
  },
  {
    "symbol": "GYD",
    "sign": "$",
    "name": "Guyanaese Dollar",
    "nameCN": "圭亚那元",
    "countryCode": "GY",
    "type": "fiat"
  },
  {
    "symbol": "HKD",
    "sign": "$",
    "name": "Hong Kong Dollar",
    "nameCN": "港元",
    "countryCode": "HK",
    "type": "fiat"
  },
  {
    "symbol": "HNL",
    "sign": "L",
    "name": "Honduran Lempira",
    "nameCN": "洪都拉斯伦皮拉",
    "countryCode": "HN",
    "type": "fiat"
  },
  {
    "symbol": "HRK",
    "sign": "kn",
    "name": "Croatian Kuna",
    "nameCN": "克罗地亚库纳",
    "countryCode": "HR",
    "type": "fiat"
  },
  {
    "symbol": "HTG",
    "sign": "",
    "name": "Haitian Gourde",
    "nameCN": "海地古德",
    "countryCode": "HT",
    "type": "fiat"
  },
  {
    "symbol": "HUF",
    "sign": "Ft",
    "name": "Hungarian Forint",
    "nameCN": "匈牙利福林",
    "countryCode": "HU",
    "type": "fiat"
  },
  {
    "symbol": "IDR",
    "sign": "Rp",
    "name": "Indonesian Rupiah",
    "nameCN": "印度尼西亚卢比",
    "countryCode": "ID",
    "type": "fiat"
  },
  {
    "symbol": "ILS",
    "sign": "₪",
    "name": "Israeli New Shekel",
    "nameCN": "以色列新谢克尔",
    "countryCode": "IL",
    "type": "fiat"
  },
  {
    "symbol": "INR",
    "sign": "₹",
    "name": "Indian Rupee",
    "nameCN": "印度卢比",
    "countryCode": "IN",
    "type": "fiat"
  },
  {
    "symbol": "IQD",
    "sign": "",
    "name": "Iraqi Dinar",
    "nameCN": "伊拉克第纳尔",
    "countryCode": "IQ",
    "type": "fiat"
  },
  {
    "symbol": "IRR",
    "sign": "",
    "name": "Iranian Rial",
    "nameCN": "伊朗里亚尔",
    "countryCode": "IR",
    "type": "fiat"
  },
  {
    "symbol": "ISK",
    "sign": "kr",
    "name": "Icelandic Króna",
    "nameCN": "冰岛克朗",
    "countryCode": "IS",
    "type": "fiat"
  },
  {
    "symbol": "JMD",
    "sign": "$",
    "name": "Jamaican Dollar",
    "nameCN": "牙买加元",
    "countryCode": "JM",
    "type": "fiat"
  },
  {
    "symbol": "JOD",
    "sign": "",
    "name": "Jordanian Dinar",
    "nameCN": "约旦第纳尔",
    "countryCode": "JO",
    "type": "fiat"
  },
  {
    "symbol": "JPY",
    "sign": "¥",
    "name": "Japanese Yen",
    "nameCN": "日元",
    "countryCode": "JP",
    "type": "fiat"
  },
  {
    "symbol": "KES",
    "sign": "",
    "name": "Kenyan Shilling",
    "nameCN": "肯尼亚先令",
    "countryCode": "KE",
    "type": "fiat"
  },
  {
    "symbol": "KGS",
    "sign": "⃀",
    "name": "Kyrgyz Som",
    "nameCN": "吉尔吉斯斯坦索姆",
    "countryCode": "KG",
    "type": "fiat"
  },
  {
    "symbol": "KHR",
    "sign": "៛",
    "name": "Cambodian Riel",
    "nameCN": "柬埔寨瑞尔",
    "countryCode": "KH",
    "type": "fiat"
  },
  {
    "symbol": "KMF",
    "sign": "CF",
    "name": "Comorian Franc",
    "nameCN": "科摩罗法郎",
    "countryCode": "KM",
    "type": "fiat"
  },
  {
    "symbol": "KPW",
    "sign": "₩",
    "name": "North Korean Won",
    "nameCN": "朝鲜元",
    "countryCode": "KP",
    "type": "fiat"
  },
  {
    "symbol": "KRW",
    "sign": "₩",
    "name": "South Korean Won",
    "nameCN": "韩元",
    "countryCode": "KR",
    "type": "fiat"
  },
  {
    "symbol": "KWD",
    "sign": "",
    "name": "Kuwaiti Dinar",
    "nameCN": "科威特第纳尔",
    "countryCode": "KW",
    "type": "fiat"
  },
  {
    "symbol": "KYD",
    "sign": "$",
    "name": "Cayman Islands Dollar",
    "nameCN": "开曼元",
    "countryCode": "KY",
    "type": "fiat"
  },
  {
    "symbol": "KZT",
    "sign": "₸",
    "name": "Kazakhstani Tenge",
    "nameCN": "哈萨克斯坦坚戈",
    "countryCode": "KZ",
    "type": "fiat"
  },
  {
    "symbol": "LAK",
    "sign": "₭",
    "name": "Laotian Kip",
    "nameCN": "老挝基普",
    "countryCode": "LA",
    "type": "fiat"
  },
  {
    "symbol": "LBP",
    "sign": "L£",
    "name": "Lebanese Pound",
    "nameCN": "黎巴嫩镑",
    "countryCode": "LB",
    "type": "fiat"
  },
  {
    "symbol": "LKR",
    "sign": "Rs",
    "name": "Sri Lankan Rupee",
    "nameCN": "斯里兰卡卢比",
    "countryCode": "LK",
    "type": "fiat"
  },
  {
    "symbol": "LRD",
    "sign": "$",
    "name": "Liberian Dollar",
    "nameCN": "利比里亚元",
    "countryCode": "LR",
    "type": "fiat"
  },
  {
    "symbol": "LSL",
    "sign": "",
    "name": "Lesotho Loti",
    "nameCN": "莱索托洛蒂",
    "countryCode": "LS",
    "type": "fiat"
  },
  {
    "symbol": "LYD",
    "sign": "",
    "name": "Libyan Dinar",
    "nameCN": "利比亚第纳尔",
    "countryCode": "LY",
    "type": "fiat"
  },
  {
    "symbol": "MAD",
    "sign": "",
    "name": "Moroccan Dirham",
    "nameCN": "摩洛哥迪拉姆",
    "countryCode": "MA",
    "type": "fiat"
  },
  {
    "symbol": "MDL",
    "sign": "",
    "name": "Moldovan Leu",
    "nameCN": "摩尔多瓦列伊",
    "countryCode": "MD",
    "type": "fiat"
  },
  {
    "symbol": "MGA",
    "sign": "Ar",
    "name": "Malagasy Ariary",
    "nameCN": "马达加斯加阿里亚里",
    "countryCode": "MG",
    "type": "fiat"
  },
  {
    "symbol": "MKD",
    "sign": "",
    "name": "Macedonian Denar",
    "nameCN": "马其顿第纳尔",
    "countryCode": "MK",
    "type": "fiat"
  },
  {
    "symbol": "MMK",
    "sign": "K",
    "name": "Myanmar Kyat",
    "nameCN": "缅甸元",
    "countryCode": "MM",
    "type": "fiat"
  },
  {
    "symbol": "MNT",
    "sign": "₮",
    "name": "Mongolian Tugrik",
    "nameCN": "蒙古图格里克",
    "countryCode": "MN",
    "type": "fiat"
  },
  {
    "symbol": "MOP",
    "sign": "",
    "name": "Macanese Pataca",
    "nameCN": "澳门币",
    "countryCode": "MO",
    "type": "fiat"
  },
  {
    "symbol": "MUR",
    "sign": "Rs",
    "name": "Mauritian Rupee",
    "nameCN": "毛里求斯卢比",
    "countryCode": "MU",
    "type": "fiat"
  },
  {
    "symbol": "MVR",
    "sign": "",
    "name": "Maldivian Rufiyaa",
    "nameCN": "马尔代夫卢菲亚",
    "countryCode": "MV",
    "type": "fiat"
  },
  {
    "symbol": "MWK",
    "sign": "",
    "name": "Malawian Kwacha",
    "nameCN": "马拉维克瓦查",
    "countryCode": "MW",
    "type": "fiat"
  },
  {
    "symbol": "MXN",
    "sign": "$",
    "name": "Mexican Peso",
    "nameCN": "墨西哥比索",
    "countryCode": "MX",
    "type": "fiat"
  },
  {
    "symbol": "MYR",
    "sign": "RM",
    "name": "Malaysian Ringgit",
    "nameCN": "马来西亚林吉特",
    "countryCode": "MY",
    "type": "fiat"
  },
  {
    "symbol": "MZN",
    "sign": "",
    "name": "Mozambican Metical",
    "nameCN": "莫桑比克美提卡",
    "countryCode": "MZ",
    "type": "fiat"
  },
  {
    "symbol": "NAD",
    "sign": "$",
    "name": "Namibian Dollar",
    "nameCN": "纳米比亚元",
    "countryCode": "NA",
    "type": "fiat"
  },
  {
    "symbol": "NGN",
    "sign": "₦",
    "name": "Nigerian Naira",
    "nameCN": "尼日利亚奈拉",
    "countryCode": "NG",
    "type": "fiat"
  },
  {
    "symbol": "NIO",
    "sign": "C$",
    "name": "Nicaraguan Córdoba",
    "nameCN": "尼加拉瓜科多巴",
    "countryCode": "NI",
    "type": "fiat"
  },
  {
    "symbol": "NOK",
    "sign": "kr",
    "name": "Norwegian Krone",
    "nameCN": "挪威克朗",
    "countryCode": "NO",
    "type": "fiat"
  },
  {
    "symbol": "NPR",
    "sign": "Rs",
    "name": "Nepalese Rupee",
    "nameCN": "尼泊尔卢比",
    "countryCode": "NP",
    "type": "fiat"
  },
  {
    "symbol": "NZD",
    "sign": "$",
    "name": "New Zealand Dollar",
    "nameCN": "新西兰元",
    "countryCode": "NZ",
    "type": "fiat"
  },
  {
    "symbol": "OMR",
    "sign": "",
    "name": "Omani Rial",
    "nameCN": "阿曼里亚尔",
    "countryCode": "OM",
    "type": "fiat"
  },
  {
    "symbol": "PAB",
    "sign": "",
    "name": "Panamanian Balboa",
    "nameCN": "巴拿马巴波亚",
    "countryCode": "PA",
    "type": "fiat"
  },
  {
    "symbol": "PEN",
    "sign": "",
    "name": "Peruvian Sol",
    "nameCN": "秘鲁索尔",
    "countryCode": "PE",
    "type": "fiat"
  },
  {
    "symbol": "PGK",
    "sign": "",
    "name": "Papua New Guinean Kina",
    "nameCN": "巴布亚新几内亚基那",
    "countryCode": "PG",
    "type": "fiat"
  },
  {
    "symbol": "PHP",
    "sign": "₱",
    "name": "Philippine Peso",
    "nameCN": "菲律宾比索",
    "countryCode": "PH",
    "type": "fiat"
  },
  {
    "symbol": "PKR",
    "sign": "Rs",
    "name": "Pakistani Rupee",
    "nameCN": "巴基斯坦卢比",
    "countryCode": "PK",
    "type": "fiat"
  },
  {
    "symbol": "PLN",
    "sign": "zł",
    "name": "Polish Zloty",
    "nameCN": "波兰兹罗提",
    "countryCode": "PL",
    "type": "fiat"
  },
  {
    "symbol": "PYG",
    "sign": "₲",
    "name": "Paraguayan Guarani",
    "nameCN": "巴拉圭瓜拉尼",
    "countryCode": "PY",
    "type": "fiat"
  },
  {
    "symbol": "QAR",
    "sign": "",
    "name": "Qatari Riyal",
    "nameCN": "卡塔尔里亚尔",
    "countryCode": "QA",
    "type": "fiat"
  },
  {
    "symbol": "RON",
    "sign": "lei",
    "name": "Romanian Leu",
    "nameCN": "罗马尼亚列伊",
    "countryCode": "RO",
    "type": "fiat"
  },
  {
    "symbol": "RSD",
    "sign": "",
    "name": "Serbian Dinar",
    "nameCN": "塞尔维亚第纳尔",
    "countryCode": "RS",
    "type": "fiat"
  },
  {
    "symbol": "RUB",
    "sign": "₽",
    "name": "Russian Ruble",
    "nameCN": "俄罗斯卢布",
    "countryCode": "RU",
    "type": "fiat"
  },
  {
    "symbol": "RWF",
    "sign": "RF",
    "name": "Rwandan Franc",
    "nameCN": "卢旺达法郎",
    "countryCode": "RW",
    "type": "fiat"
  },
  {
    "symbol": "SAR",
    "sign": "",
    "name": "Saudi Riyal",
    "nameCN": "沙特里亚尔",
    "countryCode": "SA",
    "type": "fiat"
  },
  {
    "symbol": "SBD",
    "sign": "$",
    "name": "Solomon Islands Dollar",
    "nameCN": "所罗门群岛元",
    "countryCode": "SB",
    "type": "fiat"
  },
  {
    "symbol": "SCR",
    "sign": "",
    "name": "Seychellois Rupee",
    "nameCN": "塞舌尔卢比",
    "countryCode": "SC",
    "type": "fiat"
  },
  {
    "symbol": "SDG",
    "sign": "",
    "name": "Sudanese Pound",
    "nameCN": "苏丹镑",
    "countryCode": "SD",
    "type": "fiat"
  },
  {
    "symbol": "SEK",
    "sign": "kr",
    "name": "Swedish Krona",
    "nameCN": "瑞典克朗",
    "countryCode": "SE",
    "type": "fiat"
  },
  {
    "symbol": "SGD",
    "sign": "$",
    "name": "Singapore Dollar",
    "nameCN": "新加坡元",
    "countryCode": "SG",
    "type": "fiat"
  },
  {
    "symbol": "SHP",
    "sign": "£",
    "name": "St. Helena Pound",
    "nameCN": "圣赫勒拿群岛磅",
    "countryCode": "SH",
    "type": "fiat"
  },
  {
    "symbol": "SLE",
    "sign": "",
    "name": "Sierra Leonean Leone",
    "nameCN": "塞拉利昂新利昂",
    "countryCode": "SL",
    "type": "fiat"
  },
  {
    "symbol": "SOS",
    "sign": "",
    "name": "Somali Shilling",
    "nameCN": "索马里先令",
    "countryCode": "SO",
    "type": "fiat"
  },
  {
    "symbol": "SRD",
    "sign": "$",
    "name": "Surinamese Dollar",
    "nameCN": "苏里南元",
    "countryCode": "SR",
    "type": "fiat"
  },
  {
    "symbol": "SVC",
    "sign": "",
    "name": "Salvadoran Colón",
    "nameCN": "萨尔瓦多科朗",
    "countryCode": "SV",
    "type": "fiat"
  },
  {
    "symbol": "SYP",
    "sign": "£",
    "name": "Syrian Pound",
    "nameCN": "叙利亚镑",
    "countryCode": "SY",
    "type": "fiat"
  },
  {
    "symbol": "SZL",
    "sign": "",
    "name": "Swazi Lilangeni",
    "nameCN": "斯威士兰里兰吉尼",
    "countryCode": "SZ",
    "type": "fiat"
  },
  {
    "symbol": "THB",
    "sign": "฿",
    "name": "Thai Baht",
    "nameCN": "泰铢",
    "countryCode": "TH",
    "type": "fiat"
  },
  {
    "symbol": "TJS",
    "sign": "",
    "name": "Tajikistani Somoni",
    "nameCN": "塔吉克斯坦索莫尼",
    "countryCode": "TJ",
    "type": "fiat"
  },
  {
    "symbol": "TMT",
    "sign": "",
    "name": "Turkmenistani Manat",
    "nameCN": "土库曼斯坦马纳特",
    "countryCode": "TM",
    "type": "fiat"
  },
  {
    "symbol": "TND",
    "sign": "",
    "name": "Tunisian Dinar",
    "nameCN": "突尼斯第纳尔",
    "countryCode": "TN",
    "type": "fiat"
  },
  {
    "symbol": "TOP",
    "sign": "T$",
    "name": "Tongan Paʻanga",
    "nameCN": "汤加潘加",
    "countryCode": "TO",
    "type": "fiat"
  },
  {
    "symbol": "TRY",
    "sign": "₺",
    "name": "Turkish Lira",
    "nameCN": "土耳其里拉",
    "countryCode": "TR",
    "type": "fiat"
  },
  {
    "symbol": "TTD",
    "sign": "$",
    "name": "Trinidad & Tobago Dollar",
    "nameCN": "特立尼达和多巴哥元",
    "countryCode": "TT",
    "type": "fiat"
  },
  {
    "symbol": "TZS",
    "sign": "",
    "name": "Tanzanian Shilling",
    "nameCN": "坦桑尼亚先令",
    "countryCode": "TZ",
    "type": "fiat"
  },
  {
    "symbol": "UAH",
    "sign": "₴",
    "name": "Ukrainian Hryvnia",
    "nameCN": "乌克兰格里夫纳",
    "countryCode": "UA",
    "type": "fiat"
  },
  {
    "symbol": "UGX",
    "sign": "",
    "name": "Ugandan Shilling",
    "nameCN": "乌干达先令",
    "countryCode": "UG",
    "type": "fiat"
  },
  {
    "symbol": "USD",
    "sign": "$",
    "name": "United States Dollar",
    "nameCN": "美元",
    "countryCode": "US",
    "type": "fiat"
  },
  {
    "symbol": "UYU",
    "sign": "$",
    "name": "Uruguayan Peso",
    "nameCN": "乌拉圭比索",
    "countryCode": "UY",
    "type": "fiat"
  },
  {
    "symbol": "UZS",
    "sign": "",
    "name": "Uzbekistani Som",
    "nameCN": "乌兹别克斯坦苏姆",
    "countryCode": "UZ",
    "type": "fiat"
  },
  {
    "symbol": "VES",
    "sign": "",
    "name": "Venezuelan Bolívar",
    "nameCN": "委内瑞拉玻利瓦尔",
    "countryCode": "VE",
    "type": "fiat"
  },
  {
    "symbol": "VND",
    "sign": "₫",
    "name": "Vietnamese Dong",
    "nameCN": "越南盾",
    "countryCode": "VN",
    "type": "fiat"
  },
  {
    "symbol": "VUV",
    "sign": "",
    "name": "Vanuatu Vatu",
    "nameCN": "瓦努阿图瓦图",
    "countryCode": "VU",
    "type": "fiat"
  },
  {
    "symbol": "WST",
    "sign": "",
    "name": "Samoan Tala",
    "nameCN": "萨摩亚塔拉",
    "countryCode": "WS",
    "type": "fiat"
  },
  {
    "symbol": "YER",
    "sign": "",
    "name": "Yemeni Rial",
    "nameCN": "也门里亚尔",
    "countryCode": "YE",
    "type": "fiat"
  },
  {
    "symbol": "ZAR",
    "sign": "R",
    "name": "South African Rand",
    "nameCN": "南非兰特",
    "countryCode": "ZA",
    "type": "fiat"
  },
  {
    "symbol": "ZMW",
    "sign": "ZK",
    "name": "Zambian Kwacha",
    "nameCN": "赞比亚克瓦查",
    "countryCode": "ZM",
    "type": "fiat"
  },
  {
    "symbol": "ZWL",
    "sign": "",
    "name": "Zimbabwean Dollar (2009–2024)",
    "nameCN": "津巴布韦元 (2009)",
    "countryCode": "ZW",
    "type": "fiat"
  },
  {
    "symbol": "BTC",
    "sign": "",
    "name": "Bitcoin",
    "nameCN": "比特币",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "ETH",
    "sign": "",
    "name": "Ethereum",
    "nameCN": "以太坊",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "USDT",
    "sign": "",
    "name": "Tether",
    "nameCN": "泰达币",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "USDC",
    "sign": "",
    "name": "USD Coin",
    "nameCN": "USD Coin",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "BNB",
    "sign": "",
    "name": "BNB",
    "nameCN": "币安币",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "ADA",
    "sign": "",
    "name": "Cardano",
    "nameCN": "艾达币",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "XMR",
    "sign": "",
    "name": "Monero",
    "nameCN": "门罗币",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "LTC",
    "sign": "",
    "name": "Litecoin",
    "nameCN": "莱特币",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "BCH",
    "sign": "",
    "name": "Bitcoin Cash",
    "nameCN": "比特币现金",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "BSV",
    "sign": "",
    "name": "Bitcoin SV",
    "nameCN": "比特币SV",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "EOS",
    "sign": "",
    "name": "EOS",
    "nameCN": "柚子",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "TRX",
    "sign": "",
    "name": "TRON",
    "nameCN": "波场",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "XTZ",
    "sign": "",
    "name": "Tezos",
    "nameCN": "Tezos",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "LINK",
    "sign": "",
    "name": "Chainlink",
    "nameCN": "Chainlink",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "NEO",
    "sign": "",
    "name": "NEO",
    "nameCN": "小蚁",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "XEM",
    "sign": "",
    "name": "NEM",
    "nameCN": "新经币",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "LEO",
    "sign": "",
    "name": "UNUS SED LEO",
    "nameCN": "LEO",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "CRO",
    "sign": "",
    "name": "Cronos",
    "nameCN": "Cronos",
    "countryCode": null,
    "type": "crypto"
  },
  {
    "symbol": "HT",
    "sign": "",
    "name": "Huobi Token",
    "nameCN": "火币积分",
    "countryCode": null,
    "type": "crypto"
  }
];

export default coins;
