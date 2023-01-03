import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  boardTemplated: false,
  integratedWithSpark: false,
  templateFields: [
    {
      fieldName: "",
      id: 0,
    },
  ],
  id: 0,
};

export const {
  reducer,
  actions: {
    setBoardTemplated,
    setIntegratedWithSpark,
    setId,
    setTemplateFields,
  },
} = createSlice({
  name: "miro",
  initialState,
  reducers: {
    setBoardTemplated: (state) => ({
      ...state,
      searchVisible: !state.searchVisible,
    }),
    setIntegratedWithSpark: (state, action) => ({
      ...state,
      printType: action.payload,
    }),
    setId: (state, action) => ({
      ...state,
      productType: action.payload,
    }),
    setHistoryProductType: (state, action) => ({
      ...state,
      historyProductType: action.payload,
    }),

    setRunDate: (state, action) => ({
      ...state,
      runDate: action.payload,
    }),
    setTemplateFields: (state, action) => ({
      ...state,
      rangeValues: action.payload,
    }),
    setSequenceId: (state, action) => ({
      ...state,
      id: action.payload,
    }),
    setStartDate: (state, action) => ({
      ...state,
      startDate: action.payload,
    }),
    setEndDate: (state, action) => ({
      ...state,
      endDate: action.payload,
    }),
    setRequestor: (state, action) => ({
      ...state,
      requestor: action.payload,
    }),
    setSearchResults: (state, action) => ({
      ...state,
      searchResults: action.payload,
    }),
    setStatus: (state, action) => ({
      ...state,
      status: action.payload,
    }),
    setHistoryPageNumber: (state, action) => ({
      ...state,
      historyPageNumber: action.payload,
    }),
    setHistoryPageSize: (state, action) => ({
      ...state,
      historyPageSize: action.payload,
    }),
    setHistoryTotalPages: (state, action) => ({
      ...state,
      historyTotalPages: action.payload,
    }),
    setIsFirst: (state, action) => ({
      ...state,
      isFirst: action.payload,
    }),
    setIsLast: (state, action) => ({
      ...state,
      isLast: action.payload,
    }),
    setMailType: (state, action) => ({
      ...state,
      mailType: action.payload,
    }),
    setFilesForRetransmission: (state, action) => ({
      ...state,
      filesForRetransmission: action.payload,
    }),
    setFilesRequestedToRetransmit: (state, action) => ({
      ...state,
      filesRequestedToRetransmit: action.payload,
    }),
    setRetransmissionsByFilePageNumber: (state, action) => ({
      ...state,
      retransmissionsByFilePageNumber: action.payload,
    }),
    setRetransmissionsByFilePageSize: (state, action) => ({
      ...state,
      retransmissionsByFilePageSize: action.payload,
    }),
    setRetransmissionsByFileTotalPages: (state, action) => ({
      ...state,
      retransmissionsByFileTotalPages: action.payload,
    }),
    setDataAvailable: (state, action) => ({
      ...state,
      dataAvailable: action.payload,
    }),
    resetRetransmissionState: (state) => ({
      ...state,
      ...initialState,
    }),
    setExpandedRows: (state, action) => ({
      ...state,
      expandedRows: action.payload,
    }),
    setDateDisplay: (state, action) => ({
      ...state,
      dateDisplay: action.payload,
    }),
    setBillGroupDate: (state, action) => ({
      ...state,
      billGroupDate: action.payload,
    }),
    setWeight: (state, action) => ({
      ...state,
      weight: action.payload,
    }),
  },
});

export const getSearchVisible = (state) => state.retransmissions.searchVisible;
export const getFormData = (state) => ({
  printType: state.retransmissions.printType,
  productType: state.retransmissions.productType,
  historyProductType: state.retransmissions.historyProductType,
  runDate: state.retransmissions.runDate,
  rangeValues: state.retransmissions.rangeValues,
  status: state.retransmissions.status,
  endDate: state.retransmissions.endDate,
  startDate: state.retransmissions.startDate,
  requestor: state.retransmissions.requestor,
  mailType: state.retransmissions.mailType,
  filesRequestedToRetransmit: state.retransmissions.filesRequestedToRetransmit,
  dateDisplay: state.retransmissions.dateDisplay,
  billGroupDate: state.retransmissions.billGroupDate,
  weight: state.retransmissions.weight,
});

export const getExpandedRows = (state) => state.retransmissions.expandedRows;
export const getRangeValues = (state) => state.retransmissions.rangeValues;
export const getSequenceId = (state) => state.retransmissions.id;
export const getRetransmissionsData = (state) => state.retransmissions;
export const getStatus = (state) => state.retransmissions.status;
export const getSearchResults = (state) => state.retransmissions.searchResults;
export const getWeight = (state) => state.retransmissions.weight;

export const getFileRetransmissionsPageData = (state) => ({
  pageNumber: state.retransmissions.retransmissionsByFilePageNumber,
  pageSize: state.retransmissions.retransmissionsByFilePageSize,
  totalPages: state.retransmissions.retransmissionsByFileTotalPages,
  isFirst: state.retransmissions.isFirst,
  isLast: state.retransmissions.isLast,
});
export const getHistoryPageData = (state) => ({
  pageNumber: state.retransmissions.historyPageNumber,
  pageSize: state.retransmissions.historyPageSize,
  totalPages: state.retransmissions.historyTotalPages,
  isFirst: state.retransmissions.isFirst,
  isLast: state.retransmissions.isLast,
});
