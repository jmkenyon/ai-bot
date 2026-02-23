// convex/seedFids.ts
// Run once to populate the fidMappings table
// Usage: npx convex run seedFids:seedFidMappings

import { mutation } from "./_generated/server";

const FID_DATA = [
  {
    "fieldName": "PROD_CATG",
    "fidNumber": 1001,
    "dataType": "INT",
    "description": "IDN Product Code"
  },
  {
    "fieldName": "RDNDISPLAY",
    "fidNumber": 1002,
    "dataType": "INT",
    "description": "IDN Display Type"
  },
  {
    "fieldName": "DISP_NAME",
    "fidNumber": 1003,
    "dataType": "STRING",
    "description": "Symbol"
  },
  {
    "fieldName": "EXCHID",
    "fidNumber": 1004,
    "dataType": "STRING",
    "description": "Exch ID"
  },
  {
    "fieldName": "TIMACT",
    "fidNumber": 1005,
    "dataType": "TIME",
    "description": "TimeAct"
  },
  {
    "fieldName": "TRDPRC_1",
    "fidNumber": 1006,
    "dataType": "LPACK",
    "description": "Last Price"
  },
  {
    "fieldName": "TRDPRC_2",
    "fidNumber": 1007,
    "dataType": "LPACK",
    "description": "Prev. Price"
  },
  {
    "fieldName": "TRDPRC_3",
    "fidNumber": 1008,
    "dataType": "LPACK",
    "description": "Prev. 2"
  },
  {
    "fieldName": "TRDPRC_4",
    "fidNumber": 1009,
    "dataType": "LPACK",
    "description": "Prev. 3"
  },
  {
    "fieldName": "TRDPRC_5",
    "fidNumber": 1010,
    "dataType": "LPACK",
    "description": "Prev. 4"
  },
  {
    "fieldName": "NETCHNG_1",
    "fidNumber": 1011,
    "dataType": "LPACK",
    "description": "Net Chg."
  },
  {
    "fieldName": "HIGH_1",
    "fidNumber": 1012,
    "dataType": "LPACK",
    "description": "High"
  },
  {
    "fieldName": "LOW_1",
    "fidNumber": 1013,
    "dataType": "LPACK",
    "description": "Low"
  },
  {
    "fieldName": "PRCTCK_1",
    "fidNumber": 1014,
    "dataType": "STRING",
    "description": "Up/Down"
  },
  {
    "fieldName": "CURRENCY",
    "fidNumber": 1015,
    "dataType": "STRING",
    "description": "Currency"
  },
  {
    "fieldName": "TRD_DATE",
    "fidNumber": 1016,
    "dataType": "DATE",
    "description": "Trade Date"
  },
  {
    "fieldName": "ACTIV_DATE",
    "fidNumber": 1017,
    "dataType": "DATE",
    "description": "Active Date"
  },
  {
    "fieldName": "TRDTIM_1",
    "fidNumber": 1018,
    "dataType": "TIME",
    "description": "Trade Time"
  },
  {
    "fieldName": "OPEN_PRC",
    "fidNumber": 1019,
    "dataType": "LPACK",
    "description": "Open"
  },
  {
    "fieldName": "HST_CLOSE",
    "fidNumber": 1021,
    "dataType": "LPACK",
    "description": "Hist Close"
  },
  {
    "fieldName": "BID",
    "fidNumber": 1022,
    "dataType": "LPACK",
    "description": "Bid"
  },
  {
    "fieldName": "BID_1",
    "fidNumber": 1023,
    "dataType": "LPACK",
    "description": "Bid 1"
  },
  {
    "fieldName": "ASK",
    "fidNumber": 1025,
    "dataType": "LPACK",
    "description": "Ask"
  },
  {
    "fieldName": "ASK_1",
    "fidNumber": 1026,
    "dataType": "LPACK",
    "description": "Ask 1"
  },
  {
    "fieldName": "NEWS_PAGE",
    "fidNumber": 1028,
    "dataType": "STRING",
    "description": "News Page"
  },
  {
    "fieldName": "NEWS_TIME",
    "fidNumber": 1029,
    "dataType": "TIME",
    "description": "News Time"
  },
  {
    "fieldName": "BIDSIZE",
    "fidNumber": 1030,
    "dataType": "LONG",
    "description": "Bid Size"
  },
  {
    "fieldName": "ASKSIZE",
    "fidNumber": 1031,
    "dataType": "LONG",
    "description": "Ask Size"
  },
  {
    "fieldName": "ACVOL_1",
    "fidNumber": 1032,
    "dataType": "LONG",
    "description": "Tot. Vol."
  },
  {
    "fieldName": "EARNINGS",
    "fidNumber": 1034,
    "dataType": "LPACK",
    "description": "Earnings"
  },
  {
    "fieldName": "YIELD",
    "fidNumber": 1035,
    "dataType": "DOUBLE",
    "description": "Yield"
  },
  {
    "fieldName": "PERATIO",
    "fidNumber": 1036,
    "dataType": "LPACK",
    "description": "P/E Ratio"
  },
  {
    "fieldName": "DIVIDENDTP",
    "fidNumber": 1037,
    "dataType": "STRING",
    "description": "Last Dividend Type"
  },
  {
    "fieldName": "DIVPAYDATE",
    "fidNumber": 1038,
    "dataType": "DATE",
    "description": "Div Pay Date"
  },
  {
    "fieldName": "EXDIVDATE",
    "fidNumber": 1039,
    "dataType": "DATE",
    "description": "Ex-Div Date"
  },
  {
    "fieldName": "CTS_QUAL",
    "fidNumber": 1040,
    "dataType": "INT",
    "description": "CTS Qualifier"
  },
  {
    "fieldName": "CONTR_MONTH",
    "fidNumber": 1041,
    "dataType": "STRING",
    "description": "Contract Month"
  },
  {
    "fieldName": "BLKCOUNT",
    "fidNumber": 1042,
    "dataType": "LONG",
    "description": "Block Trade Count"
  },
  {
    "fieldName": "BLKVOLUM",
    "fidNumber": 1043,
    "dataType": "LONG",
    "description": "Block Trade Total Volume"
  },
  {
    "fieldName": "TRDXID_1",
    "fidNumber": 1044,
    "dataType": "STRING",
    "description": "Trd Exch ID"
  },
  {
    "fieldName": "BIDEXID",
    "fidNumber": 1045,
    "dataType": "STRING",
    "description": "Bid Exch ID"
  },
  {
    "fieldName": "ASKEXID",
    "fidNumber": 1046,
    "dataType": "STRING",
    "description": "Ask Exch ID"
  },
  {
    "fieldName": "OPEN1",
    "fidNumber": 1047,
    "dataType": "LPACK",
    "description": "Open 1"
  },
  {
    "fieldName": "OPEN2",
    "fidNumber": 1048,
    "dataType": "LPACK",
    "description": "Open 2"
  },
  {
    "fieldName": "OPNRNGTP",
    "fidNumber": 1049,
    "dataType": "STRING",
    "description": "Open Range Type"
  },
  {
    "fieldName": "CLOSE1",
    "fidNumber": 1050,
    "dataType": "LPACK",
    "description": "Close1"
  },
  {
    "fieldName": "CLOSE2",
    "fidNumber": 1051,
    "dataType": "LPACK",
    "description": "Close2"
  },
  {
    "fieldName": "CLSRNGTP",
    "fidNumber": 1052,
    "dataType": "STRING",
    "description": "Close Range Type"
  },
  {
    "fieldName": "TRD_UNITS",
    "fidNumber": 1053,
    "dataType": "STRING",
    "description": "Trade Units"
  },
  {
    "fieldName": "LOTSZUNITS",
    "fidNumber": 1054,
    "dataType": "STRING",
    "description": "Lot Size Units"
  },
  {
    "fieldName": "LOT_SIZE",
    "fidNumber": 1055,
    "dataType": "LONG",
    "description": "Lot Size"
  },
  {
    "fieldName": "PCTCHNG",
    "fidNumber": 1056,
    "dataType": "DOUBLE",
    "description": "Percentage Change in Price"
  },
  {
    "fieldName": "OPEN_BID",
    "fidNumber": 1057,
    "dataType": "LPACK",
    "description": "Open Bid"
  },
  {
    "fieldName": "OPEN_ASK",
    "fidNumber": 1059,
    "dataType": "LPACK",
    "description": "Open Ask Price"
  },
  {
    "fieldName": "CLOSE_BID",
    "fidNumber": 1060,
    "dataType": "LPACK",
    "description": "Close Bid"
  },
  {
    "fieldName": "CLOSE_ASK",
    "fidNumber": 1061,
    "dataType": "LPACK",
    "description": "Close Ask"
  },
  {
    "fieldName": "LOCHIGH",
    "fidNumber": 1062,
    "dataType": "LPACK",
    "description": "Contract Life High"
  },
  {
    "fieldName": "LOCLOW",
    "fidNumber": 1063,
    "dataType": "LPACK",
    "description": "Contract Life Low"
  },
  {
    "fieldName": "OPINT_1",
    "fidNumber": 1064,
    "dataType": "LONG",
    "description": "Open Interest"
  },
  {
    "fieldName": "OPINTNC",
    "fidNumber": 1065,
    "dataType": "LONG",
    "description": "Open Interest Net Change"
  },
  {
    "fieldName": "STRIKE_PRC",
    "fidNumber": 1066,
    "dataType": "LPACK",
    "description": "Strike"
  },
  {
    "fieldName": "EXPIR_DATE",
    "fidNumber": 1067,
    "dataType": "DATE",
    "description": "Expir Date"
  },
  {
    "fieldName": "MATUR_DATE",
    "fidNumber": 1068,
    "dataType": "DATE",
    "description": "Maturity Date"
  },
  {
    "fieldName": "COUPN_RATE",
    "fidNumber": 1069,
    "dataType": "DOUBLE",
    "description": "Coupon Rate"
  },
  {
    "fieldName": "SETTLE",
    "fidNumber": 1070,
    "dataType": "LPACK",
    "description": "Settle"
  },
  {
    "fieldName": "DIVIDEND",
    "fidNumber": 1071,
    "dataType": "LPACK",
    "description": "Dividend"
  },
  {
    "fieldName": "NAVOLCODE",
    "fidNumber": 1072,
    "dataType": "STRING",
    "description": "NASD Volume Code"
  },
  {
    "fieldName": "NOMINAL",
    "fidNumber": 1073,
    "dataType": "LPACK",
    "description": "Nominal"
  },
  {
    "fieldName": "UPLIMIT",
    "fidNumber": 1075,
    "dataType": "LPACK",
    "description": "Upper Limit"
  },
  {
    "fieldName": "LOLIMIT",
    "fidNumber": 1076,
    "dataType": "LPACK",
    "description": "Lower Limit"
  },
  {
    "fieldName": "NUM_MOVES",
    "fidNumber": 1077,
    "dataType": "LONG",
    "description": "No. Trades"
  },
  {
    "fieldName": "OFFCL_CODE",
    "fidNumber": 1078,
    "dataType": "STRING",
    "description": "Dealer Code"
  },
  {
    "fieldName": "HSTCLSDATE",
    "fidNumber": 1079,
    "dataType": "DATE",
    "description": "Hist Close Date"
  },
  {
    "fieldName": "TOT_VOLUME",
    "fidNumber": 1080,
    "dataType": "LONG",
    "description": "Total Vol"
  },
  {
    "fieldName": "VOLUME_ADV",
    "fidNumber": 1081,
    "dataType": "LONG",
    "description": "Vol Adv"
  },
  {
    "fieldName": "VOLUME_DEC",
    "fidNumber": 1082,
    "dataType": "LONG",
    "description": "Vol Dec"
  },
  {
    "fieldName": "VOLUME_UNC",
    "fidNumber": 1083,
    "dataType": "LONG",
    "description": "Vol Unch"
  },
  {
    "fieldName": "ISSUES_ADV",
    "fidNumber": 1084,
    "dataType": "LONG",
    "description": "Issues Adv"
  },
  {
    "fieldName": "ISSUES_DEC",
    "fidNumber": 1085,
    "dataType": "LONG",
    "description": "Issues Dec"
  },
  {
    "fieldName": "ISSUES_UNC",
    "fidNumber": 1086,
    "dataType": "LONG",
    "description": "Issues Unch"
  },
  {
    "fieldName": "MOVES_ADV",
    "fidNumber": 1087,
    "dataType": "LONG",
    "description": "Moves Adv"
  },
  {
    "fieldName": "MOVES_DEC",
    "fidNumber": 1088,
    "dataType": "LONG",
    "description": "Moves Dec"
  },
  {
    "fieldName": "MOVES_UNC",
    "fidNumber": 1089,
    "dataType": "LONG",
    "description": "Moves Unch"
  },
  {
    "fieldName": "YRHIGH",
    "fidNumber": 1090,
    "dataType": "LPACK",
    "description": "Yr High"
  },
  {
    "fieldName": "YRLOW",
    "fidNumber": 1091,
    "dataType": "LPACK",
    "description": "Yr Low"
  },
  {
    "fieldName": "PRV_YRHIGH",
    "fidNumber": 1092,
    "dataType": "LPACK",
    "description": "Previous Year High"
  },
  {
    "fieldName": "PRV_YRLOW",
    "fidNumber": 1093,
    "dataType": "LPACK",
    "description": "Previous Year Low"
  },
  {
    "fieldName": "LIFE_HIGH",
    "fidNumber": 1094,
    "dataType": "LPACK",
    "description": "Life High"
  },
  {
    "fieldName": "LIFE_LOW",
    "fidNumber": 1095,
    "dataType": "LPACK",
    "description": "Life Low"
  },
  {
    "fieldName": "HIGH_52",
    "fidNumber": 1096,
    "dataType": "LPACK",
    "description": "High 52"
  },
  {
    "fieldName": "LOW_52",
    "fidNumber": 1097,
    "dataType": "LPACK",
    "description": "Low 52"
  },
  {
    "fieldName": "EPYHSTCLOS",
    "fidNumber": 1098,
    "dataType": "LPACK",
    "description": "EPY Hist Close"
  },
  {
    "fieldName": "LIMIT_IND",
    "fidNumber": 1099,
    "dataType": "STRING",
    "description": "Limit Indicator"
  },
  {
    "fieldName": "TURNOVER",
    "fidNumber": 1100,
    "dataType": "DOUBLE",
    "description": "Turnover"
  },
  {
    "fieldName": "NEW_LOWS",
    "fidNumber": 1101,
    "dataType": "LONG",
    "description": "#New Lows"
  },
  {
    "fieldName": "COUPN_DATE",
    "fidNumber": 1102,
    "dataType": "DATE",
    "description": "Coupon Date"
  },
  {
    "fieldName": "RATING",
    "fidNumber": 1103,
    "dataType": "STRING",
    "description": "Bond Rating"
  },
  {
    "fieldName": "BOND_TYPE",
    "fidNumber": 1104,
    "dataType": "STRING",
    "description": "Bond Type"
  },
  {
    "fieldName": "BCKGRNDPAG",
    "fidNumber": 1105,
    "dataType": "STRING",
    "description": "BackPage"
  },
  {
    "fieldName": "TOT_ISSUES",
    "fidNumber": 1106,
    "dataType": "LONG",
    "description": "Total Issues"
  },
  {
    "fieldName": "ISSUE_DATE",
    "fidNumber": 1107,
    "dataType": "DATE",
    "description": "Issue Date"
  },
  {
    "fieldName": "NEW_HIGHS",
    "fidNumber": 1108,
    "dataType": "LONG",
    "description": "#New Highs"
  },
  {
    "fieldName": "PUTCALLIND",
    "fidNumber": 1109,
    "dataType": "STRING",
    "description": "Put/Call"
  },
  {
    "fieldName": "YCHIGH_IND",
    "fidNumber": 1110,
    "dataType": "STRING",
    "description": "Year High Flag"
  },
  {
    "fieldName": "YCLOW_IND",
    "fidNumber": 1111,
    "dataType": "STRING",
    "description": "Year Low Flag"
  },
  {
    "fieldName": "CALL_DATE",
    "fidNumber": 1112,
    "dataType": "DATE",
    "description": "Bond Call Date"
  },
  {
    "fieldName": "RATING_ID",
    "fidNumber": 1113,
    "dataType": "STRING",
    "description": "Rating ID"
  },
  {
    "fieldName": "BID_NET_CH",
    "fidNumber": 1114,
    "dataType": "LPACK",
    "description": "Bid Net Change"
  },
  {
    "fieldName": "BID_TICK_1",
    "fidNumber": 1115,
    "dataType": "STRING",
    "description": "Bid Tick"
  },
  {
    "fieldName": "DAYS_MAT",
    "fidNumber": 1116,
    "dataType": "INT",
    "description": "Days to Maturity"
  },
  {
    "fieldName": "CUM_EX_MKR",
    "fidNumber": 1117,
    "dataType": "STRING",
    "description": "Cum/Ex Marker"
  },
  {
    "fieldName": "PRC_QL_CD",
    "fidNumber": 1118,
    "dataType": "INT",
    "description": "Price Code"
  },
  {
    "fieldName": "NASDSTATUS",
    "fidNumber": 1119,
    "dataType": "STRING",
    "description": "NASD Status"
  },
  {
    "fieldName": "NAVALUE",
    "fidNumber": 1120,
    "dataType": "LPACK",
    "description": "NAV"
  },
  {
    "fieldName": "NAV_NETCHN",
    "fidNumber": 1121,
    "dataType": "LPACK",
    "description": "NAV Net Change"
  },
  {
    "fieldName": "ASSETS",
    "fidNumber": 1122,
    "dataType": "DOUBLE",
    "description": "Assets"
  },
  {
    "fieldName": "AV_MATRTY",
    "fidNumber": 1123,
    "dataType": "INT",
    "description": "Avg Maturity"
  },
  {
    "fieldName": "YLD_7DAY",
    "fidNumber": 1124,
    "dataType": "DOUBLE",
    "description": "Yield 7 Day"
  },
  {
    "fieldName": "EFF7DYLD",
    "fidNumber": 1125,
    "dataType": "DOUBLE",
    "description": "Eff 7-Day Yield"
  },
  {
    "fieldName": "YLD_DATE",
    "fidNumber": 1127,
    "dataType": "DATE",
    "description": "Yield Date"
  },
  {
    "fieldName": "DURATION",
    "fidNumber": 1130,
    "dataType": "INT",
    "description": "Duration"
  },
  {
    "fieldName": "PRC_QL2",
    "fidNumber": 1131,
    "dataType": "INT",
    "description": "Price Code 2"
  },
  {
    "fieldName": "YLD_MATURITY",
    "fidNumber": 1132,
    "dataType": "DOUBLE",
    "description": "Bond Yield"
  },
  {
    "fieldName": "MKT_ST_IND",
    "fidNumber": 1133,
    "dataType": "INT",
    "description": "Mkt Status"
  },
  {
    "fieldName": "MID_PRICE",
    "fidNumber": 1134,
    "dataType": "LPACK",
    "description": "Mid Price"
  },
  {
    "fieldName": "MID_NET_CH",
    "fidNumber": 1135,
    "dataType": "LPACK",
    "description": "Mid-Price Net Change"
  },
  {
    "fieldName": "MID_CLOSE",
    "fidNumber": 1136,
    "dataType": "LPACK",
    "description": "Mid-Price Close"
  },
  {
    "fieldName": "TDY_UN_CLS",
    "fidNumber": 1137,
    "dataType": "LPACK",
    "description": "Unofficial CLS"
  },
  {
    "fieldName": "EUROCLR_NO",
    "fidNumber": 1140,
    "dataType": "LONG",
    "description": "Euroclear Number"
  },
  {
    "fieldName": "CEDEL_NO",
    "fidNumber": 1141,
    "dataType": "LONG",
    "description": "CEDEL Number"
  },
  {
    "fieldName": "TDY_OF_CLS",
    "fidNumber": 1143,
    "dataType": "LPACK",
    "description": "Off. Close"
  },
  {
    "fieldName": "CASH_AVG",
    "fidNumber": 1146,
    "dataType": "LPACK",
    "description": "Cash Avg"
  },
  {
    "fieldName": "FOOTNOTE1",
    "fidNumber": 1148,
    "dataType": "STRING",
    "description": "Footnote No. 1"
  },
  {
    "fieldName": "FOOTNOTE2",
    "fidNumber": 1149,
    "dataType": "STRING",
    "description": "Footnote No. 2"
  },
  {
    "fieldName": "NAVDATE",
    "fidNumber": 1150,
    "dataType": "DATE",
    "description": "NAV Date"
  },
  {
    "fieldName": "MUTFUND_OFFER",
    "fidNumber": 1151,
    "dataType": "LPACK",
    "description": "Offer Price"
  },
  {
    "fieldName": "CAPGAIN_1",
    "fidNumber": 1152,
    "dataType": "LPACK",
    "description": "Capital Gains"
  },
  {
    "fieldName": "SPLTDIV_1",
    "fidNumber": 1153,
    "dataType": "LPACK",
    "description": "Split/Dividend"
  },
  {
    "fieldName": "NAVALUE_1",
    "fidNumber": 1154,
    "dataType": "LPACK",
    "description": "Previous Day NAV"
  },
  {
    "fieldName": "NAVDAT_1",
    "fidNumber": 1155,
    "dataType": "DATE",
    "description": "NAV Previous Date"
  },
  {
    "fieldName": "YTM_BID",
    "fidNumber": 1156,
    "dataType": "DOUBLE",
    "description": "Bid Yield"
  },
  {
    "fieldName": "YTM_ASK",
    "fidNumber": 1157,
    "dataType": "DOUBLE",
    "description": "Ask Yield"
  },
  {
    "fieldName": "UP_LIMIT",
    "fidNumber": 1160,
    "dataType": "LPACK",
    "description": "Up Limit"
  },
  {
    "fieldName": "DOWN_LIMIT",
    "fidNumber": 1161,
    "dataType": "LPACK",
    "description": "Down Limit"
  },
  {
    "fieldName": "BUYER_ID",
    "fidNumber": 1162,
    "dataType": "INT",
    "description": "Buyer ID"
  },
  {
    "fieldName": "SELLER_ID",
    "fidNumber": 1163,
    "dataType": "INT",
    "description": "Seller ID"
  },
  {
    "fieldName": "KASS_PRC",
    "fidNumber": 1164,
    "dataType": "LPACK",
    "description": "KASS Price"
  },
  {
    "fieldName": "PRTY_PRICE",
    "fidNumber": 1165,
    "dataType": "LPACK",
    "description": "Parity Price"
  },
  {
    "fieldName": "KERB_PRC1",
    "fidNumber": 1173,
    "dataType": "LPACK",
    "description": "Kerb 1st Price"
  },
  {
    "fieldName": "TRDVOL_1",
    "fidNumber": 1178,
    "dataType": "LONG",
    "description": "Trade Volume"
  },
  {
    "fieldName": "BASISVALUE",
    "fidNumber": 1179,
    "dataType": "DOUBLE",
    "description": "Basis Value"
  },
  {
    "fieldName": "NO_BUYERS",
    "fidNumber": 1183,
    "dataType": "LONG",
    "description": "Number of Buyers"
  },
  {
    "fieldName": "NO_SELLERS",
    "fidNumber": 1184,
    "dataType": "LONG",
    "description": "Number of Sellers"
  },
  {
    "fieldName": "RISKFACTOR",
    "fidNumber": 1185,
    "dataType": "DOUBLE",
    "description": "Risk Factor"
  },
  {
    "fieldName": "SHORTADDON",
    "fidNumber": 1186,
    "dataType": "DOUBLE",
    "description": "Short Additional"
  },
  {
    "fieldName": "TOT_MOVES",
    "fidNumber": 1187,
    "dataType": "LONG",
    "description": "Total Moves"
  },
  {
    "fieldName": "STATUS_1",
    "fidNumber": 1188,
    "dataType": "LONG",
    "description": "Status 1"
  },
  {
    "fieldName": "STATUS_2",
    "fidNumber": 1189,
    "dataType": "LONG",
    "description": "Status 2"
  },
  {
    "fieldName": "STATUS_3",
    "fidNumber": 1190,
    "dataType": "LONG",
    "description": "Status 3"
  },
  {
    "fieldName": "STATUS_4",
    "fidNumber": 1191,
    "dataType": "LONG",
    "description": "Status 4"
  },
  {
    "fieldName": "STATUS_5",
    "fidNumber": 1192,
    "dataType": "LONG",
    "description": "Status 5"
  },
  {
    "fieldName": "STATUS_6",
    "fidNumber": 1193,
    "dataType": "LONG",
    "description": "Status 6"
  },
  {
    "fieldName": "STATUS_7",
    "fidNumber": 1194,
    "dataType": "LONG",
    "description": "Status 7"
  },
  {
    "fieldName": "HIGHTP_1",
    "fidNumber": 1196,
    "dataType": "STRING",
    "description": "High Price Type"
  },
  {
    "fieldName": "LOWTP_1",
    "fidNumber": 1197,
    "dataType": "STRING",
    "description": "Low Price Type"
  },
  {
    "fieldName": "LOT_SIZE_A",
    "fidNumber": 1198,
    "dataType": "DOUBLE",
    "description": "Lot Size"
  },
  {
    "fieldName": "OPENEXID",
    "fidNumber": 1199,
    "dataType": "STRING",
    "description": "Open Exchange ID"
  },
  {
    "fieldName": "CLSEXID",
    "fidNumber": 1200,
    "dataType": "STRING",
    "description": "Close Exchange ID"
  },
  {
    "fieldName": "LF_HGH_DAT",
    "fidNumber": 1201,
    "dataType": "DATE",
    "description": "Life High Date"
  },
  {
    "fieldName": "LF_LOW_DAT",
    "fidNumber": 1202,
    "dataType": "DATE",
    "description": "Life Low Date"
  },
  {
    "fieldName": "BID_HIGH_1",
    "fidNumber": 1203,
    "dataType": "LPACK",
    "description": "High Bid"
  },
  {
    "fieldName": "BID_LOW_1",
    "fidNumber": 1204,
    "dataType": "LPACK",
    "description": "Low Bid"
  },
  {
    "fieldName": "YRBIDHIGH",
    "fidNumber": 1205,
    "dataType": "LPACK",
    "description": "Year High Bid"
  },
  {
    "fieldName": "YRBIDLOW",
    "fidNumber": 1206,
    "dataType": "LPACK",
    "description": "Year Low Bid"
  },
  {
    "fieldName": "HST_CLSBID",
    "fidNumber": 1207,
    "dataType": "LPACK",
    "description": "Historic Closing Bid"
  },
  {
    "fieldName": "HSTCLBDDAT",
    "fidNumber": 1208,
    "dataType": "DATE",
    "description": "Historic Closing Bid Date"
  },
  {
    "fieldName": "YRBDHI_IND",
    "fidNumber": 1209,
    "dataType": "STRING",
    "description": "Year Bid High *"
  },
  {
    "fieldName": "YRBDLO_IND",
    "fidNumber": 1210,
    "dataType": "STRING",
    "description": "Year Bid Low  *"
  },
  {
    "fieldName": "NUM_BIDS",
    "fidNumber": 1211,
    "dataType": "INT",
    "description": "No. Bids"
  },
  {
    "fieldName": "MKT_MKR_ID",
    "fidNumber": 1212,
    "dataType": "STRING",
    "description": "MktMkr ID"
  },
  {
    "fieldName": "MKT_SOURCE",
    "fidNumber": 1213,
    "dataType": "STRING",
    "description": "Market Maker Quote Source"
  },
  {
    "fieldName": "MKT_MKR_NM",
    "fidNumber": 1214,
    "dataType": "STRING",
    "description": "Market Maker Name"
  },
  {
    "fieldName": "SPECRLDATE",
    "fidNumber": 1229,
    "dataType": "DATE",
    "description": "Special Date"
  },
  {
    "fieldName": "SP_NAVALUE",
    "fidNumber": 1230,
    "dataType": "LPACK",
    "description": "Special Open NAV"
  },
  {
    "fieldName": "SPNAVALUE1",
    "fidNumber": 1231,
    "dataType": "LPACK",
    "description": "Special Close NAV"
  },
  {
    "fieldName": "SPEC_CAP",
    "fidNumber": 1232,
    "dataType": "LPACK",
    "description": "Special Capital Gains"
  },
  {
    "fieldName": "SPECDIV",
    "fidNumber": 1233,
    "dataType": "LPACK",
    "description": "Special Dividend"
  },
  {
    "fieldName": "PRV_KASSA",
    "fidNumber": 1234,
    "dataType": "LPACK",
    "description": "Previous Kassa Price"
  },
  {
    "fieldName": "PNAC",
    "fidNumber": 1235,
    "dataType": "STRING",
    "description": "PNAC"
  },
  {
    "fieldName": "PREV_LR",
    "fidNumber": 1237,
    "dataType": "STRING",
    "description": "Previous LR"
  },
  {
    "fieldName": "NEXT_LR",
    "fidNumber": 1238,
    "dataType": "STRING",
    "description": "Next LR"
  },
  {
    "fieldName": "REF_COUNT",
    "fidNumber": 1239,
    "dataType": "INT",
    "description": "Reference Count"
  },
  {
    "fieldName": "UNIQUE_SN",
    "fidNumber": 1254,
    "dataType": "STRING",
    "description": "UNIQUE SN"
  },
  {
    "fieldName": "PROC_DATE",
    "fidNumber": 1255,
    "dataType": "DATE",
    "description": "Process. Date"
  },
  {
    "fieldName": "SEG_TEXT",
    "fidNumber": 1258,
    "dataType": "STRING",
    "description": "SEG TEXT"
  },
  {
    "fieldName": "RECORDTYPE",
    "fidNumber": 1259,
    "dataType": "INT",
    "description": "RecType"
  },
  {
    "fieldName": "CURRENT_TIME",
    "fidNumber": 1260,
    "dataType": "STRING",
    "description": "Current Time"
  },
  {
    "fieldName": "BCAST_TEXT",
    "fidNumber": 1264,
    "dataType": "STRING",
    "description": "BCAST TEXT"
  },
  {
    "fieldName": "BID_TIME",
    "fidNumber": 1266,
    "dataType": "TIME",
    "description": "Bid Time"
  },
  {
    "fieldName": "ASK_TIME",
    "fidNumber": 1267,
    "dataType": "TIME",
    "description": "Ask Time"
  },
  {
    "fieldName": "ACT_TP_1",
    "fidNumber": 1270,
    "dataType": "STRING",
    "description": "Activity Type 1"
  },
  {
    "fieldName": "SEC_ACT_1",
    "fidNumber": 1275,
    "dataType": "LPACK",
    "description": "Second Activity 1"
  },
  {
    "fieldName": "SC_ACT_TP1",
    "fidNumber": 1280,
    "dataType": "STRING",
    "description": "Second Activity Type 1"
  },
  {
    "fieldName": "OPEN_TIME",
    "fidNumber": 1285,
    "dataType": "TIME",
    "description": "Open Time"
  },
  {
    "fieldName": "HIGH_TIME",
    "fidNumber": 1286,
    "dataType": "TIME",
    "description": "High Time"
  },
  {
    "fieldName": "SETTLEDATE",
    "fidNumber": 1287,
    "dataType": "DATE",
    "description": "Settle Date"
  },
  {
    "fieldName": "LOW_TIME",
    "fidNumber": 1288,
    "dataType": "TIME",
    "description": "Low Time"
  },
  {
    "fieldName": "ASK_VOLUME",
    "fidNumber": 1289,
    "dataType": "LONG",
    "description": "Ask Volume"
  },
  {
    "fieldName": "FORWARD_DATE",
    "fidNumber": 1290,
    "dataType": "STRING",
    "description": "Forward Date"
  },
  {
    "fieldName": "NO_BIDMMKR",
    "fidNumber": 1291,
    "dataType": "LONG",
    "description": "No. Bid MMKR 1"
  },
  {
    "fieldName": "NO_ASKMMKR",
    "fidNumber": 1292,
    "dataType": "LONG",
    "description": "No. Ask MMKR 1"
  },
  {
    "fieldName": "BID_MMID1",
    "fidNumber": 1293,
    "dataType": "STRING",
    "description": "Bid MM ID1"
  },
  {
    "fieldName": "BID_MMID2",
    "fidNumber": 1294,
    "dataType": "STRING",
    "description": "Bid MM ID2"
  },
  {
    "fieldName": "BID_MMID3",
    "fidNumber": 1295,
    "dataType": "STRING",
    "description": "Bid MM ID3"
  },
  {
    "fieldName": "ASK_MMID1",
    "fidNumber": 1296,
    "dataType": "STRING",
    "description": "Ask MM ID1"
  },
  {
    "fieldName": "ASK_MMID2",
    "fidNumber": 1297,
    "dataType": "STRING",
    "description": "Ask MM ID2"
  },
  {
    "fieldName": "ASK_MMID3",
    "fidNumber": 1298,
    "dataType": "STRING",
    "description": "Ask MM ID3"
  },
  {
    "fieldName": "RIC_CODE",
    "fidNumber": 1299,
    "dataType": "STRING",
    "description": "Reuters Instrument Code"
  },
  {
    "fieldName": "BLOOMBERG_CODE",
    "fidNumber": 1300,
    "dataType": "STRING",
    "description": "Bloomberg Code"
  },
  {
    "fieldName": "BLOOMBERG_CODE_FULL",
    "fidNumber": 1301,
    "dataType": "STRING",
    "description": "Full Bloomberg Code"
  },
  {
    "fieldName": "SYMBOL_SOURCE",
    "fidNumber": 1302,
    "dataType": "STRING",
    "description": "Symbol Source"
  },
  {
    "fieldName": "BLOOMBERG_CODE_FULL_REGIONAL",
    "fidNumber": 1303,
    "dataType": "STRING",
    "description": "Bloomberg Code (Full Rgnl)"
  },
  {
    "fieldName": "BBG_EXCH_CODE",
    "fidNumber": 1304,
    "dataType": "STRING",
    "description": "Bloomberg Exch Code"
  },
  {
    "fieldName": "VOR_CODE",
    "fidNumber": 1305,
    "dataType": "INT",
    "description": "VOR Code"
  },
  {
    "fieldName": "BLOOMBERG_CODE_COMPOSITE",
    "fidNumber": 1306,
    "dataType": "STRING",
    "description": "Bloomberg Code Composite"
  },
  {
    "fieldName": "BBG_MARKET_SECTOR",
    "fidNumber": 1307,
    "dataType": "STRING",
    "description": "Bloomberg Market Sector (Yellow Key)"
  },
  {
    "fieldName": "BBG_INT_VWAP",
    "fidNumber": 1308,
    "dataType": "DOUBLE",
    "description": "Bloomberg Interval VWAP"
  },
  {
    "fieldName": "BBG_INT_VWAP_VOL",
    "fidNumber": 1309,
    "dataType": "LONG",
    "description": "Bloomberg Interval VWAP volume"
  },
  {
    "fieldName": "FEED_BBG_TICKER ",
    "fidNumber": 1310,
    "dataType": "STRING",
    "description": "BBG Ticker"
  },
  {
    "fieldName": "FEED_BBGID",
    "fidNumber": 1311,
    "dataType": "STRING",
    "description": "BBG ID"
  },
  {
    "fieldName": "FEED_BBGIDCOMP",
    "fidNumber": 1312,
    "dataType": "STRING",
    "description": "BBG COMP ID"
  },
  {
    "fieldName": "BBG_SEDOL1",
    "fidNumber": 1320,
    "dataType": "STRING",
    "description": "Bloomberg SEDOL1"
  },
  {
    "fieldName": "BBG_ISIN",
    "fidNumber": 1321,
    "dataType": "STRING",
    "description": "Bloomberg ISIN"
  },
  {
    "fieldName": "BBG_CINS",
    "fidNumber": 1322,
    "dataType": "STRING",
    "description": "Bloomberg CINS"
  },
  {
    "fieldName": "BBG_CUSIP",
    "fidNumber": 1323,
    "dataType": "STRING",
    "description": "Bloomberg CUSIP"
  },
  {
    "fieldName": "BBG_BB_GLOBL_ID",
    "fidNumber": 1324,
    "dataType": "STRING",
    "description": "Bloomberg BB GLOBL"
  },
  {
    "fieldName": "BBG_PRIM_EXCH_MIC",
    "fidNumber": 1325,
    "dataType": "STRING",
    "description": "Bloomberg MIC prime"
  },
  {
    "fieldName": "BBG_LOCL_EXCH_MIC",
    "fidNumber": 1326,
    "dataType": "STRING",
    "description": "Bloomberg MIC local"
  },
  {
    "fieldName": "BBG_PRIM_EXCH_NAME",
    "fidNumber": 1327,
    "dataType": "STRING",
    "description": "Bloomberg prim exch"
  },
  {
    "fieldName": "BBG_FEED_CODE",
    "fidNumber": 1328,
    "dataType": "STRING",
    "description": "Bloomberg feed code"
  },
  {
    "fieldName": "BBG_EXCH_TICKER",
    "fidNumber": 1329,
    "dataType": "STRING",
    "description": "Bloomberg EXCH TICKER"
  },
  {
    "fieldName": "BBG_EXT_FUL_EXCH_TICKER",
    "fidNumber": 1330,
    "dataType": "STRING",
    "description": "Bloomberg full TICKER"
  },
  {
    "fieldName": "BBG_FUT_TICK_SIZE",
    "fidNumber": 1331,
    "dataType": "LPACK",
    "description": "Bloomberg FUT Tick Size"
  },
  {
    "fieldName": "BBG_FUT_TICK_VAL",
    "fidNumber": 1332,
    "dataType": "LPACK",
    "description": "Bloomberg FUT Tick Val"
  },
  {
    "fieldName": "BBG_FUT_VALUE_POINT",
    "fidNumber": 1333,
    "dataType": "LPACK",
    "description": "Bloomberg FUT VAL PT"
  },
  {
    "fieldName": "BBG_LAST_ALL_SESSIONS",
    "fidNumber": 1334,
    "dataType": "LPACK",
    "description": "Bloomberg Last Price All Sessions"
  },
  {
    "fieldName": "BBG_DELIVERY_DATE",
    "fidNumber": 1335,
    "dataType": "DATE",
    "description": "Bloomberg Delivery Date"
  },
  {
    "fieldName": "BBG_ORDER_IMB_BUY_VOLUME",
    "fidNumber": 1336,
    "dataType": "LONG",
    "description": "Bloomberg Imbalance Buy Vol"
  },
  {
    "fieldName": "BBG_ORDER_IMB_SELL_VOLUME",
    "fidNumber": 1337,
    "dataType": "LONG",
    "description": "Bloomberg Imbalance Sell Vol"
  },
  {
    "fieldName": "BBG_EQY_NMS",
    "fidNumber": 1338,
    "dataType": "DOUBLE",
    "description": "Bloomberg Normal Market Size (NMS)"
  },
  {
    "fieldName": "OPTION_XID",
    "fidNumber": 1340,
    "dataType": "STRING",
    "description": "Option Exchange ID"
  },
  {
    "fieldName": "BBG_IMBALANCE_SELL",
    "fidNumber": 1341,
    "dataType": "LPACK",
    "description": "BBG Imbalance Sell Price"
  },
  {
    "fieldName": "BBG_IMBALANCE_BUY",
    "fidNumber": 1342,
    "dataType": "LPACK",
    "description": "BBG Imbalance Buy Price"
  },
  {
    "fieldName": "BBG_VOLUME_THEO",
    "fidNumber": 1343,
    "dataType": "LONG",
    "description": "BBG Theoretical Volume"
  },
  {
    "fieldName": "TRADE_TONE",
    "fidNumber": 1344,
    "dataType": "STRING",
    "description": "Last Trade Tone"
  },
  {
    "fieldName": "BID_TONE",
    "fidNumber": 1345,
    "dataType": "STRING",
    "description": "Bid Tone"
  },
  {
    "fieldName": "ASK_TONE",
    "fidNumber": 1346,
    "dataType": "STRING",
    "description": "Ask Tone"
  },
  {
    "fieldName": "CLOSE_TONE",
    "fidNumber": 1347,
    "dataType": "STRING",
    "description": "Close Tone"
  },
  {
    "fieldName": "STOP_HIGH",
    "fidNumber": 1348,
    "dataType": "STRING",
    "description": "Stop High"
  },
  {
    "fieldName": "STOP_LOW",
    "fidNumber": 1349,
    "dataType": "STRING",
    "description": "Stop Low"
  },
  {
    "fieldName": "YRHIGHDAT",
    "fidNumber": 1350,
    "dataType": "DATE",
    "description": "Yr High Date"
  },
  {
    "fieldName": "YRLOWDAT",
    "fidNumber": 1351,
    "dataType": "DATE",
    "description": "Yr Low Date"
  },
  {
    "fieldName": "HIGH52_DATE",
    "fidNumber": 1352,
    "dataType": "DATE",
    "description": "High52 Date"
  },
  {
    "fieldName": "LOW52_DATE",
    "fidNumber": 1353,
    "dataType": "DATE",
    "description": "Low52 Date"
  },
  {
    "fieldName": "VOL_FLAG",
    "fidNumber": 1355,
    "dataType": "STRING",
    "description": "Volume Flag"
  },
  {
    "fieldName": "RT_YIELD_1",
    "fidNumber": 1356,
    "dataType": "LPACK",
    "description": "Real Time Yield"
  },
  {
    "fieldName": "RT_PRICING_SOURCE",
    "fidNumber": 1357,
    "dataType": "STRING",
    "description": "BBG RT Pricing Source"
  },
  {
    "fieldName": "BID_OAS",
    "fidNumber": 1358,
    "dataType": "DOUBLE",
    "description": "OAS Bid"
  },
  {
    "fieldName": "ASK_OAS",
    "fidNumber": 1359,
    "dataType": "DOUBLE",
    "description": "OAS Ask"
  },
  {
    "fieldName": "YLD_PCTCHG",
    "fidNumber": 1360,
    "dataType": "DOUBLE",
    "description": "Yield Change Percentage"
  },
  {
    "fieldName": "YLD_NETCHG",
    "fidNumber": 1361,
    "dataType": "LPACK",
    "description": "Yield Net Change"
  },
  {
    "fieldName": "BID_YIELD",
    "fidNumber": 1362,
    "dataType": "DOUBLE",
    "description": "Bid Yield"
  },
  {
    "fieldName": "ASK_YIELD",
    "fidNumber": 1363,
    "dataType": "DOUBLE",
    "description": "Ask Yield"
  },
  {
    "fieldName": "OPEN_YLD",
    "fidNumber": 1364,
    "dataType": "DOUBLE",
    "description": "Open Yield"
  },
  {
    "fieldName": "HIGH_YLD",
    "fidNumber": 1365,
    "dataType": "DOUBLE",
    "description": "High Yield"
  },
  {
    "fieldName": "LOW_YLD",
    "fidNumber": 1366,
    "dataType": "DOUBLE",
    "description": "Low Yield"
  },
  {
    "fieldName": "HST_CLSYLD",
    "fidNumber": 1367,
    "dataType": "DOUBLE",
    "description": "Historic Close Yield"
  },
  {
    "fieldName": "OPINT_DATE",
    "fidNumber": 1369,
    "dataType": "DATE",
    "description": "Open Interest Date"
  },
  {
    "fieldName": "BBG_THEO_PRICE",
    "fidNumber": 1370,
    "dataType": "LPACK",
    "description": "BBG Theoretical Price"
  },
  {
    "fieldName": "BBG_LAST",
    "fidNumber": 1371,
    "dataType": "LPACK",
    "description": "BBG PX Last"
  },
  {
    "fieldName": "IRGPRC",
    "fidNumber": 1372,
    "dataType": "LPACK",
    "description": "Irreg. Price"
  },
  {
    "fieldName": "IRGVOL",
    "fidNumber": 1373,
    "dataType": "LONG",
    "description": "Irreg. Vol"
  },
  {
    "fieldName": "IRGCOND",
    "fidNumber": 1374,
    "dataType": "INT",
    "description": "Sale Condition"
  },
  {
    "fieldName": "TIMCOR",
    "fidNumber": 1375,
    "dataType": "TIME",
    "description": "Price Correction Time"
  },
  {
    "fieldName": "INSPRC",
    "fidNumber": 1376,
    "dataType": "LPACK",
    "description": "Insert Price"
  },
  {
    "fieldName": "INSVOL",
    "fidNumber": 1377,
    "dataType": "LONG",
    "description": "Insert volume"
  },
  {
    "fieldName": "INSCOND",
    "fidNumber": 1378,
    "dataType": "INT",
    "description": "Insert Condition"
  },
  {
    "fieldName": "SALTIM",
    "fidNumber": 1379,
    "dataType": "TIME",
    "description": "Last Time"
  },
  {
    "fieldName": "TNOVER_SC",
    "fidNumber": 1380,
    "dataType": "STRING",
    "description": "Turnover Scale"
  },
  {
    "fieldName": "PARITY99",
    "fidNumber": 1381,
    "dataType": "LPACK",
    "description": "Parity >= 100"
  },
  {
    "fieldName": "PARITY100",
    "fidNumber": 1382,
    "dataType": "LPACK",
    "description": "Parity < 100"
  },
  {
    "fieldName": "HST_VOL",
    "fidNumber": 1383,
    "dataType": "LONG",
    "description": "Hist Vol"
  },
  {
    "fieldName": "SESS_HIFLG",
    "fidNumber": 1384,
    "dataType": "STRING",
    "description": "Session High Flag"
  },
  {
    "fieldName": "SESS_LOFLG",
    "fidNumber": 1385,
    "dataType": "STRING",
    "description": "Session Low Flag"
  },
  {
    "fieldName": "SSPRNG1",
    "fidNumber": 1386,
    "dataType": "LPACK",
    "description": "Suspension Range 1"
  },
  {
    "fieldName": "SSPRNG2",
    "fidNumber": 1387,
    "dataType": "LPACK",
    "description": "Suspension Range 2"
  },
  {
    "fieldName": "SSPRNGTP",
    "fidNumber": 1388,
    "dataType": "STRING",
    "description": "Suspension Type"
  },
  {
    "fieldName": "RSMRNG1",
    "fidNumber": 1389,
    "dataType": "LPACK",
    "description": "Resumption Range 1"
  },
  {
    "fieldName": "RSMRNG2",
    "fidNumber": 1390,
    "dataType": "LPACK",
    "description": "Resumption Range 2"
  },
  {
    "fieldName": "RSMRNGTP",
    "fidNumber": 1391,
    "dataType": "STRING",
    "description": "Resumption Type"
  },
  {
    "fieldName": "VOL_DATE",
    "fidNumber": 1392,
    "dataType": "DATE",
    "description": "Vol Date"
  },
  {
    "fieldName": "PRIMACT_1",
    "fidNumber": 1393,
    "dataType": "LPACK",
    "description": "Primary Activity 1"
  },
  {
    "fieldName": "PRIMACT_2",
    "fidNumber": 1394,
    "dataType": "LPACK",
    "description": "Primary Activity 2"
  },
  {
    "fieldName": "PRIMACT_3",
    "fidNumber": 1395,
    "dataType": "LPACK",
    "description": "Primary Activity 3"
  },
  {
    "fieldName": "PRIMACT_4",
    "fidNumber": 1396,
    "dataType": "LPACK",
    "description": "Primary Activity 4"
  },
  {
    "fieldName": "PRIMACT_5",
    "fidNumber": 1397,
    "dataType": "LPACK",
    "description": "Primary Activity 5"
  },
  {
    "fieldName": "MKT_CAP_64",
    "fidNumber": 1400,
    "dataType": "INT64",
    "description": "Market Cap with Full Precision"
  },
  {
    "fieldName": "NORMALIZED_MKT_CAP_64",
    "fidNumber": 1401,
    "dataType": "INT64",
    "description": "Normalized Market Cap with Full Precision"
  },
  {
    "fieldName": "TRD_PRC_1_FP",
    "fidNumber": 1402,
    "dataType": "LPACK",
    "description": "Last Price (full precision)"
  },
  {
    "fieldName": "HST_CLOSE_FP",
    "fidNumber": 1403,
    "dataType": "LPACK",
    "description": "Historical close (full precision)"
  },
  {
    "fieldName": "SETTLE_FP",
    "fidNumber": 1404,
    "dataType": "LPACK",
    "description": "Settle (full precision)"
  },
  {
    "fieldName": "EXERCISED",
    "fidNumber": 1412,
    "dataType": "LONG",
    "description": "Number Exercised"
  },
  {
    "fieldName": "CONTRIB_1",
    "fidNumber": 1416,
    "dataType": "INT",
    "description": "Contributor"
  },
  {
    "fieldName": "ORDER_BID",
    "fidNumber": 1431,
    "dataType": "LPACK",
    "description": "Order Bid"
  },
  {
    "fieldName": "ORDER_ASK",
    "fidNumber": 1432,
    "dataType": "LPACK",
    "description": "Order Ask"
  },
  {
    "fieldName": "BEST_BID1",
    "fidNumber": 1436,
    "dataType": "LPACK",
    "description": "Best Bid"
  },
  {
    "fieldName": "BEST_BID2",
    "fidNumber": 1437,
    "dataType": "LPACK",
    "description": "Second Best Bid"
  },
  {
    "fieldName": "BEST_BID3",
    "fidNumber": 1438,
    "dataType": "LPACK",
    "description": "Third Best Bid"
  },
  {
    "fieldName": "BEST_BID4",
    "fidNumber": 1439,
    "dataType": "LPACK",
    "description": "Fourth Best Bid"
  },
  {
    "fieldName": "BEST_BID5",
    "fidNumber": 1440,
    "dataType": "LPACK",
    "description": "Fifth Best Bid"
  },
  {
    "fieldName": "BEST_ASK1",
    "fidNumber": 1441,
    "dataType": "LPACK",
    "description": "Best Ask"
  },
  {
    "fieldName": "BEST_ASK2",
    "fidNumber": 1442,
    "dataType": "LPACK",
    "description": "Second Best Ask"
  },
  {
    "fieldName": "BEST_ASK3",
    "fidNumber": 1443,
    "dataType": "LPACK",
    "description": "Third Best Ask"
  },
  {
    "fieldName": "BEST_ASK4",
    "fidNumber": 1444,
    "dataType": "LPACK",
    "description": "Fourth Best Ask"
  },
  {
    "fieldName": "BEST_ASK5",
    "fidNumber": 1445,
    "dataType": "LPACK",
    "description": "Fifth Best Ask"
  },
  {
    "fieldName": "REG_ID1",
    "fidNumber": 1456,
    "dataType": "BLOB",
    "description": "Permission Register ID"
  },
  {
    "fieldName": "REG_FIELD1",
    "fidNumber": 1457,
    "dataType": "BLOB",
    "description": "Permission Register Field"
  },
  {
    "fieldName": "BBG_12M_NET_SALES",
    "fidNumber": 1458,
    "dataType": "INT",
    "description": "BBG Sales Trailing 12m"
  },
  {
    "fieldName": "BBG_12M_CASH_FROM_OPER",
    "fidNumber": 1459,
    "dataType": "INT",
    "description": "BBG Operating Cash Flow 12m"
  },
  {
    "fieldName": "BBG_12M_NET_OP_PROF_AFT_TAX",
    "fidNumber": 1460,
    "dataType": "INT",
    "description": "BBG Operating Profit 12m"
  },
  {
    "fieldName": "BBG_EV_TO_12M_SALES",
    "fidNumber": 1461,
    "dataType": "INT",
    "description": "BBG Enterprise Val/Sales"
  },
  {
    "fieldName": "BBG_EV_TO_12M_EBITDA",
    "fidNumber": 1462,
    "dataType": "INT",
    "description": "BBG Enterprise Val/12m EBITDA"
  },
  {
    "fieldName": "BBG_MARK_CAP_OP_CASH_FL",
    "fidNumber": 1463,
    "dataType": "INT",
    "description": "BBG Market Cap/Operating Cash Flow"
  },
  {
    "fieldName": "BBG_EV_TO_12M_FCF",
    "fidNumber": 1464,
    "dataType": "INT",
    "description": "BBG EV/Operating Cash Flow"
  },
  {
    "fieldName": "BBG_TOT_DEBT_TO_EBITDA",
    "fidNumber": 1465,
    "dataType": "INT",
    "description": "BBG Debt/EBITDA"
  },
  {
    "fieldName": "BBG_ENTERPRS_VALUE",
    "fidNumber": 1466,
    "dataType": "INT",
    "description": "BBG Enterprise Value"
  },
  {
    "fieldName": "BBG_MIFID_LG_IN_SC_VAL",
    "fidNumber": 1467,
    "dataType": "LONG",
    "description": "BBG MiFID Large In Scale Value"
  },
  {
    "fieldName": "BBG_MIFID_LG_IN_SC_SHR",
    "fidNumber": 1468,
    "dataType": "LONG",
    "description": "BBG MiFID Large In Scale Shares"
  },
  {
    "fieldName": "BBG_LIS_PRE_TR_LC",
    "fidNumber": 1469,
    "dataType": "LONG",
    "description": "BBG LIS Pretrade LC"
  },
  {
    "fieldName": "BBG_LIS_POST_TR_LC",
    "fidNumber": 1470,
    "dataType": "LONG",
    "description": "BBG LIS Posttrade LC"
  },
  {
    "fieldName": "BBG_LIS_PRE_TR_EUR",
    "fidNumber": 1471,
    "dataType": "LONG",
    "description": "BBG LIS Pretrade Euro"
  },
  {
    "fieldName": "BBG_LIS_POST_TR_EUR",
    "fidNumber": 1472,
    "dataType": "LONG",
    "description": "BBG LIS Posttrade Euro"
  },
  {
    "fieldName": "VENUE_MIC_ID",
    "fidNumber": 1500,
    "dataType": "STRING",
    "description": "Venue MIC ID"
  },
  {
    "fieldName": "VENUE_MIC_DESC",
    "fidNumber": 1501,
    "dataType": "STRING",
    "description": "Venue MIC Description"
  },
  {
    "fieldName": "OTC_WAIVER_ID",
    "fidNumber": 1502,
    "dataType": "STRING",
    "description": "OTC Waiver ID"
  },
  {
    "fieldName": "OTC_WAIVER_DESC",
    "fidNumber": 1503,
    "dataType": "STRING",
    "description": "OTC Waiver Description"
  },
  {
    "fieldName": "MIFID_IDM",
    "fidNumber": 1504,
    "dataType": "STRING",
    "description": "Investment Decision Maker"
  },
  {
    "fieldName": "UNDISCLOSED_SELL",
    "fidNumber": 1505,
    "dataType": "STRING",
    "description": "Undisclosed Sell"
  },
  {
    "fieldName": "SEQNO",
    "fidNumber": 1720,
    "dataType": "INT",
    "description": "Sequence No. (obsolete)"
  },
  {
    "fieldName": "TABTEXT",
    "fidNumber": 1723,
    "dataType": "INT",
    "description": "TABTEXT"
  },
  {
    "fieldName": "NEWS_SOURCE",
    "fidNumber": 1725,
    "dataType": "STRING",
    "description": "News Source"
  },
  {
    "fieldName": "BCAST_REF",
    "fidNumber": 1728,
    "dataType": "STRING",
    "description": "Broadcast Cross-Reference"
  },
  {
    "fieldName": "BEST_BSIZ1",
    "fidNumber": 1730,
    "dataType": "LONG",
    "description": "Best Bid Size"
  },
  {
    "fieldName": "BEST_BSIZ2",
    "fidNumber": 1731,
    "dataType": "LONG",
    "description": "Best Bid2 Size"
  },
  {
    "fieldName": "BEST_BSIZ3",
    "fidNumber": 1732,
    "dataType": "LONG",
    "description": "Best Bid3 Size"
  },
  {
    "fieldName": "BEST_BSIZ4",
    "fidNumber": 1733,
    "dataType": "LONG",
    "description": "Best Bid4 Size"
  },
  {
    "fieldName": "BEST_BSIZ5",
    "fidNumber": 1734,
    "dataType": "LONG",
    "description": "Best Bid5 Size"
  },
  {
    "fieldName": "BEST_ASIZ1",
    "fidNumber": 1735,
    "dataType": "LONG",
    "description": "Best Ask Size"
  },
  {
    "fieldName": "BEST_ASIZ2",
    "fidNumber": 1736,
    "dataType": "LONG",
    "description": "Best Ask2 Size"
  },
  {
    "fieldName": "BEST_ASIZ3",
    "fidNumber": 1737,
    "dataType": "LONG",
    "description": "Best Ask3 Size"
  },
  {
    "fieldName": "BEST_ASIZ4",
    "fidNumber": 1738,
    "dataType": "LONG",
    "description": "Best Ask4 Size"
  },
  {
    "fieldName": "BEST_ASIZ5",
    "fidNumber": 1739,
    "dataType": "LONG",
    "description": "Best Ask5 Size"
  },
  {
    "fieldName": "NO_BIDMKR2",
    "fidNumber": 1740,
    "dataType": "LPACK",
    "description": "Number Bid MMKR 2"
  },
  {
    "fieldName": "NO_BIDMKR3",
    "fidNumber": 1741,
    "dataType": "LPACK",
    "description": "Number Bid MMKR 3"
  },
  {
    "fieldName": "NO_BIDMKR4",
    "fidNumber": 1742,
    "dataType": "LPACK",
    "description": "Number Bid MMKR 4"
  },
  {
    "fieldName": "NO_BIDMKR5",
    "fidNumber": 1743,
    "dataType": "LPACK",
    "description": "Number Bid MMKR 5"
  },
  {
    "fieldName": "NO_ASKMMKR2",
    "fidNumber": 1744,
    "dataType": "LPACK",
    "description": "Number Ask MMKR 2"
  },
  {
    "fieldName": "NO_ASKMMKR3",
    "fidNumber": 1745,
    "dataType": "LPACK",
    "description": "Number Ask MMKR 3"
  },
  {
    "fieldName": "NO_ASKMMKR4",
    "fidNumber": 1746,
    "dataType": "LPACK",
    "description": "Number Ask MMKR 4"
  },
  {
    "fieldName": "NO_ASKMMKR5",
    "fidNumber": 1747,
    "dataType": "LPACK",
    "description": "Number Ask MMKR 5"
  },
  {
    "fieldName": "NEWS_DATE",
    "fidNumber": 1748,
    "dataType": "DATE",
    "description": "News Date"
  },
  {
    "fieldName": "PROD_CODE",
    "fidNumber": 1749,
    "dataType": "VECTOR_STRING",
    "description": "Prod Code"
  },
  {
    "fieldName": "TOPIC_CODE",
    "fidNumber": 1750,
    "dataType": "VECTOR_STRING",
    "description": "Topic Code"
  },
  {
    "fieldName": "CO_IDS",
    "fidNumber": 1751,
    "dataType": "VECTOR_STRING",
    "description": "CO IDS"
  },
  {
    "fieldName": "HST_SESVOL",
    "fidNumber": 1758,
    "dataType": "LONG",
    "description": "Previous Session Volume"
  },
  {
    "fieldName": "PRV_HIGH",
    "fidNumber": 1759,
    "dataType": "LPACK",
    "description": "Previous High"
  },
  {
    "fieldName": "PRV_LOW",
    "fidNumber": 1760,
    "dataType": "LPACK",
    "description": "Previous Low"
  },
  {
    "fieldName": "PRV_OPEN",
    "fidNumber": 1761,
    "dataType": "LPACK",
    "description": "Previous Open"
  },
  {
    "fieldName": "PRV_LAST",
    "fidNumber": 1762,
    "dataType": "LPACK",
    "description": "Previous Last"
  },
  {
    "fieldName": "DEALT_VL1",
    "fidNumber": 1791,
    "dataType": "LPACK",
    "description": "Dealt Volume 1"
  },
  {
    "fieldName": "LONGLINK1",
    "fidNumber": 1800,
    "dataType": "STRING",
    "description": "LONGLINK1"
  },
  {
    "fieldName": "LONGLINK2",
    "fidNumber": 1801,
    "dataType": "STRING",
    "description": "LONGLINK2"
  },
  {
    "fieldName": "LONGLINK3",
    "fidNumber": 1802,
    "dataType": "STRING",
    "description": "LONGLINK3"
  },
  {
    "fieldName": "LONGLINK4",
    "fidNumber": 1803,
    "dataType": "STRING",
    "description": "LONGLINK4"
  },
  {
    "fieldName": "LONGLINK5",
    "fidNumber": 1804,
    "dataType": "STRING",
    "description": "LONGLINK5"
  },
  {
    "fieldName": "LONGLINK6",
    "fidNumber": 1805,
    "dataType": "STRING",
    "description": "LONGLINK6"
  },
  {
    "fieldName": "LONGLINK7",
    "fidNumber": 1806,
    "dataType": "STRING",
    "description": "LONGLINK7"
  },
  {
    "fieldName": "LONGLINK8",
    "fidNumber": 1807,
    "dataType": "STRING",
    "description": "LONGLINK8"
  },
  {
    "fieldName": "LONGLINK9",
    "fidNumber": 1808,
    "dataType": "STRING",
    "description": "LONGLINK9"
  },
  {
    "fieldName": "LONGLINK10",
    "fidNumber": 1809,
    "dataType": "STRING",
    "description": "LONGLINK10"
  },
  {
    "fieldName": "LONGLINK11",
    "fidNumber": 1810,
    "dataType": "STRING",
    "description": "LONGLINK11"
  },
  {
    "fieldName": "LONGLINK12",
    "fidNumber": 1811,
    "dataType": "STRING",
    "description": "LONGLINK12"
  },
  {
    "fieldName": "LONGLINK13",
    "fidNumber": 1812,
    "dataType": "STRING",
    "description": "LONGLINK13"
  },
  {
    "fieldName": "LONGLINK14",
    "fidNumber": 1813,
    "dataType": "STRING",
    "description": "LONGLINK14"
  },
  {
    "fieldName": "LONGPREVLR",
    "fidNumber": 1814,
    "dataType": "STRING",
    "description": "Long PREV_LR"
  },
  {
    "fieldName": "LONGNEXTLR",
    "fidNumber": 1815,
    "dataType": "STRING",
    "description": "Long NEXT_LR"
  },
  {
    "fieldName": "DVOL1_SC",
    "fidNumber": 1820,
    "dataType": "STRING",
    "description": "Dealt Vol Scale"
  },
  {
    "fieldName": "CROSS_SC",
    "fidNumber": 1825,
    "dataType": "STRING",
    "description": "Cross Rates Scale"
  },
  {
    "fieldName": "DLG_CODE1",
    "fidNumber": 1826,
    "dataType": "STRING",
    "description": "Dealing Code 1"
  },
  {
    "fieldName": "CTBTR_1",
    "fidNumber": 1831,
    "dataType": "STRING",
    "description": "Contributor Name 1"
  },
  {
    "fieldName": "CTB_LOC1",
    "fidNumber": 1836,
    "dataType": "STRING",
    "description": "Contributor Location 1"
  },
  {
    "fieldName": "CTB_PAGE1",
    "fidNumber": 1841,
    "dataType": "STRING",
    "description": "Contributor Page Code 1"
  },
  {
    "fieldName": "AMT_OS",
    "fidNumber": 1850,
    "dataType": "LPACK",
    "description": "Amount Outstanding"
  },
  {
    "fieldName": "AMT_OS_SC",
    "fidNumber": 1851,
    "dataType": "STRING",
    "description": "Amount Outstanding Scale"
  },
  {
    "fieldName": "NRG_CMT",
    "fidNumber": 1857,
    "dataType": "STRING",
    "description": "Energy Comment"
  },
  {
    "fieldName": "PRC_AREA",
    "fidNumber": 1858,
    "dataType": "STRING",
    "description": "Price Location"
  },
  {
    "fieldName": "DATE_RANGE",
    "fidNumber": 1859,
    "dataType": "STRING",
    "description": "Date Range"
  },
  {
    "fieldName": "BENCH_PRC",
    "fidNumber": 1860,
    "dataType": "LPACK",
    "description": "Bench Price"
  },
  {
    "fieldName": "BENCH_DATE",
    "fidNumber": 1861,
    "dataType": "DATE",
    "description": "Bench Date"
  },
  {
    "fieldName": "PAY_FREQ",
    "fidNumber": 1868,
    "dataType": "STRING",
    "description": "Payment Frequency"
  },
  {
    "fieldName": "OFF_CD_IND",
    "fidNumber": 1869,
    "dataType": "STRING",
    "description": "Official Code Indicator"
  },
  {
    "fieldName": "VALUE_DT1",
    "fidNumber": 1875,
    "dataType": "DATE",
    "description": "Value Date 1"
  },
  {
    "fieldName": "MOD_DURTN",
    "fidNumber": 1885,
    "dataType": "LPACK",
    "description": "Modified Duration"
  },
  {
    "fieldName": "PRC_VOLTY",
    "fidNumber": 1886,
    "dataType": "LPACK",
    "description": "Price Volatility"
  },
  {
    "fieldName": "ANNC_DATE",
    "fidNumber": 1887,
    "dataType": "DATE",
    "description": "Announcement Date"
  },
  {
    "fieldName": "THEO_AUCTION_PRICE",
    "fidNumber": 1888,
    "dataType": "LPACK",
    "description": "Theoretical Auction Price"
  },
  {
    "fieldName": "THEO_AUCTION_VOL",
    "fidNumber": 1889,
    "dataType": "LONG",
    "description": "Theoretical Auction Vol"
  },
  {
    "fieldName": "THEO_HIGH",
    "fidNumber": 1890,
    "dataType": "LPACK",
    "description": "Theoretical High"
  },
  {
    "fieldName": "THEO_LOW",
    "fidNumber": 1891,
    "dataType": "LPACK",
    "description": "Theoretical Low"
  },
  {
    "fieldName": "THEO_YRHI",
    "fidNumber": 1892,
    "dataType": "LPACK",
    "description": "Theoretical Year High"
  },
  {
    "fieldName": "THEO_YRLO",
    "fidNumber": 1893,
    "dataType": "LPACK",
    "description": "Theoretical Year Low"
  },
  {
    "fieldName": "THEO_LFHI",
    "fidNumber": 1894,
    "dataType": "LPACK",
    "description": "Theoretical Life High"
  },
  {
    "fieldName": "THEO_LFLO",
    "fidNumber": 1895,
    "dataType": "LPACK",
    "description": "Theoretical Life Low"
  },
  {
    "fieldName": "THEO_LHDAT",
    "fidNumber": 1896,
    "dataType": "DATE",
    "description": "Theoretical Life High"
  },
  {
    "fieldName": "THEO_LLDAT",
    "fidNumber": 1897,
    "dataType": "DATE",
    "description": "Theoretical Life Low"
  },
  {
    "fieldName": "FLOOR_VOL",
    "fidNumber": 1899,
    "dataType": "LONG",
    "description": "Floor Volume"
  },
  {
    "fieldName": "IA_DATE",
    "fidNumber": 1900,
    "dataType": "DATE",
    "description": "Interest Adjustment Date"
  },
  {
    "fieldName": "AMT_OS_DAT",
    "fidNumber": 1901,
    "dataType": "DATE",
    "description": "Amount Outstanding Date"
  },
  {
    "fieldName": "QTE_CNT1",
    "fidNumber": 1955,
    "dataType": "LPACK",
    "description": "Quote Count 1"
  },
  {
    "fieldName": "QTE_CNT2",
    "fidNumber": 1956,
    "dataType": "LPACK",
    "description": "Quote Count 2"
  },
  {
    "fieldName": "SEC_HIGH",
    "fidNumber": 1957,
    "dataType": "LPACK",
    "description": "Secondary High"
  },
  {
    "fieldName": "SEC_HI_TP",
    "fidNumber": 1958,
    "dataType": "STRING",
    "description": "Sec High Type"
  },
  {
    "fieldName": "SEC_LOW",
    "fidNumber": 1959,
    "dataType": "LPACK",
    "description": "Secondary Low"
  },
  {
    "fieldName": "SEC_LO_TP",
    "fidNumber": 1960,
    "dataType": "STRING",
    "description": "Sec Low Type"
  },
  {
    "fieldName": "OPEN_PRC2",
    "fidNumber": 1961,
    "dataType": "LPACK",
    "description": "Open Price 2"
  },
  {
    "fieldName": "OPEN_TYPE",
    "fidNumber": 1962,
    "dataType": "STRING",
    "description": "Open Type"
  },
  {
    "fieldName": "HST_CLOSE2",
    "fidNumber": 1963,
    "dataType": "LPACK",
    "description": "Historic Close 2"
  },
  {
    "fieldName": "CLOSE_TYPE",
    "fidNumber": 1964,
    "dataType": "STRING",
    "description": "Close Type"
  },
  {
    "fieldName": "RATING_2",
    "fidNumber": 1965,
    "dataType": "STRING",
    "description": "A Generic Rating Field"
  },
  {
    "fieldName": "RATING_ID2",
    "fidNumber": 1966,
    "dataType": "STRING",
    "description": "Rating Agency Identifier"
  },
  {
    "fieldName": "BKGD_REF",
    "fidNumber": 1967,
    "dataType": "STRING",
    "description": "Background Reference"
  },
  {
    "fieldName": "CTBTR_BKGD",
    "fidNumber": 1968,
    "dataType": "STRING",
    "description": "Contributor Background"
  },
  {
    "fieldName": "YIELD_TP",
    "fidNumber": 1969,
    "dataType": "STRING",
    "description": "Yield Type"
  },
  {
    "fieldName": "SEC_YLD_1",
    "fidNumber": 1970,
    "dataType": "LPACK",
    "description": "Second Yield"
  },
  {
    "fieldName": "ACT_FLAG1",
    "fidNumber": 1975,
    "dataType": "STRING",
    "description": "Activity Flag 1"
  },
  {
    "fieldName": "SC_AFLAG1",
    "fidNumber": 1980,
    "dataType": "STRING",
    "description": "Secondary Activity Flag 1"
  },
  {
    "fieldName": "SEC_VOL1",
    "fidNumber": 1985,
    "dataType": "LPACK",
    "description": "Secondary Volume 1"
  },
  {
    "fieldName": "VOL_TP1",
    "fidNumber": 1990,
    "dataType": "STRING",
    "description": "Volume Type 1"
  },
  {
    "fieldName": "GEN_TEXT16",
    "fidNumber": 1995,
    "dataType": "STRING",
    "description": "General Text"
  },
  {
    "fieldName": "GEN_VAL1",
    "fidNumber": 1996,
    "dataType": "LPACK",
    "description": "General Value 1"
  },
  {
    "fieldName": "GEN_VAL2",
    "fidNumber": 1997,
    "dataType": "LPACK",
    "description": "General Value 2"
  },
  {
    "fieldName": "GEN_VAL3",
    "fidNumber": 1998,
    "dataType": "LPACK",
    "description": "General Value 3"
  },
  {
    "fieldName": "GEN_VAL4",
    "fidNumber": 1999,
    "dataType": "LPACK",
    "description": "General Value 4"
  },
  {
    "fieldName": "STYP",
    "fidNumber": 2000,
    "dataType": "INT",
    "description": "Sec. Type"
  },
  {
    "fieldName": "GV2_TEXT",
    "fidNumber": 2001,
    "dataType": "STRING",
    "description": "Generic Text 2"
  },
  {
    "fieldName": "GV3_TEXT",
    "fidNumber": 2002,
    "dataType": "STRING",
    "description": "Generic Text 3"
  },
  {
    "fieldName": "GV4_TEXT",
    "fidNumber": 2003,
    "dataType": "STRING",
    "description": "Generic Text 4"
  },
  {
    "fieldName": "QCNT1_IND",
    "fidNumber": 2004,
    "dataType": "STRING",
    "description": "Quote Count Indicator 1"
  },
  {
    "fieldName": "QCNT2_IND",
    "fidNumber": 2005,
    "dataType": "STRING",
    "description": "Quote Count Indicator 2"
  },
  {
    "fieldName": "NM_IND",
    "fidNumber": 2006,
    "dataType": "STRING",
    "description": "Num Moves Indicator"
  },
  {
    "fieldName": "VALUE_TS1",
    "fidNumber": 2010,
    "dataType": "TIME",
    "description": "Activity Value Time 1"
  },
  {
    "fieldName": "BS_FLAG",
    "fidNumber": 2016,
    "dataType": "STRING",
    "description": "BS Flag"
  },
  {
    "fieldName": "AS_FLAG",
    "fidNumber": 2017,
    "dataType": "STRING",
    "description": "AS Flag"
  },
  {
    "fieldName": "IRGXID",
    "fidNumber": 2018,
    "dataType": "STRING",
    "description": "IRG Exch ID"
  },
  {
    "fieldName": "IRGBUY",
    "fidNumber": 2019,
    "dataType": "STRING",
    "description": "IRGBUY"
  },
  {
    "fieldName": "IRGSELL",
    "fidNumber": 2020,
    "dataType": "STRING",
    "description": "IRGSELL"
  },
  {
    "fieldName": "SEQNUM",
    "fidNumber": 2021,
    "dataType": "LONG",
    "description": "SeqNum"
  },
  {
    "fieldName": "PRNTYP",
    "fidNumber": 2022,
    "dataType": "STRING",
    "description": "Print type"
  },
  {
    "fieldName": "PRNTBCK",
    "fidNumber": 2023,
    "dataType": "LONG",
    "description": "Trades back"
  },
  {
    "fieldName": "QUOTIM",
    "fidNumber": 2025,
    "dataType": "TIME",
    "description": "Quote time"
  },
  {
    "fieldName": "STOCK_RIC",
    "fidNumber": 2026,
    "dataType": "STRING",
    "description": "Stock RIC"
  },
  {
    "fieldName": "GV1_DATE",
    "fidNumber": 2028,
    "dataType": "DATE",
    "description": "GV1 Date"
  },
  {
    "fieldName": "GEN_VAL5",
    "fidNumber": 2029,
    "dataType": "LPACK",
    "description": "Generic Value 5"
  },
  {
    "fieldName": "GEN_VAL6",
    "fidNumber": 2030,
    "dataType": "LPACK",
    "description": "Generic Value 6"
  },
  {
    "fieldName": "GEN_VAL7",
    "fidNumber": 2031,
    "dataType": "LPACK",
    "description": "Generic Value 7"
  },
  {
    "fieldName": "GEN_VAL8",
    "fidNumber": 2032,
    "dataType": "LPACK",
    "description": "Generic Value 8"
  },
  {
    "fieldName": "GEN_VAL9",
    "fidNumber": 2033,
    "dataType": "LPACK",
    "description": "Generic Value 9"
  },
  {
    "fieldName": "GEN_VAL10",
    "fidNumber": 2034,
    "dataType": "LPACK",
    "description": "Generic Value 10"
  },
  {
    "fieldName": "GV5_TEXT",
    "fidNumber": 2035,
    "dataType": "STRING",
    "description": "Generic Text 5"
  },
  {
    "fieldName": "GV6_TEXT",
    "fidNumber": 2036,
    "dataType": "STRING",
    "description": "Generic Text 6"
  },
  {
    "fieldName": "GV7_TEXT",
    "fidNumber": 2037,
    "dataType": "STRING",
    "description": "Generic Text 7"
  },
  {
    "fieldName": "GV8_TEXT",
    "fidNumber": 2038,
    "dataType": "STRING",
    "description": "Generic Text 8"
  },
  {
    "fieldName": "GV9_TEXT",
    "fidNumber": 2039,
    "dataType": "STRING",
    "description": "Generic Text 9"
  },
  {
    "fieldName": "GV10_TEXT",
    "fidNumber": 2040,
    "dataType": "STRING",
    "description": "Generic Text 10"
  },
  {
    "fieldName": "GV1_FLAG",
    "fidNumber": 2041,
    "dataType": "STRING",
    "description": "Generic Flag 1"
  },
  {
    "fieldName": "GV2_FLAG",
    "fidNumber": 2042,
    "dataType": "STRING",
    "description": "Generic Flag 2"
  },
  {
    "fieldName": "GV3_FLAG",
    "fidNumber": 2043,
    "dataType": "STRING",
    "description": "Generic Flag 3"
  },
  {
    "fieldName": "GV4_FLAG",
    "fidNumber": 2044,
    "dataType": "STRING",
    "description": "Generic Flag 4"
  },
  {
    "fieldName": "GV5_FLAG",
    "fidNumber": 2045,
    "dataType": "STRING",
    "description": "Generic Flag 5"
  },
  {
    "fieldName": "GV6_FLAG",
    "fidNumber": 2046,
    "dataType": "STRING",
    "description": "Generic Flag 6"
  },
  {
    "fieldName": "GV7_FLAG",
    "fidNumber": 2047,
    "dataType": "STRING",
    "description": "Generic Flag 7"
  },
  {
    "fieldName": "GV8_FLAG",
    "fidNumber": 2048,
    "dataType": "STRING",
    "description": "Generic Flag 8"
  },
  {
    "fieldName": "GV9_FLAG",
    "fidNumber": 2049,
    "dataType": "STRING",
    "description": "Generic Flag 9"
  },
  {
    "fieldName": "GV10_FLAG",
    "fidNumber": 2050,
    "dataType": "STRING",
    "description": "Generic Flag 10"
  },
  {
    "fieldName": "GV2_DATE",
    "fidNumber": 2051,
    "dataType": "DATE",
    "description": "Generic Date Field"
  },
  {
    "fieldName": "GN_TXT16_2",
    "fidNumber": 2052,
    "dataType": "STRING",
    "description": "Generic Text 2"
  },
  {
    "fieldName": "GN_TXT16_3",
    "fidNumber": 2053,
    "dataType": "STRING",
    "description": "Generic Text 3"
  },
  {
    "fieldName": "GN_TXT16_4",
    "fidNumber": 2054,
    "dataType": "STRING",
    "description": "Generic Text 4"
  },
  {
    "fieldName": "OFF_CD_IN2",
    "fidNumber": 2055,
    "dataType": "STRING",
    "description": "Official Code Indicator"
  },
  {
    "fieldName": "OFFC_CODE2",
    "fidNumber": 2056,
    "dataType": "STRING",
    "description": "Official Code 2"
  },
  {
    "fieldName": "CURR_COUPN",
    "fidNumber": 2058,
    "dataType": "LPACK",
    "description": "Current Coupon"
  },
  {
    "fieldName": "GV1_TIME",
    "fidNumber": 2061,
    "dataType": "TIME",
    "description": "Generic Time 1"
  },
  {
    "fieldName": "GV2_TIME",
    "fidNumber": 2062,
    "dataType": "TIME",
    "description": "Generic Time 2"
  },
  {
    "fieldName": "O_BID_TONE",
    "fidNumber": 2065,
    "dataType": "STRING",
    "description": "Order Bid Tone"
  },
  {
    "fieldName": "O_ASK_TONE",
    "fidNumber": 2066,
    "dataType": "STRING",
    "description": "Order Ask Tone"
  },
  {
    "fieldName": "EXCHTIM",
    "fidNumber": 2067,
    "dataType": "TIME",
    "description": "Exchange Time"
  },
  {
    "fieldName": "CONDCODE_1",
    "fidNumber": 2068,
    "dataType": "STRING",
    "description": "Condition Code 1"
  },
  {
    "fieldName": "CONDCODE_2",
    "fidNumber": 2069,
    "dataType": "STRING",
    "description": "Condition Code 2"
  },
  {
    "fieldName": "YRHI_IND",
    "fidNumber": 2075,
    "dataType": "STRING",
    "description": "Year High Indicator"
  },
  {
    "fieldName": "YRLO_IND",
    "fidNumber": 2076,
    "dataType": "STRING",
    "description": "Year Low Indicator"
  },
  {
    "fieldName": "BETA_VAL",
    "fidNumber": 2077,
    "dataType": "LPACK",
    "description": "Beta Value"
  },
  {
    "fieldName": "CONV_FAC",
    "fidNumber": 2078,
    "dataType": "DOUBLE",
    "description": "Conversion Factor"
  },
  {
    "fieldName": "SIZE_CONV_FAC",
    "fidNumber": 2079,
    "dataType": "INT",
    "description": "Size Conversion Factor"
  },
  {
    "fieldName": "PREF_DISP",
    "fidNumber": 2080,
    "dataType": "INT",
    "description": "Preferred Display Template"
  },
  {
    "fieldName": "PREF_LINK",
    "fidNumber": 2081,
    "dataType": "STRING",
    "description": "Preferred Link Record"
  },
  {
    "fieldName": "RESTRICT",
    "fidNumber": 2082,
    "dataType": "STRING",
    "description": "Restricted Security"
  },
  {
    "fieldName": "BORROW",
    "fidNumber": 2083,
    "dataType": "STRING",
    "description": "Borrowable Security"
  },
  {
    "fieldName": "EXCHDATE",
    "fidNumber": 2084,
    "dataType": "DATE",
    "description": "Exchange date"
  },
  {
    "fieldName": "EXCHZONE",
    "fidNumber": 2085,
    "dataType": "STRING",
    "description": "Exchange time zone"
  },
  {
    "fieldName": "EXCHZONE_2",
    "fidNumber": 2086,
    "dataType": "STRING",
    "description": "Alt. exchange time zone"
  },
  {
    "fieldName": "HOLIDAY_CALENDAR",
    "fidNumber": 2087,
    "dataType": "STRING",
    "description": "Holiday calendar"
  },
  {
    "fieldName": "BID_OFFICIAL ",
    "fidNumber": 2090,
    "dataType": "LPACK",
    "description": "Official Bid"
  },
  {
    "fieldName": "ASK_OFFICIAL ",
    "fidNumber": 2091,
    "dataType": "LPACK",
    "description": "Official Ask"
  },
  {
    "fieldName": "BID_UNOFFICIAL",
    "fidNumber": 2092,
    "dataType": "LPACK",
    "description": "Unofficial  Bid"
  },
  {
    "fieldName": "ASK_UNOFFICIAL",
    "fidNumber": 2093,
    "dataType": "LPACK",
    "description": "Unofficial  Ask"
  },
  {
    "fieldName": "ASK_HIGH",
    "fidNumber": 2094,
    "dataType": "LPACK",
    "description": "High Ask Price"
  },
  {
    "fieldName": "NAP_PRC",
    "fidNumber": 2095,
    "dataType": "LPACK",
    "description": "Average Price"
  },
  {
    "fieldName": "STERLING_PRC",
    "fidNumber": 2096,
    "dataType": "LPACK",
    "description": "Sterling Price"
  },
  {
    "fieldName": "MARKET_PHASE",
    "fidNumber": 2100,
    "dataType": "INT",
    "description": "Market Phase"
  },
  {
    "fieldName": "OPENING_AUCTION_VOLUME5DAVG_1D",
    "fidNumber": 2101,
    "dataType": "DOUBLE",
    "description": "Opening Auction Avg Vol 5d"
  },
  {
    "fieldName": "OPENING_AUCTION_VOLUME10DAVG_1D",
    "fidNumber": 2102,
    "dataType": "DOUBLE",
    "description": "Opening Auction Avg Vol 10d"
  },
  {
    "fieldName": "OPENING_AUCTION_VOLUME20DAVG_1D",
    "fidNumber": 2103,
    "dataType": "DOUBLE",
    "description": "Opening Auction Avg Vol 20d"
  },
  {
    "fieldName": "OPENING_AUCTION_VOLUME30DAVG_1D",
    "fidNumber": 2104,
    "dataType": "DOUBLE",
    "description": "Opening Auction Avg Vol 30d"
  },
  {
    "fieldName": "OPENING_AUCTION_VOLUME60DAVG_1D",
    "fidNumber": 2105,
    "dataType": "DOUBLE",
    "description": "Opening Auction Avg Vol 60d"
  },
  {
    "fieldName": "CLOSING_AUCTION_VOLUME5DAVG_1D",
    "fidNumber": 2110,
    "dataType": "DOUBLE",
    "description": "Closing Auction Avg Vol 5d"
  },
  {
    "fieldName": "CLOSING_AUCTION_VOLUME10DAVG_1D",
    "fidNumber": 2111,
    "dataType": "DOUBLE",
    "description": "Closing Auction Avg Vol 10d"
  },
  {
    "fieldName": "CLOSING_AUCTION_VOLUME20DAVG_1D",
    "fidNumber": 2112,
    "dataType": "DOUBLE",
    "description": "Closing Auction Avg Vol 20d"
  },
  {
    "fieldName": "CLOSING_AUCTION_VOLUME30DAVG_1D",
    "fidNumber": 2113,
    "dataType": "DOUBLE",
    "description": "Closing Auction Avg Vol 30d"
  },
  {
    "fieldName": "CLOSING_AUCTION_VOLUME60DAVG_1D",
    "fidNumber": 2114,
    "dataType": "DOUBLE",
    "description": "Closing Auction Avg Vol 60d"
  },
  {
    "fieldName": "HST_OPENING_AUCTION_PRICE",
    "fidNumber": 2120,
    "dataType": "LPACK",
    "description": "Yesterday's Opening Auction Price"
  },
  {
    "fieldName": "HST_CLOSING_AUCTION_PRICE",
    "fidNumber": 2121,
    "dataType": "LPACK",
    "description": "Yesterday's Closing Auction Price"
  },
  {
    "fieldName": "HST_OPENING_AUCTION_VOLUME",
    "fidNumber": 2122,
    "dataType": "LONG",
    "description": "Yesterday's Opening Auction Volume"
  },
  {
    "fieldName": "HST_CLOSING_AUCTION_VOLUME",
    "fidNumber": 2123,
    "dataType": "LONG",
    "description": "Yesterday's Closing Auction Volume"
  },
  {
    "fieldName": "HST_AUCTION_DATE",
    "fidNumber": 2124,
    "dataType": "DATE",
    "description": "Yesterday's Auction Date"
  },
  {
    "fieldName": "YLD_NETCHG_PCT",
    "fidNumber": 2146,
    "dataType": "DOUBLE",
    "description": "Yield Net Change %"
  },
  {
    "fieldName": "OAS_BID",
    "fidNumber": 2147,
    "dataType": "DOUBLE",
    "description": "OAS Spread Bid"
  },
  {
    "fieldName": "OAS_ASK",
    "fidNumber": 2148,
    "dataType": "DOUBLE",
    "description": "OAS Spread Ask"
  },
  {
    "fieldName": "BBG_RT_PRICING_SOURCE",
    "fidNumber": 2149,
    "dataType": "STRING",
    "description": "Bloomberg RT pricing source"
  },
  {
    "fieldName": "BOND_FACTOR",
    "fidNumber": 2150,
    "dataType": "DOUBLE",
    "description": "Bond factor"
  },
  {
    "fieldName": "MIN_DENOM",
    "fidNumber": 2151,
    "dataType": "DOUBLE",
    "description": "Bond Minimum Denomination"
  },
  {
    "fieldName": "MIN_INCREMENT",
    "fidNumber": 2152,
    "dataType": "DOUBLE",
    "description": "Bond Minimum Increment"
  },
  {
    "fieldName": "MID_YIELD",
    "fidNumber": 2153,
    "dataType": "DOUBLE",
    "description": "Mid Yield"
  },
  {
    "fieldName": "BID_SPREAD",
    "fidNumber": 2154,
    "dataType": "LPACK",
    "description": "Bid Spread"
  },
  {
    "fieldName": "ASK_SPREAD",
    "fidNumber": 2155,
    "dataType": "LPACK",
    "description": "Ask Spread"
  },
  {
    "fieldName": "MID_SPREAD",
    "fidNumber": 2156,
    "dataType": "LPACK",
    "description": "Mid Spread"
  },
  {
    "fieldName": "ACC_INT",
    "fidNumber": 2158,
    "dataType": "DOUBLE",
    "description": "Accrued Interest"
  },
  {
    "fieldName": "BENCHMARK_SECURITY",
    "fidNumber": 2159,
    "dataType": "STRING",
    "description": "Benchmark Security"
  },
  {
    "fieldName": "BENCHMARK_YIELD",
    "fidNumber": 2160,
    "dataType": "DOUBLE",
    "description": "Yield of Benchmark Security"
  },
  {
    "fieldName": "TRADE_OAS_SPREAD",
    "fidNumber": 2161,
    "dataType": "DOUBLE",
    "description": "OAS Spread"
  },
  {
    "fieldName": "BID_DISCOUNT",
    "fidNumber": 2162,
    "dataType": "DOUBLE",
    "description": "Bid Discount"
  },
  {
    "fieldName": "ASK_DISCOUNT",
    "fidNumber": 2163,
    "dataType": "DOUBLE",
    "description": "Ask Discount"
  },
  {
    "fieldName": "BID_DISC_PRICE",
    "fidNumber": 2164,
    "dataType": "LPACK",
    "description": "Bid Discount Price"
  },
  {
    "fieldName": "ASK_DISC_PRICE",
    "fidNumber": 2165,
    "dataType": "LPACK",
    "description": "Ask Discount Price"
  },
  {
    "fieldName": "MACAULAY_DURATION",
    "fidNumber": 2166,
    "dataType": "DOUBLE",
    "description": "Macaulay Duration"
  },
  {
    "fieldName": "CONVEXITY",
    "fidNumber": 2167,
    "dataType": "DOUBLE",
    "description": "Convexity"
  },
  {
    "fieldName": "BENCHMARK_TERM",
    "fidNumber": 2168,
    "dataType": "LONG",
    "description": "Benchmark Term"
  },
  {
    "fieldName": "MODIFIED_DURATION",
    "fidNumber": 2169,
    "dataType": "DOUBLE",
    "description": "Bond Modified Duration"
  },
  {
    "fieldName": "BID_G_SPREAD",
    "fidNumber": 2170,
    "dataType": "DOUBLE",
    "description": "Bid G-spread"
  },
  {
    "fieldName": "BID_I_SPREAD",
    "fidNumber": 2171,
    "dataType": "DOUBLE",
    "description": "Bid I-spread"
  },
  {
    "fieldName": "BID_Z_SPREAD",
    "fidNumber": 2172,
    "dataType": "DOUBLE",
    "description": "Bid Z-spread"
  },
  {
    "fieldName": "BID_ASSET_SWAP_SPREAD",
    "fidNumber": 2173,
    "dataType": "DOUBLE",
    "description": "Bid Asset Swap Spread"
  },
  {
    "fieldName": "INFLATION_ADJ_INDICATOR",
    "fidNumber": 2174,
    "dataType": "INT",
    "description": "Inflation Adjustment Indicator"
  },
  {
    "fieldName": "PROS_DATE",
    "fidNumber": 2175,
    "dataType": "DATE",
    "description": "Prospectus Date"
  },
  {
    "fieldName": "STATUS",
    "fidNumber": 3001,
    "dataType": "STRING",
    "description": "Quote Condition"
  },
  {
    "fieldName": "NEWSCOUNT",
    "fidNumber": 3002,
    "dataType": "INT",
    "description": "Obsolete"
  },
  {
    "fieldName": "OFFER",
    "fidNumber": 3004,
    "dataType": "LPACK",
    "description": "Offer"
  },
  {
    "fieldName": "FUNDDAY",
    "fidNumber": 3005,
    "dataType": "INT",
    "description": "Fund Day"
  },
  {
    "fieldName": "MKT_MKR_STATUS",
    "fidNumber": 3006,
    "dataType": "STRING",
    "description": "MM Status"
  },
  {
    "fieldName": "VENDOR_TICKER",
    "fidNumber": 3010,
    "dataType": "STRING",
    "description": "Vendor ticker name"
  },
  {
    "fieldName": "EXCHANGE_TICKER",
    "fidNumber": 3011,
    "dataType": "STRING",
    "description": "Exchange ticker name"
  },
  {
    "fieldName": "VENDOR_SOURCE_ID",
    "fidNumber": 3012,
    "dataType": "INT",
    "description": "Vendor source ID"
  },
  {
    "fieldName": "LIVE_OR_STATIC_DATA_IND",
    "fidNumber": 3013,
    "dataType": "INT",
    "description": "Live or static data indicator"
  },
  {
    "fieldName": "MG_STATE",
    "fidNumber": 3590,
    "dataType": "STRING",
    "description": "State"
  },
  {
    "fieldName": "DELAY",
    "fidNumber": 3597,
    "dataType": "INT",
    "description": "Delay amount"
  },
  {
    "fieldName": "ISSUER",
    "fidNumber": 3621,
    "dataType": "STRING",
    "description": "Issuer"
  },
  {
    "fieldName": "NOMINAL_CURRENCY",
    "fidNumber": 3622,
    "dataType": "STRING",
    "description": "Nom. Currency"
  },
  {
    "fieldName": "DIVIDEND_CURRENCY",
    "fidNumber": 3623,
    "dataType": "STRING",
    "description": "Div. Currency"
  },
  {
    "fieldName": "ISSUERS_DOMICILE",
    "fidNumber": 3624,
    "dataType": "STRING",
    "description": "Domicile"
  },
  {
    "fieldName": "ISSUERS_SECTOR",
    "fidNumber": 3625,
    "dataType": "INT",
    "description": "Sector"
  },
  {
    "fieldName": "INTEREST_FREQ_N",
    "fidNumber": 3626,
    "dataType": "INT",
    "description": "Int. Freq."
  },
  {
    "fieldName": "SPREAD_DATE",
    "fidNumber": 3627,
    "dataType": "DATE",
    "description": "Spread Date"
  },
  {
    "fieldName": "LIBERIERUNG",
    "fidNumber": 3628,
    "dataType": "DATE",
    "description": "Liberierung"
  },
  {
    "fieldName": "JOUISSANCE",
    "fidNumber": 3629,
    "dataType": "DATE",
    "description": "Jouissance"
  },
  {
    "fieldName": "REDEMPTION_DATE",
    "fidNumber": 3630,
    "dataType": "DATE",
    "description": "Red. Date"
  },
  {
    "fieldName": "EARLIEST_REDEMPTION_DATE",
    "fidNumber": 3631,
    "dataType": "DATE",
    "description": "Earl. Red. Date"
  },
  {
    "fieldName": "NEXT_REDEMPTION_DATE",
    "fidNumber": 3632,
    "dataType": "DATE",
    "description": "Next Red. Date"
  },
  {
    "fieldName": "LAST_COUPON_DATE",
    "fidNumber": 3633,
    "dataType": "DATE",
    "description": "Last Coupon Date"
  },
  {
    "fieldName": "EARLIEST_EXERCISE_DATE",
    "fidNumber": 3634,
    "dataType": "DATE",
    "description": "Earl. Exer. Date"
  },
  {
    "fieldName": "SHARES_PER_CONTRACT",
    "fidNumber": 3635,
    "dataType": "LPACK",
    "description": "Shares/contract"
  },
  {
    "fieldName": "NOMINAL_CAPITAL",
    "fidNumber": 3636,
    "dataType": "LPACK",
    "description": "Nom. Capital"
  },
  {
    "fieldName": "NOMINAL_VALUE",
    "fidNumber": 3637,
    "dataType": "LPACK",
    "description": "Nom. Value"
  },
  {
    "fieldName": "INTEREST_RATE",
    "fidNumber": 3638,
    "dataType": "LPACK",
    "description": "Interest Rate"
  },
  {
    "fieldName": "ISSUE_PRICE",
    "fidNumber": 3639,
    "dataType": "LPACK",
    "description": "Issue Price"
  },
  {
    "fieldName": "REDEMPTION_PRICE",
    "fidNumber": 3640,
    "dataType": "LPACK",
    "description": "Red. Price"
  },
  {
    "fieldName": "WARRANT_CONV_NUM",
    "fidNumber": 3641,
    "dataType": "LPACK",
    "description": "Warrant Conv. 1"
  },
  {
    "fieldName": "WARRANT_CONV_DENOM",
    "fidNumber": 3642,
    "dataType": "LPACK",
    "description": "Warrant Conv. 2"
  },
  {
    "fieldName": "DIVIDEND_1_DATE",
    "fidNumber": 3643,
    "dataType": "DATE",
    "description": "Div. Date 1"
  },
  {
    "fieldName": "DIVIDEND_2_DATE",
    "fidNumber": 3644,
    "dataType": "DATE",
    "description": "Div. Date 2"
  },
  {
    "fieldName": "DIVIDEND_3_DATE",
    "fidNumber": 3645,
    "dataType": "DATE",
    "description": "Div. Date 3"
  },
  {
    "fieldName": "DIVIDEND_4_DATE",
    "fidNumber": 3646,
    "dataType": "DATE",
    "description": "Div. Date 4"
  },
  {
    "fieldName": "NSIN_1",
    "fidNumber": 3647,
    "dataType": "STRING",
    "description": "NSIN 1"
  },
  {
    "fieldName": "NSIN_2",
    "fidNumber": 3648,
    "dataType": "STRING",
    "description": "NSIN 2"
  },
  {
    "fieldName": "NSIN_3",
    "fidNumber": 3649,
    "dataType": "STRING",
    "description": "NSIN 3"
  },
  {
    "fieldName": "NSIN_4",
    "fidNumber": 3650,
    "dataType": "STRING",
    "description": "NSIN 4"
  },
  {
    "fieldName": "NSIN_5",
    "fidNumber": 3651,
    "dataType": "STRING",
    "description": "NSIN 5"
  },
  {
    "fieldName": "NSIN_6",
    "fidNumber": 3652,
    "dataType": "STRING",
    "description": "NSIN 6"
  },
  {
    "fieldName": "NSIN_7",
    "fidNumber": 3653,
    "dataType": "STRING",
    "description": "NSIN 7"
  },
  {
    "fieldName": "NSIN_8",
    "fidNumber": 3654,
    "dataType": "STRING",
    "description": "NSIN 8"
  },
  {
    "fieldName": "IN_VOLUME",
    "fidNumber": 3655,
    "dataType": "LONG",
    "description": "In Volume"
  },
  {
    "fieldName": "OUT_VOLUME",
    "fidNumber": 3656,
    "dataType": "LONG",
    "description": "Out Volume"
  },
  {
    "fieldName": "STRIKE_VOLUME",
    "fidNumber": 3657,
    "dataType": "LONG",
    "description": "Strike Volume"
  },
  {
    "fieldName": "REMAIN_VOLUME",
    "fidNumber": 3658,
    "dataType": "LONG",
    "description": "Remain Volume"
  },
  {
    "fieldName": "ISSUERS_SECTOR_STR",
    "fidNumber": 3659,
    "dataType": "STRING",
    "description": "Sector"
  },
  {
    "fieldName": "EXCUM_CODE",
    "fidNumber": 3660,
    "dataType": "INT",
    "description": "Ex/cum Code"
  },
  {
    "fieldName": "TRADING_STATE",
    "fidNumber": 3661,
    "dataType": "INT",
    "description": "Trading State"
  },
  {
    "fieldName": "EXCUM_DATE",
    "fidNumber": 3662,
    "dataType": "DATE",
    "description": "Ex/cum Date"
  },
  {
    "fieldName": "SHORT_CAPITAL_GAINS",
    "fidNumber": 3663,
    "dataType": "LPACK",
    "description": "Short CapGains"
  },
  {
    "fieldName": "MEDIUM_CAPITAL_GAINS",
    "fidNumber": 3664,
    "dataType": "LPACK",
    "description": "Medium CapGains"
  },
  {
    "fieldName": "LONG_CAPITAL_GAINS",
    "fidNumber": 3665,
    "dataType": "LPACK",
    "description": "Long CapGains"
  },
  {
    "fieldName": "UNALLOC_DISTRIBUTION",
    "fidNumber": 3666,
    "dataType": "LPACK",
    "description": "Unalloc Distrib"
  },
  {
    "fieldName": "PERIOD_CODE",
    "fidNumber": 3667,
    "dataType": "STRING",
    "description": "Period Code"
  },
  {
    "fieldName": "THEO_OPEN",
    "fidNumber": 3668,
    "dataType": "LPACK",
    "description": "Theo Open"
  },
  {
    "fieldName": "Z_BIDASK",
    "fidNumber": 3669,
    "dataType": "STRING",
    "description": "Bid/Ask"
  },
  {
    "fieldName": "Z_BIDASK_SIZE",
    "fidNumber": 3670,
    "dataType": "STRING",
    "description": "Z Bid/Ask Size"
  },
  {
    "fieldName": "Z_BIDASK_YIELD",
    "fidNumber": 3671,
    "dataType": "STRING",
    "description": "Bid/Ask Yield"
  },
  {
    "fieldName": "GENERIC_FLAG",
    "fidNumber": 3672,
    "dataType": "STRING",
    "description": "Flag"
  },
  {
    "fieldName": "BEST_BID_FLAG1",
    "fidNumber": 3674,
    "dataType": "STRING",
    "description": "Best Bid Flag"
  },
  {
    "fieldName": "BEST_BID_FLAG2",
    "fidNumber": 3675,
    "dataType": "STRING",
    "description": "Best Bid2 Flag"
  },
  {
    "fieldName": "BEST_BID_FLAG3",
    "fidNumber": 3676,
    "dataType": "STRING",
    "description": "Best Bid3 Flag"
  },
  {
    "fieldName": "BEST_BID_FLAG4",
    "fidNumber": 3677,
    "dataType": "STRING",
    "description": "Best Bid4 Flag"
  },
  {
    "fieldName": "BEST_BID_FLAG5",
    "fidNumber": 3678,
    "dataType": "STRING",
    "description": "Best Bid5 Flag"
  },
  {
    "fieldName": "BEST_BID_USER1",
    "fidNumber": 3679,
    "dataType": "LONG",
    "description": "Best Bid User"
  },
  {
    "fieldName": "BEST_BID_USER2",
    "fidNumber": 3680,
    "dataType": "LONG",
    "description": "Best Bid2 User"
  },
  {
    "fieldName": "BEST_BID_USER3",
    "fidNumber": 3681,
    "dataType": "LONG",
    "description": "Best Bid3 User"
  },
  {
    "fieldName": "BEST_BID_USER4",
    "fidNumber": 3682,
    "dataType": "LONG",
    "description": "Best Bid4 User"
  },
  {
    "fieldName": "BEST_BID_USER5",
    "fidNumber": 3683,
    "dataType": "LONG",
    "description": "Best Bid5 User"
  },
  {
    "fieldName": "TRDVOL_2",
    "fidNumber": 3684,
    "dataType": "LONG",
    "description": "Trade2 Volume"
  },
  {
    "fieldName": "TRDVOL_3",
    "fidNumber": 3685,
    "dataType": "LONG",
    "description": "Trade3 Volume"
  },
  {
    "fieldName": "TRDVOL_4",
    "fidNumber": 3686,
    "dataType": "LONG",
    "description": "Trade4 Volume"
  },
  {
    "fieldName": "TRDVOL_5",
    "fidNumber": 3687,
    "dataType": "LONG",
    "description": "Trade5 Volume"
  },
  {
    "fieldName": "TRDTIM_2",
    "fidNumber": 3688,
    "dataType": "TIME",
    "description": "Trade2 Time"
  },
  {
    "fieldName": "TRDTIM_3",
    "fidNumber": 3689,
    "dataType": "TIME",
    "description": "Trade3 Time"
  },
  {
    "fieldName": "TRDTIM_4",
    "fidNumber": 3690,
    "dataType": "TIME",
    "description": "Trade4 Time"
  },
  {
    "fieldName": "TRDTIM_5",
    "fidNumber": 3691,
    "dataType": "TIME",
    "description": "Trade5 Time"
  },
  {
    "fieldName": "BEST_ASK_FLAG1",
    "fidNumber": 3692,
    "dataType": "STRING",
    "description": "Best Ask Flag"
  },
  {
    "fieldName": "BEST_ASK_FLAG2",
    "fidNumber": 3693,
    "dataType": "STRING",
    "description": "Best Ask2 Flag"
  },
  {
    "fieldName": "BEST_ASK_FLAG3",
    "fidNumber": 3694,
    "dataType": "STRING",
    "description": "Best Ask3 Flag"
  },
  {
    "fieldName": "BEST_ASK_FLAG4",
    "fidNumber": 3695,
    "dataType": "STRING",
    "description": "Best Ask4 Flag"
  },
  {
    "fieldName": "BEST_ASK_FLAG5",
    "fidNumber": 3696,
    "dataType": "STRING",
    "description": "Best Ask5 Flag"
  },
  {
    "fieldName": "BEST_ASK_USER1",
    "fidNumber": 3697,
    "dataType": "LONG",
    "description": "Best Ask User"
  },
  {
    "fieldName": "BEST_ASK_USER2",
    "fidNumber": 3698,
    "dataType": "LONG",
    "description": "Best Ask2 User"
  },
  {
    "fieldName": "BEST_ASK_USER3",
    "fidNumber": 3699,
    "dataType": "LONG",
    "description": "Best Ask3 User"
  },
  {
    "fieldName": "BEST_ASK_USER4",
    "fidNumber": 3700,
    "dataType": "LONG",
    "description": "Best Ask4 User"
  },
  {
    "fieldName": "BEST_ASK_USER5",
    "fidNumber": 3701,
    "dataType": "LONG",
    "description": "Best Ask5 User"
  },
  {
    "fieldName": "IMBALANCE",
    "fidNumber": 3702,
    "dataType": "LONG",
    "description": "Imbalance"
  },
  {
    "fieldName": "SPREAD",
    "fidNumber": 3703,
    "dataType": "LPACK",
    "description": "Spread"
  },
  {
    "fieldName": "DIFF_THEO_REF",
    "fidNumber": 3704,
    "dataType": "LPACK",
    "description": "Theo-Ref"
  },
  {
    "fieldName": "DIFF_LAST_REF",
    "fidNumber": 3705,
    "dataType": "LPACK",
    "description": "Last-Ref"
  },
  {
    "fieldName": "ACCEPTABILITY",
    "fidNumber": 3706,
    "dataType": "LPACK",
    "description": "Acceptability"
  },
  {
    "fieldName": "SUSPENSIBILITY",
    "fidNumber": 3707,
    "dataType": "LPACK",
    "description": "Suspensibility"
  },
  {
    "fieldName": "NEGOTIABILITY",
    "fidNumber": 3708,
    "dataType": "LPACK",
    "description": "Negotiability"
  },
  {
    "fieldName": "MAX_LOTS_APE",
    "fidNumber": 3709,
    "dataType": "LONG",
    "description": "Max Lots APE"
  },
  {
    "fieldName": "MAX_LOTS_ECO",
    "fidNumber": 3710,
    "dataType": "LONG",
    "description": "Max Lots ECO"
  },
  {
    "fieldName": "CONTRACTS",
    "fidNumber": 3711,
    "dataType": "LONG",
    "description": "No. Contracts"
  },
  {
    "fieldName": "COUNTERVALUE",
    "fidNumber": 3712,
    "dataType": "LPACK",
    "description": "Countervalue"
  },
  {
    "fieldName": "OPENING_VOL",
    "fidNumber": 3713,
    "dataType": "LONG",
    "description": "Opening Volume"
  },
  {
    "fieldName": "OPENING_CONTRACTS",
    "fidNumber": 3714,
    "dataType": "LONG",
    "description": "Opening Contracts"
  },
  {
    "fieldName": "OPENING_NUMBER",
    "fidNumber": 3715,
    "dataType": "LONG",
    "description": "Opening No."
  },
  {
    "fieldName": "PREOPEN_START",
    "fidNumber": 3716,
    "dataType": "TIME",
    "description": "Preopening"
  },
  {
    "fieldName": "VALIDATION_START",
    "fidNumber": 3717,
    "dataType": "TIME",
    "description": "Validation"
  },
  {
    "fieldName": "OPENING_START",
    "fidNumber": 3718,
    "dataType": "TIME",
    "description": "Opening"
  },
  {
    "fieldName": "CLOSING_START",
    "fidNumber": 3719,
    "dataType": "TIME",
    "description": "Closing"
  },
  {
    "fieldName": "SUSP_TIME",
    "fidNumber": 3720,
    "dataType": "TIME",
    "description": "Susp Time"
  },
  {
    "fieldName": "MINIMUM_SIZE",
    "fidNumber": 3721,
    "dataType": "LONG",
    "description": "Minimum Size"
  },
  {
    "fieldName": "SETTLE_CASH",
    "fidNumber": 3722,
    "dataType": "LPACK",
    "description": "Cash"
  },
  {
    "fieldName": "SETTLE_SYM_1",
    "fidNumber": 3723,
    "dataType": "STRING",
    "description": "Symbol1"
  },
  {
    "fieldName": "SETTLE_SYM_2",
    "fidNumber": 3724,
    "dataType": "STRING",
    "description": "Symbol2"
  },
  {
    "fieldName": "SETTLE_SYM_3",
    "fidNumber": 3725,
    "dataType": "STRING",
    "description": "Symbol3"
  },
  {
    "fieldName": "SETTLE_SYM_4",
    "fidNumber": 3726,
    "dataType": "STRING",
    "description": "Symbol4"
  },
  {
    "fieldName": "SETTLE_SYM_5",
    "fidNumber": 3727,
    "dataType": "STRING",
    "description": "Symbol5"
  },
  {
    "fieldName": "SETTLE_SYM_6",
    "fidNumber": 3728,
    "dataType": "STRING",
    "description": "Symbol6"
  },
  {
    "fieldName": "SETTLE_SYM_7",
    "fidNumber": 3729,
    "dataType": "STRING",
    "description": "Symbol7"
  },
  {
    "fieldName": "SETTLE_SYM_8",
    "fidNumber": 3730,
    "dataType": "STRING",
    "description": "Symbol8"
  },
  {
    "fieldName": "SETTLE_TYPE_1",
    "fidNumber": 3731,
    "dataType": "STRING",
    "description": "Type1"
  },
  {
    "fieldName": "SETTLE_TYPE_2",
    "fidNumber": 3732,
    "dataType": "STRING",
    "description": "Type2"
  },
  {
    "fieldName": "SETTLE_TYPE_3",
    "fidNumber": 3733,
    "dataType": "STRING",
    "description": "Type3"
  },
  {
    "fieldName": "SETTLE_TYPE_4",
    "fidNumber": 3734,
    "dataType": "STRING",
    "description": "Type4"
  },
  {
    "fieldName": "SETTLE_TYPE_5",
    "fidNumber": 3735,
    "dataType": "STRING",
    "description": "Type5"
  },
  {
    "fieldName": "SETTLE_TYPE_6",
    "fidNumber": 3736,
    "dataType": "STRING",
    "description": "Type6"
  },
  {
    "fieldName": "SETTLE_TYPE_7",
    "fidNumber": 3737,
    "dataType": "STRING",
    "description": "Type7"
  },
  {
    "fieldName": "SETTLE_TYPE_8",
    "fidNumber": 3738,
    "dataType": "STRING",
    "description": "Type8"
  },
  {
    "fieldName": "SETTLE_SIZE_1",
    "fidNumber": 3739,
    "dataType": "LONG",
    "description": "Qty1"
  },
  {
    "fieldName": "SETTLE_SIZE_2",
    "fidNumber": 3740,
    "dataType": "LONG",
    "description": "Qty2"
  },
  {
    "fieldName": "SETTLE_SIZE_3",
    "fidNumber": 3741,
    "dataType": "LONG",
    "description": "Qty3"
  },
  {
    "fieldName": "SETTLE_SIZE_4",
    "fidNumber": 3742,
    "dataType": "LONG",
    "description": "Qty4"
  },
  {
    "fieldName": "SETTLE_SIZE_5",
    "fidNumber": 3743,
    "dataType": "LONG",
    "description": "Qty5"
  },
  {
    "fieldName": "SETTLE_SIZE_6",
    "fidNumber": 3744,
    "dataType": "LONG",
    "description": "Qty6"
  },
  {
    "fieldName": "SETTLE_SIZE_7",
    "fidNumber": 3745,
    "dataType": "LONG",
    "description": "Qty7"
  },
  {
    "fieldName": "SETTLE_SIZE_8",
    "fidNumber": 3746,
    "dataType": "LONG",
    "description": "Qty8"
  },
  {
    "fieldName": "SETTLE_STRIKE_1",
    "fidNumber": 3747,
    "dataType": "LPACK",
    "description": "Strike%1"
  },
  {
    "fieldName": "SETTLE_STRIKE_2",
    "fidNumber": 3748,
    "dataType": "LPACK",
    "description": "Strike%2"
  },
  {
    "fieldName": "SETTLE_STRIKE_3",
    "fidNumber": 3749,
    "dataType": "LPACK",
    "description": "Strike%3"
  },
  {
    "fieldName": "SETTLE_STRIKE_4",
    "fidNumber": 3750,
    "dataType": "LPACK",
    "description": "Strike%4"
  },
  {
    "fieldName": "SETTLE_STRIKE_5",
    "fidNumber": 3751,
    "dataType": "LPACK",
    "description": "Strike%5"
  },
  {
    "fieldName": "SETTLE_STRIKE_6",
    "fidNumber": 3752,
    "dataType": "LPACK",
    "description": "Strike%6"
  },
  {
    "fieldName": "SETTLE_STRIKE_7",
    "fidNumber": 3753,
    "dataType": "LPACK",
    "description": "Strike%7"
  },
  {
    "fieldName": "SETTLE_STRIKE_8",
    "fidNumber": 3754,
    "dataType": "LPACK",
    "description": "Strike%8"
  },
  {
    "fieldName": "TICK_SIZE",
    "fidNumber": 3755,
    "dataType": "LPACK",
    "description": "Tick Size"
  },
  {
    "fieldName": "SUBMARKET",
    "fidNumber": 3756,
    "dataType": "STRING",
    "description": "Submarket"
  },
  {
    "fieldName": "ASHTON_VWAP",
    "fidNumber": 3757,
    "dataType": "LPACK",
    "description": "Ashton VWAP"
  },
  {
    "fieldName": "REFERENCE_PRICE",
    "fidNumber": 3758,
    "dataType": "LPACK",
    "description": "Reference Price"
  },
  {
    "fieldName": "PAIRED_VOLUME",
    "fidNumber": 3759,
    "dataType": "LONG",
    "description": "Paired Volume"
  },
  {
    "fieldName": "MARKET_ORDER_IMBALANCE",
    "fidNumber": 3760,
    "dataType": "LONG",
    "description": "MOC Order Imbalance"
  },
  {
    "fieldName": "NEAR_IND_CLEARING",
    "fidNumber": 3761,
    "dataType": "LPACK",
    "description": "Near Clearing"
  },
  {
    "fieldName": "FAR_IND_CLEARING",
    "fidNumber": 3762,
    "dataType": "LPACK",
    "description": "Far Clearing"
  },
  {
    "fieldName": "MG_SICM",
    "fidNumber": 3765,
    "dataType": "LPACK",
    "description": "cur mo short interest"
  },
  {
    "fieldName": "AUCTION_DATE",
    "fidNumber": 3939,
    "dataType": "DATE",
    "description": "Auction Date"
  },
  {
    "fieldName": "AUCTION_PRICE_IND",
    "fidNumber": 3940,
    "dataType": "INT",
    "description": "Auction Price Indicator"
  },
  {
    "fieldName": "CG_HOT_ACVOL_1",
    "fidNumber": 3941,
    "dataType": "DOUBLE",
    "description": "Recent Volume Ratio"
  },
  {
    "fieldName": "CG_HOT_NUM_MOVES",
    "fidNumber": 3942,
    "dataType": "DOUBLE",
    "description": "Recent Trades Ratio"
  },
  {
    "fieldName": "SOES_TIER_SIZE",
    "fidNumber": 3943,
    "dataType": "LONG",
    "description": "SOES Tier Size"
  },
  {
    "fieldName": "ARCA_VOL",
    "fidNumber": 3944,
    "dataType": "LONG",
    "description": "ARCA Vol."
  },
  {
    "fieldName": "OPT_VOL",
    "fidNumber": 3945,
    "dataType": "LONG",
    "description": "Opt. Vol."
  },
  {
    "fieldName": "PUT_VOL",
    "fidNumber": 3946,
    "dataType": "LONG",
    "description": "Put Vol."
  },
  {
    "fieldName": "CALL_VOL",
    "fidNumber": 3947,
    "dataType": "LONG",
    "description": "Call Vol."
  },
  {
    "fieldName": "INDICATIVE_SIZE",
    "fidNumber": 3948,
    "dataType": "LONG",
    "description": "Ind. Size"
  },
  {
    "fieldName": "AUCTION_PRICE",
    "fidNumber": 3949,
    "dataType": "LPACK",
    "description": "Auction Price"
  },
  {
    "fieldName": "AUCTION_SIZE",
    "fidNumber": 3950,
    "dataType": "LONG",
    "description": "Auction Size"
  },
  {
    "fieldName": "AUCTION_TIME",
    "fidNumber": 3951,
    "dataType": "TIME",
    "description": "Auction Time"
  },
  {
    "fieldName": "ORIG_STRIKE_PRICE",
    "fidNumber": 3952,
    "dataType": "LPACK",
    "description": "Orig. Strike"
  },
  {
    "fieldName": "AUCTION_SURPLUS_IND",
    "fidNumber": 3953,
    "dataType": "STRING",
    "description": "Auc. Surplus"
  },
  {
    "fieldName": "ODR_INTERRUPTION_IND",
    "fidNumber": 3954,
    "dataType": "STRING",
    "description": "Ord. Interrupt"
  },
  {
    "fieldName": "VOL_INTERRUPTION_IND",
    "fidNumber": 3955,
    "dataType": "STRING",
    "description": "Vlt. Interrupt"
  },
  {
    "fieldName": "INTEREST_DATE",
    "fidNumber": 3956,
    "dataType": "STRING",
    "description": "Interest Date"
  },
  {
    "fieldName": "SP_MID400",
    "fidNumber": 3957,
    "dataType": "INT",
    "description": "S&P Midcap 400"
  },
  {
    "fieldName": "SP_SMALL600",
    "fidNumber": 3958,
    "dataType": "INT",
    "description": "S&P Smallcap 600"
  },
  {
    "fieldName": "MKT_CAP",
    "fidNumber": 3959,
    "dataType": "LPACK",
    "description": "Market Capitalization"
  },
  {
    "fieldName": "WEB_ADDR",
    "fidNumber": 3960,
    "dataType": "STRING",
    "description": "Web Addr"
  },
  {
    "fieldName": "SHSPERADR",
    "fidNumber": 3961,
    "dataType": "LPACK",
    "description": "Shares/ADR"
  },
  {
    "fieldName": "NSIN_TRADING",
    "fidNumber": 3962,
    "dataType": "STRING",
    "description": "Trading Id"
  },
  {
    "fieldName": "TRADE_ROOT",
    "fidNumber": 3963,
    "dataType": "STRING",
    "description": "Trade Root"
  },
  {
    "fieldName": "SUSP_DATE",
    "fidNumber": 3964,
    "dataType": "DATE",
    "description": "Susp Date"
  },
  {
    "fieldName": "AUCTION_END",
    "fidNumber": 3965,
    "dataType": "TIME",
    "description": "Auction Random Time"
  },
  {
    "fieldName": "BID_TICK_2",
    "fidNumber": 3966,
    "dataType": "STRING",
    "description": "Natl Bid Tick"
  },
  {
    "fieldName": "FUT_FIXED",
    "fidNumber": 3967,
    "dataType": "LPACK",
    "description": "Future Fixed Price"
  },
  {
    "fieldName": "MKT_SEGMENT",
    "fidNumber": 3968,
    "dataType": "INT",
    "description": "Market Segment Legal"
  },
  {
    "fieldName": "NAS_CROSS_TYPE",
    "fidNumber": 3969,
    "dataType": "STRING",
    "description": "NAS Cross"
  },
  {
    "fieldName": "NAS_IMBALANCE",
    "fidNumber": 3970,
    "dataType": "LONG",
    "description": "NAS Imbalance"
  },
  {
    "fieldName": "NAS_PAIRED",
    "fidNumber": 3971,
    "dataType": "LONG",
    "description": "NAS Paired Shares"
  },
  {
    "fieldName": "NAS_REFERENCE_PRICE",
    "fidNumber": 3972,
    "dataType": "LPACK",
    "description": "NAS Ref Price"
  },
  {
    "fieldName": "NAS_FAR_IND_CLEARING",
    "fidNumber": 3973,
    "dataType": "LPACK",
    "description": "NAS Far Clearing"
  },
  {
    "fieldName": "NAS_NEAR_IND_CLEARING",
    "fidNumber": 3974,
    "dataType": "LPACK",
    "description": "NAS Near Clearing"
  },
  {
    "fieldName": "NYSE_IMBAL_TYPE",
    "fidNumber": 3975,
    "dataType": "STRING",
    "description": "NYSE Imbal Type"
  },
  {
    "fieldName": "NYSE_IMBALANCE",
    "fidNumber": 3976,
    "dataType": "LONG",
    "description": "NYSE Imbalance"
  },
  {
    "fieldName": "QUOTE_ID",
    "fidNumber": 3977,
    "dataType": "STRING",
    "description": "Quote Id"
  },
  {
    "fieldName": "ADR_UNDERLIER",
    "fidNumber": 3978,
    "dataType": "STRING",
    "description": "ADR Underlier"
  },
  {
    "fieldName": "AUCTION_TRADES",
    "fidNumber": 3979,
    "dataType": "LONG",
    "description": "Auction Trades"
  },
  {
    "fieldName": "BASKET_CODE",
    "fidNumber": 3980,
    "dataType": "STRING",
    "description": "Basket Code"
  },
  {
    "fieldName": "COUNTRY",
    "fidNumber": 3981,
    "dataType": "STRING",
    "description": "Country"
  },
  {
    "fieldName": "EXCHANGE_RATE",
    "fidNumber": 3982,
    "dataType": "DOUBLE",
    "description": "Exchange Rate"
  },
  {
    "fieldName": "INSTRUMENT_GROUP",
    "fidNumber": 3983,
    "dataType": "STRING",
    "description": "Instrument Group"
  },
  {
    "fieldName": "MARKET_CODE",
    "fidNumber": 3984,
    "dataType": "STRING",
    "description": "Market Code"
  },
  {
    "fieldName": "MAX_LOTS",
    "fidNumber": 3985,
    "dataType": "LONG",
    "description": "Max Lots"
  },
  {
    "fieldName": "MAX_PD_ORDER_CONTROL",
    "fidNumber": 3986,
    "dataType": "DOUBLE",
    "description": "Max%diff Order Control"
  },
  {
    "fieldName": "MAX_PD_TRADE_CONTROL",
    "fidNumber": 3987,
    "dataType": "DOUBLE",
    "description": "Max%diff Trade Control"
  },
  {
    "fieldName": "MAX_PD_TRADE_LAST",
    "fidNumber": 3988,
    "dataType": "DOUBLE",
    "description": "Max%diff Trade Last"
  },
  {
    "fieldName": "MISALIGNMENT_RATIO",
    "fidNumber": 3989,
    "dataType": "DOUBLE",
    "description": "Misalignment Ratio"
  },
  {
    "fieldName": "PCT_TRADED",
    "fidNumber": 3990,
    "dataType": "DOUBLE",
    "description": "Percent Traded"
  },
  {
    "fieldName": "POOL_FACTOR",
    "fidNumber": 3991,
    "dataType": "DOUBLE",
    "description": "Pool Factor"
  },
  {
    "fieldName": "PR_COUNTERVALUE",
    "fidNumber": 3992,
    "dataType": "LPACK",
    "description": "Progressive Countervalue"
  },
  {
    "fieldName": "SEGMENT",
    "fidNumber": 3993,
    "dataType": "STRING",
    "description": "Segment"
  },
  {
    "fieldName": "SUBTYPE",
    "fidNumber": 3994,
    "dataType": "STRING",
    "description": "Subtype"
  },
  {
    "fieldName": "TAX_RATE",
    "fidNumber": 3995,
    "dataType": "DOUBLE",
    "description": "Tax Rate"
  },
  {
    "fieldName": "CL_AUC_START",
    "fidNumber": 3996,
    "dataType": "TIME",
    "description": "Closure Auction Start Time"
  },
  {
    "fieldName": "CL_VAL_START",
    "fidNumber": 3997,
    "dataType": "TIME",
    "description": "Closure Validation Start Time"
  },
  {
    "fieldName": "MANAGEMENT_START",
    "fidNumber": 3998,
    "dataType": "TIME",
    "description": "Management Start Time"
  },
  {
    "fieldName": "PRECLOSURE_START",
    "fidNumber": 3999,
    "dataType": "TIME",
    "description": "Preclosure Start Time"
  },
  {
    "fieldName": "TRADING_START",
    "fidNumber": 4000,
    "dataType": "TIME",
    "description": "Trading Start Time"
  },
  {
    "fieldName": "TAH_CLOSE_START",
    "fidNumber": 4001,
    "dataType": "TIME",
    "description": "TAH Close Start Time"
  },
  {
    "fieldName": "TAH_OPEN_START",
    "fidNumber": 4002,
    "dataType": "TIME",
    "description": "TAH Open Start Time"
  },
  {
    "fieldName": "ALT_VOL1",
    "fidNumber": 4003,
    "dataType": "LONG",
    "description": "Alternate Volume 1"
  },
  {
    "fieldName": "ALT_VOL2",
    "fidNumber": 4004,
    "dataType": "LONG",
    "description": "Alternate Volume 2"
  },
  {
    "fieldName": "CLEARING_TYPE",
    "fidNumber": 4005,
    "dataType": "STRING",
    "description": "Clearing Type"
  },
  {
    "fieldName": "NEWS_SEARCH_FLAG",
    "fidNumber": 4006,
    "dataType": "STRING",
    "description": "Flags for news queries"
  },
  {
    "fieldName": "ALT_VWAP",
    "fidNumber": 4007,
    "dataType": "DOUBLE",
    "description": "VWAP (Alt)"
  },
  {
    "fieldName": "NMS",
    "fidNumber": 4008,
    "dataType": "LONG",
    "description": "NMS"
  },
  {
    "fieldName": "TRDPRC_1_TYP",
    "fidNumber": 4009,
    "dataType": "STRING",
    "description": "Last (Price Type)"
  },
  {
    "fieldName": "HEDGE_RATIO",
    "fidNumber": 4010,
    "dataType": "DOUBLE",
    "description": "Delta"
  },
  {
    "fieldName": "LIBOR_OAS",
    "fidNumber": 4011,
    "dataType": "DOUBLE",
    "description": "LIBOR OAS"
  },
  {
    "fieldName": "BENCH_PRC_TYP",
    "fidNumber": 4012,
    "dataType": "STRING",
    "description": "Bench Price Type"
  },
  {
    "fieldName": "BARRIER_PCT",
    "fidNumber": 4013,
    "dataType": "DOUBLE",
    "description": "Barrier Lvl"
  },
  {
    "fieldName": "BARRIER_PRC",
    "fidNumber": 4014,
    "dataType": "LPACK",
    "description": "Barrier Prc"
  },
  {
    "fieldName": "UNDERLIER_CURRENCY",
    "fidNumber": 4015,
    "dataType": "STRING",
    "description": "Underlier Currency"
  },
  {
    "fieldName": "SECURITY_SUBTYPE",
    "fidNumber": 4016,
    "dataType": "LONG",
    "description": "Security Subtype"
  },
  {
    "fieldName": "AGG_BIDSIZE",
    "fidNumber": 4017,
    "dataType": "LONG",
    "description": "Aggregate bid size"
  },
  {
    "fieldName": "AGG_ASKSIZE",
    "fidNumber": 4018,
    "dataType": "LONG",
    "description": "Aggregate ask size"
  },
  {
    "fieldName": "REGION",
    "fidNumber": 4019,
    "dataType": "STRING",
    "description": "Region"
  },
  {
    "fieldName": "EXCH_DESCRIPTION",
    "fidNumber": 4020,
    "dataType": "STRING",
    "description": "Exchange Description"
  },
  {
    "fieldName": "W_PUT_VOL",
    "fidNumber": 4021,
    "dataType": "DOUBLE",
    "description": "Weighted put volume"
  },
  {
    "fieldName": "W_CALL_VOL",
    "fidNumber": 4022,
    "dataType": "DOUBLE",
    "description": "Weighted call volume"
  },
  {
    "fieldName": "TICKSZTBL",
    "fidNumber": 4023,
    "dataType": "STRING",
    "description": "Tick Size Table ID"
  },
  {
    "fieldName": "NYS_PAIRED",
    "fidNumber": 4024,
    "dataType": "LONG",
    "description": "NYS Paired Shares"
  },
  {
    "fieldName": "NYS_REFERENCE_PRICE",
    "fidNumber": 4025,
    "dataType": "LPACK",
    "description": "NYS Ref Price"
  },
  {
    "fieldName": "NYS_CLEARING",
    "fidNumber": 4026,
    "dataType": "LPACK",
    "description": "NYS Clearing"
  },
  {
    "fieldName": "NYS_BOOK_CLEARING",
    "fidNumber": 4027,
    "dataType": "LPACK",
    "description": "NYS Book Clearing"
  },
  {
    "fieldName": "VAB_SYMBOL",
    "fidNumber": 4028,
    "dataType": "STRING",
    "description": "VAB Symbol"
  },
  {
    "fieldName": "STATIC_REF_PRC",
    "fidNumber": 4029,
    "dataType": "LPACK",
    "description": "Static Ref Price"
  },
  {
    "fieldName": "DYNAMIC_REF_PRC",
    "fidNumber": 4030,
    "dataType": "LPACK",
    "description": "Dynamic Ref Price"
  },
  {
    "fieldName": "PRICE_BAND_PCT",
    "fidNumber": 4031,
    "dataType": "DOUBLE",
    "description": "Price Band Tolerances"
  },
  {
    "fieldName": "CIRCUIT_BREAKER_S_PCT",
    "fidNumber": 4032,
    "dataType": "DOUBLE",
    "description": "Static Circuit Breaker Tolerances"
  },
  {
    "fieldName": "CIRCUIT_BREAKER_D_PCT",
    "fidNumber": 4033,
    "dataType": "DOUBLE",
    "description": "Dynamic Circuit Breaker Tolerances"
  },
  {
    "fieldName": "NAS_AUCTION_TIME",
    "fidNumber": 4034,
    "dataType": "TIME",
    "description": "NASDAQ Auction Time"
  },
  {
    "fieldName": "NYS_AUCTION_TIME",
    "fidNumber": 4035,
    "dataType": "TIME",
    "description": "NYSE Auction Time"
  },
  {
    "fieldName": "INSTRUMENT_ID",
    "fidNumber": 4036,
    "dataType": "STRING",
    "description": "INSTR ID"
  },
  {
    "fieldName": "INSTRUMENT_ID2",
    "fidNumber": 4037,
    "dataType": "STRING",
    "description": "INSTR ID2"
  },
  {
    "fieldName": "RPI",
    "fidNumber": 4038,
    "dataType": "INT",
    "description": "RPI"
  },
  {
    "fieldName": "IOPV",
    "fidNumber": 4039,
    "dataType": "LPACK",
    "description": "ETF.IV"
  },
  {
    "fieldName": "EST_CASH",
    "fidNumber": 4040,
    "dataType": "LPACK",
    "description": "ETF.EU"
  },
  {
    "fieldName": "TOT_CASH",
    "fidNumber": 4041,
    "dataType": "LPACK",
    "description": "ETF.TC"
  },
  {
    "fieldName": "MKT_CAP_CURRENCY ",
    "fidNumber": 4042,
    "dataType": "STRING",
    "description": "MKT Cap Currency"
  },
  {
    "fieldName": "NORMALIZED_MKT_CAP",
    "fidNumber": 4043,
    "dataType": "DOUBLE",
    "description": "Normarilzed Market Capitalization"
  },
  {
    "fieldName": "SECURITY_ID",
    "fidNumber": 4044,
    "dataType": "STRING",
    "description": "Security ID"
  },
  {
    "fieldName": "IN_AUCTION",
    "fidNumber": 4045,
    "dataType": "INT",
    "description": "In Auction"
  },
  {
    "fieldName": "AUCTION_TYPE",
    "fidNumber": 4046,
    "dataType": "STRING",
    "description": "Auction Type"
  },
  {
    "fieldName": "CONTEXT_ID",
    "fidNumber": 4047,
    "dataType": "STRING",
    "description": "Context ID"
  },
  {
    "fieldName": "SEGMENT_MIC",
    "fidNumber": 4048,
    "dataType": "STRING",
    "description": "Segment MIC"
  },
  {
    "fieldName": "CFI_CODE",
    "fidNumber": 4049,
    "dataType": "STRING",
    "description": "CFI code"
  },
  {
    "fieldName": "COLLAR_REF",
    "fidNumber": 4050,
    "dataType": "LPACK",
    "description": "Collar Ref"
  },
  {
    "fieldName": "COLLAR_UPPER",
    "fidNumber": 4051,
    "dataType": "LPACK",
    "description": "Collar Upper"
  },
  {
    "fieldName": "COLLAR_LOWER",
    "fidNumber": 4052,
    "dataType": "LPACK",
    "description": "Collar Lower"
  },
  {
    "fieldName": "COLLAR_EXT",
    "fidNumber": 4053,
    "dataType": "INT",
    "description": "Collar Ext"
  },
  {
    "fieldName": "OPEN_AUCTION_VOLUME",
    "fidNumber": 4054,
    "dataType": "LONG",
    "description": "Open Auction Volume"
  },
  {
    "fieldName": "CLOSE_AUCTION_VOLUME",
    "fidNumber": 4055,
    "dataType": "LONG",
    "description": "Close Auction Volume"
  },
  {
    "fieldName": "AVG_OPEN_AUCTION_VOL",
    "fidNumber": 4056,
    "dataType": "LONG",
    "description": "Average Open Auction Volume"
  },
  {
    "fieldName": "AVG_CLOSE_AUCTION_VOL",
    "fidNumber": 4057,
    "dataType": "LONG",
    "description": "Average Close Auction Volume"
  },
  {
    "fieldName": "ISSUER_MKT_CAP",
    "fidNumber": 4058,
    "dataType": "LPACK",
    "description": "Issuer Market Capitalization"
  },
  {
    "fieldName": "ISSUER_MKT_CAP_64",
    "fidNumber": 4059,
    "dataType": "INT64",
    "description": "Issuer Market Cap with Full Precision"
  },
  {
    "fieldName": "ISSUER_SHARES_OUT",
    "fidNumber": 4060,
    "dataType": "LONG",
    "description": "Issuer Shares Out"
  },
  {
    "fieldName": "ISSUER_SHARES_OUT_64",
    "fidNumber": 4061,
    "dataType": "INT64",
    "description": "Issuer Shares Out Full Precision"
  },
  {
    "fieldName": "ISSUER_MKT_CAP_CURRENCY ",
    "fidNumber": 4062,
    "dataType": "STRING",
    "description": "Issuer MKT Cap Currency"
  },
  {
    "fieldName": "WAREHOUSE_METAL_CLOSING_COUNT",
    "fidNumber": 4070,
    "dataType": "LONG",
    "description": "Closing Stock total in warehouse"
  },
  {
    "fieldName": "WAREHOUSE_METAL_OPENING_COUNT",
    "fidNumber": 4071,
    "dataType": "LONG",
    "description": "Opening Stock total in warehouse"
  },
  {
    "fieldName": "WAREHOUSE_METAL_IN_COUNT",
    "fidNumber": 4072,
    "dataType": "LONG",
    "description": "Stock delivered into the warehouse on the current day"
  },
  {
    "fieldName": "WAREHOUSE_METAL_OUT_COUNT",
    "fidNumber": 4073,
    "dataType": "LONG",
    "description": "Stock delivered out of the warehouse on the current day"
  },
  {
    "fieldName": "WAREHOUSE_METAL_MOVED_COUNT",
    "fidNumber": 4074,
    "dataType": "LONG",
    "description": "Stock movement (difference between in/out) of the warehouse"
  },
  {
    "fieldName": "WAREHOUSE_WARRANTS_CLOSING_COUNT",
    "fidNumber": 4075,
    "dataType": "LONG",
    "description": "Total number of warrants held for stock in the warehouse"
  },
  {
    "fieldName": "WAREHOUSE_WARRANTS_CANCELLED_COUNT",
    "fidNumber": 4076,
    "dataType": "LONG",
    "description": "Total number of warrants that have been cancelled in the warehouse"
  },
  {
    "fieldName": "WAREHOUSE_WARRANTS_UNALLOCATED",
    "fidNumber": 4077,
    "dataType": "DOUBLE",
    "description": "Percentage of unallocated warrants of stock"
  },
  {
    "fieldName": "WAREHOUSE_WARRANTS_HELD",
    "fidNumber": 4078,
    "dataType": "LONG",
    "description": "Number of warrants held for a particular member firm"
  },
  {
    "fieldName": "CALL_PREMIUM",
    "fidNumber": 4079,
    "dataType": "LPACK",
    "description": "Option call premium"
  },
  {
    "fieldName": "PUT_PREMIUM",
    "fidNumber": 4080,
    "dataType": "LPACK",
    "description": "Option put premium"
  },
  {
    "fieldName": "MONTHLY_MOVING_AVERAGE_PRICE",
    "fidNumber": 4081,
    "dataType": "LPACK",
    "description": "Daily moving monthly average price"
  },
  {
    "fieldName": "MONTHLY_AVERAGE_PRICE",
    "fidNumber": 4082,
    "dataType": "LPACK",
    "description": "monthly average price"
  },
  {
    "fieldName": "NOTES",
    "fidNumber": 5003,
    "dataType": "STRING",
    "description": "Notes"
  },
  {
    "fieldName": "PRV_LISTINO",
    "fidNumber": 5005,
    "dataType": "LPACK",
    "description": "Yest Listino"
  },
  {
    "fieldName": "OFFICIAL_PRICE",
    "fidNumber": 5006,
    "dataType": "LPACK",
    "description": "Official Price"
  },
  {
    "fieldName": "TELEB_CORR_TYPE",
    "fidNumber": 5007,
    "dataType": "INT",
    "description": "Teleb Corr Type"
  },
  {
    "fieldName": "ARCA_MATCH_PRICE",
    "fidNumber": 5100,
    "dataType": "LPACK",
    "description": "Match Price"
  },
  {
    "fieldName": "ARCA_IMBALANCE_VOLUME",
    "fidNumber": 5101,
    "dataType": "LONG",
    "description": "Imbalance Volume"
  },
  {
    "fieldName": "ARCA_MATCH_VOLUME",
    "fidNumber": 5102,
    "dataType": "LONG",
    "description": "Match Volume"
  },
  {
    "fieldName": "ARCA_IMBALANCE_SIG",
    "fidNumber": 5103,
    "dataType": "INT",
    "description": "Imbalance Sig"
  },
  {
    "fieldName": "ARCA_IMBALANCE_SESSION",
    "fidNumber": 5104,
    "dataType": "STRING",
    "description": "Imbalance Session"
  },
  {
    "fieldName": "ARCA_AOT",
    "fidNumber": 5105,
    "dataType": "TIME",
    "description": "Anticipated Open Time"
  },
  {
    "fieldName": "UNDERSYM",
    "fidNumber": 6000,
    "dataType": "STRING",
    "description": "Under Sym"
  },
  {
    "fieldName": "NEWS_SYM",
    "fidNumber": 6001,
    "dataType": "STRING",
    "description": "News Sym"
  },
  {
    "fieldName": "SYMBOL_DESC",
    "fidNumber": 6002,
    "dataType": "STRING",
    "description": "Description"
  },
  {
    "fieldName": "SYMBOL_ROOT",
    "fidNumber": 6003,
    "dataType": "STRING",
    "description": "Symbol root"
  },
  {
    "fieldName": "REMOTE_STORY_ID",
    "fidNumber": 6004,
    "dataType": "STRING",
    "description": "Remote Story ID"
  },
  {
    "fieldName": "OPTCSIZE",
    "fidNumber": 6005,
    "dataType": "DOUBLE",
    "description": "Option Cont. Size"
  },
  {
    "fieldName": "NEWS_TIME_STAMP",
    "fidNumber": 6006,
    "dataType": "STRING",
    "description": "News Time Stamp"
  },
  {
    "fieldName": "NEWS_STORY_ID",
    "fidNumber": 6007,
    "dataType": "STRING",
    "description": "News Story ID"
  },
  {
    "fieldName": "NEWS_HEADLINE",
    "fidNumber": 6008,
    "dataType": "STRING",
    "description": "News Headline"
  },
  {
    "fieldName": "COMPANY_NAME",
    "fidNumber": 6009,
    "dataType": "STRING",
    "description": "Company Name"
  },
  {
    "fieldName": "NEWS_STORY",
    "fidNumber": 6010,
    "dataType": "STRING",
    "description": "News Story"
  },
  {
    "fieldName": "MINMOVE",
    "fidNumber": 6011,
    "dataType": "INT",
    "description": "Min Move"
  },
  {
    "fieldName": "MAXMOVE",
    "fidNumber": 6012,
    "dataType": "INT",
    "description": "Max Move"
  },
  {
    "fieldName": "NEWS_CAT",
    "fidNumber": 6013,
    "dataType": "VECTOR_STRING",
    "description": "News Cat"
  },
  {
    "fieldName": "OPTSYM",
    "fidNumber": 6014,
    "dataType": "STRING",
    "description": "Option Symbol"
  },
  {
    "fieldName": "OPTSYM_2",
    "fidNumber": 6015,
    "dataType": "STRING",
    "description": "Option Symbol 2"
  },
  {
    "fieldName": "OPTSYM_3",
    "fidNumber": 6016,
    "dataType": "STRING",
    "description": "Option Symbol 3"
  },
  {
    "fieldName": "SPLIT_SOURCE",
    "fidNumber": 6017,
    "dataType": "INT",
    "description": "Split source"
  },
  {
    "fieldName": "CHANGE_LAST",
    "fidNumber": 6018,
    "dataType": "LPACK",
    "description": "Chg Last"
  },
  {
    "fieldName": "TABLE_ID",
    "fidNumber": 6019,
    "dataType": "LONG",
    "description": "Table ID"
  },
  {
    "fieldName": "OPTION_REQ_FLAG",
    "fidNumber": 6020,
    "dataType": "LONG",
    "description": "Option Request Flag"
  },
  {
    "fieldName": "STARTTIME",
    "fidNumber": 6021,
    "dataType": "TIME",
    "description": "Start Time"
  },
  {
    "fieldName": "STOPTIME",
    "fidNumber": 6022,
    "dataType": "TIME",
    "description": "StopTime"
  },
  {
    "fieldName": "EXCH_NAME",
    "fidNumber": 6023,
    "dataType": "STRING",
    "description": "Exch Name"
  },
  {
    "fieldName": "COMMODITY_NAME",
    "fidNumber": 6024,
    "dataType": "STRING",
    "description": "Commodity Name"
  },
  {
    "fieldName": "MONEY_FLOW",
    "fidNumber": 6025,
    "dataType": "LONG",
    "description": "Money Flow"
  },
  {
    "fieldName": "STARTSESS2",
    "fidNumber": 6026,
    "dataType": "TIME",
    "description": "Session 2 start"
  },
  {
    "fieldName": "ENDSESS1",
    "fidNumber": 6027,
    "dataType": "TIME",
    "description": "Session 1 end"
  },
  {
    "fieldName": "CURRENT_SESSION",
    "fidNumber": 6028,
    "dataType": "INT",
    "description": "Curr. Session"
  },
  {
    "fieldName": "EXCH_CLOSE_TIME",
    "fidNumber": 6029,
    "dataType": "TIME",
    "description": "Exch Close Time"
  },
  {
    "fieldName": "DELTA_TRADES",
    "fidNumber": 6030,
    "dataType": "INT",
    "description": "Delta Trades"
  },
  {
    "fieldName": "CANCEL_PRICE",
    "fidNumber": 6031,
    "dataType": "LPACK",
    "description": "Cancel Price"
  },
  {
    "fieldName": "INSERT_PRICE",
    "fidNumber": 6032,
    "dataType": "LPACK",
    "description": "Insert Price"
  },
  {
    "fieldName": "CORRECTION_VOLUME",
    "fidNumber": 6033,
    "dataType": "LONG",
    "description": "Correction Vol"
  },
  {
    "fieldName": "AUTO_ACCEPT",
    "fidNumber": 6034,
    "dataType": "INT",
    "description": "Order Entry Control Fid"
  },
  {
    "fieldName": "CANCEL_VOLUME",
    "fidNumber": 6035,
    "dataType": "LONG",
    "description": "Cancel size"
  },
  {
    "fieldName": "CORRECTION_XID",
    "fidNumber": 6036,
    "dataType": "STRING",
    "description": "Correction Exchange"
  },
  {
    "fieldName": "VWAP",
    "fidNumber": 6037,
    "dataType": "DOUBLE",
    "description": "VWAP"
  },
  {
    "fieldName": "SUM_PV",
    "fidNumber": 6038,
    "dataType": "DOUBLE",
    "description": "Sum of price*volume"
  },
  {
    "fieldName": "VWAP_VOL",
    "fidNumber": 6039,
    "dataType": "LONG",
    "description": "VWAP volume"
  },
  {
    "fieldName": "SALE_CONDITION",
    "fidNumber": 6040,
    "dataType": "INT",
    "description": "Sale Condition"
  },
  {
    "fieldName": "SALE_CONDITION_PRICE",
    "fidNumber": 6041,
    "dataType": "LPACK",
    "description": "Irg trade price"
  },
  {
    "fieldName": "SALE_CONDITION_VOLUME",
    "fidNumber": 6042,
    "dataType": "LONG",
    "description": "Irg trade volume"
  },
  {
    "fieldName": "SALE_CONDITION_TIME",
    "fidNumber": 6043,
    "dataType": "TIME",
    "description": "Irg trade time"
  },
  {
    "fieldName": "SALE_CONDITION_XID",
    "fidNumber": 6044,
    "dataType": "STRING",
    "description": "Irg trade exch ID"
  },
  {
    "fieldName": "BID_CONTRIB",
    "fidNumber": 6045,
    "dataType": "INT",
    "description": "Bid Contrib"
  },
  {
    "fieldName": "ASK_CONTRIB",
    "fidNumber": 6046,
    "dataType": "INT",
    "description": "Ask Contrib"
  },
  {
    "fieldName": "SALE_CONDITION_DATE",
    "fidNumber": 6047,
    "dataType": "DATE",
    "description": "Irg trade date"
  },
  {
    "fieldName": "STARTSESS1",
    "fidNumber": 6048,
    "dataType": "TIME",
    "description": "Session 1 start"
  },
  {
    "fieldName": "ENDSESS2",
    "fidNumber": 6049,
    "dataType": "TIME",
    "description": "Session 2 end"
  },
  {
    "fieldName": "OPTION_ROOT",
    "fidNumber": 6050,
    "dataType": "STRING",
    "description": "Option Root"
  },
  {
    "fieldName": "NO_UPDATES",
    "fidNumber": 6051,
    "dataType": "INT",
    "description": "No Updates"
  },
  {
    "fieldName": "DISPLAY_EXPIR_DATE",
    "fidNumber": 6052,
    "dataType": "DATE",
    "description": "Contract Date"
  },
  {
    "fieldName": "REGIONAL_BID",
    "fidNumber": 6053,
    "dataType": "LPACK",
    "description": "Rgnl Bid"
  },
  {
    "fieldName": "REGIONAL_BID_TIME",
    "fidNumber": 6054,
    "dataType": "TIME",
    "description": "Rgnl Bid Time"
  },
  {
    "fieldName": "REGIONAL_BIDEXID",
    "fidNumber": 6055,
    "dataType": "STRING",
    "description": "Rgnl Bid Exch ID"
  },
  {
    "fieldName": "REGIONAL_BIDSIZE",
    "fidNumber": 6056,
    "dataType": "LONG",
    "description": "Rgnl Bid Size"
  },
  {
    "fieldName": "REGIONAL_ASK",
    "fidNumber": 6057,
    "dataType": "LPACK",
    "description": "Rgnl Ask"
  },
  {
    "fieldName": "REGIONAL_ASK_TIME",
    "fidNumber": 6058,
    "dataType": "TIME",
    "description": "Rgnl Ask Time"
  },
  {
    "fieldName": "REGIONAL_ASKEXID",
    "fidNumber": 6059,
    "dataType": "STRING",
    "description": "Rgnl Ask Exch ID"
  },
  {
    "fieldName": "REGIONAL_ASKSIZE",
    "fidNumber": 6060,
    "dataType": "LONG",
    "description": "Rgnl Ask Size"
  },
  {
    "fieldName": "USE_STD_UPDATE",
    "fidNumber": 6062,
    "dataType": "INT",
    "description": "Use Std Update"
  },
  {
    "fieldName": "OPTION_SERIES_ROOT",
    "fidNumber": 6063,
    "dataType": "STRING",
    "description": "Option Series Root"
  },
  {
    "fieldName": "MAX_ROWS",
    "fidNumber": 6064,
    "dataType": "LONG",
    "description": "Max Rows"
  },
  {
    "fieldName": "CANCEL_CONDITION",
    "fidNumber": 6065,
    "dataType": "INT",
    "description": "Cancelled Sale Condition"
  },
  {
    "fieldName": "IRG_BUYER_ID",
    "fidNumber": 6066,
    "dataType": "INT",
    "description": "Irg Buyer ID"
  },
  {
    "fieldName": "IRG_SELLER_ID",
    "fidNumber": 6067,
    "dataType": "INT",
    "description": "Irg Seller ID"
  },
  {
    "fieldName": "REGIONAL_SETTLE",
    "fidNumber": 6068,
    "dataType": "LPACK",
    "description": "Regional Settle"
  },
  {
    "fieldName": "REGIONAL_MIC",
    "fidNumber": 6069,
    "dataType": "STRING",
    "description": "Rgnl MIC"
  },
  {
    "fieldName": "REGIONAL_CURRENCY",
    "fidNumber": 6070,
    "dataType": "STRING",
    "description": "Rgnl Currency"
  },
  {
    "fieldName": "REGIONAL_TRDPRC_1",
    "fidNumber": 6071,
    "dataType": "LPACK",
    "description": "Rgnl Price"
  },
  {
    "fieldName": "REGIONAL_TRDTIM_1",
    "fidNumber": 6072,
    "dataType": "TIME",
    "description": "Rgnl Trd Time"
  },
  {
    "fieldName": "REGIONAL_TRDVOL_1",
    "fidNumber": 6073,
    "dataType": "LONG",
    "description": "Rgnl Trd Vol"
  },
  {
    "fieldName": "REGIONAL_EXCHID",
    "fidNumber": 6074,
    "dataType": "STRING",
    "description": "Rgnl Exch ID"
  },
  {
    "fieldName": "REGIONAL_TRDXID_1",
    "fidNumber": 6075,
    "dataType": "STRING",
    "description": "Rgnl Trd XID"
  },
  {
    "fieldName": "REGIONAL_TRD_DATE",
    "fidNumber": 6076,
    "dataType": "DATE",
    "description": "Rgnl Trd Date"
  },
  {
    "fieldName": "REGIONAL_OPEN_PRC",
    "fidNumber": 6077,
    "dataType": "LPACK",
    "description": "Rgnl Open"
  },
  {
    "fieldName": "REGIONAL_HST_CLOSE",
    "fidNumber": 6078,
    "dataType": "LPACK",
    "description": "Rgnl Hst Close"
  },
  {
    "fieldName": "REGIONAL_HIGH_1",
    "fidNumber": 6079,
    "dataType": "LPACK",
    "description": "Rgnl High"
  },
  {
    "fieldName": "REGIONAL_LOW_1",
    "fidNumber": 6080,
    "dataType": "LPACK",
    "description": "Rgnl Low"
  },
  {
    "fieldName": "REGIONAL_ACVOL_1",
    "fidNumber": 6081,
    "dataType": "LONG",
    "description": "Rgnl AcVol"
  },
  {
    "fieldName": "BID_CONDITION",
    "fidNumber": 6082,
    "dataType": "STRING",
    "description": "Bid condition"
  },
  {
    "fieldName": "ASK_CONDITION",
    "fidNumber": 6083,
    "dataType": "STRING",
    "description": "Ask condition"
  },
  {
    "fieldName": "REGIONAL_STATUS",
    "fidNumber": 6084,
    "dataType": "STRING",
    "description": "Regional quote condition"
  },
  {
    "fieldName": "REGIONAL_ASK_DATE",
    "fidNumber": 6085,
    "dataType": "DATE",
    "description": "Regional ask date"
  },
  {
    "fieldName": "REGIONAL_BID_DATE",
    "fidNumber": 6086,
    "dataType": "DATE",
    "description": "Regional bid date"
  },
  {
    "fieldName": "REGIONAL_NETCHNG_1",
    "fidNumber": 6087,
    "dataType": "LPACK",
    "description": "Regional net change"
  },
  {
    "fieldName": "REGIONAL_SALE_CONDITION",
    "fidNumber": 6088,
    "dataType": "INT",
    "description": "Regional sale condition"
  },
  {
    "fieldName": "REGIONAL_CHANGE_LAST",
    "fidNumber": 6089,
    "dataType": "LPACK",
    "description": "Regional last change"
  },
  {
    "fieldName": "TRADING_INDICATOR",
    "fidNumber": 6090,
    "dataType": "STRING",
    "description": "Trading Indicator"
  },
  {
    "fieldName": "BID_1WK",
    "fidNumber": 6091,
    "dataType": "LPACK",
    "description": "Bid 1WK"
  },
  {
    "fieldName": "ASK_1WK",
    "fidNumber": 6092,
    "dataType": "LPACK",
    "description": "Ask 1WK"
  },
  {
    "fieldName": "BID_2WK",
    "fidNumber": 6093,
    "dataType": "LPACK",
    "description": "Bid 2WK"
  },
  {
    "fieldName": "ASK_2WK",
    "fidNumber": 6094,
    "dataType": "LPACK",
    "description": "Ask 2WK"
  },
  {
    "fieldName": "BID_1MO",
    "fidNumber": 6095,
    "dataType": "LPACK",
    "description": "Bid 1MO"
  },
  {
    "fieldName": "ASK_1MO",
    "fidNumber": 6096,
    "dataType": "LPACK",
    "description": "Ask 1MO"
  },
  {
    "fieldName": "BID_2MO",
    "fidNumber": 6097,
    "dataType": "LPACK",
    "description": "Bid 2MO"
  },
  {
    "fieldName": "ASK_2MO",
    "fidNumber": 6098,
    "dataType": "LPACK",
    "description": "Ask 2MO"
  },
  {
    "fieldName": "BID_3MO",
    "fidNumber": 6099,
    "dataType": "LPACK",
    "description": "Bid 3MO"
  },
  {
    "fieldName": "ASK_3MO",
    "fidNumber": 6100,
    "dataType": "LPACK",
    "description": "Ask 3MO"
  },
  {
    "fieldName": "BID_6MO",
    "fidNumber": 6101,
    "dataType": "LPACK",
    "description": "Bid 6MO"
  },
  {
    "fieldName": "ASK_6MO",
    "fidNumber": 6102,
    "dataType": "LPACK",
    "description": "Ask 6MO"
  },
  {
    "fieldName": "BID_1YR",
    "fidNumber": 6103,
    "dataType": "LPACK",
    "description": "Bid 1YR"
  },
  {
    "fieldName": "ASK_1YR",
    "fidNumber": 6104,
    "dataType": "LPACK",
    "description": "Ask 1YR"
  },
  {
    "fieldName": "SYMBOL_ID",
    "fidNumber": 6105,
    "dataType": "LONG",
    "description": "Symbol Id"
  },
  {
    "fieldName": "IS_BEST_BID",
    "fidNumber": 6106,
    "dataType": "INT",
    "description": "Is best bid"
  },
  {
    "fieldName": "IS_BEST_ASK",
    "fidNumber": 6107,
    "dataType": "INT",
    "description": "Is best ask"
  },
  {
    "fieldName": "CORRECTION_DATE",
    "fidNumber": 6108,
    "dataType": "DATE",
    "description": "Correction date"
  },
  {
    "fieldName": "OPT_EXPIRY_CYCLE",
    "fidNumber": 6109,
    "dataType": "INT",
    "description": "option expiry cycle"
  },
  {
    "fieldName": "HIGH_2",
    "fidNumber": 6112,
    "dataType": "LPACK",
    "description": "High 2"
  },
  {
    "fieldName": "LOW_2",
    "fidNumber": 6113,
    "dataType": "LPACK",
    "description": "Low 2"
  },
  {
    "fieldName": "REGIONAL_YIELD",
    "fidNumber": 6120,
    "dataType": "DOUBLE",
    "description": "Regional Today's Yield"
  },
  {
    "fieldName": "REGIONAL_YLD_NETCHG",
    "fidNumber": 6121,
    "dataType": "DOUBLE",
    "description": "Regional Yield Net Change"
  },
  {
    "fieldName": "REGIONAL_BID_YIELD",
    "fidNumber": 6122,
    "dataType": "LPACK",
    "description": "Regional Bid Yield"
  },
  {
    "fieldName": "REGIONAL_ASK_YIELD",
    "fidNumber": 6123,
    "dataType": "LPACK",
    "description": "Regional Ask Yield"
  },
  {
    "fieldName": "REGIONAL_OPEN_YLD",
    "fidNumber": 6125,
    "dataType": "LPACK",
    "description": "Regional Open Yield"
  },
  {
    "fieldName": "REGIONAL_HIGH_YLD",
    "fidNumber": 6126,
    "dataType": "LPACK",
    "description": "Regional High Yield"
  },
  {
    "fieldName": "REGIONAL_LOW_YLD",
    "fidNumber": 6127,
    "dataType": "LPACK",
    "description": "Regional Low Yield"
  },
  {
    "fieldName": "REGIONAL_HST_CLSYLD",
    "fidNumber": 6128,
    "dataType": "LPACK",
    "description": "Regional Historic Close Yield"
  },
  {
    "fieldName": "OPTIMARK_START_TIME",
    "fidNumber": 6150,
    "dataType": "TIME",
    "description": "Optimark Start Time"
  },
  {
    "fieldName": "OPTIMARK_AUCTION_INTERVAL",
    "fidNumber": 6151,
    "dataType": "INT",
    "description": "Optimark Interval"
  },
  {
    "fieldName": "WEEK_VOL",
    "fidNumber": 6152,
    "dataType": "LONG",
    "description": "Week volume"
  },
  {
    "fieldName": "MONTH_VOL",
    "fidNumber": 6153,
    "dataType": "LONG",
    "description": "Month volume"
  },
  {
    "fieldName": "EXIT_VWAP_VOL",
    "fidNumber": 6154,
    "dataType": "LONG",
    "description": "VWAP volume on exit"
  },
  {
    "fieldName": "EXIT_VWAP",
    "fidNumber": 6155,
    "dataType": "DOUBLE",
    "description": "VWAP on exit"
  },
  {
    "fieldName": "EXIT_TRDPRC_1",
    "fidNumber": 6156,
    "dataType": "LPACK",
    "description": "Last Price staged exit"
  },
  {
    "fieldName": "YRHIGH_2",
    "fidNumber": 6190,
    "dataType": "LPACK",
    "description": "Yr High 2"
  },
  {
    "fieldName": "YRLOW_2",
    "fidNumber": 6191,
    "dataType": "LPACK",
    "description": "Yr Low 2"
  },
  {
    "fieldName": "BEST_BID1_TIME",
    "fidNumber": 6195,
    "dataType": "TIME",
    "description": "Best Bid Time"
  },
  {
    "fieldName": "BEST_BID1_DATE",
    "fidNumber": 6196,
    "dataType": "DATE",
    "description": "Best Bid Date"
  },
  {
    "fieldName": "BEST_ASK1_TIME",
    "fidNumber": 6197,
    "dataType": "TIME",
    "description": "Best Ask Time"
  },
  {
    "fieldName": "BEST_ASK1_DATE",
    "fidNumber": 6198,
    "dataType": "DATE",
    "description": "Best Ask Date"
  },
  {
    "fieldName": "MKT_MKR_COND",
    "fidNumber": 6199,
    "dataType": "STRING",
    "description": "MktMkr Cond"
  },
  {
    "fieldName": "BID_DATE",
    "fidNumber": 6200,
    "dataType": "DATE",
    "description": "Bid Date"
  },
  {
    "fieldName": "ASK_DATE",
    "fidNumber": 6201,
    "dataType": "DATE",
    "description": "Ask Date"
  },
  {
    "fieldName": "OPT_CALC_TYPE",
    "fidNumber": 6202,
    "dataType": "STRING",
    "description": "Opt Calc Type"
  },
  {
    "fieldName": "OPT_EXPIR_INDEX",
    "fidNumber": 6203,
    "dataType": "INT",
    "description": "Opt Exp Index"
  },
  {
    "fieldName": "SESSION",
    "fidNumber": 6204,
    "dataType": "INT",
    "description": "Session"
  },
  {
    "fieldName": "TRD_UNITS_FROMFEED",
    "fidNumber": 6205,
    "dataType": "STRING",
    "description": "Trade Units (Feed)"
  },
  {
    "fieldName": "LEAPSYM",
    "fidNumber": 6206,
    "dataType": "STRING",
    "description": "LEAP Sym"
  },
  {
    "fieldName": "LEAPSYM_2",
    "fidNumber": 6207,
    "dataType": "STRING",
    "description": "LEAP Sym 2"
  },
  {
    "fieldName": "QUOTE_UPDATE_TYPE",
    "fidNumber": 6208,
    "dataType": "INT",
    "description": "Quote Update Type"
  },
  {
    "fieldName": "FIXEDINCOME_DESCR",
    "fidNumber": 6211,
    "dataType": "STRING",
    "description": "Fixed Income Desc."
  },
  {
    "fieldName": "TOTAL_VALUE",
    "fidNumber": 6212,
    "dataType": "LONG",
    "description": "Total Value"
  },
  {
    "fieldName": "DIVIDEND_12",
    "fidNumber": 6213,
    "dataType": "LPACK",
    "description": "Div12"
  },
  {
    "fieldName": "DIVIDEND_12_footnote",
    "fidNumber": 6214,
    "dataType": "STRING",
    "description": "Div12 footnote"
  },
  {
    "fieldName": "IMO_MARKER",
    "fidNumber": 6215,
    "dataType": "STRING",
    "description": "IMO"
  },
  {
    "fieldName": "RECORD_DATE",
    "fidNumber": 6216,
    "dataType": "DATE",
    "description": "Rec Date"
  },
  {
    "fieldName": "DIVIDEND_MARKER",
    "fidNumber": 6217,
    "dataType": "STRING",
    "description": "Div Marker"
  },
  {
    "fieldName": "DIVIDEND_TEXT",
    "fidNumber": 6218,
    "dataType": "STRING",
    "description": "Div Text"
  },
  {
    "fieldName": "GV1_TEXT",
    "fidNumber": 6219,
    "dataType": "STRING",
    "description": "Generic Text 1"
  },
  {
    "fieldName": "TRANSACTIONS",
    "fidNumber": 6220,
    "dataType": "LONG",
    "description": "Trans"
  },
  {
    "fieldName": "TOP_1",
    "fidNumber": 6221,
    "dataType": "STRING",
    "description": "Top1"
  },
  {
    "fieldName": "TOP_2",
    "fidNumber": 6222,
    "dataType": "STRING",
    "description": "Top2"
  },
  {
    "fieldName": "TOP_3",
    "fidNumber": 6223,
    "dataType": "STRING",
    "description": "Top3"
  },
  {
    "fieldName": "TOP_4",
    "fidNumber": 6224,
    "dataType": "STRING",
    "description": "Top4"
  },
  {
    "fieldName": "TOP_5",
    "fidNumber": 6225,
    "dataType": "STRING",
    "description": "Top5"
  },
  {
    "fieldName": "TOP_6",
    "fidNumber": 6226,
    "dataType": "STRING",
    "description": "Top6"
  },
  {
    "fieldName": "TOP_7",
    "fidNumber": 6227,
    "dataType": "STRING",
    "description": "Top7"
  },
  {
    "fieldName": "TOP_8",
    "fidNumber": 6228,
    "dataType": "STRING",
    "description": "Top8"
  },
  {
    "fieldName": "TOP_9",
    "fidNumber": 6229,
    "dataType": "STRING",
    "description": "Top9"
  },
  {
    "fieldName": "TOP_10",
    "fidNumber": 6230,
    "dataType": "STRING",
    "description": "Top10"
  },
  {
    "fieldName": "MKT_MKR_BID",
    "fidNumber": 6231,
    "dataType": "LPACK",
    "description": "MktMkr Bid"
  },
  {
    "fieldName": "MKT_MKR_ASK",
    "fidNumber": 6232,
    "dataType": "LPACK",
    "description": "MktMkr Ask"
  },
  {
    "fieldName": "MKT_MKR_BIDEXID",
    "fidNumber": 6233,
    "dataType": "STRING",
    "description": "MktMkr Bid Exch"
  },
  {
    "fieldName": "MKT_MKR_ASKEXID",
    "fidNumber": 6234,
    "dataType": "STRING",
    "description": "MktMkr Ask Exch"
  },
  {
    "fieldName": "MKT_MKR_DATE",
    "fidNumber": 6235,
    "dataType": "DATE",
    "description": "MktMkr Date"
  },
  {
    "fieldName": "MKT_MKR_BID_TIME",
    "fidNumber": 6236,
    "dataType": "TIME",
    "description": "MktMkr Time"
  },
  {
    "fieldName": "MKT_MKR_BIDSIZE",
    "fidNumber": 6237,
    "dataType": "LONG",
    "description": "MktMkr BidSize"
  },
  {
    "fieldName": "MKT_MKR_ASKSIZE",
    "fidNumber": 6238,
    "dataType": "LONG",
    "description": "MktMkr AskSize"
  },
  {
    "fieldName": "SG_CURSOR",
    "fidNumber": 6240,
    "dataType": "STRING",
    "description": "SymGuide Cursor"
  },
  {
    "fieldName": "SG_MAX_MATCHES",
    "fidNumber": 6241,
    "dataType": "INT",
    "description": "SymGuide Max"
  },
  {
    "fieldName": "SG_SEARCH_DIRECTION",
    "fidNumber": 6242,
    "dataType": "INT",
    "description": "SymGuide Search Dir"
  },
  {
    "fieldName": "SG_TRUNCATED",
    "fidNumber": 6243,
    "dataType": "INT",
    "description": "SymGuide Truncated"
  },
  {
    "fieldName": "MKT_MKR_BEST_BID",
    "fidNumber": 6244,
    "dataType": "LPACK",
    "description": "Best Bid"
  },
  {
    "fieldName": "MKT_MKR_BEST_ASK",
    "fidNumber": 6245,
    "dataType": "LPACK",
    "description": "Best Offer"
  },
  {
    "fieldName": "MKT_MKR_ASK_TIME",
    "fidNumber": 6246,
    "dataType": "TIME",
    "description": "Mkt Mkr Ask Time"
  },
  {
    "fieldName": "MKT_MKR_BEST_BID_COUNT",
    "fidNumber": 6247,
    "dataType": "LONG",
    "description": "# best bids"
  },
  {
    "fieldName": "MKT_MKR_BEST_ASK_COUNT",
    "fidNumber": 6248,
    "dataType": "LONG",
    "description": "# best offers"
  },
  {
    "fieldName": "MKT_MKR_DISPLAY",
    "fidNumber": 6249,
    "dataType": "STRING",
    "description": "MktMkr Display"
  },
  {
    "fieldName": "LAST_YIELD",
    "fidNumber": 6250,
    "dataType": "LPACK",
    "description": "Last Yield"
  },
  {
    "fieldName": "YTM_INDICATIVE",
    "fidNumber": 6251,
    "dataType": "DOUBLE",
    "description": "YTM Ind."
  },
  {
    "fieldName": "INDICATIVE_PRICE",
    "fidNumber": 6254,
    "dataType": "LPACK",
    "description": "Ind. Price"
  },
  {
    "fieldName": "SMALLCAP",
    "fidNumber": 6255,
    "dataType": "STRING",
    "description": "Small Cap indicator"
  },
  {
    "fieldName": "MKT_MKR_CHANGE_LAST_BID",
    "fidNumber": 6265,
    "dataType": "LPACK",
    "description": "Bid Chg."
  },
  {
    "fieldName": "MKT_MKR_CHANGE_LAST_ASK",
    "fidNumber": 6266,
    "dataType": "LPACK",
    "description": "Ask Chg."
  },
  {
    "fieldName": "TOTAL_RETURN_INDEX",
    "fidNumber": 6269,
    "dataType": "DOUBLE",
    "description": "TRI Level"
  },
  {
    "fieldName": "BASE_FOR_INDEX",
    "fidNumber": 6270,
    "dataType": "LONG",
    "description": "Index Base"
  },
  {
    "fieldName": "QUOTED_MARKET_VALUE",
    "fidNumber": 6271,
    "dataType": "LONG",
    "description": "Quoted Value"
  },
  {
    "fieldName": "FLOAT",
    "fidNumber": 6272,
    "dataType": "LONG",
    "description": "Float Value"
  },
  {
    "fieldName": "INDEX_ID",
    "fidNumber": 6273,
    "dataType": "STRING",
    "description": "Index Id"
  },
  {
    "fieldName": "MARKER",
    "fidNumber": 6274,
    "dataType": "STRING",
    "description": "Markers"
  },
  {
    "fieldName": "CATS_IND",
    "fidNumber": 6275,
    "dataType": "STRING",
    "description": "CATS Indicator"
  },
  {
    "fieldName": "OPTION_INDICATOR",
    "fidNumber": 6276,
    "dataType": "STRING",
    "description": "Option Indic"
  },
  {
    "fieldName": "DIVIDEND_INDIC_RATE",
    "fidNumber": 6277,
    "dataType": "LPACK",
    "description": "Div IndicRate"
  },
  {
    "fieldName": "YR_DIVIDEND_MISSED",
    "fidNumber": 6278,
    "dataType": "INT",
    "description": "Yr DivMissed"
  },
  {
    "fieldName": "EPS_CURRENT_INTERIM",
    "fidNumber": 6279,
    "dataType": "LPACK",
    "description": "Interim EPS"
  },
  {
    "fieldName": "ADR_SHARES",
    "fidNumber": 6280,
    "dataType": "LONG",
    "description": "ADR shares"
  },
  {
    "fieldName": "SP_FILE_DATE",
    "fidNumber": 6281,
    "dataType": "DATE",
    "description": "File date"
  },
  {
    "fieldName": "PRIMARY_EXCHANGE",
    "fidNumber": 6282,
    "dataType": "STRING",
    "description": "Primary Exch"
  },
  {
    "fieldName": "EXDIVDATE_ALT",
    "fidNumber": 6283,
    "dataType": "DATE",
    "description": "ExDivDate(a)"
  },
  {
    "fieldName": "MG_TICKER",
    "fidNumber": 6285,
    "dataType": "STRING",
    "description": "Ticker Symbol"
  },
  {
    "fieldName": "SYMBOL_ERROR",
    "fidNumber": 6331,
    "dataType": "INT",
    "description": "Symbol Error"
  },
  {
    "fieldName": "SYMBOL_ERROR_TEXT",
    "fidNumber": 6332,
    "dataType": "STRING",
    "description": "Symbol Error text"
  },
  {
    "fieldName": "DIVIDEND_FREQ_N",
    "fidNumber": 6333,
    "dataType": "INT",
    "description": "Dividend freq"
  },
  {
    "fieldName": "SECURITY_CATEGORY",
    "fidNumber": 6334,
    "dataType": "INT",
    "description": "Security category"
  },
  {
    "fieldName": "ISIN_NO",
    "fidNumber": 6335,
    "dataType": "STRING",
    "description": "ISIN Number"
  },
  {
    "fieldName": "SUSPENDED_INDICATOR",
    "fidNumber": 6336,
    "dataType": "INT",
    "description": "Suspended Indicator"
  },
  {
    "fieldName": "LVL2_BID1",
    "fidNumber": 6337,
    "dataType": "LPACK",
    "description": "Best Level2 Bid"
  },
  {
    "fieldName": "LVL2_BID1_SIZE",
    "fidNumber": 6338,
    "dataType": "LONG",
    "description": "Best Level2 Bid Size"
  },
  {
    "fieldName": "LVL2_BID1_TIME",
    "fidNumber": 6339,
    "dataType": "TIME",
    "description": "Best Level2 Bid Time"
  },
  {
    "fieldName": "LVL2_BID1_ID",
    "fidNumber": 6340,
    "dataType": "STRING",
    "description": "Best Level2 Bid ID"
  },
  {
    "fieldName": "LVL2_ASK1",
    "fidNumber": 6341,
    "dataType": "LPACK",
    "description": "Best Level2 Offer"
  },
  {
    "fieldName": "LVL2_ASK1_SIZE",
    "fidNumber": 6342,
    "dataType": "LONG",
    "description": "Best Level2 Offer Size"
  },
  {
    "fieldName": "LVL2_ASK1_TIME",
    "fidNumber": 6343,
    "dataType": "TIME",
    "description": "Best Level2 Offer Time"
  },
  {
    "fieldName": "LVL2_ASK1_ID",
    "fidNumber": 6344,
    "dataType": "STRING",
    "description": "Best Level2 Offer ID"
  },
  {
    "fieldName": "LVL2_BID_SIZE",
    "fidNumber": 6345,
    "dataType": "LONG",
    "description": "Best Bids"
  },
  {
    "fieldName": "LVL2_ASK_SIZE",
    "fidNumber": 6346,
    "dataType": "LONG",
    "description": "Best Offers"
  },
  {
    "fieldName": "LVL2_INSIDE_BID_ID",
    "fidNumber": 6347,
    "dataType": "STRING",
    "description": "Inside Bid ID"
  },
  {
    "fieldName": "LVL2_INSIDE_ASK_ID",
    "fidNumber": 6348,
    "dataType": "STRING",
    "description": "Inside Ask ID"
  },
  {
    "fieldName": "MKT_MKR_BID_ORDERS",
    "fidNumber": 6349,
    "dataType": "LONG",
    "description": "MktMkr BidOrders"
  },
  {
    "fieldName": "MKT_MKR_ASK_ORDERS",
    "fidNumber": 6350,
    "dataType": "LONG",
    "description": "MktMkr AskOrders"
  },
  {
    "fieldName": "BEST_BID1_SIZE",
    "fidNumber": 6351,
    "dataType": "LONG",
    "description": "Best bid size"
  },
  {
    "fieldName": "BEST_ASK1_SIZE",
    "fidNumber": 6352,
    "dataType": "LONG",
    "description": "Best offer size"
  },
  {
    "fieldName": "BEST_BID1_EXID",
    "fidNumber": 6353,
    "dataType": "STRING",
    "description": "Best bid exchange"
  },
  {
    "fieldName": "BEST_ASK1_EXID",
    "fidNumber": 6354,
    "dataType": "STRING",
    "description": "Best offer exchange"
  },
  {
    "fieldName": "FEED_NAME",
    "fidNumber": 6355,
    "dataType": "STRING",
    "description": "Datafeed name"
  },
  {
    "fieldName": "FEED_CLASS",
    "fidNumber": 6356,
    "dataType": "STRING",
    "description": "Datafeed class"
  },
  {
    "fieldName": "PARTY1_NAME",
    "fidNumber": 6357,
    "dataType": "STRING",
    "description": "Party1 name"
  },
  {
    "fieldName": "PARTY2_NAME",
    "fidNumber": 6358,
    "dataType": "STRING",
    "description": "Party2 name"
  },
  {
    "fieldName": "SESS_CLOSE_DATE",
    "fidNumber": 6359,
    "dataType": "DATE",
    "description": "Session close date"
  },
  {
    "fieldName": "SEDOL",
    "fidNumber": 6360,
    "dataType": "STRING",
    "description": "Sedol #"
  },
  {
    "fieldName": "SESS_OPEN_DATE",
    "fidNumber": 6361,
    "dataType": "DATE",
    "description": "Session open date"
  },
  {
    "fieldName": "DISPTRDXID_1",
    "fidNumber": 6390,
    "dataType": "STRING",
    "description": "Displayed TRDXID_1"
  },
  {
    "fieldName": "DISPBIDEXID",
    "fidNumber": 6391,
    "dataType": "STRING",
    "description": "Displayed BIDEXID"
  },
  {
    "fieldName": "DISPASKEXID",
    "fidNumber": 6392,
    "dataType": "STRING",
    "description": "Displayed ASKEXID"
  },
  {
    "fieldName": "STEMPLATE_ID",
    "fidNumber": 6393,
    "dataType": "LONG",
    "description": "Stemplate ID"
  },
  {
    "fieldName": "PERMEXCHSECTYPE",
    "fidNumber": 6394,
    "dataType": "LONG",
    "description": "Coded perm/exch/sectype"
  },
  {
    "fieldName": "ORIG_TICKER",
    "fidNumber": 6395,
    "dataType": "STRING",
    "description": "Original Ticker"
  },
  {
    "fieldName": "LINE",
    "fidNumber": 6396,
    "dataType": "LONG",
    "description": "Line number"
  },
  {
    "fieldName": "PREVDAY",
    "fidNumber": 6400,
    "dataType": "STRING",
    "description": "Prev. Day"
  },
  {
    "fieldName": "CORNAV",
    "fidNumber": 6401,
    "dataType": "LPACK",
    "description": "NAV Correction"
  },
  {
    "fieldName": "CAT",
    "fidNumber": 6402,
    "dataType": "STRING",
    "description": "Category Code"
  },
  {
    "fieldName": "YECGD",
    "fidNumber": 6403,
    "dataType": "LPACK",
    "description": "Gains Distrib."
  },
  {
    "fieldName": "YEFN",
    "fidNumber": 6404,
    "dataType": "STRING",
    "description": "Distrib. Footnotes"
  },
  {
    "fieldName": "CC",
    "fidNumber": 6405,
    "dataType": "INT",
    "description": "Condition Code"
  },
  {
    "fieldName": "RELIND",
    "fidNumber": 6406,
    "dataType": "STRING",
    "description": "Release Indicator"
  },
  {
    "fieldName": "CDIV",
    "fidNumber": 6407,
    "dataType": "LPACK",
    "description": "Cash Dividends"
  },
  {
    "fieldName": "NETCHNG",
    "fidNumber": 6408,
    "dataType": "LPACK",
    "description": "Net Change"
  },
  {
    "fieldName": "LBATE",
    "fidNumber": 6410,
    "dataType": "STRING",
    "description": "Last Price BATE"
  },
  {
    "fieldName": "LOBATE",
    "fidNumber": 6411,
    "dataType": "STRING",
    "description": "Low Price BATE"
  },
  {
    "fieldName": "HIBATE",
    "fidNumber": 6412,
    "dataType": "STRING",
    "description": "High Price BATE"
  },
  {
    "fieldName": "RPTDBATE",
    "fidNumber": 6413,
    "dataType": "STRING",
    "description": "Reported BATE"
  },
  {
    "fieldName": "RANKTYP",
    "fidNumber": 6418,
    "dataType": "INT",
    "description": "Ranking Type"
  },
  {
    "fieldName": "RANKING",
    "fidNumber": 6419,
    "dataType": "INT",
    "description": "Ranking"
  },
  {
    "fieldName": "FEED_ACTION",
    "fidNumber": 6420,
    "dataType": "INT",
    "description": "Feed action"
  },
  {
    "fieldName": "SERVER_VERSION",
    "fidNumber": 6421,
    "dataType": "STRING",
    "description": "Version number"
  },
  {
    "fieldName": "SERVER_ID",
    "fidNumber": 6422,
    "dataType": "STRING",
    "description": "Server ID"
  },
  {
    "fieldName": "MCAST_ADDRESS",
    "fidNumber": 6423,
    "dataType": "STRING",
    "description": "Multicast address"
  },
  {
    "fieldName": "SERVER_TIME_OFFSET",
    "fidNumber": 6424,
    "dataType": "LONG",
    "description": "Server time offset"
  },
  {
    "fieldName": "SEQNUM_2",
    "fidNumber": 6431,
    "dataType": "LONG",
    "description": "2nd Sequence number"
  },
  {
    "fieldName": "INTRADAY_HIGH_COUNT",
    "fidNumber": 6432,
    "dataType": "LONG",
    "description": "#Highs"
  },
  {
    "fieldName": "INTRADAY_LOW_COUNT",
    "fidNumber": 6433,
    "dataType": "LONG",
    "description": "#Lows"
  },
  {
    "fieldName": "TICK_SEQNUM",
    "fidNumber": 6434,
    "dataType": "LONG",
    "description": "Tick sequence number"
  },
  {
    "fieldName": "TICK_PRNTBCK",
    "fidNumber": 6435,
    "dataType": "LONG",
    "description": "Seq number to cancel"
  },
  {
    "fieldName": "ACVOL_1_64",
    "fidNumber": 6436,
    "dataType": "INT64",
    "description": "Tot. Vol."
  },
  {
    "fieldName": "OPINT_1_64",
    "fidNumber": 6437,
    "dataType": "INT64",
    "description": "Open Interest"
  },
  {
    "fieldName": "HST_VOL_64",
    "fidNumber": 6438,
    "dataType": "INT64",
    "description": "Hist Vol"
  },
  {
    "fieldName": "MONEY_FLOW_64",
    "fidNumber": 6439,
    "dataType": "INT64",
    "description": "Money Flow"
  },
  {
    "fieldName": "VWAP_VOL_64",
    "fidNumber": 6440,
    "dataType": "INT64",
    "description": "VWAP volume"
  },
  {
    "fieldName": "REGIONAL_ACVOL_1_64",
    "fidNumber": 6441,
    "dataType": "INT64",
    "description": "Rgnl AcVol"
  },
  {
    "fieldName": "BAR_DATA_FLAGS",
    "fidNumber": 6450,
    "dataType": "LONG",
    "description": "Bar Data Flags"
  },
  {
    "fieldName": "LRP_BID",
    "fidNumber": 6460,
    "dataType": "LPACK",
    "description": "LRP Bid"
  },
  {
    "fieldName": "LRP_ASK",
    "fidNumber": 6461,
    "dataType": "LPACK",
    "description": "LRP Ask"
  },
  {
    "fieldName": "LRP_TIME",
    "fidNumber": 6462,
    "dataType": "TIME",
    "description": "LRP Time"
  },
  {
    "fieldName": "STARTTIME_SUN_OFFSET",
    "fidNumber": 6463,
    "dataType": "LONG",
    "description": "Sunday Start offset"
  },
  {
    "fieldName": "RINGAM1_BID",
    "fidNumber": 6500,
    "dataType": "LPACK",
    "description": "Ring AM1 Bid"
  },
  {
    "fieldName": "RINGAM1_BID_TIME",
    "fidNumber": 6501,
    "dataType": "TIME",
    "description": "Ring AM1 Bid Time"
  },
  {
    "fieldName": "RINGAM1_ASK",
    "fidNumber": 6502,
    "dataType": "LPACK",
    "description": "Ring AM1 Ask"
  },
  {
    "fieldName": "RINGAM1_ASK_TIME",
    "fidNumber": 6503,
    "dataType": "TIME",
    "description": "Ring AM1 Ask Time"
  },
  {
    "fieldName": "RINGAM1_TRADE_PRICE",
    "fidNumber": 6504,
    "dataType": "LPACK",
    "description": "Ring AM1 Price"
  },
  {
    "fieldName": "RINGAM1_TRADE_TIME",
    "fidNumber": 6505,
    "dataType": "TIME",
    "description": "Ring AM1 Trade Time"
  },
  {
    "fieldName": "RINGAM2_BID",
    "fidNumber": 6506,
    "dataType": "LPACK",
    "description": "Ring AM2 Bid"
  },
  {
    "fieldName": "RINGAM2_BID_TIME",
    "fidNumber": 6507,
    "dataType": "TIME",
    "description": "Ring AM2 Bid Time"
  },
  {
    "fieldName": "RINGAM2_ASK",
    "fidNumber": 6508,
    "dataType": "LPACK",
    "description": "Ring AM2 Ask"
  },
  {
    "fieldName": "RINGAM2_ASK_TIME",
    "fidNumber": 6509,
    "dataType": "TIME",
    "description": "Ring AM2 Ask Time"
  },
  {
    "fieldName": "RINGAM2_TRADE_PRICE",
    "fidNumber": 6510,
    "dataType": "LPACK",
    "description": "Ring AM2 Price"
  },
  {
    "fieldName": "RINGAM2_TRADE_TIME",
    "fidNumber": 6511,
    "dataType": "TIME",
    "description": "Ring AM2 Trade Time"
  },
  {
    "fieldName": "KERBAM_BID",
    "fidNumber": 6512,
    "dataType": "LPACK",
    "description": "Kerb AM Bid"
  },
  {
    "fieldName": "KERBAM_BID_TIME",
    "fidNumber": 6513,
    "dataType": "TIME",
    "description": "Kerb AM Bid Time"
  },
  {
    "fieldName": "KERBAM_ASK",
    "fidNumber": 6514,
    "dataType": "LPACK",
    "description": "Kerb AM Ask"
  },
  {
    "fieldName": "KERBAM_ASK_TIME",
    "fidNumber": 6515,
    "dataType": "TIME",
    "description": "Kerb AM Ask Time"
  },
  {
    "fieldName": "KERBAM_TRADE_PRICE",
    "fidNumber": 6516,
    "dataType": "LPACK",
    "description": "Kerb AM Price"
  },
  {
    "fieldName": "KERBAM_TRADE_TIME",
    "fidNumber": 6517,
    "dataType": "TIME",
    "description": "Kerb AM Trade Time"
  },
  {
    "fieldName": "RINGPM1_BID",
    "fidNumber": 6518,
    "dataType": "LPACK",
    "description": "Ring PM1 Bid"
  },
  {
    "fieldName": "RINGPM1_BID_TIME",
    "fidNumber": 6519,
    "dataType": "TIME",
    "description": "Ring PM1 Bid Time"
  },
  {
    "fieldName": "RINGPM1_ASK",
    "fidNumber": 6520,
    "dataType": "LPACK",
    "description": "Ring PM1 Ask"
  },
  {
    "fieldName": "RINGPM1_ASK_TIME",
    "fidNumber": 6521,
    "dataType": "TIME",
    "description": "Ring PM1 Ask Time"
  },
  {
    "fieldName": "RINGPM1_TRADE_PRICE",
    "fidNumber": 6522,
    "dataType": "LPACK",
    "description": "Ring PM1 Trade Price"
  },
  {
    "fieldName": "RINGPM1_TRADE_TIME",
    "fidNumber": 6523,
    "dataType": "TIME",
    "description": "Ring PM1 Trade Time"
  },
  {
    "fieldName": "RINGPM2_BID",
    "fidNumber": 6524,
    "dataType": "LPACK",
    "description": "Ring PM2 Bid"
  },
  {
    "fieldName": "RINGPM2_BID_TIME",
    "fidNumber": 6525,
    "dataType": "TIME",
    "description": "Ring PM2 Bid Time"
  },
  {
    "fieldName": "RINGPM2_ASK",
    "fidNumber": 6526,
    "dataType": "LPACK",
    "description": "Ring PM2 Ask"
  },
  {
    "fieldName": "RINGPM2_ASK_TIME",
    "fidNumber": 6527,
    "dataType": "TIME",
    "description": "Ring PM2 Ask Time"
  },
  {
    "fieldName": "RINGPM2_TRADE_PRICE",
    "fidNumber": 6528,
    "dataType": "LPACK",
    "description": "Ring PM2 Trade Price"
  },
  {
    "fieldName": "RINGPM2_TRADE_TIME",
    "fidNumber": 6529,
    "dataType": "TIME",
    "description": "Ring PM2 Trade Time"
  },
  {
    "fieldName": "KERBPM_BID",
    "fidNumber": 6530,
    "dataType": "LPACK",
    "description": "Kerb PM Bid"
  },
  {
    "fieldName": "KERBPM_BID_TIME",
    "fidNumber": 6531,
    "dataType": "TIME",
    "description": "Kerb PM Bid Time"
  },
  {
    "fieldName": "KERBPM_ASK",
    "fidNumber": 6532,
    "dataType": "LPACK",
    "description": "Kerb PM Ask"
  },
  {
    "fieldName": "KERBPM_ASK_TIME",
    "fidNumber": 6533,
    "dataType": "TIME",
    "description": "Kerb PM Ask Time"
  },
  {
    "fieldName": "KERBPM_TRADE_PRICE",
    "fidNumber": 6534,
    "dataType": "LPACK",
    "description": "Kerb PM Price"
  },
  {
    "fieldName": "KERBPM_TRADE_TIME",
    "fidNumber": 6535,
    "dataType": "TIME",
    "description": "Kerb PM Trade Time"
  },
  {
    "fieldName": "LATENCY_1",
    "fidNumber": 6600,
    "dataType": "LONG",
    "description": "Latency1"
  },
  {
    "fieldName": "LATENCY_2",
    "fidNumber": 6601,
    "dataType": "LONG",
    "description": "Latency2"
  },
  {
    "fieldName": "LATENCY_3",
    "fidNumber": 6602,
    "dataType": "LONG",
    "description": "Latency3"
  },
  {
    "fieldName": "LATENCY_4",
    "fidNumber": 6603,
    "dataType": "LONG",
    "description": "Latency4"
  },
  {
    "fieldName": "LATENCY_5",
    "fidNumber": 6604,
    "dataType": "LONG",
    "description": "Latency5"
  },
  {
    "fieldName": "LATENCY_6",
    "fidNumber": 6605,
    "dataType": "DOUBLE",
    "description": "Latency6"
  },
  {
    "fieldName": "LATENCY_DEST",
    "fidNumber": 6606,
    "dataType": "DOUBLE",
    "description": "LatencyDest"
  },
  {
    "fieldName": "SUSPEND_CNT",
    "fidNumber": 6607,
    "dataType": "LONG",
    "description": "SuspendCnt"
  },
  {
    "fieldName": "LATENCY_7",
    "fidNumber": 6608,
    "dataType": "LONG",
    "description": "Latency7"
  },
  {
    "fieldName": "GATEWAY_FORWARD_LATENCY",
    "fidNumber": 6630,
    "dataType": "DOUBLE",
    "description": "GatewayForwardLatency"
  },
  {
    "fieldName": "TRADESRV_FORWARD_LATENCY",
    "fidNumber": 6631,
    "dataType": "DOUBLE",
    "description": "TradesrvForwardLatency"
  },
  {
    "fieldName": "HANDLER_FORWARD_LATENCY",
    "fidNumber": 6632,
    "dataType": "DOUBLE",
    "description": "HandlerForwardLatency"
  },
  {
    "fieldName": "EXCHANGE_LATENCY",
    "fidNumber": 6633,
    "dataType": "DOUBLE",
    "description": "ExchangeLatency"
  },
  {
    "fieldName": "HANDLER_REVERSE_LATENCY",
    "fidNumber": 6634,
    "dataType": "DOUBLE",
    "description": "HandlerReverseLatency"
  },
  {
    "fieldName": "TRADESRV_REVERSE_LATENCY",
    "fidNumber": 6635,
    "dataType": "DOUBLE",
    "description": "TradesrvReverseLatency"
  },
  {
    "fieldName": "GATEWAY_REVERSE_LATENCY",
    "fidNumber": 6636,
    "dataType": "DOUBLE",
    "description": "GatewayReverseLatency"
  },
  {
    "fieldName": "HANDLER_EXCHANGE_LATENCY",
    "fidNumber": 6640,
    "dataType": "DOUBLE",
    "description": "HandlerExchangeLatency"
  },
  {
    "fieldName": "SCAN_TYPE",
    "fidNumber": 6700,
    "dataType": "LONG",
    "description": "Scan Type"
  },
  {
    "fieldName": "THEMIS_SERVER",
    "fidNumber": 6800,
    "dataType": "STRING",
    "description": "Themis Server"
  },
  {
    "fieldName": "THEMIS_TABLE",
    "fidNumber": 6801,
    "dataType": "STRING",
    "description": "Themis Table"
  },
  {
    "fieldName": "THEMIS_DELETE",
    "fidNumber": 6802,
    "dataType": "INT",
    "description": "Themis Delete"
  },
  {
    "fieldName": "THEMIS_STATUS",
    "fidNumber": 6803,
    "dataType": "INT",
    "description": "Themis Status"
  },
  {
    "fieldName": "THEMIS_KEY",
    "fidNumber": 6804,
    "dataType": "STRING",
    "description": "Themis Key"
  },
  {
    "fieldName": "THEMIS_CONNECTION_TYPE",
    "fidNumber": 6805,
    "dataType": "INT",
    "description": "Themis Connection Type"
  },
  {
    "fieldName": "THEMIS_PEER",
    "fidNumber": 6806,
    "dataType": "STRING",
    "description": "Themis Peer"
  },
  {
    "fieldName": "THEMIS_COL_1",
    "fidNumber": 6807,
    "dataType": "STRING",
    "description": "Themis Col 1"
  },
  {
    "fieldName": "THEMIS_COL_2",
    "fidNumber": 6808,
    "dataType": "STRING",
    "description": "Themis Col 2"
  },
  {
    "fieldName": "THEMIS_COL_3",
    "fidNumber": 6809,
    "dataType": "STRING",
    "description": "Themis Col 3"
  },
  {
    "fieldName": "THEMIS_COL_4",
    "fidNumber": 6810,
    "dataType": "STRING",
    "description": "Themis Col 4"
  },
  {
    "fieldName": "THEMIS_COL_5",
    "fidNumber": 6811,
    "dataType": "STRING",
    "description": "Themis Col 5"
  },
  {
    "fieldName": "THEMIS_COL_6",
    "fidNumber": 6812,
    "dataType": "STRING",
    "description": "Themis Col 6"
  },
  {
    "fieldName": "THEMIS_COL_7",
    "fidNumber": 6813,
    "dataType": "STRING",
    "description": "Themis Col 7"
  },
  {
    "fieldName": "THEMIS_COL_8",
    "fidNumber": 6814,
    "dataType": "STRING",
    "description": "Themis Col 8"
  },
  {
    "fieldName": "THEMIS_COMMAND",
    "fidNumber": 6815,
    "dataType": "STRING",
    "description": "Themis Command"
  },
  {
    "fieldName": "THEMIS_COMMAND_ARGS",
    "fidNumber": 6816,
    "dataType": "VECTOR_STRING",
    "description": "Themis Command Args"
  },
  {
    "fieldName": "THEMIS_COMMAND_TEXT",
    "fidNumber": 6817,
    "dataType": "STRING",
    "description": "Themis Command Text"
  },
  {
    "fieldName": "THEMIS_COMMAND_ARGS_TEXT",
    "fidNumber": 6818,
    "dataType": "VECTOR_STRING",
    "description": "Themis Command Args Text"
  },
  {
    "fieldName": "THEMIS_COMMAND_ARGS_TYPE",
    "fidNumber": 6819,
    "dataType": "VECTOR_INT",
    "description": "Themis Command Args Type"
  },
  {
    "fieldName": "THEMIS_COMMAND_ARGS_SOURCE",
    "fidNumber": 6820,
    "dataType": "VECTOR_STRING",
    "description": "Themis Command Args Source"
  },
  {
    "fieldName": "THEMIS_COMMAND_WARNING",
    "fidNumber": 6821,
    "dataType": "STRING",
    "description": "Themis Command Warning"
  },
  {
    "fieldName": "THEMIS_TITLE",
    "fidNumber": 6822,
    "dataType": "STRING",
    "description": "Themis Title"
  },
  {
    "fieldName": "THEMIS_COLUMNS",
    "fidNumber": 6823,
    "dataType": "VECTOR_STRING",
    "description": "Themis Columns"
  },
  {
    "fieldName": "THEMIS_STATUS_TYPE",
    "fidNumber": 6824,
    "dataType": "INT",
    "description": "Themis Status Type"
  },
  {
    "fieldName": "THEMIS_STAT_NAME",
    "fidNumber": 6825,
    "dataType": "STRING",
    "description": "Themis Stat Name"
  },
  {
    "fieldName": "THEMIS_STAT_VALUE",
    "fidNumber": 6826,
    "dataType": "STRING",
    "description": "Themis Stat Value"
  },
  {
    "fieldName": "THEMIS_MODULE",
    "fidNumber": 6827,
    "dataType": "STRING",
    "description": "Themis Module"
  },
  {
    "fieldName": "THEMIS_VERSION",
    "fidNumber": 6828,
    "dataType": "STRING",
    "description": "Themis Version"
  },
  {
    "fieldName": "AVG_VOL",
    "fidNumber": 7000,
    "dataType": "LONG",
    "description": "Avg Vol"
  },
  {
    "fieldName": "DIVIDEND_YIELD",
    "fidNumber": 7001,
    "dataType": "LPACK",
    "description": "Div Yield"
  },
  {
    "fieldName": "DIVIDEND_RATE",
    "fidNumber": 7002,
    "dataType": "LPACK",
    "description": "Div Rate"
  },
  {
    "fieldName": "INT_EARN_PERIOD",
    "fidNumber": 7003,
    "dataType": "STRING",
    "description": "Int. Earn. Period"
  },
  {
    "fieldName": "EPS_INTERIM",
    "fidNumber": 7004,
    "dataType": "LPACK",
    "description": "EPS Interim"
  },
  {
    "fieldName": "EARNINGS_12",
    "fidNumber": 7005,
    "dataType": "LPACK",
    "description": "Earnings 12"
  },
  {
    "fieldName": "EARNINGS_YEAR",
    "fidNumber": 7006,
    "dataType": "INT",
    "description": "Earnings Year"
  },
  {
    "fieldName": "EARNINGS_NEXT",
    "fidNumber": 7007,
    "dataType": "LPACK",
    "description": "Earnings Next"
  },
  {
    "fieldName": "EARNINGS_COMMENT",
    "fidNumber": 7008,
    "dataType": "STRING",
    "description": "Earnings Comment"
  },
  {
    "fieldName": "INT_EARN_COMMENT",
    "fidNumber": 7009,
    "dataType": "STRING",
    "description": "Int. Earn. Comment"
  },
  {
    "fieldName": "FISCAL_YEAR_END",
    "fidNumber": 7011,
    "dataType": "STRING",
    "description": "Fisc. Year End"
  },
  {
    "fieldName": "CUSIP",
    "fidNumber": 7012,
    "dataType": "STRING",
    "description": "CUSIP"
  },
  {
    "fieldName": "SP500",
    "fidNumber": 7013,
    "dataType": "INT",
    "description": "S&P 500"
  },
  {
    "fieldName": "SP_RANK",
    "fidNumber": 7014,
    "dataType": "STRING",
    "description": "S&P Rank"
  },
  {
    "fieldName": "PERC_HELD",
    "fidNumber": 7015,
    "dataType": "INT",
    "description": "Percent Held"
  },
  {
    "fieldName": "SP_STARS",
    "fidNumber": 7016,
    "dataType": "INT",
    "description": "S&P Stars"
  },
  {
    "fieldName": "BETA",
    "fidNumber": 7017,
    "dataType": "LPACK",
    "description": "Beta"
  },
  {
    "fieldName": "CURRENT_ASSETS",
    "fidNumber": 7018,
    "dataType": "LPACK",
    "description": "Curr. Assets"
  },
  {
    "fieldName": "CURRENT_LIABILITIES",
    "fidNumber": 7019,
    "dataType": "LPACK",
    "description": "Curr. Liabilities"
  },
  {
    "fieldName": "BALANCE_SHEET_DATE",
    "fidNumber": 7020,
    "dataType": "DATE",
    "description": "Balance Sheet Date"
  },
  {
    "fieldName": "LONG_DEBT",
    "fidNumber": 7021,
    "dataType": "LPACK",
    "description": "LongTerm Debt"
  },
  {
    "fieldName": "COMMON_SHARES_OUT",
    "fidNumber": 7022,
    "dataType": "LONG",
    "description": "Common Shares Out"
  },
  {
    "fieldName": "PREFERRED_SHARES_OUT",
    "fidNumber": 7023,
    "dataType": "LONG",
    "description": "Pref. Shares Out"
  },
  {
    "fieldName": "FINANCIAL_COMMENT",
    "fidNumber": 7024,
    "dataType": "STRING",
    "description": "Fin. Comment"
  },
  {
    "fieldName": "REF_YEAR_HIGH_LOW",
    "fidNumber": 7025,
    "dataType": "INT",
    "description": "Ref Year High/Low"
  },
  {
    "fieldName": "HIGH_52_1",
    "fidNumber": 7026,
    "dataType": "LPACK",
    "description": "High 52 1"
  },
  {
    "fieldName": "LOW_52_1",
    "fidNumber": 7027,
    "dataType": "LPACK",
    "description": "Low 52 1"
  },
  {
    "fieldName": "HIGH_52_2",
    "fidNumber": 7028,
    "dataType": "LPACK",
    "description": "High 52 2"
  },
  {
    "fieldName": "LOW_52_2",
    "fidNumber": 7029,
    "dataType": "LPACK",
    "description": "Low 52 2"
  },
  {
    "fieldName": "HIGH_52_3",
    "fidNumber": 7030,
    "dataType": "LPACK",
    "description": "High 52 3"
  },
  {
    "fieldName": "LOW_52_3",
    "fidNumber": 7031,
    "dataType": "LPACK",
    "description": "Low 52 3"
  },
  {
    "fieldName": "HIGH_52_4",
    "fidNumber": 7032,
    "dataType": "LPACK",
    "description": "High 52 4"
  },
  {
    "fieldName": "LOW_52_4",
    "fidNumber": 7033,
    "dataType": "LPACK",
    "description": "Low 52 4"
  },
  {
    "fieldName": "REF_YEAR_DIVIDENDS",
    "fidNumber": 7034,
    "dataType": "INT",
    "description": "Ref Year Div"
  },
  {
    "fieldName": "DIVIDEND_1",
    "fidNumber": 7035,
    "dataType": "LPACK",
    "description": "Div 1"
  },
  {
    "fieldName": "DIVIDEND_2",
    "fidNumber": 7036,
    "dataType": "LPACK",
    "description": "Div 2"
  },
  {
    "fieldName": "DIVIDEND_3",
    "fidNumber": 7037,
    "dataType": "LPACK",
    "description": "Div 3"
  },
  {
    "fieldName": "DIVIDEND_4",
    "fidNumber": 7038,
    "dataType": "LPACK",
    "description": "Div 4"
  },
  {
    "fieldName": "REF_YEAR_ER_EQ_RV_NI",
    "fidNumber": 7039,
    "dataType": "INT",
    "description": "Ref Year ER EQ RV NI"
  },
  {
    "fieldName": "EARNINGS_1",
    "fidNumber": 7040,
    "dataType": "LPACK",
    "description": "Earnings 1"
  },
  {
    "fieldName": "EARNINGS_2",
    "fidNumber": 7041,
    "dataType": "LPACK",
    "description": "Earnings 2"
  },
  {
    "fieldName": "EARNINGS_3",
    "fidNumber": 7042,
    "dataType": "LPACK",
    "description": "Earnings 3"
  },
  {
    "fieldName": "EARNINGS_4",
    "fidNumber": 7043,
    "dataType": "LPACK",
    "description": "Earnings 4"
  },
  {
    "fieldName": "EQUITY_1",
    "fidNumber": 7044,
    "dataType": "LPACK",
    "description": "Equity 1"
  },
  {
    "fieldName": "EQUITY_2",
    "fidNumber": 7045,
    "dataType": "LPACK",
    "description": "Equity 2"
  },
  {
    "fieldName": "EQUITY_3",
    "fidNumber": 7046,
    "dataType": "LPACK",
    "description": "Equity 3"
  },
  {
    "fieldName": "EQUITY_4",
    "fidNumber": 7047,
    "dataType": "LPACK",
    "description": "Equity 4"
  },
  {
    "fieldName": "REVENUE_1",
    "fidNumber": 7048,
    "dataType": "LPACK",
    "description": "Revenue 1"
  },
  {
    "fieldName": "REVENUE_2",
    "fidNumber": 7049,
    "dataType": "LPACK",
    "description": "Revenue 2"
  },
  {
    "fieldName": "REVENUE_3",
    "fidNumber": 7050,
    "dataType": "LPACK",
    "description": "Revenue 3"
  },
  {
    "fieldName": "REVENUE_4",
    "fidNumber": 7051,
    "dataType": "LPACK",
    "description": "Revenue 4"
  },
  {
    "fieldName": "NET_INCOME_1",
    "fidNumber": 7052,
    "dataType": "LPACK",
    "description": "Net Income 1"
  },
  {
    "fieldName": "NET_INCOME_2",
    "fidNumber": 7053,
    "dataType": "LPACK",
    "description": "Net Income 2"
  },
  {
    "fieldName": "NET_INCOME_3",
    "fidNumber": 7054,
    "dataType": "LPACK",
    "description": "Net Income 3"
  },
  {
    "fieldName": "NET_INCOME_4",
    "fidNumber": 7055,
    "dataType": "LPACK",
    "description": "Net Income 4"
  },
  {
    "fieldName": "SPLIT_FACTOR_1",
    "fidNumber": 7056,
    "dataType": "DOUBLE",
    "description": "Split Factor 1"
  },
  {
    "fieldName": "SPLIT_DATE_1",
    "fidNumber": 7057,
    "dataType": "DATE",
    "description": "Split Date 1"
  },
  {
    "fieldName": "SPLIT_FACTOR_2",
    "fidNumber": 7058,
    "dataType": "DOUBLE",
    "description": "Split Factor 2"
  },
  {
    "fieldName": "SPLIT_DATE_2",
    "fidNumber": 7059,
    "dataType": "DATE",
    "description": "Split Date 2"
  },
  {
    "fieldName": "SPLIT_FACTOR_3",
    "fidNumber": 7060,
    "dataType": "DOUBLE",
    "description": "Split Factor 3"
  },
  {
    "fieldName": "SPLIT_DATE_3",
    "fidNumber": 7061,
    "dataType": "DATE",
    "description": "Split Date 3"
  },
  {
    "fieldName": "EPS_V_PRIOR_YEAR",
    "fidNumber": 7062,
    "dataType": "LPACK",
    "description": "EPS V Prior Year"
  },
  {
    "fieldName": "EXPECTED_REPORT_DATE",
    "fidNumber": 7063,
    "dataType": "DATE",
    "description": "Expected Report Date"
  },
  {
    "fieldName": "DIVIDEND_YIELD_footnote",
    "fidNumber": 7200,
    "dataType": "STRING",
    "description": "Div Yield footnote"
  },
  {
    "fieldName": "DIVIDEND_footnote",
    "fidNumber": 7201,
    "dataType": "STRING",
    "description": "Div footnote"
  },
  {
    "fieldName": "DIVIDEND_RATE_footnote",
    "fidNumber": 7202,
    "dataType": "STRING",
    "description": "Div Rate footnote"
  },
  {
    "fieldName": "EPS_INTERIM_footnote",
    "fidNumber": 7203,
    "dataType": "STRING",
    "description": "EPS Interim footnote"
  },
  {
    "fieldName": "EARNINGS_12_footnote",
    "fidNumber": 7204,
    "dataType": "STRING",
    "description": "Earnings 12 footnote"
  },
  {
    "fieldName": "EARNINGS_footnote",
    "fidNumber": 7205,
    "dataType": "STRING",
    "description": "Earnings footnote"
  },
  {
    "fieldName": "EARNINGS_NEXT_footnote",
    "fidNumber": 7206,
    "dataType": "STRING",
    "description": "Earnings Next footnote"
  },
  {
    "fieldName": "LONG_DEBT_footnote",
    "fidNumber": 7207,
    "dataType": "STRING",
    "description": "Long Term Debt footnote"
  },
  {
    "fieldName": "COMMON_SHARES_OUT_footnote",
    "fidNumber": 7208,
    "dataType": "STRING",
    "description": "Common Shares Out Footnote"
  },
  {
    "fieldName": "PREFERRED_SHARES_OUT_footnote",
    "fidNumber": 7209,
    "dataType": "STRING",
    "description": "Pref. Shares Out footnote"
  },
  {
    "fieldName": "DIVIDEND_1_footnote",
    "fidNumber": 7210,
    "dataType": "STRING",
    "description": "Div 1 footnote"
  },
  {
    "fieldName": "DIVIDEND_2_footnote",
    "fidNumber": 7211,
    "dataType": "STRING",
    "description": "Div 2 footnote"
  },
  {
    "fieldName": "DIVIDEND_3_footnote",
    "fidNumber": 7212,
    "dataType": "STRING",
    "description": "Div 3 footnote"
  },
  {
    "fieldName": "DIVIDEND_4_footnote",
    "fidNumber": 7213,
    "dataType": "STRING",
    "description": "Div 4 footnote"
  },
  {
    "fieldName": "EARNINGS_1_footnote",
    "fidNumber": 7214,
    "dataType": "STRING",
    "description": "Earnings 1 footnote"
  },
  {
    "fieldName": "EARNINGS_2_footnote",
    "fidNumber": 7215,
    "dataType": "STRING",
    "description": "Earnings 2 footnote"
  },
  {
    "fieldName": "EARNINGS_3_footnote",
    "fidNumber": 7216,
    "dataType": "STRING",
    "description": "Earnings 3 footnote"
  },
  {
    "fieldName": "EARNINGS_4_footnote",
    "fidNumber": 7217,
    "dataType": "STRING",
    "description": "Earnings 4 footnote"
  },
  {
    "fieldName": "EPS_V_PRIOR_YEAR_footnote",
    "fidNumber": 7218,
    "dataType": "STRING",
    "description": "EPS V Prior Year footnote"
  },
  {
    "fieldName": "SPECIAL_DIV_AMOUNT",
    "fidNumber": 7299,
    "dataType": "DOUBLE",
    "description": "div amt"
  },
  {
    "fieldName": "SPECIAL_DIVIDEND",
    "fidNumber": 7300,
    "dataType": "LPACK",
    "description": "Special Div"
  },
  {
    "fieldName": "MATURITY_DIVIDEND",
    "fidNumber": 7301,
    "dataType": "LPACK",
    "description": "Matur. Div"
  },
  {
    "fieldName": "SPECIAL_DIVDATE",
    "fidNumber": 7302,
    "dataType": "DATE",
    "description": "Special DivDate"
  },
  {
    "fieldName": "MATURITY_DIVDATE",
    "fidNumber": 7303,
    "dataType": "DATE",
    "description": "Mat. DivDate"
  },
  {
    "fieldName": "SHARES_OUT",
    "fidNumber": 7304,
    "dataType": "LONG",
    "description": "Shares Out"
  },
  {
    "fieldName": "SP_INDUSTRY_CODE",
    "fidNumber": 7305,
    "dataType": "INT",
    "description": "S&P Ind. Code"
  },
  {
    "fieldName": "SP_CATEGORY_CODE",
    "fidNumber": 7306,
    "dataType": "INT",
    "description": "S&P cat. code"
  },
  {
    "fieldName": "BOOK_VALUE",
    "fidNumber": 7307,
    "dataType": "LPACK",
    "description": "Book Val"
  },
  {
    "fieldName": "DIVIDEND_FREQ",
    "fidNumber": 7308,
    "dataType": "STRING",
    "description": "Div Freq"
  },
  {
    "fieldName": "YEAR_DIV_LAST_MISSED",
    "fidNumber": 7309,
    "dataType": "INT",
    "description": "Year Div Last Missed"
  },
  {
    "fieldName": "INTERIM_PERIOD_END",
    "fidNumber": 7310,
    "dataType": "INT",
    "description": "Interim period start"
  },
  {
    "fieldName": "INTERIM_PERIOD_DURATION",
    "fidNumber": 7311,
    "dataType": "INT",
    "description": "Interim period duration"
  },
  {
    "fieldName": "EPS_LAST_INTERIM",
    "fidNumber": 7312,
    "dataType": "LPACK",
    "description": "EPS prev interim"
  },
  {
    "fieldName": "EPS_GROWTH_RATE",
    "fidNumber": 7313,
    "dataType": "LPACK",
    "description": "EPS growth  rate"
  },
  {
    "fieldName": "INST_OWNERS",
    "fidNumber": 7314,
    "dataType": "LONG",
    "description": "Inst Holders"
  },
  {
    "fieldName": "INST_SHARES_HELD",
    "fidNumber": 7315,
    "dataType": "LONG",
    "description": "Inst Shares"
  },
  {
    "fieldName": "BETA_WO_DIV",
    "fidNumber": 7316,
    "dataType": "LPACK",
    "description": "Beta w/o dividends"
  },
  {
    "fieldName": "SALES",
    "fidNumber": 7317,
    "dataType": "LPACK",
    "description": "Annual sales"
  },
  {
    "fieldName": "INCOME",
    "fidNumber": 7318,
    "dataType": "LPACK",
    "description": "Annual income"
  },
  {
    "fieldName": "FISCAL_PERIOD",
    "fidNumber": 7319,
    "dataType": "INT",
    "description": "Fiscal Period"
  },
  {
    "fieldName": "ISSUE_TYPE",
    "fidNumber": 7320,
    "dataType": "STRING",
    "description": "Issue type"
  },
  {
    "fieldName": "SP_INDUSTRY_CODE_2",
    "fidNumber": 7321,
    "dataType": "INT",
    "description": "SP Ind. Code"
  },
  {
    "fieldName": "CLOSE50DAVG_1D",
    "fidNumber": 7322,
    "dataType": "DOUBLE",
    "description": "Avg Price 50d"
  },
  {
    "fieldName": "CLOSE200DAVG_1D",
    "fidNumber": 7323,
    "dataType": "DOUBLE",
    "description": "Avg Price 200d"
  },
  {
    "fieldName": "RSI14D_1D",
    "fidNumber": 7324,
    "dataType": "DOUBLE",
    "description": "RSI 14d"
  },
  {
    "fieldName": "STOCH_K10D_D3_1D",
    "fidNumber": 7325,
    "dataType": "DOUBLE",
    "description": "Stochastic"
  },
  {
    "fieldName": "MACD_1D",
    "fidNumber": 7326,
    "dataType": "DOUBLE",
    "description": "MACD"
  },
  {
    "fieldName": "MACDSIGNAL_1D",
    "fidNumber": 7327,
    "dataType": "DOUBLE",
    "description": "MACD Signal"
  },
  {
    "fieldName": "VOLUME20DAVG_1D",
    "fidNumber": 7328,
    "dataType": "DOUBLE",
    "description": "Avg Vol 20d"
  },
  {
    "fieldName": "VOLUME50DAVG_1D",
    "fidNumber": 7329,
    "dataType": "DOUBLE",
    "description": "Avg Vol 50d"
  },
  {
    "fieldName": "VOLUME200DAVG_1D",
    "fidNumber": 7330,
    "dataType": "DOUBLE",
    "description": "Avg Vol 200d"
  },
  {
    "fieldName": "VOLUME5DAVG_1D",
    "fidNumber": 7331,
    "dataType": "DOUBLE",
    "description": "Avg Vol 5d"
  },
  {
    "fieldName": "VOLUME10DAVG_1D",
    "fidNumber": 7332,
    "dataType": "DOUBLE",
    "description": "Avg Vol 10d"
  },
  {
    "fieldName": "CLOSE5DAVG_1D",
    "fidNumber": 7333,
    "dataType": "DOUBLE",
    "description": "Avg Price 5d"
  },
  {
    "fieldName": "CLOSE10DAVG_1D",
    "fidNumber": 7334,
    "dataType": "DOUBLE",
    "description": "Avg Price 10d"
  },
  {
    "fieldName": "CLOSE20DAVG_1D",
    "fidNumber": 7335,
    "dataType": "DOUBLE",
    "description": "Avg Price 20d"
  },
  {
    "fieldName": "RSI9D_1D",
    "fidNumber": 7336,
    "dataType": "DOUBLE",
    "description": "RSI 9d"
  },
  {
    "fieldName": "RSI25D_1D",
    "fidNumber": 7337,
    "dataType": "DOUBLE",
    "description": "RSI 25d"
  },
  {
    "fieldName": "BOLLINGER_UPPER21D_1D",
    "fidNumber": 7338,
    "dataType": "DOUBLE",
    "description": "Bollinger U 21d"
  },
  {
    "fieldName": "BOLLINGER_LOWER21D_1D",
    "fidNumber": 7339,
    "dataType": "DOUBLE",
    "description": "Bollinger L 21d"
  },
  {
    "fieldName": "ADX14D_1D",
    "fidNumber": 7340,
    "dataType": "DOUBLE",
    "description": "ADX 14d"
  },
  {
    "fieldName": "PLUSDI14D_1D",
    "fidNumber": 7341,
    "dataType": "DOUBLE",
    "description": "PDI 14d"
  },
  {
    "fieldName": "MINUSDI14D_1D",
    "fidNumber": 7342,
    "dataType": "DOUBLE",
    "description": "MDI 14d"
  },
  {
    "fieldName": "HIGH15DMAX_1D",
    "fidNumber": 7343,
    "dataType": "DOUBLE",
    "description": "15d High"
  },
  {
    "fieldName": "LOW15DMIN_1D",
    "fidNumber": 7344,
    "dataType": "DOUBLE",
    "description": "15d Low"
  },
  {
    "fieldName": "HLVOLATILITY10D_1D",
    "fidNumber": 7345,
    "dataType": "DOUBLE",
    "description": "HL Volatility 10d"
  },
  {
    "fieldName": "SHORT_INTEREST",
    "fidNumber": 7346,
    "dataType": "LONG",
    "description": "Short Interest"
  },
  {
    "fieldName": "GICS_SECTOR",
    "fidNumber": 7347,
    "dataType": "STRING",
    "description": "GICS Sector Code"
  },
  {
    "fieldName": "GICS_INDUSTRY",
    "fidNumber": 7348,
    "dataType": "STRING",
    "description": "GICS Industry Code"
  },
  {
    "fieldName": "GICS_SUBINDUSTRY",
    "fidNumber": 7349,
    "dataType": "STRING",
    "description": "GICS Sub-Industry Code"
  },
  {
    "fieldName": "SRSI9D_1D",
    "fidNumber": 7350,
    "dataType": "DOUBLE",
    "description": "sRSI 9d"
  },
  {
    "fieldName": "SRSI14D_1D",
    "fidNumber": 7351,
    "dataType": "DOUBLE",
    "description": "sRSI 14d"
  },
  {
    "fieldName": "SRSI25D_1D",
    "fidNumber": 7352,
    "dataType": "DOUBLE",
    "description": "sRSI 25d"
  },
  {
    "fieldName": "CLOSE_1W",
    "fidNumber": 7353,
    "dataType": "LPACK",
    "description": "1 wk close"
  },
  {
    "fieldName": "CLOSE_1M",
    "fidNumber": 7354,
    "dataType": "LPACK",
    "description": "1 mon close"
  },
  {
    "fieldName": "CLOSE_1Q",
    "fidNumber": 7355,
    "dataType": "LPACK",
    "description": "1 Qtr close"
  },
  {
    "fieldName": "CLOSE_1Y",
    "fidNumber": 7356,
    "dataType": "LPACK",
    "description": "1 Yr close"
  },
  {
    "fieldName": "CLOSE_1W_TD",
    "fidNumber": 7357,
    "dataType": "LPACK",
    "description": "TD wk close"
  },
  {
    "fieldName": "CLOSE_1M_TD",
    "fidNumber": 7358,
    "dataType": "LPACK",
    "description": "TD mon close"
  },
  {
    "fieldName": "CLOSE_1Q_TD",
    "fidNumber": 7359,
    "dataType": "LPACK",
    "description": "TD Q close"
  },
  {
    "fieldName": "CLOSE_1Y_TD",
    "fidNumber": 7360,
    "dataType": "LPACK",
    "description": "TD Yr close"
  },
  {
    "fieldName": "NETCHNG_1W",
    "fidNumber": 7361,
    "dataType": "LPACK",
    "description": "NetChg1W"
  },
  {
    "fieldName": "NETCHNG_1M",
    "fidNumber": 7362,
    "dataType": "LPACK",
    "description": "NetChg1M"
  },
  {
    "fieldName": "NETCHNG_1Q",
    "fidNumber": 7363,
    "dataType": "LPACK",
    "description": "NetChg1Q"
  },
  {
    "fieldName": "NETCHNG_1Y",
    "fidNumber": 7364,
    "dataType": "LPACK",
    "description": "NetChg1Y"
  },
  {
    "fieldName": "NETCHNG_1W_TD",
    "fidNumber": 7365,
    "dataType": "LPACK",
    "description": "NetChgWTD"
  },
  {
    "fieldName": "NETCHNG_1M_TD",
    "fidNumber": 7366,
    "dataType": "LPACK",
    "description": "NetChgMTD"
  },
  {
    "fieldName": "NETCHNG_1Q_TD",
    "fidNumber": 7367,
    "dataType": "LPACK",
    "description": "NetChgQTD"
  },
  {
    "fieldName": "NETCHNG_1Y_TD",
    "fidNumber": 7368,
    "dataType": "LPACK",
    "description": "NetChgYTD"
  },
  {
    "fieldName": "PCTCHNG_1W",
    "fidNumber": 7369,
    "dataType": "LPACK",
    "description": "PctChg1W"
  },
  {
    "fieldName": "PCTCHNG_1M",
    "fidNumber": 7370,
    "dataType": "LPACK",
    "description": "PctChg1M"
  },
  {
    "fieldName": "PCTCHNG_1Q",
    "fidNumber": 7371,
    "dataType": "LPACK",
    "description": "PctChg1Q"
  },
  {
    "fieldName": "PCTCHNG_1Y",
    "fidNumber": 7372,
    "dataType": "LPACK",
    "description": "PctChg1Y"
  },
  {
    "fieldName": "PCTCHNG_1W_TD",
    "fidNumber": 7373,
    "dataType": "LPACK",
    "description": "PctChgWTD"
  },
  {
    "fieldName": "PCTCHNG_1M_TD",
    "fidNumber": 7374,
    "dataType": "LPACK",
    "description": "PctChgMTD"
  },
  {
    "fieldName": "PCTCHNG_1Q_TD",
    "fidNumber": 7375,
    "dataType": "LPACK",
    "description": "PctChgQTD"
  },
  {
    "fieldName": "PCTCHNG_1Y_TD",
    "fidNumber": 7376,
    "dataType": "LPACK",
    "description": "PctChgYTD"
  },
  {
    "fieldName": "GICS_INDUSTRY_GROUP",
    "fidNumber": 7377,
    "dataType": "STRING",
    "description": "GICS Industry Group Code"
  },
  {
    "fieldName": "VOLUME5DAVG_COMP",
    "fidNumber": 7382,
    "dataType": "DOUBLE",
    "description": "Comp. Avg Vol 5d"
  },
  {
    "fieldName": "VOLUME10DAVG_COMP",
    "fidNumber": 7383,
    "dataType": "DOUBLE",
    "description": "Comp. Avg Vol 10d"
  },
  {
    "fieldName": "VOLUME20DAVG_COMP",
    "fidNumber": 7384,
    "dataType": "DOUBLE",
    "description": "Comp. Avg Vol 20d"
  },
  {
    "fieldName": "VOLUME50DAVG_COMP",
    "fidNumber": 7385,
    "dataType": "DOUBLE",
    "description": "Comp. Avg Vol 50d"
  },
  {
    "fieldName": "VOLUME200DAVG_COMP",
    "fidNumber": 7386,
    "dataType": "DOUBLE",
    "description": "Comp. Avg Vol 200d"
  },
  {
    "fieldName": "VOLUME30DAVG_1D",
    "fidNumber": 7387,
    "dataType": "DOUBLE",
    "description": "Avg Vol 30d"
  },
  {
    "fieldName": "VOLUME90DAVG_1D",
    "fidNumber": 7388,
    "dataType": "DOUBLE",
    "description": "Avg Vol 90d"
  },
  {
    "fieldName": "CLOSE30DAVG_1D",
    "fidNumber": 7389,
    "dataType": "DOUBLE",
    "description": "Avg Price 30d"
  },
  {
    "fieldName": "CLOSE90DAVG_1D",
    "fidNumber": 7390,
    "dataType": "DOUBLE",
    "description": "Avg Price 90d"
  },
  {
    "fieldName": "VOLUME30DAVG_COMP",
    "fidNumber": 7391,
    "dataType": "DOUBLE",
    "description": "Comp. Avg Vol 30d"
  },
  {
    "fieldName": "VOLUME90DAVG_COMP",
    "fidNumber": 7392,
    "dataType": "DOUBLE",
    "description": "Comp. Avg Vol 90d"
  },
  {
    "fieldName": "PRC_CCY",
    "fidNumber": 7393,
    "dataType": "STRING",
    "description": "pricing currency"
  },
  {
    "fieldName": "PRC_CCY_MULT",
    "fidNumber": 7394,
    "dataType": "DOUBLE",
    "description": "pricing currency multiplier"
  },
  {
    "fieldName": "CCY_PAIR",
    "fidNumber": 7395,
    "dataType": "STRING",
    "description": "currency pair (from/to)"
  },
  {
    "fieldName": "CCY_FROM",
    "fidNumber": 7396,
    "dataType": "STRING",
    "description": "from currency"
  },
  {
    "fieldName": "CCY_TO",
    "fidNumber": 7397,
    "dataType": "STRING",
    "description": "to currency"
  },
  {
    "fieldName": "SHARES_OUT_64",
    "fidNumber": 7398,
    "dataType": "INT64",
    "description": "Shares Out"
  },
  {
    "fieldName": "VOLUME180DAVG_1D",
    "fidNumber": 7399,
    "dataType": "DOUBLE",
    "description": "Avg Vol 180d"
  },
  {
    "fieldName": "VOLUMEAVG_1D",
    "fidNumber": 7400,
    "dataType": "DOUBLE",
    "description": "Avg Vol"
  },
  {
    "fieldName": "DIVIDND_TAX",
    "fidNumber": 7401,
    "dataType": "DOUBLE",
    "description": "Dividend Tax"
  },
  {
    "fieldName": "ADVISE_TYPE",
    "fidNumber": 7402,
    "dataType": "INT",
    "description": "Advise Type"
  },
  {
    "fieldName": "GICS_SECTOR_CODE",
    "fidNumber": 7403,
    "dataType": "LONG",
    "description": "GICS Sector Numeric Code"
  },
  {
    "fieldName": "GICS_INDUSTRY_CODE",
    "fidNumber": 7404,
    "dataType": "LONG",
    "description": "GICS Industry Numeric Code"
  },
  {
    "fieldName": "GICS_SUBINDUSTRY_CODE",
    "fidNumber": 7405,
    "dataType": "LONG",
    "description": "GICS Sub-Industry Numeric Code"
  },
  {
    "fieldName": "GICS_INDUSTRY_GROUP_CODE",
    "fidNumber": 7406,
    "dataType": "LONG",
    "description": "GICS Industry Group Numeric Code"
  },
  {
    "fieldName": "VOLUME180DAVG_COMP",
    "fidNumber": 7407,
    "dataType": "DOUBLE",
    "description": "Comp. Avg Vol 180d"
  },
  {
    "fieldName": "VOL_PER_SHARE",
    "fidNumber": 8100,
    "dataType": "LONG",
    "description": "Vol Per Share"
  },
  {
    "fieldName": "BID_REGIS_NO",
    "fidNumber": 8101,
    "dataType": "LONG",
    "description": "Bid Reg. No."
  },
  {
    "fieldName": "ASK_REGIS_NO",
    "fidNumber": 8102,
    "dataType": "LONG",
    "description": "Ask Reg. No."
  },
  {
    "fieldName": "BROKER_BID_NO",
    "fidNumber": 8103,
    "dataType": "LONG",
    "description": "Broker Bid No"
  },
  {
    "fieldName": "BROKER_ASK_NO",
    "fidNumber": 8104,
    "dataType": "LONG",
    "description": "Broker Ask No"
  },
  {
    "fieldName": "BROKER_BUY_NO",
    "fidNumber": 8105,
    "dataType": "LONG",
    "description": "Broker Buy No"
  },
  {
    "fieldName": "BROKER_SELL_NO",
    "fidNumber": 8106,
    "dataType": "LONG",
    "description": "Broker Sell No"
  },
  {
    "fieldName": "AVG_PRICE",
    "fidNumber": 8107,
    "dataType": "DOUBLE",
    "description": "Avg Price"
  },
  {
    "fieldName": "NUM_ASKS",
    "fidNumber": 8108,
    "dataType": "LONG",
    "description": "No. Asks"
  },
  {
    "fieldName": "TENOR",
    "fidNumber": 8109,
    "dataType": "STRING",
    "description": "Tenor"
  },
  {
    "fieldName": "GROUP",
    "fidNumber": 9000,
    "dataType": "STRING",
    "description": "Group"
  },
  {
    "fieldName": "COLLECT_STATUS",
    "fidNumber": 9001,
    "dataType": "INT",
    "description": "Collect Status"
  },
  {
    "fieldName": "QUOTE_STATUS",
    "fidNumber": 9002,
    "dataType": "INT",
    "description": "Internal Quote Status"
  },
  {
    "fieldName": "SYNTHETIC",
    "fidNumber": 9003,
    "dataType": "INT",
    "description": "Synthetic?"
  },
  {
    "fieldName": "DAYS_BACK",
    "fidNumber": 9004,
    "dataType": "INT",
    "description": "Days Back"
  },
  {
    "fieldName": "BARINTERVAL",
    "fidNumber": 9005,
    "dataType": "INT",
    "description": "Bar Interval"
  },
  {
    "fieldName": "STARTONBOUND",
    "fidNumber": 9006,
    "dataType": "INT",
    "description": "Start on Bound"
  },
  {
    "fieldName": "STARTDATE",
    "fidNumber": 9007,
    "dataType": "DATE",
    "description": "Start Date"
  },
  {
    "fieldName": "STOPDATE",
    "fidNumber": 9008,
    "dataType": "DATE",
    "description": "Stop Date"
  },
  {
    "fieldName": "CHART_STARTTIME",
    "fidNumber": 9009,
    "dataType": "TIME",
    "description": "Chart Start Time"
  },
  {
    "fieldName": "CHART_STOPTIME",
    "fidNumber": 9010,
    "dataType": "TIME",
    "description": "Chart Stop Time"
  },
  {
    "fieldName": "CHART_ALL_TICKS",
    "fidNumber": 9011,
    "dataType": "INT",
    "description": "Chart All Tick"
  },
  {
    "fieldName": "CHART_FILL_BARS",
    "fidNumber": 9012,
    "dataType": "INT",
    "description": "Chart Fill Bars"
  },
  {
    "fieldName": "IS_ACTIVE",
    "fidNumber": 9013,
    "dataType": "INT",
    "description": "Is Active"
  },
  {
    "fieldName": "CHART_FLAGS",
    "fidNumber": 9014,
    "dataType": "INT",
    "description": "Chart Flags"
  },
  {
    "fieldName": "MINUTES_BACK",
    "fidNumber": 9015,
    "dataType": "INT",
    "description": "Minutes Back"
  },
  {
    "fieldName": "TICK_TYPE",
    "fidNumber": 9020,
    "dataType": "INT",
    "description": "Tick Type"
  },
  {
    "fieldName": "UPDATE_TYPE",
    "fidNumber": 9021,
    "dataType": "INT",
    "description": "Update Type"
  },
  {
    "fieldName": "CHART_TABLES",
    "fidNumber": 9022,
    "dataType": "STRING",
    "description": "Chart Tables"
  },
  {
    "fieldName": "TABLE",
    "fidNumber": 9023,
    "dataType": "STRING",
    "description": "Table"
  },
  {
    "fieldName": "CONFLATION_TYPE",
    "fidNumber": 9024,
    "dataType": "SHORT",
    "description": "Conflation Type"
  },
  {
    "fieldName": "NEW_NAME",
    "fidNumber": 9031,
    "dataType": "STRING",
    "description": "New Name"
  },
  {
    "fieldName": "RENAME_DATE",
    "fidNumber": 9032,
    "dataType": "DATE",
    "description": "Rename Date"
  },
  {
    "fieldName": "PASSTHRU",
    "fidNumber": 9033,
    "dataType": "INT",
    "description": "PASSTHRU"
  },
  {
    "fieldName": "LISTNAME",
    "fidNumber": 9034,
    "dataType": "STRING",
    "description": "List Name"
  },
  {
    "fieldName": "AUTOADD",
    "fidNumber": 9035,
    "dataType": "INT",
    "description": "Auto Add"
  },
  {
    "fieldName": "FIDGROUP_NAME",
    "fidNumber": 9036,
    "dataType": "STRING",
    "description": "Template name"
  },
  {
    "fieldName": "FIDGROUP_FIDS",
    "fidNumber": 9037,
    "dataType": "VECTOR_INT",
    "description": "Fields in template"
  },
  {
    "fieldName": "ADVISE_UNCH_FIELDS",
    "fidNumber": 9038,
    "dataType": "INT",
    "description": "Send Unchanged fields"
  },
  {
    "fieldName": "REQUEST_ID",
    "fidNumber": 9039,
    "dataType": "LONG",
    "description": "Request Id"
  },
  {
    "fieldName": "RECORD_STATUS",
    "fidNumber": 9041,
    "dataType": "INT",
    "description": "Record status"
  },
  {
    "fieldName": "ADVISE_ID",
    "fidNumber": 9042,
    "dataType": "LONG",
    "description": "Advise ID"
  },
  {
    "fieldName": "SERVER_CLASS",
    "fidNumber": 9050,
    "dataType": "STRING",
    "description": "Server Class"
  },
  {
    "fieldName": "SERVER_CLASS_ATTRIBUTES",
    "fidNumber": 9051,
    "dataType": "STRING",
    "description": "Server Class Attributes"
  },
  {
    "fieldName": "SERVER_CLASS_MACHINE",
    "fidNumber": 9052,
    "dataType": "STRING_VECTOR",
    "description": "Server Class Machine"
  },
  {
    "fieldName": "UTC_OFFSET",
    "fidNumber": 9053,
    "dataType": "INT",
    "description": "UTC Offset"
  },
  {
    "fieldName": "USER_SYMBOL",
    "fidNumber": 9054,
    "dataType": "STRING",
    "description": "User Symbol"
  },
  {
    "fieldName": "SYMBOLOGY",
    "fidNumber": 9055,
    "dataType": "INT",
    "description": "Symbology"
  },
  {
    "fieldName": "EXCHANGE_UTC_OFFSET",
    "fidNumber": 9056,
    "dataType": "LONG",
    "description": "Exchange UTC Offset"
  },
  {
    "fieldName": "SERVER_STATUS_TEXT",
    "fidNumber": 9200,
    "dataType": "STRING",
    "description": "Server status"
  },
  {
    "fieldName": "SERVER_STATUS",
    "fidNumber": 9201,
    "dataType": "INT",
    "description": "Server status"
  },
  {
    "fieldName": "SERVER_RANK",
    "fidNumber": 9202,
    "dataType": "INT",
    "description": "Server rank"
  },
  {
    "fieldName": "STATUS_INTERVAL",
    "fidNumber": 9203,
    "dataType": "INT",
    "description": "Server status interval"
  },
  {
    "fieldName": "NEXT_RESET_TIME",
    "fidNumber": 9204,
    "dataType": "LONG",
    "description": "Next reset time"
  },
  {
    "fieldName": "NEXT_SETTLE_TIME",
    "fidNumber": 9205,
    "dataType": "LONG",
    "description": "Next settle time"
  },
  {
    "fieldName": "CONFLATION_RATE",
    "fidNumber": 9206,
    "dataType": "SHORT",
    "description": "conflation rate"
  },
  {
    "fieldName": "CONFLATION_INTERVAL",
    "fidNumber": 9207,
    "dataType": "SHORT",
    "description": "conflation interval"
  },
  {
    "fieldName": "CONFLATE_TRADE",
    "fidNumber": 9208,
    "dataType": "SHORT",
    "description": "conflate trade"
  },
  {
    "fieldName": "MSG_TIMER_HIGH",
    "fidNumber": 9998,
    "dataType": "LONG",
    "description": ""
  },
  {
    "fieldName": "MSG_TIMER_LOW",
    "fidNumber": 9999,
    "dataType": "LONG",
    "description": ""
  },
  {
    "fieldName": "C_SYMBOL",
    "fidNumber": 10000,
    "dataType": "STRING",
    "description": "Symbol"
  },
  {
    "fieldName": "C_UPDATE",
    "fidNumber": 10001,
    "dataType": "INT",
    "description": "Update Flags"
  },
  {
    "fieldName": "C_CHSETT",
    "fidNumber": 10002,
    "dataType": "LPACK",
    "description": "Chg. Settle"
  },
  {
    "fieldName": "C_CHOPEN",
    "fidNumber": 10003,
    "dataType": "LPACK",
    "description": "Chg. Open"
  },
  {
    "fieldName": "C_CHPREV",
    "fidNumber": 10004,
    "dataType": "LPACK",
    "description": "Chg. Prev"
  },
  {
    "fieldName": "C_CHSETTP",
    "fidNumber": 10005,
    "dataType": "DPACK",
    "description": "Net Chg. %"
  },
  {
    "fieldName": "C_CHOPENP",
    "fidNumber": 10006,
    "dataType": "DPACK",
    "description": "Chg. Open %"
  },
  {
    "fieldName": "C_CHOVER",
    "fidNumber": 10007,
    "dataType": "LPACK",
    "description": "Chg. Over"
  },
  {
    "fieldName": "C_CHOVERP",
    "fidNumber": 10008,
    "dataType": "DPACK",
    "description": "Chg. Over %"
  },
  {
    "fieldName": "C_POSITION",
    "fidNumber": 10009,
    "dataType": "DOUBLE",
    "description": "Position"
  },
  {
    "fieldName": "C_PL",
    "fidNumber": 10010,
    "dataType": "DOUBLE",
    "description": "P&L Total"
  },
  {
    "fieldName": "C_PL_TODAY",
    "fidNumber": 10011,
    "dataType": "DOUBLE",
    "description": "P&L Intraday pos"
  },
  {
    "fieldName": "C_PL_OPNPOS",
    "fidNumber": 10012,
    "dataType": "DOUBLE",
    "description": "P&L Overnight Pos"
  },
  {
    "fieldName": "C_PL_PERSHARE",
    "fidNumber": 10013,
    "dataType": "DOUBLE",
    "description": "P&L per share"
  },
  {
    "fieldName": "C_HIST_PL",
    "fidNumber": 10014,
    "dataType": "DOUBLE",
    "description": "Overnight Hist P&L"
  },
  {
    "fieldName": "C_HIST_NET_PL",
    "fidNumber": 10015,
    "dataType": "DOUBLE",
    "description": "Hist P&L"
  },
  {
    "fieldName": "C_HIST_NET_PL_PERSHARE",
    "fidNumber": 10016,
    "dataType": "DOUBLE",
    "description": "Hist P&L per Share"
  },
  {
    "fieldName": "C_NETPOS_TODAY",
    "fidNumber": 10020,
    "dataType": "DOUBLE",
    "description": "Pos Today"
  },
  {
    "fieldName": "C_NETPOS_OVERNIGHT",
    "fidNumber": 10021,
    "dataType": "DOUBLE",
    "description": "Pos Overnight"
  },
  {
    "fieldName": "C_TOTAL_PROFIT",
    "fidNumber": 10022,
    "dataType": "DOUBLE",
    "description": "Total Profit"
  },
  {
    "fieldName": "C_VWAP_EFFICIENCY",
    "fidNumber": 10023,
    "dataType": "DOUBLE",
    "description": "VWAP Efficiency"
  },
  {
    "fieldName": "C_NEW_HIGH52",
    "fidNumber": 10024,
    "dataType": "INT",
    "description": "New High52"
  },
  {
    "fieldName": "C_NEW_LOW52",
    "fidNumber": 10025,
    "dataType": "INT",
    "description": "New Low52"
  },
  {
    "fieldName": "C_INTRADAY_CASH_BALANCE",
    "fidNumber": 10026,
    "dataType": "DOUBLE",
    "description": "Intraday Cash"
  },
  {
    "fieldName": "C_NETCHNG_POST",
    "fidNumber": 10027,
    "dataType": "LPACK",
    "description": "Irg NetChg"
  },
  {
    "fieldName": "C_52_WEEK_PCT",
    "fidNumber": 10028,
    "dataType": "DOUBLE",
    "description": "52-Week Pct"
  },
  {
    "fieldName": "C_NETCHNG_POST2",
    "fidNumber": 10029,
    "dataType": "LPACK",
    "description": "Irg NetChg Today"
  },
  {
    "fieldName": "C_PCTCHNG_POST",
    "fidNumber": 10030,
    "dataType": "LPACK",
    "description": "Irg %Chg"
  },
  {
    "fieldName": "C_PCTCHNG_POST2",
    "fidNumber": 10031,
    "dataType": "LPACK",
    "description": "Irg %Chg Today"
  },
  {
    "fieldName": "C_SYMBOL_GROUP",
    "fidNumber": 10032,
    "dataType": "LONG",
    "description": "Symbol Group"
  },
  {
    "fieldName": "C_CUSIP_OR_ISIN",
    "fidNumber": 10033,
    "dataType": "STRING",
    "description": "CUSIP/ISIN"
  },
  {
    "fieldName": "C_BBO_MID",
    "fidNumber": 10034,
    "dataType": "DOUBLE",
    "description": "Midpoint"
  },
  {
    "fieldName": "C_BUYORSELL_DISP",
    "fidNumber": 10035,
    "dataType": "STRING",
    "description": "Buy/Sell Disp"
  },
  {
    "fieldName": "C_NET_PROFIT",
    "fidNumber": 10036,
    "dataType": "DOUBLE",
    "description": "Net Profit"
  },
  {
    "fieldName": "C_HIST_TOTAL_PROFIT",
    "fidNumber": 10037,
    "dataType": "DOUBLE",
    "description": "Hist Total Profit"
  },
  {
    "fieldName": "C_HIST_NET_PROFIT",
    "fidNumber": 10038,
    "dataType": "DOUBLE",
    "description": "Hist Net Profit"
  },
  {
    "fieldName": "C_FX_BID_DIGITS",
    "fidNumber": 10039,
    "dataType": "LONG",
    "description": "Fx Bid Digits"
  },
  {
    "fieldName": "C_FX_ASK_DIGITS",
    "fidNumber": 10040,
    "dataType": "LONG",
    "description": "Fx Ask Digits"
  },
  {
    "fieldName": "C_LONG_SHORT_POS_IND",
    "fidNumber": 10041,
    "dataType": "LONG",
    "description": "Long/Short Indicator"
  },
  {
    "fieldName": "C_LAST_PRICE_REF",
    "fidNumber": 10042,
    "dataType": "LPACK",
    "description": "Last Price Ref"
  },
  {
    "fieldName": "C_COUNTRY_FLAG",
    "fidNumber": 10043,
    "dataType": "STRING",
    "description": "Country Flag"
  },
  {
    "fieldName": "C_ORDER_GROSS_MARKET_VALUE",
    "fidNumber": 10044,
    "dataType": "DOUBLE",
    "description": "Order Gross Mkt Value"
  },
  {
    "fieldName": "C_ORDER_NET_MARKET_VALUE",
    "fidNumber": 10045,
    "dataType": "DOUBLE",
    "description": "Order Net Mkt Value"
  },
  {
    "fieldName": "C_UNDERLIER_NET_PNL",
    "fidNumber": 10046,
    "dataType": "DOUBLE",
    "description": "Underlier Net P&L"
  },
  {
    "fieldName": "C_PNL_MKT_PRICE_L",
    "fidNumber": 10047,
    "dataType": "DOUBLE",
    "description": "P&L Mkt Prc (Long)"
  },
  {
    "fieldName": "C_PNL_MKT_PRICE_S",
    "fidNumber": 10048,
    "dataType": "DOUBLE",
    "description": "P&L Mkt Prc (Short)"
  },
  {
    "fieldName": "C_DAY_PNL",
    "fidNumber": 10049,
    "dataType": "DOUBLE",
    "description": "Day P&L"
  },
  {
    "fieldName": "C_PCT_REMAINING_ADV_20",
    "fidNumber": 10050,
    "dataType": "DOUBLE",
    "description": "20-day RADV Percent"
  },
  {
    "fieldName": "C_DIR",
    "fidNumber": 10110,
    "dataType": "INT",
    "description": "Dir. Last"
  },
  {
    "fieldName": "C_NEWSPRESENT",
    "fidNumber": 10111,
    "dataType": "INT",
    "description": "News Present"
  },
  {
    "fieldName": "C_NEWSTODAY",
    "fidNumber": 10112,
    "dataType": "TIME",
    "description": "News Time Today"
  },
  {
    "fieldName": "C_DIRNET",
    "fidNumber": 10113,
    "dataType": "INT",
    "description": "Dir. Net"
  },
  {
    "fieldName": "C_USER_TEXT",
    "fidNumber": 10114,
    "dataType": "STRING",
    "description": "User Text"
  },
  {
    "fieldName": "C_DIRNAS",
    "fidNumber": 10115,
    "dataType": "INT",
    "description": "Dir. Nasdaq"
  },
  {
    "fieldName": "C_PERATIO",
    "fidNumber": 10116,
    "dataType": "DOUBLE",
    "description": "P/E Ratio (Live)"
  },
  {
    "fieldName": "C_YIELD",
    "fidNumber": 10117,
    "dataType": "DOUBLE",
    "description": "Yield"
  },
  {
    "fieldName": "C_BIDASK_SPREAD",
    "fidNumber": 10118,
    "dataType": "LPACK",
    "description": "Bid-Ask Spread"
  },
  {
    "fieldName": "C_LOWER_BOUND",
    "fidNumber": 10119,
    "dataType": "DOUBLE",
    "description": "Lower Bound"
  },
  {
    "fieldName": "C_UPPER_BOUND",
    "fidNumber": 10120,
    "dataType": "DOUBLE",
    "description": "Upper Bound"
  },
  {
    "fieldName": "C_USER_ALERT",
    "fidNumber": 10121,
    "dataType": "INT",
    "description": "User Alert"
  },
  {
    "fieldName": "C_BIDASK",
    "fidNumber": 10122,
    "dataType": "STRING",
    "description": "Bid/Ask"
  },
  {
    "fieldName": "C_BIDASK_SIZE",
    "fidNumber": 10123,
    "dataType": "STRING",
    "description": "Bid/Ask Size"
  },
  {
    "fieldName": "C_RANGE_TODAY",
    "fidNumber": 10124,
    "dataType": "LPACK",
    "description": "Range Today"
  },
  {
    "fieldName": "C_PCT_WEEK_VOL",
    "fidNumber": 10125,
    "dataType": "DOUBLE",
    "description": "Week Vol %"
  },
  {
    "fieldName": "C_GAP_OPEN",
    "fidNumber": 10126,
    "dataType": "LPACK",
    "description": "Gap Open"
  },
  {
    "fieldName": "C_RANGE_TODAY_PCT",
    "fidNumber": 10127,
    "dataType": "DOUBLE",
    "description": "Range Today Pct."
  },
  {
    "fieldName": "C_BIDASK_LOCK_CROSS",
    "fidNumber": 10128,
    "dataType": "INT",
    "description": "Locked/Crossed Indicator"
  },
  {
    "fieldName": "C_HIGH_LOW_INDICATOR",
    "fidNumber": 10129,
    "dataType": "INT",
    "description": "High/Low Indicator"
  },
  {
    "fieldName": "C_BIDASK_SPREAD_PCT",
    "fidNumber": 10130,
    "dataType": "DOUBLE",
    "description": "Bid-Ask Spread %"
  },
  {
    "fieldName": "C_PUT_CALL_RATIO",
    "fidNumber": 10131,
    "dataType": "DOUBLE",
    "description": "Put/Call Ratio"
  },
  {
    "fieldName": "C_AG_BIDASK_SIZE",
    "fidNumber": 10132,
    "dataType": "STRING",
    "description": "Ag Bid/Ask Size"
  },
  {
    "fieldName": "C_BOND_YTM_BID",
    "fidNumber": 10138,
    "dataType": "DOUBLE",
    "description": "YTM - BID"
  },
  {
    "fieldName": "C_BOND_YTM_ASK",
    "fidNumber": 10139,
    "dataType": "DOUBLE",
    "description": "YTM - ASK"
  },
  {
    "fieldName": "C_BOND_ACCRUED_INTEREST",
    "fidNumber": 10140,
    "dataType": "DOUBLE",
    "description": "Acc. Interest"
  },
  {
    "fieldName": "C_BOND_INVOICE_PRICE",
    "fidNumber": 10141,
    "dataType": "DOUBLE",
    "description": "Net Price"
  },
  {
    "fieldName": "C_BOND_YIELD",
    "fidNumber": 10142,
    "dataType": "DOUBLE",
    "description": "Bond Yield"
  },
  {
    "fieldName": "C_BOND_NEXT_COUPON",
    "fidNumber": 10143,
    "dataType": "DATE",
    "description": "Next Coupon"
  },
  {
    "fieldName": "C_BOND_ORDER_INVOICE_PRICE",
    "fidNumber": 10144,
    "dataType": "DOUBLE",
    "description": "Net Order Price"
  },
  {
    "fieldName": "C_SETTLE_DATE",
    "fidNumber": 10145,
    "dataType": "DATE",
    "description": "Settle Date"
  },
  {
    "fieldName": "C_NET_POS_COST",
    "fidNumber": 10146,
    "dataType": "DOUBLE",
    "description": "Cost of Net Pos"
  },
  {
    "fieldName": "C_DIFF5DAVG",
    "fidNumber": 10147,
    "dataType": "LPACK",
    "description": "Diff 5d Avg"
  },
  {
    "fieldName": "C_DIFF10DAVG",
    "fidNumber": 10148,
    "dataType": "LPACK",
    "description": "Diff 10d Avg"
  },
  {
    "fieldName": "C_DIFF20DAVG",
    "fidNumber": 10149,
    "dataType": "LPACK",
    "description": "Diff 20d Avg"
  },
  {
    "fieldName": "C_DIFF50DAVG",
    "fidNumber": 10150,
    "dataType": "LPACK",
    "description": "Diff 50d Avg"
  },
  {
    "fieldName": "C_DIFF200DAVG",
    "fidNumber": 10151,
    "dataType": "LPACK",
    "description": "Diff 200d Avg"
  },
  {
    "fieldName": "C_DIFF_VOL_200_50",
    "fidNumber": 10152,
    "dataType": "LPACK",
    "description": "Diff Vol 200/50"
  },
  {
    "fieldName": "C_DIFF_VOL20_PCT",
    "fidNumber": 10153,
    "dataType": "LPACK",
    "description": "%Diff Vol20"
  },
  {
    "fieldName": "C_CURR_BID_YIELD",
    "fidNumber": 10154,
    "dataType": "DOUBLE",
    "description": "Current bid yield"
  },
  {
    "fieldName": "C_CURR_ASK_YIELD",
    "fidNumber": 10155,
    "dataType": "DOUBLE",
    "description": "Current ask yield"
  },
  {
    "fieldName": "C_ORDER_LIQ_INDICATOR",
    "fidNumber": 10156,
    "dataType": "DOUBLE",
    "description": "Liquidity Indicator"
  },
  {
    "fieldName": "C_NETCHNG_AUCTION",
    "fidNumber": 10157,
    "dataType": "LPACK",
    "description": "Auction NetChg"
  },
  {
    "fieldName": "C_PCTCHNG_AUCTION",
    "fidNumber": 10158,
    "dataType": "LPACK",
    "description": "Auction %Chg"
  },
  {
    "fieldName": "C_NETCHNG_AUCTION2",
    "fidNumber": 10159,
    "dataType": "LPACK",
    "description": "Auction NetChg2"
  },
  {
    "fieldName": "C_PCTCHNG_AUCTION2",
    "fidNumber": 10160,
    "dataType": "LPACK",
    "description": "Auction %Chg2"
  },
  {
    "fieldName": "C_INDEX_COMPONENT_PRICE",
    "fidNumber": 10161,
    "dataType": "LPACK",
    "description": "Pricing for Index"
  },
  {
    "fieldName": "C_PREF_SYMBOL",
    "fidNumber": 10162,
    "dataType": "STRING",
    "description": "Preferred Symbol"
  },
  {
    "fieldName": "C_TARGET_PCT_ADV_5",
    "fidNumber": 10163,
    "dataType": "DOUBLE",
    "description": "Target 5-day ADV Percent"
  },
  {
    "fieldName": "C_TARGET_PCT_ADV_10",
    "fidNumber": 10164,
    "dataType": "DOUBLE",
    "description": "Target 10-day ADV Percent"
  },
  {
    "fieldName": "C_TARGET_PCT_ADV_20",
    "fidNumber": 10165,
    "dataType": "DOUBLE",
    "description": "Target 20-day ADV Percent"
  },
  {
    "fieldName": "C_TARGET_PCT_ADV_50",
    "fidNumber": 10166,
    "dataType": "DOUBLE",
    "description": "Target 50-day ADV Percent"
  },
  {
    "fieldName": "C_TARGET_PCT_ADV_200",
    "fidNumber": 10167,
    "dataType": "DOUBLE",
    "description": "Target 200-day ADV Percent"
  },
  {
    "fieldName": "C_ORDER_PROFIT_REAL",
    "fidNumber": 10168,
    "dataType": "DOUBLE",
    "description": "Order Realized P&L"
  },
  {
    "fieldName": "C_ORDER_PROFIT_REAL_CPS",
    "fidNumber": 10169,
    "dataType": "DOUBLE",
    "description": "Order Realized P&L CPS"
  },
  {
    "fieldName": "C_ORDER_PROFIT_REAL_BPS",
    "fidNumber": 10170,
    "dataType": "DOUBLE",
    "description": "Order Realized P&L BPS"
  },
  {
    "fieldName": "C_ORDER_PROFIT_UNREAL",
    "fidNumber": 10171,
    "dataType": "DOUBLE",
    "description": "Order Unrealized P&L"
  },
  {
    "fieldName": "C_ORDER_PROFIT_UNREAL_CPS",
    "fidNumber": 10172,
    "dataType": "DOUBLE",
    "description": "Order Unrealized P&L CPS"
  },
  {
    "fieldName": "C_ORDER_PROFIT_UNREAL_BPS",
    "fidNumber": 10173,
    "dataType": "DOUBLE",
    "description": "Order Unrealized P&L BPS"
  },
  {
    "fieldName": "C_ORDER_PROFIT_NET",
    "fidNumber": 10174,
    "dataType": "DOUBLE",
    "description": "Order Net P&L"
  },
  {
    "fieldName": "C_ORDER_PROFIT_NET_CPS",
    "fidNumber": 10175,
    "dataType": "DOUBLE",
    "description": "Order Net P&L CPS"
  },
  {
    "fieldName": "C_ORDER_PROFIT_NET_BPS",
    "fidNumber": 10176,
    "dataType": "DOUBLE",
    "description": "Order Net P&L BPS"
  },
  {
    "fieldName": "C_ORDER_BENCHMARK_VALUE",
    "fidNumber": 10177,
    "dataType": "DOUBLE",
    "description": "Order Benchmark Value"
  },
  {
    "fieldName": "C_UNALLOCATED_SHARES",
    "fidNumber": 10178,
    "dataType": "DOUBLE",
    "description": "Unallocated Shares"
  },
  {
    "fieldName": "C_FX_RATE",
    "fidNumber": 10179,
    "dataType": "DOUBLE",
    "description": "Local Fx Cross Rate"
  },
  {
    "fieldName": "C_NETCHNG_POST3",
    "fidNumber": 10180,
    "dataType": "LPACK",
    "description": "Irg NetChg Present"
  },
  {
    "fieldName": "C_PCTCHNG_POST3",
    "fidNumber": 10181,
    "dataType": "LPACK",
    "description": "Irg % Chg Present"
  },
  {
    "fieldName": "C_MOST_RECENT_PRICE",
    "fidNumber": 10182,
    "dataType": "LPACK",
    "description": "Most Recent Price"
  },
  {
    "fieldName": "C_EXECUTED_VALUE",
    "fidNumber": 10183,
    "dataType": "DOUBLE",
    "description": "Executed value of trade"
  },
  {
    "fieldName": "C_MOST_RECENT_PRICE_CHANGE",
    "fidNumber": 10184,
    "dataType": "LPACK",
    "description": "Most Recent Price Change"
  },
  {
    "fieldName": "C_MOST_RECENT_PRICE_CHANGE_PCT",
    "fidNumber": 10185,
    "dataType": "DOUBLE",
    "description": "Most Recent Price Change %"
  },
  {
    "fieldName": "C_NET_IMBALANCE",
    "fidNumber": 10186,
    "dataType": "LONG",
    "description": "Net Imbalance"
  },
  {
    "fieldName": "C_W_PUT_CALL_RATIO",
    "fidNumber": 10187,
    "dataType": "DOUBLE",
    "description": "Weighted put/call ratio"
  },
  {
    "fieldName": "C_OPT_VOL",
    "fidNumber": 10188,
    "dataType": "LONG",
    "description": "Option Volume (calculated)"
  },
  {
    "fieldName": "C_PCT_TRADED_TO_MKT_VOL",
    "fidNumber": 10189,
    "dataType": "DOUBLE",
    "description": "Exec % of Mkt Vol"
  },
  {
    "fieldName": "C_SPREAD_MARKET",
    "fidNumber": 10190,
    "dataType": "DOUBLE",
    "description": "Market Spread"
  },
  {
    "fieldName": "C_SPREAD_PASSIVE",
    "fidNumber": 10191,
    "dataType": "DOUBLE",
    "description": "Passive Spread"
  },
  {
    "fieldName": "C_SPREAD_LL",
    "fidNumber": 10192,
    "dataType": "DOUBLE",
    "description": "Spread Last-Last"
  },
  {
    "fieldName": "C_SPREAD_BA",
    "fidNumber": 10193,
    "dataType": "DOUBLE",
    "description": "Spread Bid-Ask"
  },
  {
    "fieldName": "C_SPREAD_BB",
    "fidNumber": 10194,
    "dataType": "DOUBLE",
    "description": "Spread Bid-Bid"
  },
  {
    "fieldName": "C_SPREAD_AA",
    "fidNumber": 10195,
    "dataType": "DOUBLE",
    "description": "Spread Ask-Ask"
  },
  {
    "fieldName": "C_SPREAD_AB",
    "fidNumber": 10196,
    "dataType": "DOUBLE",
    "description": "Spread Ask-Bid"
  },
  {
    "fieldName": "C_TRADER_GROUP",
    "fidNumber": 10197,
    "dataType": "STRING",
    "description": "Trader Group"
  },
  {
    "fieldName": "C_IS_ALLOCATED",
    "fidNumber": 10198,
    "dataType": "INT",
    "description": "Is Allocated"
  },
  {
    "fieldName": "C_IS_LINKED",
    "fidNumber": 10199,
    "dataType": "INT",
    "description": "Is Linked"
  },
  {
    "fieldName": "C_EXTERNAL_CUST_DESC",
    "fidNumber": 10200,
    "dataType": "STRING",
    "description": "Ext Cust Desc"
  },
  {
    "fieldName": "C_NETCHNG_1W",
    "fidNumber": 10201,
    "dataType": "LPACK",
    "description": "Wk chg"
  },
  {
    "fieldName": "C_NETCHNG_1M",
    "fidNumber": 10202,
    "dataType": "LPACK",
    "description": "mon chg"
  },
  {
    "fieldName": "C_NETCHNG_1Q",
    "fidNumber": 10203,
    "dataType": "LPACK",
    "description": "Qtr chg"
  },
  {
    "fieldName": "C_NETCHNG_1Y",
    "fidNumber": 10204,
    "dataType": "LPACK",
    "description": "Yr chg"
  },
  {
    "fieldName": "C_NETCHNG_1W_TD",
    "fidNumber": 10205,
    "dataType": "LPACK",
    "description": "TD wk chg"
  },
  {
    "fieldName": "C_NETCHNG_1M_TD",
    "fidNumber": 10206,
    "dataType": "LPACK",
    "description": "TD mon chg"
  },
  {
    "fieldName": "C_NETCHNG_1Q_TD",
    "fidNumber": 10207,
    "dataType": "LPACK",
    "description": "TD Qtr chg"
  },
  {
    "fieldName": "C_NETCHNG_1Y_TD",
    "fidNumber": 10208,
    "dataType": "LPACK",
    "description": "TD Yr Chg"
  },
  {
    "fieldName": "C_PCTCHNG_1W",
    "fidNumber": 10209,
    "dataType": "LPACK",
    "description": "Wk % Chg"
  },
  {
    "fieldName": "C_PCTCHNG_1M",
    "fidNumber": 10210,
    "dataType": "LPACK",
    "description": "Mon % Chg"
  },
  {
    "fieldName": "C_PCTCHNG_1Q",
    "fidNumber": 10211,
    "dataType": "LPACK",
    "description": "Qtr % Chg"
  },
  {
    "fieldName": "C_PCTCHNG_1Y",
    "fidNumber": 10212,
    "dataType": "LPACK",
    "description": "Yr % Chg"
  },
  {
    "fieldName": "C_PCTCHNG_1W_TD",
    "fidNumber": 10213,
    "dataType": "LPACK",
    "description": "TD Wk % Chg"
  },
  {
    "fieldName": "C_PCTCHNG_1M_TD",
    "fidNumber": 10214,
    "dataType": "LPACK",
    "description": "TD Mon % Chg"
  },
  {
    "fieldName": "C_PCTCHNG_1Q_TD",
    "fidNumber": 10215,
    "dataType": "LPACK",
    "description": "TD Qtr % Chg"
  },
  {
    "fieldName": "C_PCTCHNG_1Y_TD",
    "fidNumber": 10216,
    "dataType": "LPACK",
    "description": "TD Yr % Chg"
  },
  {
    "fieldName": "C_CANDLESTICK",
    "fidNumber": 10217,
    "dataType": "LPACK",
    "description": "Daily Candle"
  },
  {
    "fieldName": "C_MKT_CAP_GROUP",
    "fidNumber": 10218,
    "dataType": "STRING",
    "description": "Mkt Cap Group"
  },
  {
    "fieldName": "C_SPREAD_MM",
    "fidNumber": 10219,
    "dataType": "DOUBLE",
    "description": "Spread Mid-Mid"
  },
  {
    "fieldName": "C_SPREAD_CLOSE",
    "fidNumber": 10220,
    "dataType": "DOUBLE",
    "description": "Spread Close"
  },
  {
    "fieldName": "C_SPREAD_PERCENT_CHANGE",
    "fidNumber": 10221,
    "dataType": "DOUBLE",
    "description": "Spread % Change"
  },
  {
    "fieldName": "C_AUTO_ROUTED_ORDER",
    "fidNumber": 10222,
    "dataType": "LONG",
    "description": "Auto Routed Order"
  },
  {
    "fieldName": "C_ADR_CONVERT_ELIGIBLE",
    "fidNumber": 10223,
    "dataType": "LONG",
    "description": "ADR Convert Eligible"
  },
  {
    "fieldName": "C_COMMISSION_DETAILS",
    "fidNumber": 10224,
    "dataType": "STRING",
    "description": "Commission Details"
  },
  {
    "fieldName": "C_BUSTED",
    "fidNumber": 10225,
    "dataType": "STRING",
    "description": "Trade Busted"
  },
  {
    "fieldName": "C_CONVERT_AVAIL",
    "fidNumber": 10226,
    "dataType": "LONG",
    "description": "Convert Avail."
  },
  {
    "fieldName": "C_IS_DISMISSED",
    "fidNumber": 10227,
    "dataType": "INT",
    "description": "Is Dismissed"
  },
  {
    "fieldName": "C_TODAY_VOLUME_TRADED",
    "fidNumber": 10228,
    "dataType": "LONG",
    "description": "Volume Traded Today"
  },
  {
    "fieldName": "C_TODAY_TRADE_AVG_PRC",
    "fidNumber": 10229,
    "dataType": "DOUBLE",
    "description": "Today's Avg Price"
  },
  {
    "fieldName": "C_ADR_AVAILABLE_TO_CONVERT",
    "fidNumber": 10230,
    "dataType": "LONG",
    "description": "Qty. Available to Convert"
  },
  {
    "fieldName": "C_IS_NOTIONAL",
    "fidNumber": 10231,
    "dataType": "INT",
    "description": "Is Notional"
  },
  {
    "fieldName": "C_NOTIONAL_WORKING",
    "fidNumber": 10232,
    "dataType": "DOUBLE",
    "description": "Notional Working Amount"
  },
  {
    "fieldName": "C_NOTIONAL_REMAINING",
    "fidNumber": 10233,
    "dataType": "DOUBLE",
    "description": "Notional Remaining Amount"
  },
  {
    "fieldName": "C_CANCEL_ORDER",
    "fidNumber": 10234,
    "dataType": "LONG",
    "description": "Cancel"
  },
  {
    "fieldName": "C_CHANGE_ORDER",
    "fidNumber": 10235,
    "dataType": "LONG",
    "description": "Change"
  },
  {
    "fieldName": "C_AVG_PRICE",
    "fidNumber": 10236,
    "dataType": "LPACK",
    "description": "Avg Price"
  },
  {
    "fieldName": "C_NOTIONAL_AMOUNT",
    "fidNumber": 10237,
    "dataType": "DOUBLE",
    "description": "Notional Amount"
  },
  {
    "fieldName": "C_NOTIONAL_TRADED",
    "fidNumber": 10238,
    "dataType": "DOUBLE",
    "description": "Notional Traded"
  },
  {
    "fieldName": "C_IS_MARKETABLE",
    "fidNumber": 10239,
    "dataType": "INT",
    "description": "Marketable"
  },
  {
    "fieldName": "C_NET_AVAIL_SHORTABLE_VOLUME",
    "fidNumber": 10240,
    "dataType": "LONG",
    "description": "Net Available Shortable Volume"
  },
  {
    "fieldName": "C_IS_PARENT_AUTO_CREATED",
    "fidNumber": 10241,
    "dataType": "INT",
    "description": "Order Sync"
  },
  {
    "fieldName": "C_AWAY_PERCENT",
    "fidNumber": 10242,
    "dataType": "DOUBLE",
    "description": "Percent Away"
  },
  {
    "fieldName": "C_AWAY_BPS",
    "fidNumber": 10243,
    "dataType": "LONG",
    "description": "BPS Away"
  },
  {
    "fieldName": "C_TRADABLE",
    "fidNumber": 10244,
    "dataType": "INT",
    "description": "Tradable"
  },
  {
    "fieldName": "C_AWAY_PERCENT_LAST",
    "fidNumber": 10245,
    "dataType": "DOUBLE",
    "description": "Percent Away from Last"
  },
  {
    "fieldName": "C_EST_VOL_EOD",
    "fidNumber": 10246,
    "dataType": "LONG",
    "description": "Est. EOD Volume"
  },
  {
    "fieldName": "C_EST_VOL_REMAIN",
    "fidNumber": 10247,
    "dataType": "LONG",
    "description": "Est. Remaining Volume"
  },
  {
    "fieldName": "C_PCT_ORD_TO_MKT_REMAIN",
    "fidNumber": 10248,
    "dataType": "DOUBLE",
    "description": "Pct Order Residual To Remaining Mkt Vol"
  },
  {
    "fieldName": "C_PCT_THRU_TRADING_DAY",
    "fidNumber": 10249,
    "dataType": "DOUBLE",
    "description": "Pct Thru Core Trading Session"
  },
  {
    "fieldName": "C_AWAY_PERCENT_RELATIVE",
    "fidNumber": 10250,
    "dataType": "DOUBLE",
    "description": "Relative Percent Away"
  },
  {
    "fieldName": "C_ORDER_PROFIT_THEO",
    "fidNumber": 10251,
    "dataType": "DOUBLE",
    "description": "Order Theoretical P&L"
  },
  {
    "fieldName": "C_ORDER_PROFIT_THEO_CPS",
    "fidNumber": 10252,
    "dataType": "DOUBLE",
    "description": "Order Theoretical P&L CPS"
  },
  {
    "fieldName": "C_ORDER_PROFIT_THEO_BPS",
    "fidNumber": 10253,
    "dataType": "DOUBLE",
    "description": "Order Theoretical P&L BPS"
  },
  {
    "fieldName": "C_PAUSE_RESUME_ORDER",
    "fidNumber": 10254,
    "dataType": "LONG",
    "description": "Pause Resume Order"
  },
  {
    "fieldName": "NYLQ_QUOTE_STATUS",
    "fidNumber": 11000,
    "dataType": "STRING",
    "description": "NYLQ Quote Status"
  },
  {
    "fieldName": "NYLQ_UPDATE_TYPE",
    "fidNumber": 11001,
    "dataType": "LONG",
    "description": "NYLQ Update Type"
  },
  {
    "fieldName": "NYLQ_BID",
    "fidNumber": 11005,
    "dataType": "LPACK",
    "description": "NYLQ Bid"
  },
  {
    "fieldName": "NYLQ_BID_SIZE",
    "fidNumber": 11006,
    "dataType": "LONG",
    "description": "NYLQ Bid Size"
  },
  {
    "fieldName": "NYLQ_BID_TIME",
    "fidNumber": 11007,
    "dataType": "TIME",
    "description": "NYLQ Bid Time"
  },
  {
    "fieldName": "NYLQ_ASK",
    "fidNumber": 11010,
    "dataType": "LPACK",
    "description": "NYLQ Ask"
  },
  {
    "fieldName": "NYLQ_ASK_SIZE",
    "fidNumber": 11011,
    "dataType": "LONG",
    "description": "NYLQ Ask Size"
  },
  {
    "fieldName": "NYLQ_ASK_TIME",
    "fidNumber": 11012,
    "dataType": "TIME",
    "description": "NYLQ Ask Time"
  },
  {
    "fieldName": "OPTION_MONTHS",
    "fidNumber": 11013,
    "dataType": "INT",
    "description": "num months"
  },
  {
    "fieldName": "OPTION_STRIKES",
    "fidNumber": 11014,
    "dataType": "INT",
    "description": "num strikes"
  },
  {
    "fieldName": "OPTION_SUPPRESS_TRADING",
    "fidNumber": 11015,
    "dataType": "INT",
    "description": "suppress trading"
  },
  {
    "fieldName": "OPTION_DISPLAY_WARRANTS",
    "fidNumber": 11016,
    "dataType": "INT",
    "description": "display warrants"
  },
  {
    "fieldName": "OPTION_EXCHANGES",
    "fidNumber": 11017,
    "dataType": "STRING",
    "description": "option exchanges"
  },
  {
    "fieldName": "OPTION_WEEKLY",
    "fidNumber": 11018,
    "dataType": "INT",
    "description": "display weekly"
  },
  {
    "fieldName": "NEWS_DISP_DATE",
    "fidNumber": 13019,
    "dataType": "DATE",
    "description": "\"Display Date\" sent by datafeed"
  },
  {
    "fieldName": "NEWS_DISP_TIME",
    "fidNumber": 13020,
    "dataType": "TIME",
    "description": "\"Display Time\" sent by datafeed"
  },
  {
    "fieldName": "NEWS_RCV_DATE",
    "fidNumber": 13021,
    "dataType": "DATE",
    "description": "receipt date"
  },
  {
    "fieldName": "NEWS_RCV_TIME",
    "fidNumber": 13022,
    "dataType": "TIME",
    "description": "receipt time"
  },
  {
    "fieldName": "NEWS_TEMPORARY",
    "fidNumber": 13023,
    "dataType": "INT",
    "description": "Temporary Story Indicator"
  },
  {
    "fieldName": "NEWS_RECNUM",
    "fidNumber": 13024,
    "dataType": "LONG",
    "description": "News Record Number"
  },
  {
    "fieldName": "DJNEWS_ACCESSION_NUMBER",
    "fidNumber": 13025,
    "dataType": "STRING",
    "description": "Accession Number"
  },
  {
    "fieldName": "NEWS_ORIG_SOURCE",
    "fidNumber": 13026,
    "dataType": "STRING",
    "description": "Original Source"
  },
  {
    "fieldName": "NEWS_SOURCE_2",
    "fidNumber": 13027,
    "dataType": "STRING",
    "description": "Alternate News Source"
  },
  {
    "fieldName": "STAT_NAME",
    "fidNumber": 13050,
    "dataType": "STRING",
    "description": "Stat Name"
  },
  {
    "fieldName": "STAT_DESC",
    "fidNumber": 13051,
    "dataType": "STRING",
    "description": "Stat Desc"
  },
  {
    "fieldName": "STAT_VALUE",
    "fidNumber": 13052,
    "dataType": "STRING",
    "description": "Stat Value"
  },
  {
    "fieldName": "BATCH_ID",
    "fidNumber": 13079,
    "dataType": "STRING",
    "description": "TAL4 Batch ID"
  },
  {
    "fieldName": "BATCH_COUNT",
    "fidNumber": 13080,
    "dataType": "LONG",
    "description": "TAL4 Batch Rec Count"
  },
  {
    "fieldName": "P_USERNAME",
    "fidNumber": 13100,
    "dataType": "STRING",
    "description": "User Name"
  },
  {
    "fieldName": "P_APPNAME",
    "fidNumber": 13101,
    "dataType": "STRING",
    "description": "App Name"
  },
  {
    "fieldName": "P_PROPERTY",
    "fidNumber": 13102,
    "dataType": "STRING",
    "description": "Property"
  },
  {
    "fieldName": "P_VALUE",
    "fidNumber": 13103,
    "dataType": "STRING",
    "description": "Value"
  },
  {
    "fieldName": "P_SUBTABLE",
    "fidNumber": 13104,
    "dataType": "STRING",
    "description": "Subtable."
  },
  {
    "fieldName": "P_SYMBOL",
    "fidNumber": 13105,
    "dataType": "STRING",
    "description": "Symbol"
  },
  {
    "fieldName": "P_DESCRIPTION",
    "fidNumber": 13106,
    "dataType": "STRING",
    "description": "Description"
  },
  {
    "fieldName": "P_MACHINENAME",
    "fidNumber": 13107,
    "dataType": "STRING",
    "description": "Machine Name"
  },
  {
    "fieldName": "P_DOMAINNAME",
    "fidNumber": 13108,
    "dataType": "STRING",
    "description": "Domain Name"
  },
  {
    "fieldName": "P_ISLOCAL",
    "fidNumber": 13109,
    "dataType": "INT",
    "description": "TALIPC flag"
  },
  {
    "fieldName": "P_SERVICEADDR",
    "fidNumber": 13110,
    "dataType": "STRING",
    "description": "ServiceAddress"
  },
  {
    "fieldName": "P_USERPASSWD",
    "fidNumber": 13111,
    "dataType": "STRING",
    "description": "Password given during permission"
  },
  {
    "fieldName": "COMPRESSION_TYPES_SEND",
    "fidNumber": 13112,
    "dataType": "INT_VECTOR",
    "description": "Compression types sendable"
  },
  {
    "fieldName": "COMPRESSION_TYPES_RECV",
    "fidNumber": 13113,
    "dataType": "INT_VECTOR",
    "description": "Compression types we can receive"
  },
  {
    "fieldName": "P_TALUSER",
    "fidNumber": 13114,
    "dataType": "STRING",
    "description": "TAL user name"
  },
  {
    "fieldName": "P_TALDOMAIN",
    "fidNumber": 13115,
    "dataType": "STRING",
    "description": "TAL domain name"
  },
  {
    "fieldName": "P_USERID_RANDNO",
    "fidNumber": 13116,
    "dataType": "STRING",
    "description": "Internal only"
  },
  {
    "fieldName": "P_COOKIE",
    "fidNumber": 13117,
    "dataType": "INT",
    "description": "Internal use"
  },
  {
    "fieldName": "CRYPT_TYPES_SEND",
    "fidNumber": 13118,
    "dataType": "INT_VECTOR",
    "description": "internal"
  },
  {
    "fieldName": "CRYPT_TYPES_RECV",
    "fidNumber": 13119,
    "dataType": "INT_VECTOR",
    "description": "internal"
  },
  {
    "fieldName": "CRYPT_CERT",
    "fidNumber": 13120,
    "dataType": "STRING_VECTOR",
    "description": "Internal"
  },
  {
    "fieldName": "P_BUILD_VERSION",
    "fidNumber": 13121,
    "dataType": "STRING",
    "description": "Build Version"
  },
  {
    "fieldName": "P_LOGON_TIME",
    "fidNumber": 13122,
    "dataType": "STRING",
    "description": "Logon Time"
  },
  {
    "fieldName": "P_APPNAMES",
    "fidNumber": 13123,
    "dataType": "STRING_VECTOR",
    "description": "App Names"
  },
  {
    "fieldName": "P_APPTIMES",
    "fidNumber": 13124,
    "dataType": "STRING_VECTOR",
    "description": "App Times"
  },
  {
    "fieldName": "P_USER_MSG",
    "fidNumber": 13125,
    "dataType": "STRING",
    "description": "Message from Perms"
  },
  {
    "fieldName": "P_MSG_DISP_TIME",
    "fidNumber": 13126,
    "dataType": "INT",
    "description": "Message Display Time"
  },
  {
    "fieldName": "P_PERMITS",
    "fidNumber": 13127,
    "dataType": "STRING_VECTOR",
    "description": "Permits for Property"
  },
  {
    "fieldName": "P_SEND_DNS_NAME",
    "fidNumber": 13128,
    "dataType": "INT",
    "description": "Send DNS Names"
  },
  {
    "fieldName": "P_SALT",
    "fidNumber": 13129,
    "dataType": "STRING_VECTOR",
    "description": "permissions salt"
  },
  {
    "fieldName": "P_CHALLENGE",
    "fidNumber": 13130,
    "dataType": "STRING_VECTOR",
    "description": "permissions challenge"
  },
  {
    "fieldName": "P_CHANGE_TYPE",
    "fidNumber": 13131,
    "dataType": "SHORT",
    "description": "pw change type"
  },
  {
    "fieldName": "P_CHANGE_REASON",
    "fidNumber": 13132,
    "dataType": "STRING",
    "description": "pw change reason"
  },
  {
    "fieldName": "P_FEATURES",
    "fidNumber": 13133,
    "dataType": "LONG",
    "description": "perms server features"
  },
  {
    "fieldName": "P_PASSCODE",
    "fidNumber": 13134,
    "dataType": "STRING",
    "description": "SecurID Passcode"
  },
  {
    "fieldName": "P_PIN",
    "fidNumber": 13135,
    "dataType": "STRING",
    "description": "PIN"
  },
  {
    "fieldName": "P_NEW_PIN_STATUS",
    "fidNumber": 13136,
    "dataType": "SHORT",
    "description": "New PIN Status"
  },
  {
    "fieldName": "P_NEW_PIN_TYPE",
    "fidNumber": 13137,
    "dataType": "SHORT",
    "description": "New PIN Type"
  },
  {
    "fieldName": "P_PIN_MINLEN",
    "fidNumber": 13138,
    "dataType": "SHORT",
    "description": "Minimum PIN Length"
  },
  {
    "fieldName": "P_PIN_MAXLEN",
    "fidNumber": 13139,
    "dataType": "SHORT",
    "description": "Maximum PIN Length"
  },
  {
    "fieldName": "P_PIN_ALPHA",
    "fidNumber": 13140,
    "dataType": "SHORT",
    "description": "Alphanumeric PINs?"
  },
  {
    "fieldName": "P_TTNODES",
    "fidNumber": 13141,
    "dataType": "STRING_VECTOR",
    "description": "Talk-To Nodes"
  },
  {
    "fieldName": "P_PRIMARY",
    "fidNumber": 13142,
    "dataType": "STRING",
    "description": "Primary Node"
  },
  {
    "fieldName": "P_TT_MODE",
    "fidNumber": 13143,
    "dataType": "SHORT",
    "description": "Talk-To Mode"
  },
  {
    "fieldName": "P_AUTH_TYPE",
    "fidNumber": 13144,
    "dataType": "INT",
    "description": "Auth type"
  },
  {
    "fieldName": "P_PKCS10_REQUEST",
    "fidNumber": 13145,
    "dataType": "STRING_VECTOR",
    "description": "PKCS#10 Request"
  },
  {
    "fieldName": "P_PKCS10_HASH",
    "fidNumber": 13146,
    "dataType": "STRING_VECTOR",
    "description": "Hash of PKCS#10 Request"
  },
  {
    "fieldName": "P_USER_ID",
    "fidNumber": 13147,
    "dataType": "LONG",
    "description": "Immutable user-id"
  },
  {
    "fieldName": "P_PKCS7_CERT",
    "fidNumber": 13148,
    "dataType": "STRING_VECTOR",
    "description": "Certificate in PKCS#7 format"
  },
  {
    "fieldName": "P_CERTREQTYPE",
    "fidNumber": 13149,
    "dataType": "LONG",
    "description": "Certificate type to request"
  },
  {
    "fieldName": "P_UID",
    "fidNumber": 13150,
    "dataType": "STRING",
    "description": "User's UID"
  },
  {
    "fieldName": "ELF_ROUTE",
    "fidNumber": 13151,
    "dataType": "STRING",
    "description": "ELF Route"
  },
  {
    "fieldName": "ELF_RANGE_LOW",
    "fidNumber": 13152,
    "dataType": "STRING",
    "description": "ELF Range LOW"
  },
  {
    "fieldName": "ELF_RANGE_HIGH",
    "fidNumber": 13153,
    "dataType": "STRING",
    "description": "ELF Range HIGH"
  },
  {
    "fieldName": "ELF_INCLUDE_SYMS",
    "fidNumber": 13154,
    "dataType": "VECTOR_STRING",
    "description": "ELF Symbol List"
  },
  {
    "fieldName": "ELF_EXCLUDE_SYMS",
    "fidNumber": 13155,
    "dataType": "VECTOR_STRING",
    "description": "ELF Symbols Excluded"
  },
  {
    "fieldName": "ELF_MOD_ACTION",
    "fidNumber": 13156,
    "dataType": "SHORT",
    "description": "ELFMod Action"
  },
  {
    "fieldName": "ECN_ELF_MACHINE",
    "fidNumber": 13157,
    "dataType": "STRING",
    "description": "ELF machine"
  },
  {
    "fieldName": "ECN_SPLIT_MACHINE",
    "fidNumber": 13158,
    "dataType": "STRING",
    "description": "Split machine"
  },
  {
    "fieldName": "ECN_CLIENT",
    "fidNumber": 13159,
    "dataType": "STRING",
    "description": "ECN Client (user id)"
  },
  {
    "fieldName": "ECN_CLIENT_ELF_STATE",
    "fidNumber": 13160,
    "dataType": "SHORT",
    "description": "Client connection state"
  },
  {
    "fieldName": "USER_TAG1",
    "fidNumber": 13161,
    "dataType": "STRING",
    "description": "UserTag1 field in Task"
  },
  {
    "fieldName": "USER_TAG2",
    "fidNumber": 13162,
    "dataType": "STRING",
    "description": "UserTag2 field in Task"
  },
  {
    "fieldName": "OATS_ID",
    "fidNumber": 13163,
    "dataType": "STRING",
    "description": "OATS ID"
  },
  {
    "fieldName": "ELFX_ORDER_FLAGS",
    "fidNumber": 13164,
    "dataType": "LONG",
    "description": "ElfX Order Properties"
  },
  {
    "fieldName": "PREF_XML",
    "fidNumber": 13165,
    "dataType": "STRING",
    "description": "Pending Preferences"
  },
  {
    "fieldName": "VOLUME_LOCKED",
    "fidNumber": 13166,
    "dataType": "LONG",
    "description": "Locked Volume"
  },
  {
    "fieldName": "PERF_OBJECT_NAME",
    "fidNumber": 13501,
    "dataType": "STRING",
    "description": "Performance Object Name"
  },
  {
    "fieldName": "PERF_COUNTER_NAME",
    "fidNumber": 13502,
    "dataType": "STRING",
    "description": "Performance Counter Name"
  },
  {
    "fieldName": "PERF_INSTANCE_NAME",
    "fidNumber": 13503,
    "dataType": "STRING",
    "description": "Performance Instance Name"
  },
  {
    "fieldName": "PERF_VALUE",
    "fidNumber": 13504,
    "dataType": "DOUBLE",
    "description": "Performance Value"
  },
  {
    "fieldName": "MSGAPP_SEVERITY",
    "fidNumber": 13505,
    "dataType": "LONG",
    "description": "Message App Severity"
  },
  {
    "fieldName": "MSGAPP_TIME",
    "fidNumber": 13506,
    "dataType": "TIME",
    "description": "Message App Time"
  },
  {
    "fieldName": "MSGAPP_DATE",
    "fidNumber": 13507,
    "dataType": "DATE",
    "description": "Message App Date"
  },
  {
    "fieldName": "MSGAPP_TEXT",
    "fidNumber": 13508,
    "dataType": "STRING",
    "description": "Message App Message"
  },
  {
    "fieldName": "PROCESS_IMAGE_NAME",
    "fidNumber": 13509,
    "dataType": "STRING",
    "description": "Process Image Name"
  },
  {
    "fieldName": "PROCESS_PID",
    "fidNumber": 13510,
    "dataType": "LONG",
    "description": "Process PID"
  },
  {
    "fieldName": "PROCESS_USERNAME",
    "fidNumber": 13511,
    "dataType": "STRING",
    "description": "Process Username"
  },
  {
    "fieldName": "PROCESS_CPU_TIME",
    "fidNumber": 13512,
    "dataType": "LONG",
    "description": "Process CPU Time"
  },
  {
    "fieldName": "PROCESS_MEMORY",
    "fidNumber": 13513,
    "dataType": "LONG",
    "description": "Process Memory"
  },
  {
    "fieldName": "PROCESS_FLAGS",
    "fidNumber": 13514,
    "dataType": "LONG",
    "description": "Process Flags"
  },
  {
    "fieldName": "PERF_MACHINE",
    "fidNumber": 13515,
    "dataType": "STRING",
    "description": "Machine to monitor"
  },
  {
    "fieldName": "RESV14000",
    "fidNumber": 14000,
    "dataType": "INT",
    "description": ""
  },
  {
    "fieldName": "CA_MKT",
    "fidNumber": 14116,
    "dataType": "STRING",
    "description": "sub-exch disp code"
  },
  {
    "fieldName": "CA_PREV_SYMBOL",
    "fidNumber": 14200,
    "dataType": "STRING",
    "description": "Prev Symbol"
  },
  {
    "fieldName": "CA_PREV_CUSIP",
    "fidNumber": 14201,
    "dataType": "STRING",
    "description": "Prev CUSIP"
  },
  {
    "fieldName": "CA_PREV_COMPANY_NAME",
    "fidNumber": 14202,
    "dataType": "STRING",
    "description": "Prev Co. Name"
  },
  {
    "fieldName": "CA_IPO_SYMBOL",
    "fidNumber": 14203,
    "dataType": "STRING",
    "description": "IPO Symbol"
  },
  {
    "fieldName": "CA_DELISTED_SYMBOL",
    "fidNumber": 14204,
    "dataType": "STRING",
    "description": "Delisted Symbol"
  },
  {
    "fieldName": "CA_DIV_AMOUNT",
    "fidNumber": 14205,
    "dataType": "DOUBLE",
    "description": "Div Amount"
  },
  {
    "fieldName": "CA_SPLIT_RATIO",
    "fidNumber": 14206,
    "dataType": "STRING",
    "description": "Split Amount"
  },
  {
    "fieldName": "CA_SPLIT_FACTOR",
    "fidNumber": 14207,
    "dataType": "DOUBLE",
    "description": "Split Factor"
  },
  {
    "fieldName": "CA_ADJ_FACTOR",
    "fidNumber": 14208,
    "dataType": "DOUBLE",
    "description": "Adj Factor"
  },
  {
    "fieldName": "CA_DIV_PERCENT",
    "fidNumber": 14209,
    "dataType": "STRING",
    "description": "Div %"
  },
  {
    "fieldName": "CA_EFF_DATE",
    "fidNumber": 14210,
    "dataType": "DATE",
    "description": "Effective Date"
  },
  {
    "fieldName": "CA_EXCH_NAME",
    "fidNumber": 14211,
    "dataType": "STRING",
    "description": "Exch Name"
  },
  {
    "fieldName": "CA_PREV_EXCH_NAME",
    "fidNumber": 14212,
    "dataType": "STRING",
    "description": "Prev Exch Name"
  },
  {
    "fieldName": "CA_RESUMED_SYMBOL",
    "fidNumber": 14213,
    "dataType": "STRING",
    "description": "Resumed Symbol"
  },
  {
    "fieldName": "CA_SUSPENDED_SYMBOL",
    "fidNumber": 14214,
    "dataType": "STRING",
    "description": "Susp. Symbol"
  },
  {
    "fieldName": "CA_PREV_MKT",
    "fidNumber": 14216,
    "dataType": "STRING",
    "description": "Prev Market"
  },
  {
    "fieldName": "CA_TYPE",
    "fidNumber": 14217,
    "dataType": "INT",
    "description": "Corp. action type"
  },
  {
    "fieldName": "CA_VALIDATED",
    "fidNumber": 14218,
    "dataType": "INT",
    "description": "Action Validated"
  },
  {
    "fieldName": "CA_EVENT_ID",
    "fidNumber": 14219,
    "dataType": "STRING",
    "description": "corpact event id"
  },
  {
    "fieldName": "CA_HISTORY",
    "fidNumber": 14220,
    "dataType": "INT",
    "description": "CA History"
  },
  {
    "fieldName": "RESV15000",
    "fidNumber": 15000,
    "dataType": "INT",
    "description": ""
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_RESV15000",
    "fidNumber": 15001,
    "dataType": "INT",
    "description": "T_RESV15000"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_RESV15000",
    "fidNumber": 15002,
    "dataType": "INT",
    "description": "T_RESV15000"
  },
  {
    "fieldName": "ALGO_START_TIME",
    "fidNumber": 15500,
    "dataType": "STRING",
    "description": "Algo Time 1"
  },
  {
    "fieldName": "ALGO_END_TIME",
    "fidNumber": 15501,
    "dataType": "STRING",
    "description": "Algo Time 2"
  },
  {
    "fieldName": "ALGO_MIN_VOL",
    "fidNumber": 15502,
    "dataType": "LONG",
    "description": "Algo Vol 1"
  },
  {
    "fieldName": "ALGO_MAX_VOL",
    "fidNumber": 15503,
    "dataType": "LONG",
    "description": "Algo Vol 2"
  },
  {
    "fieldName": "FIX_BOOK_TYPE",
    "fidNumber": 15504,
    "dataType": "STRING",
    "description": "FIX Booking Type"
  },
  {
    "fieldName": "FIX_ORDER",
    "fidNumber": 15505,
    "dataType": "STRING",
    "description": "FIX Order"
  },
  {
    "fieldName": "FIX_CLORD_ID",
    "fidNumber": 15506,
    "dataType": "STRING",
    "description": "FIX ClOrdID"
  },
  {
    "fieldName": "FIX_MSG",
    "fidNumber": 15507,
    "dataType": "STRING",
    "description": "FIX Msg"
  },
  {
    "fieldName": "FIX_MSG_15508",
    "fidNumber": 15508,
    "dataType": "STRING",
    "description": "FIX Msg 15508"
  },
  {
    "fieldName": "FIX_MSG_15509",
    "fidNumber": 15509,
    "dataType": "STRING",
    "description": "FIX Msg 15509"
  },
  {
    "fieldName": "FIX_MSG_15510",
    "fidNumber": 15510,
    "dataType": "STRING",
    "description": "FIX Msg 15510"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_ALGO_START_TIME",
    "fidNumber": 15520,
    "dataType": "STRING",
    "description": "Algo Time 1"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_ALGO_START_TIME",
    "fidNumber": 15521,
    "dataType": "STRING",
    "description": "Algo Time 2"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_ALGO_END_TIME",
    "fidNumber": 15522,
    "dataType": "STRING",
    "description": "Algo Time 2"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_ALGO_END_TIME",
    "fidNumber": 15523,
    "dataType": "STRING",
    "description": "Algo Time 2"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_ALGO_MIN_VOL",
    "fidNumber": 15524,
    "dataType": "LONG",
    "description": "Algo Vol 1"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_ALGO_MIN_VOL",
    "fidNumber": 15525,
    "dataType": "LONG",
    "description": "Algo Vol 1"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_ALGO_MAX_VOL",
    "fidNumber": 15526,
    "dataType": "LONG",
    "description": "Algo Vol 2"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_ALGO_MAX_VOL",
    "fidNumber": 15527,
    "dataType": "LONG",
    "description": "Algo Vol 2"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_FIX_BOOK_TYPE",
    "fidNumber": 15528,
    "dataType": "STRING",
    "description": "FIX Booking Type"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_FIX_BOOK_TYPE",
    "fidNumber": 15529,
    "dataType": "STRING",
    "description": "FIX Booking Type"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_FIX_ORDER",
    "fidNumber": 15530,
    "dataType": "STRING",
    "description": "FIX Order"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_FIX_ORDER",
    "fidNumber": 15531,
    "dataType": "STRING",
    "description": "FIX Order"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_FIX_CLORD_ID",
    "fidNumber": 15532,
    "dataType": "STRING",
    "description": "FIX ClOrdID"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_FIX_CLORD_ID",
    "fidNumber": 15533,
    "dataType": "STRING",
    "description": "FIX ClOrdID"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_FIX_MSG",
    "fidNumber": 15534,
    "dataType": "STRING",
    "description": "FIX Msg"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_FIX_MSG",
    "fidNumber": 15535,
    "dataType": "STRING",
    "description": "FIX Msg"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_FIX_MSG_15508",
    "fidNumber": 15536,
    "dataType": "STRING",
    "description": "FIX Msg_15508"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_FIX_MSG_15508",
    "fidNumber": 15537,
    "dataType": "STRING",
    "description": "FIX Msg_15508"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_FIX_MSG_15509",
    "fidNumber": 15538,
    "dataType": "STRING",
    "description": "FIX Msg_15509"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_FIX_MSG_15509",
    "fidNumber": 15539,
    "dataType": "STRING",
    "description": "FIX Msg_15509"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_1_T_FIX_MSG_15510",
    "fidNumber": 15540,
    "dataType": "STRING",
    "description": "FIX Msg_15510"
  },
  {
    "fieldName": "FIX_CAL_SPREAD_LEG_2_T_FIX_MSG_15510",
    "fidNumber": 15541,
    "dataType": "STRING",
    "description": "FIX Msg_15510"
  },
  {
    "fieldName": "GENERIC_FOOTNOTE",
    "fidNumber": 16998,
    "dataType": "STRING",
    "description": "Generic Footnote"
  },
  {
    "fieldName": "GENERIC_COMMENT",
    "fidNumber": 16999,
    "dataType": "STRING",
    "description": "Generic Comment"
  },
  {
    "fieldName": "MACHINE_NAME",
    "fidNumber": 17000,
    "dataType": "STRING",
    "description": "Machine Name"
  },
  {
    "fieldName": "SERVICE_NAME",
    "fidNumber": 17001,
    "dataType": "STRING",
    "description": "Service Name"
  },
  {
    "fieldName": "TOPIC_NAME",
    "fidNumber": 17002,
    "dataType": "STRING",
    "description": "Topic Name"
  },
  {
    "fieldName": "TN_DESIRABILITY",
    "fidNumber": 17003,
    "dataType": "INT",
    "description": "TN DESIRABILITY"
  },
  {
    "fieldName": "TN_FLAGS",
    "fidNumber": 17004,
    "dataType": "INT",
    "description": "TN FLAGS"
  },
  {
    "fieldName": "TALIPC_CONVS",
    "fidNumber": 17005,
    "dataType": "LONG",
    "description": "Talipc Convs"
  },
  {
    "fieldName": "TALIPC_LAST_OUT",
    "fidNumber": 17006,
    "dataType": "LONG",
    "description": "Time since send"
  },
  {
    "fieldName": "TALIPC_LAST_IN",
    "fidNumber": 17007,
    "dataType": "LONG",
    "description": "Time since recv"
  },
  {
    "fieldName": "TALIPC_IDLE_TIMEOUT",
    "fidNumber": 17008,
    "dataType": "LONG",
    "description": "Idle timeout"
  },
  {
    "fieldName": "TALIPC_TX_MSG_BUF",
    "fidNumber": 17009,
    "dataType": "LONG",
    "description": "Tx msgs buffered"
  },
  {
    "fieldName": "TALIPC_TX_DISCARD",
    "fidNumber": 17010,
    "dataType": "LONG",
    "description": "Tx discarding flag"
  },
  {
    "fieldName": "TALIPC_TX_BYTES_BUF",
    "fidNumber": 17011,
    "dataType": "LONG",
    "description": "Tx bytes buffered"
  },
  {
    "fieldName": "TALIPC_TX_COMP_TYPE",
    "fidNumber": 17012,
    "dataType": "LONG",
    "description": "Tx compress type"
  },
  {
    "fieldName": "TALIPC_TX_COMP_RATIO",
    "fidNumber": 17013,
    "dataType": "LONG",
    "description": "Tx compress ratio"
  },
  {
    "fieldName": "TALIPC_RX_MSG_BUF",
    "fidNumber": 17014,
    "dataType": "LONG",
    "description": "Rx msgs buffered"
  },
  {
    "fieldName": "TALIPC_RX_STALLED",
    "fidNumber": 17015,
    "dataType": "LONG",
    "description": "Rx stalled"
  },
  {
    "fieldName": "TALIPC_RX_BYTES_BUF",
    "fidNumber": 17016,
    "dataType": "LONG",
    "description": "Rx bytes buffered"
  },
  {
    "fieldName": "TALIPC_RX_COMP_TYPE",
    "fidNumber": 17017,
    "dataType": "LONG",
    "description": "Rx compress type"
  },
  {
    "fieldName": "TALIPC_RX_COMP_RATIO",
    "fidNumber": 17018,
    "dataType": "LONG",
    "description": "Rx compress ratio"
  },
  {
    "fieldName": "TALIPC_PARTNER_CUR_BUF",
    "fidNumber": 17019,
    "dataType": "LONG",
    "description": "Current Buffer Usage"
  },
  {
    "fieldName": "TALIPC_PARTNER_MAX_BUF",
    "fidNumber": 17020,
    "dataType": "LONG",
    "description": "Max Buffer Size"
  },
  {
    "fieldName": "TALIPC_RX_BPS",
    "fidNumber": 17021,
    "dataType": "LONG",
    "description": "Rx Bps"
  },
  {
    "fieldName": "TALIPC_ACTIVE_SERVICES",
    "fidNumber": 17022,
    "dataType": "STRING",
    "description": "Active Services"
  },
  {
    "fieldName": "TALIPC_MSG_LATENCY",
    "fidNumber": 17023,
    "dataType": "LONG",
    "description": "Rx Msg Latency"
  },
  {
    "fieldName": "TALIPC_LATENCY_SPAN",
    "fidNumber": 17024,
    "dataType": "LONG",
    "description": "Rx Latency Span"
  },
  {
    "fieldName": "TALCA_INBOUND_UPDATES",
    "fidNumber": 17100,
    "dataType": "LONG",
    "description": "CA Inbound Updates"
  },
  {
    "fieldName": "TALCA_OUTBOUND_UPDATES",
    "fidNumber": 17101,
    "dataType": "LONG",
    "description": "CA Outbound Updates"
  },
  {
    "fieldName": "TALCA_REQUESTS",
    "fidNumber": 17102,
    "dataType": "LONG",
    "description": "CA Requests"
  },
  {
    "fieldName": "TALCA_INBOUND_RESPONSES",
    "fidNumber": 17103,
    "dataType": "LONG",
    "description": "CA Inbound Responses"
  },
  {
    "fieldName": "TALCA_OUTBOUND_RESPONSES",
    "fidNumber": 17104,
    "dataType": "LONG",
    "description": "CA Outbound Responses"
  },
  {
    "fieldName": "TALCA_SUBSCRIBER_COUNT",
    "fidNumber": 17105,
    "dataType": "LONG",
    "description": "CA Subscriber Count"
  },
  {
    "fieldName": "TALCA_DROPPED_MSGS",
    "fidNumber": 17106,
    "dataType": "LONG",
    "description": "CA Dropped Msgs"
  },
  {
    "fieldName": "DPERMS_TOKEN",
    "fidNumber": 17107,
    "dataType": "STRING",
    "description": "DPerms Token"
  },
  {
    "fieldName": "IOI_ID",
    "fidNumber": 17200,
    "dataType": "STRING",
    "description": "IOI ID"
  },
  {
    "fieldName": "IOI_REF_ID",
    "fidNumber": 17201,
    "dataType": "STRING",
    "description": "IOI Ref ID"
  },
  {
    "fieldName": "IOI_ACTION_TYPE",
    "fidNumber": 17202,
    "dataType": "INT",
    "description": "IOI Action Type"
  },
  {
    "fieldName": "IOI_FROM_ID",
    "fidNumber": 17203,
    "dataType": "STRING",
    "description": "IOI From ID"
  },
  {
    "fieldName": "IOI_TO_ID",
    "fidNumber": 17204,
    "dataType": "STRING",
    "description": "IOI To ID"
  },
  {
    "fieldName": "IOI_DATE",
    "fidNumber": 17205,
    "dataType": "DATE",
    "description": "IOI Date"
  },
  {
    "fieldName": "IOI_TIME",
    "fidNumber": 17206,
    "dataType": "TIME",
    "description": "IOI Time"
  },
  {
    "fieldName": "IOI_EXPIR_DATE",
    "fidNumber": 17207,
    "dataType": "DATE",
    "description": "IOI Exp Date"
  },
  {
    "fieldName": "IOI_EXPIR_TIME",
    "fidNumber": 17208,
    "dataType": "TIME",
    "description": "IOI Exp Time"
  },
  {
    "fieldName": "IOI_SIZE_TYPE",
    "fidNumber": 17209,
    "dataType": "INT",
    "description": "IOI Size Type"
  },
  {
    "fieldName": "IOI_NATURAL_FLAG",
    "fidNumber": 17210,
    "dataType": "INT",
    "description": "IOI Natural Flag"
  },
  {
    "fieldName": "IOI_NOTES",
    "fidNumber": 17211,
    "dataType": "STRING",
    "description": "IOI Notes"
  },
  {
    "fieldName": "IOI_URL",
    "fidNumber": 17212,
    "dataType": "STRING",
    "description": "IOI URL"
  },
  {
    "fieldName": "IOI_STATUS",
    "fidNumber": 17213,
    "dataType": "INT",
    "description": "IOI Status"
  },
  {
    "fieldName": "IOI_DESCRIPTION",
    "fidNumber": 17214,
    "dataType": "STRING",
    "description": "IOI Description"
  },
  {
    "fieldName": "FIX_ENGINE_ID",
    "fidNumber": 17215,
    "dataType": "LONG",
    "description": "Engine ID"
  },
  {
    "fieldName": "FIX_EXEC_ID",
    "fidNumber": 17216,
    "dataType": "LONG",
    "description": "FIX_EXEC_ID"
  },
  {
    "fieldName": "RECOVERY_RECORD_TYPE",
    "fidNumber": 17217,
    "dataType": "LONG",
    "description": "ECOVERY_RECORD_TYPE"
  },
  {
    "fieldName": "AFT_EXEC_ID",
    "fidNumber": 17218,
    "dataType": "LONG",
    "description": "AFT_EXEC_ID"
  },
  {
    "fieldName": "LAST_ENGINE_RECOVERY_TIME",
    "fidNumber": 17221,
    "dataType": "INT64",
    "description": "LAST_ENGINE_RECOVERY_TIME"
  },
  {
    "fieldName": "LAST_SESSION_END",
    "fidNumber": 17222,
    "dataType": "INT64",
    "description": "LAST_SESSION_END"
  },
  {
    "fieldName": "NEXT_EXEC_ID",
    "fidNumber": 17223,
    "dataType": "LONG",
    "description": "NEXT_EXEC_ID"
  },
  {
    "fieldName": "EXTERNALLY_DISABLED",
    "fidNumber": 17224,
    "dataType": "LONG",
    "description": "EXTERNALLY_DISABLED"
  },
  {
    "fieldName": "ENABLE_STATUS",
    "fidNumber": 17225,
    "dataType": "LONG",
    "description": "ENABLE_STATUS"
  },
  {
    "fieldName": "FIX_INBOUND_SEQUENCE_NO",
    "fidNumber": 17226,
    "dataType": "LONG",
    "description": "Inbound Sequence Number"
  },
  {
    "fieldName": "FIX_OUTBOUND_SEQUENCE_NO",
    "fidNumber": 17227,
    "dataType": "LONG",
    "description": "Outbound Sequence Number"
  },
  {
    "fieldName": "DC_EVENT_TIME",
    "fidNumber": 17228,
    "dataType": "INT64",
    "description": "Event Time"
  },
  {
    "fieldName": "FIDELITY_ORDER_ID",
    "fidNumber": 17229,
    "dataType": "STRING",
    "description": "FIDELITY_ORDER_ID"
  },
  {
    "fieldName": "RECORD_ID",
    "fidNumber": 17230,
    "dataType": "STRING",
    "description": "RECORD_ID"
  },
  {
    "fieldName": "INBOUND_EXEC_ID",
    "fidNumber": 17231,
    "dataType": "STRING",
    "description": "INBOUND_EXEC_ID"
  },
  {
    "fieldName": "IOI_DEALER",
    "fidNumber": 17232,
    "dataType": "STRING",
    "description": "IOI Dealer"
  },
  {
    "fieldName": "IOI_BID_PRICE",
    "fidNumber": 17233,
    "dataType": "DOUBLE",
    "description": "IOI Bid Price"
  },
  {
    "fieldName": "IOI_ASK_PRICE",
    "fidNumber": 17234,
    "dataType": "DOUBLE",
    "description": "IOI Ask Price"
  },
  {
    "fieldName": "IOI_YIELD_TYPE",
    "fidNumber": 17235,
    "dataType": "STRING",
    "description": "IOI Yield Type"
  },
  {
    "fieldName": "IOI_BID_YIELD",
    "fidNumber": 17236,
    "dataType": "DOUBLE",
    "description": "IOI Bid Yield"
  },
  {
    "fieldName": "IOI_ASK_YIELD",
    "fidNumber": 17237,
    "dataType": "DOUBLE",
    "description": "IOI Ask Yield"
  },
  {
    "fieldName": "IOI_BID_SPREAD",
    "fidNumber": 17238,
    "dataType": "DOUBLE",
    "description": "IOI Bid Spread"
  },
  {
    "fieldName": "IOI_ASK_SPREAD",
    "fidNumber": 17239,
    "dataType": "DOUBLE",
    "description": "IOI Ask Spread"
  },
  {
    "fieldName": "IOI_BENCHMARK_SEC_ID",
    "fidNumber": 17240,
    "dataType": "STRING",
    "description": "IOI Benchmark CUSIP, ISIN or SEDOL"
  },
  {
    "fieldName": "IOI_BENCHMARK_SEC_ID_SRC",
    "fidNumber": 17241,
    "dataType": "INT",
    "description": "Type of identifier provided in IOI Benchmark Security ID"
  },
  {
    "fieldName": "IOI_BENCHMARK",
    "fidNumber": 17242,
    "dataType": "STRING",
    "description": "Name of the benchmark bond which we received in IOI Benchmark Security ID"
  },
  {
    "fieldName": "IOI_TRADER",
    "fidNumber": 17243,
    "dataType": "STRING",
    "description": "Trader who initiated the indication"
  },
  {
    "fieldName": "IOI_TIMESTAMP",
    "fidNumber": 17244,
    "dataType": "STRING",
    "description": "Timestamp when the Indication was created by the sender"
  },
  {
    "fieldName": "Q_ID",
    "fidNumber": 17300,
    "dataType": "STRING",
    "description": "Quote ID"
  },
  {
    "fieldName": "Q_USER_ID",
    "fidNumber": 17301,
    "dataType": "STRING",
    "description": "User ID"
  },
  {
    "fieldName": "Q_REQUESTOR_ID",
    "fidNumber": 17302,
    "dataType": "STRING",
    "description": "Requestor ID"
  },
  {
    "fieldName": "Q_ROUTE_TO",
    "fidNumber": 17303,
    "dataType": "STRING",
    "description": "Route To"
  },
  {
    "fieldName": "Q_COMMENT_TEXT",
    "fidNumber": 17304,
    "dataType": "STRING",
    "description": "Comment"
  },
  {
    "fieldName": "Q_QUOTE_ACTION",
    "fidNumber": 17305,
    "dataType": "LONG",
    "description": "Action"
  },
  {
    "fieldName": "Q_DATE",
    "fidNumber": 17306,
    "dataType": "DATE",
    "description": "Date"
  },
  {
    "fieldName": "Q_TIME",
    "fidNumber": 17307,
    "dataType": "TIME",
    "description": "Time"
  },
  {
    "fieldName": "Q_SIDE",
    "fidNumber": 17308,
    "dataType": "LONG",
    "description": "Side"
  },
  {
    "fieldName": "Q_VALIDITY",
    "fidNumber": 17309,
    "dataType": "LONG",
    "description": "Validity"
  },
  {
    "fieldName": "Q_INDICATIVE",
    "fidNumber": 17310,
    "dataType": "INT",
    "description": "Indicative"
  },
  {
    "fieldName": "Q_VENDOR_REF_ID",
    "fidNumber": 17311,
    "dataType": "STRING",
    "description": "Vendor Quote Ref ID"
  },
  {
    "fieldName": "Q_BUY_SELL_TYPE",
    "fidNumber": 17312,
    "dataType": "LONG",
    "description": "Buy / Sell"
  },
  {
    "fieldName": "Q_RAW_PRICE",
    "fidNumber": 17313,
    "dataType": "LPACK",
    "description": "Raw Price"
  },
  {
    "fieldName": "Q_PRICE",
    "fidNumber": 17314,
    "dataType": "LPACK",
    "description": "Price"
  },
  {
    "fieldName": "Q_CURRENCY1",
    "fidNumber": 17315,
    "dataType": "STRING",
    "description": "Currency 1"
  },
  {
    "fieldName": "Q_CURRENCY2",
    "fidNumber": 17316,
    "dataType": "STRING",
    "description": "Currency 2"
  },
  {
    "fieldName": "Q_AMOUNT",
    "fidNumber": 17317,
    "dataType": "DOUBLE",
    "description": "Amount"
  },
  {
    "fieldName": "Q_QUOTE_BASIS",
    "fidNumber": 17318,
    "dataType": "INT",
    "description": "Inverse"
  },
  {
    "fieldName": "Q_QUOTE_UNIT",
    "fidNumber": 17319,
    "dataType": "LONG",
    "description": "Quote Unit"
  },
  {
    "fieldName": "Q_TYPE",
    "fidNumber": 17320,
    "dataType": "LONG",
    "description": "Quote Type"
  },
  {
    "fieldName": "Q_VALUE_DATE",
    "fidNumber": 17321,
    "dataType": "DATE",
    "description": "Value Date"
  },
  {
    "fieldName": "Q_VALUE_TIME",
    "fidNumber": 17322,
    "dataType": "TIME",
    "description": "Value Time"
  },
  {
    "fieldName": "Q_VALUE_PERIOD",
    "fidNumber": 17323,
    "dataType": "STRING",
    "description": "Value Period"
  },
  {
    "fieldName": "Q_ALLOW_DATE_ROLL",
    "fidNumber": 17324,
    "dataType": "INT",
    "description": "Allow Date Roll"
  },
  {
    "fieldName": "Q_FAR_VALUE_DATE",
    "fidNumber": 17325,
    "dataType": "DATE",
    "description": "Far Value Date"
  },
  {
    "fieldName": "Q_FAR_VALUE_TIME",
    "fidNumber": 17326,
    "dataType": "TIME",
    "description": "Far Value Time"
  },
  {
    "fieldName": "Q_FAR_VALUE_PERIOD",
    "fidNumber": 17327,
    "dataType": "STRING",
    "description": "Far Value Period"
  },
  {
    "fieldName": "Q_VENDOR_SERIAL_NO",
    "fidNumber": 17328,
    "dataType": "INT",
    "description": "Vendor Serial No."
  },
  {
    "fieldName": "Q_WARNING",
    "fidNumber": 17329,
    "dataType": "STRING",
    "description": "Warning"
  },
  {
    "fieldName": "Q_CLIENT_ID",
    "fidNumber": 17330,
    "dataType": "STRING",
    "description": "Client ID"
  },
  {
    "fieldName": "Q_TAG",
    "fidNumber": 17331,
    "dataType": "STRING",
    "description": "Client supplied tag"
  },
  {
    "fieldName": "Q_STATUS",
    "fidNumber": 17332,
    "dataType": "LONG",
    "description": "RFQ Status"
  },
  {
    "fieldName": "Q_RAW_BID",
    "fidNumber": 17333,
    "dataType": "DOUBLE",
    "description": "Raw Bid"
  },
  {
    "fieldName": "Q_RAW_ASK",
    "fidNumber": 17334,
    "dataType": "DOUBLE",
    "description": "Raw Ask"
  },
  {
    "fieldName": "Q_BID",
    "fidNumber": 17335,
    "dataType": "LPACK",
    "description": "Bid"
  },
  {
    "fieldName": "Q_ASK",
    "fidNumber": 17336,
    "dataType": "LPACK",
    "description": "Ask"
  },
  {
    "fieldName": "Q_REQUESTOR_REF",
    "fidNumber": 17337,
    "dataType": "STRING",
    "description": "Requestor Reference"
  },
  {
    "fieldName": "Q_NEAR_PERIOD",
    "fidNumber": 17338,
    "dataType": "STRING",
    "description": "Near Period"
  },
  {
    "fieldName": "Q_COUNTERPARTY_ID",
    "fidNumber": 17339,
    "dataType": "STRING",
    "description": "Counterparty ID"
  },
  {
    "fieldName": "Q_NEAR_DATE",
    "fidNumber": 17440,
    "dataType": "DATE",
    "description": "Near Date"
  },
  {
    "fieldName": "Q_NEAR_TIME",
    "fidNumber": 17441,
    "dataType": "TIME",
    "description": "Near Time"
  },
  {
    "fieldName": "Q_TIME_STAMP_DATE",
    "fidNumber": 17442,
    "dataType": "DATE",
    "description": "Timestamp Date"
  },
  {
    "fieldName": "Q_TIME_STAMP_TIME",
    "fidNumber": 17443,
    "dataType": "TIME",
    "description": "Timestamp Time"
  },
  {
    "fieldName": "Q_SPOT_DATE",
    "fidNumber": 17444,
    "dataType": "DATE",
    "description": "Spot Date"
  },
  {
    "fieldName": "Q_SPOT_TIME",
    "fidNumber": 17445,
    "dataType": "TIME",
    "description": "Spot Time"
  },
  {
    "fieldName": "Q_SPOT_BID",
    "fidNumber": 17446,
    "dataType": "LPACK",
    "description": "Spot Bid"
  },
  {
    "fieldName": "Q_SPOT_ASK",
    "fidNumber": 17447,
    "dataType": "LPACK",
    "description": "Spot Ask"
  },
  {
    "fieldName": "Q_SWAP_POINT_FACTOR",
    "fidNumber": 17448,
    "dataType": "LPACK",
    "description": "Swap Point Factor"
  },
  {
    "fieldName": "Q_COUNTER_AMT_BID",
    "fidNumber": 17449,
    "dataType": "LPACK",
    "description": "Counter Amt. Bid"
  },
  {
    "fieldName": "Q_COUNTER_AMT_ASK",
    "fidNumber": 17450,
    "dataType": "LPACK",
    "description": "Counter Amt. Ask"
  },
  {
    "fieldName": "Q_NEAR_COUNTER_AMT_BID",
    "fidNumber": 17451,
    "dataType": "LPACK",
    "description": "Near Counter Amt. Bid"
  },
  {
    "fieldName": "Q_NEAR_COUNTER_AMT_ASK",
    "fidNumber": 17452,
    "dataType": "LPACK",
    "description": "Near Counter Amt. Ask"
  },
  {
    "fieldName": "Q_NEAR_BID",
    "fidNumber": 17453,
    "dataType": "LPACK",
    "description": "Near Bid"
  },
  {
    "fieldName": "Q_NEAR_ASK",
    "fidNumber": 17454,
    "dataType": "LPACK",
    "description": "Near Ask"
  },
  {
    "fieldName": "Q_RATE",
    "fidNumber": 17455,
    "dataType": "DOUBLE",
    "description": "Rate"
  },
  {
    "fieldName": "Q_COUNTER_AMT",
    "fidNumber": 17456,
    "dataType": "DOUBLE",
    "description": "Counter Amount"
  },
  {
    "fieldName": "Q_NEAR_COUNTER_AMT",
    "fidNumber": 17457,
    "dataType": "DOUBLE",
    "description": "Near Counter Amount"
  },
  {
    "fieldName": "Q_SPOT_RATE",
    "fidNumber": 17458,
    "dataType": "DOUBLE",
    "description": "Spot Rate"
  },
  {
    "fieldName": "Q_NEAR_RATE",
    "fidNumber": 17459,
    "dataType": "DOUBLE",
    "description": "Near Rate"
  },
  {
    "fieldName": "Q_DEALT_CURRENCY",
    "fidNumber": 17460,
    "dataType": "STRING",
    "description": "The dealt currency"
  },
  {
    "fieldName": "Q_SWAP_AMOUNT",
    "fidNumber": 17461,
    "dataType": "DOUBLE",
    "description": "The volume of dealt currency"
  },
  {
    "fieldName": "ALLOCATED_ORDER_IDS",
    "fidNumber": 17462,
    "dataType": "STRING",
    "description": "Orders allocated to bulk order"
  },
  {
    "fieldName": "ALLOCATED_ORDER_TAGS",
    "fidNumber": 17463,
    "dataType": "STRING",
    "description": "OrderTags allocd to bulk order"
  },
  {
    "fieldName": "Q_BID_FORWARD_PTS",
    "fidNumber": 17464,
    "dataType": "DOUBLE",
    "description": "Bid Forward Pts"
  },
  {
    "fieldName": "Q_ASK_FORWARD_PTS",
    "fidNumber": 17465,
    "dataType": "DOUBLE",
    "description": "Ask Forward Pts"
  },
  {
    "fieldName": "Q_BID_SWAP_PTS",
    "fidNumber": 17466,
    "dataType": "DOUBLE",
    "description": "Bid Swap Pts"
  },
  {
    "fieldName": "Q_ASK_SWAP_PTS",
    "fidNumber": 17467,
    "dataType": "DOUBLE",
    "description": "Ask Swap Pts"
  },
  {
    "fieldName": "Q_SWAP_COUNTER_AMT",
    "fidNumber": 17468,
    "dataType": "DOUBLE",
    "description": "Forex Swap/Far Amount 2"
  },
  {
    "fieldName": "Q_NEAR_TENOR",
    "fidNumber": 17469,
    "dataType": "STRING",
    "description": "Forex Forward/Near Tenor"
  },
  {
    "fieldName": "Q_FAR_TENOR",
    "fidNumber": 17470,
    "dataType": "STRING",
    "description": "Forex Swap/Far Tenor"
  },
  {
    "fieldName": "ALLOCATED_ACCOUNTS",
    "fidNumber": 17471,
    "dataType": "STRING",
    "description": "Allocated account"
  },
  {
    "fieldName": "ALLOCATED_QUANTITIES",
    "fidNumber": 17472,
    "dataType": "STRING",
    "description": "Allocated quantity"
  },
  {
    "fieldName": "ALLOCATED_COMMISSIONS",
    "fidNumber": 17473,
    "dataType": "STRING",
    "description": "Allocated commissions"
  },
  {
    "fieldName": "ALLOCATED_COMMISSION_TYPES",
    "fidNumber": 17474,
    "dataType": "STRING",
    "description": "Allocated commission types"
  },
  {
    "fieldName": "ALLOCATED_PROCESS_CODES",
    "fidNumber": 17475,
    "dataType": "STRING",
    "description": "Allocated process codes"
  },
  {
    "fieldName": "SETTLE_TYPE",
    "fidNumber": 17476,
    "dataType": "LONG",
    "description": "Settlement type"
  },
  {
    "fieldName": "Q_FORWARD_PTS",
    "fidNumber": 17477,
    "dataType": "DOUBLE",
    "description": "Forward Pts"
  },
  {
    "fieldName": "Q_SETTLE_CURRENCY",
    "fidNumber": 17478,
    "dataType": "STRING",
    "description": "Settlement currency"
  },
  {
    "fieldName": "Q_CUMULATIVE_QTY",
    "fidNumber": 17479,
    "dataType": "DOUBLE",
    "description": "Cumulative quantity"
  },
  {
    "fieldName": "Q_LEAVES_QTY",
    "fidNumber": 17480,
    "dataType": "DOUBLE",
    "description": "Leaves quantity"
  },
  {
    "fieldName": "Q_SETTLE_QTY",
    "fidNumber": 17481,
    "dataType": "DOUBLE",
    "description": "Settlement quantity"
  },
  {
    "fieldName": "Q_AVG_ALL_IN_RATE",
    "fidNumber": 17482,
    "dataType": "DOUBLE",
    "description": "Average all-in rate"
  },
  {
    "fieldName": "SETTLE_TYPE_SYNTHETIC ",
    "fidNumber": 17483,
    "dataType": "LONG",
    "description": "SETTLE_TYPE_SYNTHETIC"
  },
  {
    "fieldName": "STAGED_LINK_ORDER_ID",
    "fidNumber": 17484,
    "dataType": "STRING",
    "description": "Staged Linked Order ID"
  },
  {
    "fieldName": "BROKER_ROUTE",
    "fidNumber": 17485,
    "dataType": "STRING",
    "description": "Broker Route"
  },
  {
    "fieldName": "REALTIME_ALLOC_AVG_PRICE",
    "fidNumber": 17486,
    "dataType": "DOUBLE",
    "description": "Real time avg price"
  },
  {
    "fieldName": "REALTIME_ALLOC_TOTAL_VOLUME",
    "fidNumber": 17487,
    "dataType": "LONG",
    "description": "Real time total volume"
  },
  {
    "fieldName": "REALTIME_ALLOC_OMS_BROKER_ROW",
    "fidNumber": 17488,
    "dataType": "STRING",
    "description": "Real time broker rows"
  },
  {
    "fieldName": "REALTIME_ALLOC_OMS_TRADE_ROW",
    "fidNumber": 17489,
    "dataType": "STRING",
    "description": "Real time trade rows"
  },
  {
    "fieldName": "CRYPTO_OPERATION",
    "fidNumber": 17491,
    "dataType": "STRING",
    "description": "CRYPTO Operation"
  },
  {
    "fieldName": "BUY_PRICE",
    "fidNumber": 17492,
    "dataType": "DOUBLE",
    "description": "Buy Price"
  },
  {
    "fieldName": "SELL_PRICE",
    "fidNumber": 17493,
    "dataType": "DOUBLE",
    "description": "SELL Price"
  },
  {
    "fieldName": "QTY_TOKEN",
    "fidNumber": 17494,
    "dataType": "STRING",
    "description": "Qty Token"
  },
  {
    "fieldName": "Q_CURRENCY1_VALUE",
    "fidNumber": 17495,
    "dataType": "DOUBLE",
    "description": "Currency 1 Value"
  },
  {
    "fieldName": "Q_CURRENCY2_VALUE",
    "fidNumber": 17496,
    "dataType": "DOUBLE",
    "description": "Currency 2 Value"
  },
  {
    "fieldName": "CRYPTO_PAIR_ROOT_SYMBOL",
    "fidNumber": 17497,
    "dataType": "STRING",
    "description": "The root symbol for a Crypto pair."
  },
  {
    "fieldName": "ADMIN_RESERVED_FIRST",
    "fidNumber": 18000,
    "dataType": "STRING",
    "description": "Reserved"
  },
  {
    "fieldName": "ADMIN_RESERVED_LAST",
    "fidNumber": 18999,
    "dataType": "STRING",
    "description": "Reserved"
  },
  {
    "fieldName": "BANK",
    "fidNumber": 20001,
    "dataType": "STRING",
    "description": "Bank"
  },
  {
    "fieldName": "BRANCH",
    "fidNumber": 20003,
    "dataType": "STRING",
    "description": "Branch"
  },
  {
    "fieldName": "STRIKEBASE",
    "fidNumber": 20007,
    "dataType": "STRING",
    "description": "Strike Base"
  },
  {
    "fieldName": "CUSTOMER",
    "fidNumber": 20008,
    "dataType": "STRING",
    "description": "Customer"
  },
  {
    "fieldName": "REAL_BANK",
    "fidNumber": 20010,
    "dataType": "STRING",
    "description": "Real Bank"
  },
  {
    "fieldName": "REAL_BRANCH",
    "fidNumber": 20011,
    "dataType": "STRING",
    "description": "Real Branch"
  },
  {
    "fieldName": "GATEWAY_TRADER_ID",
    "fidNumber": 20012,
    "dataType": "STRING",
    "description": "Gateway Trader ID"
  },
  {
    "fieldName": "USER_ORD_NUM",
    "fidNumber": 20013,
    "dataType": "STRING",
    "description": "User Ord Num"
  },
  {
    "fieldName": "HANDLER_ORDER_ID",
    "fidNumber": 20014,
    "dataType": "STRING",
    "description": "Handler Order ID"
  },
  {
    "fieldName": "HANDLER_CL_ORD_ID",
    "fidNumber": 20015,
    "dataType": "STRING",
    "description": "Handler ClOrdID"
  },
  {
    "fieldName": "META_ORDER_TAG",
    "fidNumber": 20016,
    "dataType": "STRING",
    "description": "Meta Order Tag"
  },
  {
    "fieldName": "META_BASKET_ID",
    "fidNumber": 20017,
    "dataType": "STRING",
    "description": "Meta Basket ID"
  },
  {
    "fieldName": "META_BASKET_WAVE_ID",
    "fidNumber": 20018,
    "dataType": "STRING",
    "description": "Meta Basket Wave ID"
  },
  {
    "fieldName": "LARGE_TRADER_ID",
    "fidNumber": 20020,
    "dataType": "STRING",
    "description": "Large Trader ID"
  },
  {
    "fieldName": "CL_ORD_ID",
    "fidNumber": 20021,
    "dataType": "STRING",
    "description": "ClOrdID"
  },
  {
    "fieldName": "ORIG_CL_ORD_ID",
    "fidNumber": 20022,
    "dataType": "STRING",
    "description": "OrigClOrdID"
  },
  {
    "fieldName": "REJ_RESPONSE_TO",
    "fidNumber": 20023,
    "dataType": "LONG",
    "description": "CxlRejResponseTo"
  },
  {
    "fieldName": "ORD_STATUS",
    "fidNumber": 20024,
    "dataType": "STRING",
    "description": "Order Status"
  },
  {
    "fieldName": "EXEC_TYPE",
    "fidNumber": 20025,
    "dataType": "STRING",
    "description": "Exec Type"
  },
  {
    "fieldName": "TIED_TO_STOCK",
    "fidNumber": 20026,
    "dataType": "INT",
    "description": "Tied To Stock"
  },
  {
    "fieldName": "HANDLER_ORIGINAL_CL_ORD_ID",
    "fidNumber": 20027,
    "dataType": "STRING",
    "description": "Handler Original ClOrdID"
  },
  {
    "fieldName": "HANDLER_ORIGINAL_LEG_INDEX",
    "fidNumber": 20028,
    "dataType": "INT",
    "description": "Handler Original Leg Index"
  },
  {
    "fieldName": "CUSTOMER_CURRENCY",
    "fidNumber": 20040,
    "dataType": "STRING",
    "description": "Customer Currency"
  },
  {
    "fieldName": "DEPOSIT",
    "fidNumber": 20052,
    "dataType": "STRING",
    "description": "Deposit"
  },
  {
    "fieldName": "CUSTODIAN",
    "fidNumber": 20053,
    "dataType": "STRING",
    "description": "Custodian"
  },
  {
    "fieldName": "SCALPED_BALANCE",
    "fidNumber": 20058,
    "dataType": "DOUBLE",
    "description": "Balance"
  },
  {
    "fieldName": "SCALPED_UNITS",
    "fidNumber": 20059,
    "dataType": "DOUBLE",
    "description": "Price Units Scalped"
  },
  {
    "fieldName": "CONV_PROFIT",
    "fidNumber": 20060,
    "dataType": "STRING",
    "description": "Conv Profit"
  },
  {
    "fieldName": "CONV_LEDGER",
    "fidNumber": 20061,
    "dataType": "STRING",
    "description": "Conv Ledger"
  },
  {
    "fieldName": "TBO_IS_USER_ACTIVE",
    "fidNumber": 20062,
    "dataType": "LONG",
    "description": "User Active"
  },
  {
    "fieldName": "TBO_IS_ACCOUNT_ACTIVE",
    "fidNumber": 20063,
    "dataType": "LONG",
    "description": "Acct Active"
  },
  {
    "fieldName": "TBO_ACCOUNT_ID",
    "fidNumber": 20064,
    "dataType": "LONG",
    "description": "Acct ID"
  },
  {
    "fieldName": "TBO_USER_ID",
    "fidNumber": 20065,
    "dataType": "LONG",
    "description": "User ID"
  },
  {
    "fieldName": "TBO_EXCH_HANDLER_ID",
    "fidNumber": 20066,
    "dataType": "LONG",
    "description": "Exch Handler ID"
  },
  {
    "fieldName": "ORIGINAL_BANK",
    "fidNumber": 20070,
    "dataType": "STRING",
    "description": "Orig Bank"
  },
  {
    "fieldName": "ORIGINAL_BRANCH",
    "fidNumber": 20071,
    "dataType": "STRING",
    "description": "Orig Branch"
  },
  {
    "fieldName": "ORIGINAL_CUSTOMER",
    "fidNumber": 20072,
    "dataType": "STRING",
    "description": "Orig Cust"
  },
  {
    "fieldName": "ORIGINAL_DEPOSIT",
    "fidNumber": 20073,
    "dataType": "STRING",
    "description": "Orig Deposit"
  },
  {
    "fieldName": "LAST_DIVIDEND_AMT",
    "fidNumber": 20124,
    "dataType": "STRING",
    "description": "Last Div Amt"
  },
  {
    "fieldName": "LAST_DIVIDEND_DT",
    "fidNumber": 20125,
    "dataType": "STRING",
    "description": "Last Div Date"
  },
  {
    "fieldName": "LAST_XDIVIDEND_AMT",
    "fidNumber": 20126,
    "dataType": "STRING",
    "description": "Last X-Div Amt"
  },
  {
    "fieldName": "LAST_XDIVIDEND_DT",
    "fidNumber": 20127,
    "dataType": "STRING",
    "description": "Last X-Div Date"
  },
  {
    "fieldName": "NEXT_DIVIDEND_AMT",
    "fidNumber": 20128,
    "dataType": "STRING",
    "description": "Next Div Amount"
  },
  {
    "fieldName": "NEXT_DIVIDEND_DT",
    "fidNumber": 20129,
    "dataType": "STRING",
    "description": "Next Div Date"
  },
  {
    "fieldName": "NEXT_XDIVIDEND_AMT",
    "fidNumber": 20130,
    "dataType": "STRING",
    "description": "Next X-Div Amount"
  },
  {
    "fieldName": "NEXT_XDIVIDEND_DT",
    "fidNumber": 20131,
    "dataType": "STRING",
    "description": "Next X-Div Date"
  },
  {
    "fieldName": "MRU_ROUTING_BBCD",
    "fidNumber": 20140,
    "dataType": "STRING",
    "description": "MRU Sub Acct"
  },
  {
    "fieldName": "TRADE_MOMENTUM",
    "fidNumber": 20141,
    "dataType": "DOUBLE",
    "description": "Trade Momentum"
  },
  {
    "fieldName": "LONGPOS",
    "fidNumber": 20165,
    "dataType": "DOUBLE",
    "description": "Pos Long"
  },
  {
    "fieldName": "SHORTPOS",
    "fidNumber": 20166,
    "dataType": "DOUBLE",
    "description": "Pos Short"
  },
  {
    "fieldName": "SETTLEMENT",
    "fidNumber": 20167,
    "dataType": "STRING",
    "description": "Settlement"
  },
  {
    "fieldName": "AVERAGE",
    "fidNumber": 20168,
    "dataType": "STRING",
    "description": "Avg"
  },
  {
    "fieldName": "POS_STATUS",
    "fidNumber": 20169,
    "dataType": "STRING",
    "description": "Pos Status"
  },
  {
    "fieldName": "AVERAGE_LONG",
    "fidNumber": 20170,
    "dataType": "DOUBLE",
    "description": "Avg Prc Long"
  },
  {
    "fieldName": "AVERAGE_SHORT",
    "fidNumber": 20171,
    "dataType": "DOUBLE",
    "description": "Avg Prc Short"
  },
  {
    "fieldName": "TARGET_POSITION",
    "fidNumber": 20172,
    "dataType": "LONG",
    "description": "Target Position"
  },
  {
    "fieldName": "NET_AVERAGE_PRICE",
    "fidNumber": 20173,
    "dataType": "DOUBLE",
    "description": "Net Avg Prc"
  },
  {
    "fieldName": "NET_POS_ACCT_TYPE",
    "fidNumber": 20174,
    "dataType": "LONG",
    "description": "Net Pos Type"
  },
  {
    "fieldName": "NET_MARKET_VALUE",
    "fidNumber": 20175,
    "dataType": "DOUBLE",
    "description": "Mkt Value"
  },
  {
    "fieldName": "LONG_MARKET_VALUE",
    "fidNumber": 20176,
    "dataType": "DOUBLE",
    "description": "Long Mkt Value"
  },
  {
    "fieldName": "SHORT_MARKET_VALUE",
    "fidNumber": 20177,
    "dataType": "DOUBLE",
    "description": "Short Mkt Value"
  },
  {
    "fieldName": "HIST_LONG_PRC",
    "fidNumber": 20178,
    "dataType": "DOUBLE",
    "description": "Hist Long Prc"
  },
  {
    "fieldName": "HIST_SHORT_PRC",
    "fidNumber": 20179,
    "dataType": "DOUBLE",
    "description": "Hist Short Prc"
  },
  {
    "fieldName": "HIST_LONG_PRC_0",
    "fidNumber": 20180,
    "dataType": "DOUBLE",
    "description": "Hist Long Prc0"
  },
  {
    "fieldName": "HIST_SHORT_PRC_0",
    "fidNumber": 20181,
    "dataType": "DOUBLE",
    "description": "Hist Short Prc0"
  },
  {
    "fieldName": "NET_HIST_PRICE",
    "fidNumber": 20182,
    "dataType": "DOUBLE",
    "description": "Net Hist Price"
  },
  {
    "fieldName": "GROSS_MARKET_VALUE",
    "fidNumber": 20183,
    "dataType": "DOUBLE",
    "description": "Gross Mkt Value"
  },
  {
    "fieldName": "HIST_SCALPED_PROFIT",
    "fidNumber": 20184,
    "dataType": "DOUBLE",
    "description": "Hist Scalped Profit"
  },
  {
    "fieldName": "ORIG_LONGPOS0",
    "fidNumber": 20185,
    "dataType": "DOUBLE",
    "description": "Original Pos Long0"
  },
  {
    "fieldName": "ORIG_SHORTPOS0",
    "fidNumber": 20186,
    "dataType": "DOUBLE",
    "description": "Original Pos Short0"
  },
  {
    "fieldName": "NET_FEES",
    "fidNumber": 20187,
    "dataType": "DOUBLE",
    "description": "Net Fees"
  },
  {
    "fieldName": "PENDING_LONG_POSITION",
    "fidNumber": 20189,
    "dataType": "DOUBLE",
    "description": "Pending Long Position"
  },
  {
    "fieldName": "PENDING_SHORT_POSITION",
    "fidNumber": 20190,
    "dataType": "DOUBLE",
    "description": "Pending Short Position"
  },
  {
    "fieldName": "TYPE",
    "fidNumber": 20200,
    "dataType": "STRING",
    "description": "Event Type"
  },
  {
    "fieldName": "BLOCK_ID",
    "fidNumber": 20201,
    "dataType": "STRING",
    "description": "Block ID"
  },
  {
    "fieldName": "VERSION_NO",
    "fidNumber": 20204,
    "dataType": "INT",
    "description": "Version No."
  },
  {
    "fieldName": "VOLATIL_INTRVL_UP",
    "fidNumber": 20217,
    "dataType": "STRING",
    "description": "Volatil Intrvl Up"
  },
  {
    "fieldName": "VOLATIL_INTRVL_DN",
    "fidNumber": 20218,
    "dataType": "STRING",
    "description": "Volatil Intrvl Dn"
  },
  {
    "fieldName": "PRICE_INTRVL_UP",
    "fidNumber": 20219,
    "dataType": "STRING",
    "description": "Price Intrvl Up"
  },
  {
    "fieldName": "PRICE_INTRVL_DN",
    "fidNumber": 20220,
    "dataType": "STRING",
    "description": "Price Intrvl Dn"
  },
  {
    "fieldName": "RISK_FAC",
    "fidNumber": 20221,
    "dataType": "STRING",
    "description": "Risk Fac"
  },
  {
    "fieldName": "SPREAD_RISK_FAC",
    "fidNumber": 20222,
    "dataType": "STRING",
    "description": "Spread Risk Fac"
  },
  {
    "fieldName": "SCALPED_PROFIT",
    "fidNumber": 20223,
    "dataType": "DOUBLE",
    "description": "Scalped Profit"
  },
  {
    "fieldName": "COST",
    "fidNumber": 20226,
    "dataType": "DOUBLE",
    "description": "Cost"
  },
  {
    "fieldName": "NET_BALANCE",
    "fidNumber": 20227,
    "dataType": "STRING",
    "description": "Net Balance"
  },
  {
    "fieldName": "LONGPOS0",
    "fidNumber": 20229,
    "dataType": "DOUBLE",
    "description": "Pos Long0"
  },
  {
    "fieldName": "SHORTPOS0",
    "fidNumber": 20230,
    "dataType": "DOUBLE",
    "description": "Pos Short0"
  },
  {
    "fieldName": "AVERAGE_LONG0",
    "fidNumber": 20231,
    "dataType": "DOUBLE",
    "description": "Avg Prc Long0"
  },
  {
    "fieldName": "AVERAGE_SHORT0",
    "fidNumber": 20232,
    "dataType": "DOUBLE",
    "description": "Avg Prc Short0"
  },
  {
    "fieldName": "LEDGER_BALANCE",
    "fidNumber": 20233,
    "dataType": "STRING",
    "description": "Ledger Balance"
  },
  {
    "fieldName": "NET_LIQ_NOW",
    "fidNumber": 20234,
    "dataType": "STRING",
    "description": "Net Liq"
  },
  {
    "fieldName": "TOTAL_POS_VALUE",
    "fidNumber": 20235,
    "dataType": "STRING",
    "description": "Total Value"
  },
  {
    "fieldName": "TOTAL_EQUITY_NOW",
    "fidNumber": 20236,
    "dataType": "STRING",
    "description": "Total Equity"
  },
  {
    "fieldName": "OPNFUT_PFTATOPN",
    "fidNumber": 20238,
    "dataType": "STRING",
    "description": "Fut Profit at Open"
  },
  {
    "fieldName": "OPNOPT_VALATOPN",
    "fidNumber": 20239,
    "dataType": "STRING",
    "description": "Opt Value at Open"
  },
  {
    "fieldName": "OPNPOS_PFTTODAY",
    "fidNumber": 20240,
    "dataType": "STRING",
    "description": "Profit Today"
  },
  {
    "fieldName": "TRDPOS_PFTNET",
    "fidNumber": 20241,
    "dataType": "STRING",
    "description": "TrdPos Net Profit"
  },
  {
    "fieldName": "NETPOS_PFTTODAY",
    "fidNumber": 20242,
    "dataType": "STRING",
    "description": "NetPos Profit Today"
  },
  {
    "fieldName": "OPNFUT_POSPFTATOPN",
    "fidNumber": 20243,
    "dataType": "STRING",
    "description": "Open Fut: +Pft at open"
  },
  {
    "fieldName": "OPNFUT_NEGPFTATOPN",
    "fidNumber": 20244,
    "dataType": "STRING",
    "description": "Open Fut: -Pft at open"
  },
  {
    "fieldName": "OPNEQU_POSPFTATOPN",
    "fidNumber": 20245,
    "dataType": "STRING",
    "description": "Open Stk: +Pft at open"
  },
  {
    "fieldName": "OPNEQU_NEGPFTATOPN",
    "fidNumber": 20246,
    "dataType": "STRING",
    "description": "Open Stk: -Pft at open"
  },
  {
    "fieldName": "RISK_MARGIN_REQ",
    "fidNumber": 20250,
    "dataType": "DOUBLE",
    "description": "Risk Margin Requirement"
  },
  {
    "fieldName": "RISK_MARGIN_REQ_PENDING",
    "fidNumber": 20251,
    "dataType": "DOUBLE",
    "description": "Risk Margin Req. Pending"
  },
  {
    "fieldName": "RISK_NET_LIQ",
    "fidNumber": 20252,
    "dataType": "DOUBLE",
    "description": "Risk Margin Net Liq"
  },
  {
    "fieldName": "RISK_NET_LIQ_PENDING",
    "fidNumber": 20253,
    "dataType": "DOUBLE",
    "description": "Risk Margin Net Liq Pending"
  },
  {
    "fieldName": "RISK_EXCESS_EQUITY",
    "fidNumber": 20254,
    "dataType": "DOUBLE",
    "description": "Risk Excess Equity"
  },
  {
    "fieldName": "ALARM_LIMIT1",
    "fidNumber": 20300,
    "dataType": "STRING",
    "description": "Alarm Limit 1"
  },
  {
    "fieldName": "ALARM_LIMIT2",
    "fidNumber": 20301,
    "dataType": "STRING",
    "description": "Alarm Limit 2"
  },
  {
    "fieldName": "ALARM_LIMIT3",
    "fidNumber": 20302,
    "dataType": "STRING",
    "description": "Alarm Limit 3"
  },
  {
    "fieldName": "ALARM_CODE1",
    "fidNumber": 20303,
    "dataType": "STRING",
    "description": "Alarm Code 1"
  },
  {
    "fieldName": "ALARM_CODE2",
    "fidNumber": 20304,
    "dataType": "STRING",
    "description": "Alarm Code 2"
  },
  {
    "fieldName": "ALARM_CODE3",
    "fidNumber": 20305,
    "dataType": "STRING",
    "description": "Alarm Code 3"
  },
  {
    "fieldName": "EXCHANGE",
    "fidNumber": 20400,
    "dataType": "STRING",
    "description": "Exchange"
  },
  {
    "fieldName": "VOLUME",
    "fidNumber": 20401,
    "dataType": "LONG",
    "description": "Vol"
  },
  {
    "fieldName": "BLOCK_SIZE",
    "fidNumber": 20402,
    "dataType": "STRING",
    "description": "Block Size"
  },
  {
    "fieldName": "PRICE",
    "fidNumber": 20403,
    "dataType": "LPACK",
    "description": "Price"
  },
  {
    "fieldName": "ORDER_ID",
    "fidNumber": 20404,
    "dataType": "STRING",
    "description": "Order ID"
  },
  {
    "fieldName": "TRADER_ID",
    "fidNumber": 20405,
    "dataType": "STRING",
    "description": "Trader ID"
  },
  {
    "fieldName": "CLIENT_GROUP",
    "fidNumber": 20406,
    "dataType": "STRING",
    "description": "Client Group"
  },
  {
    "fieldName": "VALID",
    "fidNumber": 20407,
    "dataType": "STRING",
    "description": "Valid"
  },
  {
    "fieldName": "UNTIL",
    "fidNumber": 20408,
    "dataType": "STRING",
    "description": "Until"
  },
  {
    "fieldName": "RANK",
    "fidNumber": 20409,
    "dataType": "STRING",
    "description": "Rank"
  },
  {
    "fieldName": "OPPOSITE_PARTY",
    "fidNumber": 20410,
    "dataType": "STRING",
    "description": "Opp Party"
  },
  {
    "fieldName": "BROKER_ID",
    "fidNumber": 20411,
    "dataType": "STRING",
    "description": "Broker ID"
  },
  {
    "fieldName": "REMOTE_ID",
    "fidNumber": 20412,
    "dataType": "STRING",
    "description": "Remote ID"
  },
  {
    "fieldName": "ACTION",
    "fidNumber": 20413,
    "dataType": "STRING",
    "description": "Action"
  },
  {
    "fieldName": "TIME_STAMP",
    "fidNumber": 20414,
    "dataType": "STRING",
    "description": "Time Stamp"
  },
  {
    "fieldName": "SOLSRV_STATUS",
    "fidNumber": 20415,
    "dataType": "STRING",
    "description": "Solsrv Status"
  },
  {
    "fieldName": "ORDER_STATUS",
    "fidNumber": 20416,
    "dataType": "STRING",
    "description": "Order Status"
  },
  {
    "fieldName": "LEDGER",
    "fidNumber": 20417,
    "dataType": "DOUBLE",
    "description": "Ledger"
  },
  {
    "fieldName": "OTE_NOW",
    "fidNumber": 20418,
    "dataType": "DOUBLE",
    "description": "OTE Now"
  },
  {
    "fieldName": "NOV",
    "fidNumber": 20419,
    "dataType": "DOUBLE",
    "description": "NOV"
  },
  {
    "fieldName": "OTE",
    "fidNumber": 20420,
    "dataType": "DOUBLE",
    "description": "OTE"
  },
  {
    "fieldName": "TOTAL_EQUITY",
    "fidNumber": 20421,
    "dataType": "DOUBLE",
    "description": "Total Eq"
  },
  {
    "fieldName": "NET_LIQ",
    "fidNumber": 20422,
    "dataType": "DOUBLE",
    "description": "Net Liq"
  },
  {
    "fieldName": "SECURITY",
    "fidNumber": 20423,
    "dataType": "DOUBLE",
    "description": "Security"
  },
  {
    "fieldName": "NAV_NOW",
    "fidNumber": 20424,
    "dataType": "DOUBLE",
    "description": "NAV Now"
  },
  {
    "fieldName": "NAV",
    "fidNumber": 20425,
    "dataType": "DOUBLE",
    "description": "NAV"
  },
  {
    "fieldName": "FUT_PFT_TODAY",
    "fidNumber": 20426,
    "dataType": "DOUBLE",
    "description": "Fut Pft Today"
  },
  {
    "fieldName": "OPT_PFT_TODAY",
    "fidNumber": 20427,
    "dataType": "DOUBLE",
    "description": "Opt Pft Today"
  },
  {
    "fieldName": "NET_LIQ_CHANGE",
    "fidNumber": 20428,
    "dataType": "DOUBLE",
    "description": "Net Liq Change"
  },
  {
    "fieldName": "USER_NAV",
    "fidNumber": 20429,
    "dataType": "DOUBLE",
    "description": "User NAV"
  },
  {
    "fieldName": "LMV",
    "fidNumber": 20430,
    "dataType": "DOUBLE",
    "description": "LMV"
  },
  {
    "fieldName": "LMV_NOW",
    "fidNumber": 20431,
    "dataType": "DOUBLE",
    "description": "LMV Now"
  },
  {
    "fieldName": "SMV",
    "fidNumber": 20432,
    "dataType": "DOUBLE",
    "description": "SMV"
  },
  {
    "fieldName": "SMV_NOW",
    "fidNumber": 20433,
    "dataType": "DOUBLE",
    "description": "SMV Now"
  },
  {
    "fieldName": "LUV",
    "fidNumber": 20434,
    "dataType": "DOUBLE",
    "description": "LUV"
  },
  {
    "fieldName": "LUV_NOW",
    "fidNumber": 20435,
    "dataType": "DOUBLE",
    "description": "LUV Now"
  },
  {
    "fieldName": "SUV",
    "fidNumber": 20436,
    "dataType": "DOUBLE",
    "description": "SUV"
  },
  {
    "fieldName": "SUV_NOW",
    "fidNumber": 20437,
    "dataType": "DOUBLE",
    "description": "SUV Now"
  },
  {
    "fieldName": "SMA_0",
    "fidNumber": 20438,
    "dataType": "DOUBLE",
    "description": "Morning SMA"
  },
  {
    "fieldName": "SMA_NOW",
    "fidNumber": 20439,
    "dataType": "DOUBLE",
    "description": "Intraday SMA"
  },
  {
    "fieldName": "ORQ_0",
    "fidNumber": 20440,
    "dataType": "DOUBLE",
    "description": "Morning ORQ"
  },
  {
    "fieldName": "ORQ",
    "fidNumber": 20441,
    "dataType": "DOUBLE",
    "description": "Current ORQ"
  },
  {
    "fieldName": "SPAN_RISK_0",
    "fidNumber": 20442,
    "dataType": "DOUBLE",
    "description": "Morning Span Risk"
  },
  {
    "fieldName": "SPAN_RISK",
    "fidNumber": 20443,
    "dataType": "DOUBLE",
    "description": "Current Span Risk"
  },
  {
    "fieldName": "HOUSE_EXCESS_0",
    "fidNumber": 20444,
    "dataType": "DOUBLE",
    "description": "Overnight House Excess"
  },
  {
    "fieldName": "HOUSE_EXCESS",
    "fidNumber": 20445,
    "dataType": "DOUBLE",
    "description": "House Excess"
  },
  {
    "fieldName": "CASH_AVAIL",
    "fidNumber": 20446,
    "dataType": "DOUBLE",
    "description": "Cash Available"
  },
  {
    "fieldName": "SMA_0_ADJ",
    "fidNumber": 20447,
    "dataType": "DOUBLE",
    "description": "SMA_0 Adjust"
  },
  {
    "fieldName": "PENDING_SMA_REQ",
    "fidNumber": 20448,
    "dataType": "DOUBLE",
    "description": "Pending SMA Req"
  },
  {
    "fieldName": "AVAIL_EXCESS",
    "fidNumber": 20449,
    "dataType": "DOUBLE",
    "description": "Avail Excess"
  },
  {
    "fieldName": "AVAIL_HOUSE_EXCESS",
    "fidNumber": 20450,
    "dataType": "DOUBLE",
    "description": "Avail House Excess"
  },
  {
    "fieldName": "AVAIL_SMA",
    "fidNumber": 20451,
    "dataType": "DOUBLE",
    "description": "Avail SMA"
  },
  {
    "fieldName": "PENDING_CASH_REQ",
    "fidNumber": 20452,
    "dataType": "DOUBLE",
    "description": "Pending Cash Req"
  },
  {
    "fieldName": "AVAIL_CASH",
    "fidNumber": 20453,
    "dataType": "DOUBLE",
    "description": "Available Cash"
  },
  {
    "fieldName": "HOUSE_EXCESS_NOW",
    "fidNumber": 20454,
    "dataType": "DOUBLE",
    "description": "Intraday House Excess"
  },
  {
    "fieldName": "INDICATED_CONTRA",
    "fidNumber": 20455,
    "dataType": "STRING",
    "description": "Preferenced Party"
  },
  {
    "fieldName": "ORIGINAL_PRICE",
    "fidNumber": 20456,
    "dataType": "LPACK",
    "description": "Original Price"
  },
  {
    "fieldName": "EXTENDED_STATE_FLAGS",
    "fidNumber": 20457,
    "dataType": "LONG",
    "description": "Extended State Flags"
  },
  {
    "fieldName": "SECOND_ORDER_TAG",
    "fidNumber": 20458,
    "dataType": "STRING",
    "description": "2nd Order Tag"
  },
  {
    "fieldName": "ORIGINAL_CHANGE_ID",
    "fidNumber": 20459,
    "dataType": "STRING",
    "description": "OrigChangeID"
  },
  {
    "fieldName": "ORIGINAL_CANCEL_ID",
    "fidNumber": 20460,
    "dataType": "STRING",
    "description": "OrigCancelId"
  },
  {
    "fieldName": "ORIGINAL_ORDER_TAG",
    "fidNumber": 20461,
    "dataType": "STRING",
    "description": "Original ClOrdId"
  },
  {
    "fieldName": "MARKUP_RULESET_ID",
    "fidNumber": 20462,
    "dataType": "STRING",
    "description": "Markup Ruleset ID"
  },
  {
    "fieldName": "REMOTE_TRADER_ID",
    "fidNumber": 20463,
    "dataType": "STRING",
    "description": "Remote Trader ID"
  },
  {
    "fieldName": "PORTFOLIO_NAME",
    "fidNumber": 20464,
    "dataType": "STRING",
    "description": "Portfolio"
  },
  {
    "fieldName": "STARTING_MKT_VOL",
    "fidNumber": 20465,
    "dataType": "LONG",
    "description": "Starting VWAP Vol"
  },
  {
    "fieldName": "STARTING_MKT_VWAP",
    "fidNumber": 20466,
    "dataType": "DOUBLE",
    "description": "Starting Mkt VWAP"
  },
  {
    "fieldName": "ORDER_VWAP_DELTA",
    "fidNumber": 20467,
    "dataType": "DOUBLE",
    "description": "Order VWAP Delta"
  },
  {
    "fieldName": "ORDER_MKT_VOL_DELTA",
    "fidNumber": 20468,
    "dataType": "LONG",
    "description": "Order Mkt Vol Delta"
  },
  {
    "fieldName": "OPT_DELIVERABLE",
    "fidNumber": 20469,
    "dataType": "INT",
    "description": "Option Deliverable"
  },
  {
    "fieldName": "EXCHANGE_CROSS_FLAGS",
    "fidNumber": 20470,
    "dataType": "LONG",
    "description": "Exchange Cross Flags"
  },
  {
    "fieldName": "EXTERNAL_CUSTOMER",
    "fidNumber": 20471,
    "dataType": "STRING",
    "description": "External Customer"
  },
  {
    "fieldName": "EXTERNAL_TRADER",
    "fidNumber": 20472,
    "dataType": "STRING",
    "description": "External Trader"
  },
  {
    "fieldName": "EXTERNAL_CUST_ID",
    "fidNumber": 20473,
    "dataType": "STRING",
    "description": "External Cust ID"
  },
  {
    "fieldName": "EXTERNAL_CUST_DESC",
    "fidNumber": 20474,
    "dataType": "STRING",
    "description": "External Cust Desc"
  },
  {
    "fieldName": "EXTERNAL_CUST_TYPE",
    "fidNumber": 20475,
    "dataType": "STRING",
    "description": "External Cust Type"
  },
  {
    "fieldName": "EXTERNAL_CUST_DESK",
    "fidNumber": 20476,
    "dataType": "STRING",
    "description": "External Cust Desk"
  },
  {
    "fieldName": "EXTERNAL_CUST_ALLOW_CROSS",
    "fidNumber": 20477,
    "dataType": "STRING",
    "description": "External Cust Allow Cross"
  },
  {
    "fieldName": "EXT_CUST_TRADING_BBCD",
    "fidNumber": 20478,
    "dataType": "STRING",
    "description": "External Customer Trading BBCD"
  },
  {
    "fieldName": "SELLSHORT_EXEMPT_REASON",
    "fidNumber": 20480,
    "dataType": "STRING",
    "description": "Short Exempt Reason"
  },
  {
    "fieldName": "ORDER_REQUEST_FILTERS",
    "fidNumber": 20481,
    "dataType": "LONG",
    "description": "Order Request Filters"
  },
  {
    "fieldName": "ORDER_CONFLATION_RATE",
    "fidNumber": 20482,
    "dataType": "LONG",
    "description": "CONFLATION_RATE"
  },
  {
    "fieldName": "CONFLATION_FLAGS",
    "fidNumber": 20483,
    "dataType": "LONG",
    "description": "CONFLATION_FLAGS"
  },
  {
    "fieldName": "CONFLATION_RATE_LIMIT",
    "fidNumber": 20484,
    "dataType": "DOUBLE",
    "description": "CONFLATION_RATE_LIMIT"
  },
  {
    "fieldName": "SWEEP_AND_CROSS_FLAG",
    "fidNumber": 20486,
    "dataType": "LONG",
    "description": "SweepAndCrossFlags"
  },
  {
    "fieldName": "SWEEP_AND_CROSS_ID",
    "fidNumber": 20487,
    "dataType": "STRING",
    "description": "SweepAndCrossID"
  },
  {
    "fieldName": "SWEEP_AND_CROSS_ACT_VOL",
    "fidNumber": 20488,
    "dataType": "LONG",
    "description": "SweepAndCrossActVolume"
  },
  {
    "fieldName": "SWEEP_AND_CROSS_ACT_PRICE",
    "fidNumber": 20489,
    "dataType": "LPACK",
    "description": "SweepAndCrossActPrice"
  },
  {
    "fieldName": "VOLUME_PROFILE",
    "fidNumber": 20490,
    "dataType": "DOUBLE",
    "description": "Interval Vol Profile"
  },
  {
    "fieldName": "VOLUME_PROFILE_0",
    "fidNumber": 20491,
    "dataType": "DOUBLE",
    "description": "Vol Profile"
  },
  {
    "fieldName": "REF_LMT_PRICE",
    "fidNumber": 20492,
    "dataType": "DOUBLE",
    "description": "Ref Lmt price"
  },
  {
    "fieldName": "REF_SYM_REF_PRICE",
    "fidNumber": 20493,
    "dataType": "DOUBLE",
    "description": "Ref Sym Ref Price"
  },
  {
    "fieldName": "REF_SYM",
    "fidNumber": 20494,
    "dataType": "STRING",
    "description": "Reference Symbol"
  },
  {
    "fieldName": "USER_NET_PRICE",
    "fidNumber": 20495,
    "dataType": "DOUBLE",
    "description": "Net Price"
  },
  {
    "fieldName": "GENERAL_MSG",
    "fidNumber": 20496,
    "dataType": "STRING",
    "description": "General Message"
  },
  {
    "fieldName": "DERIVED_PRICE",
    "fidNumber": 20497,
    "dataType": "DOUBLE",
    "description": "Derived Price"
  },
  {
    "fieldName": "REF_BASKET_NAME",
    "fidNumber": 20498,
    "dataType": "STRING",
    "description": "Ref Basket Name"
  },
  {
    "fieldName": "REF_STRATEGY",
    "fidNumber": 20499,
    "dataType": "STRING",
    "description": "Ref Strategy"
  },
  {
    "fieldName": "REF_SUB_BUS_UNIT",
    "fidNumber": 20500,
    "dataType": "STRING",
    "description": "Ref Sub Bus Unit"
  },
  {
    "fieldName": "REF_PARENT_ID",
    "fidNumber": 20501,
    "dataType": "STRING",
    "description": "Ref Parent ID"
  },
  {
    "fieldName": "REF_STAGED_CHILD_ID",
    "fidNumber": 20502,
    "dataType": "STRING",
    "description": "Ref Staged Child ID"
  },
  {
    "fieldName": "REF_MGR_NOTES",
    "fidNumber": 20503,
    "dataType": "STRING",
    "description": "Ref Mgr Notes"
  },
  {
    "fieldName": "REF_DAYS_TILL_EARNING",
    "fidNumber": 20504,
    "dataType": "DOUBLE",
    "description": "Ref Days Till Earning"
  },
  {
    "fieldName": "REF_ENTRY_PRICE",
    "fidNumber": 20505,
    "dataType": "DOUBLE",
    "description": "Ref Entry Price"
  },
  {
    "fieldName": "REF_RECENT_ENTRY_PRICE",
    "fidNumber": 20506,
    "dataType": "DOUBLE",
    "description": "Ref Recent Entry Price"
  },
  {
    "fieldName": "TRANSACTION_TIME_STAMP",
    "fidNumber": 20507,
    "dataType": "STRING",
    "description": "TransactTimeStamp"
  },
  {
    "fieldName": "ROOT_ORDER_ID",
    "fidNumber": 20508,
    "dataType": "STRING",
    "description": "Root Order ID"
  },
  {
    "fieldName": "ORDER_QTY",
    "fidNumber": 20510,
    "dataType": "DOUBLE",
    "description": "Order Qty including decimals"
  },
  {
    "fieldName": "ORDER_QTY_TRADED",
    "fidNumber": 20511,
    "dataType": "DOUBLE",
    "description": "Ord Qty Traded including decimals"
  },
  {
    "fieldName": "WORKING_ORDER_QTY_DBL",
    "fidNumber": 20512,
    "dataType": "DOUBLE",
    "description": "Working Qty including decimals"
  },
  {
    "fieldName": "WORKING_ORDER_QTY_ADJ_DBL",
    "fidNumber": 20513,
    "dataType": "DOUBLE",
    "description": "Working Qty adjustment including decimals"
  },
  {
    "fieldName": "RESIDUAL_ORDER_QTY_DBL",
    "fidNumber": 20514,
    "dataType": "DOUBLE",
    "description": "Residual Order Qty including decimals"
  },
  {
    "fieldName": "ORIGINAL_ORDER_QTY_DBL",
    "fidNumber": 20515,
    "dataType": "DOUBLE",
    "description": "Original Order Qty including decimals"
  },
  {
    "fieldName": "REPLACE_ADJ_ORDER_QTY_DBL",
    "fidNumber": 20516,
    "dataType": "DOUBLE",
    "description": "Replace adjustment Order Qty including decimals"
  },
  {
    "fieldName": "LAST_ORDER_AMT_DBL",
    "fidNumber": 20517,
    "dataType": "DOUBLE",
    "description": "Last Order Amount including decimals"
  },
  {
    "fieldName": "PARENT_ORDER_QTY_DBL",
    "fidNumber": 20518,
    "dataType": "DOUBLE",
    "description": "Order qty of parent staged order including decimals"
  },
  {
    "fieldName": "CANCEL_ORDER_QTY_DBL",
    "fidNumber": 20519,
    "dataType": "DOUBLE",
    "description": "Cancel Order qty including decimals"
  },
  {
    "fieldName": "FI_LEVEL",
    "fidNumber": 20550,
    "dataType": "DOUBLE",
    "description": "Price of the executed trade"
  },
  {
    "fieldName": "FI_PRICE_TYPE",
    "fidNumber": 20551,
    "dataType": "INT",
    "description": "Price Type coming from Broker"
  },
  {
    "fieldName": "FI_ACCRUED_INTEREST",
    "fidNumber": 20552,
    "dataType": "DOUBLE",
    "description": "Accrued Interest"
  },
  {
    "fieldName": "FI_TRADED_YIELD",
    "fidNumber": 20553,
    "dataType": "DOUBLE",
    "description": "Effective yield based on execution price"
  },
  {
    "fieldName": "FI_TRADED_SPREAD",
    "fidNumber": 20554,
    "dataType": "DOUBLE",
    "description": "Basis points relative to a benchmark"
  },
  {
    "fieldName": "FI_FACTOR",
    "fidNumber": 20555,
    "dataType": "DOUBLE",
    "description": "Factor for Fixed Income"
  },
  {
    "fieldName": "FI_BENCH_SEC_ID",
    "fidNumber": 20556,
    "dataType": "STRING",
    "description": "Benchmark Security ID"
  },
  {
    "fieldName": "FI_BENCH_PRICE",
    "fidNumber": 20557,
    "dataType": "DOUBLE",
    "description": "Price of the Benchmark Security"
  },
  {
    "fieldName": "FI_BENCH_YIELD",
    "fidNumber": 20558,
    "dataType": "DOUBLE",
    "description": "Yield of the Benchmark Security"
  },
  {
    "fieldName": "FI_BENCHMARK",
    "fidNumber": 20559,
    "dataType": "STRING",
    "description": "Bond description"
  },
  {
    "fieldName": "FI_BENCH_CURVE_NAME",
    "fidNumber": 20560,
    "dataType": "STRING",
    "description": "Used when a security is traded against a curve"
  },
  {
    "fieldName": "FI_BENCH_CURVE_POINT",
    "fidNumber": 20561,
    "dataType": "STRING",
    "description": "Used when a security is traded against a curve"
  },
  {
    "fieldName": "FI_BENCH_SEC_ID_SRC",
    "fidNumber": 20562,
    "dataType": "INT",
    "description": "Benchmark Security ID Source"
  },
  {
    "fieldName": "FI_NO_COMP_DLR_QUOTES",
    "fidNumber": 20563,
    "dataType": "INT",
    "description": "Number of Competing Dealer Quotes"
  },
  {
    "fieldName": "FI_COMP_DLR_ID",
    "fidNumber": 20564,
    "dataType": "STRING",
    "description": "Competing Dealer ID"
  },
  {
    "fieldName": "FI_COMP_DLR_QUOTE_PRICE",
    "fidNumber": 20565,
    "dataType": "DOUBLE",
    "description": "Dealer quoted price"
  },
  {
    "fieldName": "FI_COMP_DLR_QUOTE_PRICETYPE",
    "fidNumber": 20566,
    "dataType": "INT",
    "description": "Price type of Dealer Quote"
  },
  {
    "fieldName": "FI_COMP_DLR_PARQUOTE",
    "fidNumber": 20567,
    "dataType": "DOUBLE",
    "description": "Dealer percent of par price"
  },
  {
    "fieldName": "FI_COMP_DLR_STATUS",
    "fidNumber": 20568,
    "dataType": "STRING",
    "description": "Status of the competing dealer quote"
  },
  {
    "fieldName": "FI_COMP_DLR_SIZE",
    "fidNumber": 20569,
    "dataType": "INT",
    "description": "Order Quantity of the Competing Dealer Quote"
  },
  {
    "fieldName": "FI_COMP_QUOTES_INFO",
    "fidNumber": 20570,
    "dataType": "STRING",
    "description": "Competing quotes information"
  },
  {
    "fieldName": "RISK",
    "fidNumber": 20601,
    "dataType": "DOUBLE",
    "description": "Risk"
  },
  {
    "fieldName": "DATE_OF_MGN",
    "fidNumber": 20602,
    "dataType": "STRING",
    "description": "Date of Mgn"
  },
  {
    "fieldName": "PLDG_MGN",
    "fidNumber": 20603,
    "dataType": "STRING",
    "description": "PLDG Mgn"
  },
  {
    "fieldName": "VRTN_MGN",
    "fidNumber": 20604,
    "dataType": "STRING",
    "description": "VRTN Mgn"
  },
  {
    "fieldName": "PRV_RISK",
    "fidNumber": 20605,
    "dataType": "STRING",
    "description": "Prv Risk"
  },
  {
    "fieldName": "PRV_PLDG_MGN",
    "fidNumber": 20606,
    "dataType": "STRING",
    "description": "Prv PLDG Mgn"
  },
  {
    "fieldName": "PRV_VRTN_MGN",
    "fidNumber": 20607,
    "dataType": "STRING",
    "description": "Prv VRTN Mgn"
  },
  {
    "fieldName": "PRV_DATE_OF_MGN",
    "fidNumber": 20608,
    "dataType": "STRING",
    "description": "Prv Date of Mgn"
  },
  {
    "fieldName": "PRV_TIME_OF_MGN",
    "fidNumber": 20609,
    "dataType": "STRING",
    "description": "Prv Time of Mgn"
  },
  {
    "fieldName": "TIME_OF_MGN",
    "fidNumber": 20610,
    "dataType": "STRING",
    "description": "Time of Mgn"
  },
  {
    "fieldName": "ACCOUNT_STATUS",
    "fidNumber": 20611,
    "dataType": "STRING",
    "description": "Acct. Status"
  },
  {
    "fieldName": "NAME_1",
    "fidNumber": 20612,
    "dataType": "STRING",
    "description": "Name 1"
  },
  {
    "fieldName": "NAME_2",
    "fidNumber": 20613,
    "dataType": "STRING",
    "description": "Name 2"
  },
  {
    "fieldName": "EQUITY_BALANCE",
    "fidNumber": 20614,
    "dataType": "DOUBLE",
    "description": "Equity Balance"
  },
  {
    "fieldName": "CASH_BALANCE",
    "fidNumber": 20615,
    "dataType": "DOUBLE",
    "description": "Cash Balance"
  },
  {
    "fieldName": "VRTN_MGN_FUT",
    "fidNumber": 20616,
    "dataType": "STRING",
    "description": "VRTN Mgn Fut"
  },
  {
    "fieldName": "VRTN_MGN_EQU",
    "fidNumber": 20617,
    "dataType": "STRING",
    "description": "VRTN Mgn Equ"
  },
  {
    "fieldName": "NET_VALUE",
    "fidNumber": 20618,
    "dataType": "STRING",
    "description": "Net Value"
  },
  {
    "fieldName": "NET_VALUE_FUT",
    "fidNumber": 20619,
    "dataType": "STRING",
    "description": "Net Value Fut"
  },
  {
    "fieldName": "NET_VALUE_EQU",
    "fidNumber": 20620,
    "dataType": "STRING",
    "description": "Net Value Equ"
  },
  {
    "fieldName": "PRV_VRTN_MGN_FUT",
    "fidNumber": 20621,
    "dataType": "STRING",
    "description": "PRV VRTN Mgn Fut"
  },
  {
    "fieldName": "PRV_VRTN_MGN_EQU",
    "fidNumber": 20622,
    "dataType": "STRING",
    "description": "PRV VRTN Mgn Equ"
  },
  {
    "fieldName": "PRV_NET_VALUE",
    "fidNumber": 20623,
    "dataType": "STRING",
    "description": "PRV Net Value"
  },
  {
    "fieldName": "PRV_NET_VALUE_FUT",
    "fidNumber": 20624,
    "dataType": "STRING",
    "description": "PRV Net Value Fut"
  },
  {
    "fieldName": "PRV_NET_VALUE_EQU",
    "fidNumber": 20625,
    "dataType": "STRING",
    "description": "PRV Net Value Equ"
  },
  {
    "fieldName": "PROFIT_EQU",
    "fidNumber": 20626,
    "dataType": "STRING",
    "description": "Profit - Equ"
  },
  {
    "fieldName": "LOSS_EQU",
    "fidNumber": 20627,
    "dataType": "STRING",
    "description": "Loss - Equ"
  },
  {
    "fieldName": "PROFIT_FUT",
    "fidNumber": 20628,
    "dataType": "STRING",
    "description": "Profit - Fut"
  },
  {
    "fieldName": "LOSS_FUT",
    "fidNumber": 20629,
    "dataType": "STRING",
    "description": "Loss - Fut"
  },
  {
    "fieldName": "NET_CALLS",
    "fidNumber": 20630,
    "dataType": "STRING",
    "description": "Net Calls"
  },
  {
    "fieldName": "NET_PUTS",
    "fidNumber": 20631,
    "dataType": "STRING",
    "description": "Net Puts"
  },
  {
    "fieldName": "NET_UND",
    "fidNumber": 20632,
    "dataType": "STRING",
    "description": "Net Und"
  },
  {
    "fieldName": "NET_FUT",
    "fidNumber": 20633,
    "dataType": "STRING",
    "description": "Net Fut"
  },
  {
    "fieldName": "NET_DELTA",
    "fidNumber": 20634,
    "dataType": "DOUBLE",
    "description": "Net Delta"
  },
  {
    "fieldName": "NET_VEGA",
    "fidNumber": 20635,
    "dataType": "DOUBLE",
    "description": "Net Vega"
  },
  {
    "fieldName": "NET_GAMMA",
    "fidNumber": 20636,
    "dataType": "DOUBLE",
    "description": "Net Gamma"
  },
  {
    "fieldName": "NET_THETA",
    "fidNumber": 20637,
    "dataType": "DOUBLE",
    "description": "Net Theta"
  },
  {
    "fieldName": "PRV_PROFIT_EQU",
    "fidNumber": 20640,
    "dataType": "STRING",
    "description": "Prv Profit Equ"
  },
  {
    "fieldName": "PRV_LOSS_EQU",
    "fidNumber": 20641,
    "dataType": "STRING",
    "description": "Prv Loss Equ"
  },
  {
    "fieldName": "PRV_PROFIT_FUT",
    "fidNumber": 20642,
    "dataType": "STRING",
    "description": "Prv Profit Fut"
  },
  {
    "fieldName": "PRV_LOSS_FUT",
    "fidNumber": 20643,
    "dataType": "STRING",
    "description": "Prv Loss Fut"
  },
  {
    "fieldName": "ORDER_ASSIGNMENT",
    "fidNumber": 20644,
    "dataType": "STRING",
    "description": "Order Assign"
  },
  {
    "fieldName": "NET_POS",
    "fidNumber": 20645,
    "dataType": "DOUBLE",
    "description": "Net Pos"
  },
  {
    "fieldName": "POS_COUNT",
    "fidNumber": 20646,
    "dataType": "DOUBLE",
    "description": "Pos Count"
  },
  {
    "fieldName": "DEP_COUNT",
    "fidNumber": 20647,
    "dataType": "DOUBLE",
    "description": "Dep Count"
  },
  {
    "fieldName": "ERR_COUNT",
    "fidNumber": 20648,
    "dataType": "DOUBLE",
    "description": "Err Count"
  },
  {
    "fieldName": "LOV",
    "fidNumber": 20649,
    "dataType": "DOUBLE",
    "description": "LOV"
  },
  {
    "fieldName": "SOV",
    "fidNumber": 20650,
    "dataType": "DOUBLE",
    "description": "SOV"
  },
  {
    "fieldName": "LOV_NOW",
    "fidNumber": 20651,
    "dataType": "DOUBLE",
    "description": "LOV Now"
  },
  {
    "fieldName": "SOV_NOW",
    "fidNumber": 20652,
    "dataType": "DOUBLE",
    "description": "SOV Now"
  },
  {
    "fieldName": "NOV_NOW",
    "fidNumber": 20653,
    "dataType": "DOUBLE",
    "description": "NOV Now"
  },
  {
    "fieldName": "SCAN_RISK",
    "fidNumber": 20654,
    "dataType": "DOUBLE",
    "description": "Scan Risk"
  },
  {
    "fieldName": "SCAN_NUM",
    "fidNumber": 20655,
    "dataType": "DOUBLE",
    "description": "Scan Num"
  },
  {
    "fieldName": "MGN_RATIO",
    "fidNumber": 20656,
    "dataType": "DOUBLE",
    "description": "Mgn  Ratio"
  },
  {
    "fieldName": "MGN_CALL",
    "fidNumber": 20657,
    "dataType": "DOUBLE",
    "description": "Mgn Call"
  },
  {
    "fieldName": "OUTLOOK_NAME",
    "fidNumber": 20658,
    "dataType": "STRING",
    "description": "Outlook Name"
  },
  {
    "fieldName": "MOVE_NAME",
    "fidNumber": 20659,
    "dataType": "STRING",
    "description": "Move Name"
  },
  {
    "fieldName": "LONG_CALL_EQUIV_POS",
    "fidNumber": 20660,
    "dataType": "DOUBLE",
    "description": "Long Call Equiv Pos"
  },
  {
    "fieldName": "SHORT_CALL_EQUIV_POS",
    "fidNumber": 20661,
    "dataType": "DOUBLE",
    "description": "Short Call Equiv Pos"
  },
  {
    "fieldName": "LONG_PUT_EQUIV_POS",
    "fidNumber": 20662,
    "dataType": "DOUBLE",
    "description": "Long Put Equiv Pos"
  },
  {
    "fieldName": "SHORT_PUT_EQUIV_POS",
    "fidNumber": 20663,
    "dataType": "DOUBLE",
    "description": "Short Put Equiv Pos"
  },
  {
    "fieldName": "IMPLIED_MID",
    "fidNumber": 20669,
    "dataType": "DOUBLE",
    "description": "Imp Vol - Mid"
  },
  {
    "fieldName": "PRICE_RANGE",
    "fidNumber": 20670,
    "dataType": "DOUBLE",
    "description": "Price Range"
  },
  {
    "fieldName": "VLTY_RANGE",
    "fidNumber": 20671,
    "dataType": "DOUBLE",
    "description": "Vlty Range"
  },
  {
    "fieldName": "VLTY_MIN",
    "fidNumber": 20672,
    "dataType": "DOUBLE",
    "description": "Vlty Min"
  },
  {
    "fieldName": "VLTY_MAX",
    "fidNumber": 20673,
    "dataType": "DOUBLE",
    "description": "Vlty Max"
  },
  {
    "fieldName": "EXERCISE_TYPE",
    "fidNumber": 20674,
    "dataType": "STRING",
    "description": "Exer. Type"
  },
  {
    "fieldName": "ACCOUNTING_TYPE",
    "fidNumber": 20675,
    "dataType": "STRING",
    "description": "Acc. Type"
  },
  {
    "fieldName": "OUTLOOK",
    "fidNumber": 20676,
    "dataType": "STRING",
    "description": "Outlook"
  },
  {
    "fieldName": "BUYORSELL",
    "fidNumber": 20677,
    "dataType": "STRING",
    "description": "Buy/Sell"
  },
  {
    "fieldName": "GOOD_UNTIL",
    "fidNumber": 20678,
    "dataType": "STRING",
    "description": "Good Until"
  },
  {
    "fieldName": "VOLUME_TYPE",
    "fidNumber": 20679,
    "dataType": "STRING",
    "description": "Vol Type"
  },
  {
    "fieldName": "PRICE_TYPE",
    "fidNumber": 20680,
    "dataType": "STRING",
    "description": "Price Type"
  },
  {
    "fieldName": "EXIT_VEHICLE",
    "fidNumber": 20681,
    "dataType": "STRING",
    "description": "Exit Vehicle"
  },
  {
    "fieldName": "VOLUME_TRADED",
    "fidNumber": 20682,
    "dataType": "LONG",
    "description": "Vol Traded"
  },
  {
    "fieldName": "CURRENT_STATUS",
    "fidNumber": 20683,
    "dataType": "STRING",
    "description": "Curr Status"
  },
  {
    "fieldName": "REASON",
    "fidNumber": 20684,
    "dataType": "STRING",
    "description": "Reason"
  },
  {
    "fieldName": "ORIGINAL_ORDER_ID",
    "fidNumber": 20685,
    "dataType": "STRING",
    "description": "Orig. Order ID"
  },
  {
    "fieldName": "NEW_REMOTE_ID",
    "fidNumber": 20686,
    "dataType": "STRING",
    "description": "New Remote ID"
  },
  {
    "fieldName": "REFERS_TO_ID",
    "fidNumber": 20687,
    "dataType": "STRING",
    "description": "Refers to ID"
  },
  {
    "fieldName": "APPROVAL_1",
    "fidNumber": 20688,
    "dataType": "STRING",
    "description": "Approv 1"
  },
  {
    "fieldName": "APPROVAL_2",
    "fidNumber": 20689,
    "dataType": "STRING",
    "description": "Approv 2"
  },
  {
    "fieldName": "CLAIMED_BY_CLERK",
    "fidNumber": 20690,
    "dataType": "STRING",
    "description": "Claimed By Clerk"
  },
  {
    "fieldName": "USER_MESSAGE",
    "fidNumber": 20691,
    "dataType": "STRING",
    "description": "User Msg"
  },
  {
    "fieldName": "ORDER_TAG",
    "fidNumber": 20692,
    "dataType": "STRING",
    "description": "Order Tag"
  },
  {
    "fieldName": "EXIT_VEHICLE_DESC",
    "fidNumber": 20693,
    "dataType": "STRING",
    "description": "Exit Vehicle Desc"
  },
  {
    "fieldName": "EXIT_VEHICLE_FLAGS",
    "fidNumber": 20694,
    "dataType": "LONG",
    "description": "Exit Vehicle Flags"
  },
  {
    "fieldName": "ORDER_RESIDUAL",
    "fidNumber": 20695,
    "dataType": "LONG",
    "description": "Residual Volume"
  },
  {
    "fieldName": "ORDER_FLAGS",
    "fidNumber": 20696,
    "dataType": "LONG",
    "description": "Order Flags"
  },
  {
    "fieldName": "GOOD_FROM",
    "fidNumber": 20697,
    "dataType": "STRING",
    "description": "Good From"
  },
  {
    "fieldName": "BUYSELLTYPE",
    "fidNumber": 20698,
    "dataType": "INT",
    "description": "Buy Sell Type"
  },
  {
    "fieldName": "ORDER_DISP_PRICE",
    "fidNumber": 20699,
    "dataType": "STRING",
    "description": "Order Price"
  },
  {
    "fieldName": "ROW",
    "fidNumber": 20700,
    "dataType": "INT",
    "description": "Row"
  },
  {
    "fieldName": "COL",
    "fidNumber": 20701,
    "dataType": "INT",
    "description": "Col"
  },
  {
    "fieldName": "PANE",
    "fidNumber": 20702,
    "dataType": "INT",
    "description": "Pane"
  },
  {
    "fieldName": "UNDERLIER_PRICE",
    "fidNumber": 20703,
    "dataType": "LPACK",
    "description": "Und Price"
  },
  {
    "fieldName": "UNDERLIER_CLOSE",
    "fidNumber": 20704,
    "dataType": "LPACK",
    "description": "Und Close"
  },
  {
    "fieldName": "VOLATILITY",
    "fidNumber": 20705,
    "dataType": "DOUBLE",
    "description": "Volatility"
  },
  {
    "fieldName": "DAYSLEFT",
    "fidNumber": 20706,
    "dataType": "INT",
    "description": "Days Left"
  },
  {
    "fieldName": "THEO",
    "fidNumber": 20707,
    "dataType": "DOUBLE",
    "description": "Theo"
  },
  {
    "fieldName": "DELTA",
    "fidNumber": 20708,
    "dataType": "DOUBLE",
    "description": "Theo Delta"
  },
  {
    "fieldName": "VEGA",
    "fidNumber": 20709,
    "dataType": "DOUBLE",
    "description": "Theo Vega"
  },
  {
    "fieldName": "GAMMA",
    "fidNumber": 20710,
    "dataType": "DOUBLE",
    "description": "Theo Gamma"
  },
  {
    "fieldName": "THETA",
    "fidNumber": 20711,
    "dataType": "DOUBLE",
    "description": "Theo Theta"
  },
  {
    "fieldName": "IMPLIED",
    "fidNumber": 20712,
    "dataType": "DOUBLE",
    "description": "Implied Vol"
  },
  {
    "fieldName": "POSDELTA",
    "fidNumber": 20713,
    "dataType": "DOUBLE",
    "description": "Pos Delta"
  },
  {
    "fieldName": "POSVEGA",
    "fidNumber": 20714,
    "dataType": "DOUBLE",
    "description": "Pos Vega"
  },
  {
    "fieldName": "POSGAMMA",
    "fidNumber": 20715,
    "dataType": "DOUBLE",
    "description": "Pos Gamma"
  },
  {
    "fieldName": "POSTHETA",
    "fidNumber": 20716,
    "dataType": "DOUBLE",
    "description": "Pos Theta"
  },
  {
    "fieldName": "NETPOS",
    "fidNumber": 20717,
    "dataType": "DOUBLE",
    "description": "Net Pos"
  },
  {
    "fieldName": "RATE",
    "fidNumber": 20718,
    "dataType": "DOUBLE",
    "description": "Rate"
  },
  {
    "fieldName": "IMPLIED_SETTLE",
    "fidNumber": 20719,
    "dataType": "DOUBLE",
    "description": "Imp Vol - Settle"
  },
  {
    "fieldName": "IMPLIED_BID",
    "fidNumber": 20720,
    "dataType": "DOUBLE",
    "description": "Imp Vol - Bid"
  },
  {
    "fieldName": "IMPLIED_ASK",
    "fidNumber": 20721,
    "dataType": "DOUBLE",
    "description": "Imp Vol - Ask"
  },
  {
    "fieldName": "PROFIT",
    "fidNumber": 20722,
    "dataType": "DOUBLE",
    "description": "P&L"
  },
  {
    "fieldName": "CHANGE_OPEN",
    "fidNumber": 20723,
    "dataType": "LPACK",
    "description": "Change Open"
  },
  {
    "fieldName": "CHANGE_CLOSE",
    "fidNumber": 20724,
    "dataType": "LPACK",
    "description": "Change Close"
  },
  {
    "fieldName": "CHANGE_SETTLE",
    "fidNumber": 20725,
    "dataType": "LPACK",
    "description": "Change Settle"
  },
  {
    "fieldName": "CALC_TIME",
    "fidNumber": 20726,
    "dataType": "STRING",
    "description": "Calc Time"
  },
  {
    "fieldName": "ORIGINAL_TRADER_ID",
    "fidNumber": 20727,
    "dataType": "STRING",
    "description": "Orig Trd Id"
  },
  {
    "fieldName": "INDEX_EQUIV",
    "fidNumber": 20728,
    "dataType": "DOUBLE",
    "description": "S&P Equiv Delta"
  },
  {
    "fieldName": "ECN_DATA_TYPE",
    "fidNumber": 20729,
    "dataType": "INT",
    "description": "ECN Data Type"
  },
  {
    "fieldName": "TRANS_PROPERTIES",
    "fidNumber": 20730,
    "dataType": "LONG",
    "description": "Transaction Properties"
  },
  {
    "fieldName": "EXIT_VEHICLE_IS_ROUTABLE",
    "fidNumber": 20731,
    "dataType": "LONG",
    "description": "Exch Handler Routable"
  },
  {
    "fieldName": "POSS_DUPE",
    "fidNumber": 20732,
    "dataType": "INT",
    "description": "Poss Dupe"
  },
  {
    "fieldName": "EXEC_PROCESS",
    "fidNumber": 20733,
    "dataType": "STRING",
    "description": "Executing Process"
  },
  {
    "fieldName": "ORDER_ROUTING_ID",
    "fidNumber": 20734,
    "dataType": "STRING",
    "description": "Order Routing ID"
  },
  {
    "fieldName": "ORDER_ROUTING_ID_TYPE",
    "fidNumber": 20735,
    "dataType": "LONG",
    "description": "Order Routing ID Type"
  },
  {
    "fieldName": "ORDER_CLEARING_ID",
    "fidNumber": 20736,
    "dataType": "STRING",
    "description": "Order Clearing ID"
  },
  {
    "fieldName": "ORDER_CLEARING_ID_TYPE",
    "fidNumber": 20737,
    "dataType": "LONG",
    "description": "Order Clearing ID Type"
  },
  {
    "fieldName": "SUITABILITY_ACCEPT",
    "fidNumber": 20738,
    "dataType": "LONG",
    "description": "Suitability Accept Code"
  },
  {
    "fieldName": "EFFECTIVE_GOOD_FROM",
    "fidNumber": 20739,
    "dataType": "LONG",
    "description": "Effective Good From"
  },
  {
    "fieldName": "EFFECTIVE_GOOD_UNTIL",
    "fidNumber": 20740,
    "dataType": "LONG",
    "description": "Effective Good Until"
  },
  {
    "fieldName": "TMO_CONVERSION_TIME",
    "fidNumber": 20741,
    "dataType": "TIME",
    "description": "TMO Conversion Time"
  },
  {
    "fieldName": "ROUTED_ORDER_TIMESTAMP",
    "fidNumber": 20742,
    "dataType": "STRING",
    "description": "Routed Order Timestamp"
  },
  {
    "fieldName": "DOLLAR_DELTA",
    "fidNumber": 20743,
    "dataType": "DOUBLE",
    "description": "Dollar Delta"
  },
  {
    "fieldName": "DOLLAR_GAMMA",
    "fidNumber": 20744,
    "dataType": "DOUBLE",
    "description": "Dollar Gamma"
  },
  {
    "fieldName": "ORDER_CAPACITY",
    "fidNumber": 20745,
    "dataType": "STRING",
    "description": "Order Capacity"
  },
  {
    "fieldName": "ORDER_RESTRICTIONS",
    "fidNumber": 20746,
    "dataType": "STRING",
    "description": "Order Restrictions"
  },
  {
    "fieldName": "DOLLAR_VEGA",
    "fidNumber": 20747,
    "dataType": "DOUBLE",
    "description": "Dollar Vega"
  },
  {
    "fieldName": "DOLLAR_THETA",
    "fidNumber": 20748,
    "dataType": "DOUBLE",
    "description": "Dollar Theta"
  },
  {
    "fieldName": "CURRENT_STOP_PRICE",
    "fidNumber": 20749,
    "dataType": "LPACK",
    "description": "Current Stop Price"
  },
  {
    "fieldName": "PRIOR_DAY_VOLUME_TRADED",
    "fidNumber": 20750,
    "dataType": "LONG",
    "description": "Prior Day Volume Traded"
  },
  {
    "fieldName": "PRIOR_DAY_TRADE_AVG_PRC",
    "fidNumber": 20751,
    "dataType": "DOUBLE",
    "description": "Prior Day Avg Price"
  },
  {
    "fieldName": "TRANS_COMPONENT",
    "fidNumber": 20752,
    "dataType": "STRING",
    "description": "Trans Component"
  },
  {
    "fieldName": "ORDER_NET_AMOUNT",
    "fidNumber": 20753,
    "dataType": "DOUBLE",
    "description": "Order Net Amount"
  },
  {
    "fieldName": "ORDER_TXN_NET_AMOUNT",
    "fidNumber": 20754,
    "dataType": "DOUBLE",
    "description": "Txn Net Amount"
  },
  {
    "fieldName": "ORDER_TAG_2",
    "fidNumber": 20755,
    "dataType": "STRING",
    "description": "Order Tag 2"
  },
  {
    "fieldName": "ORDER_RESIDUAL_PCT",
    "fidNumber": 20756,
    "dataType": "DOUBLE",
    "description": "Residual Volume %"
  },
  {
    "fieldName": "ACCOUNT_ROUTE_MAPPING_DATA",
    "fidNumber": 20757,
    "dataType": "STRING",
    "description": "Acct Route Mapping Data"
  },
  {
    "fieldName": "ORDER_COMPLETION_PCT",
    "fidNumber": 20758,
    "dataType": "DOUBLE",
    "description": "Completion %"
  },
  {
    "fieldName": "BOOKING_TYPE",
    "fidNumber": 20759,
    "dataType": "INT",
    "description": "Booking Type"
  },
  {
    "fieldName": "WORKED_ORDER_TYPE",
    "fidNumber": 20760,
    "dataType": "LONG",
    "description": "Worked Order Type"
  },
  {
    "fieldName": "ORDER_TRAILER_INFO",
    "fidNumber": 20761,
    "dataType": "STRING",
    "description": "Order Trailer Info"
  },
  {
    "fieldName": "ORDER_CMTA",
    "fidNumber": 20762,
    "dataType": "STRING",
    "description": "CMTA"
  },
  {
    "fieldName": "ACCOUNT_SHORT_NAME",
    "fidNumber": 20763,
    "dataType": "STRING",
    "description": "Account Short Name"
  },
  {
    "fieldName": "WORKING_QTY",
    "fidNumber": 20764,
    "dataType": "LONG",
    "description": "Working Qty"
  },
  {
    "fieldName": "FREE_QTY",
    "fidNumber": 20765,
    "dataType": "LONG",
    "description": "Free Qty"
  },
  {
    "fieldName": "COMMITTED_QTY",
    "fidNumber": 20766,
    "dataType": "LONG",
    "description": "Committed Qty"
  },
  {
    "fieldName": "TARGET_QTY",
    "fidNumber": 20767,
    "dataType": "LONG",
    "description": "Target Qty"
  },
  {
    "fieldName": "ORDER_TRAILER_INFO_2",
    "fidNumber": 20768,
    "dataType": "STRING",
    "description": "Order Trailer 2"
  },
  {
    "fieldName": "EXCHANGE_STATUS_TYPE",
    "fidNumber": 20769,
    "dataType": "LONG",
    "description": "Exch Status Type"
  },
  {
    "fieldName": "VIRTUAL_ORDER_STATUS",
    "fidNumber": 20770,
    "dataType": "STRING",
    "description": "Order Status Display"
  },
  {
    "fieldName": "CLIENT_WORKING_QTY",
    "fidNumber": 20771,
    "dataType": "LONG",
    "description": "Client Working Qty"
  },
  {
    "fieldName": "TOTAL_WORKING_QTY",
    "fidNumber": 20772,
    "dataType": "LONG",
    "description": "Total Working Qty"
  },
  {
    "fieldName": "ORDER_CHANGE_TIME",
    "fidNumber": 20773,
    "dataType": "STRING",
    "description": "Change Timestamp"
  },
  {
    "fieldName": "ORDER_REF_PRICE",
    "fidNumber": 20774,
    "dataType": "DOUBLE",
    "description": "Order Ref Price"
  },
  {
    "fieldName": "ORIG_BOND_PRICE",
    "fidNumber": 20775,
    "dataType": "LPACK",
    "description": "Orig Bond Price"
  },
  {
    "fieldName": "ORIG_UND_PRICE",
    "fidNumber": 20776,
    "dataType": "LPACK",
    "description": "Orig Und Price"
  },
  {
    "fieldName": "ORIG_HEDGE_RATIO",
    "fidNumber": 20777,
    "dataType": "DOUBLE",
    "description": "Orig Delta"
  },
  {
    "fieldName": "HEDGE_PRICE",
    "fidNumber": 20778,
    "dataType": "DOUBLE",
    "description": "Hedge Price"
  },
  {
    "fieldName": "DELTA_ADJ",
    "fidNumber": 20779,
    "dataType": "DOUBLE",
    "description": "Delta Adj"
  },
  {
    "fieldName": "DOLLAR_ADJ",
    "fidNumber": 20780,
    "dataType": "DOUBLE",
    "description": "Dollar Adj"
  },
  {
    "fieldName": "SHARE_GAMMA",
    "fidNumber": 20781,
    "dataType": "DOUBLE",
    "description": "Share Gamma"
  },
  {
    "fieldName": "PARENT_ORDER_TAG",
    "fidNumber": 20782,
    "dataType": "STRING",
    "description": "Parent Tag"
  },
  {
    "fieldName": "VOL_CHANGE",
    "fidNumber": 20783,
    "dataType": "DOUBLE",
    "description": "Change in Volatility"
  },
  {
    "fieldName": "CHEAPEXP_VOL",
    "fidNumber": 20784,
    "dataType": "DOUBLE",
    "description": "Cheap/Expensive Vol"
  },
  {
    "fieldName": "WORKING_QTY_DEST",
    "fidNumber": 20785,
    "dataType": "LONG",
    "description": "Working Qty Dest"
  },
  {
    "fieldName": "VOLUME_TRADED_DEST",
    "fidNumber": 20786,
    "dataType": "LONG",
    "description": "Vol Traded Dest"
  },
  {
    "fieldName": "ORDER_FLAGS_2",
    "fidNumber": 20787,
    "dataType": "LONG",
    "description": "Order Flags 2"
  },
  {
    "fieldName": "CROSS_TYPE",
    "fidNumber": 20788,
    "dataType": "LONG",
    "description": "Cross Type"
  },
  {
    "fieldName": "REASON_CODE",
    "fidNumber": 20789,
    "dataType": "STRING",
    "description": "Reason Code"
  },
  {
    "fieldName": "MAX_DELTA",
    "fidNumber": 20790,
    "dataType": "DOUBLE",
    "description": "Max $ Delta"
  },
  {
    "fieldName": "AUTO_HEDGE",
    "fidNumber": 20791,
    "dataType": "LONG",
    "description": "Auto Hedge"
  },
  {
    "fieldName": "MAX_HEDGE_ORDER",
    "fidNumber": 20792,
    "dataType": "LONG",
    "description": "Max Hedge Order Size"
  },
  {
    "fieldName": "TIME_TO_EXPIRATION",
    "fidNumber": 20793,
    "dataType": "DOUBLE",
    "description": "Time To Expiration"
  },
  {
    "fieldName": "ORDER_GROSS_AMOUNT",
    "fidNumber": 20794,
    "dataType": "DOUBLE",
    "description": "Order Gross Amount"
  },
  {
    "fieldName": "ORDER_TXN_GROSS_AMOUNT",
    "fidNumber": 20795,
    "dataType": "DOUBLE",
    "description": "Txn Gross Amount"
  },
  {
    "fieldName": "TS3_CONVERSION_RULE_FLAGS",
    "fidNumber": 20796,
    "dataType": "LONG",
    "description": "Conversion Rule Flags"
  },
  {
    "fieldName": "DELIVERY_INSTR",
    "fidNumber": 20797,
    "dataType": "STRING",
    "description": "Delivery Instr"
  },
  {
    "fieldName": "JITNEY_BROKER_CODE",
    "fidNumber": 20798,
    "dataType": "STRING",
    "description": "Jitney  Code"
  },
  {
    "fieldName": "SPECIALTY_CROSS_TYPE",
    "fidNumber": 20799,
    "dataType": "STRING",
    "description": "Specialty Cross Type"
  },
  {
    "fieldName": "BOOK_BEST_BID",
    "fidNumber": 20800,
    "dataType": "LPACK",
    "description": "Book best bid"
  },
  {
    "fieldName": "BOOK_BEST_BID_VOL",
    "fidNumber": 20801,
    "dataType": "LONG",
    "description": "Book best bid vol"
  },
  {
    "fieldName": "BOOK_BEST_ASK",
    "fidNumber": 20802,
    "dataType": "LPACK",
    "description": "Book best ask"
  },
  {
    "fieldName": "BOOK_BEST_ASK_VOL",
    "fidNumber": 20803,
    "dataType": "LONG",
    "description": "Book best ask vol"
  },
  {
    "fieldName": "BOOK_PENDING_STATUS",
    "fidNumber": 20804,
    "dataType": "STRING",
    "description": "Pending flag"
  },
  {
    "fieldName": "ORDER_PLACED_PCT",
    "fidNumber": 20805,
    "dataType": "DOUBLE",
    "description": "Placed %"
  },
  {
    "fieldName": "DIST_OUT_OF_MONEY",
    "fidNumber": 20806,
    "dataType": "DOUBLE",
    "description": "Distance OTM"
  },
  {
    "fieldName": "ORDER_COMMENT",
    "fidNumber": 20807,
    "dataType": "STRING",
    "description": "Order Comment"
  },
  {
    "fieldName": "VIRTUAL_ROUTE_TYPE",
    "fidNumber": 20808,
    "dataType": "LONG",
    "description": "Dynamic Route Type"
  },
  {
    "fieldName": "VIRTUAL_ROUTE_NAME",
    "fidNumber": 20809,
    "dataType": "STRING",
    "description": "Dynamic Route Name"
  },
  {
    "fieldName": "ORDER_CHANGE_DETAILS",
    "fidNumber": 20810,
    "dataType": "STRING",
    "description": "Change Details"
  },
  {
    "fieldName": "ORDER_TAG_3",
    "fidNumber": 20811,
    "dataType": "STRING",
    "description": "Order Tag 3"
  },
  {
    "fieldName": "ORDER_TAG_4",
    "fidNumber": 20812,
    "dataType": "STRING",
    "description": "Order Tag 4"
  },
  {
    "fieldName": "ORDER_TAG_5",
    "fidNumber": 20813,
    "dataType": "STRING",
    "description": "Order Tag 5"
  },
  {
    "fieldName": "ORDER_TAG_6",
    "fidNumber": 20814,
    "dataType": "STRING",
    "description": "Order Tag 6"
  },
  {
    "fieldName": "ORDER_TAG_7",
    "fidNumber": 20815,
    "dataType": "STRING",
    "description": "Order Tag 7"
  },
  {
    "fieldName": "ORDER_TAG_8",
    "fidNumber": 20816,
    "dataType": "STRING",
    "description": "Order Tag 8"
  },
  {
    "fieldName": "ORDER_TAG_9",
    "fidNumber": 20817,
    "dataType": "STRING",
    "description": "Order Tag 9"
  },
  {
    "fieldName": "ORDER_TAG_10",
    "fidNumber": 20818,
    "dataType": "STRING",
    "description": "Order Tag 10"
  },
  {
    "fieldName": "PENDING_ORDER_CHANGE",
    "fidNumber": 20819,
    "dataType": "STRING",
    "description": "Pending Order Change"
  },
  {
    "fieldName": "LOOKUP_SECDB_FIELDS",
    "fidNumber": 20876,
    "dataType": "STRING",
    "description": "LOOKUP_SECDB_FIELDS"
  },
  {
    "fieldName": "NEWS_COUNT",
    "fidNumber": 20900,
    "dataType": "INT",
    "description": "News Count"
  },
  {
    "fieldName": "NEWS_START",
    "fidNumber": 20901,
    "dataType": "DATE",
    "description": "News Start"
  },
  {
    "fieldName": "NEWS_STOP",
    "fidNumber": 20902,
    "dataType": "DATE",
    "description": "News Stop"
  },
  {
    "fieldName": "NEWS_DESCRIPTION",
    "fidNumber": 20903,
    "dataType": "STRING",
    "description": "News Description"
  },
  {
    "fieldName": "NEWS_DEPTH",
    "fidNumber": 20904,
    "dataType": "INT",
    "description": "News Depth"
  },
  {
    "fieldName": "NEWS_SYM_LIST",
    "fidNumber": 20905,
    "dataType": "VECTOR_STRING",
    "description": "News Sym List"
  },
  {
    "fieldName": "NEWS_INSTR",
    "fidNumber": 20906,
    "dataType": "INT",
    "description": "News Instr"
  },
  {
    "fieldName": "NEWS_SEARCH",
    "fidNumber": 20907,
    "dataType": "STRING",
    "description": "News Search"
  },
  {
    "fieldName": "NEWS_KEYS",
    "fidNumber": 20908,
    "dataType": "STRING",
    "description": "News Keys"
  },
  {
    "fieldName": "NEWS_CAT_LIST",
    "fidNumber": 20909,
    "dataType": "STRING_VECTOR",
    "description": "News Cat List"
  },
  {
    "fieldName": "NEWS_SEARCH_LIST",
    "fidNumber": 20910,
    "dataType": "STRING_VECTOR",
    "description": "News Search List"
  },
  {
    "fieldName": "PAGED_NEWS_ROW",
    "fidNumber": 20911,
    "dataType": "INT",
    "description": "Paged News Row"
  },
  {
    "fieldName": "PAGED_NEWS_COL",
    "fidNumber": 20912,
    "dataType": "INT",
    "description": "Paged News Col"
  },
  {
    "fieldName": "PAGED_NEWS_TEXT",
    "fidNumber": 20913,
    "dataType": "STRING",
    "description": "Paged News Text"
  },
  {
    "fieldName": "PAGED_NEWS_ISPAGE",
    "fidNumber": 20914,
    "dataType": "INT",
    "description": "Paged News IsPage"
  },
  {
    "fieldName": "PAGED_NEWS_ATTRIBUTES",
    "fidNumber": 20915,
    "dataType": "VECTOR_INT",
    "description": "Paged News Attrib"
  },
  {
    "fieldName": "NEWS_ATTRIBUTES",
    "fidNumber": 20916,
    "dataType": "VECTOR_INT",
    "description": "News Attrib"
  },
  {
    "fieldName": "PAD",
    "fidNumber": 20917,
    "dataType": "EMPTY",
    "description": "Pad"
  },
  {
    "fieldName": "HDLNTREE_TITLE",
    "fidNumber": 20918,
    "dataType": "STRING",
    "description": "HldnTreeTiltle"
  },
  {
    "fieldName": "HDLNTREE_LEVEL",
    "fidNumber": 20919,
    "dataType": "INT",
    "description": "NodeLevel"
  },
  {
    "fieldName": "HDLNTREE_NODETEXT",
    "fidNumber": 20920,
    "dataType": "STRING",
    "description": "NodeText"
  },
  {
    "fieldName": "NEWS_STORY_TRAILER",
    "fidNumber": 20921,
    "dataType": "STRING",
    "description": "Text at end of story"
  },
  {
    "fieldName": "NEWS_STARTTIME",
    "fidNumber": 20922,
    "dataType": "TIME",
    "description": "Early time limit"
  },
  {
    "fieldName": "NEWS_STOPTIME",
    "fidNumber": 20923,
    "dataType": "TIME",
    "description": "Late time limit"
  },
  {
    "fieldName": "NEWS_BRAND",
    "fidNumber": 20924,
    "dataType": "STRING",
    "description": "Branding code"
  },
  {
    "fieldName": "PARM_URL_KEY",
    "fidNumber": 20925,
    "dataType": "STRING",
    "description": "Key"
  },
  {
    "fieldName": "PARM_URL_URL",
    "fidNumber": 20926,
    "dataType": "STRING",
    "description": "URL"
  },
  {
    "fieldName": "NEWS_DATE_GMT",
    "fidNumber": 20927,
    "dataType": "DATE",
    "description": "T_NEWS_DATE in GMT"
  },
  {
    "fieldName": "NEWS_TIME_GMT",
    "fidNumber": 20928,
    "dataType": "TIME",
    "description": "T_NEWS_TIME in GMT"
  },
  {
    "fieldName": "NEWS_DISP_DATE_GMT",
    "fidNumber": 20929,
    "dataType": "DATE",
    "description": "T_NEWS_DISP_DATE in GMT"
  },
  {
    "fieldName": "NEWS_DISP_TIME_GMT",
    "fidNumber": 20930,
    "dataType": "TIME",
    "description": "T_NEWS_DISP_TIME in GMT"
  },
  {
    "fieldName": "NEWS_RCV_DATE_GMT",
    "fidNumber": 20931,
    "dataType": "DATE",
    "description": "T_NEWS_RCV_DATE in GMT"
  },
  {
    "fieldName": "NEWS_RCV_TIME_GMT",
    "fidNumber": 20932,
    "dataType": "TIME",
    "description": "T_NEWS_RCV_TIME in GMT"
  },
  {
    "fieldName": "NEWS_STARTDATE_GMT",
    "fidNumber": 20933,
    "dataType": "DATE",
    "description": "T_NEWS_START in GMT"
  },
  {
    "fieldName": "NEWS_STOPDATE_GMT",
    "fidNumber": 20934,
    "dataType": "DATE",
    "description": "T_NEWS_STOP in GMT"
  },
  {
    "fieldName": "NEWS_STARTTIME_GMT",
    "fidNumber": 20935,
    "dataType": "TIME",
    "description": "T_NEWS_STARTTIME in GMT"
  },
  {
    "fieldName": "NEWS_STOPTIME_GMT",
    "fidNumber": 20936,
    "dataType": "TIME",
    "description": "T_NEWS_STOPTIME in GMT"
  },
  {
    "fieldName": "USER_STRATEGY",
    "fidNumber": 20937,
    "dataType": "STRING",
    "description": "User Strategy"
  },
  {
    "fieldName": "TIME_ZONE_DISPLAY",
    "fidNumber": 20938,
    "dataType": "STRING",
    "description": "Time Zone"
  },
  {
    "fieldName": "DURATION_DISPLAY",
    "fidNumber": 20939,
    "dataType": "LONG",
    "description": "Order Duration Display"
  },
  {
    "fieldName": "ORDER_FLAGS_3",
    "fidNumber": 20940,
    "dataType": "LONG",
    "description": "Order Flags 3"
  },
  {
    "fieldName": "TIME_IN_FORCE_DISPLAY",
    "fidNumber": 20941,
    "dataType": "STRING",
    "description": "Time In Force"
  },
  {
    "fieldName": "END_TIME_DISPLAY",
    "fidNumber": 20942,
    "dataType": "STRING",
    "description": "End Time"
  },
  {
    "fieldName": "ORDER_GROUP_FLAGS",
    "fidNumber": 20943,
    "dataType": "LONG",
    "description": "Flagset for group order status"
  },
  {
    "fieldName": "ORDER_FLAGS_4",
    "fidNumber": 20944,
    "dataType": "LONG",
    "description": "Order Flags 4"
  },
  {
    "fieldName": "FINRA_NET_COUNT",
    "fidNumber": 20945,
    "dataType": "LONG",
    "description": "FINRA Net Fill Count"
  },
  {
    "fieldName": "SPREAD_CHILD_1_PRICE",
    "fidNumber": 20950,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_1_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_2_PRICE",
    "fidNumber": 20951,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_2_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_3_PRICE",
    "fidNumber": 20952,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_3_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_4_PRICE",
    "fidNumber": 20953,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_4_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_5_PRICE",
    "fidNumber": 20954,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_5_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_1_AVG_PRICE",
    "fidNumber": 20955,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_1_AVG_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_2_AVG_PRICE",
    "fidNumber": 20956,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_2_AVG_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_3_AVG_PRICE",
    "fidNumber": 20957,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_3_AVG_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_4_AVG_PRICE",
    "fidNumber": 20958,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_4_AVG_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_5_AVG_PRICE",
    "fidNumber": 20959,
    "dataType": "DOUBLE",
    "description": "SPREAD_CHILD_5_AVG_PRICEE"
  },
  {
    "fieldName": "SPREAD_CHILD_1_QUANTITY",
    "fidNumber": 20960,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_1_QUANTITY"
  },
  {
    "fieldName": "SPREAD_CHILD_2_QUANTITY",
    "fidNumber": 20961,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_2_QUANTITY"
  },
  {
    "fieldName": "SPREAD_CHILD_3_QUANTITY",
    "fidNumber": 20962,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_3_QUANTITY"
  },
  {
    "fieldName": "SPREAD_CHILD_4_QUANTITY",
    "fidNumber": 20963,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_4_QUANTITY"
  },
  {
    "fieldName": "SPREAD_CHILD_5_QUANTITY",
    "fidNumber": 20964,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_5_QUANTITY"
  },
  {
    "fieldName": "SPREAD_CHILD_1_VOL_TRADED",
    "fidNumber": 20965,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_1_VOL_TRADED"
  },
  {
    "fieldName": "SPREAD_CHILD_2_VOL_TRADED",
    "fidNumber": 20966,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_2_VOL_TRADED"
  },
  {
    "fieldName": "SPREAD_CHILD_3_VOL_TRADED",
    "fidNumber": 20967,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_3_VOL_TRADED"
  },
  {
    "fieldName": "SPREAD_CHILD_4_VOL_TRADED",
    "fidNumber": 20968,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_4_VOL_TRADED"
  },
  {
    "fieldName": "SPREAD_CHILD_5_VOL_TRADED",
    "fidNumber": 20969,
    "dataType": "LONG",
    "description": "SPREAD_CHILD_5_VOL_TRADED"
  },
  {
    "fieldName": "STRAT_ACHIEVABLE",
    "fidNumber": 20970,
    "dataType": "LONG",
    "description": "STRAT_ACHIEVABLE"
  },
  {
    "fieldName": "CURRENT_CLIP",
    "fidNumber": 20971,
    "dataType": "LONG",
    "description": "CURRENT_CLIP"
  },
  {
    "fieldName": "SPREAD_LEG_1_AVG_PRICE_CLIP",
    "fidNumber": 20972,
    "dataType": "DOUBLE",
    "description": "Spread Leg 1 Average Price for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_2_AVG_PRICE_CLIP",
    "fidNumber": 20973,
    "dataType": "DOUBLE",
    "description": "Spread Leg 2 Average Price for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_3_AVG_PRICE_CLIP",
    "fidNumber": 20974,
    "dataType": "DOUBLE",
    "description": "Spread Leg 3 Average Price for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_4_AVG_PRICE_CLIP",
    "fidNumber": 20975,
    "dataType": "DOUBLE",
    "description": "Spread Leg 4 Average Price for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_5_AVG_PRICE_CLIP",
    "fidNumber": 20976,
    "dataType": "DOUBLE",
    "description": "Spread Leg 5 Average Price for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_1_VOL_TRADED_CLIP",
    "fidNumber": 20977,
    "dataType": "LONG",
    "description": "Spread Leg 1 Volume Traded for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_2_VOL_TRADED_CLIP",
    "fidNumber": 20978,
    "dataType": "LONG",
    "description": "Spread Leg 2 Volume Traded for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_3_VOL_TRADED_CLIP",
    "fidNumber": 20979,
    "dataType": "LONG",
    "description": "Spread Leg 3 Volume Traded for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_4_VOL_TRADED_CLIP",
    "fidNumber": 20980,
    "dataType": "LONG",
    "description": "Spread Leg 4 Volume Traded for Clip"
  },
  {
    "fieldName": "SPREAD_LEG_5_VOL_TRADED_CLIP",
    "fidNumber": 20981,
    "dataType": "LONG",
    "description": "Spread Leg 5 Volume Traded for Clip"
  },
  {
    "fieldName": "MOVED_PRICE",
    "fidNumber": 21000,
    "dataType": "STRING",
    "description": "Moved Price"
  },
  {
    "fieldName": "STRATEGY_DISPLAY_TEXT_1",
    "fidNumber": 21001,
    "dataType": "STRING",
    "description": "Strategy Parameter"
  },
  {
    "fieldName": "STRATEGY_NAME",
    "fidNumber": 21002,
    "dataType": "STRING",
    "description": "Strategy Name"
  },
  {
    "fieldName": "SPREAD_LEG_1_TO_OPEN_POS",
    "fidNumber": 21003,
    "dataType": "INT",
    "description": "SPREAD_LEG_1_TO_OPEN_POS"
  },
  {
    "fieldName": "SPREAD_LEG_2_TO_OPEN_POS",
    "fidNumber": 21004,
    "dataType": "INT",
    "description": "SPREAD_LEG_2_TO_OPEN_POS"
  },
  {
    "fieldName": "SPREAD_LEG_3_TO_OPEN_POS",
    "fidNumber": 21005,
    "dataType": "INT",
    "description": "SPREAD_LEG_3_TO_OPEN_POS"
  },
  {
    "fieldName": "SPREAD_LEG_4_TO_OPEN_POS",
    "fidNumber": 21006,
    "dataType": "INT",
    "description": "SPREAD_LEG_4_TO_OPEN_POS"
  },
  {
    "fieldName": "SPREAD_LEG_5_TO_OPEN_POS",
    "fidNumber": 21007,
    "dataType": "INT",
    "description": "SPREAD_LEG_5_TO_OPEN_POS"
  },
  {
    "fieldName": "SPREAD_EXCHANGE",
    "fidNumber": 21008,
    "dataType": "STRING",
    "description": "Spread Exchange"
  },
  {
    "fieldName": "SPREAD_TYPE",
    "fidNumber": 21009,
    "dataType": "LONG",
    "description": "Spread Type"
  },
  {
    "fieldName": "SPREAD_LEG_BUYSELL",
    "fidNumber": 21010,
    "dataType": "INT",
    "description": "Spread Leg Buy/Sell"
  },
  {
    "fieldName": "SPREAD_LEG_TRADE_QTY_MULT",
    "fidNumber": 21011,
    "dataType": "DOUBLE",
    "description": "Spread Leg Mult"
  },
  {
    "fieldName": "SPREAD_LEG_COEFFICIENT",
    "fidNumber": 21012,
    "dataType": "DOUBLE",
    "description": "Spread Leg Coefficient"
  },
  {
    "fieldName": "SPREAD_EXCH_TRADABLE",
    "fidNumber": 21013,
    "dataType": "INT",
    "description": "Spread Exch. Tradable"
  },
  {
    "fieldName": "SPREAD_NUM_WAVES",
    "fidNumber": 21014,
    "dataType": "LONG",
    "description": "Spread #Waves"
  },
  {
    "fieldName": "SPREAD_LEG_PRICE_TYPE",
    "fidNumber": 21015,
    "dataType": "LONG",
    "description": "Spread Leg Price Type"
  },
  {
    "fieldName": "SPREAD_PAUSE",
    "fidNumber": 21016,
    "dataType": "LONG",
    "description": "Spread Pause Time"
  },
  {
    "fieldName": "SPREAD_LEG_LEAN_PRIORITY",
    "fidNumber": 21017,
    "dataType": "LONG",
    "description": "Spread Leg Lean Priority"
  },
  {
    "fieldName": "SPREAD_LEG_ORDER",
    "fidNumber": 21018,
    "dataType": "LONG",
    "description": "Spread Leg Order"
  },
  {
    "fieldName": "SPREAD_RESULTS",
    "fidNumber": 21019,
    "dataType": "STRING",
    "description": "Spread Results"
  },
  {
    "fieldName": "SPREAD_FORMULA",
    "fidNumber": 21020,
    "dataType": "STRING",
    "description": "Spread Formula"
  },
  {
    "fieldName": "SPREAD_FLAGS",
    "fidNumber": 21021,
    "dataType": "LONG",
    "description": "Spread Flags"
  },
  {
    "fieldName": "SPREAD_NUM_LEGS",
    "fidNumber": 21022,
    "dataType": "LONG",
    "description": "Spread Number of Legs"
  },
  {
    "fieldName": "SPREAD_LEG_NUMBER",
    "fidNumber": 21023,
    "dataType": "LONG",
    "description": "Spread Leg Number"
  },
  {
    "fieldName": "SPREAD_DETAILS",
    "fidNumber": 21024,
    "dataType": "STRING",
    "description": "Spread Details"
  },
  {
    "fieldName": "SPREAD_NON_LEAN_CANCEL_DURATION",
    "fidNumber": 21025,
    "dataType": "LONG",
    "description": "Spread non-lean duration"
  },
  {
    "fieldName": "SPREAD_NON_LEAN_CANCEL_START",
    "fidNumber": 21026,
    "dataType": "LONG",
    "description": "Spread non-lean cancel start"
  },
  {
    "fieldName": "SPREAD_ACHIEVED",
    "fidNumber": 21027,
    "dataType": "DOUBLE",
    "description": "Spread Achieved"
  },
  {
    "fieldName": "SPREAD_CURRENCY",
    "fidNumber": 21028,
    "dataType": "STRING",
    "description": "Spread Currency"
  },
  {
    "fieldName": "SPREAD_ACHIEVED_SETUP",
    "fidNumber": 21029,
    "dataType": "DOUBLE",
    "description": "Setup Spread Achieved"
  },
  {
    "fieldName": "SPREAD_ACHIEVED_UNWIND",
    "fidNumber": 21030,
    "dataType": "DOUBLE",
    "description": "Unwind Spread Achieved"
  },
  {
    "fieldName": "SPREAD_LEG_1_DESC",
    "fidNumber": 21031,
    "dataType": "STRING",
    "description": "Spread Leg 1 Summary"
  },
  {
    "fieldName": "SPREAD_LEG_2_DESC",
    "fidNumber": 21032,
    "dataType": "STRING",
    "description": "Spread Leg 2 Summary"
  },
  {
    "fieldName": "SPREAD_LEG_3_DESC",
    "fidNumber": 21033,
    "dataType": "STRING",
    "description": "Spread Leg 3 Summary"
  },
  {
    "fieldName": "SPREAD_LEG_4_DESC",
    "fidNumber": 21034,
    "dataType": "STRING",
    "description": "Spread Leg 4 Summary"
  },
  {
    "fieldName": "SPREAD_LEG_5_DESC",
    "fidNumber": 21035,
    "dataType": "STRING",
    "description": "Spread Leg 5 Summary"
  },
  {
    "fieldName": "SPREAD_LEG_1_EXPIR_DATE",
    "fidNumber": 21036,
    "dataType": "DATE",
    "description": "Spread Leg 1 Expire Date"
  },
  {
    "fieldName": "SPREAD_LEG_2_EXPIR_DATE",
    "fidNumber": 21037,
    "dataType": "DATE",
    "description": "Spread Leg 2 Expire Date"
  },
  {
    "fieldName": "SPREAD_LEG_3_EXPIR_DATE",
    "fidNumber": 21038,
    "dataType": "DATE",
    "description": "Spread Leg 3 Expire Date"
  },
  {
    "fieldName": "SPREAD_LEG_4_EXPIR_DATE",
    "fidNumber": 21039,
    "dataType": "DATE",
    "description": "Spread Leg 4 Expire Date"
  },
  {
    "fieldName": "SPREAD_LEG_5_EXPIR_DATE",
    "fidNumber": 21040,
    "dataType": "DATE",
    "description": "Spread Leg 5 Expire Date"
  },
  {
    "fieldName": "SPREAD_LEG_1",
    "fidNumber": 21041,
    "dataType": "LONG",
    "description": "Spread Leg 1"
  },
  {
    "fieldName": "SPREAD_LEG_2",
    "fidNumber": 21042,
    "dataType": "LONG",
    "description": "Spread Leg 2"
  },
  {
    "fieldName": "SPREAD_LEG_3",
    "fidNumber": 21043,
    "dataType": "LONG",
    "description": "Spread Leg 3"
  },
  {
    "fieldName": "SPREAD_LEG_4",
    "fidNumber": 21044,
    "dataType": "LONG",
    "description": "Spread Leg 4"
  },
  {
    "fieldName": "SPREAD_LEG_5",
    "fidNumber": 21045,
    "dataType": "LONG",
    "description": "Spread Leg 5"
  },
  {
    "fieldName": "SPREAD_LEG_COUNT",
    "fidNumber": 21046,
    "dataType": "LONG",
    "description": "Spread Leg Count"
  },
  {
    "fieldName": "SPREAD_LEG_1_SYMBOL",
    "fidNumber": 21050,
    "dataType": "STRING",
    "description": "Spread Leg 1 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_2_SYMBOL",
    "fidNumber": 21051,
    "dataType": "STRING",
    "description": "Spread Leg 2 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_3_SYMBOL",
    "fidNumber": 21052,
    "dataType": "STRING",
    "description": "Spread Leg 3 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_4_SYMBOL",
    "fidNumber": 21053,
    "dataType": "STRING",
    "description": "Spread Leg 4 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_5_SYMBOL",
    "fidNumber": 21054,
    "dataType": "STRING",
    "description": "Spread Leg 5 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_1_SIDE",
    "fidNumber": 21055,
    "dataType": "STRING",
    "description": "Spread Leg 1 Side"
  },
  {
    "fieldName": "SPREAD_LEG_2_SIDE",
    "fidNumber": 21056,
    "dataType": "STRING",
    "description": "Spread Leg 2 Side"
  },
  {
    "fieldName": "SPREAD_LEG_3_SIDE",
    "fidNumber": 21057,
    "dataType": "STRING",
    "description": "Spread Leg 3 Side"
  },
  {
    "fieldName": "SPREAD_LEG_4_SIDE",
    "fidNumber": 21058,
    "dataType": "STRING",
    "description": "Spread Leg 4 Side"
  },
  {
    "fieldName": "SPREAD_LEG_5_SIDE",
    "fidNumber": 21059,
    "dataType": "STRING",
    "description": "Spread Leg 5 Side"
  },
  {
    "fieldName": "SPREAD_LEG_1_QUANTITY",
    "fidNumber": 21060,
    "dataType": "LONG",
    "description": "Spread Leg 1 Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_2_QUANTITY",
    "fidNumber": 21061,
    "dataType": "LONG",
    "description": "Spread Leg 2 Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_3_QUANTITY",
    "fidNumber": 21062,
    "dataType": "LONG",
    "description": "Spread Leg 3 Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_4_QUANTITY",
    "fidNumber": 21063,
    "dataType": "LONG",
    "description": "Spread Leg 4 Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_5_QUANTITY",
    "fidNumber": 21064,
    "dataType": "LONG",
    "description": "Spread Leg 5 Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_1_VOL_TRADED",
    "fidNumber": 21065,
    "dataType": "LONG",
    "description": "Spread Leg 1 Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_2_VOL_TRADED",
    "fidNumber": 21066,
    "dataType": "LONG",
    "description": "Spread Leg 2 Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_3_VOL_TRADED",
    "fidNumber": 21067,
    "dataType": "LONG",
    "description": "Spread Leg 3 Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_4_VOL_TRADED",
    "fidNumber": 21068,
    "dataType": "LONG",
    "description": "Spread Leg 4 Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_5_VOL_TRADED",
    "fidNumber": 21069,
    "dataType": "LONG",
    "description": "Spread Leg 5 Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_1_AVG_PRICE",
    "fidNumber": 21070,
    "dataType": "DOUBLE",
    "description": "Spread Leg 1 Average Price"
  },
  {
    "fieldName": "SPREAD_LEG_2_AVG_PRICE",
    "fidNumber": 21071,
    "dataType": "DOUBLE",
    "description": "Spread Leg 2 Average Price"
  },
  {
    "fieldName": "SPREAD_LEG_3_AVG_PRICE",
    "fidNumber": 21072,
    "dataType": "DOUBLE",
    "description": "Spread Leg 3 Average Price"
  },
  {
    "fieldName": "SPREAD_LEG_4_AVG_PRICE",
    "fidNumber": 21073,
    "dataType": "DOUBLE",
    "description": "Spread Leg 4 Average Price"
  },
  {
    "fieldName": "SPREAD_LEG_5_AVG_PRICE",
    "fidNumber": 21074,
    "dataType": "DOUBLE",
    "description": "Spread Leg 5 Average Price"
  },
  {
    "fieldName": "PAIR_SPREAD",
    "fidNumber": 21075,
    "dataType": "DOUBLE",
    "description": "Pair Spread"
  },
  {
    "fieldName": "PAIR_SPREAD_TYPE",
    "fidNumber": 21076,
    "dataType": "LONG",
    "description": "Pair Spread Type"
  },
  {
    "fieldName": "PAIR_RATIO",
    "fidNumber": 21077,
    "dataType": "DOUBLE",
    "description": "Pair Ratio"
  },
  {
    "fieldName": "PAIR_CASH",
    "fidNumber": 21078,
    "dataType": "DOUBLE",
    "description": "Pair Cash Component"
  },
  {
    "fieldName": "PAIR_IMBALANCE_LIMIT",
    "fidNumber": 21079,
    "dataType": "DOUBLE",
    "description": "Pair Imbalance Limit"
  },
  {
    "fieldName": "PAIR_IMBALANCE_LIMIT_TYPE",
    "fidNumber": 21080,
    "dataType": "LONG",
    "description": "Pair Imbalance Limit Type"
  },
  {
    "fieldName": "PAIR_DIRECTION",
    "fidNumber": 21081,
    "dataType": "STRING",
    "description": "Pair Direction"
  },
  {
    "fieldName": "PAIR_OPERATOR",
    "fidNumber": 21082,
    "dataType": "STRING",
    "description": "Pair Operator"
  },
  {
    "fieldName": "PAIR_LEG_1_BENCHMARK",
    "fidNumber": 21083,
    "dataType": "DOUBLE",
    "description": "Pair Leg 1 Benchmark"
  },
  {
    "fieldName": "PAIR_LEG_2_BENCHMARK",
    "fidNumber": 21084,
    "dataType": "DOUBLE",
    "description": "Pair Leg 2 Benchmark"
  },
  {
    "fieldName": "PAIR_TARGET",
    "fidNumber": 21085,
    "dataType": "DOUBLE",
    "description": "Pair Target"
  },
  {
    "fieldName": "PAIR_LEG_1_RATIO",
    "fidNumber": 21086,
    "dataType": "DOUBLE",
    "description": "Pair Leg 1 Ratio"
  },
  {
    "fieldName": "PAIR_LEG_2_RATIO",
    "fidNumber": 21087,
    "dataType": "DOUBLE",
    "description": "Pair Leg 2 Ratio"
  },
  {
    "fieldName": "PAIR_CALC_TYPE",
    "fidNumber": 21088,
    "dataType": "LONG",
    "description": "Pair Calc Type"
  },
  {
    "fieldName": "PAIR_LEG_1_BENCHMARK_TYPE",
    "fidNumber": 21089,
    "dataType": "LONG",
    "description": "Pair Leg 1 Benchmark Type"
  },
  {
    "fieldName": "PAIR_LEG_2_BENCHMARK_TYPE",
    "fidNumber": 21090,
    "dataType": "LONG",
    "description": "Pair Leg 2 Benchmark Type"
  },
  {
    "fieldName": "PAIR_LEG_1_BENCHMARK_VALUE",
    "fidNumber": 21091,
    "dataType": "DOUBLE",
    "description": "Pair Leg 1 Benchmark Value"
  },
  {
    "fieldName": "PAIR_LEG_2_BENCHMARK_VALUE",
    "fidNumber": 21092,
    "dataType": "DOUBLE",
    "description": "Pair Leg 2 Benchmark Value"
  },
  {
    "fieldName": "PAIR_CURRENCY_HEDGE",
    "fidNumber": 21093,
    "dataType": "STRING",
    "description": "Pair Currency Hedge"
  },
  {
    "fieldName": "PAIR_LEG_BENCHMARK",
    "fidNumber": 21094,
    "dataType": "LONG",
    "description": "PAIR_LEG_BENCHMARK"
  },
  {
    "fieldName": "PAIR_LEG_BENCHMARK_VALUE",
    "fidNumber": 21095,
    "dataType": "DOUBLE",
    "description": "PAIR_LEG_BENCHMARK_VALUE"
  },
  {
    "fieldName": "PAIR_CASH_CURRENCY",
    "fidNumber": 21096,
    "dataType": "STRING",
    "description": "Pair Cash Currency"
  },
  {
    "fieldName": "PAIR_LEG_1_CASH",
    "fidNumber": 21097,
    "dataType": "DOUBLE",
    "description": "Pair Leg 1 Cash"
  },
  {
    "fieldName": "PAIR_LEG_2_CASH",
    "fidNumber": 21098,
    "dataType": "DOUBLE",
    "description": "Pair Leg 2 Cash"
  },
  {
    "fieldName": "PAIR_FX_RATE",
    "fidNumber": 21099,
    "dataType": "DOUBLE",
    "description": "Pair FX Rate"
  },
  {
    "fieldName": "BOUGHT_QTY",
    "fidNumber": 21100,
    "dataType": "DOUBLE",
    "description": "Qty. Bought"
  },
  {
    "fieldName": "BOUGHT_AVG_PRC",
    "fidNumber": 21101,
    "dataType": "DOUBLE",
    "description": "Bought Avg. Price"
  },
  {
    "fieldName": "SOLD_QTY",
    "fidNumber": 21102,
    "dataType": "DOUBLE",
    "description": "Qty. Sold"
  },
  {
    "fieldName": "SOLD_AVG_PRC",
    "fidNumber": 21103,
    "dataType": "DOUBLE",
    "description": "Sold Avg. Price"
  },
  {
    "fieldName": "SOLD_SHORT_QTY",
    "fidNumber": 21104,
    "dataType": "DOUBLE",
    "description": "Qty. Sold Short"
  },
  {
    "fieldName": "SOLD_SHORT_AVG_PRC",
    "fidNumber": 21105,
    "dataType": "DOUBLE",
    "description": "Sold Short Avg. Price"
  },
  {
    "fieldName": "REF_SYM_LAST",
    "fidNumber": 21106,
    "dataType": "LPACK",
    "description": "Ref Symbol Last"
  },
  {
    "fieldName": "HIDE_LEGS",
    "fidNumber": 21107,
    "dataType": "LONG",
    "description": "Hide legs in parent"
  },
  {
    "fieldName": "PAIR_NOTIONAL",
    "fidNumber": 21108,
    "dataType": "DOUBLE",
    "description": "Pair Notional"
  },
  {
    "fieldName": "PAIR_NOTIONAL_SETUP",
    "fidNumber": 21109,
    "dataType": "DOUBLE",
    "description": "Setup Pair Notional"
  },
  {
    "fieldName": "PAIR_NOTIONAL_UNWIND",
    "fidNumber": 21110,
    "dataType": "DOUBLE",
    "description": "Unwind Pair Notional"
  },
  {
    "fieldName": "SPREAD_LEG_1_BID",
    "fidNumber": 21111,
    "dataType": "LPACK",
    "description": "Spread Leg 1 Bid"
  },
  {
    "fieldName": "SPREAD_LEG_2_BID",
    "fidNumber": 21112,
    "dataType": "LPACK",
    "description": "Spread Leg 2 Bid"
  },
  {
    "fieldName": "SPREAD_LEG_3_BID",
    "fidNumber": 21113,
    "dataType": "LPACK",
    "description": "Spread Leg 3 Bid"
  },
  {
    "fieldName": "SPREAD_LEG_4_BID",
    "fidNumber": 21114,
    "dataType": "LPACK",
    "description": "Spread Leg 4 Bid"
  },
  {
    "fieldName": "SPREAD_LEG_5_BID",
    "fidNumber": 21115,
    "dataType": "LPACK",
    "description": "Spread Leg 5 Bid"
  },
  {
    "fieldName": "SPREAD_LEG_1_ASK",
    "fidNumber": 21116,
    "dataType": "LPACK",
    "description": "Spread Leg 1 Ask"
  },
  {
    "fieldName": "SPREAD_LEG_2_ASK",
    "fidNumber": 21117,
    "dataType": "LPACK",
    "description": "Spread Leg 2 Ask"
  },
  {
    "fieldName": "SPREAD_LEG_3_ASK",
    "fidNumber": 21118,
    "dataType": "LPACK",
    "description": "Spread Leg 3 Ask"
  },
  {
    "fieldName": "SPREAD_LEG_4_ASK",
    "fidNumber": 21119,
    "dataType": "LPACK",
    "description": "Spread Leg 4 Ask"
  },
  {
    "fieldName": "SPREAD_LEG_5_ASK",
    "fidNumber": 21120,
    "dataType": "LPACK",
    "description": "Spread Leg 5 Ask"
  },
  {
    "fieldName": "SPREAD_LEG_1_LAST",
    "fidNumber": 21121,
    "dataType": "LPACK",
    "description": "Spread Leg 1 Last"
  },
  {
    "fieldName": "SPREAD_LEG_2_LAST",
    "fidNumber": 21122,
    "dataType": "LPACK",
    "description": "Spread Leg 2 Last"
  },
  {
    "fieldName": "SPREAD_LEG_3_LAST",
    "fidNumber": 21123,
    "dataType": "LPACK",
    "description": "Spread Leg 3 Last"
  },
  {
    "fieldName": "SPREAD_LEG_4_LAST",
    "fidNumber": 21124,
    "dataType": "LPACK",
    "description": "Spread Leg 4 Last"
  },
  {
    "fieldName": "SPREAD_LEG_5_LAST",
    "fidNumber": 21125,
    "dataType": "LPACK",
    "description": "Spread Leg 5 Last"
  },
  {
    "fieldName": "SPREAD_LEG_1_BASIS",
    "fidNumber": 21126,
    "dataType": "DOUBLE",
    "description": "Spread Leg 1 Basis"
  },
  {
    "fieldName": "SPREAD_LEG_2_BASIS",
    "fidNumber": 21127,
    "dataType": "DOUBLE",
    "description": "Spread Leg 2 Basis"
  },
  {
    "fieldName": "SPREAD_LEG_3_BASIS",
    "fidNumber": 21128,
    "dataType": "DOUBLE",
    "description": "Spread Leg 3 Basis"
  },
  {
    "fieldName": "SPREAD_LEG_4_BASIS",
    "fidNumber": 21129,
    "dataType": "DOUBLE",
    "description": "Spread Leg 4 Basis"
  },
  {
    "fieldName": "SPREAD_LEG_5_BASIS",
    "fidNumber": 21130,
    "dataType": "DOUBLE",
    "description": "Spread Leg 5 Basis"
  },
  {
    "fieldName": "SPREAD_LEG_1_CURRENCY",
    "fidNumber": 21131,
    "dataType": "STRING",
    "description": "Spread Leg 1 Currency"
  },
  {
    "fieldName": "SPREAD_LEG_2_CURRENCY",
    "fidNumber": 21132,
    "dataType": "STRING",
    "description": "Spread Leg 2 Currency"
  },
  {
    "fieldName": "SPREAD_LEG_3_CURRENCY",
    "fidNumber": 21133,
    "dataType": "STRING",
    "description": "Spread Leg 3 Currency"
  },
  {
    "fieldName": "SPREAD_LEG_4_CURRENCY",
    "fidNumber": 21134,
    "dataType": "STRING",
    "description": "Spread Leg 4 Currency"
  },
  {
    "fieldName": "SPREAD_LEG_5_CURRENCY",
    "fidNumber": 21135,
    "dataType": "STRING",
    "description": "Spread Leg 5 Currency"
  },
  {
    "fieldName": "SPREAD_LEG_1_FLAG",
    "fidNumber": 21136,
    "dataType": "STRING",
    "description": "Spread Leg 1 Flag"
  },
  {
    "fieldName": "SPREAD_LEG_2_FLAG",
    "fidNumber": 21137,
    "dataType": "STRING",
    "description": "Spread Leg 2 Flag"
  },
  {
    "fieldName": "SPREAD_LEG_3_FLAG",
    "fidNumber": 21138,
    "dataType": "STRING",
    "description": "Spread Leg 3 Flag"
  },
  {
    "fieldName": "SPREAD_LEG_4_FLAG",
    "fidNumber": 21139,
    "dataType": "STRING",
    "description": "Spread Leg 4 Flag"
  },
  {
    "fieldName": "SPREAD_LEG_5_FLAG",
    "fidNumber": 21140,
    "dataType": "STRING",
    "description": "Spread Leg 5 Flag"
  },
  {
    "fieldName": "SPREAD_LEG_1_PCT_COMPLETE",
    "fidNumber": 21141,
    "dataType": "DOUBLE",
    "description": "Spread Leg 1 Percent Complete"
  },
  {
    "fieldName": "SPREAD_LEG_2_PCT_COMPLETE",
    "fidNumber": 21142,
    "dataType": "DOUBLE",
    "description": "Spread Leg 2 Percent Complete"
  },
  {
    "fieldName": "SPREAD_LEG_3_PCT_COMPLETE",
    "fidNumber": 21143,
    "dataType": "DOUBLE",
    "description": "Spread Leg 3 Percent Complete"
  },
  {
    "fieldName": "SPREAD_LEG_4_PCT_COMPLETE",
    "fidNumber": 21144,
    "dataType": "DOUBLE",
    "description": "Spread Leg 4 Percent Complete"
  },
  {
    "fieldName": "SPREAD_LEG_5_PCT_COMPLETE",
    "fidNumber": 21145,
    "dataType": "DOUBLE",
    "description": "Spread Leg 5 Percent Complete"
  },
  {
    "fieldName": "SPREAD_LEG_1_ID",
    "fidNumber": 21146,
    "dataType": "STRING",
    "description": "Spread Leg 1 ID"
  },
  {
    "fieldName": "SPREAD_LEG_2_ID",
    "fidNumber": 21147,
    "dataType": "STRING",
    "description": "Spread Leg 2 ID"
  },
  {
    "fieldName": "SPREAD_LEG_3_ID",
    "fidNumber": 21148,
    "dataType": "STRING",
    "description": "Spread Leg 3 ID"
  },
  {
    "fieldName": "SPREAD_LEG_4_ID",
    "fidNumber": 21149,
    "dataType": "STRING",
    "description": "Spread Leg 4 ID"
  },
  {
    "fieldName": "SPREAD_LEG_5_ID",
    "fidNumber": 21150,
    "dataType": "STRING",
    "description": "Spread Leg 5 ID"
  },
  {
    "fieldName": "SPREAD_LEG_1_VALUE_TRADED",
    "fidNumber": 21151,
    "dataType": "DOUBLE",
    "description": "Spread Leg 1 Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_2_VALUE_TRADED",
    "fidNumber": 21152,
    "dataType": "DOUBLE",
    "description": "Spread Leg 2 Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_3_VALUE_TRADED",
    "fidNumber": 21153,
    "dataType": "DOUBLE",
    "description": "Spread Leg 3 Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_4_VALUE_TRADED",
    "fidNumber": 21154,
    "dataType": "DOUBLE",
    "description": "Spread Leg 4 Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_5_VALUE_TRADED",
    "fidNumber": 21155,
    "dataType": "DOUBLE",
    "description": "Spread Leg 5 Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_1_BUY_QUANTITY",
    "fidNumber": 21156,
    "dataType": "LONG",
    "description": "Spread Leg 1 Buy Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_2_BUY_QUANTITY",
    "fidNumber": 21157,
    "dataType": "LONG",
    "description": "Spread Leg 2 Buy Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_3_BUY_QUANTITY",
    "fidNumber": 21158,
    "dataType": "LONG",
    "description": "Spread Leg 3 Buy Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_4_BUY_QUANTITY",
    "fidNumber": 21159,
    "dataType": "LONG",
    "description": "Spread Leg 4 Buy Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_5_BUY_QUANTITY",
    "fidNumber": 21160,
    "dataType": "LONG",
    "description": "Spread Leg 5 Buy Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_1_SELL_QUANTITY",
    "fidNumber": 21161,
    "dataType": "LONG",
    "description": "Spread Leg 1 Sell Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_2_SELL_QUANTITY",
    "fidNumber": 21162,
    "dataType": "LONG",
    "description": "Spread Leg 2 Sell Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_3_SELL_QUANTITY",
    "fidNumber": 21163,
    "dataType": "LONG",
    "description": "Spread Leg 3 Sell Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_4_SELL_QUANTITY",
    "fidNumber": 21164,
    "dataType": "LONG",
    "description": "Spread Leg 4 Sell Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_5_SELL_QUANTITY",
    "fidNumber": 21165,
    "dataType": "LONG",
    "description": "Spread Leg 5 Sell Quantity"
  },
  {
    "fieldName": "SPREAD_LEG_1_BUY_VOL_TRADED",
    "fidNumber": 21166,
    "dataType": "LONG",
    "description": "Spread Leg 1 Buy Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_2_BUY_VOL_TRADED",
    "fidNumber": 21167,
    "dataType": "LONG",
    "description": "Spread Leg 2 Buy Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_3_BUY_VOL_TRADED",
    "fidNumber": 21168,
    "dataType": "LONG",
    "description": "Spread Leg 3 Buy Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_4_BUY_VOL_TRADED",
    "fidNumber": 21169,
    "dataType": "LONG",
    "description": "Spread Leg 4 Buy Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_5_BUY_VOL_TRADED",
    "fidNumber": 21170,
    "dataType": "LONG",
    "description": "Spread Leg 5 Buy Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_1_SELL_VOL_TRADED",
    "fidNumber": 21171,
    "dataType": "LONG",
    "description": "Spread Leg 1 Sell Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_2_SELL_VOL_TRADED",
    "fidNumber": 21172,
    "dataType": "LONG",
    "description": "Spread Leg 2 Sell Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_3_SELL_VOL_TRADED",
    "fidNumber": 21173,
    "dataType": "LONG",
    "description": "Spread Leg 3 Sell Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_4_SELL_VOL_TRADED",
    "fidNumber": 21174,
    "dataType": "LONG",
    "description": "Spread Leg 4 Sell Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_5_SELL_VOL_TRADED",
    "fidNumber": 21175,
    "dataType": "LONG",
    "description": "Spread Leg 5 Sell Volume Traded"
  },
  {
    "fieldName": "SPREAD_LEG_1_BUY_VALUE_TRADED",
    "fidNumber": 21176,
    "dataType": "DOUBLE",
    "description": "Spread Leg 1 Buy Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_2_BUY_VALUE_TRADED",
    "fidNumber": 21177,
    "dataType": "DOUBLE",
    "description": "Spread Leg 2 Buy Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_3_BUY_VALUE_TRADED",
    "fidNumber": 21178,
    "dataType": "DOUBLE",
    "description": "Spread Leg 3 Buy Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_4_BUY_VALUE_TRADED",
    "fidNumber": 21179,
    "dataType": "DOUBLE",
    "description": "Spread Leg 4 Buy Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_5_BUY_VALUE_TRADED",
    "fidNumber": 21180,
    "dataType": "DOUBLE",
    "description": "Spread Leg 5 Buy Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_1_SELL_VALUE_TRADED",
    "fidNumber": 21181,
    "dataType": "DOUBLE",
    "description": "Spread Leg 1 Sell Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_2_SELL_VALUE_TRADED",
    "fidNumber": 21182,
    "dataType": "DOUBLE",
    "description": "Spread Leg 2 Sell Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_3_SELL_VALUE_TRADED",
    "fidNumber": 21183,
    "dataType": "DOUBLE",
    "description": "Spread Leg 3 Sell Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_4_SELL_VALUE_TRADED",
    "fidNumber": 21184,
    "dataType": "DOUBLE",
    "description": "Spread Leg 4 Sell Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_5_SELL_VALUE_TRADED",
    "fidNumber": 21185,
    "dataType": "DOUBLE",
    "description": "Spread Leg 5 Sell Value Traded"
  },
  {
    "fieldName": "SPREAD_LEG_1_REMAINING",
    "fidNumber": 21186,
    "dataType": "LONG",
    "description": "Spread Leg 1 Remaining"
  },
  {
    "fieldName": "SPREAD_LEG_2_REMAINING",
    "fidNumber": 21187,
    "dataType": "LONG",
    "description": "Spread Leg 2 Remaining"
  },
  {
    "fieldName": "SPREAD_LEG_3_REMAINING",
    "fidNumber": 21188,
    "dataType": "LONG",
    "description": "Spread Leg 3 Remaining"
  },
  {
    "fieldName": "SPREAD_LEG_4_REMAINING",
    "fidNumber": 21189,
    "dataType": "LONG",
    "description": "Spread Leg 4 Remaining"
  },
  {
    "fieldName": "SPREAD_LEG_5_REMAINING",
    "fidNumber": 21190,
    "dataType": "LONG",
    "description": "Spread Leg 5 Remaining"
  },
  {
    "fieldName": "SPREAD_LEG_1_CLOSE",
    "fidNumber": 21191,
    "dataType": "LPACK",
    "description": "Spread Leg 1 Close"
  },
  {
    "fieldName": "SPREAD_LEG_2_CLOSE",
    "fidNumber": 21192,
    "dataType": "LPACK",
    "description": "Spread Leg 2 Close"
  },
  {
    "fieldName": "SPREAD_LEG_3_CLOSE",
    "fidNumber": 21193,
    "dataType": "LPACK",
    "description": "Spread Leg 3 Close"
  },
  {
    "fieldName": "SPREAD_LEG_4_CLOSE",
    "fidNumber": 21194,
    "dataType": "LPACK",
    "description": "Spread Leg 4 Close"
  },
  {
    "fieldName": "SPREAD_LEG_5_CLOSE",
    "fidNumber": 21195,
    "dataType": "LPACK",
    "description": "Spread Leg 5 Close"
  },
  {
    "fieldName": "MOVED_VLTY",
    "fidNumber": 21200,
    "dataType": "STRING",
    "description": "Moved vlty"
  },
  {
    "fieldName": "SPREAD_LEG_1_ALT_SYMBOL",
    "fidNumber": 21201,
    "dataType": "STRING",
    "description": "Spread Leg 1 Alt Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_2_ALT_SYMBOL",
    "fidNumber": 21202,
    "dataType": "STRING",
    "description": "Spread Leg 2 Alt Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_3_ALT_SYMBOL",
    "fidNumber": 21203,
    "dataType": "STRING",
    "description": "Spread Leg 3 Alt Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_4_ALT_SYMBOL",
    "fidNumber": 21204,
    "dataType": "STRING",
    "description": "Spread Leg 4 Alt Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_5_ALT_SYMBOL",
    "fidNumber": 21205,
    "dataType": "STRING",
    "description": "Spread Leg 5 Alt Symbol"
  },
  {
    "fieldName": "SPREAD_LEGS_ALT_SYMBOL_TYPE",
    "fidNumber": 21209,
    "dataType": "LONG",
    "description": "Spread Legs Alt Symbology Type"
  },
  {
    "fieldName": "SPREAD_LEG_1_SYM_DESC",
    "fidNumber": 21210,
    "dataType": "STRING",
    "description": "Spread Leg 1 Description"
  },
  {
    "fieldName": "SPREAD_LEG_2_SYM_DESC",
    "fidNumber": 21211,
    "dataType": "STRING",
    "description": "Spread Leg 2 Description"
  },
  {
    "fieldName": "SPREAD_LEG_3_SYM_DESC",
    "fidNumber": 21212,
    "dataType": "STRING",
    "description": "Spread Leg 3 Description"
  },
  {
    "fieldName": "SPREAD_LEG_4_SYM_DESC",
    "fidNumber": 21213,
    "dataType": "STRING",
    "description": "Spread Leg 4 Description"
  },
  {
    "fieldName": "SPREAD_LEG_5_SYM_DESC",
    "fidNumber": 21214,
    "dataType": "STRING",
    "description": "Spread Leg 5 Description"
  },
  {
    "fieldName": "SPREAD_LEG_1_RATIO",
    "fidNumber": 21215,
    "dataType": "LONG",
    "description": "Spread Leg 1 Ratio"
  },
  {
    "fieldName": "SPREAD_LEG_2_RATIO",
    "fidNumber": 21216,
    "dataType": "LONG",
    "description": "Spread Leg 2 Ratio"
  },
  {
    "fieldName": "SPREAD_LEG_3_RATIO",
    "fidNumber": 21217,
    "dataType": "LONG",
    "description": "Spread Leg 3 Ratio"
  },
  {
    "fieldName": "SPREAD_LEG_4_RATIO",
    "fidNumber": 21218,
    "dataType": "LONG",
    "description": "Spread Leg 4 Ratio"
  },
  {
    "fieldName": "SPREAD_LEG_5_RATIO",
    "fidNumber": 21219,
    "dataType": "LONG",
    "description": "Spread Leg 5 Ratio"
  },
  {
    "fieldName": "SPREAD_LEG_1_SECURITY_ID",
    "fidNumber": 21220,
    "dataType": "STRING",
    "description": "Spread Leg 1 Sec ID"
  },
  {
    "fieldName": "SPREAD_LEG_2_SECURITY_ID",
    "fidNumber": 21221,
    "dataType": "STRING",
    "description": "Spread Leg 2 Sec ID"
  },
  {
    "fieldName": "SPREAD_LEG_3_SECURITY_ID",
    "fidNumber": 21222,
    "dataType": "STRING",
    "description": "Spread Leg 3 Sec ID"
  },
  {
    "fieldName": "SPREAD_LEG_4_SECURITY_ID",
    "fidNumber": 21223,
    "dataType": "STRING",
    "description": "Spread Leg 4 Sec ID"
  },
  {
    "fieldName": "SPREAD_LEG_5_SECURITY_ID",
    "fidNumber": 21224,
    "dataType": "STRING",
    "description": "Spread Leg 5 Sec ID"
  },
  {
    "fieldName": "PAIR_LEG_1_CASH_CURRENCY",
    "fidNumber": 21288,
    "dataType": "STRING",
    "description": "Pair Leg 1 Cash Currency"
  },
  {
    "fieldName": "PAIR_LEG_2_CASH_CURRENCY",
    "fidNumber": 21289,
    "dataType": "STRING",
    "description": "Pair Leg 2 Cash Currency"
  },
  {
    "fieldName": "PAIR_LEG_1_CAPACITY",
    "fidNumber": 21290,
    "dataType": "STRING",
    "description": "Pair Leg 1 Capacity"
  },
  {
    "fieldName": "PAIR_LEG_2_CAPACITY",
    "fidNumber": 21291,
    "dataType": "STRING",
    "description": "Pair Leg 2 Capacity"
  },
  {
    "fieldName": "SPREAD_LEG_6",
    "fidNumber": 21292,
    "dataType": "LONG",
    "description": "Spread Leg 6"
  },
  {
    "fieldName": "SPREAD_LEG_7",
    "fidNumber": 21293,
    "dataType": "LONG",
    "description": "Spread Leg 7"
  },
  {
    "fieldName": "SPREAD_LEG_8",
    "fidNumber": 21294,
    "dataType": "LONG",
    "description": "Spread Leg 8"
  },
  {
    "fieldName": "SPREAD_LEG_6_SYMBOL",
    "fidNumber": 21295,
    "dataType": "STRING",
    "description": "Spread Leg 6 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_7_SYMBOL",
    "fidNumber": 21296,
    "dataType": "STRING",
    "description": "Spread Leg 7 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_8_SYMBOL",
    "fidNumber": 21297,
    "dataType": "STRING",
    "description": "Spread Leg 8 Symbol"
  },
  {
    "fieldName": "MOVED_PROFIT",
    "fidNumber": 21300,
    "dataType": "STRING",
    "description": "Moved profit"
  },
  {
    "fieldName": "ALLOCATION_OFFSET",
    "fidNumber": 21301,
    "dataType": "LONG",
    "description": "ALLOCATION_OFFSET"
  },
  {
    "fieldName": "SPREAD_LEG_9",
    "fidNumber": 21310,
    "dataType": "LONG",
    "description": "Spread Leg 9"
  },
  {
    "fieldName": "SPREAD_LEG_10",
    "fidNumber": 21311,
    "dataType": "LONG",
    "description": "Spread Leg 10"
  },
  {
    "fieldName": "SPREAD_LEG_11",
    "fidNumber": 21312,
    "dataType": "LONG",
    "description": "Spread Leg 11"
  },
  {
    "fieldName": "SPREAD_LEG_12",
    "fidNumber": 21313,
    "dataType": "LONG",
    "description": "Spread Leg 12"
  },
  {
    "fieldName": "SPREAD_LEG_13",
    "fidNumber": 21314,
    "dataType": "LONG",
    "description": "Spread Leg 13"
  },
  {
    "fieldName": "SPREAD_LEG_14",
    "fidNumber": 21315,
    "dataType": "LONG",
    "description": "Spread Leg 14"
  },
  {
    "fieldName": "SPREAD_LEG_15",
    "fidNumber": 21316,
    "dataType": "LONG",
    "description": "Spread Leg 15"
  },
  {
    "fieldName": "SPREAD_LEG_16",
    "fidNumber": 21317,
    "dataType": "LONG",
    "description": "Spread Leg 16"
  },
  {
    "fieldName": "SPREAD_LEG_17",
    "fidNumber": 21318,
    "dataType": "LONG",
    "description": "Spread Leg 17"
  },
  {
    "fieldName": "SPREAD_LEG_18",
    "fidNumber": 21319,
    "dataType": "LONG",
    "description": "Spread Leg 18"
  },
  {
    "fieldName": "SPREAD_LEG_19",
    "fidNumber": 21320,
    "dataType": "LONG",
    "description": "Spread Leg 19"
  },
  {
    "fieldName": "SPREAD_LEG_20",
    "fidNumber": 21321,
    "dataType": "LONG",
    "description": "Spread Leg 20"
  },
  {
    "fieldName": "SPREAD_LEG_21",
    "fidNumber": 21322,
    "dataType": "LONG",
    "description": "Spread Leg 21"
  },
  {
    "fieldName": "SPREAD_LEG_22",
    "fidNumber": 21323,
    "dataType": "LONG",
    "description": "Spread Leg 22"
  },
  {
    "fieldName": "SPREAD_LEG_23",
    "fidNumber": 21324,
    "dataType": "LONG",
    "description": "Spread Leg 23"
  },
  {
    "fieldName": "SPREAD_LEG_24",
    "fidNumber": 21325,
    "dataType": "LONG",
    "description": "Spread Leg 24"
  },
  {
    "fieldName": "SPREAD_LEG_25",
    "fidNumber": 21326,
    "dataType": "LONG",
    "description": "Spread Leg 25"
  },
  {
    "fieldName": "SPREAD_LEG_26",
    "fidNumber": 21327,
    "dataType": "LONG",
    "description": "Spread Leg 26"
  },
  {
    "fieldName": "SPREAD_LEG_27",
    "fidNumber": 21328,
    "dataType": "LONG",
    "description": "Spread Leg 27"
  },
  {
    "fieldName": "SPREAD_LEG_28",
    "fidNumber": 21329,
    "dataType": "LONG",
    "description": "Spread Leg 28"
  },
  {
    "fieldName": "SPREAD_LEG_29",
    "fidNumber": 21330,
    "dataType": "LONG",
    "description": "Spread Leg 29"
  },
  {
    "fieldName": "SPREAD_LEG_30",
    "fidNumber": 21331,
    "dataType": "LONG",
    "description": "Spread Leg 30"
  },
  {
    "fieldName": "SPREAD_LEG_31",
    "fidNumber": 21332,
    "dataType": "LONG",
    "description": "Spread Leg 31"
  },
  {
    "fieldName": "SPREAD_LEG_32",
    "fidNumber": 21333,
    "dataType": "LONG",
    "description": "Spread Leg 32"
  },
  {
    "fieldName": "SPREAD_LEG_33",
    "fidNumber": 21334,
    "dataType": "LONG",
    "description": "Spread Leg 33"
  },
  {
    "fieldName": "SPREAD_LEG_34",
    "fidNumber": 21335,
    "dataType": "LONG",
    "description": "Spread Leg 34"
  },
  {
    "fieldName": "SPREAD_LEG_35",
    "fidNumber": 21336,
    "dataType": "LONG",
    "description": "Spread Leg 35"
  },
  {
    "fieldName": "SPREAD_LEG_36",
    "fidNumber": 21337,
    "dataType": "LONG",
    "description": "Spread Leg 36"
  },
  {
    "fieldName": "SPREAD_LEG_9_SYMBOL",
    "fidNumber": 21338,
    "dataType": "STRING",
    "description": "Spread Leg 9 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_10_SYMBOL",
    "fidNumber": 21339,
    "dataType": "STRING",
    "description": "Spread Leg 10 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_11_SYMBOL",
    "fidNumber": 21340,
    "dataType": "STRING",
    "description": "Spread Leg 11 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_12_SYMBOL",
    "fidNumber": 21341,
    "dataType": "STRING",
    "description": "Spread Leg 12 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_13_SYMBOL",
    "fidNumber": 21342,
    "dataType": "STRING",
    "description": "Spread Leg 13 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_14_SYMBOL",
    "fidNumber": 21343,
    "dataType": "STRING",
    "description": "Spread Leg 14 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_15_SYMBOL",
    "fidNumber": 21344,
    "dataType": "STRING",
    "description": "Spread Leg 15 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_16_SYMBOL",
    "fidNumber": 21345,
    "dataType": "STRING",
    "description": "Spread Leg 16 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_17_SYMBOL",
    "fidNumber": 21346,
    "dataType": "STRING",
    "description": "Spread Leg 17 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_18_SYMBOL",
    "fidNumber": 21347,
    "dataType": "STRING",
    "description": "Spread Leg 18 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_19_SYMBOL",
    "fidNumber": 21348,
    "dataType": "STRING",
    "description": "Spread Leg 19 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_20_SYMBOL",
    "fidNumber": 21349,
    "dataType": "STRING",
    "description": "Spread Leg 20 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_21_SYMBOL",
    "fidNumber": 21350,
    "dataType": "STRING",
    "description": "Spread Leg 21 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_22_SYMBOL",
    "fidNumber": 21351,
    "dataType": "STRING",
    "description": "Spread Leg 22 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_23_SYMBOL",
    "fidNumber": 21352,
    "dataType": "STRING",
    "description": "Spread Leg 23 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_24_SYMBOL",
    "fidNumber": 21353,
    "dataType": "STRING",
    "description": "Spread Leg 24 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_25_SYMBOL",
    "fidNumber": 21354,
    "dataType": "STRING",
    "description": "Spread Leg 25 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_26_SYMBOL",
    "fidNumber": 21355,
    "dataType": "STRING",
    "description": "Spread Leg 26 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_27_SYMBOL",
    "fidNumber": 21356,
    "dataType": "STRING",
    "description": "Spread Leg 27 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_28_SYMBOL",
    "fidNumber": 21357,
    "dataType": "STRING",
    "description": "Spread Leg 28 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_29_SYMBOL",
    "fidNumber": 21358,
    "dataType": "STRING",
    "description": "Spread Leg 29 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_30_SYMBOL",
    "fidNumber": 21359,
    "dataType": "STRING",
    "description": "Spread Leg 30 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_31_SYMBOL",
    "fidNumber": 21360,
    "dataType": "STRING",
    "description": "Spread Leg 31 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_32_SYMBOL",
    "fidNumber": 21361,
    "dataType": "STRING",
    "description": "Spread Leg 32 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_33_SYMBOL",
    "fidNumber": 21362,
    "dataType": "STRING",
    "description": "Spread Leg 33 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_34_SYMBOL",
    "fidNumber": 21363,
    "dataType": "STRING",
    "description": "Spread Leg 34 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_35_SYMBOL",
    "fidNumber": 21364,
    "dataType": "STRING",
    "description": "Spread Leg 35 Symbol"
  },
  {
    "fieldName": "SPREAD_LEG_36_SYMBOL",
    "fidNumber": 21365,
    "dataType": "STRING",
    "description": "Spread Leg 36 Symbol"
  },
  {
    "fieldName": "MOVED_UNIFIED_PROFIT",
    "fidNumber": 21400,
    "dataType": "STRING",
    "description": "Moved unified profit"
  },
  {
    "fieldName": "C_PAIR_ARRIVAL_PRICE",
    "fidNumber": 21500,
    "dataType": "DOUBLE",
    "description": "Pair Last (Leg 1 / Leg 2)"
  },
  {
    "fieldName": "C_PAIR_ARRIVAL_BID_ASK_PRICE",
    "fidNumber": 21501,
    "dataType": "DOUBLE",
    "description": "Pair Bid Ask (Leg 1 / Leg 2)"
  },
  {
    "fieldName": "SPREAD_LEG_1_ARR_PRC",
    "fidNumber": 21600,
    "dataType": "LPACK",
    "description": "Spread Leg 1 Arr Prc"
  },
  {
    "fieldName": "SPREAD_LEG_2_ARR_PRC",
    "fidNumber": 21601,
    "dataType": "LPACK",
    "description": "Spread Leg 2 Arr Prc"
  },
  {
    "fieldName": "SPREAD_LEG_1_ARR_BIDASK",
    "fidNumber": 21611,
    "dataType": "LPACK",
    "description": "Spread Leg 1 Arr Bid/Ask"
  },
  {
    "fieldName": "SPREAD_LEG_2_ARR_BIDASK",
    "fidNumber": 21612,
    "dataType": "LPACK",
    "description": "Spread Leg 2 Arr Bid/Ask"
  },
  {
    "fieldName": "SPREAD_LEG_1_DEC",
    "fidNumber": 21701,
    "dataType": "LPACK",
    "description": "Spread Leg 1 in decimal type"
  },
  {
    "fieldName": "SPREAD_LEG_2_DEC",
    "fidNumber": 21702,
    "dataType": "LPACK",
    "description": "Spread Leg 2 in decimal type"
  },
  {
    "fieldName": "SPREAD_LEG_3_DEC",
    "fidNumber": 21703,
    "dataType": "LPACK",
    "description": "Spread Leg 3 in decimal type"
  },
  {
    "fieldName": "SPREAD_LEG_4_DEC",
    "fidNumber": 21704,
    "dataType": "LPACK",
    "description": "Spread Leg 4 in decimal type"
  },
  {
    "fieldName": "SPREAD_LEG_5_DEC",
    "fidNumber": 21705,
    "dataType": "LPACK",
    "description": "Spread Leg 5 in decimal type"
  },
  {
    "fieldName": "SPREAD_LEG_6_DEC",
    "fidNumber": 21706,
    "dataType": "LPACK",
    "description": "Spread Leg 6 in decimal type"
  },
  {
    "fieldName": "SPREAD_LEG_7_DEC",
    "fidNumber": 21707,
    "dataType": "LPACK",
    "description": "Spread Leg 7 in decimal type"
  },
  {
    "fieldName": "SPREAD_LEG_8_DEC",
    "fidNumber": 21708,
    "dataType": "LPACK",
    "description": "Spread Leg 8 in decimal type"
  },
  {
    "fieldName": "FIX_MSG_TYPE",
    "fidNumber": 21901,
    "dataType": "STRING",
    "description": "FIX Message Type"
  },
  {
    "fieldName": "FIX_ORDER_STATUS",
    "fidNumber": 21902,
    "dataType": "STRING",
    "description": "FIX Order Status"
  },
  {
    "fieldName": "FIX_ORD_REJECT_REASON",
    "fidNumber": 21903,
    "dataType": "STRING",
    "description": "FIX Order Reject Reason"
  },
  {
    "fieldName": "FIX_TRADER_ID",
    "fidNumber": 22000,
    "dataType": "STRING",
    "description": "FIX Trader ID"
  },
  {
    "fieldName": "FIX_SENDER_SUB_ID",
    "fidNumber": 22001,
    "dataType": "STRING",
    "description": "FIX Sender SubID"
  },
  {
    "fieldName": "FIX_TARGET_SUB_ID",
    "fidNumber": 22002,
    "dataType": "STRING",
    "description": "FIX Target SubID"
  },
  {
    "fieldName": "FIX_SECOND_CL_ORD_ID",
    "fidNumber": 22003,
    "dataType": "STRING",
    "description": "FIX 2nd Client Order ID"
  },
  {
    "fieldName": "FIX_DATA",
    "fidNumber": 22004,
    "dataType": "STRING",
    "description": "FIX Data"
  },
  {
    "fieldName": "TRANSLATOR_ID",
    "fidNumber": 22005,
    "dataType": "LONG",
    "description": "Translator ID used by Gateway"
  },
  {
    "fieldName": "GATEWAY_ADVISE_FILTER",
    "fidNumber": 22006,
    "dataType": "LONG",
    "description": "Gateway advise filter"
  },
  {
    "fieldName": "SPREAD_LEG_1_EZE_OMS_MANAGER",
    "fidNumber": 22007,
    "dataType": "STRING",
    "description": "Leg 1 OMS Manager"
  },
  {
    "fieldName": "SPREAD_LEG_2_EZE_OMS_MANAGER",
    "fidNumber": 22008,
    "dataType": "STRING",
    "description": "Leg 2 OMS Manager"
  },
  {
    "fieldName": "SPREAD_LEG_1_EZE_OMS_TRADER",
    "fidNumber": 22009,
    "dataType": "STRING",
    "description": "Leg 1 OMS Trader"
  },
  {
    "fieldName": "SPREAD_LEG_2_EZE_OMS_TRADER",
    "fidNumber": 22010,
    "dataType": "STRING",
    "description": "Leg 2 OMS Trader"
  },
  {
    "fieldName": "SPREAD_LEG_1_USER_STRATEGY",
    "fidNumber": 22011,
    "dataType": "STRING",
    "description": "Leg 1 User Strategy"
  },
  {
    "fieldName": "SPREAD_LEG_2_USER_STRATEGY",
    "fidNumber": 22012,
    "dataType": "STRING",
    "description": "Leg 2 User Strategy"
  },
  {
    "fieldName": "SPREAD_LEG_1_REASON_CODE",
    "fidNumber": 22013,
    "dataType": "STRING",
    "description": "Leg 1 Reason Code"
  },
  {
    "fieldName": "SPREAD_LEG_2_REASON_CODE",
    "fidNumber": 22014,
    "dataType": "STRING",
    "description": "Leg 2 Reason Code"
  },
  {
    "fieldName": "SPREAD_LEG_1_CUSTODIAN",
    "fidNumber": 22015,
    "dataType": "STRING",
    "description": "Leg 1 Custodian"
  },
  {
    "fieldName": "SPREAD_LEG_2_CUSTODIAN",
    "fidNumber": 22016,
    "dataType": "STRING",
    "description": "Leg 2 Custodian"
  },
  {
    "fieldName": "SPREAD_LEG1_EXTERNAL_TRADER",
    "fidNumber": 22017,
    "dataType": "STRING",
    "description": "External Trader"
  },
  {
    "fieldName": "SPREAD_LEG2_EXTERNAL_TRADER",
    "fidNumber": 22018,
    "dataType": "STRING",
    "description": "External Trader"
  },
  {
    "fieldName": "TIMS_SYMBOL",
    "fidNumber": 22100,
    "dataType": "STRING",
    "description": "TIMS Symbol"
  },
  {
    "fieldName": "TIMS_THEO_REFDATE",
    "fidNumber": 22101,
    "dataType": "STRING",
    "description": "TIMS Ref Date"
  },
  {
    "fieldName": "TIMS_THEO_YEAR",
    "fidNumber": 22102,
    "dataType": "INT",
    "description": "TIMS Theo Year"
  },
  {
    "fieldName": "TIMS_THEO_MONTH",
    "fidNumber": 22103,
    "dataType": "INT",
    "description": "TIMS Theo Month"
  },
  {
    "fieldName": "TIMS_THEO_STRIKE_PRC",
    "fidNumber": 22104,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Strike Price"
  },
  {
    "fieldName": "TIMS_THEO_PUTCALLIND",
    "fidNumber": 22105,
    "dataType": "STRING",
    "description": "TIMS Theo Put/Call Ind."
  },
  {
    "fieldName": "TIMS_THEO_PRODUCT_CODE",
    "fidNumber": 22106,
    "dataType": "STRING",
    "description": "TIMS Theo Product Code"
  },
  {
    "fieldName": "TIMS_THEO_MARK_PRICE",
    "fidNumber": 22107,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Mark Price"
  },
  {
    "fieldName": "TIMS_THEO_VAL_UP1",
    "fidNumber": 22108,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Up 1"
  },
  {
    "fieldName": "TIMS_THEO_VAL_UP2",
    "fidNumber": 22109,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Up 2"
  },
  {
    "fieldName": "TIMS_THEO_VAL_UP3",
    "fidNumber": 22110,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Up 3"
  },
  {
    "fieldName": "TIMS_THEO_VAL_UP4",
    "fidNumber": 22111,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Up 4"
  },
  {
    "fieldName": "TIMS_THEO_VAL_UP5",
    "fidNumber": 22112,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Up 5"
  },
  {
    "fieldName": "TIMS_THEO_VAL_DOWN1",
    "fidNumber": 22113,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Down 1"
  },
  {
    "fieldName": "TIMS_THEO_VAL_DOWN2",
    "fidNumber": 22114,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Down 2"
  },
  {
    "fieldName": "TIMS_THEO_VAL_DOWN3",
    "fidNumber": 22115,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Down 3"
  },
  {
    "fieldName": "TIMS_THEO_VAL_DOWN4",
    "fidNumber": 22116,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Down 4"
  },
  {
    "fieldName": "TIMS_THEO_VAL_DOWN5",
    "fidNumber": 22117,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Risk Down 5"
  },
  {
    "fieldName": "TIMS_THEO_SHORT_ADJ",
    "fidNumber": 22118,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Short Adj"
  },
  {
    "fieldName": "TIMS_THEO_VOLATILITY",
    "fidNumber": 22119,
    "dataType": "DOUBLE",
    "description": "TIMS Theo Vlty"
  },
  {
    "fieldName": "TIMS_THEO_OPEN_INTEREST",
    "fidNumber": 22120,
    "dataType": "LONG",
    "description": "TIMS Theo Open Interest"
  },
  {
    "fieldName": "TIMS_THEO_CLEARED_VOLUME",
    "fidNumber": 22121,
    "dataType": "LONG",
    "description": "TIMS Theo Cleared Volume"
  },
  {
    "fieldName": "TIMS_CLASS_GROUP",
    "fidNumber": 22130,
    "dataType": "STRING",
    "description": "TIMS Class Group"
  },
  {
    "fieldName": "TIMS_CLASS_PRODUCT_GROUP",
    "fidNumber": 22131,
    "dataType": "STRING",
    "description": "TIMS Class Product Group"
  },
  {
    "fieldName": "TIMS_CLASS_TYPE",
    "fidNumber": 22132,
    "dataType": "STRING",
    "description": "TIMS Class Type"
  },
  {
    "fieldName": "TIMS_CLASS_PRODUCT_TYPE",
    "fidNumber": 22133,
    "dataType": "STRING",
    "description": "TIMS Class Product Type"
  },
  {
    "fieldName": "TIMS_CLASS_OFFSET",
    "fidNumber": 22134,
    "dataType": "LONG",
    "description": "TIMS Class Offset"
  },
  {
    "fieldName": "TIMS_CLASS_SPOT_SPREAD_RATE",
    "fidNumber": 22135,
    "dataType": "DOUBLE",
    "description": "TIMS Class Spot Spread Rate"
  },
  {
    "fieldName": "TIMS_CLASS_NON_SPOT_SPREAD_RATE",
    "fidNumber": 22136,
    "dataType": "DOUBLE",
    "description": "TIMS Class Non-Spot Spread Rate"
  },
  {
    "fieldName": "TIMS_CLASS_DELIVERY_RATE",
    "fidNumber": 22137,
    "dataType": "DOUBLE",
    "description": "TIMS Class Delivery Rate"
  },
  {
    "fieldName": "TIMS_CLASS_MULTIPLIER",
    "fidNumber": 22138,
    "dataType": "DOUBLE",
    "description": "TIMS Class Multiplier"
  },
  {
    "fieldName": "TIMS_CLASS_OPTION_TYPE",
    "fidNumber": 22139,
    "dataType": "STRING",
    "description": "TIMS Class Option Type"
  },
  {
    "fieldName": "TIMS_CLASS_MKT_VALUE",
    "fidNumber": 22140,
    "dataType": "DOUBLE",
    "description": "TIMS Class Mkt Value"
  },
  {
    "fieldName": "TIMS_CLASS_MARGIN_INTERVAL",
    "fidNumber": 22141,
    "dataType": "DOUBLE",
    "description": "TIMS Class Margin Interval"
  },
  {
    "fieldName": "TIMS_CLASS_CURRENCY",
    "fidNumber": 22142,
    "dataType": "STRING",
    "description": "TIMS Class Currency"
  },
  {
    "fieldName": "TIMS_CLASS_EXCH_RATE",
    "fidNumber": 22143,
    "dataType": "DOUBLE",
    "description": "TIMS Class Exch Rate"
  },
  {
    "fieldName": "TIMS_CLASS_CURRENCY_HAIRCUT",
    "fidNumber": 22144,
    "dataType": "LONG",
    "description": "TIMS Class Crncy Haircut"
  },
  {
    "fieldName": "TIMS_CLASS_MIN_MARGIN",
    "fidNumber": 22145,
    "dataType": "DOUBLE",
    "description": "TIMS Class Min Margin"
  },
  {
    "fieldName": "TIMS_CLASS_INTEREST_RATE",
    "fidNumber": 22146,
    "dataType": "DOUBLE",
    "description": "TIMS Class Min Margin"
  },
  {
    "fieldName": "TIMS_CLASS_DIVDATE",
    "fidNumber": 22147,
    "dataType": "STRING",
    "description": "TIMS Class Div Date"
  },
  {
    "fieldName": "TIMS_CLASS_DIVIDEND",
    "fidNumber": 22148,
    "dataType": "DOUBLE",
    "description": "TIMS Class Dividend"
  },
  {
    "fieldName": "TIMS_FUT_REF_DATE",
    "fidNumber": 22160,
    "dataType": "STRING",
    "description": "TIMS Future Ref Date"
  },
  {
    "fieldName": "TIMS_FUT_PRODUCT_TYPE",
    "fidNumber": 22161,
    "dataType": "LONG",
    "description": "TIMS Future Product Type"
  },
  {
    "fieldName": "TIMS_FUT_PRODUCT_CODE",
    "fidNumber": 22162,
    "dataType": "STRING",
    "description": "TIMS Future Product Code"
  },
  {
    "fieldName": "TIMS_FUT_EXPIR_DATE",
    "fidNumber": 22163,
    "dataType": "STRING",
    "description": "TIMS Future Expiration"
  },
  {
    "fieldName": "TIMS_FUT_STRIKE_PRC",
    "fidNumber": 22164,
    "dataType": "DOUBLE",
    "description": "TIMS Future Strike Price"
  },
  {
    "fieldName": "TIMS_FUT_PUTCALLIND",
    "fidNumber": 22165,
    "dataType": "STRING",
    "description": "TIMS Future Put/Call Ind."
  },
  {
    "fieldName": "TIMS_FUT_MARK_PRICE",
    "fidNumber": 22166,
    "dataType": "DOUBLE",
    "description": "TIMS Future Mark Price"
  },
  {
    "fieldName": "TIMS_FUT_OPEN_INTEREST",
    "fidNumber": 22167,
    "dataType": "LONG",
    "description": "TIMS Future Open Interest"
  },
  {
    "fieldName": "TIMS_FUT_CLEARED_VOLUME",
    "fidNumber": 22168,
    "dataType": "LONG",
    "description": "TIMS Future Cleared Volume"
  },
  {
    "fieldName": "FILL_FUT_FRACTION_PRC",
    "fidNumber": 22169,
    "dataType": "LPACK",
    "description": "Basecode from BID ASK  or HST_CLOSE"
  },
  {
    "fieldName": "SPREAD_LEG_1_WORKING_QTY",
    "fidNumber": 22170,
    "dataType": "LONG",
    "description": "SPREAD LEG 1 WORKING QUANTITY"
  },
  {
    "fieldName": "SPREAD_LEG_2_WORKING_QTY",
    "fidNumber": 22171,
    "dataType": "LONG",
    "description": "SPREAD LEG 2 WORKING QUANTITY"
  },
  {
    "fieldName": "SPREAD_LEG_3_WORKING_QTY",
    "fidNumber": 22172,
    "dataType": "LONG",
    "description": "SPREAD LEG 3 WORKING QUANTITY"
  },
  {
    "fieldName": "SPREAD_LEG_4_WORKING_QTY",
    "fidNumber": 22173,
    "dataType": "LONG",
    "description": "SPREAD LEG 4 WORKING QUANTITY"
  },
  {
    "fieldName": "SPREAD_LEG_5_WORKING_QTY",
    "fidNumber": 22174,
    "dataType": "LONG",
    "description": "SPREAD LEG 5 WORKING QUANTITY"
  },
  {
    "fieldName": "SPREAD_LEG_1_PLACED_PCT",
    "fidNumber": 22175,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_1_PLACED_PCT"
  },
  {
    "fieldName": "SPREAD_LEG_2_PLACED_PCT",
    "fidNumber": 22176,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_2_PLACED_PCT"
  },
  {
    "fieldName": "SPREAD_LEG_3_PLACED_PCT",
    "fidNumber": 22177,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_3_PLACED_PCT"
  },
  {
    "fieldName": "SPREAD_LEG_4_PLACED_PCT",
    "fidNumber": 22178,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_4_PLACED_PCT"
  },
  {
    "fieldName": "SPREAD_LEG_5_PLACED_PCT",
    "fidNumber": 22179,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_5_PLACED_PCT"
  },
  {
    "fieldName": "SPREAD_LEG_1_VOL_TRADED_TODAY",
    "fidNumber": 22180,
    "dataType": "LONG",
    "description": "SPREAD_LEG_1_VOL_TRADED_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_2_VOL_TRADED_TODAY",
    "fidNumber": 22181,
    "dataType": "LONG",
    "description": "SPREAD_LEG_2_VOL_TRADED_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_3_VOL_TRADED_TODAY",
    "fidNumber": 22182,
    "dataType": "LONG",
    "description": "SPREAD_LEG_3_VOL_TRADED_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_4_VOL_TRADED_TODAY",
    "fidNumber": 22183,
    "dataType": "LONG",
    "description": "SPREAD_LEG_4_VOL_TRADED_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_5_VOL_TRADED_TODAY",
    "fidNumber": 22184,
    "dataType": "LONG",
    "description": "SPREAD_LEG_5_VOL_TRADED_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_1_AVG_PRICE_TODAY",
    "fidNumber": 22185,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_1_AVG_PRICE_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_2_AVG_PRICE_TODAY",
    "fidNumber": 22186,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_2_AVG_PRICE_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_3_AVG_PRICE_TODAY",
    "fidNumber": 22187,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_3_AVG_PRICE_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_4_AVG_PRICE_TODAY",
    "fidNumber": 22188,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_4_AVG_PRICE_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_5_AVG_PRICE_TODAY",
    "fidNumber": 22189,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_5_AVG_PRICE_TODAY"
  },
  {
    "fieldName": "SPREAD_LEG_1_LARGE_IN_SCALE_SHARES",
    "fidNumber": 22191,
    "dataType": "LONG",
    "description": "Leg 1 large in scale shares"
  },
  {
    "fieldName": "SPREAD_LEG_2_LARGE_IN_SCALE_SHARES",
    "fidNumber": 22192,
    "dataType": "LONG",
    "description": "Leg 2  large in scale shares"
  },
  {
    "fieldName": "SPREAD_LEG_1_TARGET_PCT_ADV_20",
    "fidNumber": 22193,
    "dataType": "DOUBLE",
    "description": "Leg 1 Target 20-day ADV Percent"
  },
  {
    "fieldName": "SPREAD_LEG_2_TARGET_PCT_ADV_20",
    "fidNumber": 22194,
    "dataType": "DOUBLE",
    "description": "Leg 2 Target 20-day ADV Percent"
  },
  {
    "fieldName": "SPREAD_LEG_3_TARGET_PCT_ADV_20",
    "fidNumber": 22195,
    "dataType": "DOUBLE",
    "description": "Leg 3 Target 20-day ADV Percent"
  },
  {
    "fieldName": "SPREAD_LEG_4_TARGET_PCT_ADV_20",
    "fidNumber": 22196,
    "dataType": "DOUBLE",
    "description": "Leg 4 Target 20-day ADV Percent"
  },
  {
    "fieldName": "SPREAD_LEG_5_TARGET_PCT_ADV_20",
    "fidNumber": 22197,
    "dataType": "DOUBLE",
    "description": "Leg 5 Target 20-day ADV Percent"
  },
  {
    "fieldName": "SPREAD_LEG_1_LARGE_IN_SCALE_VALUE",
    "fidNumber": 22198,
    "dataType": "LONG",
    "description": "Leg 1 Large In  Scale Value"
  },
  {
    "fieldName": "SPREAD_LEG_2_LARGE_IN_SCALE_VALUE",
    "fidNumber": 22199,
    "dataType": "LONG",
    "description": "Leg 2 Large In  Scale Value"
  },
  {
    "fieldName": "UNDER_EXPIR_DATE",
    "fidNumber": 22200,
    "dataType": "DATE",
    "description": "Underliers expiration"
  },
  {
    "fieldName": "POSITION_BLOB",
    "fidNumber": 22201,
    "dataType": "BLOB",
    "description": "Embedded blob records"
  },
  {
    "fieldName": "ORDER_BLOB",
    "fidNumber": 22202,
    "dataType": "BLOB",
    "description": "Embedded blob orders"
  },
  {
    "fieldName": "MGN_CALC_TRACE",
    "fidNumber": 22203,
    "dataType": "LONG",
    "description": "enable margin record tracing"
  },
  {
    "fieldName": "RISKSRV_IMR",
    "fidNumber": 22204,
    "dataType": "DOUBLE",
    "description": "Risk Server Initial"
  },
  {
    "fieldName": "RISKSRV_MMR",
    "fidNumber": 22205,
    "dataType": "DOUBLE",
    "description": "Risk Server Maintenance"
  },
  {
    "fieldName": "ESMA_LIS",
    "fidNumber": 22300,
    "dataType": "DOUBLE",
    "description": "ESMA LIS"
  },
  {
    "fieldName": "DARK_POOL_SUSPENSION_INDICATOR",
    "fidNumber": 22301,
    "dataType": "STRING",
    "description": "Dark Pool Suspension Indicator"
  },
  {
    "fieldName": "ORIG_VIRTUAL_PRICE_TYPE",
    "fidNumber": 22500,
    "dataType": "INT",
    "description": "Orig. Virtual Prc Type"
  },
  {
    "fieldName": "ESMA_ILS",
    "fidNumber": 22501,
    "dataType": "STRING",
    "description": "ESMA Liquidity Ind"
  },
  {
    "fieldName": "ESMA_PRE_TRADE_LIS",
    "fidNumber": 22502,
    "dataType": "DOUBLE",
    "description": "ESMA Pre-Trade LIS"
  },
  {
    "fieldName": "ESMA_PRE_TRADE_SSTI",
    "fidNumber": 22503,
    "dataType": "DOUBLE",
    "description": "ESMA Pre-Trade SSTI"
  },
  {
    "fieldName": "ESMA_POST_TRADE_LIS",
    "fidNumber": 22504,
    "dataType": "DOUBLE",
    "description": "ESMA Post-Trade LIS"
  },
  {
    "fieldName": "ESMA_POST_TRADE_SSTI",
    "fidNumber": 22505,
    "dataType": "DOUBLE",
    "description": "ESMA Post-Trade SSTI"
  },
  {
    "fieldName": "ESMA_DOUBLE_VOL_CAP",
    "fidNumber": 22506,
    "dataType": "DOUBLE",
    "description": "ESMA Double Volume Cap"
  },
  {
    "fieldName": "OPT_CALC_MODEL",
    "fidNumber": 22900,
    "dataType": "INT",
    "description": ""
  },
  {
    "fieldName": "DIV_DATE_1",
    "fidNumber": 22901,
    "dataType": "DATE",
    "description": ""
  },
  {
    "fieldName": "DIV_DATE_2",
    "fidNumber": 22902,
    "dataType": "DATE",
    "description": ""
  },
  {
    "fieldName": "DIV_DATE_3",
    "fidNumber": 22903,
    "dataType": "DATE",
    "description": ""
  },
  {
    "fieldName": "DIV_DATE_4",
    "fidNumber": 22904,
    "dataType": "DATE",
    "description": ""
  },
  {
    "fieldName": "DIV_DATE_5",
    "fidNumber": 22905,
    "dataType": "DATE",
    "description": ""
  },
  {
    "fieldName": "DIV_DATE_6",
    "fidNumber": 22906,
    "dataType": "DATE",
    "description": ""
  },
  {
    "fieldName": "DIV_AMOUNT_1",
    "fidNumber": 22907,
    "dataType": "DOUBLE",
    "description": ""
  },
  {
    "fieldName": "DIV_AMOUNT_2",
    "fidNumber": 22908,
    "dataType": "DOUBLE",
    "description": ""
  },
  {
    "fieldName": "DIV_AMOUNT_3",
    "fidNumber": 22909,
    "dataType": "DOUBLE",
    "description": ""
  },
  {
    "fieldName": "DIV_AMOUNT_4",
    "fidNumber": 22910,
    "dataType": "DOUBLE",
    "description": ""
  },
  {
    "fieldName": "DIV_AMOUNT_5",
    "fidNumber": 22911,
    "dataType": "DOUBLE",
    "description": ""
  },
  {
    "fieldName": "DIV_AMOUNT_6",
    "fidNumber": 22912,
    "dataType": "DOUBLE",
    "description": ""
  },
  {
    "fieldName": "INPUT_PRICE",
    "fidNumber": 22913,
    "dataType": "DOUBLE",
    "description": ""
  },
  {
    "fieldName": "BADGE_ID",
    "fidNumber": 22914,
    "dataType": "STRING",
    "description": "Badge ID"
  },
  {
    "fieldName": "ROUTE_PROPERTY_NAME",
    "fidNumber": 22915,
    "dataType": "STRING",
    "description": "Route Property Name"
  },
  {
    "fieldName": "ROUTE_PROPERTY_VALUE",
    "fidNumber": 22916,
    "dataType": "STRING",
    "description": "Route Property Value"
  },
  {
    "fieldName": "ROUTE_IS_EMULATED",
    "fidNumber": 22917,
    "dataType": "LONG",
    "description": "Route IsEmulated Flag"
  },
  {
    "fieldName": "ROUTE_IS_HIDDEN",
    "fidNumber": 22918,
    "dataType": "LONG",
    "description": "Route IsHidden Flag"
  },
  {
    "fieldName": "ROUTE_OPEN_TIME",
    "fidNumber": 22919,
    "dataType": "LONG",
    "description": "Route Open Time"
  },
  {
    "fieldName": "ROUTE_CLOSE_TIME",
    "fidNumber": 22920,
    "dataType": "LONG",
    "description": "Route Close Time"
  },
  {
    "fieldName": "MIN_ORDER_RECYCLE_TIME",
    "fidNumber": 22921,
    "dataType": "LONG",
    "description": "MinOrderRecycleTime"
  },
  {
    "fieldName": "PM_ACCOUNT",
    "fidNumber": 22922,
    "dataType": "STRING",
    "description": "PM Account"
  },
  {
    "fieldName": "ACT_MODIFIER_1",
    "fidNumber": 22923,
    "dataType": "STRING",
    "description": "Modifier 1"
  },
  {
    "fieldName": "ACT_MODIFIER_2",
    "fidNumber": 22924,
    "dataType": "STRING",
    "description": "Modifier 2"
  },
  {
    "fieldName": "ACT_MODIFIER_3",
    "fidNumber": 22925,
    "dataType": "STRING",
    "description": "Modifier 3"
  },
  {
    "fieldName": "ACT_MODIFIER_4",
    "fidNumber": 22926,
    "dataType": "STRING",
    "description": "Modifier 4"
  },
  {
    "fieldName": "ACT_EXECUTING_PARTY",
    "fidNumber": 22927,
    "dataType": "STRING",
    "description": "ACT Executing Party"
  },
  {
    "fieldName": "BROKER_ORDER_LIMIT_PRICE",
    "fidNumber": 22928,
    "dataType": "LPACK",
    "description": "Broker Order Limit Price"
  },
  {
    "fieldName": "PARENT_CHILD_LIMIT_STATUS",
    "fidNumber": 22929,
    "dataType": "STRING",
    "description": "Parent/Child Limit Status"
  },
  {
    "fieldName": "ALL_SYMBOL_DATA",
    "fidNumber": 23000,
    "dataType": "BLOB",
    "description": "All Symbol Data"
  },
  {
    "fieldName": "SERVER_TIME_ZONE",
    "fidNumber": 23001,
    "dataType": "STRING",
    "description": "Server Time Zone"
  },
  {
    "fieldName": "UPDATE_FLAGS",
    "fidNumber": 23005,
    "dataType": "BLOB",
    "description": "Symbol field flags"
  },
  {
    "fieldName": "SETTLEMENT_DATE",
    "fidNumber": 23006,
    "dataType": "DATE",
    "description": "Settlement Date"
  },
  {
    "fieldName": "SYMBOL_BITFIELD",
    "fidNumber": 23010,
    "dataType": "LONG",
    "description": "Symbol status bits"
  },
  {
    "fieldName": "LVAL_PRICE",
    "fidNumber": 23011,
    "dataType": "LONG",
    "description": "Lval of a price"
  },
  {
    "fieldName": "WBASE_PRICE",
    "fidNumber": 23012,
    "dataType": "LONG",
    "description": "Base of price"
  },
  {
    "fieldName": "ACCOUNT_CBP",
    "fidNumber": 23013,
    "dataType": "DOUBLE",
    "description": "Account CBP"
  },
  {
    "fieldName": "EXTRA_CBP",
    "fidNumber": 23014,
    "dataType": "DOUBLE",
    "description": "CBP Extra"
  },
  {
    "fieldName": "USED_CBP",
    "fidNumber": 23015,
    "dataType": "DOUBLE",
    "description": "Mgn Maint"
  },
  {
    "fieldName": "MGN_LONG_INIT",
    "fidNumber": 23016,
    "dataType": "DOUBLE",
    "description": "Init Mgn % L"
  },
  {
    "fieldName": "MGN_LONG_MAINT",
    "fidNumber": 23017,
    "dataType": "DOUBLE",
    "description": "Maint Mgn % L"
  },
  {
    "fieldName": "MGN_SHORT_INIT",
    "fidNumber": 23018,
    "dataType": "DOUBLE",
    "description": "Init Mgn % S"
  },
  {
    "fieldName": "MGN_SHORT_MAINT",
    "fidNumber": 23019,
    "dataType": "DOUBLE",
    "description": "Maint Mgn % S"
  },
  {
    "fieldName": "SOLICITED",
    "fidNumber": 23020,
    "dataType": "STRING",
    "description": "Solicited"
  },
  {
    "fieldName": "ACCT_DESC",
    "fidNumber": 23021,
    "dataType": "STRING",
    "description": "Acct Desc"
  },
  {
    "fieldName": "REP_NAME",
    "fidNumber": 23022,
    "dataType": "STRING",
    "description": "Rep's Name"
  },
  {
    "fieldName": "COMMISSION",
    "fidNumber": 23023,
    "dataType": "DOUBLE",
    "description": "Commission"
  },
  {
    "fieldName": "REP_NO",
    "fidNumber": 23024,
    "dataType": "LONG",
    "description": "Rep's #"
  },
  {
    "fieldName": "STRING_1",
    "fidNumber": 23025,
    "dataType": "STRING",
    "description": "String 1"
  },
  {
    "fieldName": "STRING_2",
    "fidNumber": 23026,
    "dataType": "STRING",
    "description": "String 2"
  },
  {
    "fieldName": "STRING_3",
    "fidNumber": 23027,
    "dataType": "STRING",
    "description": "String 3"
  },
  {
    "fieldName": "STRING_4",
    "fidNumber": 23028,
    "dataType": "STRING",
    "description": "String 4"
  },
  {
    "fieldName": "STRING_5",
    "fidNumber": 23029,
    "dataType": "STRING",
    "description": "String 5"
  },
  {
    "fieldName": "STRING_6",
    "fidNumber": 23030,
    "dataType": "STRING",
    "description": "String 6"
  },
  {
    "fieldName": "STRING_7",
    "fidNumber": 23031,
    "dataType": "STRING",
    "description": "String 7"
  },
  {
    "fieldName": "STRING_8",
    "fidNumber": 23032,
    "dataType": "STRING",
    "description": "String 8"
  },
  {
    "fieldName": "STRING_9",
    "fidNumber": 23033,
    "dataType": "STRING",
    "description": "String 9"
  },
  {
    "fieldName": "STRING_10",
    "fidNumber": 23034,
    "dataType": "STRING",
    "description": "String 10"
  },
  {
    "fieldName": "SEC_TYPE",
    "fidNumber": 23035,
    "dataType": "STRING",
    "description": "Sec Type"
  },
  {
    "fieldName": "PENDING_MARGIN",
    "fidNumber": 23036,
    "dataType": "DOUBLE",
    "description": "Mgn Pending"
  },
  {
    "fieldName": "TOTAL_USED_CBP",
    "fidNumber": 23037,
    "dataType": "DOUBLE",
    "description": "Total Used CBP"
  },
  {
    "fieldName": "ENFORCE_5MIN",
    "fidNumber": 23038,
    "dataType": "INT",
    "description": "Enforce 5 min Rule"
  },
  {
    "fieldName": "ENFORCE_MARGIN",
    "fidNumber": 23039,
    "dataType": "INT",
    "description": "Enforce Margin"
  },
  {
    "fieldName": "ENFORCE_SHORT",
    "fidNumber": 23040,
    "dataType": "INT",
    "description": "Enforce Short Sales"
  },
  {
    "fieldName": "CBP_REMAINING",
    "fidNumber": 23041,
    "dataType": "DOUBLE",
    "description": "CBP Remaining"
  },
  {
    "fieldName": "USER_BEST_BID",
    "fidNumber": 23042,
    "dataType": "LPACK",
    "description": "User Bid"
  },
  {
    "fieldName": "USER_BEST_ASK",
    "fidNumber": 23043,
    "dataType": "LPACK",
    "description": "User Ask"
  },
  {
    "fieldName": "USER_BEST_BID_SIZE",
    "fidNumber": 23044,
    "dataType": "LONG",
    "description": "User Bid Size"
  },
  {
    "fieldName": "USER_BEST_ASK_SIZE",
    "fidNumber": 23045,
    "dataType": "LONG",
    "description": "User Ask Size"
  },
  {
    "fieldName": "USER_BEST_BID_ORDER_ID",
    "fidNumber": 23046,
    "dataType": "STRING",
    "description": "User Bid Order ID"
  },
  {
    "fieldName": "USER_BEST_ASK_ORDER_ID",
    "fidNumber": 23047,
    "dataType": "STRING",
    "description": "User Ask Order ID"
  },
  {
    "fieldName": "OPTION_COVERED",
    "fidNumber": 23048,
    "dataType": "LONG",
    "description": "Option Covered"
  },
  {
    "fieldName": "TO_OPEN_POS",
    "fidNumber": 23049,
    "dataType": "LONG",
    "description": "Open/Close Pos"
  },
  {
    "fieldName": "FOR_FIRM",
    "fidNumber": 23050,
    "dataType": "LONG",
    "description": "Firm/Customer"
  },
  {
    "fieldName": "IS_SOLICITED",
    "fidNumber": 23051,
    "dataType": "LONG",
    "description": "Solicited"
  },
  {
    "fieldName": "STOP_PRICE",
    "fidNumber": 23052,
    "dataType": "LPACK",
    "description": "Stop Price"
  },
  {
    "fieldName": "FIRM_NAME",
    "fidNumber": 23053,
    "dataType": "STRING",
    "description": "Firm Name"
  },
  {
    "fieldName": "TRD_TIME",
    "fidNumber": 23054,
    "dataType": "TIME",
    "description": "Time of trade"
  },
  {
    "fieldName": "SECURITY_TYPE",
    "fidNumber": 23055,
    "dataType": "STRING",
    "description": "Order Properties"
  },
  {
    "fieldName": "ALLOW_UNMARKED_SHORT",
    "fidNumber": 23056,
    "dataType": "INT",
    "description": "Allow Unmarked Short"
  },
  {
    "fieldName": "PENDING_SELL_POS",
    "fidNumber": 23057,
    "dataType": "DOUBLE",
    "description": "Pending Sells"
  },
  {
    "fieldName": "AVERAGE_PRICE",
    "fidNumber": 23058,
    "dataType": "DOUBLE",
    "description": "Average price"
  },
  {
    "fieldName": "MMR",
    "fidNumber": 23059,
    "dataType": "DOUBLE",
    "description": "MMR"
  },
  {
    "fieldName": "MARKETVALUE_0",
    "fidNumber": 23060,
    "dataType": "DOUBLE",
    "description": "Morning MV"
  },
  {
    "fieldName": "MMR_0",
    "fidNumber": 23061,
    "dataType": "DOUBLE",
    "description": "Morning MMR"
  },
  {
    "fieldName": "EXCESS_EQ_0",
    "fidNumber": 23062,
    "dataType": "DOUBLE",
    "description": "Morning Excess Eq."
  },
  {
    "fieldName": "MIN_BALANCE",
    "fidNumber": 23063,
    "dataType": "DOUBLE",
    "description": "MinBalance"
  },
  {
    "fieldName": "POSITION",
    "fidNumber": 23064,
    "dataType": "DOUBLE",
    "description": "Position"
  },
  {
    "fieldName": "ACCT_TYPE",
    "fidNumber": 23065,
    "dataType": "LONG",
    "description": "Acct Type"
  },
  {
    "fieldName": "EXCESS_EQ",
    "fidNumber": 23066,
    "dataType": "DOUBLE",
    "description": "Excess Equity"
  },
  {
    "fieldName": "PENDING_BUY_POS",
    "fidNumber": 23067,
    "dataType": "DOUBLE",
    "description": "Pending Buys"
  },
  {
    "fieldName": "LAST_FILL_PRICE",
    "fidNumber": 23068,
    "dataType": "LPACK",
    "description": "Last Fill Price"
  },
  {
    "fieldName": "ORDER_DETAILS",
    "fidNumber": 23069,
    "dataType": "STRING",
    "description": "Order Details"
  },
  {
    "fieldName": "MAX_ORDER_SIZE",
    "fidNumber": 23070,
    "dataType": "LONG",
    "description": "Max Order Size"
  },
  {
    "fieldName": "USER_PERM_CUST_FLAGS",
    "fidNumber": 23071,
    "dataType": "LONG",
    "description": "Customer Attributes"
  },
  {
    "fieldName": "CASH_BALANCE_ADJ",
    "fidNumber": 23072,
    "dataType": "DOUBLE",
    "description": "Cash balance adj"
  },
  {
    "fieldName": "MMR_0_ADJ",
    "fidNumber": 23073,
    "dataType": "DOUBLE",
    "description": "Overnight MMR Release"
  },
  {
    "fieldName": "EXCESS_EQ_ADJ",
    "fidNumber": 23074,
    "dataType": "DOUBLE",
    "description": "Excess Equity Adj"
  },
  {
    "fieldName": "SCALPED_LOSS",
    "fidNumber": 23075,
    "dataType": "DOUBLE",
    "description": "Scalped Loss"
  },
  {
    "fieldName": "MARGIN_PRICE_LONG",
    "fidNumber": 23076,
    "dataType": "DOUBLE",
    "description": "Mgn Prc Long"
  },
  {
    "fieldName": "MARGIN_PRICE_SHORT",
    "fidNumber": 23077,
    "dataType": "DOUBLE",
    "description": "Mgn Prc Short"
  },
  {
    "fieldName": "MARGIN_PRICE_LONG0",
    "fidNumber": 23078,
    "dataType": "DOUBLE",
    "description": "Mgn Prc Long0"
  },
  {
    "fieldName": "MARGIN_PRICE_SHORT0",
    "fidNumber": 23079,
    "dataType": "DOUBLE",
    "description": "Mgn Prc Short0"
  },
  {
    "fieldName": "RAW_PRICE_LONG0",
    "fidNumber": 23080,
    "dataType": "DOUBLE",
    "description": "Orig Prc Long0"
  },
  {
    "fieldName": "RAW_PRICE_SHORT0",
    "fidNumber": 23081,
    "dataType": "DOUBLE",
    "description": "Orig Prc Short0"
  },
  {
    "fieldName": "RAW_NET_AVG_PRICE",
    "fidNumber": 23082,
    "dataType": "DOUBLE",
    "description": "Raw Net Price"
  },
  {
    "fieldName": "RAW_PL_TOTAL",
    "fidNumber": 23083,
    "dataType": "DOUBLE",
    "description": "Raw Total P&L"
  },
  {
    "fieldName": "STOP_DELTA",
    "fidNumber": 23084,
    "dataType": "LPACK",
    "description": "Stop Delta"
  },
  {
    "fieldName": "MARGIN_SUBRULE_TYPE",
    "fidNumber": 23085,
    "dataType": "LONG",
    "description": "Margin Subrule Type"
  },
  {
    "fieldName": "MARGIN_VALUE_TYPE",
    "fidNumber": 23086,
    "dataType": "LONG",
    "description": "Margin Value Type"
  },
  {
    "fieldName": "MARGIN_VALUE",
    "fidNumber": 23087,
    "dataType": "DOUBLE",
    "description": "Margin Value"
  },
  {
    "fieldName": "MARGIN_RELEASE_PCT",
    "fidNumber": 23088,
    "dataType": "DOUBLE",
    "description": "Margin Release %"
  },
  {
    "fieldName": "NETPOS_ORIGINAL_OVERNIGHT",
    "fidNumber": 23089,
    "dataType": "DOUBLE",
    "description": "Orig. Position"
  },
  {
    "fieldName": "HAS_CLOSED_OVERNIGHT_POS",
    "fidNumber": 23090,
    "dataType": "INT",
    "description": "Has closed overnight pos"
  },
  {
    "fieldName": "SHORTEST_INTRADAY_POSITION",
    "fidNumber": 23091,
    "dataType": "DOUBLE",
    "description": "Lowest Position"
  },
  {
    "fieldName": "LONGEST_INTRADAY_POSITION",
    "fidNumber": 23092,
    "dataType": "DOUBLE",
    "description": "Highest Position"
  },
  {
    "fieldName": "ACCOUNT_EQUITY",
    "fidNumber": 23093,
    "dataType": "DOUBLE",
    "description": "Account Equity"
  },
  {
    "fieldName": "ACCOUNT_EQUITY_DELTA",
    "fidNumber": 23094,
    "dataType": "DOUBLE",
    "description": "Change in Equity"
  },
  {
    "fieldName": "FUTURE_NET_MMR",
    "fidNumber": 23095,
    "dataType": "DOUBLE",
    "description": "Futures MMR"
  },
  {
    "fieldName": "FUTURE_NET_IMR",
    "fidNumber": 23096,
    "dataType": "DOUBLE",
    "description": "Futures Init. Req."
  },
  {
    "fieldName": "FUTURE_MAINT_EXCESS",
    "fidNumber": 23097,
    "dataType": "DOUBLE",
    "description": "Futures Maint. Excess"
  },
  {
    "fieldName": "FUTURE_INITIAL_EXCESS",
    "fidNumber": 23098,
    "dataType": "DOUBLE",
    "description": "Futures Init. Excess"
  },
  {
    "fieldName": "DISCRETION_QTY_THRESHOLD",
    "fidNumber": 23099,
    "dataType": "LONG",
    "description": "Disc. Qty Threshold"
  },
  {
    "fieldName": "RESERVE_SHOWSIZE",
    "fidNumber": 23100,
    "dataType": "LONG",
    "description": "Size to Show"
  },
  {
    "fieldName": "RESERVE_SHOW_DELTA",
    "fidNumber": 23101,
    "dataType": "LONG",
    "description": "Reserve Delta"
  },
  {
    "fieldName": "RESERVE_LOWER_LIMIT",
    "fidNumber": 23102,
    "dataType": "LPACK",
    "description": "Lower Limit"
  },
  {
    "fieldName": "RESERVE_UPPER_LIMIT",
    "fidNumber": 23103,
    "dataType": "LPACK",
    "description": "Upper Limit"
  },
  {
    "fieldName": "REPLACE_ADJ_VOLUME",
    "fidNumber": 23104,
    "dataType": "LONG",
    "description": "Adjust Volume?"
  },
  {
    "fieldName": "REPLACE_CANCEL_ID",
    "fidNumber": 23105,
    "dataType": "STRING",
    "description": "Cancel ID"
  },
  {
    "fieldName": "REPLACE_NEW_ORDER",
    "fidNumber": 23106,
    "dataType": "STRING",
    "description": "Replacement Order Blob"
  },
  {
    "fieldName": "ORIGINAL_VOLUME",
    "fidNumber": 23107,
    "dataType": "LONG",
    "description": "Orig Vol"
  },
  {
    "fieldName": "WEIGHT",
    "fidNumber": 23108,
    "dataType": "DOUBLE",
    "description": "Weight"
  },
  {
    "fieldName": "WEIGHT_BID",
    "fidNumber": 23109,
    "dataType": "DOUBLE",
    "description": "Weighted Bid"
  },
  {
    "fieldName": "WEIGHT_ASK",
    "fidNumber": 23110,
    "dataType": "DOUBLE",
    "description": "Weighted Ask"
  },
  {
    "fieldName": "WEIGHT_PRICE",
    "fidNumber": 23111,
    "dataType": "DOUBLE",
    "description": "Weighted Price"
  },
  {
    "fieldName": "WEIGHT_OBSOLETE",
    "fidNumber": 23112,
    "dataType": "LONG",
    "description": "Unused"
  },
  {
    "fieldName": "WEIGHT_NETCHG",
    "fidNumber": 23113,
    "dataType": "DOUBLE",
    "description": "Weighted Net Change"
  },
  {
    "fieldName": "WEIGHT_HSTCLOSE",
    "fidNumber": 23114,
    "dataType": "DOUBLE",
    "description": "Weighted Close"
  },
  {
    "fieldName": "WEIGHT_POSDIVWEIGHT",
    "fidNumber": 23115,
    "dataType": "DOUBLE",
    "description": "Integral Baskets"
  },
  {
    "fieldName": "WEIGHT_POSMODWEIGHT",
    "fidNumber": 23116,
    "dataType": "DOUBLE",
    "description": "Basket Excess"
  },
  {
    "fieldName": "WEIGHT_BASKET_POSITION",
    "fidNumber": 23117,
    "dataType": "DOUBLE",
    "description": "Basket Position"
  },
  {
    "fieldName": "BASKET_TARGET",
    "fidNumber": 23118,
    "dataType": "DOUBLE",
    "description": "Basket Target"
  },
  {
    "fieldName": "BASKET_TARGET_RESIDUAL",
    "fidNumber": 23119,
    "dataType": "DOUBLE",
    "description": "Basket Residual"
  },
  {
    "fieldName": "EXECUTE_AMOUNT",
    "fidNumber": 23120,
    "dataType": "LONG",
    "description": "Execute Amount"
  },
  {
    "fieldName": "EXECUTE_COST",
    "fidNumber": 23121,
    "dataType": "DOUBLE",
    "description": "Execute Cost"
  },
  {
    "fieldName": "EXECUTE_PRICE_TYPE",
    "fidNumber": 23122,
    "dataType": "LONG",
    "description": "Execute Price Type"
  },
  {
    "fieldName": "EXECUTE_SELLSHORT",
    "fidNumber": 23123,
    "dataType": "LONG",
    "description": "Execute Short"
  },
  {
    "fieldName": "EXECUTE_DETAILS",
    "fidNumber": 23124,
    "dataType": "STRING",
    "description": "Execute Details"
  },
  {
    "fieldName": "EXECUTE_FREEZE",
    "fidNumber": 23125,
    "dataType": "LONG",
    "description": "Freeze"
  },
  {
    "fieldName": "MARKED_POSITION",
    "fidNumber": 23126,
    "dataType": "DOUBLE",
    "description": "Marked Position"
  },
  {
    "fieldName": "EXECUTE_PRICE",
    "fidNumber": 23127,
    "dataType": "LPACK",
    "description": "Execute Price"
  },
  {
    "fieldName": "BASKET_ORDERS",
    "fidNumber": 23128,
    "dataType": "STRING",
    "description": "Basket Orders"
  },
  {
    "fieldName": "BASKET_ID",
    "fidNumber": 23129,
    "dataType": "STRING",
    "description": "Internal Basket ID"
  },
  {
    "fieldName": "ESTIMATED_ORDER_COST",
    "fidNumber": 23130,
    "dataType": "DOUBLE",
    "description": "Estimated Order Cost"
  },
  {
    "fieldName": "MMR_0_NON_DAYTRADE_ADJ",
    "fidNumber": 23131,
    "dataType": "DOUBLE",
    "description": "Overnight MMR Release (Non DT)"
  },
  {
    "fieldName": "TOTAL_CROSSES_PLACED",
    "fidNumber": 23133,
    "dataType": "DOUBLE",
    "description": "Total Crosses Attempted"
  },
  {
    "fieldName": "NET_CROSS_IMBALANCE",
    "fidNumber": 23134,
    "dataType": "DOUBLE",
    "description": "Net Cross Imbalance"
  },
  {
    "fieldName": "BUY_COUNT_TODAY",
    "fidNumber": 23135,
    "dataType": "LONG",
    "description": "Buys Today"
  },
  {
    "fieldName": "SELL_COUNT_TODAY",
    "fidNumber": 23136,
    "dataType": "LONG",
    "description": "Sells Today"
  },
  {
    "fieldName": "TOTAL_SHARES_CROSSED",
    "fidNumber": 23137,
    "dataType": "DOUBLE",
    "description": "Total Shares Crossed"
  },
  {
    "fieldName": "SHARES_CROSSED_BOUGHT",
    "fidNumber": 23138,
    "dataType": "DOUBLE",
    "description": "Shares Crossed/Bought"
  },
  {
    "fieldName": "SHARES_CROSSED_SOLD",
    "fidNumber": 23139,
    "dataType": "DOUBLE",
    "description": "Shares Crossed/Sold"
  },
  {
    "fieldName": "BUY_FILLS_TODAY",
    "fidNumber": 23140,
    "dataType": "DOUBLE",
    "description": "Shares Bought"
  },
  {
    "fieldName": "SELL_FILLS_TODAY",
    "fidNumber": 23141,
    "dataType": "DOUBLE",
    "description": "Shares Sold Total"
  },
  {
    "fieldName": "BUY_VALUE_TODAY",
    "fidNumber": 23142,
    "dataType": "DOUBLE",
    "description": "Cost of Buys"
  },
  {
    "fieldName": "SELL_VALUE_TODAY",
    "fidNumber": 23143,
    "dataType": "DOUBLE",
    "description": "Cost of All Sells"
  },
  {
    "fieldName": "AVG_BUY_PRICE",
    "fidNumber": 23144,
    "dataType": "DOUBLE",
    "description": "Avg Buy Price"
  },
  {
    "fieldName": "AVG_SELL_PRICE",
    "fidNumber": 23145,
    "dataType": "DOUBLE",
    "description": "Avg Sell Price"
  },
  {
    "fieldName": "BUY_SELL_DIFF",
    "fidNumber": 23146,
    "dataType": "DOUBLE",
    "description": "Buy/Sell Diff"
  },
  {
    "fieldName": "SELL_FILLS_TODAY_SHORT",
    "fidNumber": 23147,
    "dataType": "DOUBLE",
    "description": "Shares Sold Short"
  },
  {
    "fieldName": "SELL_FILLS_TODAY_NONSHORT",
    "fidNumber": 23148,
    "dataType": "DOUBLE",
    "description": "Shares Sold (non-Short)"
  },
  {
    "fieldName": "SELL_VALUE_TODAY_SHORT",
    "fidNumber": 23149,
    "dataType": "DOUBLE",
    "description": "Cost of Short Sells"
  },
  {
    "fieldName": "SELL_VALUE_TODAY_NONSHORT",
    "fidNumber": 23150,
    "dataType": "DOUBLE",
    "description": "Cost of Sells (non-Short)"
  },
  {
    "fieldName": "AVG_SELL_PRICE_SHORT",
    "fidNumber": 23151,
    "dataType": "DOUBLE",
    "description": "Avg Sell Short Price"
  },
  {
    "fieldName": "AVG_SELL_PRICE_NONSHORT",
    "fidNumber": 23152,
    "dataType": "DOUBLE",
    "description": "Avg Sell Price (non-Short)"
  },
  {
    "fieldName": "FILL_ID",
    "fidNumber": 23153,
    "dataType": "STRING",
    "description": "Fill ID assigned by TASK"
  },
  {
    "fieldName": "TRADE_REPORT_ID",
    "fidNumber": 23154,
    "dataType": "STRING",
    "description": "Trade Report ID"
  },
  {
    "fieldName": "TICKET_ID",
    "fidNumber": 23155,
    "dataType": "STRING",
    "description": "Ticket ID"
  },
  {
    "fieldName": "SUBORDER_ID",
    "fidNumber": 23156,
    "dataType": "STRING",
    "description": "Suborder ID"
  },
  {
    "fieldName": "SHARES_ALLOCATED",
    "fidNumber": 23157,
    "dataType": "LONG",
    "description": "Shares Allocated"
  },
  {
    "fieldName": "LINKED_ORDER_ID",
    "fidNumber": 23158,
    "dataType": "STRING",
    "description": "ID of Linked Order"
  },
  {
    "fieldName": "LINKED_ORDER_RELATIONSHIP",
    "fidNumber": 23159,
    "dataType": "LONG",
    "description": "Linked Order Relationship"
  },
  {
    "fieldName": "LINKED_ORDER_CANCELLATION",
    "fidNumber": 23160,
    "dataType": "LONG",
    "description": "Linked Order Cancellation"
  },
  {
    "fieldName": "LINKED_ORDER_TYPE",
    "fidNumber": 23161,
    "dataType": "LONG",
    "description": "Linked Order Type"
  },
  {
    "fieldName": "LINKED_ORDER_PRICE",
    "fidNumber": 23162,
    "dataType": "LPACK",
    "description": "Linked Order Price"
  },
  {
    "fieldName": "SPREAD_LINK_ID",
    "fidNumber": 23163,
    "dataType": "STRING",
    "description": "Spread Link Id"
  },
  {
    "fieldName": "BULK_ORDER_ID",
    "fidNumber": 23164,
    "dataType": "STRING",
    "description": "Bulk Order ID"
  },
  {
    "fieldName": "ORDER_ALERT_PRESENT",
    "fidNumber": 23165,
    "dataType": "LONG",
    "description": "Order Alert Indicator"
  },
  {
    "fieldName": "EXECUTING_BROKER",
    "fidNumber": 23166,
    "dataType": "STRING",
    "description": "Exec Broker"
  },
  {
    "fieldName": "ALLOCATED_VALUE",
    "fidNumber": 23167,
    "dataType": "DOUBLE",
    "description": "Allocated Value"
  },
  {
    "fieldName": "EXECUTE_ROUTE",
    "fidNumber": 23168,
    "dataType": "STRING",
    "description": "Execute Route"
  },
  {
    "fieldName": "EXECUTE_STRATEGY",
    "fidNumber": 23169,
    "dataType": "STRING",
    "description": "Execute Strategy"
  },
  {
    "fieldName": "MAKE_MKT_BID_OFFSET",
    "fidNumber": 23170,
    "dataType": "DOUBLE",
    "description": "Bid Offset"
  },
  {
    "fieldName": "MAKE_MKT_OFFER_OFFSET",
    "fidNumber": 23171,
    "dataType": "DOUBLE",
    "description": "Offer Offset"
  },
  {
    "fieldName": "MAKE_MKT_BID_YLD_OFFSET",
    "fidNumber": 23172,
    "dataType": "DOUBLE",
    "description": "Bid Yld Offset"
  },
  {
    "fieldName": "MAKE_MKT_OFFER_YLD_OFFSET",
    "fidNumber": 23173,
    "dataType": "DOUBLE",
    "description": "Offer Yld Offset"
  },
  {
    "fieldName": "MAKE_MKT_REF_SYM",
    "fidNumber": 23174,
    "dataType": "STRING",
    "description": "Reference Symbol"
  },
  {
    "fieldName": "MARGIN_SOURCE",
    "fidNumber": 23180,
    "dataType": "LONG",
    "description": "Margin Source"
  },
  {
    "fieldName": "MARGIN_RULESET_ID",
    "fidNumber": 23181,
    "dataType": "LONG",
    "description": "Margin Ruleset ID"
  },
  {
    "fieldName": "MARGIN_RULESET_NAME",
    "fidNumber": 23182,
    "dataType": "STRING",
    "description": "Margin Ruleset Name"
  },
  {
    "fieldName": "MARGIN_RULE_RTH_DIVISOR",
    "fidNumber": 23183,
    "dataType": "DOUBLE",
    "description": "Margin Rule RTH Divisor"
  },
  {
    "fieldName": "SOURCE_PORTFOLIO",
    "fidNumber": 23184,
    "dataType": "STRING",
    "description": "Source Portfolio"
  },
  {
    "fieldName": "ORDER_COUNT_TODAY",
    "fidNumber": 23189,
    "dataType": "LONG",
    "description": "Number of Orders"
  },
  {
    "fieldName": "SHORT_LOCATE_ID",
    "fidNumber": 23190,
    "dataType": "STRING",
    "description": "Short Locate ID"
  },
  {
    "fieldName": "ROUTED_TIME",
    "fidNumber": 23191,
    "dataType": "DOUBLE",
    "description": "Routed Time"
  },
  {
    "fieldName": "PENDING_ACCT_MARGIN",
    "fidNumber": 23192,
    "dataType": "DOUBLE",
    "description": "Pending Acct Margin"
  },
  {
    "fieldName": "TICKET_MARKUP",
    "fidNumber": 23193,
    "dataType": "LPACK",
    "description": "Staged Order Ticket Markup"
  },
  {
    "fieldName": "TICKET_STEPOUT_AMT",
    "fidNumber": 23194,
    "dataType": "DOUBLE",
    "description": "Ticket Stepout Amt"
  },
  {
    "fieldName": "TICKET_STEPOUT_AMT_TYPE",
    "fidNumber": 23195,
    "dataType": "INT",
    "description": "Ticket Stepout Amt Type"
  },
  {
    "fieldName": "TICKET_STEPOUT_VOL_TRADED",
    "fidNumber": 23196,
    "dataType": "LONG",
    "description": "Ticket Stepout Vol Traded"
  },
  {
    "fieldName": "TICKET_STEPOUT_AVG_PRICE",
    "fidNumber": 23197,
    "dataType": "DOUBLE",
    "description": "Ticket Stepout Avg Price"
  },
  {
    "fieldName": "WORKED_ORDER_STATUS",
    "fidNumber": 23198,
    "dataType": "LONG",
    "description": "Worked Order Status"
  },
  {
    "fieldName": "ROUTING_BBCD",
    "fidNumber": 23199,
    "dataType": "STRING",
    "description": "Sub-Account"
  },
  {
    "fieldName": "COND_SYMBOL",
    "fidNumber": 23200,
    "dataType": "STRING",
    "description": "Cond Symbol"
  },
  {
    "fieldName": "COND_PRICE_FIELD",
    "fidNumber": 23201,
    "dataType": "LONG",
    "description": "Cond Price Field"
  },
  {
    "fieldName": "COND_PRICE_RELATION",
    "fidNumber": 23202,
    "dataType": "LONG",
    "description": "Cond Price Relation"
  },
  {
    "fieldName": "COND_TRIGGER_VALUE",
    "fidNumber": 23203,
    "dataType": "DOUBLE",
    "description": "Cond Trigger Value"
  },
  {
    "fieldName": "COND_ORDER",
    "fidNumber": 23204,
    "dataType": "STRING",
    "description": "Cond Order"
  },
  {
    "fieldName": "CHANGE_NO",
    "fidNumber": 23205,
    "dataType": "LONG",
    "description": "Change Number"
  },
  {
    "fieldName": "TRADER_CAPACITY",
    "fidNumber": 23206,
    "dataType": "STRING",
    "description": "Trader capacity"
  },
  {
    "fieldName": "ARCA_BEST_BID1",
    "fidNumber": 23207,
    "dataType": "LPACK",
    "description": "Arca Best Bid"
  },
  {
    "fieldName": "ARCA_BEST_BID1_SIZE",
    "fidNumber": 23208,
    "dataType": "LONG",
    "description": "Arca Best Bid Size"
  },
  {
    "fieldName": "ARCA_BEST_ASK1",
    "fidNumber": 23209,
    "dataType": "LPACK",
    "description": "Arca Best Offer"
  },
  {
    "fieldName": "ARCA_BEST_ASK1_SIZE",
    "fidNumber": 23210,
    "dataType": "LONG",
    "description": "Arca Best Offer Size"
  },
  {
    "fieldName": "DEST_LOR",
    "fidNumber": 23211,
    "dataType": "LONG",
    "description": "Dest LOR"
  },
  {
    "fieldName": "COND_USE_PRICE",
    "fidNumber": 23212,
    "dataType": "INT",
    "description": "Cond Use Price"
  },
  {
    "fieldName": "COND_USE_ACTIVATE_TIME",
    "fidNumber": 23213,
    "dataType": "INT",
    "description": "Cond Use Time"
  },
  {
    "fieldName": "COND_ACTIVATE_TIME",
    "fidNumber": 23214,
    "dataType": "TIME",
    "description": "Cond Activation Time"
  },
  {
    "fieldName": "COND_PRICE_TIME_OP",
    "fidNumber": 23215,
    "dataType": "LONG",
    "description": "Cond Operation"
  },
  {
    "fieldName": "COND_USE_EXPIRE_TIME",
    "fidNumber": 23216,
    "dataType": "INT",
    "description": "Cond Use Expire Time"
  },
  {
    "fieldName": "COND_EXPIRE_TIME",
    "fidNumber": 23217,
    "dataType": "TIME",
    "description": "Cond Expiration Time"
  },
  {
    "fieldName": "COMPRESSION_ELIGIBILITY",
    "fidNumber": 23218,
    "dataType": "LONG",
    "description": "Comp Eligibility"
  },
  {
    "fieldName": "DOMAIN_NAME_FOR_GATEWAY",
    "fidNumber": 23219,
    "dataType": "STRING",
    "description": "DomainName for Gateway"
  },
  {
    "fieldName": "ETP_ID",
    "fidNumber": 23220,
    "dataType": "STRING",
    "description": "ETP Id"
  },
  {
    "fieldName": "ETP_CONTRA",
    "fidNumber": 23221,
    "dataType": "STRING",
    "description": "ETP Contra"
  },
  {
    "fieldName": "AUTHORIZED_TRADER_ID",
    "fidNumber": 23222,
    "dataType": "STRING",
    "description": "Authorized Trader ID"
  },
  {
    "fieldName": "REMAINING_VOLUME",
    "fidNumber": 23223,
    "dataType": "LONG",
    "description": "Remaining volume"
  },
  {
    "fieldName": "USER_NAME_FOR_GATEWAY",
    "fidNumber": 23224,
    "dataType": "STRING",
    "description": "UserName for Gateway"
  },
  {
    "fieldName": "TIME_IN_FORCE_DESC",
    "fidNumber": 23225,
    "dataType": "STRING",
    "description": "Session"
  },
  {
    "fieldName": "LVAL_ARCA_BID_PRICE",
    "fidNumber": 23226,
    "dataType": "LONG",
    "description": "LVAL of Arca Bid Price"
  },
  {
    "fieldName": "WBASE_ARCA_BID_PRICE",
    "fidNumber": 23227,
    "dataType": "LONG",
    "description": "WBASE of Arca Bid Price"
  },
  {
    "fieldName": "LVAL_ARCA_OFFER_PRICE",
    "fidNumber": 23228,
    "dataType": "LONG",
    "description": "LVAL of Arca Offer Price"
  },
  {
    "fieldName": "WBASE_ARCA_OFFER_PRICE",
    "fidNumber": 23229,
    "dataType": "LONG",
    "description": "WBASE of Arca Offer Price"
  },
  {
    "fieldName": "LVAL_NATIONAL_BID_PRICE",
    "fidNumber": 23230,
    "dataType": "LONG",
    "description": "LVAL of Nat'l Bid Price"
  },
  {
    "fieldName": "WBASE_NATIONAL_BID_PRICE",
    "fidNumber": 23231,
    "dataType": "LONG",
    "description": "WBASE of Nat'l Bid Price"
  },
  {
    "fieldName": "LVAL_NATIONAL_OFFER_PRICE",
    "fidNumber": 23232,
    "dataType": "LONG",
    "description": "LVAL of Nat'l Offer Price"
  },
  {
    "fieldName": "WBASE_NATIONAL_OFFER_PRICE",
    "fidNumber": 23233,
    "dataType": "LONG",
    "description": "WBASE of Nat'l Offer Price"
  },
  {
    "fieldName": "COND_USE_ORDER_TRIGGER",
    "fidNumber": 23234,
    "dataType": "INT",
    "description": "Cond Use Order Trigger"
  },
  {
    "fieldName": "COND_ORDER_TRIGGER",
    "fidNumber": 23235,
    "dataType": "STRING",
    "description": "Cond Trigger Order ID"
  },
  {
    "fieldName": "ROUTE_PROPERTY",
    "fidNumber": 23236,
    "dataType": "LONG",
    "description": "Route Property"
  },
  {
    "fieldName": "PEG_LIMIT",
    "fidNumber": 23237,
    "dataType": "LPACK",
    "description": "Peg Limit"
  },
  {
    "fieldName": "DISCRETION_OFFSET",
    "fidNumber": 23238,
    "dataType": "LPACK",
    "description": "Discretion Offset"
  },
  {
    "fieldName": "GATEWAY_MACHINE",
    "fidNumber": 23239,
    "dataType": "STRING",
    "description": "Gateway Machine"
  },
  {
    "fieldName": "SUPER_MONTAGE_FLAGS",
    "fidNumber": 23240,
    "dataType": "LONG",
    "description": "Super Montage flags"
  },
  {
    "fieldName": "EXECUTION_ALGORITHM",
    "fidNumber": 23241,
    "dataType": "LONG",
    "description": "Execution Algorithm"
  },
  {
    "fieldName": "AS_OF_DATE",
    "fidNumber": 23242,
    "dataType": "DATE",
    "description": "As of Date"
  },
  {
    "fieldName": "AS_OF_TIME",
    "fidNumber": 23243,
    "dataType": "TIME",
    "description": "As of Time"
  },
  {
    "fieldName": "VOLUME_CROSSED",
    "fidNumber": 23244,
    "dataType": "LONG",
    "description": "Volume Crossed"
  },
  {
    "fieldName": "PRICE_MARKUP",
    "fidNumber": 23245,
    "dataType": "DOUBLE",
    "description": "Price Markup"
  },
  {
    "fieldName": "ECN_ROUTING_FLAGS",
    "fidNumber": 23246,
    "dataType": "LONG",
    "description": "ECN Routing Flags"
  },
  {
    "fieldName": "EXCHANGE_EVENT",
    "fidNumber": 23247,
    "dataType": "LONG",
    "description": "Exchange Event"
  },
  {
    "fieldName": "DATE_INDEX",
    "fidNumber": 23248,
    "dataType": "LONG",
    "description": "Days since 1996"
  },
  {
    "fieldName": "BOOK_ID",
    "fidNumber": 23249,
    "dataType": "LONG",
    "description": "Book ID"
  },
  {
    "fieldName": "GW_BOOK_SEQ_NO",
    "fidNumber": 23250,
    "dataType": "LONG",
    "description": "Gateway Bk Seq No"
  },
  {
    "fieldName": "EXIT_VEHICLE_SUBROUTE",
    "fidNumber": 23251,
    "dataType": "STRING",
    "description": "Sub Route"
  },
  {
    "fieldName": "OMS_CLIENT_TYPE",
    "fidNumber": 23252,
    "dataType": "LONG",
    "description": "OMS Client Type"
  },
  {
    "fieldName": "MATCHER_BEST_BID",
    "fidNumber": 23253,
    "dataType": "DOUBLE",
    "description": "Matcher Best Bid"
  },
  {
    "fieldName": "MATCHER_BEST_ASK",
    "fidNumber": 23254,
    "dataType": "DOUBLE",
    "description": "Matcher Best Ask"
  },
  {
    "fieldName": "MATCHER_BEST_BID_SIZE",
    "fidNumber": 23255,
    "dataType": "LONG",
    "description": "Matcher Best Bid Size"
  },
  {
    "fieldName": "MATCHER_BEST_ASK_SIZE",
    "fidNumber": 23256,
    "dataType": "LONG",
    "description": "Matcher Best Ask Size"
  },
  {
    "fieldName": "MATCHER_BEST_BID_EXID",
    "fidNumber": 23257,
    "dataType": "STRING",
    "description": "Matcher Best Bid EXID"
  },
  {
    "fieldName": "MATCHER_BEST_ASK_EXID",
    "fidNumber": 23258,
    "dataType": "STRING",
    "description": "Matcher Best Ask EXID"
  },
  {
    "fieldName": "AUTO_GIVEUP",
    "fidNumber": 23259,
    "dataType": "INT",
    "description": "Automatic Giveup"
  },
  {
    "fieldName": "MATCHER_LVAL_ARCA_BEST_BID",
    "fidNumber": 23260,
    "dataType": "LONG",
    "description": "Matcher Arca Best Bid LVAL"
  },
  {
    "fieldName": "MATCHER_WBASE_ARCA_BEST_BID",
    "fidNumber": 23261,
    "dataType": "INT",
    "description": "Matcher Arca Best Bid WBASE"
  },
  {
    "fieldName": "MATCHER_LVAL_ARCA_BEST_ASK",
    "fidNumber": 23262,
    "dataType": "LONG",
    "description": "Matcher Arca Best Ask LVAL"
  },
  {
    "fieldName": "MATCHER_WBASE_ARCA_BEST_ASK",
    "fidNumber": 23263,
    "dataType": "INT",
    "description": "Matcher Arca Best Ask WBASE"
  },
  {
    "fieldName": "MATCHER_ARCA_BEST_BID_SIZE",
    "fidNumber": 23264,
    "dataType": "LONG",
    "description": "Matcher Arca Best Bid Size"
  },
  {
    "fieldName": "MATCHER_ARCA_BEST_ASK_SIZE",
    "fidNumber": 23265,
    "dataType": "LONG",
    "description": "Matcher Arca Best Ask Size"
  },
  {
    "fieldName": "MATCHER_BEST_AWAY_BID",
    "fidNumber": 23266,
    "dataType": "DOUBLE",
    "description": "Matcher Best Away Bid"
  },
  {
    "fieldName": "MATCHER_BEST_AWAY_ASK",
    "fidNumber": 23267,
    "dataType": "DOUBLE",
    "description": "Matcher Best Away Ask"
  },
  {
    "fieldName": "MATCHER_BEST_AWAY_BID_SIZE",
    "fidNumber": 23268,
    "dataType": "LONG",
    "description": "Matcher Best Away Bid Size"
  },
  {
    "fieldName": "MATCHER_BEST_AWAY_ASK_SIZE",
    "fidNumber": 23269,
    "dataType": "LONG",
    "description": "Matcher Best Away Ask Size"
  },
  {
    "fieldName": "MATCHER_BEST_AWAY_BID_MKTS",
    "fidNumber": 23270,
    "dataType": "STRING",
    "description": "Matcher Best Away Bid Mkts"
  },
  {
    "fieldName": "MATCHER_BEST_AWAY_ASK_MKTS",
    "fidNumber": 23271,
    "dataType": "STRING",
    "description": "Matcher Best Away Ask Mkts"
  },
  {
    "fieldName": "MATCHER_LVAL_BEST_BID",
    "fidNumber": 23272,
    "dataType": "LONG",
    "description": "Matcher Best Bid LVAL"
  },
  {
    "fieldName": "MATCHER_WBASE_BEST_BID",
    "fidNumber": 23273,
    "dataType": "INT",
    "description": "Matcher Best Bid WBASE"
  },
  {
    "fieldName": "MATCHER_LVAL_BEST_ASK",
    "fidNumber": 23274,
    "dataType": "LONG",
    "description": "Matcher Best Ask LVAL"
  },
  {
    "fieldName": "MATCHER_WBASE_BEST_ASK",
    "fidNumber": 23275,
    "dataType": "INT",
    "description": "Matcher Best Ask WBASE"
  },
  {
    "fieldName": "ALLOC_DEST_ROUTE",
    "fidNumber": 23284,
    "dataType": "STRING",
    "description": "Destination route for Allocation"
  },
  {
    "fieldName": "MAX_LOSS",
    "fidNumber": 23285,
    "dataType": "DOUBLE",
    "description": "Max Loss"
  },
  {
    "fieldName": "LIQUIDITY_INDICATOR",
    "fidNumber": 23286,
    "dataType": "LONG",
    "description": "Liquidity Indicator"
  },
  {
    "fieldName": "SELLING_METHOD",
    "fidNumber": 23287,
    "dataType": "LONG",
    "description": "Selling Method"
  },
  {
    "fieldName": "VSP_DATE",
    "fidNumber": 23288,
    "dataType": "STRING",
    "description": "VSP Date"
  },
  {
    "fieldName": "ALLOC_TICKET_ID",
    "fidNumber": 23289,
    "dataType": "STRING",
    "description": "Alloc Ticket ID"
  },
  {
    "fieldName": "NUM_FILLS_BILLING_CYCLE",
    "fidNumber": 23290,
    "dataType": "LONG",
    "description": "No. Fills in Billing Cycle"
  },
  {
    "fieldName": "GROSS_TRADED_AMT_BILLING_CYCLE",
    "fidNumber": 23291,
    "dataType": "LONG",
    "description": "Gross Traded in Billing Cycle"
  },
  {
    "fieldName": "COMMISSION_CODE",
    "fidNumber": 23292,
    "dataType": "STRING",
    "description": "Broker Code"
  },
  {
    "fieldName": "BLOTTER_CODE",
    "fidNumber": 23293,
    "dataType": "STRING",
    "description": "Blotter Code"
  },
  {
    "fieldName": "ALLOC_BBCD",
    "fidNumber": 23294,
    "dataType": "STRING",
    "description": "Destination acct for Allocation"
  },
  {
    "fieldName": "SEC_FEE",
    "fidNumber": 23295,
    "dataType": "DOUBLE",
    "description": "SEC Fee"
  },
  {
    "fieldName": "ECN_FEE",
    "fidNumber": 23296,
    "dataType": "DOUBLE",
    "description": "ECN Fee"
  },
  {
    "fieldName": "BROKERAGE_FEE",
    "fidNumber": 23297,
    "dataType": "DOUBLE",
    "description": "Brokerage Fee"
  },
  {
    "fieldName": "ORDER_ERROR_CODE",
    "fidNumber": 23298,
    "dataType": "LONG",
    "description": "Error Code"
  },
  {
    "fieldName": "RSP_NAME",
    "fidNumber": 23299,
    "dataType": "STRING",
    "description": "RSP Name"
  },
  {
    "fieldName": "NYFIX_SPRD_LIMIT_MIN",
    "fidNumber": 23300,
    "dataType": "DOUBLE",
    "description": "Min Spread"
  },
  {
    "fieldName": "NYFIX_SPRD_LIMIT_MAX",
    "fidNumber": 23301,
    "dataType": "DOUBLE",
    "description": "Max Spread"
  },
  {
    "fieldName": "NYFIX_MARKET_CODE",
    "fidNumber": 23302,
    "dataType": "STRING",
    "description": "Market Code"
  },
  {
    "fieldName": "NYFIX_MIN_1ST_EXEC_SIZE",
    "fidNumber": 23303,
    "dataType": "LONG",
    "description": "Min First Execution Size"
  },
  {
    "fieldName": "NYFIX_MIN_EXEC_SIZE",
    "fidNumber": 23304,
    "dataType": "LONG",
    "description": "Min Execution Size"
  },
  {
    "fieldName": "NYFIX_MAX_EXEC_PER_TICK",
    "fidNumber": 23305,
    "dataType": "LONG",
    "description": "Max Exec Per Tick"
  },
  {
    "fieldName": "NYFIX_PCT_OF_DISP_SIZE",
    "fidNumber": 23306,
    "dataType": "DOUBLE",
    "description": "% of Display Size"
  },
  {
    "fieldName": "NYFIX_MAX_EXEC_SIZE",
    "fidNumber": 23307,
    "dataType": "LONG",
    "description": "Max Exec Size"
  },
  {
    "fieldName": "ACT_FEE",
    "fidNumber": 23308,
    "dataType": "DOUBLE",
    "description": "ACT Fee"
  },
  {
    "fieldName": "COMMISSION_RATE",
    "fidNumber": 23309,
    "dataType": "DOUBLE",
    "description": "Commission Rate"
  },
  {
    "fieldName": "COMMISSION_RATE_TYPE",
    "fidNumber": 23310,
    "dataType": "INT",
    "description": "Commission Rate Type"
  },
  {
    "fieldName": "ALLOC_PRETRADE_ALLOCATION_PLAN",
    "fidNumber": 23311,
    "dataType": "BLOB",
    "description": "Pretrade Allocation Instructions"
  },
  {
    "fieldName": "ALLOC_PERCENTAGE",
    "fidNumber": 23312,
    "dataType": "LONG",
    "description": "Allocation Percentage"
  },
  {
    "fieldName": "ALLOC_MIN_LOT_SIZE",
    "fidNumber": 23313,
    "dataType": "LONG",
    "description": "Allocation Min Lot Size"
  },
  {
    "fieldName": "ALLOC_ON_COMPLETION",
    "fidNumber": 23314,
    "dataType": "LONG",
    "description": "Allocate On Completion"
  },
  {
    "fieldName": "GATEWAY_MACHINE_ID",
    "fidNumber": 23315,
    "dataType": "LONG",
    "description": "Gateway Machine ID"
  },
  {
    "fieldName": "SRV_PENDING_MARGIN",
    "fidNumber": 23316,
    "dataType": "DOUBLE",
    "description": "Mgn Pending (server)"
  },
  {
    "fieldName": "EXTERNAL_ORDER_KEY",
    "fidNumber": 23317,
    "dataType": "STRING",
    "description": "External order key"
  },
  {
    "fieldName": "HANDLE_INSTR",
    "fidNumber": 23318,
    "dataType": "LONG",
    "description": "Handling Instructions"
  },
  {
    "fieldName": "STRATEGY_DETAILS",
    "fidNumber": 23319,
    "dataType": "STRING",
    "description": "Strategy Details"
  },
  {
    "fieldName": "STRAT_TARGET",
    "fidNumber": 23320,
    "dataType": "STRING",
    "description": "Strategy Target"
  },
  {
    "fieldName": "STRAT_ID",
    "fidNumber": 23321,
    "dataType": "STRING",
    "description": "Strategy ID"
  },
  {
    "fieldName": "STRAT_SLICE",
    "fidNumber": 23322,
    "dataType": "LONG",
    "description": "Strategy Slice Size"
  },
  {
    "fieldName": "STRAT_AGGRESSION",
    "fidNumber": 23323,
    "dataType": "LONG",
    "description": "Strategy Aggression"
  },
  {
    "fieldName": "STRAT_MOO",
    "fidNumber": 23324,
    "dataType": "LONG",
    "description": "Strategy MOO"
  },
  {
    "fieldName": "STRAT_MOC",
    "fidNumber": 23325,
    "dataType": "LONG",
    "description": "Strategy MOC"
  },
  {
    "fieldName": "STRAT_BPS_STOP",
    "fidNumber": 23326,
    "dataType": "LPACK",
    "description": "Strategy Basis Pt. Limit"
  },
  {
    "fieldName": "STRAT_MIN_VOL_PCT",
    "fidNumber": 23327,
    "dataType": "LONG",
    "description": "Min Vol Pct."
  },
  {
    "fieldName": "STRAT_MAX_VOL_PCT",
    "fidNumber": 23328,
    "dataType": "LONG",
    "description": "Max Vol Pct."
  },
  {
    "fieldName": "STRAT_PCT_PER_SLICE",
    "fidNumber": 23329,
    "dataType": "LONG",
    "description": "Pct Per Slice"
  },
  {
    "fieldName": "STRAT_PING",
    "fidNumber": 23330,
    "dataType": "LONG",
    "description": "Ping Interval"
  },
  {
    "fieldName": "STRAT_PREMIUM",
    "fidNumber": 23331,
    "dataType": "DOUBLE",
    "description": "Premium"
  },
  {
    "fieldName": "STRAT_RATIO",
    "fidNumber": 23332,
    "dataType": "DOUBLE",
    "description": "Ratio"
  },
  {
    "fieldName": "STRAT_CASH",
    "fidNumber": 23333,
    "dataType": "DOUBLE",
    "description": "Cash"
  },
  {
    "fieldName": "STRAT_EXTRA",
    "fidNumber": 23334,
    "dataType": "STRING",
    "description": "Extra Strategy Field"
  },
  {
    "fieldName": "STRAT_NAME",
    "fidNumber": 23335,
    "dataType": "STRING",
    "description": "Strategy Name"
  },
  {
    "fieldName": "STRAT_TIME_TYPE",
    "fidNumber": 23336,
    "dataType": "STRING",
    "description": "Strategy Time Type"
  },
  {
    "fieldName": "STRAT_NUM_SLICES",
    "fidNumber": 23337,
    "dataType": "LONG",
    "description": "Strategy Num Slices"
  },
  {
    "fieldName": "STRAT_OTHER_PRICE",
    "fidNumber": 23338,
    "dataType": "LPACK",
    "description": "Strategy Other Price"
  },
  {
    "fieldName": "STRAT_ROUND_LOT_SIZE",
    "fidNumber": 23339,
    "dataType": "LONG",
    "description": "Strategy Round Lot Size"
  },
  {
    "fieldName": "STRAT_PAIR_ID",
    "fidNumber": 23340,
    "dataType": "STRING",
    "description": "Strategy Pair ID"
  },
  {
    "fieldName": "STRAT_PROBE",
    "fidNumber": 23341,
    "dataType": "LONG",
    "description": "Strategy Probe Level"
  },
  {
    "fieldName": "STRAT_ENHANCED",
    "fidNumber": 23342,
    "dataType": "LONG",
    "description": "Strategy Enhanced Mode"
  },
  {
    "fieldName": "STRAT_PCT_INLINE",
    "fidNumber": 23344,
    "dataType": "LONG",
    "description": "Strategy % Inline"
  },
  {
    "fieldName": "STRAT_MAX_TRADE_SIZE",
    "fidNumber": 23345,
    "dataType": "LONG",
    "description": "Strategy Max Trade Size"
  },
  {
    "fieldName": "STRAT_IGNORE_SIZE",
    "fidNumber": 23346,
    "dataType": "LONG",
    "description": "Strategy Ignore Print Size"
  },
  {
    "fieldName": "STRAT_IGNORE_PCT",
    "fidNumber": 23347,
    "dataType": "LONG",
    "description": "Strategy Ignore Print %"
  },
  {
    "fieldName": "STRAT_PRICE_TOLERANCE",
    "fidNumber": 23348,
    "dataType": "LONG",
    "description": "Strategy Price Tolerance"
  },
  {
    "fieldName": "STRAT_TILT",
    "fidNumber": 23349,
    "dataType": "DOUBLE",
    "description": "Strategy Tilt"
  },
  {
    "fieldName": "STRAT_GTY_FILL",
    "fidNumber": 23350,
    "dataType": "LONG",
    "description": "Strategy Guaranteed Fill"
  },
  {
    "fieldName": "STRAT_PCT_VOLUME",
    "fidNumber": 23351,
    "dataType": "DOUBLE",
    "description": "Strategy % Volume"
  },
  {
    "fieldName": "STRAT_PRICE",
    "fidNumber": 23352,
    "dataType": "LPACK",
    "description": "I Would Price"
  },
  {
    "fieldName": "STRAT_URGENCY",
    "fidNumber": 23353,
    "dataType": "LONG",
    "description": "Strategy Urgency"
  },
  {
    "fieldName": "STRAT_AUTO_CANCEL",
    "fidNumber": 23354,
    "dataType": "LONG",
    "description": "Strategy Auto Cancel"
  },
  {
    "fieldName": "STRAT_AVG_PRICE",
    "fidNumber": 23355,
    "dataType": "LONG",
    "description": "Strategy Average Price Limit"
  },
  {
    "fieldName": "STRAT_PRICE_REFERENCE",
    "fidNumber": 23356,
    "dataType": "STRING",
    "description": "Strategy Price Reference"
  },
  {
    "fieldName": "STRAT_MAX_PCT_CHANGE",
    "fidNumber": 23357,
    "dataType": "LONG",
    "description": "Strategy Max Percent Change"
  },
  {
    "fieldName": "STRAT_FINISH",
    "fidNumber": 23358,
    "dataType": "LONG",
    "description": "Strategy Finish"
  },
  {
    "fieldName": "STRAT_AUCTION_PCT_VOL",
    "fidNumber": 23359,
    "dataType": "DOUBLE",
    "description": "Strategy Auction Percent Volume"
  },
  {
    "fieldName": "STRAT_AUCTION_MAX_SHARES",
    "fidNumber": 23360,
    "dataType": "LONG",
    "description": "Strategy Auction Max Shares"
  },
  {
    "fieldName": "STRAT_IMBALANCE_ACTION",
    "fidNumber": 23361,
    "dataType": "LONG",
    "description": "Strategy Act On Imbalance"
  },
  {
    "fieldName": "STRAT_EXCLUDE_AUCTIONS",
    "fidNumber": 23362,
    "dataType": "STRING",
    "description": "Strategy Exclude Auctions"
  },
  {
    "fieldName": "STRAT_TRIGGER_PRICE",
    "fidNumber": 23363,
    "dataType": "LPACK",
    "description": "Strategy Trigger Price"
  },
  {
    "fieldName": "STRAT_TRIGGER_PRICE_REF",
    "fidNumber": 23364,
    "dataType": "STRING",
    "description": "Strategy Trigger Price Type"
  },
  {
    "fieldName": "STRAT_TRIGGER_PRICE_OFFSET",
    "fidNumber": 23365,
    "dataType": "LPACK",
    "description": "Strategy Trigger Price Offset"
  },
  {
    "fieldName": "STRAT_SUBID",
    "fidNumber": 23366,
    "dataType": "STRING",
    "description": "Strategy Sub ID"
  },
  {
    "fieldName": "STRAT_REF_SYMBOL",
    "fidNumber": 23367,
    "dataType": "STRING",
    "description": "Strategy Reference Symbol"
  },
  {
    "fieldName": "STRAT_REF_SUFFIX",
    "fidNumber": 23368,
    "dataType": "STRING",
    "description": "Strategy Reference Suffix"
  },
  {
    "fieldName": "STRAT_SPREAD",
    "fidNumber": 23369,
    "dataType": "LPACK",
    "description": "Strategy Spread"
  },
  {
    "fieldName": "STRAT_PERIOD",
    "fidNumber": 23370,
    "dataType": "LONG",
    "description": "Strategy Period"
  },
  {
    "fieldName": "STRAT_PRICE_OFFSET",
    "fidNumber": 23371,
    "dataType": "LPACK",
    "description": "Strategy Price Offset"
  },
  {
    "fieldName": "STRAT_PRICE_DIRECTION",
    "fidNumber": 23372,
    "dataType": "LONG",
    "description": "Strategy Price Direction"
  },
  {
    "fieldName": "STRAT_BUYBACK",
    "fidNumber": 23373,
    "dataType": "LONG",
    "description": "Strategy Buy Back"
  },
  {
    "fieldName": "STRAT_PERCENT_1",
    "fidNumber": 23374,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 1"
  },
  {
    "fieldName": "STRAT_PERCENT_2",
    "fidNumber": 23375,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 2"
  },
  {
    "fieldName": "STRAT_PERCENT_3",
    "fidNumber": 23376,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 3"
  },
  {
    "fieldName": "STRAT_PERCENT_4",
    "fidNumber": 23377,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 4"
  },
  {
    "fieldName": "STRAT_PERCENT_5",
    "fidNumber": 23378,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 5"
  },
  {
    "fieldName": "STRAT_PERCENT_6",
    "fidNumber": 23379,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 6"
  },
  {
    "fieldName": "STRAT_PERCENT_7",
    "fidNumber": 23380,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 7"
  },
  {
    "fieldName": "STRAT_PERCENT_8",
    "fidNumber": 23381,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 8"
  },
  {
    "fieldName": "STRAT_PERCENT_9",
    "fidNumber": 23382,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 9"
  },
  {
    "fieldName": "STRAT_RISK_FACTOR",
    "fidNumber": 23383,
    "dataType": "STRING",
    "description": "Strategy Risk Factor"
  },
  {
    "fieldName": "STRAT_SPEED_RISK_FACTOR",
    "fidNumber": 23384,
    "dataType": "STRING",
    "description": "Strategy Speed Risk Factor"
  },
  {
    "fieldName": "STRAT_CRITERIA",
    "fidNumber": 23385,
    "dataType": "LONG",
    "description": "Strategy Criteria"
  },
  {
    "fieldName": "STRAT_MIN_VOL_PCT_D",
    "fidNumber": 23386,
    "dataType": "DOUBLE",
    "description": "Strategy Min Volume Pct."
  },
  {
    "fieldName": "STRAT_MAX_VOL_PCT_D",
    "fidNumber": 23387,
    "dataType": "DOUBLE",
    "description": "Strategy Max Volume Pct."
  },
  {
    "fieldName": "STRAT_PCT_VOLUME_L",
    "fidNumber": 23388,
    "dataType": "LONG",
    "description": "Volume Guidance %"
  },
  {
    "fieldName": "STRAT_VERSION",
    "fidNumber": 23389,
    "dataType": "LONG",
    "description": "Strategy Version"
  },
  {
    "fieldName": "STRAT_TYPE",
    "fidNumber": 23390,
    "dataType": "STRING",
    "description": "Strategy Type"
  },
  {
    "fieldName": "STRAT_PARAMETERS",
    "fidNumber": 23391,
    "dataType": "STRING",
    "description": "Strategy Parameters"
  },
  {
    "fieldName": "STRAT_DETAILS",
    "fidNumber": 23392,
    "dataType": "STRING",
    "description": "Strategy Details"
  },
  {
    "fieldName": "STRAT_REDUNDANT_DATA",
    "fidNumber": 23393,
    "dataType": "STRING",
    "description": "Redundant Strat Field Storage"
  },
  {
    "fieldName": "STRAT_INTENSITY",
    "fidNumber": 23394,
    "dataType": "DOUBLE",
    "description": "Strategy Intensity"
  },
  {
    "fieldName": "STRAT_FLAGS",
    "fidNumber": 23395,
    "dataType": "LONG",
    "description": "Strategy Flags"
  },
  {
    "fieldName": "STRAT_OUTSIZED",
    "fidNumber": 23396,
    "dataType": "LONG",
    "description": "Strategy Outsized"
  },
  {
    "fieldName": "STRAT_BENCHMARK",
    "fidNumber": 23397,
    "dataType": "STRING",
    "description": "Strategy Benchmark"
  },
  {
    "fieldName": "STRAT_SPREAD_LOGIC",
    "fidNumber": 23398,
    "dataType": "STRING",
    "description": "Strategy Spread Logic"
  },
  {
    "fieldName": "STRAT_IMPACT",
    "fidNumber": 23399,
    "dataType": "STRING",
    "description": "Strategy Impact"
  },
  {
    "fieldName": "STRAT_COMPLETION",
    "fidNumber": 23400,
    "dataType": "LONG",
    "description": "Strategy Completion"
  },
  {
    "fieldName": "STRAT_MIN_PRICE",
    "fidNumber": 23401,
    "dataType": "LPACK",
    "description": "Strategy Min Price"
  },
  {
    "fieldName": "STRAT_MAX_PRICE",
    "fidNumber": 23402,
    "dataType": "LPACK",
    "description": "Strategy Max Price"
  },
  {
    "fieldName": "STRAT_STRING_1",
    "fidNumber": 23403,
    "dataType": "STRING",
    "description": "Strategy String 1"
  },
  {
    "fieldName": "STRAT_STRING_2",
    "fidNumber": 23404,
    "dataType": "STRING",
    "description": "Strategy String 2"
  },
  {
    "fieldName": "STRAT_STRING_3",
    "fidNumber": 23405,
    "dataType": "STRING",
    "description": "Strategy String 3"
  },
  {
    "fieldName": "STRAT_STRING_4",
    "fidNumber": 23406,
    "dataType": "STRING",
    "description": "Strategy String 4"
  },
  {
    "fieldName": "STRAT_STRING_5",
    "fidNumber": 23407,
    "dataType": "STRING",
    "description": "Strategy String 5"
  },
  {
    "fieldName": "STRAT_STRING_6",
    "fidNumber": 23408,
    "dataType": "STRING",
    "description": "Strategy String 6"
  },
  {
    "fieldName": "STRAT_STRING_7",
    "fidNumber": 23409,
    "dataType": "STRING",
    "description": "Strategy String 7"
  },
  {
    "fieldName": "STRAT_STRING_8",
    "fidNumber": 23410,
    "dataType": "STRING",
    "description": "Strategy String 8"
  },
  {
    "fieldName": "STRAT_STRING_9",
    "fidNumber": 23411,
    "dataType": "STRING",
    "description": "Strategy String 9"
  },
  {
    "fieldName": "STRAT_STRING_10",
    "fidNumber": 23412,
    "dataType": "STRING",
    "description": "Strategy String 10"
  },
  {
    "fieldName": "STRAT_STRING_11",
    "fidNumber": 23413,
    "dataType": "STRING",
    "description": "Strategy String 11"
  },
  {
    "fieldName": "STRAT_STRING_12",
    "fidNumber": 23414,
    "dataType": "STRING",
    "description": "Strategy String 12"
  },
  {
    "fieldName": "STRAT_STRING_13",
    "fidNumber": 23415,
    "dataType": "STRING",
    "description": "Strategy String 13"
  },
  {
    "fieldName": "STRAT_STRING_14",
    "fidNumber": 23416,
    "dataType": "STRING",
    "description": "Strategy String 14"
  },
  {
    "fieldName": "STRAT_STRING_15",
    "fidNumber": 23417,
    "dataType": "STRING",
    "description": "Strategy String 15"
  },
  {
    "fieldName": "STRAT_STRING_16",
    "fidNumber": 23418,
    "dataType": "STRING",
    "description": "Strategy String 16"
  },
  {
    "fieldName": "STRAT_STRING_17",
    "fidNumber": 23419,
    "dataType": "STRING",
    "description": "Strategy String 17"
  },
  {
    "fieldName": "STRAT_STRING_18",
    "fidNumber": 23420,
    "dataType": "STRING",
    "description": "Strategy String 18"
  },
  {
    "fieldName": "STRAT_STRING_19",
    "fidNumber": 23421,
    "dataType": "STRING",
    "description": "Strategy String 19"
  },
  {
    "fieldName": "STRAT_STRING_20",
    "fidNumber": 23422,
    "dataType": "STRING",
    "description": "Strategy String 20"
  },
  {
    "fieldName": "STRAT_STRING_21",
    "fidNumber": 23423,
    "dataType": "STRING",
    "description": "Strategy String 21"
  },
  {
    "fieldName": "STRAT_STRING_22",
    "fidNumber": 23424,
    "dataType": "STRING",
    "description": "Strategy String 22"
  },
  {
    "fieldName": "STRAT_STRING_23",
    "fidNumber": 23425,
    "dataType": "STRING",
    "description": "Strategy String 23"
  },
  {
    "fieldName": "STRAT_STRING_24",
    "fidNumber": 23426,
    "dataType": "STRING",
    "description": "Strategy String 24"
  },
  {
    "fieldName": "STRAT_STRING_25",
    "fidNumber": 23427,
    "dataType": "STRING",
    "description": "Strategy String 25"
  },
  {
    "fieldName": "STRAT_STRING_26",
    "fidNumber": 23428,
    "dataType": "STRING",
    "description": "Strategy String 26"
  },
  {
    "fieldName": "STRAT_STRING_27",
    "fidNumber": 23429,
    "dataType": "STRING",
    "description": "Strategy String 27"
  },
  {
    "fieldName": "STRAT_STRING_28",
    "fidNumber": 23430,
    "dataType": "STRING",
    "description": "Strategy String 28"
  },
  {
    "fieldName": "STRAT_STRING_29",
    "fidNumber": 23431,
    "dataType": "STRING",
    "description": "Strategy String 29"
  },
  {
    "fieldName": "STRAT_STRING_30",
    "fidNumber": 23432,
    "dataType": "STRING",
    "description": "Strategy String 30"
  },
  {
    "fieldName": "STRAT_LONG_1",
    "fidNumber": 23433,
    "dataType": "LONG",
    "description": "Strategy Long 1"
  },
  {
    "fieldName": "STRAT_LONG_2",
    "fidNumber": 23434,
    "dataType": "LONG",
    "description": "Strategy Long 2"
  },
  {
    "fieldName": "STRAT_LONG_3",
    "fidNumber": 23435,
    "dataType": "LONG",
    "description": "Strategy Long 3"
  },
  {
    "fieldName": "STRAT_LONG_4",
    "fidNumber": 23436,
    "dataType": "LONG",
    "description": "Strategy Long 4"
  },
  {
    "fieldName": "STRAT_LONG_5",
    "fidNumber": 23437,
    "dataType": "LONG",
    "description": "Strategy Long 5"
  },
  {
    "fieldName": "STRAT_LONG_6",
    "fidNumber": 23438,
    "dataType": "LONG",
    "description": "Strategy Long 6"
  },
  {
    "fieldName": "STRAT_LONG_7",
    "fidNumber": 23439,
    "dataType": "LONG",
    "description": "Strategy Long 7"
  },
  {
    "fieldName": "STRAT_LONG_8",
    "fidNumber": 23440,
    "dataType": "LONG",
    "description": "Strategy Long 8"
  },
  {
    "fieldName": "STRAT_LONG_9",
    "fidNumber": 23441,
    "dataType": "LONG",
    "description": "Strategy Long 9"
  },
  {
    "fieldName": "STRAT_LONG_10",
    "fidNumber": 23442,
    "dataType": "LONG",
    "description": "Strategy Long 10"
  },
  {
    "fieldName": "STRAT_PRICE_1",
    "fidNumber": 23443,
    "dataType": "LPACK",
    "description": "Strategy Price 1"
  },
  {
    "fieldName": "STRAT_PRICE_2",
    "fidNumber": 23444,
    "dataType": "LPACK",
    "description": "Strategy Price 2"
  },
  {
    "fieldName": "STRAT_PRICE_3",
    "fidNumber": 23445,
    "dataType": "LPACK",
    "description": "Strategy Price 3"
  },
  {
    "fieldName": "STRAT_PRICE_4",
    "fidNumber": 23446,
    "dataType": "LPACK",
    "description": "Strategy Price 4"
  },
  {
    "fieldName": "STRAT_PRICE_5",
    "fidNumber": 23447,
    "dataType": "LPACK",
    "description": "Strategy Price 5"
  },
  {
    "fieldName": "STRAT_PRICE_6",
    "fidNumber": 23448,
    "dataType": "LPACK",
    "description": "Strategy Price 6"
  },
  {
    "fieldName": "STRAT_PRICE_7",
    "fidNumber": 23449,
    "dataType": "LPACK",
    "description": "Strategy Price 7"
  },
  {
    "fieldName": "STRAT_PRICE_8",
    "fidNumber": 23450,
    "dataType": "LPACK",
    "description": "Strategy Price 8"
  },
  {
    "fieldName": "STRAT_PRICE_9",
    "fidNumber": 23451,
    "dataType": "LPACK",
    "description": "Strategy Price 9"
  },
  {
    "fieldName": "STRAT_PRICE_10",
    "fidNumber": 23452,
    "dataType": "LPACK",
    "description": "Strategy Price 10"
  },
  {
    "fieldName": "STRAT_TIME_IN_FORCE",
    "fidNumber": 23453,
    "dataType": "STRING",
    "description": "Strategy Time In Force"
  },
  {
    "fieldName": "STRAT_LONG_11",
    "fidNumber": 23454,
    "dataType": "LONG",
    "description": "Strategy Long 11"
  },
  {
    "fieldName": "STRAT_LONG_12",
    "fidNumber": 23455,
    "dataType": "LONG",
    "description": "Strategy Long 12"
  },
  {
    "fieldName": "STRAT_LONG_13",
    "fidNumber": 23456,
    "dataType": "LONG",
    "description": "Strategy Long 13"
  },
  {
    "fieldName": "STRAT_LONG_14",
    "fidNumber": 23457,
    "dataType": "LONG",
    "description": "Strategy Long 14"
  },
  {
    "fieldName": "STRAT_LONG_15",
    "fidNumber": 23458,
    "dataType": "LONG",
    "description": "Strategy Long 15"
  },
  {
    "fieldName": "STRAT_LONG_16",
    "fidNumber": 23459,
    "dataType": "LONG",
    "description": "Strategy Long 16"
  },
  {
    "fieldName": "STRAT_LONG_17",
    "fidNumber": 23460,
    "dataType": "LONG",
    "description": "Strategy Long 17"
  },
  {
    "fieldName": "STRAT_LONG_18",
    "fidNumber": 23461,
    "dataType": "LONG",
    "description": "Strategy Long 18"
  },
  {
    "fieldName": "STRAT_LONG_19",
    "fidNumber": 23462,
    "dataType": "LONG",
    "description": "Strategy Long 19"
  },
  {
    "fieldName": "STRAT_LONG_20",
    "fidNumber": 23463,
    "dataType": "LONG",
    "description": "Strategy Long 20"
  },
  {
    "fieldName": "STRAT_PERCENT_10",
    "fidNumber": 23464,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 10"
  },
  {
    "fieldName": "STRAT_PERCENT_11",
    "fidNumber": 23465,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 11"
  },
  {
    "fieldName": "STRAT_PERCENT_12",
    "fidNumber": 23466,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 12"
  },
  {
    "fieldName": "STRAT_PERCENT_13",
    "fidNumber": 23467,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 13"
  },
  {
    "fieldName": "STRAT_PERCENT_14",
    "fidNumber": 23468,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 14"
  },
  {
    "fieldName": "STRAT_PERCENT_15",
    "fidNumber": 23469,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 15"
  },
  {
    "fieldName": "STRAT_PERCENT_16",
    "fidNumber": 23470,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 16"
  },
  {
    "fieldName": "STRAT_PERCENT_17",
    "fidNumber": 23471,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 17"
  },
  {
    "fieldName": "STRAT_PERCENT_18",
    "fidNumber": 23472,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 18"
  },
  {
    "fieldName": "STRAT_PERCENT_19",
    "fidNumber": 23473,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 19"
  },
  {
    "fieldName": "STRAT_PERCENT_20",
    "fidNumber": 23474,
    "dataType": "DOUBLE",
    "description": "Strategy Percent 20"
  },
  {
    "fieldName": "STRAT_TIME_ZONE",
    "fidNumber": 23475,
    "dataType": "STRING",
    "description": "Strategy Time Zone"
  },
  {
    "fieldName": "STRAT_TIME_TAGS",
    "fidNumber": 23476,
    "dataType": "STRING",
    "description": "Strategy Time Tags"
  },
  {
    "fieldName": "STRAT_STRING_31",
    "fidNumber": 23477,
    "dataType": "STRING",
    "description": "Strategy String 31"
  },
  {
    "fieldName": "STRAT_STRING_32",
    "fidNumber": 23478,
    "dataType": "STRING",
    "description": "Strategy String 32"
  },
  {
    "fieldName": "STRAT_STRING_33",
    "fidNumber": 23479,
    "dataType": "STRING",
    "description": "Strategy String 33"
  },
  {
    "fieldName": "STRAT_STRING_34",
    "fidNumber": 23480,
    "dataType": "STRING",
    "description": "Strategy String 34"
  },
  {
    "fieldName": "STRAT_STRING_35",
    "fidNumber": 23481,
    "dataType": "STRING",
    "description": "Strategy String 35"
  },
  {
    "fieldName": "STRAT_STRING_36",
    "fidNumber": 23482,
    "dataType": "STRING",
    "description": "Strategy String 36"
  },
  {
    "fieldName": "STRAT_STRING_37",
    "fidNumber": 23483,
    "dataType": "STRING",
    "description": "Strategy String 37"
  },
  {
    "fieldName": "STRAT_STRING_38",
    "fidNumber": 23484,
    "dataType": "STRING",
    "description": "Strategy String 38"
  },
  {
    "fieldName": "STRAT_STRING_39",
    "fidNumber": 23485,
    "dataType": "STRING",
    "description": "Strategy String 39"
  },
  {
    "fieldName": "STRAT_STRING_40",
    "fidNumber": 23486,
    "dataType": "STRING",
    "description": "Strategy String 40"
  },
  {
    "fieldName": "STRAT_LONG_21",
    "fidNumber": 23487,
    "dataType": "LONG",
    "description": "Strategy Long 21"
  },
  {
    "fieldName": "STRAT_LONG_22",
    "fidNumber": 23488,
    "dataType": "LONG",
    "description": "Strategy Long 22"
  },
  {
    "fieldName": "STRAT_LONG_23",
    "fidNumber": 23489,
    "dataType": "LONG",
    "description": "Strategy Long 23"
  },
  {
    "fieldName": "STRAT_LONG_24",
    "fidNumber": 23490,
    "dataType": "LONG",
    "description": "Strategy Long 24"
  },
  {
    "fieldName": "STRAT_LONG_25",
    "fidNumber": 23491,
    "dataType": "LONG",
    "description": "Strategy Long 25"
  },
  {
    "fieldName": "STRAT_LONG_26",
    "fidNumber": 23492,
    "dataType": "LONG",
    "description": "Strategy Long 26"
  },
  {
    "fieldName": "STRAT_LONG_27",
    "fidNumber": 23493,
    "dataType": "LONG",
    "description": "Strategy Long 27"
  },
  {
    "fieldName": "STRAT_LONG_28",
    "fidNumber": 23494,
    "dataType": "LONG",
    "description": "Strategy Long 28"
  },
  {
    "fieldName": "STRAT_LONG_29",
    "fidNumber": 23495,
    "dataType": "LONG",
    "description": "Strategy Long 29"
  },
  {
    "fieldName": "STRAT_LONG_30",
    "fidNumber": 23496,
    "dataType": "LONG",
    "description": "Strategy Long 30"
  },
  {
    "fieldName": "STRAT_END_TIME",
    "fidNumber": 23497,
    "dataType": "STRING",
    "description": "Strategy End Time"
  },
  {
    "fieldName": "STRAT_DURATION",
    "fidNumber": 23498,
    "dataType": "LONG",
    "description": "Strategy Duration"
  },
  {
    "fieldName": "EXECUTION_STATE",
    "fidNumber": 23499,
    "dataType": "LONG",
    "description": "Execution State"
  },
  {
    "fieldName": "DAILY_EXEC_COUNT",
    "fidNumber": 23500,
    "dataType": "LONG",
    "description": "Daily Execution Count"
  },
  {
    "fieldName": "DAILY_ORDER_COUNT",
    "fidNumber": 23501,
    "dataType": "LONG",
    "description": "Daily Order Count"
  },
  {
    "fieldName": "DAILY_VOLUME",
    "fidNumber": 23502,
    "dataType": "DOUBLE",
    "description": "Daily Volume"
  },
  {
    "fieldName": "DAILY_GROSS_AMT",
    "fidNumber": 23503,
    "dataType": "DOUBLE",
    "description": "Daily Gross Amount"
  },
  {
    "fieldName": "SHORTABLE_CONSUMED",
    "fidNumber": 23504,
    "dataType": "LONG",
    "description": "Shortable Volume Consumed"
  },
  {
    "fieldName": "SHORTABLE_TEMP",
    "fidNumber": 23505,
    "dataType": "LONG",
    "description": "Shortable Temporary Volume"
  },
  {
    "fieldName": "SHORTABLE_AVAILABLE",
    "fidNumber": 23506,
    "dataType": "LONG",
    "description": "Shortable Volume Available"
  },
  {
    "fieldName": "SHORTABLE_AUTH_ID",
    "fidNumber": 23507,
    "dataType": "STRING",
    "description": "Shortable Authorization ID"
  },
  {
    "fieldName": "SHORTABLE_RESPOND",
    "fidNumber": 23508,
    "dataType": "LONG",
    "description": "Shortable Auth. Response Req'd"
  },
  {
    "fieldName": "SHORTABLE_INFO",
    "fidNumber": 23509,
    "dataType": "STRING",
    "description": "Shortable Info"
  },
  {
    "fieldName": "QTD_EXEC_COUNT",
    "fidNumber": 23510,
    "dataType": "LONG",
    "description": "Quarter to date Execution Count"
  },
  {
    "fieldName": "QTD_ORDER_COUNT",
    "fidNumber": 23511,
    "dataType": "LONG",
    "description": "Quarter to date Order Count"
  },
  {
    "fieldName": "QTD_VOLUME",
    "fidNumber": 23512,
    "dataType": "DOUBLE",
    "description": "Quarter to date Volume"
  },
  {
    "fieldName": "QTD_GROSS_AMT",
    "fidNumber": 23513,
    "dataType": "DOUBLE",
    "description": "Quarter to date Gross Amount"
  },
  {
    "fieldName": "MTD_EXEC_COUNT",
    "fidNumber": 23520,
    "dataType": "LONG",
    "description": "Month to date Execution Count"
  },
  {
    "fieldName": "MTD_ORDER_COUNT",
    "fidNumber": 23521,
    "dataType": "LONG",
    "description": "Month to date Order Count"
  },
  {
    "fieldName": "MTD_VOLUME",
    "fidNumber": 23522,
    "dataType": "DOUBLE",
    "description": "Month to date Volume"
  },
  {
    "fieldName": "MTD_GROSS_AMT",
    "fidNumber": 23523,
    "dataType": "DOUBLE",
    "description": "Month to date Gross Amount"
  },
  {
    "fieldName": "YTD_EXEC_COUNT",
    "fidNumber": 23530,
    "dataType": "LONG",
    "description": "Year to date Execution Count"
  },
  {
    "fieldName": "YTD_ORDER_COUNT",
    "fidNumber": 23531,
    "dataType": "LONG",
    "description": "Year to date Order Count"
  },
  {
    "fieldName": "YTD_VOLUME",
    "fidNumber": 23532,
    "dataType": "DOUBLE",
    "description": "Year to date Volume"
  },
  {
    "fieldName": "YTD_GROSS_AMT",
    "fidNumber": 23533,
    "dataType": "DOUBLE",
    "description": "Year to date Gross Amount"
  },
  {
    "fieldName": "TIPS_INDEX_RATIO",
    "fidNumber": 23534,
    "dataType": "DOUBLE",
    "description": "Inflation Index Ratio for TIPS"
  },
  {
    "fieldName": "CURR_BID_YIELD",
    "fidNumber": 23535,
    "dataType": "DOUBLE",
    "description": "Current bid yield"
  },
  {
    "fieldName": "CURR_ASK_YIELD",
    "fidNumber": 23536,
    "dataType": "DOUBLE",
    "description": "Current ask yield"
  },
  {
    "fieldName": "COUPNS_PER_ANNUM",
    "fidNumber": 23537,
    "dataType": "LONG",
    "description": "Coupons per Annum"
  },
  {
    "fieldName": "LDB_PRICE_IMPROVEMENT_SPREAD_PCTG",
    "fidNumber": 23538,
    "dataType": "DOUBLE",
    "description": "Price improvement percentage"
  },
  {
    "fieldName": "TRADE_REPORT_TYPE",
    "fidNumber": 23539,
    "dataType": "STRING",
    "description": "Trade Report Type"
  },
  {
    "fieldName": "TRADE_REPORT_BARGAIN_COND",
    "fidNumber": 23540,
    "dataType": "STRING",
    "description": "Trade Report Bargain Conditions"
  },
  {
    "fieldName": "ON_BEHALF_OF_CLIENT",
    "fidNumber": 23541,
    "dataType": "STRING",
    "description": "Client ID"
  },
  {
    "fieldName": "ANALYSIS_PROVIDERS",
    "fidNumber": 23542,
    "dataType": "LONG",
    "description": "Analysis Providers"
  },
  {
    "fieldName": "RESEARCH_PROVIDERS",
    "fidNumber": 23543,
    "dataType": "LONG",
    "description": "Research Providers"
  },
  {
    "fieldName": "OATS_CLIENT_TYPE",
    "fidNumber": 23544,
    "dataType": "LONG",
    "description": "OATS Client Type"
  },
  {
    "fieldName": "ROUTING_FIRM_MPID",
    "fidNumber": 23545,
    "dataType": "STRING",
    "description": "Routing Firm MPID"
  },
  {
    "fieldName": "COND_ACTIVE_TRIGGER",
    "fidNumber": 23546,
    "dataType": "INT",
    "description": "Conditional Order Active Trigger"
  },
  {
    "fieldName": "COND_TAG_INDEX",
    "fidNumber": 23547,
    "dataType": "LONG",
    "description": "Conditional Order Tag Index"
  },
  {
    "fieldName": "REQUEST_TO_TRADER_ID",
    "fidNumber": 23548,
    "dataType": "STRING",
    "description": "Request to"
  },
  {
    "fieldName": "CROSSING_ROUTE",
    "fidNumber": 23558,
    "dataType": "STRING",
    "description": "Crossing Route"
  },
  {
    "fieldName": "NET_VALUE_TRADED_PLUS_FEES",
    "fidNumber": 23559,
    "dataType": "DOUBLE",
    "description": "Net Value Traded + Fees"
  },
  {
    "fieldName": "GROSS_VALUE_TRADED",
    "fidNumber": 23560,
    "dataType": "DOUBLE",
    "description": "Gross Value Traded"
  },
  {
    "fieldName": "NET_VALUE_TRADED",
    "fidNumber": 23561,
    "dataType": "DOUBLE",
    "description": "Net Value Traded"
  },
  {
    "fieldName": "GROSS_SHARES_TRADED",
    "fidNumber": 23562,
    "dataType": "DOUBLE",
    "description": "Gross Shares Traded"
  },
  {
    "fieldName": "SOD_VALUE",
    "fidNumber": 23563,
    "dataType": "DOUBLE",
    "description": "SOD Value"
  },
  {
    "fieldName": "COMPLIANCE_ID",
    "fidNumber": 23564,
    "dataType": "STRING",
    "description": "FIX Compliance ID"
  },
  {
    "fieldName": "DEST_ROUTE",
    "fidNumber": 23565,
    "dataType": "STRING",
    "description": "Sub-Route"
  },
  {
    "fieldName": "DEST_ACCT",
    "fidNumber": 23566,
    "dataType": "LONG",
    "description": "Acct used by TradeDesk"
  },
  {
    "fieldName": "DEST_USER",
    "fidNumber": 23567,
    "dataType": "STRING",
    "description": "UserID used by TradeDesk"
  },
  {
    "fieldName": "NET_SHARES_TRADED",
    "fidNumber": 23568,
    "dataType": "DOUBLE",
    "description": "Net Shares Traded"
  },
  {
    "fieldName": "PRICE_IMPROVEMENT",
    "fidNumber": 23569,
    "dataType": "DOUBLE",
    "description": "Price improvement value"
  },
  {
    "fieldName": "PRICE_IMPROVEMENT_TYPE",
    "fidNumber": 23570,
    "dataType": "LONG",
    "description": "Price improvement type"
  },
  {
    "fieldName": "MIN_TRADE_SIZE_TRANS",
    "fidNumber": 23571,
    "dataType": "LONG",
    "description": "Min trade size (transient ords)"
  },
  {
    "fieldName": "MIN_TRADE_SIZE_RES",
    "fidNumber": 23572,
    "dataType": "LONG",
    "description": "Min trade size (resident ords)"
  },
  {
    "fieldName": "BUY_SIDE",
    "fidNumber": 23573,
    "dataType": "STRING",
    "description": "Side of buy order (usually Buy)"
  },
  {
    "fieldName": "SELL_SIDE",
    "fidNumber": 23574,
    "dataType": "STRING",
    "description": "Side of sell order"
  },
  {
    "fieldName": "BUYER_CAPACITY",
    "fidNumber": 23575,
    "dataType": "STRING",
    "description": "Capacity of buy order"
  },
  {
    "fieldName": "SELLER_CAPACITY",
    "fidNumber": 23576,
    "dataType": "STRING",
    "description": "Capacity of sell order"
  },
  {
    "fieldName": "BUYER_MPID",
    "fidNumber": 23577,
    "dataType": "STRING",
    "description": "MPID of buy order"
  },
  {
    "fieldName": "SELLER_MPID",
    "fidNumber": 23578,
    "dataType": "STRING",
    "description": "MPID of sell order"
  },
  {
    "fieldName": "BUY_ORDER_ID",
    "fidNumber": 23579,
    "dataType": "STRING",
    "description": "Buy order exec ID"
  },
  {
    "fieldName": "SELL_ORDER_ID",
    "fidNumber": 23580,
    "dataType": "STRING",
    "description": "Sell order exec ID"
  },
  {
    "fieldName": "BUY_ORIGINAL_ORDER_ID",
    "fidNumber": 23581,
    "dataType": "STRING",
    "description": "Order ID of buy order"
  },
  {
    "fieldName": "SELL_ORIGINAL_ORDER_ID",
    "fidNumber": 23582,
    "dataType": "STRING",
    "description": "Order ID of sell order"
  },
  {
    "fieldName": "BUYER_IS_MKT_MKR",
    "fidNumber": 23583,
    "dataType": "INT",
    "description": "If 1, buyer is MktMkr in issue"
  },
  {
    "fieldName": "SELLER_IS_MKT_MKR",
    "fidNumber": 23584,
    "dataType": "INT",
    "description": "if 1, seller is MktMkr in issue"
  },
  {
    "fieldName": "CONTRA_BANK",
    "fidNumber": 23585,
    "dataType": "STRING",
    "description": "Bank of contra order"
  },
  {
    "fieldName": "CONTRA_BRANCH",
    "fidNumber": 23586,
    "dataType": "STRING",
    "description": "Branch of contra order"
  },
  {
    "fieldName": "CONTRA_CUSTOMER",
    "fidNumber": 23587,
    "dataType": "STRING",
    "description": "Customer of contra order"
  },
  {
    "fieldName": "CONTRA_DEPOSIT",
    "fidNumber": 23588,
    "dataType": "STRING",
    "description": "Deposit of contra order"
  },
  {
    "fieldName": "CONTRA_TRADER_CAPACITY",
    "fidNumber": 23589,
    "dataType": "STRING",
    "description": "TraderCapacity of contra order"
  },
  {
    "fieldName": "MIN_TRADE_VOLUME",
    "fidNumber": 23590,
    "dataType": "LONG",
    "description": "Minimum volume of trades"
  },
  {
    "fieldName": "PCT_OF_PORTFOLIO",
    "fidNumber": 23591,
    "dataType": "DOUBLE",
    "description": "Pct. Of Portfolio"
  },
  {
    "fieldName": "RATE_OF_RETURN",
    "fidNumber": 23592,
    "dataType": "DOUBLE",
    "description": "Rate of Return"
  },
  {
    "fieldName": "CXL_REASON_CODE",
    "fidNumber": 23593,
    "dataType": "LONG",
    "description": "Cancel reason bitmask"
  },
  {
    "fieldName": "LAST_MARKET",
    "fidNumber": 23594,
    "dataType": "STRING",
    "description": "Last Market"
  },
  {
    "fieldName": "LAST_CAPACITY",
    "fidNumber": 23595,
    "dataType": "STRING",
    "description": "Last Capacity"
  },
  {
    "fieldName": "ACCOUNT_USE",
    "fidNumber": 23596,
    "dataType": "LONG",
    "description": "Account Use"
  },
  {
    "fieldName": "DTC_ELIGIBLE",
    "fidNumber": 23597,
    "dataType": "LONG",
    "description": "DTC Eligible"
  },
  {
    "fieldName": "LAST_MARKET_NML",
    "fidNumber": 23598,
    "dataType": "STRING",
    "description": "Last Market (Norm)"
  },
  {
    "fieldName": "BROKER_EXCLUSION",
    "fidNumber": 23599,
    "dataType": "STRING",
    "description": "Broker Exclusion List"
  },
  {
    "fieldName": "LEG_CURRENCY",
    "fidNumber": 23600,
    "dataType": "STRING",
    "description": "Leg Currency"
  },
  {
    "fieldName": "BROKER_INCLUSION",
    "fidNumber": 23601,
    "dataType": "STRING",
    "description": "Broker Inclusion List"
  },
  {
    "fieldName": "PRIME_BROKER",
    "fidNumber": 23602,
    "dataType": "STRING",
    "description": "Prime Broker"
  },
  {
    "fieldName": "EXEC_STRAT_1",
    "fidNumber": 23603,
    "dataType": "STRING",
    "description": "Exec Strat1"
  },
  {
    "fieldName": "EXEC_STRAT_2",
    "fidNumber": 23604,
    "dataType": "STRING",
    "description": "Exec Strat2"
  },
  {
    "fieldName": "CONTRA_BROKER",
    "fidNumber": 23605,
    "dataType": "STRING",
    "description": "CONTRA_BROKER"
  },
  {
    "fieldName": "STRAT_TIMEONLY_TAGS",
    "fidNumber": 23606,
    "dataType": "STRING",
    "description": "TimeOnly FIX Algo tags"
  },
  {
    "fieldName": "PCT_OF_PORTFOLIO_MV",
    "fidNumber": 23607,
    "dataType": "DOUBLE",
    "description": "Pct. Of Portfolio MV"
  },
  {
    "fieldName": "FUTURE_APPLY_SIDE",
    "fidNumber": 23608,
    "dataType": "STRING",
    "description": "Future Apply Side"
  },
  {
    "fieldName": "CURRENT_SHOW_SIZE",
    "fidNumber": 23609,
    "dataType": "LONG",
    "description": "Current Show Size"
  },
  {
    "fieldName": "ACTION_ID",
    "fidNumber": 23610,
    "dataType": "LONG",
    "description": "Action ID"
  },
  {
    "fieldName": "CURRENT_STATUS_ID",
    "fidNumber": 23611,
    "dataType": "LONG",
    "description": "Current Status ID"
  },
  {
    "fieldName": "PRICE_TYPE_ID",
    "fidNumber": 23612,
    "dataType": "LONG",
    "description": "Price Type ID"
  },
  {
    "fieldName": "VOLUME_TYPE_ID",
    "fidNumber": 23613,
    "dataType": "LONG",
    "description": "Volume Type ID"
  },
  {
    "fieldName": "CROSS_STATUS_HINT",
    "fidNumber": 23619,
    "dataType": "STRING",
    "description": "Cross Status Hint"
  },
  {
    "fieldName": "CROSS_ID",
    "fidNumber": 23620,
    "dataType": "LONG",
    "description": "Cross ID"
  },
  {
    "fieldName": "CROSS_MIN_VOLUME",
    "fidNumber": 23621,
    "dataType": "LONG",
    "description": "Cross Min Vol"
  },
  {
    "fieldName": "CROSS_MAX_VOLUME",
    "fidNumber": 23622,
    "dataType": "LONG",
    "description": "Cross Max Vol"
  },
  {
    "fieldName": "CROSS_TABLE_ANTE",
    "fidNumber": 23623,
    "dataType": "LONG",
    "description": "Cross Table Ante"
  },
  {
    "fieldName": "CROSS_OFFER_TIMEOUT",
    "fidNumber": 23624,
    "dataType": "LONG",
    "description": "Cross Offer Timeout"
  },
  {
    "fieldName": "CROSS_FLAGS",
    "fidNumber": 23625,
    "dataType": "LONG",
    "description": "Cross Flags"
  },
  {
    "fieldName": "CROSS_FIRM_ID",
    "fidNumber": 23626,
    "dataType": "LONG",
    "description": "Cross Firm ID"
  },
  {
    "fieldName": "CROSS_STATUS_DISP",
    "fidNumber": 23627,
    "dataType": "STRING",
    "description": "Cross Status"
  },
  {
    "fieldName": "CROSS_STATUS_ENUM",
    "fidNumber": 23628,
    "dataType": "LONG",
    "description": "Cross Status Enum"
  },
  {
    "fieldName": "CROSS_ORDER_ID",
    "fidNumber": 23629,
    "dataType": "STRING",
    "description": "Cross Order ID"
  },
  {
    "fieldName": "CROSS_NEGOTIATE_ID",
    "fidNumber": 23630,
    "dataType": "STRING",
    "description": "Cross Negotiation ID"
  },
  {
    "fieldName": "CROSS_IOI_PARAM",
    "fidNumber": 23631,
    "dataType": "BLOB",
    "description": "Cross IOI Parameters"
  },
  {
    "fieldName": "SHORT_LOCATE_VOLUME",
    "fidNumber": 23632,
    "dataType": "LONG",
    "description": "Short Locate Volume"
  },
  {
    "fieldName": "SHORT_LOCATE_DATETIME",
    "fidNumber": 23633,
    "dataType": "STRING",
    "description": "Short Locate DateTime"
  },
  {
    "fieldName": "SHORT_LOCATE_CONTACT",
    "fidNumber": 23634,
    "dataType": "STRING",
    "description": "Short Locate Contact"
  },
  {
    "fieldName": "SHORT_LOCATE_LEVEL",
    "fidNumber": 23635,
    "dataType": "LONG",
    "description": "Short Locate Level"
  },
  {
    "fieldName": "NUM_ORDERS",
    "fidNumber": 23636,
    "dataType": "LONG",
    "description": "Num Rows"
  },
  {
    "fieldName": "LINKED_ORDER_TAG",
    "fidNumber": 23637,
    "dataType": "STRING",
    "description": "Linked Order Tag"
  },
  {
    "fieldName": "REGULATION_ID",
    "fidNumber": 23638,
    "dataType": "STRING",
    "description": "Regulation ID"
  },
  {
    "fieldName": "SME_SHORT_MARKING_EXEMPT",
    "fidNumber": 23639,
    "dataType": "STRING",
    "description": "SME Short Marking Exempt"
  },
  {
    "fieldName": "TICKET_STEPOUT_INTERVAL",
    "fidNumber": 23640,
    "dataType": "LONG",
    "description": "Step out reporting interval"
  },
  {
    "fieldName": "TICKET_STEPOUT_INTERVAL_LAST",
    "fidNumber": 23641,
    "dataType": "LONG",
    "description": "Seconds since stepout"
  },
  {
    "fieldName": "AVERAGE_PRICE_TODAY",
    "fidNumber": 23642,
    "dataType": "DOUBLE",
    "description": "Today's average price"
  },
  {
    "fieldName": "TRADER_LOCATION_COUNTRY",
    "fidNumber": 23643,
    "dataType": "STRING",
    "description": "TRADER_LOCATION_COUNTRY"
  },
  {
    "fieldName": "TRADER_LOCATION_STATE",
    "fidNumber": 23644,
    "dataType": "STRING",
    "description": "TRADER_LOCATION_STATE"
  },
  {
    "fieldName": "LAST_FILL_TIME",
    "fidNumber": 23645,
    "dataType": "TIME",
    "description": "Last Fill Time"
  },
  {
    "fieldName": "LAST_FILL_DATE",
    "fidNumber": 23646,
    "dataType": "DATE",
    "description": "Last Fill Date"
  },
  {
    "fieldName": "EXPAND_ROW",
    "fidNumber": 23647,
    "dataType": "INT",
    "description": "Expand Row"
  },
  {
    "fieldName": "FILLTRACKER_CONTROL",
    "fidNumber": 23648,
    "dataType": "INT",
    "description": "Runtime filltracker control"
  },
  {
    "fieldName": "SRV_AVAIL_EXCESS",
    "fidNumber": 23650,
    "dataType": "DOUBLE",
    "description": "Available Excess (server)"
  },
  {
    "fieldName": "SRV_AVAIL_HOUSE_EXCESS",
    "fidNumber": 23651,
    "dataType": "DOUBLE",
    "description": "Available House Excess (server)"
  },
  {
    "fieldName": "SRV_AVAIL_CASH",
    "fidNumber": 23652,
    "dataType": "DOUBLE",
    "description": "Available Cash (server)"
  },
  {
    "fieldName": "SRV_UNREALIZED_PL",
    "fidNumber": 23655,
    "dataType": "DOUBLE",
    "description": "Account uP&L (server)"
  },
  {
    "fieldName": "SETTLEMENT_CURRENCY",
    "fidNumber": 23656,
    "dataType": "STRING",
    "description": "Settle Currency"
  },
  {
    "fieldName": "SETTLEMENT_FX_RATE",
    "fidNumber": 23657,
    "dataType": "DOUBLE",
    "description": "Settle Fx Rate"
  },
  {
    "fieldName": "SETTLEMENT_CENTRE",
    "fidNumber": 23658,
    "dataType": "STRING",
    "description": "Settlement Centre"
  },
  {
    "fieldName": "ACTIVE_CROSSING_NETWORKS",
    "fidNumber": 23660,
    "dataType": "LONG",
    "description": "Active networks"
  },
  {
    "fieldName": "ACT_SPECIAL_INSTR",
    "fidNumber": 23661,
    "dataType": "STRING",
    "description": "ACT Special Instruction"
  },
  {
    "fieldName": "ACT_CLEARING_INSTR",
    "fidNumber": 23662,
    "dataType": "STRING",
    "description": "ACT Clearing Instruction"
  },
  {
    "fieldName": "ACT_SHORTSALE_REASON",
    "fidNumber": 23663,
    "dataType": "STRING",
    "description": "ACT Short Sale Reason"
  },
  {
    "fieldName": "ACT_PARTY_ROLE",
    "fidNumber": 23664,
    "dataType": "STRING",
    "description": "ACT Party Role"
  },
  {
    "fieldName": "ACT_MEMO",
    "fidNumber": 23665,
    "dataType": "STRING",
    "description": "ACT Memo"
  },
  {
    "fieldName": "ACT_RELATED_MARKET",
    "fidNumber": 23666,
    "dataType": "STRING",
    "description": "ACT Related Market"
  },
  {
    "fieldName": "ACT_TRADE_THRU_EXEMPT",
    "fidNumber": 23667,
    "dataType": "STRING",
    "description": "ACT Trade Exempt"
  },
  {
    "fieldName": "ACT_PRICE_OVERRIDE",
    "fidNumber": 23668,
    "dataType": "STRING",
    "description": "ACT Price Override"
  },
  {
    "fieldName": "ACT_CONTRACT",
    "fidNumber": 23669,
    "dataType": "DOUBLE",
    "description": "ACT Contract"
  },
  {
    "fieldName": "ACT_CONTRA_PARTY",
    "fidNumber": 23670,
    "dataType": "STRING",
    "description": "ACT Contra Party"
  },
  {
    "fieldName": "ACT_CP_CAPACITY",
    "fidNumber": 23671,
    "dataType": "STRING",
    "description": "ACT CP Capacity"
  },
  {
    "fieldName": "ACT_EP_CAPACITY",
    "fidNumber": 23672,
    "dataType": "STRING",
    "description": "ACT EP Capacity"
  },
  {
    "fieldName": "ACT_CP_GIVUP",
    "fidNumber": 23673,
    "dataType": "STRING",
    "description": "ACT CP Give Up"
  },
  {
    "fieldName": "ACT_EP_GIVUP",
    "fidNumber": 23674,
    "dataType": "STRING",
    "description": "ACT EP Give Up"
  },
  {
    "fieldName": "ACT_CP_BRANCH_SEQ",
    "fidNumber": 23675,
    "dataType": "STRING",
    "description": "ACT CP Branch Seq"
  },
  {
    "fieldName": "ACT_EP_BRANCH_SEQ",
    "fidNumber": 23676,
    "dataType": "STRING",
    "description": "ACT EP Branch Seq"
  },
  {
    "fieldName": "ACT_CP_CLEARING",
    "fidNumber": 23677,
    "dataType": "STRING",
    "description": "ACT CP Clearing"
  },
  {
    "fieldName": "ACT_EP_CLEARING",
    "fidNumber": 23678,
    "dataType": "STRING",
    "description": "ACT EP Clearing"
  },
  {
    "fieldName": "ACT_DAYS_TO_SETTLE",
    "fidNumber": 23679,
    "dataType": "STRING",
    "description": "ACT Days To Settle"
  },
  {
    "fieldName": "LAST_ORDER_AMT",
    "fidNumber": 23680,
    "dataType": "LONG",
    "description": "Last Order Amount"
  },
  {
    "fieldName": "RECEIPT_TIME_OF_ORDER",
    "fidNumber": 23700,
    "dataType": "STRING",
    "description": "Time of Receipt of Order"
  },
  {
    "fieldName": "HANDLER_ACK_INFO",
    "fidNumber": 23800,
    "dataType": "STRING",
    "description": "HANDLER_ACK_INFO"
  },
  {
    "fieldName": "HANDLER_ACK_CLERK_NAME",
    "fidNumber": 23801,
    "dataType": "STRING",
    "description": "HANDLER_ACK_CLERK_NAME"
  },
  {
    "fieldName": "HANDLER_ACK_ROUTE",
    "fidNumber": 23802,
    "dataType": "STRING",
    "description": "HANDLER_ACK_ROUTE"
  },
  {
    "fieldName": "BLOB_HEADER",
    "fidNumber": 23900,
    "dataType": "BLOB",
    "description": "General update header blob"
  },
  {
    "fieldName": "BLOB_BBO",
    "fidNumber": 23901,
    "dataType": "BLOB",
    "description": "BBO data blob"
  },
  {
    "fieldName": "BLOB_MKTMKR",
    "fidNumber": 23902,
    "dataType": "BLOB",
    "description": "Market maker data blob"
  },
  {
    "fieldName": "BLOB_REGIONAL",
    "fidNumber": 23903,
    "dataType": "BLOB",
    "description": "Regional data blob"
  },
  {
    "fieldName": "BLOB_LIVEQUOTE_HDR",
    "fidNumber": 23904,
    "dataType": "BLOB",
    "description": "Hdr blob for LIVEQUOTE updates"
  },
  {
    "fieldName": "BLOB_MKTMKR_HDR",
    "fidNumber": 23905,
    "dataType": "BLOB",
    "description": "Hdr blob for MKTMKR updates"
  },
  {
    "fieldName": "BLOB_REGIONAL_HDR",
    "fidNumber": 23906,
    "dataType": "BLOB",
    "description": "Hdr blob for REGIONAL updates"
  },
  {
    "fieldName": "BLOB_TAL4",
    "fidNumber": 23907,
    "dataType": "BLOB",
    "description": "Blob containing TAL4 block"
  },
  {
    "fieldName": "BLOB_SCAN_HDR",
    "fidNumber": 23908,
    "dataType": "BLOB",
    "description": "Hdr blob for SCAN updates"
  },
  {
    "fieldName": "BLOB_TICKS_HDR",
    "fidNumber": 23909,
    "dataType": "BLOB",
    "description": "Hdr blob for TICKS updates"
  },
  {
    "fieldName": "BLOB_TICKS",
    "fidNumber": 23910,
    "dataType": "BLOB",
    "description": "Tick data blob"
  },
  {
    "fieldName": "BLOB_TRADES",
    "fidNumber": 23911,
    "dataType": "BLOB",
    "description": "Trade data blob"
  },
  {
    "fieldName": "BLOB_BIDTICK",
    "fidNumber": 23912,
    "dataType": "BLOB",
    "description": "Bid Tick Indicator blob"
  },
  {
    "fieldName": "BLOB_REGIONAL_TRADE",
    "fidNumber": 23913,
    "dataType": "BLOB",
    "description": "Regional Trade blob"
  },
  {
    "fieldName": "EXIT_VOLUME_TRADED",
    "fidNumber": 23914,
    "dataType": "LONG",
    "description": "ExitVolTraded"
  },
  {
    "fieldName": "EXIT_AVG_PRICE",
    "fidNumber": 23915,
    "dataType": "DOUBLE",
    "description": "ExitAvgPrice"
  },
  {
    "fieldName": "EXITSTEP_TYPE",
    "fidNumber": 23916,
    "dataType": "LONG",
    "description": "ExitStepType"
  },
  {
    "fieldName": "LINKED_ORDER_EXIT",
    "fidNumber": 23917,
    "dataType": "BLOB",
    "description": "LinkedOrderExit"
  },
  {
    "fieldName": "BRACKET_TYPE",
    "fidNumber": 23918,
    "dataType": "LONG",
    "description": "BracketType"
  },
  {
    "fieldName": "EXITSTEP_AMT",
    "fidNumber": 23919,
    "dataType": "LONG",
    "description": "ExitStepAmount"
  },
  {
    "fieldName": "DARKWHEEL_DEST_BLOCK",
    "fidNumber": 23920,
    "dataType": "BLOB",
    "description": "DarkwheelDestBlock"
  },
  {
    "fieldName": "DARKWHEEL_DEST_MIN_VOLUME",
    "fidNumber": 23921,
    "dataType": "LONG",
    "description": "DarkwheelDestMinVol"
  },
  {
    "fieldName": "DARKWHEEL_REBALANCE_THRESHOLD",
    "fidNumber": 23922,
    "dataType": "LONG",
    "description": "DarkwheelDestRebalanceThold"
  },
  {
    "fieldName": "DARKWHEEL_ALLOC_PCT ",
    "fidNumber": 23923,
    "dataType": "LONG",
    "description": "DarkWheelAllocPct"
  },
  {
    "fieldName": "DARKWHEEL_PREV_VOLUME ",
    "fidNumber": 23924,
    "dataType": "LONG",
    "description": "DarkWheelPrevVol"
  },
  {
    "fieldName": "DARKWHEEL_DEST_MIN_MOVE",
    "fidNumber": 23925,
    "dataType": "LONG",
    "description": "DarkWheelDestMinMove"
  },
  {
    "fieldName": "DARKWHEEL_MIN_REBALANCE_INTERVAL",
    "fidNumber": 23926,
    "dataType": "LONG",
    "description": "DarkWheelMinRebalanceInterval"
  },
  {
    "fieldName": "BRACKET_OVERLAY_ORDER_ID",
    "fidNumber": 23927,
    "dataType": "STRING",
    "description": "BRACKET_OVERLAY_ORDER_ID"
  },
  {
    "fieldName": "REQUEST_TQL",
    "fidNumber": 23928,
    "dataType": "STRING",
    "description": "REQUEST_TQL"
  },
  {
    "fieldName": "CLIENT_USERID",
    "fidNumber": 23929,
    "dataType": "STRING",
    "description": "CLIENT_USERID"
  },
  {
    "fieldName": "SYNTHETIC_ICEBERG_ORDER_SEQUENCE",
    "fidNumber": 23930,
    "dataType": "LONG",
    "description": "SYNTHETIC_ICEBERG_ORDER_SEQUENCE"
  },
  {
    "fieldName": "SYNTHETIC_ICEBERG_ORDER_ID",
    "fidNumber": 23931,
    "dataType": "STRING",
    "description": "SYNTHETIC_ICEBERG_ORDER_ID"
  },
  {
    "fieldName": "SYNTHETIC_ICEBERG_VOLUME_TARGET",
    "fidNumber": 23932,
    "dataType": "LONG",
    "description": "SYNTHETIC_ICEBERG_VOLUME_TARGET"
  },
  {
    "fieldName": "SYNTHETIC_ICEBERG_OTHER_ACCT_ID",
    "fidNumber": 23933,
    "dataType": "LONG",
    "description": "SYNTHETIC_ICEBERG_OTHER_ACCT_ID"
  },
  {
    "fieldName": "DARKWHEEL_REBALANCE_STYLE",
    "fidNumber": 23934,
    "dataType": "LONG",
    "description": "DARKWHEEL_REBALANCE_STYLE"
  },
  {
    "fieldName": "OMS_ORPHAN_ORDER_FLAG",
    "fidNumber": 23935,
    "dataType": "LONG",
    "description": "Orphaned Order Flag"
  },
  {
    "fieldName": "OMS_UPDATE_TIME",
    "fidNumber": 23936,
    "dataType": "LONG",
    "description": "OMS Update Timestamp"
  },
  {
    "fieldName": "OMS_RECYCLE_TIME",
    "fidNumber": 23937,
    "dataType": "LONG",
    "description": "EMS Recycle Timestamp"
  },
  {
    "fieldName": "OMS_SYMBOL",
    "fidNumber": 23938,
    "dataType": "STRING",
    "description": "OMS Symbol"
  },
  {
    "fieldName": "OMS_CURRENCY",
    "fidNumber": 23939,
    "dataType": "STRING",
    "description": "OMS Currency"
  },
  {
    "fieldName": "RESTATE_MESSAGE",
    "fidNumber": 23954,
    "dataType": "STRING",
    "description": "Restate Message"
  },
  {
    "fieldName": "LAST_LIQUIDITY_INDICATOR",
    "fidNumber": 23955,
    "dataType": "STRING",
    "description": "LAST_LIQUIDITY_INDICATOR"
  },
  {
    "fieldName": "CLIENT_ORDER_ID",
    "fidNumber": 23956,
    "dataType": "STRING",
    "description": "Client Order ID"
  },
  {
    "fieldName": "COMMISSION_MGT_TYPE",
    "fidNumber": 23957,
    "dataType": "LONG",
    "description": "Commission Mgt Type"
  },
  {
    "fieldName": "COMMISSION_MGT_ID",
    "fidNumber": 23958,
    "dataType": "STRING",
    "description": "Commission Mgt ID"
  },
  {
    "fieldName": "HOUSE_COMMISSION",
    "fidNumber": 23959,
    "dataType": "DOUBLE",
    "description": "House Commission"
  },
  {
    "fieldName": "HOUSE_COMMISSION_TYPE",
    "fidNumber": 23960,
    "dataType": "LONG",
    "description": "House Commission Type"
  },
  {
    "fieldName": "ADD_COMMISSION",
    "fidNumber": 23961,
    "dataType": "LONG",
    "description": "Add Commission"
  },
  {
    "fieldName": "PASSENGER_MARKET_ACCOUNT",
    "fidNumber": 23962,
    "dataType": "STRING",
    "description": "Passenger Market Account"
  },
  {
    "fieldName": "FX_RATE",
    "fidNumber": 23963,
    "dataType": "DOUBLE",
    "description": "FX Rate"
  },
  {
    "fieldName": "STAMP_TAX",
    "fidNumber": 23964,
    "dataType": "DOUBLE",
    "description": "Stamp Tax"
  },
  {
    "fieldName": "ALLOCATION_BUST_ID",
    "fidNumber": 23965,
    "dataType": "STRING",
    "description": "Allocation Bust ID"
  },
  {
    "fieldName": "ALT_SHORT_LOCATE_ID",
    "fidNumber": 23966,
    "dataType": "STRING",
    "description": "Short Locate ID"
  },
  {
    "fieldName": "COMMISSION_FLAGS",
    "fidNumber": 23967,
    "dataType": "LONG",
    "description": "Commission flags"
  },
  {
    "fieldName": "TRADE_SIZE_BUCKET",
    "fidNumber": 23968,
    "dataType": "STRING",
    "description": "Trade Size Bucket"
  },
  {
    "fieldName": "VOLUME_ADJUSTMENT",
    "fidNumber": 23969,
    "dataType": "LONG",
    "description": "Volume Adjustment"
  },
  {
    "fieldName": "ALTERNATE_AVG_PRICE",
    "fidNumber": 23970,
    "dataType": "DOUBLE",
    "description": "Alternate Average Price"
  },
  {
    "fieldName": "OVERFLOW_BBCD",
    "fidNumber": 23971,
    "dataType": "STRING",
    "description": "Overflow BBCD"
  },
  {
    "fieldName": "INTERNAL_CROSS_FLAG",
    "fidNumber": 23973,
    "dataType": "LONG",
    "description": "Flags for Internal Cross"
  },
  {
    "fieldName": "CROSS_MATCH_ORDER_IDS",
    "fidNumber": 23974,
    "dataType": "STRING",
    "description": "comma separated list of Order IDs"
  },
  {
    "fieldName": "SYMBOL_START_STOP_ATTRIBUTES",
    "fidNumber": 23975,
    "dataType": "STRING",
    "description": "Symbol Start/Stop Attributes"
  },
  {
    "fieldName": "CHILD_EXIT_VEHICLE",
    "fidNumber": 25001,
    "dataType": "STRING",
    "description": "Child Route"
  },
  {
    "fieldName": "CHILD_VOLUME",
    "fidNumber": 25002,
    "dataType": "LONG",
    "description": "Child Qty"
  },
  {
    "fieldName": "CHILD_VOLUME_TYPE",
    "fidNumber": 25003,
    "dataType": "STRING",
    "description": "Child Volume Type"
  },
  {
    "fieldName": "CHILD_PRICE_TYPE",
    "fidNumber": 25004,
    "dataType": "STRING",
    "description": "Child Price Type"
  },
  {
    "fieldName": "CHILD_PRICE",
    "fidNumber": 25005,
    "dataType": "LPACK",
    "description": "Child Price"
  },
  {
    "fieldName": "CHILD_GOOD_UNTIL",
    "fidNumber": 25006,
    "dataType": "STRING",
    "description": "Child Expiration"
  },
  {
    "fieldName": "CHILD_STRATEGY",
    "fidNumber": 25007,
    "dataType": "STRING",
    "description": "Child Strategy"
  },
  {
    "fieldName": "CHILD_READY_TO_SEND",
    "fidNumber": 25008,
    "dataType": "LONG",
    "description": "Child Ready"
  },
  {
    "fieldName": "CHILD_PRICE_OFFSET",
    "fidNumber": 25009,
    "dataType": "LPACK",
    "description": "Child Price Offset"
  },
  {
    "fieldName": "CHILD_DISCRETION_OFFSET",
    "fidNumber": 25010,
    "dataType": "LPACK",
    "description": "Child Discretion Offset"
  },
  {
    "fieldName": "CHILD_STOP_PRICE",
    "fidNumber": 25011,
    "dataType": "LPACK",
    "description": "Child Stop Price"
  },
  {
    "fieldName": "CHILD_PRICE_DELTA",
    "fidNumber": 25012,
    "dataType": "LPACK",
    "description": "Child Price Delta"
  },
  {
    "fieldName": "CHILD_PRICE_REFERENCE",
    "fidNumber": 25013,
    "dataType": "LONG",
    "description": "Child Price Reference"
  },
  {
    "fieldName": "CHILD_PRICE_DETAILS",
    "fidNumber": 25014,
    "dataType": "STRING",
    "description": "Child Price Details"
  },
  {
    "fieldName": "CHILD_SHOWSIZE",
    "fidNumber": 25015,
    "dataType": "LONG",
    "description": "Child Show Size"
  },
  {
    "fieldName": "CHILD_LOCATE_ID",
    "fidNumber": 25016,
    "dataType": "STRING",
    "description": "Child Locate ID"
  },
  {
    "fieldName": "CHILD_BOOKING_TYPE",
    "fidNumber": 25017,
    "dataType": "LONG",
    "description": "Child Booking Type"
  },
  {
    "fieldName": "CHILD_PEG_PRICE_REFERENCE",
    "fidNumber": 25018,
    "dataType": "LONG",
    "description": "Child Peg Price Reference"
  },
  {
    "fieldName": "CHILD_PEG_PRICE_OFFSET",
    "fidNumber": 25019,
    "dataType": "LPACK",
    "description": "Child Peg Price Offset"
  },
  {
    "fieldName": "CHILD_FIRM",
    "fidNumber": 25020,
    "dataType": "STRING",
    "description": "Child Firm"
  },
  {
    "fieldName": "CHILD_BBCD",
    "fidNumber": 25021,
    "dataType": "STRING",
    "description": "Child BBCD"
  },
  {
    "fieldName": "CHILD_MESSAGE",
    "fidNumber": 25022,
    "dataType": "STRING",
    "description": "Child Msg"
  },
  {
    "fieldName": "CHILD_STOP_REFERENCE",
    "fidNumber": 25023,
    "dataType": "LONG",
    "description": "Child Stop Reference"
  },
  {
    "fieldName": "CHILD_STOP_OFFSET",
    "fidNumber": 25024,
    "dataType": "LPACK",
    "description": "Child Stop Offset"
  },
  {
    "fieldName": "CHILD_TRAIL_AMOUNT",
    "fidNumber": 25025,
    "dataType": "LPACK",
    "description": "Child Trail Amount"
  },
  {
    "fieldName": "CHILD_TRAIL_LIMIT_OFFSET",
    "fidNumber": 25026,
    "dataType": "LPACK",
    "description": "Child Trail Limit Offset"
  },
  {
    "fieldName": "CHILD_STRAT_PARAM",
    "fidNumber": 25027,
    "dataType": "BLOB",
    "description": "Child Strategy Parameters"
  },
  {
    "fieldName": "CHILD_UNDERLIER_PRICE",
    "fidNumber": 25028,
    "dataType": "LPACK",
    "description": "Child Underlier Price"
  },
  {
    "fieldName": "CHILD_TRADER_CAPACITY",
    "fidNumber": 25029,
    "dataType": "STRING",
    "description": "Child Trader Capacity"
  },
  {
    "fieldName": "CHILD_OPPOSITE_PARTY",
    "fidNumber": 25030,
    "dataType": "STRING",
    "description": "Child Opposite Party"
  },
  {
    "fieldName": "CHILD_COMMISSION_TYPE",
    "fidNumber": 25031,
    "dataType": "LONG",
    "description": "Child Commission Type"
  },
  {
    "fieldName": "CHILD_COMMISSION",
    "fidNumber": 25032,
    "dataType": "DOUBLE",
    "description": "Child Commission"
  },
  {
    "fieldName": "CHILD_PRICE_OFFSET_TYPE",
    "fidNumber": 25033,
    "dataType": "LONG",
    "description": "Child Price Offset Type"
  },
  {
    "fieldName": "CHILD_DISCRETION_OFFSET_TYPE",
    "fidNumber": 25034,
    "dataType": "LONG",
    "description": "Child Discretion Offset Type"
  },
  {
    "fieldName": "CHILD_PEG_PRICE_OFFSET_TYPE",
    "fidNumber": 25035,
    "dataType": "LONG",
    "description": "Child Peg Price Offset Type"
  },
  {
    "fieldName": "CHILD_STOP_OFFSET_TYPE",
    "fidNumber": 25036,
    "dataType": "LONG",
    "description": "Child Stop Offset Type"
  },
  {
    "fieldName": "CHILD_TRAIL_AMOUNT_TYPE",
    "fidNumber": 25037,
    "dataType": "LONG",
    "description": "Child Trail Amount Type"
  },
  {
    "fieldName": "CHILD_TRAIL_LIMIT_OFFSET_TYPE",
    "fidNumber": 25038,
    "dataType": "LONG",
    "description": "Child Trail Limit Offset Type"
  },
  {
    "fieldName": "CHILD_PARAMETERS",
    "fidNumber": 25039,
    "dataType": "BLOB",
    "description": "Child Parameters"
  },
  {
    "fieldName": "CHILD_VOLUME_PERCENT",
    "fidNumber": 25040,
    "dataType": "LONG",
    "description": "Child Qty Percent"
  },
  {
    "fieldName": "CHILD_VOLUME_PERCENT_TYPE",
    "fidNumber": 25041,
    "dataType": "LONG",
    "description": "Child Qty Percent Type"
  },
  {
    "fieldName": "CHILD_LEG_1_QUANTITY",
    "fidNumber": 25042,
    "dataType": "LONG",
    "description": "Child Leg 1 Qty"
  },
  {
    "fieldName": "CHILD_LEG_2_QUANTITY",
    "fidNumber": 25043,
    "dataType": "LONG",
    "description": "Child Leg 2 Qty"
  },
  {
    "fieldName": "CHILD_VOLUME_RULE",
    "fidNumber": 25044,
    "dataType": "STRING",
    "description": "Child Qty Rule"
  },
  {
    "fieldName": "CHILD_GOOD_FROM",
    "fidNumber": 25045,
    "dataType": "STRING",
    "description": "Child Start Time"
  },
  {
    "fieldName": "UI_ORDER_SEQ_NUM",
    "fidNumber": 25046,
    "dataType": "LONG",
    "description": "UI Order Seq Number"
  },
  {
    "fieldName": "ADR_TO_TICKET_HINT",
    "fidNumber": 25047,
    "dataType": "STRING",
    "description": "ADR Ticket Hint"
  },
  {
    "fieldName": "CLIENT_REFERENCE",
    "fidNumber": 25048,
    "dataType": "STRING",
    "description": "Client Reference"
  },
  {
    "fieldName": "CLIENT_DETAIL_ID",
    "fidNumber": 25049,
    "dataType": "STRING",
    "description": "Client Detail ID"
  },
  {
    "fieldName": "CLIENT_ACCOUNT_ID",
    "fidNumber": 25050,
    "dataType": "STRING",
    "description": "Client Account ID"
  },
  {
    "fieldName": "COMMISSION_PLAN_ACCOUNT",
    "fidNumber": 25051,
    "dataType": "STRING",
    "description": "COMMISSION_PLAN_ACCOUNT"
  },
  {
    "fieldName": "RHO",
    "fidNumber": 25052,
    "dataType": "DOUBLE",
    "description": "RHO"
  },
  {
    "fieldName": "CHILD_POPUP",
    "fidNumber": 25053,
    "dataType": "LONG",
    "description": "Child Popup"
  },
  {
    "fieldName": "IMPORTED_SYM_VALUE",
    "fidNumber": 25054,
    "dataType": "STRING",
    "description": "Imported Sym"
  },
  {
    "fieldName": "TI_START_LINK_ID",
    "fidNumber": 25055,
    "dataType": "STRING",
    "description": "TI START Link ID"
  },
  {
    "fieldName": "TI_METHOD_EXEC",
    "fidNumber": 25056,
    "dataType": "STRING",
    "description": "TI Method Of Execution"
  },
  {
    "fieldName": "TI_START_ELIGIBLE_FLAG",
    "fidNumber": 25057,
    "dataType": "LONG",
    "description": "TI START Eligible"
  },
  {
    "fieldName": "AGGREGATE_NET_POS",
    "fidNumber": 29994,
    "dataType": "LONG",
    "description": "Aggregated Net Position"
  },
  {
    "fieldName": "OMS_CODE_TYPE",
    "fidNumber": 29995,
    "dataType": "STRING",
    "description": "OMS Code type"
  },
  {
    "fieldName": "OMS_CODE_KEY",
    "fidNumber": 29996,
    "dataType": "STRING",
    "description": "OMS Code Key"
  },
  {
    "fieldName": "OMS_CODE_VALUE",
    "fidNumber": 29997,
    "dataType": "STRING",
    "description": "OMS Code Value"
  },
  {
    "fieldName": "OMS_CODE_FID",
    "fidNumber": 29998,
    "dataType": "LONG",
    "description": "OMS Code Fid"
  },
  {
    "fieldName": "MR_LOANSREPAID",
    "fidNumber": 30000,
    "dataType": "LONG",
    "description": "Loans repaid"
  },
  {
    "fieldName": "MR_LOANSRAISED",
    "fidNumber": 30001,
    "dataType": "LONG",
    "description": "Loans raised"
  },
  {
    "fieldName": "MR_PURCHASEOFSHARES",
    "fidNumber": 30002,
    "dataType": "LONG",
    "description": "Purchase of shares"
  },
  {
    "fieldName": "MR_ISSUEOFSHARES",
    "fidNumber": 30003,
    "dataType": "LONG",
    "description": "Issue of shares"
  },
  {
    "fieldName": "MR_FINANCING",
    "fidNumber": 30004,
    "dataType": "LONG",
    "description": "Financing"
  },
  {
    "fieldName": "MR_MGTLIQUIDRESOURCE",
    "fidNumber": 30005,
    "dataType": "LONG",
    "description": "Management of liquid resources"
  },
  {
    "fieldName": "MR_EQUITYDIVPAID",
    "fidNumber": 30006,
    "dataType": "LONG",
    "description": "Equity Dividends Paid"
  },
  {
    "fieldName": "MR_DISPOSALS",
    "fidNumber": 30007,
    "dataType": "LONG",
    "description": "Disposals"
  },
  {
    "fieldName": "MR_ACQUISITIONS",
    "fidNumber": 30008,
    "dataType": "LONG",
    "description": "Acquisitions"
  },
  {
    "fieldName": "MR_ACQUISITIONSDISP",
    "fidNumber": 30009,
    "dataType": "LONG",
    "description": "Acquisitions & disposals"
  },
  {
    "fieldName": "MR_SALEOFINVESTMENTS",
    "fidNumber": 30010,
    "dataType": "LONG",
    "description": "Sale of investments"
  },
  {
    "fieldName": "MR_PURCHASEOFINVEST",
    "fidNumber": 30011,
    "dataType": "LONG",
    "description": "Purchase of investments"
  },
  {
    "fieldName": "MR_SALEOFASSETSF",
    "fidNumber": 30012,
    "dataType": "LONG",
    "description": "Sale of assets"
  },
  {
    "fieldName": "MR_PURCHASEOFASSETSF",
    "fidNumber": 30013,
    "dataType": "LONG",
    "description": "Purchase of assets"
  },
  {
    "fieldName": "MR_CAPEXPFINANCINV",
    "fidNumber": 30014,
    "dataType": "LONG",
    "description": "Capital expenditure & fin invest"
  },
  {
    "fieldName": "MR_TAXATION",
    "fidNumber": 30015,
    "dataType": "LONG",
    "description": "Taxation"
  },
  {
    "fieldName": "MR_OTHSERVICINGPAID",
    "fidNumber": 30016,
    "dataType": "LONG",
    "description": "Other servicing paid"
  },
  {
    "fieldName": "MR_OTHRETURNRECEIVED",
    "fidNumber": 30017,
    "dataType": "LONG",
    "description": "Other returns received"
  },
  {
    "fieldName": "MR_INTERESTPAID",
    "fidNumber": 30018,
    "dataType": "LONG",
    "description": "Interest paid"
  },
  {
    "fieldName": "MR_INTERESTRECEIVED",
    "fidNumber": 30019,
    "dataType": "LONG",
    "description": "Interest received"
  },
  {
    "fieldName": "MR_RETINVESTSVCFIN",
    "fidNumber": 30020,
    "dataType": "LONG",
    "description": "Rtrns on inv'ts &svcg of finance"
  },
  {
    "fieldName": "MR_DIVJOINTVENTURE",
    "fidNumber": 30021,
    "dataType": "LONG",
    "description": "Div's from assoc's & jnt vent's"
  },
  {
    "fieldName": "MR_OTHNONCASHMOVEMT",
    "fidNumber": 30022,
    "dataType": "LONG",
    "description": "Other non-cash movements"
  },
  {
    "fieldName": "MR_SPECIALCHARGE",
    "fidNumber": 30023,
    "dataType": "LONG",
    "description": "Special charges/unusual items"
  },
  {
    "fieldName": "MR_CHANGEINCREDITORS",
    "fidNumber": 30024,
    "dataType": "LONG",
    "description": "Change in creditors"
  },
  {
    "fieldName": "MR_CHANGEINDEBTORS",
    "fidNumber": 30025,
    "dataType": "LONG",
    "description": "Change in debtors"
  },
  {
    "fieldName": "MR_CHGININVENTORIES",
    "fidNumber": 30026,
    "dataType": "LONG",
    "description": "Change in inventories"
  },
  {
    "fieldName": "MR_OPERATINGPROFITCF",
    "fidNumber": 30027,
    "dataType": "LONG",
    "description": "Operating profit (CF)"
  },
  {
    "fieldName": "MR_RETURNONINVEST",
    "fidNumber": 30028,
    "dataType": "DOUBLE",
    "description": "Return on investment"
  },
  {
    "fieldName": "MR_EPSCONTOPSDILUTED",
    "fidNumber": 30029,
    "dataType": "DOUBLE",
    "description": "EPS cont ops (diluted)"
  },
  {
    "fieldName": "MR_EPSCONTOPSBASIC",
    "fidNumber": 30030,
    "dataType": "DOUBLE",
    "description": "EPS cont ops (basic)"
  },
  {
    "fieldName": "MR_LTDEBTTOASSETS",
    "fidNumber": 30031,
    "dataType": "DOUBLE",
    "description": "Long-term debt to assets"
  },
  {
    "fieldName": "MR_EXPTOREV",
    "fidNumber": 30032,
    "dataType": "LONG",
    "description": "Other exps directly tied to revs"
  },
  {
    "fieldName": "MR_EPSREALGAIN",
    "fidNumber": 30033,
    "dataType": "DOUBLE",
    "description": "EPS - realized investment gain"
  },
  {
    "fieldName": "MR_CHANGEINCASHEQUIV",
    "fidNumber": 30034,
    "dataType": "LONG",
    "description": "Change in cash & cash equiv's"
  },
  {
    "fieldName": "MR_EFFECTFOREIGNEXCH",
    "fidNumber": 30035,
    "dataType": "LONG",
    "description": "Effect of foreign exchange"
  },
  {
    "fieldName": "MR_CFFROMFINACT",
    "fidNumber": 30036,
    "dataType": "LONG",
    "description": "Cash flow from financing activ's"
  },
  {
    "fieldName": "MR_OTHCFFROMFINACT",
    "fidNumber": 30037,
    "dataType": "LONG",
    "description": "Other cash flow - financ'g activ"
  },
  {
    "fieldName": "MR_DIVIDENDSPAID",
    "fidNumber": 30038,
    "dataType": "LONG",
    "description": "Dividends paid"
  },
  {
    "fieldName": "MR_EPSREALINVEST",
    "fidNumber": 30039,
    "dataType": "DOUBLE",
    "description": "EPS-realized invest gain dilut'd"
  },
  {
    "fieldName": "MR_OTHCASHFLOW",
    "fidNumber": 30040,
    "dataType": "LONG",
    "description": "Other cash flow items"
  },
  {
    "fieldName": "MR_INTEXPPAID",
    "fidNumber": 30041,
    "dataType": "LONG",
    "description": "Interest expense paid"
  },
  {
    "fieldName": "MR_PUTSHARES",
    "fidNumber": 30042,
    "dataType": "LONG",
    "description": "Put shares"
  },
  {
    "fieldName": "MR_ISSUEPAYSTDEBT",
    "fidNumber": 30043,
    "dataType": "LONG",
    "description": "Issuance/paym't of sht-term debt"
  },
  {
    "fieldName": "MR_CFINVESTINGACT",
    "fidNumber": 30044,
    "dataType": "LONG",
    "description": "Cash flow from invest'g activity"
  },
  {
    "fieldName": "MR_OTHCFINVESTINGACT",
    "fidNumber": 30045,
    "dataType": "LONG",
    "description": "Other cash flow - invest'g activ"
  },
  {
    "fieldName": "MR_WRRTSRIGHTS",
    "fidNumber": 30046,
    "dataType": "LONG",
    "description": "Warrants & rights"
  },
  {
    "fieldName": "MR_OTHCFOPERATINGACT",
    "fidNumber": 30051,
    "dataType": "LONG",
    "description": "Other cash flow - operat'g activ"
  },
  {
    "fieldName": "MR_DISCONTOP410",
    "fidNumber": 30052,
    "dataType": "LONG",
    "description": "Discontinued operations (CF)"
  },
  {
    "fieldName": "MR_CHANGEINLIAB",
    "fidNumber": 30053,
    "dataType": "LONG",
    "description": "Change in liabilities"
  },
  {
    "fieldName": "MR_CHANGEINASSETS",
    "fidNumber": 30054,
    "dataType": "LONG",
    "description": "Change in assets"
  },
  {
    "fieldName": "MR_CFOPERATINGACT",
    "fidNumber": 30060,
    "dataType": "LONG",
    "description": "Cash flow from operat'g activ's"
  },
  {
    "fieldName": "MR_DEFERINCTAXCF",
    "fidNumber": 30061,
    "dataType": "LONG",
    "description": "Deferred income taxes (CF)"
  },
  {
    "fieldName": "MR_DEPRECMORT400",
    "fidNumber": 30062,
    "dataType": "LONG",
    "description": "Depreciation & amortization (CF)"
  },
  {
    "fieldName": "MR_INTEXPCOSTREVENUE",
    "fidNumber": 30064,
    "dataType": "LONG",
    "description": "Interest exp (cost of revenues)"
  },
  {
    "fieldName": "MR_TOTALDEBT",
    "fidNumber": 30065,
    "dataType": "LONG",
    "description": "Total debt"
  },
  {
    "fieldName": "MR_AVGSHARESDILUTED",
    "fidNumber": 30066,
    "dataType": "LONG",
    "description": "Average shares - diluted"
  },
  {
    "fieldName": "MR_COMMONDIVIDENDS",
    "fidNumber": 30067,
    "dataType": "LONG",
    "description": "Common dividends"
  },
  {
    "fieldName": "MR_PREFERREDDIVF",
    "fidNumber": 30068,
    "dataType": "LONG",
    "description": "Preferred dividends"
  },
  {
    "fieldName": "MR_DEFERREDLIAB",
    "fidNumber": 30070,
    "dataType": "LONG",
    "description": "Deferred liabilities"
  },
  {
    "fieldName": "MR_TOTLIABSTKHLDREQ",
    "fidNumber": 30071,
    "dataType": "LONG",
    "description": "Total liabilities&stkhldrs eq'ty"
  },
  {
    "fieldName": "MR_STKHLDREQUITYF",
    "fidNumber": 30072,
    "dataType": "LONG",
    "description": "Stockholders' equity"
  },
  {
    "fieldName": "MR_OTHSTKHLDREQUITY",
    "fidNumber": 30073,
    "dataType": "LONG",
    "description": "Other stockholders' equity"
  },
  {
    "fieldName": "MR_FOREIGNCURRTRAN",
    "fidNumber": 30074,
    "dataType": "LONG",
    "description": "Foreign currency translation"
  },
  {
    "fieldName": "MR_ADDLPAIDINCAPITAL",
    "fidNumber": 30077,
    "dataType": "LONG",
    "description": "Additional paid-in capital"
  },
  {
    "fieldName": "MR_COMMONSTOCK",
    "fidNumber": 30078,
    "dataType": "LONG",
    "description": "Common stock"
  },
  {
    "fieldName": "MR_PREFERREDSTOCK",
    "fidNumber": 30079,
    "dataType": "LONG",
    "description": "Preferred stock-income"
  },
  {
    "fieldName": "MR_PREFERREDSTOCKASSET",
    "fidNumber": 30080,
    "dataType": "LONG",
    "description": "Preferred stock-asset"
  },
  {
    "fieldName": "MR_OTHERLIABILITIES",
    "fidNumber": 30081,
    "dataType": "LONG",
    "description": "Other liabilities"
  },
  {
    "fieldName": "MR_OTHERDEFERREDLIAB",
    "fidNumber": 30084,
    "dataType": "LONG",
    "description": "Other deferred liabilities"
  },
  {
    "fieldName": "MR_DEFERINCTAXBS",
    "fidNumber": 30085,
    "dataType": "LONG",
    "description": "Deferred income taxes (BS)"
  },
  {
    "fieldName": "MR_DEPOSITS",
    "fidNumber": 30089,
    "dataType": "LONG",
    "description": "Deposits"
  },
  {
    "fieldName": "MR_CURRENTLTDEBT",
    "fidNumber": 30090,
    "dataType": "LONG",
    "description": "Curr't portion of long-term debt"
  },
  {
    "fieldName": "MR_SHORTTERMBORROWF",
    "fidNumber": 30091,
    "dataType": "LONG",
    "description": "Short-term borrowings"
  },
  {
    "fieldName": "MR_NETPROPEQUIP",
    "fidNumber": 30098,
    "dataType": "LONG",
    "description": "Net property & equipment"
  },
  {
    "fieldName": "MR_ACCUMDEPRECAMORT",
    "fidNumber": 30099,
    "dataType": "LONG",
    "description": "Accumulated deprec'n & amort'n"
  },
  {
    "fieldName": "MR_GROSSPPE",
    "fidNumber": 30100,
    "dataType": "LONG",
    "description": "Gross property - plant & equip't"
  },
  {
    "fieldName": "MR_MACHEQUIP",
    "fidNumber": 30101,
    "dataType": "LONG",
    "description": "Machinery & equipment"
  },
  {
    "fieldName": "MR_BUILDINGS349",
    "fidNumber": 30102,
    "dataType": "LONG",
    "description": "Buildings"
  },
  {
    "fieldName": "MR_LAND",
    "fidNumber": 30103,
    "dataType": "LONG",
    "description": "Land"
  },
  {
    "fieldName": "MR_LOANSANDLEASEFIN",
    "fidNumber": 30104,
    "dataType": "LONG",
    "description": "Loans & lease financing"
  },
  {
    "fieldName": "MR_INVESTANDADVANCES",
    "fidNumber": 30105,
    "dataType": "LONG",
    "description": "Investments & advances"
  },
  {
    "fieldName": "MR_LTRECEIVABLES",
    "fidNumber": 30106,
    "dataType": "LONG",
    "description": "Long-term receivables"
  },
  {
    "fieldName": "MR_FINISHEDGOODF",
    "fidNumber": 30110,
    "dataType": "LONG",
    "description": "Finished goods"
  },
  {
    "fieldName": "MR_WORKINPROCESSF",
    "fidNumber": 30111,
    "dataType": "LONG",
    "description": "Work in process"
  },
  {
    "fieldName": "MR_RAWMATERIALSF",
    "fidNumber": 30112,
    "dataType": "LONG",
    "description": "Raw materials"
  },
  {
    "fieldName": "MR_RECEIVABLES",
    "fidNumber": 30113,
    "dataType": "LONG",
    "description": "Receivables"
  },
  {
    "fieldName": "MR_CASHEQUIVALENTS",
    "fidNumber": 30114,
    "dataType": "LONG",
    "description": "Cash & cash equivalents"
  },
  {
    "fieldName": "MR_EPSNETINCBASIC",
    "fidNumber": 30115,
    "dataType": "DOUBLE",
    "description": "EPS - net income (basic)"
  },
  {
    "fieldName": "MR_OUTSTANDINGSHARES",
    "fidNumber": 30116,
    "dataType": "LONG",
    "description": "Outstanding shares"
  },
  {
    "fieldName": "MR_AVGSHARESBASIC",
    "fidNumber": 30117,
    "dataType": "LONG",
    "description": "Average shares - basic"
  },
  {
    "fieldName": "MR_ACCOUNTINGCHANGES",
    "fidNumber": 30119,
    "dataType": "LONG",
    "description": "Accounting changes"
  },
  {
    "fieldName": "MR_EQUITYEARNINGS",
    "fidNumber": 30124,
    "dataType": "LONG",
    "description": "Equity earnings"
  },
  {
    "fieldName": "MR_REALCAPGAINSLOSS",
    "fidNumber": 30128,
    "dataType": "LONG",
    "description": "Realized capital gains (losses)"
  },
  {
    "fieldName": "MR_INTERESTEXPENSE",
    "fidNumber": 30129,
    "dataType": "LONG",
    "description": "Interest expense"
  },
  {
    "fieldName": "MR_INTERESTINCOME",
    "fidNumber": 30130,
    "dataType": "LONG",
    "description": "Interest income"
  },
  {
    "fieldName": "MR_TOTALINDIRECTEXP",
    "fidNumber": 30131,
    "dataType": "LONG",
    "description": "Total indirect expenses"
  },
  {
    "fieldName": "MR_OTHERINDIRECTEXP",
    "fidNumber": 30132,
    "dataType": "LONG",
    "description": "Other indirect expenses"
  },
  {
    "fieldName": "MR_RSRCHDEVELOPMENT",
    "fidNumber": 30134,
    "dataType": "LONG",
    "description": "Research & development"
  },
  {
    "fieldName": "MR_DEPRECAMORTIS",
    "fidNumber": 30135,
    "dataType": "LONG",
    "description": "Depreciation & amortization (IS)"
  },
  {
    "fieldName": "MR_GROSSMARGIN",
    "fidNumber": 30137,
    "dataType": "DOUBLE",
    "description": "Gross margin"
  },
  {
    "fieldName": "MR_COSTOFREVENUES",
    "fidNumber": 30138,
    "dataType": "LONG",
    "description": "Cost of revenues"
  },
  {
    "fieldName": "MR_PROVISIONLOANLOSS",
    "fidNumber": 30139,
    "dataType": "LONG",
    "description": "Provision for loan losses"
  },
  {
    "fieldName": "MR_INTERESTEXPBANKS",
    "fidNumber": 30140,
    "dataType": "LONG",
    "description": "Interest expense (banks)"
  },
  {
    "fieldName": "MR_INTERESTINCBANKS",
    "fidNumber": 30143,
    "dataType": "LONG",
    "description": "Interest income (banks)"
  },
  {
    "fieldName": "MR_WORKCAPTOTASSET2",
    "fidNumber": 30144,
    "dataType": "DOUBLE",
    "description": "Working capital/total assets"
  },
  {
    "fieldName": "MR_REVENUETOTALASSET",
    "fidNumber": 30145,
    "dataType": "DOUBLE",
    "description": "Revenues/total assets"
  },
  {
    "fieldName": "MR_REVENUEWORKINGCAP",
    "fidNumber": 30146,
    "dataType": "DOUBLE",
    "description": "Revenues/working capital"
  },
  {
    "fieldName": "MR_CURRENTLIABEQUITY",
    "fidNumber": 30147,
    "dataType": "DOUBLE",
    "description": "Current liabilities/equity"
  },
  {
    "fieldName": "MR_PRETAXINCREVENUE1",
    "fidNumber": 30148,
    "dataType": "DOUBLE",
    "description": "Pretax income/revenues %"
  },
  {
    "fieldName": "MR_TAXRATE",
    "fidNumber": 30150,
    "dataType": "DOUBLE",
    "description": "Tax rate %"
  },
  {
    "fieldName": "MR_RETURNONASSETS",
    "fidNumber": 30151,
    "dataType": "DOUBLE",
    "description": "Return on assets %"
  },
  {
    "fieldName": "MR_PROFITMARGIN",
    "fidNumber": 30152,
    "dataType": "DOUBLE",
    "description": "Profit margin %"
  },
  {
    "fieldName": "MR_OPPROFITMARGIN",
    "fidNumber": 30154,
    "dataType": "DOUBLE",
    "description": "Operating profit margin %"
  },
  {
    "fieldName": "MR_LTDEBTEQUITY",
    "fidNumber": 30155,
    "dataType": "DOUBLE",
    "description": "Long-term debt/equity"
  },
  {
    "fieldName": "MR_INTERESTCOVERAGE",
    "fidNumber": 30156,
    "dataType": "DOUBLE",
    "description": "Interest coverage"
  },
  {
    "fieldName": "MR_GROSSMARGINPC",
    "fidNumber": 30157,
    "dataType": "DOUBLE",
    "description": "Gross margin %"
  },
  {
    "fieldName": "MR_EBITDAREVENUE",
    "fidNumber": 30158,
    "dataType": "DOUBLE",
    "description": "EBITDA/revenue %"
  },
  {
    "fieldName": "MR_EBITDA",
    "fidNumber": 30159,
    "dataType": "LONG",
    "description": "EBITDA"
  },
  {
    "fieldName": "MR_ACIDTEST",
    "fidNumber": 30160,
    "dataType": "DOUBLE",
    "description": "Acid test"
  },
  {
    "fieldName": "MR_EPSCOMMONYEAREND",
    "fidNumber": 30161,
    "dataType": "DOUBLE",
    "description": "EPS  -  common (year end)"
  },
  {
    "fieldName": "MR_RETURNONEQUITY",
    "fidNumber": 30162,
    "dataType": "DOUBLE",
    "description": "Return on equity"
  },
  {
    "fieldName": "MR_TOTALDEBTEQUITY",
    "fidNumber": 30163,
    "dataType": "DOUBLE",
    "description": "Total debt/equity"
  },
  {
    "fieldName": "MR_LTDEQUITY",
    "fidNumber": 30164,
    "dataType": "DOUBLE",
    "description": "LTD/equity"
  },
  {
    "fieldName": "MR_DIVIDENDPAYOUT",
    "fidNumber": 30165,
    "dataType": "DOUBLE",
    "description": "Dividend payout - %"
  },
  {
    "fieldName": "MR_REVAVAILCOMMON",
    "fidNumber": 30166,
    "dataType": "DOUBLE",
    "description": "% of revenue avail for common"
  },
  {
    "fieldName": "MR_STKHLDREQUITYPC",
    "fidNumber": 30167,
    "dataType": "DOUBLE",
    "description": "% Stockholders' equity"
  },
  {
    "fieldName": "MR_YEARENDRISKASSETS",
    "fidNumber": 30168,
    "dataType": "DOUBLE",
    "description": "Year-end risk assets"
  },
  {
    "fieldName": "MR_YEARENDDEPOSITS",
    "fidNumber": 30169,
    "dataType": "DOUBLE",
    "description": "Year-end deposits"
  },
  {
    "fieldName": "MR_YEARENDLOANS",
    "fidNumber": 30170,
    "dataType": "DOUBLE",
    "description": "Year-end loans"
  },
  {
    "fieldName": "MR_YEARENDASSETS",
    "fidNumber": 30171,
    "dataType": "DOUBLE",
    "description": "Year-end assets"
  },
  {
    "fieldName": "MR_COMMSTKSURPHLDREQ",
    "fidNumber": 30172,
    "dataType": "DOUBLE",
    "description": "%CommStk&Surpl(com stkhld's equ)"
  },
  {
    "fieldName": "MR_NETTANGASSETPSPRF",
    "fidNumber": 30173,
    "dataType": "DOUBLE",
    "description": "Net tangible assets/share-pref'd"
  },
  {
    "fieldName": "MR_NETTANGASSETPSCM",
    "fidNumber": 30174,
    "dataType": "DOUBLE",
    "description": "Net tangible assets/share-common"
  },
  {
    "fieldName": "MR_DEBTDEPRPLANT",
    "fidNumber": 30175,
    "dataType": "DOUBLE",
    "description": "% Debt of depreciated plant"
  },
  {
    "fieldName": "MR_NETCURRNETWORTH",
    "fidNumber": 30176,
    "dataType": "DOUBLE",
    "description": "% Net curr't assets to net worth"
  },
  {
    "fieldName": "MR_NETCURR1000LT",
    "fidNumber": 30177,
    "dataType": "DOUBLE",
    "description": "Net curr't assets/$1K long-t dbt"
  },
  {
    "fieldName": "MR_NETOPINCNETUTPL",
    "fidNumber": 30178,
    "dataType": "DOUBLE",
    "description": "%NetOp'g income of net util plnt"
  },
  {
    "fieldName": "MR_MAINTGROSSOPREV",
    "fidNumber": 30179,
    "dataType": "DOUBLE",
    "description": "% Maint of gross op'g revenues"
  },
  {
    "fieldName": "MR_FUELCOSTOFREVENUE",
    "fidNumber": 30180,
    "dataType": "DOUBLE",
    "description": "Fuel cost - % of revenue"
  },
  {
    "fieldName": "MR_OPERATINGRATIO",
    "fidNumber": 30181,
    "dataType": "DOUBLE",
    "description": "Operating ratio - %"
  },
  {
    "fieldName": "MR_SALESNETPROP",
    "fidNumber": 30182,
    "dataType": "DOUBLE",
    "description": "% Sales to net property"
  },
  {
    "fieldName": "MR_SALESTOTOTALASSET",
    "fidNumber": 30183,
    "dataType": "DOUBLE",
    "description": "% Sales to total assets"
  },
  {
    "fieldName": "MR_GROSSINCLTDEBT",
    "fidNumber": 30184,
    "dataType": "DOUBLE",
    "description": "Gross income % long-term debt"
  },
  {
    "fieldName": "MR_BVPERSHAREINTANG",
    "fidNumber": 30185,
    "dataType": "DOUBLE",
    "description": "Book value per shr (incl intang)"
  },
  {
    "fieldName": "MR_INVENTCURRASSET",
    "fidNumber": 30186,
    "dataType": "DOUBLE",
    "description": "% Inventories to current assets"
  },
  {
    "fieldName": "MR_CASHSECCURRASSET",
    "fidNumber": 30187,
    "dataType": "DOUBLE",
    "description": "% Cash & sec's to curr't assets"
  },
  {
    "fieldName": "MR_CFPERSHAREDILUTED",
    "fidNumber": 30188,
    "dataType": "DOUBLE",
    "description": "Cash flow per share (diluted)"
  },
  {
    "fieldName": "MR_NETPROFITMARGIN",
    "fidNumber": 30189,
    "dataType": "DOUBLE",
    "description": "Net profit margin"
  },
  {
    "fieldName": "MR_MARGINOFSAFETY",
    "fidNumber": 30190,
    "dataType": "DOUBLE",
    "description": "Margin of safety"
  },
  {
    "fieldName": "MR_RDTOSALES",
    "fidNumber": 30191,
    "dataType": "DOUBLE",
    "description": "R&D to sales"
  },
  {
    "fieldName": "MR_SALESINVENTORIES",
    "fidNumber": 30192,
    "dataType": "DOUBLE",
    "description": "Sales / inventories"
  },
  {
    "fieldName": "MR_SALESRECEIVABLES",
    "fidNumber": 30193,
    "dataType": "DOUBLE",
    "description": "Sales / receivables"
  },
  {
    "fieldName": "MR_REVENUEPERSHARE",
    "fidNumber": 30194,
    "dataType": "DOUBLE",
    "description": "Revenue per share"
  },
  {
    "fieldName": "MR_RATIOGRPLANTOPREV",
    "fidNumber": 30195,
    "dataType": "LONG",
    "description": "Gross plant to gross op'g rev"
  },
  {
    "fieldName": "MR_CURRENTRATIO",
    "fidNumber": 30196,
    "dataType": "DOUBLE",
    "description": "Current ratio"
  },
  {
    "fieldName": "MR_BOOKVALUEPERSHARE",
    "fidNumber": 30197,
    "dataType": "DOUBLE",
    "description": "Book value per share"
  },
  {
    "fieldName": "MR_TOTALASSETS",
    "fidNumber": 30198,
    "dataType": "LONG",
    "description": "Total assets"
  },
  {
    "fieldName": "MR_TOTCURRENTASSETF",
    "fidNumber": 30199,
    "dataType": "LONG",
    "description": "Total current assets"
  },
  {
    "fieldName": "CROSSMATCH_FLAGS",
    "fidNumber": 30200,
    "dataType": "LONG",
    "description": "Cross Match Flags"
  },
  {
    "fieldName": "CROSSMATCH_AGGRESSOR",
    "fidNumber": 30201,
    "dataType": "STRING",
    "description": "Cross Match Aggressor"
  },
  {
    "fieldName": "CROSSMATCH_AGGRESSOR_CHILD",
    "fidNumber": 30202,
    "dataType": "STRING",
    "description": "Cross Match Aggressor Child"
  },
  {
    "fieldName": "CROSSMATCH_AGGRESSOR_MARKET",
    "fidNumber": 30203,
    "dataType": "STRING",
    "description": "Cross Match Aggressor Market"
  },
  {
    "fieldName": "CROSSMATCH_RESTING",
    "fidNumber": 30204,
    "dataType": "STRING",
    "description": "Cross Match Resting"
  },
  {
    "fieldName": "CROSSMATCH_RESTING_LIST",
    "fidNumber": 30205,
    "dataType": "STRING",
    "description": "Cross Match Resting List"
  },
  {
    "fieldName": "CROSSMATCH_RESTING_CHILD_LIST",
    "fidNumber": 30206,
    "dataType": "STRING",
    "description": "Resting Neutral Childs"
  },
  {
    "fieldName": "CROSSMATCH_RESTING_MARKET_LIST",
    "fidNumber": 30207,
    "dataType": "STRING",
    "description": "Resting market orders"
  },
  {
    "fieldName": "CROSSMATCH_VOLUME_TARGET",
    "fidNumber": 30208,
    "dataType": "LONG",
    "description": "Aggressor target volume"
  },
  {
    "fieldName": "CROSSMATCH_VOLUME_CROSSED",
    "fidNumber": 30209,
    "dataType": "LONG",
    "description": "Volume of recent cross"
  },
  {
    "fieldName": "CROSSMATCH_DECLINED",
    "fidNumber": 30210,
    "dataType": "STRING",
    "description": "Order ID declined cross"
  },
  {
    "fieldName": "CROSSMATCH_DECLINED_ORDER_LIST",
    "fidNumber": 30211,
    "dataType": "STRING",
    "description": "List of order IDs that declined to cross"
  },
  {
    "fieldName": "CROSSMATCH_AVERAGE_PRICE",
    "fidNumber": 30212,
    "dataType": "DOUBLE",
    "description": "Cross match average price"
  },
  {
    "fieldName": "CROSSMATCH_TRADER_ID",
    "fidNumber": 30213,
    "dataType": "STRING",
    "description": "Cross match trader ID"
  },
  {
    "fieldName": "CROSSMATCH_RESTING_CHILD",
    "fidNumber": 30214,
    "dataType": "STRING",
    "description": "CROSSMATCH_RESTING_CHILD"
  },
  {
    "fieldName": "CROSSMATCH_PLAN_COUNT",
    "fidNumber": 30215,
    "dataType": "LONG",
    "description": "CROSSMATCH_PLAN_COUNT"
  },
  {
    "fieldName": "CROSSMATCH_STATUS_UPDATE",
    "fidNumber": 30216,
    "dataType": "LONG",
    "description": "CROSSMATCH_STATUS_UPDATE"
  },
  {
    "fieldName": "CROSSMATCH_LAST_CROSS_VOLUME",
    "fidNumber": 30217,
    "dataType": "LONG",
    "description": "CROSSMATCH_LAST_CROSS_VOLUME"
  },
  {
    "fieldName": "MR_NOTESRECCURRENT",
    "fidNumber": 30218,
    "dataType": "LONG",
    "description": "Notes receiveable frm sharehldrs"
  },
  {
    "fieldName": "MR_INVENTORIES",
    "fidNumber": 30226,
    "dataType": "LONG",
    "description": "Inventories"
  },
  {
    "fieldName": "MR_PREPAYMENTSOTHER",
    "fidNumber": 30242,
    "dataType": "LONG",
    "description": "Pre-payments & other"
  },
  {
    "fieldName": "MR_OTHCURRENTASSETS",
    "fidNumber": 30243,
    "dataType": "LONG",
    "description": "Other current assets"
  },
  {
    "fieldName": "MR_PPENET",
    "fidNumber": 30272,
    "dataType": "LONG",
    "description": "Property plant & equipment net"
  },
  {
    "fieldName": "MR_DEFERREDCHARGES",
    "fidNumber": 30298,
    "dataType": "LONG",
    "description": "Deferred charges"
  },
  {
    "fieldName": "MR_INTANGIBLES",
    "fidNumber": 30306,
    "dataType": "LONG",
    "description": "Intangibles"
  },
  {
    "fieldName": "MR_GOODWILLNET",
    "fidNumber": 30307,
    "dataType": "LONG",
    "description": "Goodwill net"
  },
  {
    "fieldName": "MR_OTHERASSETS",
    "fidNumber": 30312,
    "dataType": "LONG",
    "description": "Other assets"
  },
  {
    "fieldName": "MR_TOTALLIABILITIES",
    "fidNumber": 30313,
    "dataType": "LONG",
    "description": "Total liabilities"
  },
  {
    "fieldName": "MR_TOTALCURRENTLIAB",
    "fidNumber": 30314,
    "dataType": "LONG",
    "description": "Total current liabilities"
  },
  {
    "fieldName": "MR_ACCTSPAYABLE",
    "fidNumber": 30317,
    "dataType": "LONG",
    "description": "Accounts payable"
  },
  {
    "fieldName": "MR_NOTESPAYABLE",
    "fidNumber": 30318,
    "dataType": "LONG",
    "description": "Notes payable"
  },
  {
    "fieldName": "MR_TAXESPAYABLE",
    "fidNumber": 30324,
    "dataType": "LONG",
    "description": "Taxes payable"
  },
  {
    "fieldName": "MR_DIVIDENDSPAYABLE",
    "fidNumber": 30328,
    "dataType": "LONG",
    "description": "Dividends payable"
  },
  {
    "fieldName": "MR_ACCRUEDEXPS",
    "fidNumber": 30329,
    "dataType": "LONG",
    "description": "Accrued expenses"
  },
  {
    "fieldName": "MR_AIRTRAFFICLIAB",
    "fidNumber": 30335,
    "dataType": "LONG",
    "description": "Air traffic liability"
  },
  {
    "fieldName": "MR_OTHERPAYSACCREXP",
    "fidNumber": 30336,
    "dataType": "LONG",
    "description": "Other payables & accrued exp's"
  },
  {
    "fieldName": "MR_CURRENTDEBT",
    "fidNumber": 30337,
    "dataType": "LONG",
    "description": "Current debt"
  },
  {
    "fieldName": "MR_TOTALDEPOSITS",
    "fidNumber": 30350,
    "dataType": "LONG",
    "description": "Total deposits"
  },
  {
    "fieldName": "MR_OTHERCURRENTLIAB",
    "fidNumber": 30352,
    "dataType": "LONG",
    "description": "Other current liabilities"
  },
  {
    "fieldName": "MR_LONGTERMDEBT",
    "fidNumber": 30354,
    "dataType": "LONG",
    "description": "Long-term debt"
  },
  {
    "fieldName": "MR_LIABBANKRUPTCY",
    "fidNumber": 30372,
    "dataType": "LONG",
    "description": "Liabilities subj to bankruptcy"
  },
  {
    "fieldName": "MR_DEFLIABCREDITS",
    "fidNumber": 30373,
    "dataType": "LONG",
    "description": "Deferred liabilities & credits"
  },
  {
    "fieldName": "MR_MINORITYINTBS",
    "fidNumber": 30388,
    "dataType": "LONG",
    "description": "Minority interest (BS)"
  },
  {
    "fieldName": "MR_REDEEMPREFSTOCK",
    "fidNumber": 30390,
    "dataType": "LONG",
    "description": "Redeemable preferred stock"
  },
  {
    "fieldName": "MR_STKHLDREQUITY",
    "fidNumber": 30394,
    "dataType": "LONG",
    "description": "Total stockholders' equity"
  },
  {
    "fieldName": "MR_PREFERREDSTOCKNET",
    "fidNumber": 30396,
    "dataType": "LONG",
    "description": "Preferred stock net"
  },
  {
    "fieldName": "MR_OTHPAIDINCAPITAL",
    "fidNumber": 30397,
    "dataType": "LONG",
    "description": "Other paid-in capital"
  },
  {
    "fieldName": "MR_RETAINEDEARNINGS",
    "fidNumber": 30398,
    "dataType": "LONG",
    "description": "Retained earnings"
  },
  {
    "fieldName": "MR_TREASURYSTOCK",
    "fidNumber": 30399,
    "dataType": "LONG",
    "description": "Treasury stock"
  },
  {
    "fieldName": "MR_UNEARNEDESOPCOMP",
    "fidNumber": 30401,
    "dataType": "LONG",
    "description": "Unearned ESOP compensation"
  },
  {
    "fieldName": "MR_TOTPARTNERSHIPCAP",
    "fidNumber": 30404,
    "dataType": "LONG",
    "description": "Total partnership capital"
  },
  {
    "fieldName": "MR_TOTALREVENUES",
    "fidNumber": 30407,
    "dataType": "LONG",
    "description": "Total revenues"
  },
  {
    "fieldName": "MR_TOTALINTERESTINC",
    "fidNumber": 30410,
    "dataType": "LONG",
    "description": "Total interest income"
  },
  {
    "fieldName": "MR_OTHOPERATINGREV",
    "fidNumber": 30455,
    "dataType": "LONG",
    "description": "Other operating revenue"
  },
  {
    "fieldName": "MR_EXPDIRTIEDTOREV",
    "fidNumber": 30456,
    "dataType": "LONG",
    "description": "Exp's directly tied to revenues"
  },
  {
    "fieldName": "MR_COSTOFSALES",
    "fidNumber": 30457,
    "dataType": "LONG",
    "description": "Cost of sales"
  },
  {
    "fieldName": "MR_TOTINTEXPCOSTREV",
    "fidNumber": 30460,
    "dataType": "LONG",
    "description": "Total interest exp (cost of rev)"
  },
  {
    "fieldName": "MR_CREDITLOSSPROV",
    "fidNumber": 30465,
    "dataType": "LONG",
    "description": "Credit loss provision"
  },
  {
    "fieldName": "MR_GROSSPROFIT",
    "fidNumber": 30499,
    "dataType": "LONG",
    "description": "Gross profit"
  },
  {
    "fieldName": "MR_TOTINDIRECTOPEXP",
    "fidNumber": 30501,
    "dataType": "LONG",
    "description": "Total indirect operat'g expenses"
  },
  {
    "fieldName": "MR_SELLGENERALADMEXP",
    "fidNumber": 30502,
    "dataType": "LONG",
    "description": "Selling - general & admin exp"
  },
  {
    "fieldName": "MR_EXPLORATIONCOSTS",
    "fidNumber": 30537,
    "dataType": "LONG",
    "description": "Exploration costs"
  },
  {
    "fieldName": "MR_TOTRESTRUCTEXP",
    "fidNumber": 30538,
    "dataType": "LONG",
    "description": "Total restructuring expense"
  },
  {
    "fieldName": "MR_OPERATINGINCOME",
    "fidNumber": 30540,
    "dataType": "LONG",
    "description": "Operating income"
  },
  {
    "fieldName": "MR_OTHINCEXP",
    "fidNumber": 30541,
    "dataType": "LONG",
    "description": "Other income (expense) - net"
  },
  {
    "fieldName": "MR_OTHINTINC",
    "fidNumber": 30549,
    "dataType": "LONG",
    "description": "Other interest income (exp) net"
  },
  {
    "fieldName": "MR_FOREIGNEXGAINLOSS",
    "fidNumber": 30551,
    "dataType": "LONG",
    "description": "Foreign exchange gain (loss)"
  },
  {
    "fieldName": "MR_INCOPSBEFINCTAX",
    "fidNumber": 30562,
    "dataType": "LONG",
    "description": "Income -cont ops before inc tax"
  },
  {
    "fieldName": "MR_INCOMETAXES",
    "fidNumber": 30563,
    "dataType": "LONG",
    "description": "Income taxes"
  },
  {
    "fieldName": "MR_EQEARNLOSSAFFIL",
    "fidNumber": 30564,
    "dataType": "LONG",
    "description": "Equity earngs (loss) -affiliates"
  },
  {
    "fieldName": "MR_MINORITYINTIS",
    "fidNumber": 30566,
    "dataType": "LONG",
    "description": "Minority interest (IS)"
  },
  {
    "fieldName": "MR_INVESTGAINSLOSS",
    "fidNumber": 30567,
    "dataType": "LONG",
    "description": "Investment gains (losses)"
  },
  {
    "fieldName": "MR_INCCONTINUINGOP",
    "fidNumber": 30568,
    "dataType": "LONG",
    "description": "Income - continuing operations"
  },
  {
    "fieldName": "MR_DISCONTINUEDOP",
    "fidNumber": 30569,
    "dataType": "LONG",
    "description": "Discontinued operations (IS)"
  },
  {
    "fieldName": "MR_EXTRAORDINARYITEM",
    "fidNumber": 30574,
    "dataType": "LONG",
    "description": "Extraordinary items"
  },
  {
    "fieldName": "MR_EFFECTOFACCTGCHG",
    "fidNumber": 30576,
    "dataType": "LONG",
    "description": "Effect of accounting changes"
  },
  {
    "fieldName": "MR_NETINCOME",
    "fidNumber": 30577,
    "dataType": "LONG",
    "description": "Net income (IS)"
  },
  {
    "fieldName": "MR_NETINCOMETOCOMMON",
    "fidNumber": 30579,
    "dataType": "LONG",
    "description": "Net income to common"
  },
  {
    "fieldName": "MR_WGTAVGSHARESOUT",
    "fidNumber": 30580,
    "dataType": "LONG",
    "description": "Wghtd avg shares outst'g-basic"
  },
  {
    "fieldName": "MR_YEARENDSHARESOUT",
    "fidNumber": 30581,
    "dataType": "LONG",
    "description": "Year end shares outstanding"
  },
  {
    "fieldName": "MR_WGTAVGSHSOUTDIL",
    "fidNumber": 30582,
    "dataType": "LONG",
    "description": "Wghtd avg shares outst'g-diluted"
  },
  {
    "fieldName": "MR_EPSCONTINUINGOP2",
    "fidNumber": 30583,
    "dataType": "DOUBLE",
    "description": "EPS - continuing operations"
  },
  {
    "fieldName": "MR_EPSNETINC",
    "fidNumber": 30584,
    "dataType": "DOUBLE",
    "description": "EPS - net income"
  },
  {
    "fieldName": "MR_EPSTOTALDISCOPERS",
    "fidNumber": 30585,
    "dataType": "DOUBLE",
    "description": "EPS - total discontinued opers"
  },
  {
    "fieldName": "MR_EPSEXORDINARYITEM",
    "fidNumber": 30586,
    "dataType": "DOUBLE",
    "description": "EPS - extraordinary item"
  },
  {
    "fieldName": "MR_EPSACCOUNTINGCHG",
    "fidNumber": 30587,
    "dataType": "DOUBLE",
    "description": "EPS - accounting change"
  },
  {
    "fieldName": "MR_EPSOTH",
    "fidNumber": 30588,
    "dataType": "DOUBLE",
    "description": "EPS - other"
  },
  {
    "fieldName": "MR_EPSCONTINUINGOP1",
    "fidNumber": 30589,
    "dataType": "DOUBLE",
    "description": "EPS - continuing ops (diluted)"
  },
  {
    "fieldName": "MR_EPSNETINCDILUTED",
    "fidNumber": 30590,
    "dataType": "DOUBLE",
    "description": "EPS - net income (diluted)"
  },
  {
    "fieldName": "MR_EPSTOTDISCOPDIL",
    "fidNumber": 30591,
    "dataType": "DOUBLE",
    "description": "EPS - total discont ops-diluted"
  },
  {
    "fieldName": "MR_EPSEXORDITEMDIL",
    "fidNumber": 30592,
    "dataType": "DOUBLE",
    "description": "EPS - extraord'y item (diluted)"
  },
  {
    "fieldName": "MR_EPSACCTGCHGDIL",
    "fidNumber": 30593,
    "dataType": "DOUBLE",
    "description": "EPS - accounting chg (diluted)"
  },
  {
    "fieldName": "MR_EPSOTHDILUTED",
    "fidNumber": 30594,
    "dataType": "DOUBLE",
    "description": "EPS - other (diluted)"
  },
  {
    "fieldName": "MR_NETCFOPACTIV",
    "fidNumber": 30596,
    "dataType": "LONG",
    "description": "Net cash flow-op'g activ (indir)"
  },
  {
    "fieldName": "MR_NETINCCASHFLOWS",
    "fidNumber": 30597,
    "dataType": "LONG",
    "description": "Net income (CF)"
  },
  {
    "fieldName": "MR_PROVISIONFORLOSS",
    "fidNumber": 30603,
    "dataType": "LONG",
    "description": "Provision for losses"
  },
  {
    "fieldName": "MR_LOSSGAINSALEASSET",
    "fidNumber": 30604,
    "dataType": "LONG",
    "description": "Loss (gain) on sale of assets"
  },
  {
    "fieldName": "MR_UNDISTREARNLOSS",
    "fidNumber": 30610,
    "dataType": "LONG",
    "description": "Undistributed (earnings) losses"
  },
  {
    "fieldName": "MR_EXORDINARYITEMCFS",
    "fidNumber": 30615,
    "dataType": "LONG",
    "description": "Extraordinary items"
  },
  {
    "fieldName": "MR_CUMULEFFCHGACCTG",
    "fidNumber": 30616,
    "dataType": "LONG",
    "description": "Cumul effect of chg in acctng"
  },
  {
    "fieldName": "MR_RESTRUCTEXPCFS",
    "fidNumber": 30617,
    "dataType": "LONG",
    "description": "Restructuring expense"
  },
  {
    "fieldName": "MR_SPECCHGUNUSUAL",
    "fidNumber": 30618,
    "dataType": "LONG",
    "description": "Special charges/unusual items"
  },
  {
    "fieldName": "MR_INTCHGCONSTR",
    "fidNumber": 30619,
    "dataType": "LONG",
    "description": "Interest charged to construction"
  },
  {
    "fieldName": "MR_OTHNETINCADJ",
    "fidNumber": 30621,
    "dataType": "LONG",
    "description": "Other net income adjustments"
  },
  {
    "fieldName": "MR_INCDECASSET",
    "fidNumber": 30622,
    "dataType": "LONG",
    "description": "(Increase) decrease in assets"
  },
  {
    "fieldName": "MR_INCDECLIAB",
    "fidNumber": 30629,
    "dataType": "LONG",
    "description": "Increase (decrease) in liabil's"
  },
  {
    "fieldName": "MR_INCTAXESPAYCFS",
    "fidNumber": 30631,
    "dataType": "LONG",
    "description": "Income taxes paid"
  },
  {
    "fieldName": "MR_INCDECSTKHLDREQ",
    "fidNumber": 30637,
    "dataType": "LONG",
    "description": "Increase (decr) stkhldrs equity"
  },
  {
    "fieldName": "MR_OTHCFOPACTIVS",
    "fidNumber": 30638,
    "dataType": "LONG",
    "description": "Other cash flow-op'g activ-indir"
  },
  {
    "fieldName": "MR_SALEOFBUSINESS",
    "fidNumber": 30641,
    "dataType": "LONG",
    "description": "Sale of business"
  },
  {
    "fieldName": "MR_SALEPPE",
    "fidNumber": 30642,
    "dataType": "LONG",
    "description": "Sale of property plant & equip't"
  },
  {
    "fieldName": "MR_SALEOFINVESTEC",
    "fidNumber": 30643,
    "dataType": "LONG",
    "description": "Sale of investment securities"
  },
  {
    "fieldName": "MR_PURCHBUSINESS",
    "fidNumber": 30646,
    "dataType": "LONG",
    "description": "Purchase of business"
  },
  {
    "fieldName": "MR_CAPITALEXP",
    "fidNumber": 30648,
    "dataType": "LONG",
    "description": "Capital expenditures"
  },
  {
    "fieldName": "MR_PURCHINVESTEC",
    "fidNumber": 30649,
    "dataType": "LONG",
    "description": "Purchase of investmnt securities"
  },
  {
    "fieldName": "MR_ISSUANCEOFLTDEBT",
    "fidNumber": 30655,
    "dataType": "LONG",
    "description": "Issuance of long-term debt"
  },
  {
    "fieldName": "MR_ISSUECAPSTOCK",
    "fidNumber": 30656,
    "dataType": "LONG",
    "description": "Issuance of capital stock"
  },
  {
    "fieldName": "MR_PAYMENTSOFLTDEBT",
    "fidNumber": 30663,
    "dataType": "LONG",
    "description": "Payments of long-term debt"
  },
  {
    "fieldName": "MR_PAYACQTREASURYSTK",
    "fidNumber": 30664,
    "dataType": "LONG",
    "description": "Payments to acquire treasury stk"
  },
  {
    "fieldName": "MR_DIVIDENDS",
    "fidNumber": 30665,
    "dataType": "LONG",
    "description": "Dividends"
  },
  {
    "fieldName": "MR_NETINCCASHEQUIV",
    "fidNumber": 30668,
    "dataType": "LONG",
    "description": "Net increase -cash & cash equivs"
  },
  {
    "fieldName": "MR_CHGFOREIGNCURRTR",
    "fidNumber": 30669,
    "dataType": "LONG",
    "description": "Change in foreign curr transl'n"
  },
  {
    "fieldName": "MR_CASHEQUIVBEGYEAR",
    "fidNumber": 30670,
    "dataType": "LONG",
    "description": "Cash & cash equiv - beginning"
  },
  {
    "fieldName": "MR_CASHEQUIVENDYEAR",
    "fidNumber": 30671,
    "dataType": "LONG",
    "description": "Cash & cash equivalents - end"
  },
  {
    "fieldName": "MR_CFSDISCONTINUEDOP",
    "fidNumber": 30672,
    "dataType": "LONG",
    "description": "Cash flow from discontinued ops"
  },
  {
    "fieldName": "MR_ACCUMOTHCOMPRINC",
    "fidNumber": 30683,
    "dataType": "LONG",
    "description": "Accumulated other comp income"
  },
  {
    "fieldName": "MR_SHORTTERMINVEST",
    "fidNumber": 30697,
    "dataType": "LONG",
    "description": "Short-term investments"
  },
  {
    "fieldName": "MR_COMPANY_ABSTRACT",
    "fidNumber": 30698,
    "dataType": "STRING",
    "description": "Company Abstract"
  },
  {
    "fieldName": "MR_OTHERREVENUESEXP",
    "fidNumber": 30738,
    "dataType": "LONG",
    "description": "Other revenues/(expenses) net"
  },
  {
    "fieldName": "SHORTABLE_CONSUMED_AT_FIRM",
    "fidNumber": 30739,
    "dataType": "LONG",
    "description": "Firm Level Consumed Vol"
  },
  {
    "fieldName": "SHORTABLE_CONSUMED_AT_BANK",
    "fidNumber": 30740,
    "dataType": "LONG",
    "description": "Bank Level Consumed Vol"
  },
  {
    "fieldName": "SHORTABLE_CONSUMED_AT_BRANCH",
    "fidNumber": 30741,
    "dataType": "LONG",
    "description": "Branch Level Consumed Vol"
  },
  {
    "fieldName": "SHORTABLE_CONSUMED_AT_CUSTOMER",
    "fidNumber": 30742,
    "dataType": "LONG",
    "description": "Customer Level Consumed Vol"
  },
  {
    "fieldName": "SHORTABLE_CONSUMED_AT_DEPOSIT",
    "fidNumber": 30743,
    "dataType": "LONG",
    "description": "Deposit Level Consumed Vol"
  },
  {
    "fieldName": "TQS_USE_SETTINGS",
    "fidNumber": 30744,
    "dataType": "LONG",
    "description": "Use ticket quantity settings"
  },
  {
    "fieldName": "TQS_ROUND_LOT",
    "fidNumber": 30745,
    "dataType": "LONG",
    "description": "Ticket quantity: round lot"
  },
  {
    "fieldName": "TQS_VOLUME_TYPE",
    "fidNumber": 30746,
    "dataType": "LONG",
    "description": "Ticket quantity: volume type"
  },
  {
    "fieldName": "TQS_VOLUME",
    "fidNumber": 30747,
    "dataType": "LONG",
    "description": "Ticket quantity: volume"
  },
  {
    "fieldName": "TQS_PERCENTAGE",
    "fidNumber": 30748,
    "dataType": "LONG",
    "description": "Ticket quantity: percentage"
  },
  {
    "fieldName": "NOTIONAL_AMOUNT",
    "fidNumber": 30749,
    "dataType": "DOUBLE",
    "description": "Notional Amount"
  },
  {
    "fieldName": "NOTIONAL_CONSUMED",
    "fidNumber": 30750,
    "dataType": "DOUBLE",
    "description": "Notional Consumed"
  },
  {
    "fieldName": "MAX_OPEN_ORDERS",
    "fidNumber": 30751,
    "dataType": "LONG",
    "description": "Max Open Orders"
  },
  {
    "fieldName": "CURR_OPEN_ORDERS",
    "fidNumber": 30752,
    "dataType": "LONG",
    "description": "Current Open Orders"
  },
  {
    "fieldName": "NOTIONAL_TARGET",
    "fidNumber": 30753,
    "dataType": "DOUBLE",
    "description": "NOTIONAL_TARGET"
  },
  {
    "fieldName": "NOTIONAL_PROGRESS",
    "fidNumber": 30754,
    "dataType": "DOUBLE",
    "description": "NOTIONAL_PROGRESS"
  },
  {
    "fieldName": "NOTIONAL_RESIDUAL",
    "fidNumber": 30755,
    "dataType": "DOUBLE",
    "description": "Notional Remaining"
  },
  {
    "fieldName": "NOTIONAL_ORDER_FLAG",
    "fidNumber": 30756,
    "dataType": "INT",
    "description": "T_NOTIONAL_ORDER_FLAG"
  },
  {
    "fieldName": "LEG_ORIG_CANCEL_ID",
    "fidNumber": 30757,
    "dataType": "STRING",
    "description": "LEG_ORIG_CANCEL_ID"
  },
  {
    "fieldName": "RELATED_CANCEL",
    "fidNumber": 30758,
    "dataType": "STRING",
    "description": "RELATED_CANCEL"
  },
  {
    "fieldName": "BYPASS_INDICATOR",
    "fidNumber": 30759,
    "dataType": "INT",
    "description": "Bypass Indicator"
  },
  {
    "fieldName": "ODD_LOT_INDICATOR",
    "fidNumber": 30760,
    "dataType": "INT",
    "description": "Odd lot Indicator"
  },
  {
    "fieldName": "CLAIMING_FLAGS",
    "fidNumber": 30761,
    "dataType": "LONG",
    "description": "Claiming Flags"
  },
  {
    "fieldName": "NOTIONAL_AMT_CRY_EXCH",
    "fidNumber": 30762,
    "dataType": "DOUBLE",
    "description": "Notional Amount from Crypto Exchange"
  },
  {
    "fieldName": "SYNTHETIC_SPREAD_TYPE",
    "fidNumber": 30800,
    "dataType": "LONG",
    "description": "Spread strategy"
  },
  {
    "fieldName": "SYNTHETIC_SPREAD_CASH",
    "fidNumber": 30801,
    "dataType": "DOUBLE",
    "description": "spread_cash"
  },
  {
    "fieldName": "SPREAD_WAVE_PRICE_ADJ",
    "fidNumber": 30802,
    "dataType": "DOUBLE",
    "description": "SPREAD_WAVE_PRICE_ADJ"
  },
  {
    "fieldName": "SPREAD_LEG_IGNORE_DEPTH",
    "fidNumber": 30803,
    "dataType": "LONG",
    "description": "SPREAD_LEG_IGNORE_DEPTH"
  },
  {
    "fieldName": "SPREAD_LEG_ROUTE",
    "fidNumber": 30804,
    "dataType": "STRING",
    "description": "SPREAD_LEG_ROUTE"
  },
  {
    "fieldName": "SPREAD_LEG_OUT_ACTION",
    "fidNumber": 30805,
    "dataType": "LONG",
    "description": "SPREAD_LEG_OUT_ACTION"
  },
  {
    "fieldName": "SPREAD_LIQ_LEG_PAYUP_DELTA",
    "fidNumber": 30806,
    "dataType": "DOUBLE",
    "description": "SPREAD_LIQ_LEG_PAYUP_DELTA"
  },
  {
    "fieldName": "SPREAD_LIQ_LEG_DEPTH_MULT",
    "fidNumber": 30807,
    "dataType": "DOUBLE",
    "description": "SPREAD_LIQ_LEG_DEPTH_MULT"
  },
  {
    "fieldName": "SPREAD_LEG_MAX_TRADED_VOLUME_PCT",
    "fidNumber": 30808,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_MAX_TRADED_VOLUME_PCT"
  },
  {
    "fieldName": "SPREAD_LEG_CONSIDER_OWN_ORDERS",
    "fidNumber": 30809,
    "dataType": "LONG",
    "description": "SPREAD_LEG_CONSIDER_OWN_ORDERS"
  },
  {
    "fieldName": "SPREAD_LEG_QUOTE_MAX_AGGRESSION",
    "fidNumber": 30810,
    "dataType": "LONG",
    "description": "SPREAD_LEG_QUOTE_MAX_AGGRESSION"
  },
  {
    "fieldName": "SPREAD_LEG_FILL_TRIG_PCT",
    "fidNumber": 30811,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_FILL_TRIG_PCT"
  },
  {
    "fieldName": "SPREAD_LEG_QUOTE_TOLERANCE_PCT",
    "fidNumber": 30812,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_QUOTE_TOLERANCE_PCT"
  },
  {
    "fieldName": "SPREAD_LEG_REQUOTE_THRSHLD_PCT",
    "fidNumber": 30813,
    "dataType": "DOUBLE",
    "description": "SPREAD_LEG_REQUOTE_THRSHLD_PCT"
  },
  {
    "fieldName": "SPREAD_CLIP",
    "fidNumber": 30814,
    "dataType": "DOUBLE",
    "description": "SPREAD_CLIP"
  },
  {
    "fieldName": "SPREAD_CLIP_TYPE",
    "fidNumber": 30815,
    "dataType": "LONG",
    "description": "SPREAD_CLIP_TYPE"
  },
  {
    "fieldName": "EXTERNAL_COMPLIANCE_BYPASS_FLAG",
    "fidNumber": 30824,
    "dataType": "STRING",
    "description": "Eze Compliance bypass flags"
  },
  {
    "fieldName": "EXTERNAL_ACCEPTANCE_FLAG",
    "fidNumber": 30825,
    "dataType": "LONG",
    "description": "ACCEPTANCE_FLAG"
  },
  {
    "fieldName": "EXTERNAL_ACCEPTANCE_DEST",
    "fidNumber": 30826,
    "dataType": "STRING",
    "description": "ACCEPTANCE_DEST"
  },
  {
    "fieldName": "EXTERNAL_ACCEPTANCE_TIMEOUT",
    "fidNumber": 30827,
    "dataType": "LONG",
    "description": "ACCEPTANCE_TIMEOUT"
  },
  {
    "fieldName": "TS_WORKFLOW_FLAG",
    "fidNumber": 30828,
    "dataType": "LONG",
    "description": "TS_WORKFLOW_FLAG"
  },
  {
    "fieldName": "TS_CURRENCY_RATIO",
    "fidNumber": 30829,
    "dataType": "DOUBLE",
    "description": "TS_CURRENCY_RATIO"
  },
  {
    "fieldName": "SPREAD_LEG_ROUTE_SUBROUTE",
    "fidNumber": 30830,
    "dataType": "STRING",
    "description": "LEG_ROOUTE_SUBRPOUTE"
  },
  {
    "fieldName": "ADR_STATUS",
    "fidNumber": 30831,
    "dataType": "STRING",
    "description": "ADR_STATUS"
  },
  {
    "fieldName": "ADR_PLUS_FLAG",
    "fidNumber": 30832,
    "dataType": "STRING",
    "description": "ADR_PLUS_FLAG"
  },
  {
    "fieldName": "ADR_TYPE",
    "fidNumber": 30833,
    "dataType": "LONG",
    "description": "ADR_TYPE"
  },
  {
    "fieldName": "ADR_AVG_PRICE",
    "fidNumber": 30834,
    "dataType": "LPACK",
    "description": "ADR_AVG_PRICE"
  },
  {
    "fieldName": "ADR_PRINCIPAL",
    "fidNumber": 30835,
    "dataType": "LPACK",
    "description": "ADR_PRINCIPAL"
  },
  {
    "fieldName": "ADR_STAMP_DUTY",
    "fidNumber": 30836,
    "dataType": "LPACK",
    "description": "ADR_STAMP_DUTY"
  },
  {
    "fieldName": "ADR_LOCAL_FEE",
    "fidNumber": 30837,
    "dataType": "LPACK",
    "description": "ADR_LOCAL_FEE"
  },
  {
    "fieldName": "ADR_MARKET_FEE",
    "fidNumber": 30838,
    "dataType": "LPACK",
    "description": "ADR_MARKET_FEE"
  },
  {
    "fieldName": "ADR_CLIENT_FEE",
    "fidNumber": 30839,
    "dataType": "LPACK",
    "description": "ADR_CLIENT_FEE"
  },
  {
    "fieldName": "ADR_CLIENT_COMM",
    "fidNumber": 30840,
    "dataType": "LPACK",
    "description": "ADR_CLIENT_COMM"
  },
  {
    "fieldName": "ADR_NET_MONEY",
    "fidNumber": 30841,
    "dataType": "LPACK",
    "description": "ADR_NET_MONEY"
  },
  {
    "fieldName": "ADR_NET_PRICE",
    "fidNumber": 30842,
    "dataType": "LPACK",
    "description": "ADR_NET_PRICE"
  },
  {
    "fieldName": "ADR_DISPLAY_DATA",
    "fidNumber": 30843,
    "dataType": "STRING",
    "description": "ADR_DISPLAY_DATA"
  },
  {
    "fieldName": "ADR_FX_RATE",
    "fidNumber": 30844,
    "dataType": "LPACK",
    "description": "ADR_FX_RATE"
  },
  {
    "fieldName": "ADR_IS_AGG",
    "fidNumber": 30845,
    "dataType": "STRING",
    "description": "ADR_IS_AGG"
  },
  {
    "fieldName": "ADR_CONV_TYPE",
    "fidNumber": 30846,
    "dataType": "STRING",
    "description": "ADR_CONV_TYPE"
  },
  {
    "fieldName": "ADR_RATIO",
    "fidNumber": 30847,
    "dataType": "STRING",
    "description": "ADR_RATIO"
  },
  {
    "fieldName": "ADR_ORDER_ID",
    "fidNumber": 30848,
    "dataType": "STRING",
    "description": "ADR_ORDER_ID"
  },
  {
    "fieldName": "ADR_FX_ORDER_ID",
    "fidNumber": 30849,
    "dataType": "STRING",
    "description": "ADR_FX_ORDER_ID"
  },
  {
    "fieldName": "ADR_ORD_MKT",
    "fidNumber": 30850,
    "dataType": "STRING",
    "description": "ADR_ORD_MKT"
  },
  {
    "fieldName": "ADR_VOLUME",
    "fidNumber": 30851,
    "dataType": "LONG",
    "description": "ADR_VOLUME"
  },
  {
    "fieldName": "ORD_SYMBOL",
    "fidNumber": 30852,
    "dataType": "STRING",
    "description": "ORD_SYMBOL"
  },
  {
    "fieldName": "ADR_SYMBOL",
    "fidNumber": 30853,
    "dataType": "STRING",
    "description": "ADR_SYMBOL"
  },
  {
    "fieldName": "UI_TOKEN",
    "fidNumber": 30854,
    "dataType": "STRING",
    "description": "UI_TOKEN"
  },
  {
    "fieldName": "ADR_ROUND_LOT_SIZE",
    "fidNumber": 30855,
    "dataType": "LONG",
    "description": "ADR_ROUND_LOT_SIZE"
  },
  {
    "fieldName": "ADR_ROUND_LOT_QTY",
    "fidNumber": 30856,
    "dataType": "LONG",
    "description": "ADR_ROUND_LOT_QTY"
  },
  {
    "fieldName": "ADR_TO_TICKET",
    "fidNumber": 30857,
    "dataType": "STRING",
    "description": "ADR_TO_TICKET"
  },
  {
    "fieldName": "ADR_DELIVERY_DATE",
    "fidNumber": 30858,
    "dataType": "DATE",
    "description": "ADR_DELIVERY_DATE"
  },
  {
    "fieldName": "ADR_BANK_CABLE_FEE",
    "fidNumber": 30859,
    "dataType": "LPACK",
    "description": "ADR_BANK_CABLE_FEE"
  },
  {
    "fieldName": "OWNING_TRADER",
    "fidNumber": 30860,
    "dataType": "STRING",
    "description": "Owning Trader"
  },
  {
    "fieldName": "FLOW_TYPE_FLAG",
    "fidNumber": 30861,
    "dataType": "LONG",
    "description": "FLOW_TYPE_FLAG"
  },
  {
    "fieldName": "ADR_WORKING_QTY",
    "fidNumber": 30862,
    "dataType": "LONG",
    "description": "ADR_WORKING_QTY"
  },
  {
    "fieldName": "ADR_COMPLETED_QTY",
    "fidNumber": 30863,
    "dataType": "LONG",
    "description": "ADR_COMPLETED_QTY"
  },
  {
    "fieldName": "ADR_CONVERTED_QTY",
    "fidNumber": 30864,
    "dataType": "LONG",
    "description": "ADR_CONVERTED_QTY"
  },
  {
    "fieldName": "FLOWTYPE_BROKER",
    "fidNumber": 30865,
    "dataType": "STRING",
    "description": "hold flowtype and broker"
  },
  {
    "fieldName": "FUTURE_NEAR_DATE_STRING",
    "fidNumber": 30866,
    "dataType": "STRING",
    "description": "NEAR_MONTH"
  },
  {
    "fieldName": "FUTURE_NEAR_SIDE",
    "fidNumber": 30867,
    "dataType": "STRING",
    "description": "NEAR_MONTH_SIDE"
  },
  {
    "fieldName": "FUTURE_FAR_DATE_STRING",
    "fidNumber": 30868,
    "dataType": "STRING",
    "description": "NFAR_MONTH"
  },
  {
    "fieldName": "FUTURE_FAR_SIDE",
    "fidNumber": 30869,
    "dataType": "STRING",
    "description": "NFAR_MONTH_SIDE"
  },
  {
    "fieldName": "ADR_CLIENT_ENTITLEMENT_TYPE",
    "fidNumber": 30870,
    "dataType": "LONG",
    "description": "Client Entitlement"
  },
  {
    "fieldName": "BUNDLED_TICKETS",
    "fidNumber": 30871,
    "dataType": "STRING",
    "description": "BUNDLED_TICKETS"
  },
  {
    "fieldName": "BUNDLED_TICKET_ID",
    "fidNumber": 30872,
    "dataType": "STRING",
    "description": "BUNDLED_TICKET_ID"
  },
  {
    "fieldName": "VWAP_FLAGS ",
    "fidNumber": 30873,
    "dataType": "LONG",
    "description": "VWAP Flags"
  },
  {
    "fieldName": "SRV_VWAP",
    "fidNumber": 30874,
    "dataType": "DOUBLE",
    "description": "VWAP"
  },
  {
    "fieldName": "SRV_VWAP_VOL",
    "fidNumber": 30875,
    "dataType": "LONG",
    "description": "VWAP Vol"
  },
  {
    "fieldName": "ORDER_MKT_VWAP_DELTA",
    "fidNumber": 30876,
    "dataType": "DOUBLE",
    "description": "Order Mkt VWAP Delta"
  },
  {
    "fieldName": "EFFECTIVE_VWAP_UPDATE_TIME",
    "fidNumber": 30877,
    "dataType": "LONG",
    "description": "Last update time"
  },
  {
    "fieldName": "SPREAD_LEG_TO_CANCEL ",
    "fidNumber": 30878,
    "dataType": "LONG",
    "description": "SPREAD_LEG_TO_CANCEL"
  },
  {
    "fieldName": "IOI_COUNT",
    "fidNumber": 30879,
    "dataType": "LONG",
    "description": "Number of IOIs"
  },
  {
    "fieldName": "IOI_CLIENT_ID",
    "fidNumber": 30880,
    "dataType": "STRING",
    "description": "IOI Client ID"
  },
  {
    "fieldName": "IOI_EXPIRY_PRICE",
    "fidNumber": 30881,
    "dataType": "LPACK",
    "description": "IOI Expiry Price"
  },
  {
    "fieldName": "BUNDLED_TICKETS_ALLOCATED",
    "fidNumber": 30882,
    "dataType": "STRING",
    "description": "List of Bundled Tickets which are allocated (comma separated)"
  },
  {
    "fieldName": "OATS_FID_1",
    "fidNumber": 31001,
    "dataType": "STRING",
    "description": "Oats Fid 1"
  },
  {
    "fieldName": "OATS_FID_2",
    "fidNumber": 31002,
    "dataType": "STRING",
    "description": "Oats Fid 2"
  },
  {
    "fieldName": "OATS_FID_3",
    "fidNumber": 31003,
    "dataType": "STRING",
    "description": "Oats Fid 3"
  },
  {
    "fieldName": "OATS_FID_4",
    "fidNumber": 31004,
    "dataType": "STRING",
    "description": "Oats Fid 4"
  },
  {
    "fieldName": "OATS_FID_5",
    "fidNumber": 31005,
    "dataType": "STRING",
    "description": "Oats Fid 5"
  },
  {
    "fieldName": "REPORTING_INFO_1",
    "fidNumber": 31006,
    "dataType": "STRING",
    "description": "Reporting Info 1"
  },
  {
    "fieldName": "REPORTING_INFO_2",
    "fidNumber": 31007,
    "dataType": "STRING",
    "description": "Reporting Info 2"
  },
  {
    "fieldName": "COMPLIANCE_DELEGATE",
    "fidNumber": 31009,
    "dataType": "STRING",
    "description": "Compliance delegate"
  },
  {
    "fieldName": "EZE_OMS_MANAGER",
    "fidNumber": 31010,
    "dataType": "STRING",
    "description": "Manager Id in Eze OMS"
  },
  {
    "fieldName": "EZE_OMS_TRADER",
    "fidNumber": 31011,
    "dataType": "STRING",
    "description": "TRADER Id in Eze OMS"
  },
  {
    "fieldName": "EZE_OMS_TRADE_ID",
    "fidNumber": 31012,
    "dataType": "STRING",
    "description": "Id of staged order in Eze OMS"
  },
  {
    "fieldName": "COMPLIANCE_REQUEST_ID",
    "fidNumber": 31013,
    "dataType": "STRING",
    "description": "Id of compliance approval request"
  },
  {
    "fieldName": "OVERRIDE_COUNT",
    "fidNumber": 31014,
    "dataType": "LONG",
    "description": "Overrride count"
  },
  {
    "fieldName": "PENDING_OVERRIDE_COUNT",
    "fidNumber": 31015,
    "dataType": "LONG",
    "description": "Pending Override count"
  },
  {
    "fieldName": "COMPLIANCE_BLOB",
    "fidNumber": 31016,
    "dataType": "BLOB",
    "description": "Blob of compliance"
  },
  {
    "fieldName": "EZE_CV_VIOLATION_ID",
    "fidNumber": 31017,
    "dataType": "STRING",
    "description": "Eze compliance violation Id"
  },
  {
    "fieldName": "EZE_CV_VIOLATION_MESSAGE",
    "fidNumber": 31018,
    "dataType": "STRING",
    "description": "Eze compliance violation system message"
  },
  {
    "fieldName": "EZE_CV_ERROR_LEVEL",
    "fidNumber": 31019,
    "dataType": "LONG",
    "description": "Severity of Eze compliance violation"
  },
  {
    "fieldName": "EZE_CV_AMOUNT",
    "fidNumber": 31020,
    "dataType": "DOUBLE",
    "description": "Volume associated with compliance violation"
  },
  {
    "fieldName": "EZE_CV_RULE_NAME",
    "fidNumber": 31021,
    "dataType": "STRING",
    "description": "Name of compliance rule violated"
  },
  {
    "fieldName": "EZE_CV_OVERRIDE_COMMENT",
    "fidNumber": 31022,
    "dataType": "STRING",
    "description": "Free-form compliance override comment"
  },
  {
    "fieldName": "EZE_CV_PICKED_OVERRIDE_COMMENT",
    "fidNumber": 31023,
    "dataType": "STRING",
    "description": "Override comment picked from a user-defined list"
  },
  {
    "fieldName": "PARENT_BUYORSELL",
    "fidNumber": 31024,
    "dataType": "STRING",
    "description": "Side of parent staged ordert"
  },
  {
    "fieldName": "PARENT_PRICE_TYPE",
    "fidNumber": 31025,
    "dataType": "STRING",
    "description": "Price type of parent staged ordert"
  },
  {
    "fieldName": "PARENT_PRICE",
    "fidNumber": 31026,
    "dataType": "LPACK",
    "description": "Price of parent staged order"
  },
  {
    "fieldName": "PARENT_VOLUME",
    "fidNumber": 31027,
    "dataType": "LONG",
    "description": "Volume of parent staged orderr"
  },
  {
    "fieldName": "PARENT_GOOD_UNTIL",
    "fidNumber": 31028,
    "dataType": "STRING",
    "description": "Time-in-force of parent staged order"
  },
  {
    "fieldName": "EZE_CV_MESSAGE",
    "fidNumber": 31029,
    "dataType": "STRING",
    "description": "Details related to Eze compliance violation"
  },
  {
    "fieldName": "PARENT_ORDER_DATE",
    "fidNumber": 31030,
    "dataType": "DATE",
    "description": "Date that parent staged order was placedn"
  },
  {
    "fieldName": "PARENT_CLIENT_ORDER_ID",
    "fidNumber": 31031,
    "dataType": "STRING",
    "description": "Date that parent staged order was placedn"
  },
  {
    "fieldName": "PRE_COMPLIANCE_BLOB",
    "fidNumber": 31032,
    "dataType": "BLOB",
    "description": "TAL4 block containing pre-compliance-check errors"
  },
  {
    "fieldName": "EZE_OMS_PC_INFO_CODE",
    "fidNumber": 31033,
    "dataType": "LONG",
    "description": "type of pre-compliance error"
  },
  {
    "fieldName": "EZE_OMS_PC_INFO_DESC",
    "fidNumber": 31034,
    "dataType": "STRING",
    "description": "type ofdescription of pre-compliance error"
  },
  {
    "fieldName": "PRE_COMPLIANCE_ERRORS",
    "fidNumber": 31035,
    "dataType": "STRING",
    "description": "summary of errors that occurred prior to compliance check"
  },
  {
    "fieldName": "SELL_ORDER_MARKING_FLAG",
    "fidNumber": 31036,
    "dataType": "LONG",
    "description": "SELL_ORDER_MARKING_FLAG"
  },
  {
    "fieldName": "FIX_ORIGINAL_SYMBOL",
    "fidNumber": 31037,
    "dataType": "STRING",
    "description": "FIX_ORIGINAL_SYMBOL"
  },
  {
    "fieldName": "ORDER_CLONE_FLAG",
    "fidNumber": 31038,
    "dataType": "LONG",
    "description": "ORDER_CLONE_FLAG"
  },
  {
    "fieldName": "ORDER_CLONE_EXCLUDE",
    "fidNumber": 31039,
    "dataType": "STRING",
    "description": "ORDER_CLONE_EXCLUDE"
  },
  {
    "fieldName": "BROKER_CODE",
    "fidNumber": 31040,
    "dataType": "STRING",
    "description": "Broker Code"
  },
  {
    "fieldName": "ORDER_CLONE_PARENT_ID ",
    "fidNumber": 31041,
    "dataType": "STRING",
    "description": "ORDER_CLONE_PARENT_ID"
  },
  {
    "fieldName": "EXCHANGE_EXPIRY_OFFSET",
    "fidNumber": 31042,
    "dataType": "INT",
    "description": "EXCHANGE_EXPIRY_OFFS"
  },
  {
    "fieldName": "ORDER_MARKING_MESSAGE",
    "fidNumber": 31043,
    "dataType": "STRING",
    "description": "ORDER_MARKING_MESSAGE"
  },
  {
    "fieldName": "TS_USER_MESSAGE",
    "fidNumber": 31044,
    "dataType": "STRING",
    "description": "OTS_USER_MESSAGE"
  },
  {
    "fieldName": "SFD_OFFSET",
    "fidNumber": 31045,
    "dataType": "LONG",
    "description": "Offset in minutes for Exchange Report Start for Day"
  },
  {
    "fieldName": "DFD_OFFSET",
    "fidNumber": 31046,
    "dataType": "LONG",
    "description": "Offset in minutes for DFD"
  },
  {
    "fieldName": "OPEN_TIME_OFFSET",
    "fidNumber": 31047,
    "dataType": "LONG",
    "description": "OPEN_TIME_OFFSET"
  },
  {
    "fieldName": "CLOSE_TIME_OFFSET",
    "fidNumber": 31048,
    "dataType": "LONG",
    "description": "CLOSE_TIME_OFFSET"
  },
  {
    "fieldName": "UPDATING_ACTION_TYPE",
    "fidNumber": 31051,
    "dataType": "LONG",
    "description": "UPDATING_ACTION_TYPE"
  },
  {
    "fieldName": "SERVER_MESG",
    "fidNumber": 31052,
    "dataType": "STRING",
    "description": "SERVER_MESG"
  },
  {
    "fieldName": "EXCH_SESSION",
    "fidNumber": 31053,
    "dataType": "STRING",
    "description": "SESSION"
  },
  {
    "fieldName": "CAL_SPREAD_FLAG",
    "fidNumber": 31054,
    "dataType": "LONG",
    "description": "CAL_SPREAD_FLAG"
  },
  {
    "fieldName": "COMMISSION_ADJ_NOTIONAL_VAL",
    "fidNumber": 31055,
    "dataType": "LONG",
    "description": "COMMISSION_ADJ_NOTIONAL_VAL"
  },
  {
    "fieldName": "ORDER_MARKING_FLAG",
    "fidNumber": 31056,
    "dataType": "LONG",
    "description": "ORDER_MARKING_FLAG"
  },
  {
    "fieldName": "CVGX_ID",
    "fidNumber": 31057,
    "dataType": "STRING",
    "description": "CVGX_ID"
  },
  {
    "fieldName": "UTC_TRD_DATE",
    "fidNumber": 31058,
    "dataType": "DATE",
    "description": "UTC_TRD_DATE"
  },
  {
    "fieldName": "MARKET_TRD_DATE",
    "fidNumber": 31059,
    "dataType": "DATE",
    "description": "MARKET_TRD_DATE"
  },
  {
    "fieldName": "SPREAD_CHILD_SUMMARY",
    "fidNumber": 31060,
    "dataType": "STRING",
    "description": "Child order summary"
  },
  {
    "fieldName": "SPREAD_CHILD_DETAILS",
    "fidNumber": 31061,
    "dataType": "STRING",
    "description": "Child order details"
  },
  {
    "fieldName": "SPREAD_LEG_CHILD_PRICE",
    "fidNumber": 31062,
    "dataType": "LPACK",
    "description": "Child order price"
  },
  {
    "fieldName": "SPREAD_LEG_CHILD_QTY",
    "fidNumber": 31063,
    "dataType": "LONG",
    "description": "Child order quantity"
  },
  {
    "fieldName": "SPREAD_LEG_CHILD_VOL_TRADED",
    "fidNumber": 31064,
    "dataType": "LONG",
    "description": "Child volume traded"
  },
  {
    "fieldName": "SPREAD_LEG_CHILD_AVG_PRICE",
    "fidNumber": 31065,
    "dataType": "DOUBLE",
    "description": "Child avg price"
  },
  {
    "fieldName": "SPREAD_LEG_VOL_TRADED_CLIP",
    "fidNumber": 31066,
    "dataType": "LONG",
    "description": "Qty Traded in Clip"
  },
  {
    "fieldName": "SPREAD_LEG_AVG_PRICE_CLIP",
    "fidNumber": 31067,
    "dataType": "DOUBLE",
    "description": "Avg price in clip"
  },
  {
    "fieldName": "SPREAD_CHILD_PRICE_DETAILS",
    "fidNumber": 31068,
    "dataType": "STRING",
    "description": "Price calculation details"
  },
  {
    "fieldName": "SPREAD_CHILD_VOL_IMBALANCE",
    "fidNumber": 31069,
    "dataType": "STRING",
    "description": "Pair share imbalance"
  },
  {
    "fieldName": "SPREAD_LEG_CHILD_STATUS",
    "fidNumber": 31070,
    "dataType": "STRING",
    "description": "Leg Status"
  },
  {
    "fieldName": "CVGX_REPL_STAGED_ORDER_INFO",
    "fidNumber": 31071,
    "dataType": "STRING",
    "description": "CVGX_REPL_STAGED_ORDER_INFO"
  },
  {
    "fieldName": "CVGX_REPL_STAGED_ORDER_FLAGS",
    "fidNumber": 31072,
    "dataType": "LONG",
    "description": "CVGX_REPL_STAGED_ORDER_FLAG"
  },
  {
    "fieldName": "LIQUIDNET_CROSS_ORDER",
    "fidNumber": 31073,
    "dataType": "LONG",
    "description": "LiquidNet cross order"
  },
  {
    "fieldName": "REMOTE_TICKET_ID",
    "fidNumber": 31074,
    "dataType": "STRING",
    "description": "Remote Ticket ID"
  },
  {
    "fieldName": "START_SESSION",
    "fidNumber": 31075,
    "dataType": "STRING",
    "description": "START_SESSION"
  },
  {
    "fieldName": "END_SESSION",
    "fidNumber": 31076,
    "dataType": "STRING",
    "description": "END_SESSION"
  },
  {
    "fieldName": "GOOD_FROM_OFFSET",
    "fidNumber": 31077,
    "dataType": "LONG",
    "description": "T_GOOD_FROM_OFFSET"
  },
  {
    "fieldName": "SHORT_LOCATE_RATE",
    "fidNumber": 31078,
    "dataType": "DOUBLE",
    "description": "Short Locate Rate"
  },
  {
    "fieldName": "SENT_TIME",
    "fidNumber": 31079,
    "dataType": "STRING",
    "description": "Sent Time"
  },
  {
    "fieldName": "GTD_CONVERSION_OFFSET",
    "fidNumber": 31080,
    "dataType": "LONG",
    "description": "GTD_CONVERSION_OFFSE"
  },
  {
    "fieldName": "OMS_TRADERS",
    "fidNumber": 31081,
    "dataType": "STRING_VECTOR",
    "description": "OMS Trader List"
  },
  {
    "fieldName": "OMS_MANAGERS",
    "fidNumber": 31082,
    "dataType": "STRING_VECTOR",
    "description": "OMS Manager List"
  },
  {
    "fieldName": "OMS_CUSTODIANS",
    "fidNumber": 31083,
    "dataType": "STRING_VECTOR",
    "description": "OMS Custodian List"
  },
  {
    "fieldName": "OMS_STRATEGIES_1",
    "fidNumber": 31084,
    "dataType": "STRING_VECTOR",
    "description": "OMS Strategy1 List"
  },
  {
    "fieldName": "OMS_STRATEGIES_2",
    "fidNumber": 31085,
    "dataType": "STRING_VECTOR",
    "description": "OMS Strategy2 List"
  },
  {
    "fieldName": "COMPLIANCE_FLAGS",
    "fidNumber": 31086,
    "dataType": "LONG",
    "description": "Compliance-related bit map"
  },
  {
    "fieldName": "REQUEST_NAME",
    "fidNumber": 31087,
    "dataType": "STRING",
    "description": "Ref Data Type requested"
  },
  {
    "fieldName": "REPLY_NAME",
    "fidNumber": 31088,
    "dataType": "STRING",
    "description": "Reply Name"
  },
  {
    "fieldName": "REF_DATA_LIST",
    "fidNumber": 31089,
    "dataType": "STRING_VECTOR",
    "description": "Possible RefData values"
  },
  {
    "fieldName": "ORIGINAL_LIMIT_PRICE",
    "fidNumber": 31090,
    "dataType": "LPACK",
    "description": "Original staged order limit price"
  },
  {
    "fieldName": "BLOCK_POS_LAST",
    "fidNumber": 31091,
    "dataType": "LONG",
    "description": "BLOCK_POS_LAST"
  },
  {
    "fieldName": "BLOCK_ID_IN",
    "fidNumber": 31092,
    "dataType": "STRING",
    "description": "BLOCK_ID_IN"
  },
  {
    "fieldName": "SERVER_ARRIVAL_PRICE",
    "fidNumber": 31093,
    "dataType": "LPACK",
    "description": "Last Price"
  },
  {
    "fieldName": "APPROVAL_BATCH_TAG",
    "fidNumber": 31094,
    "dataType": "STRING",
    "description": "Last Price"
  },
  {
    "fieldName": "CUSTODIAN_ORDER_ID",
    "fidNumber": 31095,
    "dataType": "STRING",
    "description": "Track custodian orders"
  },
  {
    "fieldName": "BROKER_BLOB",
    "fidNumber": 31096,
    "dataType": "BLOB",
    "description": "OMS Broker orders"
  },
  {
    "fieldName": "BROKER_CLIENT_ID",
    "fidNumber": 31097,
    "dataType": "INT",
    "description": "Broker Client ID"
  },
  {
    "fieldName": "CUSTODIAN_ACCOUNT_ID",
    "fidNumber": 31098,
    "dataType": "INT",
    "description": "Custodian Account ID"
  },
  {
    "fieldName": "OMS_RESPONSE_ID",
    "fidNumber": 31099,
    "dataType": "STRING",
    "description": "Response ID for batch"
  },
  {
    "fieldName": "EZE_CV_RULE_ID",
    "fidNumber": 31100,
    "dataType": "STRING",
    "description": "Compliance Rule ID"
  },
  {
    "fieldName": "ORDER_MARKING_FLAGS",
    "fidNumber": 31101,
    "dataType": "LONG",
    "description": "ORDER_MARKING_FLAGS"
  },
  {
    "fieldName": "OM_SHORT_VOLUME",
    "fidNumber": 31102,
    "dataType": "LONG",
    "description": "OM_SHORT_VOLUME"
  },
  {
    "fieldName": "OM_SHORT_REFERS_TO",
    "fidNumber": 31103,
    "dataType": "STRING",
    "description": "OM_SHORT_REFERS_TO"
  },
  {
    "fieldName": "IOI_QLTY_IND",
    "fidNumber": 31104,
    "dataType": "STRING",
    "description": "Relative quality of indication"
  },
  {
    "fieldName": "IOI_QUALIFIERS",
    "fidNumber": 31105,
    "dataType": "LONG",
    "description": "IOI Qualifier"
  },
  {
    "fieldName": "IOI_PEG_DIFF",
    "fidNumber": 31106,
    "dataType": "LONG",
    "description": "IOI Peg Difference"
  },
  {
    "fieldName": "IOI_PEG_OFFSET_TYPE",
    "fidNumber": 31107,
    "dataType": "LONG",
    "description": "IOI Peg Offset Type"
  },
  {
    "fieldName": "IOI_ROUTABLE_TYPE",
    "fidNumber": 31108,
    "dataType": "LONG",
    "description": "IOI Routable Type"
  },
  {
    "fieldName": "BUYSIDE_BIC_CODE",
    "fidNumber": 31109,
    "dataType": "STRING",
    "description": "Buy Side BIC Code"
  },
  {
    "fieldName": "SELLSIDE_BIC_CODE",
    "fidNumber": 31110,
    "dataType": "STRING",
    "description": "Sell Side BIC Code"
  },
  {
    "fieldName": "FUND_ID",
    "fidNumber": 31111,
    "dataType": "LONG",
    "description": "FUND_ID"
  },
  {
    "fieldName": "EZE_OMS_TRADE_MERGED",
    "fidNumber": 31112,
    "dataType": "LONG",
    "description": "Merged Trade Indicator"
  },
  {
    "fieldName": "CUSTODIAN_SHORTABLE_CONSUMED",
    "fidNumber": 31113,
    "dataType": "LONG",
    "description": "Custodian Shortable Consumed"
  },
  {
    "fieldName": "CUSTODIAN_SHORTABLE_LOCATED",
    "fidNumber": 31114,
    "dataType": "LONG",
    "description": "Custodian Shortable Located"
  },
  {
    "fieldName": "BIDS_CROSS_ORDER",
    "fidNumber": 31115,
    "dataType": "LONG",
    "description": "BIDS cross order"
  },
  {
    "fieldName": "POSIT_CROSS_ORDER",
    "fidNumber": 31116,
    "dataType": "LONG",
    "description": "POSIT cross order"
  },
  {
    "fieldName": "POSIT_FLAGS",
    "fidNumber": 31117,
    "dataType": "LONG",
    "description": "POSIT Flags"
  },
  {
    "fieldName": "REF_DATA_REMOVED",
    "fidNumber": 31118,
    "dataType": "STRING_VECTOR",
    "description": "OMS reference data removed"
  },
  {
    "fieldName": "BIDS_FLAGS",
    "fidNumber": 31119,
    "dataType": "LONG",
    "description": "BIDS Flags"
  },
  {
    "fieldName": "CURRENT_LOCATED_VOLUME",
    "fidNumber": 31120,
    "dataType": "LONG",
    "description": "Current Located Short Volume"
  },
  {
    "fieldName": "THEORETICAL_LOCATED_VOLUME",
    "fidNumber": 31121,
    "dataType": "LONG",
    "description": "Theoretical Located Short Volume"
  },
  {
    "fieldName": "LUMINEX_CROSS_ORDER",
    "fidNumber": 31122,
    "dataType": "LONG",
    "description": "Luminex cross order"
  },
  {
    "fieldName": "LUMINEX_FLAGS",
    "fidNumber": 31123,
    "dataType": "LONG",
    "description": "Luminex flags"
  },
  {
    "fieldName": "SERVER_ARRIVAL_BID_ASK_PRICE",
    "fidNumber": 31124,
    "dataType": "LPACK",
    "description": "Arrival bid or ask"
  },
  {
    "fieldName": "LUMINEX_INTENT",
    "fidNumber": 31125,
    "dataType": "INT",
    "description": "Luminex Intent"
  },
  {
    "fieldName": "LIQUIDNET_FLAGS",
    "fidNumber": 31126,
    "dataType": "LONG",
    "description": "LiquidNet flags"
  },
  {
    "fieldName": "BLOCKCROSS_CROSS_ORDER",
    "fidNumber": 31127,
    "dataType": "LONG",
    "description": "BlockCross cross order"
  },
  {
    "fieldName": "BLOCKCROSS_FLAGS",
    "fidNumber": 31128,
    "dataType": "LONG",
    "description": "BlockCross Flags"
  },
  {
    "fieldName": "CROSS_PLACED_QTYS",
    "fidNumber": 31129,
    "dataType": "STRING",
    "description": "Placed quantities of all cross networks"
  },
  {
    "fieldName": "CROSS_LAST_COMTD_QTY",
    "fidNumber": 31130,
    "dataType": "LONG",
    "description": "Cross Last Updated Committed qty"
  },
  {
    "fieldName": "CROSS_TOT_EXPOSED_QTY",
    "fidNumber": 31131,
    "dataType": "LONG",
    "description": "Total Qty exposed to cross network"
  },
  {
    "fieldName": "CROSS_USO_UPD_EXEC_ID",
    "fidNumber": 31132,
    "dataType": "STRING",
    "description": "Exec ID of USO update request"
  },
  {
    "fieldName": "CROSS_MAX_LIMIT_PER_CNWS",
    "fidNumber": 31133,
    "dataType": "STRING",
    "description": "Max Shares Limit for all the cross networks pipe separated"
  },
  {
    "fieldName": "CROSS_SYNC_PLCD_EXEC_QTY",
    "fidNumber": 31134,
    "dataType": "LONG",
    "description": "Temporary FID to resync Placed and Executed Quantities of GTC orders placed 2020.6 or before"
  },
  {
    "fieldName": "JSON_STRING",
    "fidNumber": 31135,
    "dataType": "STRING",
    "description": "JSON String"
  },
  {
    "fieldName": "CTF_CHARGES_FEE",
    "fidNumber": 31150,
    "dataType": "DOUBLE",
    "description": "Charges/Fees"
  },
  {
    "fieldName": "CTF_LOCAL_TAX",
    "fidNumber": 31151,
    "dataType": "DOUBLE",
    "description": "Local Tax"
  },
  {
    "fieldName": "CTF_OTHER_AMOUNT",
    "fidNumber": 31152,
    "dataType": "DOUBLE",
    "description": "Other Amount"
  },
  {
    "fieldName": "CTF_TRANS_TAX",
    "fidNumber": 31153,
    "dataType": "DOUBLE",
    "description": "Transaction Tax"
  },
  {
    "fieldName": "CTF_VALUE_ADDED_TAX",
    "fidNumber": 31154,
    "dataType": "DOUBLE",
    "description": "Value Added Tax"
  },
  {
    "fieldName": "CTF_STAMP_DUTY",
    "fidNumber": 31155,
    "dataType": "DOUBLE",
    "description": "Stamp Duty"
  },
  {
    "fieldName": "CTF_NET_MONEY",
    "fidNumber": 31156,
    "dataType": "DOUBLE",
    "description": "Net Money"
  },
  {
    "fieldName": "CONDITION",
    "fidNumber": 31200,
    "dataType": "STRING",
    "description": "Condition to trigger events"
  },
  {
    "fieldName": "CONDITIONAL_ORDER_FLAGS",
    "fidNumber": 31201,
    "dataType": "LONG",
    "description": "Bit flags for conditional orders"
  },
  {
    "fieldName": "COND_LINK_VOLUME",
    "fidNumber": 31202,
    "dataType": "STRING",
    "description": "COND_LINK_VOLUME"
  },
  {
    "fieldName": "COND_COMPLETE_FILL",
    "fidNumber": 31203,
    "dataType": "STRING",
    "description": "COND_COMPLETE_FILL"
  },
  {
    "fieldName": "COND_PROMPT_ON_FAIL",
    "fidNumber": 31204,
    "dataType": "STRING",
    "description": "COND_PROMPT_ON_FAIL"
  },
  {
    "fieldName": "COND_CANCEL_ON_FAIL",
    "fidNumber": 31205,
    "dataType": "STRING",
    "description": "COND_CANCEL_ON_FAIL"
  },
  {
    "fieldName": "COND_TRIGGER_FAIL",
    "fidNumber": 31206,
    "dataType": "STRING",
    "description": "COND_TRIGGER_FAIL"
  },
  {
    "fieldName": "COND_LINK_TYPE",
    "fidNumber": 31207,
    "dataType": "STRING",
    "description": "COND_LINK_TYPE"
  },
  {
    "fieldName": "COND_USE_PERCENTAGE",
    "fidNumber": 31208,
    "dataType": "STRING",
    "description": "COND_USE_PERCENTAGE"
  },
  {
    "fieldName": "COND_PERCENTAGE",
    "fidNumber": 31209,
    "dataType": "STRING",
    "description": "COND_PERCENTAGE"
  },
  {
    "fieldName": "COND_TRIGGER_DETAILS",
    "fidNumber": 31210,
    "dataType": "STRING",
    "description": "COND_TRIGGER_DETAILS"
  },
  {
    "fieldName": "COND_ROUND_LOTS",
    "fidNumber": 31211,
    "dataType": "STRING",
    "description": "COND_ROUND_LOTS"
  },
  {
    "fieldName": "COND_ROUND_DOWN",
    "fidNumber": 31212,
    "dataType": "STRING",
    "description": "COND_ROUND_DOWN"
  },
  {
    "fieldName": "COND_USE_CUSTOM_TRIGGER",
    "fidNumber": 31213,
    "dataType": "STRING",
    "description": "COND_USE_CUSTOM_TRIGGER"
  },
  {
    "fieldName": "COND_TRIGGER_DESC",
    "fidNumber": 31214,
    "dataType": "STRING",
    "description": "Trigger Details"
  },
  {
    "fieldName": "COND_TRIGGER_CONFIG",
    "fidNumber": 31215,
    "dataType": "BLOB",
    "description": "COND_TRIGGER_CONFIG"
  },
  {
    "fieldName": "COND_TRIGGER",
    "fidNumber": 31216,
    "dataType": "BLOB",
    "description": "COND_TRIGGER"
  },
  {
    "fieldName": "CVGX_ORIG_ORDER_ID",
    "fidNumber": 31217,
    "dataType": "STRING",
    "description": "Orig Convergex Order ID"
  },
  {
    "fieldName": "RULE_PORTFOLIO",
    "fidNumber": 31300,
    "dataType": "STRING",
    "description": "EZE COMPLIANCE RULE PORTFOLIO"
  },
  {
    "fieldName": "SI_FLAG",
    "fidNumber": 31313,
    "dataType": "STRING",
    "description": "SI Flag"
  },
  {
    "fieldName": "PARTY_ID_EXECUTION_VENUE",
    "fidNumber": 31314,
    "dataType": "STRING",
    "description": "Party ID Execution Venue"
  },
  {
    "fieldName": "VENUE_TRANS_ID",
    "fidNumber": 31315,
    "dataType": "STRING",
    "description": "Venue Transaction Id"
  },
  {
    "fieldName": "TRD_PRICE_CONDS",
    "fidNumber": 31316,
    "dataType": "STRING",
    "description": "Trade Price Conditions"
  },
  {
    "fieldName": "TRD_REG_PUB_REASONS",
    "fidNumber": 31317,
    "dataType": "STRING",
    "description": "Trade Reg Publication Reasons"
  },
  {
    "fieldName": "DEFERRAL_FLAGS",
    "fidNumber": 31318,
    "dataType": "STRING",
    "description": "Deferral Flags"
  },
  {
    "fieldName": "PARTY_ID_CONTRA_FIRM",
    "fidNumber": 31319,
    "dataType": "STRING",
    "description": "Party ID Contra Firm"
  },
  {
    "fieldName": "PARTY_ID_CLEARING_ORG",
    "fidNumber": 31320,
    "dataType": "STRING",
    "description": "Party ID Clearing Org"
  },
  {
    "fieldName": "PARTY_ID_EXCH",
    "fidNumber": 31321,
    "dataType": "STRING",
    "description": "Party ID Exchange"
  },
  {
    "fieldName": "CUSTOM_ALGO_1",
    "fidNumber": 31350,
    "dataType": "STRING",
    "description": "Custom Algo Field 1"
  },
  {
    "fieldName": "CUSTOM_ALGO_2",
    "fidNumber": 31351,
    "dataType": "STRING",
    "description": "Custom Algo Field 2"
  },
  {
    "fieldName": "CUSTOM_ALGO_3",
    "fidNumber": 31352,
    "dataType": "STRING",
    "description": "Custom Algo Field 3"
  },
  {
    "fieldName": "CUSTOM_ALGO_4",
    "fidNumber": 31353,
    "dataType": "STRING",
    "description": "Custom Algo Field 4"
  },
  {
    "fieldName": "CUSTOM_ALGO_5",
    "fidNumber": 31354,
    "dataType": "STRING",
    "description": "Custom Algo Field 5"
  },
  {
    "fieldName": "CUSTOM_ALGO_6",
    "fidNumber": 31355,
    "dataType": "STRING",
    "description": "Custom Algo Field 6"
  },
  {
    "fieldName": "CUSTOM_ALGO_7",
    "fidNumber": 31356,
    "dataType": "STRING",
    "description": "Custom Algo Field 7"
  },
  {
    "fieldName": "CUSTOM_ALGO_8",
    "fidNumber": 31357,
    "dataType": "STRING",
    "description": "Custom Algo Field 8"
  },
  {
    "fieldName": "CUSTOM_ALGO_9",
    "fidNumber": 31358,
    "dataType": "STRING",
    "description": "Custom Algo Field 9"
  },
  {
    "fieldName": "CUSTOM_ALGO_10",
    "fidNumber": 31359,
    "dataType": "STRING",
    "description": "Custom Algo Field 10"
  },
  {
    "fieldName": "PAUSE_RESUME_FLAGS",
    "fidNumber": 31380,
    "dataType": "LONG",
    "description": "Pause/Resume flags"
  },
  {
    "fieldName": "RELATED_RESUME_ORDER_ID",
    "fidNumber": 31381,
    "dataType": "STRING",
    "description": "Related Resume Order ID"
  },
  {
    "fieldName": "OMGEO_ALERT_COUNTRY_CODE",
    "fidNumber": 31400,
    "dataType": "STRING",
    "description": "OMGEOAlert Country Code"
  },
  {
    "fieldName": "OMGEO_ALERT_METHOD_TYPE",
    "fidNumber": 31401,
    "dataType": "STRING",
    "description": "OMGEO Settlement Location"
  },
  {
    "fieldName": "OMGEO_ALERT_SECURITY_TYPE",
    "fidNumber": 31402,
    "dataType": "STRING",
    "description": "OMGEO Alert SecType"
  },
  {
    "fieldName": "OMGEO_ALERT_SETTLEMENT_MODEL",
    "fidNumber": 31403,
    "dataType": "STRING",
    "description": "OMGEO Alert Settlement Model Name"
  },
  {
    "fieldName": "JAWS_FLAG",
    "fidNumber": 31404,
    "dataType": "LONG",
    "description": "Allocation Flag"
  },
  {
    "fieldName": "SPREAD_LEG_1_BBG_CODE",
    "fidNumber": 31405,
    "dataType": "STRING",
    "description": "SPREAD_LEG_1_BBG_CODE"
  },
  {
    "fieldName": "SPREAD_LEG_2_BBG_CODE",
    "fidNumber": 31406,
    "dataType": "STRING",
    "description": "SPREAD_LEG_2_BBG_CODE"
  },
  {
    "fieldName": "SPREAD_LEG_3_BBG_CODE",
    "fidNumber": 31407,
    "dataType": "STRING",
    "description": "SPREAD_LEG_3_BBG_CODE"
  },
  {
    "fieldName": "SPREAD_LEG_4_BBG_CODE",
    "fidNumber": 31408,
    "dataType": "STRING",
    "description": "SPREAD_LEG_4_BBG_CODE"
  },
  {
    "fieldName": "SPREAD_LEG_5_BBG_CODE",
    "fidNumber": 31409,
    "dataType": "STRING",
    "description": "SPREAD_LEG_5_BBG_CODE"
  },
  {
    "fieldName": "IMS_SECURITY_ID",
    "fidNumber": 31500,
    "dataType": "LONG",
    "description": "IMS Security ID"
  },
  {
    "fieldName": "IMS_FIRM_ID",
    "fidNumber": 31501,
    "dataType": "LONG",
    "description": "IMS Firm ID"
  },
  {
    "fieldName": "IMS_PORTFOLIO_ID",
    "fidNumber": 31502,
    "dataType": "LONG",
    "description": "IMS Portfolio ID"
  },
  {
    "fieldName": "IMS_STRATEGY_ID",
    "fidNumber": 31503,
    "dataType": "LONG",
    "description": "IMS Strategy ID"
  },
  {
    "fieldName": "IMS_FIRM_NAME",
    "fidNumber": 31504,
    "dataType": "STRING",
    "description": "IMS Firm (tenant) name"
  },
  {
    "fieldName": "IMS_ROUTE_ID",
    "fidNumber": 31505,
    "dataType": "STRING",
    "description": "IMS Route ID"
  },
  {
    "fieldName": "CUSTODIAN_LIST_ORDER_ID",
    "fidNumber": 31506,
    "dataType": "STRING",
    "description": "Track custodian list orders"
  },
  {
    "fieldName": "FORNEX_ORIGINAL_ORDER",
    "fidNumber": 31507,
    "dataType": "STRING",
    "description": "Fornex Original Order"
  },
  {
    "fieldName": "FORNEX_SOURCE_FLAGS",
    "fidNumber": 31508,
    "dataType": "LONG",
    "description": "Fornex Source Flags"
  },
  {
    "fieldName": "IMS_FIRM_TOKEN",
    "fidNumber": 31509,
    "dataType": "STRING",
    "description": "IMS Firm Token"
  },
  {
    "fieldName": "IMS_TRADE_DATE",
    "fidNumber": 31510,
    "dataType": "DATE",
    "description": "IMS Trade Date"
  },
  {
    "fieldName": "ALLOC_VOLUME_PENDING",
    "fidNumber": 31511,
    "dataType": "LONG",
    "description": "Allocation Volume Pending"
  },
  {
    "fieldName": "ORIGINAL_TRADE_DATE",
    "fidNumber": 31512,
    "dataType": "DATE",
    "description": "Original Trade Date"
  },
  {
    "fieldName": "EXTENDED_STATE_FLAGS_2",
    "fidNumber": 31513,
    "dataType": "LONG",
    "description": "Extended State Flags 2"
  },
  {
    "fieldName": "NOTIFICATION_TYPE",
    "fidNumber": 31514,
    "dataType": "LONG",
    "description": "Notification Type"
  },
  {
    "fieldName": "NOTIFICATION_CODE",
    "fidNumber": 31515,
    "dataType": "LONG",
    "description": "Notification Code"
  },
  {
    "fieldName": "REF_PRICE",
    "fidNumber": 31516,
    "dataType": "LPACK",
    "description": "PRICE of updating message"
  },
  {
    "fieldName": "REF_TYPE",
    "fidNumber": 31517,
    "dataType": "STRING",
    "description": "TYPE of updating message"
  },
  {
    "fieldName": "REF_ORDER_ID",
    "fidNumber": 31518,
    "dataType": "STRING",
    "description": "ORDER_ID of updating message"
  },
  {
    "fieldName": "REF_VOLUME",
    "fidNumber": 31519,
    "dataType": "LONG",
    "description": "VOLUME of updating message"
  },
  {
    "fieldName": "T_DEPOSIT_FILL_ID",
    "fidNumber": 31520,
    "dataType": "STRING",
    "description": "EPOSIT_FILL_ID"
  },
  {
    "fieldName": "T_DEPOSIT_EXIT_VEHICLE",
    "fidNumber": 31521,
    "dataType": "STRING",
    "description": "DEPOSIT_EXIT_VEHICLE"
  },
  {
    "fieldName": "EXPIRY_FLAGS",
    "fidNumber": 31522,
    "dataType": "INT",
    "description": "EXPIRY_FLAGS"
  },
  {
    "fieldName": "KILL_DELAY_TIME",
    "fidNumber": 31523,
    "dataType": "INT",
    "description": "KILL_DELAY_TIME"
  },
  {
    "fieldName": "HOPPER_EXPIRY_OFFSET",
    "fidNumber": 31524,
    "dataType": "LONG",
    "description": "Order expiration offset"
  },
  {
    "fieldName": "URGENCY",
    "fidNumber": 31525,
    "dataType": "STRING",
    "description": "Urgency"
  },
  {
    "fieldName": "IMS_ORDER_ID",
    "fidNumber": 31526,
    "dataType": "STRING",
    "description": "IMS OrderId"
  },
  {
    "fieldName": "IMS_ENVIRONMENT",
    "fidNumber": 31527,
    "dataType": "STRING",
    "description": "IMS Environment"
  },
  {
    "fieldName": "IMS_USERNAME",
    "fidNumber": 31528,
    "dataType": "STRING",
    "description": "IMS Username"
  },
  {
    "fieldName": "IMS_TRADER_ID",
    "fidNumber": 31529,
    "dataType": "STRING",
    "description": "IMS User@Firm:Env"
  },
  {
    "fieldName": "IMS_FLAGS",
    "fidNumber": 31530,
    "dataType": "LONG",
    "description": "IMS Bit Flags"
  },
  {
    "fieldName": "ENHANCED_TRADE_DATE_START",
    "fidNumber": 31541,
    "dataType": "DATE",
    "description": "Enhanced trade date start"
  },
  {
    "fieldName": "ENHANCED_TRADE_DATE_STOP",
    "fidNumber": 31542,
    "dataType": "DATE",
    "description": "Enhanced trade date stop"
  },
  {
    "fieldName": "UNACKED_ID",
    "fidNumber": 31543,
    "dataType": "STRING",
    "description": "Unacked FillId for Bust"
  },
  {
    "fieldName": "PARTY_ID_PUB_INTERMEDIARY",
    "fidNumber": 31600,
    "dataType": "STRING",
    "description": "PartyIDPublishingIntermediary MIFID2"
  },
  {
    "fieldName": "ALG_TRD_IND",
    "fidNumber": 31601,
    "dataType": "LONG",
    "description": "AlgorithmicTradeIndicator MIFID2"
  },
  {
    "fieldName": "BROKER_LEI",
    "fidNumber": 31602,
    "dataType": "STRING",
    "description": "LEI from broker"
  },
  {
    "fieldName": "HANDLER_EXEC_ID",
    "fidNumber": 31603,
    "dataType": "STRING",
    "description": "Exec Id from Handler"
  },
  {
    "fieldName": "COUNTER_PARTY_LEI",
    "fidNumber": 31604,
    "dataType": "STRING",
    "description": "COUNTER_PARTY_LEI"
  },
  {
    "fieldName": "ACCOUNT_DELTA_UPDATE_TYPE",
    "fidNumber": 31605,
    "dataType": "LONG",
    "description": "Acct Delta Update Type"
  },
  {
    "fieldName": "PARTY_ID_RPT_INTERMEDIARY ",
    "fidNumber": 31606,
    "dataType": "STRING",
    "description": "MIFID2 Party ID Reporting Intermediary"
  },
  {
    "fieldName": "ORDER_ATTRIBUTE_TYPE",
    "fidNumber": 31607,
    "dataType": "STRING",
    "description": "Order Attribute Type"
  },
  {
    "fieldName": "TRD_TYPE",
    "fidNumber": 31608,
    "dataType": "STRING",
    "description": "Trade Type"
  },
  {
    "fieldName": "TRD_SUBTYPE",
    "fidNumber": 31609,
    "dataType": "STRING",
    "description": "Trade Subtype"
  },
  {
    "fieldName": "SECONDARY_TRD_TYPE",
    "fidNumber": 31610,
    "dataType": "STRING",
    "description": "Secondary Trade Type"
  },
  {
    "fieldName": "MATCH_TYPE",
    "fidNumber": 31611,
    "dataType": "STRING",
    "description": "Match Type"
  },
  {
    "fieldName": "TRD_RPT_IND",
    "fidNumber": 31612,
    "dataType": "STRING",
    "description": "Trade Reporting Indicator"
  },
  {
    "fieldName": "ORDER_ORIGINATION_FIRM",
    "fidNumber": 31613,
    "dataType": "STRING",
    "description": "Order origination firm"
  },
  {
    "fieldName": "PARTY_ID_CLIENT_ID",
    "fidNumber": 31614,
    "dataType": "STRING",
    "description": "PartyIDClientID"
  },
  {
    "fieldName": "TRD_REG_PUB_TYPE",
    "fidNumber": 31615,
    "dataType": "STRING",
    "description": "TrdRegPublicationType"
  },
  {
    "fieldName": "TRD_REG_PUB_REASON",
    "fidNumber": 31616,
    "dataType": "STRING",
    "description": "TrdRegPublicationReason"
  },
  {
    "fieldName": "EX_DEST_TYPE",
    "fidNumber": 31617,
    "dataType": "STRING",
    "description": "ExDestinationType"
  },
  {
    "fieldName": "TRD_PRICE_COND",
    "fidNumber": 31618,
    "dataType": "STRING",
    "description": "TradePriceCondition"
  },
  {
    "fieldName": "DEST_ACCT_ID",
    "fidNumber": 31619,
    "dataType": "LONG",
    "description": "DEST_ACCT_ID"
  },
  {
    "fieldName": "OMS_RBOR_ACK_BROKER",
    "fidNumber": 31620,
    "dataType": "STRING",
    "description": "RBOR_ACK_BROKER"
  },
  {
    "fieldName": "OMS_RBOR_ACK_EXEC",
    "fidNumber": 31621,
    "dataType": "STRING",
    "description": "RBOR_EXEC"
  },
  {
    "fieldName": "OMS_RBOR_ORDER",
    "fidNumber": 31622,
    "dataType": "STRING",
    "description": "RBOR_ORDER"
  },
  {
    "fieldName": "OMS_RBOR_ACK_FIX_IN",
    "fidNumber": 31623,
    "dataType": "STRING",
    "description": "RBOR_FIX"
  },
  {
    "fieldName": "UTC_GTD_EXPIRATION",
    "fidNumber": 31624,
    "dataType": "LONG",
    "description": "UTC expiration for GTD"
  },
  {
    "fieldName": "CANCEL_ORIGINATING_EVENT",
    "fidNumber": 31625,
    "dataType": "STRING",
    "description": "Cancel Originating Event"
  },
  {
    "fieldName": "CUSTOM_COMPLIANCE_FIELD_1",
    "fidNumber": 31626,
    "dataType": "STRING",
    "description": "Custom Compliance Field 1"
  },
  {
    "fieldName": "CUSTOM_COMPLIANCE_FIELD_2",
    "fidNumber": 31627,
    "dataType": "STRING",
    "description": "Custom Compliance Field 2"
  },
  {
    "fieldName": "CUSTOM_COMPLIANCE_FIELD_3",
    "fidNumber": 31628,
    "dataType": "STRING",
    "description": "Custom Compliance Field 3"
  },
  {
    "fieldName": "ALLOCATION_FUND_EXCLUSION_1",
    "fidNumber": 31629,
    "dataType": "STRING",
    "description": "Allocation Fund Exclusion 1"
  },
  {
    "fieldName": "ALLOCATION_FUND_EXCLUSION_2",
    "fidNumber": 31630,
    "dataType": "STRING",
    "description": "Allocation Fund Exclusion 2"
  },
  {
    "fieldName": "ALLOCATION_FUND_EXCLUSION_3",
    "fidNumber": 31631,
    "dataType": "STRING",
    "description": "Allocation Fund Exclusion 3"
  },
  {
    "fieldName": "ALLOCATION_FUND_EXCLUSION_4",
    "fidNumber": 31632,
    "dataType": "STRING",
    "description": "Allocation Fund Exclusion 4"
  },
  {
    "fieldName": "ALLOCATION_FUND_EXCLUSION_5",
    "fidNumber": 31633,
    "dataType": "STRING",
    "description": "Allocation Fund Exclusion 5"
  },
  {
    "fieldName": "CUSTOM_BASKET_TYPE",
    "fidNumber": 31634,
    "dataType": "STRING",
    "description": "CUSTOM BASKET TYPE"
  },
  {
    "fieldName": "COWBOY_ORDER_OLD_PRICE",
    "fidNumber": 31635,
    "dataType": "LPACK",
    "description": "Old Prc Cowboy Order"
  },
  {
    "fieldName": "COWBOY_ORDER_OLD_VOLUME",
    "fidNumber": 31636,
    "dataType": "LONG",
    "description": "Old Qty Cowboy Order"
  },
  {
    "fieldName": "COWBOY_ORDER_OLD_PRICE_TYPE",
    "fidNumber": 31637,
    "dataType": "LONG",
    "description": "Old PrcTyp Cowboy Order"
  },
  {
    "fieldName": "OMS_CALSPREAD_FILL_LEG",
    "fidNumber": 31638,
    "dataType": "INT",
    "description": "CALSPD_LEG_FLAG"
  },
  {
    "fieldName": "PREV_OMS_UDF_FIELDS",
    "fidNumber": 31639,
    "dataType": "STRING",
    "description": "Prev UDF Values"
  },
  {
    "fieldName": "COMPLIANCE_USER_OPTION_FLAGS",
    "fidNumber": 31640,
    "dataType": "LONG",
    "description": "Compliance User Options"
  },
  {
    "fieldName": "CURRENCY_CONV_RATE",
    "fidNumber": 31700,
    "dataType": "DOUBLE",
    "description": "Curr Conv Rate"
  },
  {
    "fieldName": "MSIXY_ID",
    "fidNumber": 31701,
    "dataType": "STRING",
    "description": "msIXY Test ID"
  },
  {
    "fieldName": "MSIXY_ORDER_ORIGIN",
    "fidNumber": 31702,
    "dataType": "LONG",
    "description": "msIXY Order Origin"
  },
  {
    "fieldName": "OEI_FLAGS",
    "fidNumber": 31703,
    "dataType": "LONG",
    "description": "OEI Flags"
  },
  {
    "fieldName": "MSIXY_FLAGS",
    "fidNumber": 31704,
    "dataType": "LONG",
    "description": "msIXY flags"
  },
  {
    "fieldName": "UCS_OPERATION",
    "fidNumber": 31750,
    "dataType": "STRING",
    "description": "UCS Operation"
  },
  {
    "fieldName": "UCS_TARGET",
    "fidNumber": 31751,
    "dataType": "STRING",
    "description": "UCS Target"
  },
  {
    "fieldName": "UCS_ALGO",
    "fidNumber": 31752,
    "dataType": "STRING",
    "description": "Algo Route"
  },
  {
    "fieldName": "UCS_GROUP",
    "fidNumber": 31753,
    "dataType": "STRING",
    "description": "UCS Group"
  },
  {
    "fieldName": "UCS_STRAT_VERSION",
    "fidNumber": 31754,
    "dataType": "LONG",
    "description": "Strategy Version"
  },
  {
    "fieldName": "UCS_STRAT_PARAMS",
    "fidNumber": 31755,
    "dataType": "BLOB",
    "description": "Saved Strategy"
  },
  {
    "fieldName": "UCS_STRAT_CREATED",
    "fidNumber": 31756,
    "dataType": "STRING",
    "description": "Strat Create Date"
  },
  {
    "fieldName": "UCS_STRAT_UPDATED",
    "fidNumber": 31757,
    "dataType": "STRING",
    "description": "Strat Update Date"
  },
  {
    "fieldName": "UCS_ERROR_CODE",
    "fidNumber": 31758,
    "dataType": "LONG",
    "description": "UCS Error Code"
  },
  {
    "fieldName": "UCS_ERROR_MESSAGE",
    "fidNumber": 31759,
    "dataType": "STRING",
    "description": "UCS Error Message"
  },
  {
    "fieldName": "BROKER_CLIENT_NAME",
    "fidNumber": 31760,
    "dataType": "STRING",
    "description": "Broker Client Name"
  },
  {
    "fieldName": "UCS_FIRM_NAME",
    "fidNumber": 31761,
    "dataType": "STRING",
    "description": "UCS Firm"
  },
  {
    "fieldName": "FIRM_DESIGNATED_ID",
    "fidNumber": 31762,
    "dataType": "STRING",
    "description": "Firm Designated ID"
  },
  {
    "fieldName": "SAVED_STRATEGY_STRING_ID",
    "fidNumber": 31763,
    "dataType": "STRING",
    "description": "Saved Strategy String ID"
  },
  {
    "fieldName": "TICKET_CLIENT_TYPE",
    "fidNumber": 31764,
    "dataType": "LONG",
    "description": "Ticket Client Type"
  },
  {
    "fieldName": "AUTO_TRADING_STATUS",
    "fidNumber": 31765,
    "dataType": "INT",
    "description": "Auto Trading Status"
  },
  {
    "fieldName": "ROUTED_BY_RULE",
    "fidNumber": 31766,
    "dataType": "STRING",
    "description": "Routed by Rule"
  },
  {
    "fieldName": "AVAT_20",
    "fidNumber": 31767,
    "dataType": "DOUBLE",
    "description": "20 Day AVAT"
  },
  {
    "fieldName": "PREV_OMS_FIELDS",
    "fidNumber": 31768,
    "dataType": "STRING",
    "description": "Previous OMS Values"
  },
  {
    "fieldName": "OMS_TRADE_STATE",
    "fidNumber": 31769,
    "dataType": "STRING",
    "description": "OMS TradeStatusBreak"
  },
  {
    "fieldName": "WHEEL_DATA",
    "fidNumber": 31770,
    "dataType": "STRING",
    "description": "Wheel Data"
  },
  {
    "fieldName": "ALGO_WHEEL_ID",
    "fidNumber": 31771,
    "dataType": "STRING",
    "description": "Algo wheel ID"
  },
  {
    "fieldName": "AGGREGATE_ORDER_FLAGS",
    "fidNumber": 31772,
    "dataType": "LONG",
    "description": "Denotes whether the order to be aggregated"
  },
  {
    "fieldName": "ALLOCATION_SCHEME",
    "fidNumber": 31773,
    "dataType": "STRING",
    "description": "Denotes the allocation scheme to be applied on the parent order"
  },
  {
    "fieldName": "ROUTED_BY_RULE_UUID",
    "fidNumber": 31774,
    "dataType": "STRING",
    "description": "Routed by Rule UUID"
  },
  {
    "fieldName": "AVG_PRC_TODAY_VOL_ADJ",
    "fidNumber": 31775,
    "dataType": "LONG",
    "description": "AvgPriceToday Qty adj"
  },
  {
    "fieldName": "AVG_PRC_TODAY_ADJ_DATE",
    "fidNumber": 31776,
    "dataType": "DATE",
    "description": "AvgPrcToday adj date"
  },
  {
    "fieldName": "AVG_PRC_TODAY_PRC_ADJ",
    "fidNumber": 31777,
    "dataType": "DOUBLE",
    "description": "AvgPrcToday Prc adj"
  },
  {
    "fieldName": "ACK_BLOB",
    "fidNumber": 31778,
    "dataType": "BLOB",
    "description": "Broker EAO"
  },
  {
    "fieldName": "WORKING_QTY_ADJUSTMENT",
    "fidNumber": 31779,
    "dataType": "LONG",
    "description": "Working Qty Adjustment"
  },
  {
    "fieldName": "JSON_DATA",
    "fidNumber": 31780,
    "dataType": "STRING",
    "description": "JSON data"
  },
  {
    "fieldName": "TRADESRV_ID",
    "fidNumber": 31781,
    "dataType": "LONG",
    "description": "TradeSrv ID"
  },
  {
    "fieldName": "TIME_ENQUEUED",
    "fidNumber": 31782,
    "dataType": "STRING",
    "description": "Time Enqueued"
  },
  {
    "fieldName": "TIME_DEQUEUED",
    "fidNumber": 31783,
    "dataType": "STRING",
    "description": "Time Dequeued"
  },
  {
    "fieldName": "AUTO_TRADING_FLAGS",
    "fidNumber": 31784,
    "dataType": "LONG",
    "description": "Auto Trading Flags"
  },
  {
    "fieldName": "INTRADAY_AGG_VOL",
    "fidNumber": 31785,
    "dataType": "LONG",
    "description": "Intraday Agg Vol"
  },
  {
    "fieldName": "BCAN_ID",
    "fidNumber": 31786,
    "dataType": "STRING",
    "description": "BCAN_ID"
  },
  {
    "fieldName": "AUTO_TRADING_EVALUATION_COUNT",
    "fidNumber": 31787,
    "dataType": "INT",
    "description": "AT Evaluation Count"
  },
  {
    "fieldName": "ORIGINAL_TIME",
    "fidNumber": 31788,
    "dataType": "TIME",
    "description": "Original Time"
  },
  {
    "fieldName": "ORIGINAL_DATE",
    "fidNumber": 31789,
    "dataType": "DATE",
    "description": "Original Date"
  },
  {
    "fieldName": "COMMISSION_FROM_BROKER",
    "fidNumber": 31790,
    "dataType": "DOUBLE",
    "description": "Commission From Broker"
  },
  {
    "fieldName": "GROUP_ID",
    "fidNumber": 31791,
    "dataType": "LONG",
    "description": "Group ID"
  }
];

export const seedFidMappings = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing to avoid duplicates on re-run
    const existing = await ctx.db.query("fidMappings").collect();
    for (const record of existing) {
      await ctx.db.delete(record._id);
    }

    // Insert all FID mappings in batches
    let count = 0;
    for (const fid of FID_DATA) {
      await ctx.db.insert("fidMappings", {
        fieldName: fid.fieldName,
        fidNumber: fid.fidNumber,
        dataType: fid.dataType,
        description: fid.description,
      });
      count++;
    }

    return { inserted: count };
  },
});