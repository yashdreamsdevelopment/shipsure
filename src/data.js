import EditNoteIcon from "@mui/icons-material/EditNote";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TouchAppIcon from "@mui/icons-material/TouchApp";

export const ORDERS_DATA_TAGS_MAP = {
  ANCHOR: "ANCHOR",
  PIN: "PIN",
  INFO: "INFO",
};

export const ORDERS_DATA = [
  {
    orderId: "4907-00019",
    clientName: "hotel/tech work squad gfr",
    serviceData: {
      type: "Services",
      date: "12 Jul 2019",
    },
    tags: [ORDERS_DATA_TAGS_MAP.ANCHOR],
    tagColor: "#008A25",
    profileText: "RT",
    accountCode: "5830042",
    accountHolderName: "HM PAX ACCOMODATION (LABOUR)",
  },
  {
    orderId: "5325-00034",
    clientName: "safety equipment - compulsory spares",
    serviceData: {
      type: "Consumables",
      date: "04 Mar 2020",
    },
    tags: [],
    tagColor: "#FF451A",
    profileText: "TQ",
  },
  {
    orderId: "4907-00038",
    clientName: "em spares for interstage filter unit",
    serviceData: {
      type: "Spares",
      date: "26 Jul 2022",
    },
    tags: [ORDERS_DATA_TAGS_MAP.PIN],
    tagColor: "#FF9F1D",
    profileText: "EQ",
  },
  {
    orderId: "5325-00040",
    clientName: "fuel.lube / air / water.seware system",
    serviceData: {
      type: "Spares",
      date: "20 Jul 2019",
    },
    tags: [ORDERS_DATA_TAGS_MAP.PIN, ORDERS_DATA_TAGS_MAP.ANCHOR],
    tagColor: "#008A25",
    profileText: "RT",
  },
  {
    orderId: "4907-00050",
    clientName: "hobart fx-a_sef vsp undercounter",
    serviceData: {
      type: "Spares",
      date: "21 Nov 2019",
    },
    tags: [ORDERS_DATA_TAGS_MAP.INFO],
    tagColor: "#008A25",
    profileText: "RT",
  },
  {
    orderId: "5325-00051",
    clientName: "external hard disk",
    serviceData: {
      type: "Spares",
      date: "20 Mar 2020",
    },
    tags: [],
    tagColor: "#008A25",
    profileText: "RT",
  },
];
