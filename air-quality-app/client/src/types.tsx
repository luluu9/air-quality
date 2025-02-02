export type DataEntry = {time: string, value: number}
export type GraphData = DataEntry[]
export type GraphResponseData = {co: GraphData, no: GraphData, pm: GraphData}
export type TimePeriod = [string, string]